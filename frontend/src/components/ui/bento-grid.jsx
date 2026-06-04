import { BentoItem } from "./bento-item";
import {
  VideoIcon,
  Code2Icon,
  UsersIcon,
  ZapIcon,
  CheckIcon,
} from "lucide-react";

const BentoGrid = () => {
  return (
    <div className="w-full">
      <div className="section-header">
        <h2 className="text-4xl font-bold text-base-content sm:text-5xl">
          Everything You Need to{" "}
          <span className="bg-linear-to-r from-primary via-secondary to-accent bg-clip-text font-mono text-transparent">
            Succeed
          </span>
        </h2>
        <p className="mx-auto mt-4 max-w-2xl text-lg text-base-content/70">
          Powerful features designed to make your coding interviews seamless and
          productive
        </p>
      </div>

      <div className="grid auto-rows-max grid-cols-1 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {/* Feature 1 - Large */}
        <BentoItem className="col-span-1 flex flex-col justify-between rounded-2xl border border-base-content/3 bg-base-100/70 p-8 shadow-lg md:col-span-2 lg:col-span-2 lg:row-span-2">
          <div>
            <div className="size-16 bg-primary/10 rounded-2xl flex items-center justify-center mb-4">
              <VideoIcon className="size-8 text-primary" />
            </div>
            <h2 className="text-2xl font-bold text-base-content">
              HD Video Call
            </h2>
            <p className="mt-3 text-base-content/70">
              Crystal clear video and audio for seamless communication during
              interviews. Connect with mentors and peers in real-time.
            </p>
          </div>
        </BentoItem>

        {/* Feature 2 */}
        <BentoItem className="col-span-1 flex flex-col justify-between rounded-2xl border border-base-content/3 bg-base-100/70 p-6 shadow-lg md:col-span-1 lg:col-span-1">
          <div>
            <div className="size-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-3">
              <Code2Icon className="size-6 text-secondary" />
            </div>
            <h2 className="text-xl font-bold text-base-content">
              Live Code Editor
            </h2>
            <p className="mt-2 text-sm text-base-content/70">
              Collaborate in real-time with syntax highlighting and multiple
              language support.
            </p>
          </div>
        </BentoItem>

        {/* Feature 3 */}
        <BentoItem className="col-span-1 flex flex-col justify-between rounded-2xl border border-base-content/3 bg-base-100/70 p-6 shadow-lg md:col-span-1 lg:col-span-1">
          <div>
            <div className="size-12 bg-accent/10 rounded-xl flex items-center justify-center mb-3">
              <UsersIcon className="size-6 text-accent" />
            </div>
            <h2 className="text-xl font-bold text-base-content">
              Easy Collaboration
            </h2>
            <p className="mt-2 text-sm text-base-content/70">
              Share your screen, discuss solutions, and learn from each other in
              real-time.
            </p>
          </div>
        </BentoItem>

        {/* Feature 4 */}
        <BentoItem className="col-span-1 flex flex-col justify-between rounded-2xl border border-base-content/3 bg-base-100/70 p-6 shadow-lg md:col-span-1 lg:col-span-1">
          <div>
            <div className="size-12 bg-secondary/10 rounded-xl flex items-center justify-center mb-3">
              <CheckIcon className="size-6 text-secondary" />
            </div>
            <h2 className="text-xl font-bold text-base-content">
              Performance Analytics
            </h2>
            <p className="mt-2 text-sm text-base-content/70">
              Track progress and improve with detailed performance metrics.
            </p>
          </div>
        </BentoItem>

        {/* Feature 5 */}
        <BentoItem className="col-span-1 flex flex-col justify-between rounded-2xl border border-base-content/3 bg-base-100/70 p-6 shadow-lg md:col-span-1 lg:col-span-1">
          <div>
            <div className="size-12 bg-primary/10 rounded-xl flex items-center justify-center mb-3">
              <ZapIcon className="size-6 text-primary" />
            </div>
            <h2 className="text-xl font-bold text-base-content">
              Lightning Fast
            </h2>
            <p className="mt-2 text-sm text-base-content/70">
              Experience ultra-low latency for seamless real-time interactions.
            </p>
          </div>
        </BentoItem>
      </div>
    </div>
  );
};

export { BentoGrid };
