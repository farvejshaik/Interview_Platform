import { useState, useEffect } from "react";

export function useTheme() {
  const [theme, setTheme] = useState(() => {
    if (typeof window !== "undefined") {
      return (
        document.documentElement.getAttribute("data-theme") ||
        "talentforge-dark"
      );
    }
    return "talentforge-dark";
  });

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) =>
      prev === "talentforge-light" ? "talentforge-dark" : "talentforge-light"
    );
  };

  return { theme, toggleTheme };
}
