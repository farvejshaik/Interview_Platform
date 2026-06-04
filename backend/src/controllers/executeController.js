import { exec } from "child_process";
import { writeFileSync, unlinkSync, existsSync, mkdirSync } from "fs";
import { join } from "path";
import { tmpdir } from "os";
import { randomBytes } from "crypto";

const TIMEOUT = 10000;

function randomId() {
  return randomBytes(8).toString("hex");
}

function runCommand(command, stdin = "") {
  return new Promise((resolve) => {
    const child = exec(command, { timeout: TIMEOUT, maxBuffer: 1024 * 1024 }, (error, stdout, stderr) => {
      resolve({
        output: stdout,
        error: stderr,
        code: error ? (error.code || error.killed ? 1 : 1) : 0,
      });
    });
    if (stdin) {
      child.stdin.write(stdin);
      child.stdin.end();
    }
  });
}

function writeTempFile(dir, name, content) {
  const fullPath = join(dir, name);
  writeFileSync(fullPath, content);
  return fullPath;
}

function cleanUp(files) {
  for (const f of files) {
    try {
      if (existsSync(f)) unlinkSync(f);
    } catch {}
  }
}

export async function executeCode(req, res) {
  const { language, code } = req.body;

  if (!language || !code) {
    return res.status(400).json({ success: false, error: "Language and code are required" });
  }

  const tmpDir = join(tmpdir(), `exec_${randomId()}`);
  if (!existsSync(tmpDir)) mkdirSync(tmpDir, { recursive: true });

  try {
    let result;

    switch (language) {
      case "javascript": {
        const filePath = writeTempFile(tmpDir, "script.js", code);
        result = await runCommand(`node "${filePath}"`);
        cleanUp([filePath]);
        break;
      }

      case "python": {
        const filePath = writeTempFile(tmpDir, "script.py", code);
        result = await runCommand(`python3 "${filePath}"`);
        cleanUp([filePath]);
        break;
      }

      case "java": {
        const classNameMatch = code.match(/public\s+class\s+(\w+)/);
        const className = classNameMatch ? classNameMatch[1] : "Solution";
        const filePath = writeTempFile(tmpDir, `${className}.java`, code);
        const compileResult = await runCommand(`javac "${filePath}"`);
        if (compileResult.code !== 0) {
          cleanUp([filePath]);
          return res.json({ success: false, error: compileResult.error || compileResult.output });
        }
        const classFile = join(tmpDir, `${className}.class`);
        result = await runCommand(`java -cp "${tmpDir}" ${className}`);
        cleanUp([filePath, classFile]);
        break;
      }

      default:
        return res.status(400).json({ success: false, error: `Unsupported language: ${language}` });
    }

    if (result.code !== 0) {
      return res.json({ success: false, error: result.error || result.output });
    }

    res.json({ success: true, output: result.output });
  } catch (error) {
    res.json({ success: false, error: error.message });
  } finally {
    try {
      if (existsSync(tmpDir)) {
        for (const f of tmpDir.readdirSync ? [] : []) {
          try { unlinkSync(join(tmpDir, f)); } catch {}
        }
        try { rmSync ? rmSync(tmpDir, { recursive: true }) : exec(`rm -rf "${tmpDir}"`); } catch {}
      }
    } catch {}
  }
}
