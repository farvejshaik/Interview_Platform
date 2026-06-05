import { javascriptRoadmap } from "./javascriptRoadmap.jsx";
import { reactRoadmap } from "./reactRoadmap.jsx";
import { dsaRoadmap } from "./dsaRoadmap.jsx";
import { frontendRoadmap } from "./frontendRoadmap.jsx";
import { backendRoadmap } from "./backendRoadmap.jsx";
import { fullstackRoadmap } from "./fullstackRoadmap.jsx";
import { devopsRoadmap } from "./devopsRoadmap.jsx";
import { systemDesignRoadmap } from "./systemDesignRoadmap.jsx";

export const roadmaps = {
  javascript: javascriptRoadmap,
  react: reactRoadmap,
  dsa: dsaRoadmap,
  frontend: frontendRoadmap,
  backend: backendRoadmap,
  fullstack: fullstackRoadmap,
  devops: devopsRoadmap,
  "system-design": systemDesignRoadmap,
};

export function getRoadmap(slug) {
  return roadmaps[slug] || null;
}
