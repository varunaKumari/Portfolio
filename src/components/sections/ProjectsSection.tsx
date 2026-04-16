"use client";

import React from "react";
import { projects } from "@/data/portfolio";

export default function ProjectsSection() {
  return (
    <section className="py-16">
      {/* Headline */}
      <h2 className="text-4xl md:text-5xl font-bold mb-12 leading-tight">
        My <span className="text-[#e5a000]">top projects</span> as a full stack{" "}
        <span className="text-[#e5a000]">web</span> software engineer
      </h2>

      {/* Project Cards */}
      <div className="space-y-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card bg-[#252526] rounded-lg overflow-hidden p-8"
          >
            <div className="flex flex-col md:flex-row gap-8">
              {/* Text */}
              <div className="flex-1">
                <h3 className="text-2xl font-bold text-white mb-4">
                  {project.name}
                </h3>
                <p className="text-[#858585] leading-relaxed mb-6">
                  {project.description}
                </p>
                <a
                  href={project.link}
                  className="inline-flex items-center gap-2 px-4 py-2 border border-[#555] rounded text-white hover:bg-[#333] transition-colors"
                >
                  Learn more <span>→</span>
                </a>
              </div>

              {/* Image */}
              <div className="flex-1">
                <div className="rounded-lg overflow-hidden border border-[#333]">
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-auto object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}