"use client";

import React from "react";
import { skillCategories } from "@/data/portfolio";

// Map of skill icons - you can replace these with actual image URLs
const skillIconMap: Record<string, string> = {
  js: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  ts: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
  python: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  java: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg",
  cpp: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg",
  html: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  css: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  react: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  nextjs: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nextjs/nextjs-original.svg",
  redux: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg",
  tailwind: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  nodejs: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  express: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg",
  postgresql: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  redis: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
  mongodb: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg",
  springboot: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/spring/spring-original.svg",
  langchain: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  langgraph: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg",
  github: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  docker: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
};

export default function SkillsSection() {
  return (
    <section className="py-16">
      {/* Headline */}
      <h2 className="text-4xl md:text-5xl font-bold mb-12 leading-tight">
        <span className="text-[#e5a000]">Full Stack</span> Developer also
        experience in{" "}
        <span className="text-[#4fc1ff]">Competitive Programming</span>
      </h2>

      {/* Skill Categories */}
      {skillCategories.map((category, catIndex) => (
        <div key={catIndex} className="mb-8">
          <h3 className="text-2xl font-bold text-white mb-4">
            {category.title}
          </h3>
          <div className="flex flex-wrap gap-6">
            {category.skills.map((skill, skillIndex) => (
              <div
                key={skillIndex}
                className="flex flex-col items-center gap-2 w-24"
              >
                <div className="w-16 h-16 flex items-center justify-center bg-[#2a2a2a] rounded-lg hover:bg-[#333] transition-colors p-2">
                  <img
                    src={skillIconMap[skill.icon] || ""}
                    alt={skill.name}
                    className="w-12 h-12 object-contain"
                    onError={(e) => {
                      // Fallback if image fails to load
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                      target.parentElement!.innerHTML = `
                        <span class="text-2xl text-[#858585]">📦</span>
                      `;
                    }}
                  />
                </div>
                <span className="text-xs text-center text-vscode-text">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      ))}

      {/* Divider */}
      <div className="mt-12 flex items-center gap-4">
        <div className="w-8 h-[2px] bg-[#858585]" />
        <div className="flex-1 h-[1px] bg-[#333]" />
      </div>
    </section>
  );
}