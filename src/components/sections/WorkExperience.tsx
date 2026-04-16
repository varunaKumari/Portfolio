"use client";

import React from "react";
import { workExperience } from "@/data/portfolio";

export default function WorkExperience() {
  return (
    <section className="py-16">
      {/* Headline */}
      <h2 className="text-4xl md:text-5xl font-bold mb-12 leading-tight">
        <span className="text-[#e5a000]">2 Months</span> of experience (Intern)
        in the software industry
      </h2>

      {/* Experience Cards */}
      {workExperience.map((exp, index) => (
        <div key={index} className="mb-12">
          {/* Company Header */}
          <div className="flex items-center gap-4 mb-6">
            <div className="w-20 h-20 bg-white rounded-lg flex items-center justify-center overflow-hidden">
              <img
                src={exp.logo}
                alt={exp.company}
                className="w-full h-full object-contain p-2"
              />
            </div>
            <div>
              <h3 className="text-xl font-bold text-[#e5a000]">
                {exp.company} | {exp.role}
              </h3>
              <p className="text-[#858585]">{exp.period}</p>
            </div>
          </div>

          {/* Responsibilities */}
          <ul className="space-y-4 mb-6">
            {exp.responsibilities.map((resp, i) => (
              <li key={i} className="ml-4">
                <div className="flex items-start gap-2">
                  <span className="text-white mt-1.5 text-xs">•</span>
                  <div>
                    <p className="text-vscode-text">{resp.task}</p>
                    <p className="text-[#858585] italic text-sm mt-1">
                      Impact: {resp.impact}
                    </p>
                  </div>
                </div>
              </li>
            ))}
          </ul>

          {/* Tech Stack Tags */}
          <div className="flex flex-wrap gap-2">
            {exp.techStack.map((tech) => (
              <span key={tech} className="tech-tag">
                {tech}
              </span>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}