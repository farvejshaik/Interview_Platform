import { Link } from "react-router";
import { BentoItem } from "./bento-item";

const gridItems = [
  {
    title: "HD Video Call",
    description: "Crystal clear video and audio for seamless communication during interviews. Connect with mentors and peers in real-time.",
    className: "col-span-2 lg:col-span-2 lg:row-span-2 lg:col-start-1 lg:row-start-1",
    chart: true,
    to: "/dashboard",
  },
  {
    title: "Live Code Editor",
    description: "Collaborate in real-time with syntax highlighting and multiple language support.",
    className: "lg:col-start-3 lg:row-start-1",
    to: "/problems",
  },
  {
    title: "Easy Collaboration",
    description: "Share your screen, discuss solutions, and learn from each other in real-time.",
    className: "lg:col-start-3 lg:row-start-2",
  },
  {
    title: "Blogs",
    description: "Insightful articles on coding interviews, system design, and career growth from experienced engineers.",
    className: "lg:col-start-3 lg:row-start-3",
    to: "/blog",
  },
  {
    title: "Performance Analytics",
    description: "Track progress and improve with detailed performance metrics.",
    className: "lg:row-span-2 lg:col-start-4 lg:row-start-1",
  },
  {
    title: "Lightning Fast",
    description: "Experience ultra-low latency for seamless real-time interactions.",
    className: "col-span-2 lg:col-start-1 lg:row-start-3",
  },
  {
    title: "Practice Problems",
    description: "Curated collection of coding problems ranging from easy to hard, covering arrays, strings, trees, dynamic programming, and more.",
    className: "col-span-2 sm:col-span-1 lg:col-span-1 lg:col-start-4 lg:row-start-3",
    to: "/problems",
  },
];

const CardContent = ({ item }) => (
  <>
    <div>
      <h2 className="text-lg sm:text-xl font-bold text-base-content">{item.title}</h2>
      <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm text-base-content/70">{item.description}</p>
    </div>
    {item.chart && (
      <div className="mt-4 sm:mt-6 rounded-lg bg-base-300/50 hidden sm:flex items-center justify-center overflow-hidden flex-1 min-h-[300px] lg:min-h-[400px]">
        <img src="/demo-pic.png" alt="HD Video Call Preview" className="h-full w-full object-contain p-2" />
      </div>
    )}
  </>
);

export const CyberneticBentoGrid = () => {
  return (
    <div className="grid auto-rows-max grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-4">
      {gridItems.map((item, index) => (
        <BentoItem
          key={index}
          className={`${item.className} flex flex-col justify-between rounded-2xl border border-base-300/40 bg-base-100/80 backdrop-blur-sm shadow-lg ${item.chart ? "p-5 sm:p-8" : "p-4 sm:p-6"} ${item.to ? "cursor-pointer" : ""}`}
        >
          {item.to ? (
            <Link to={item.to} className="flex flex-col justify-between h-full">
              <CardContent item={item} />
            </Link>
          ) : (
            <CardContent item={item} />
          )}
        </BentoItem>
      ))}
    </div>
  );
};
