"use client";

import React from "react";
import { projects } from "@/data/portfolio";

export default function ProjectsSection() {
  return (
    <section style={{ paddingTop: "60px", paddingBottom: "60px" }}>
      {/* Headline */}
      <h2
        className="font-bold leading-tight"
        style={{ fontSize: "clamp(28px, 4vw, 44px)", marginBottom: "48px" }}
      >
        My <span className="text-[#e5a000]">top projects</span> as a full stack{" "}
        <span className="text-[#e5a000]">web</span> developer
      </h2>

      {/* Project Cards */}
      <div style={{ display: "flex", flexDirection: "column", gap: "32px" }}>
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card"
            style={{
              background: "#252526",
              borderRadius: "12px",
              padding: "32px",
              border: "1px solid #333",
            }}
          >
            <div className="flex flex-col md:flex-row" style={{ gap: "32px" }}>
              {/* Text */}
              <div className="flex-1">
                <h3
                  className="text-white font-bold"
                  style={{ fontSize: "24px", marginBottom: "16px" }}
                >
                  {project.name}
                </h3>
                <p
                  className="text-[#858585]"
                  style={{
                    fontSize: "14px",
                    lineHeight: 1.7,
                    marginBottom: "20px",
                  }}
                >
                  {project.description}
                </p>

                {/* Highlights */}
                {project.highlights && (
                  <ul
                    style={{
                      marginBottom: "20px",
                      paddingLeft: "0",
                      listStyle: "none",
                    }}
                  >
                    {project.highlights.map((highlight, i) => (
                      <li
                        key={i}
                        className="text-[#aaaaaa]"
                        style={{
                          fontSize: "13px",
                          lineHeight: 1.6,
                          paddingLeft: "16px",
                          position: "relative",
                          marginBottom: "4px",
                        }}
                      >
                        <span
                          style={{
                            position: "absolute",
                            left: "0",
                            color: "#4ec9b0",
                          }}
                        >
                          ▸
                        </span>
                        {highlight}
                      </li>
                    ))}
                  </ul>
                )}

                {/* Tech Stack */}
                <div
                  className="flex flex-wrap"
                  style={{ gap: "8px", marginBottom: "20px" }}
                >
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      style={{
                        padding: "3px 12px",
                        borderRadius: "20px",
                        fontSize: "12px",
                        border: "1px solid #e5a000",
                        color: "#e5a000",
                      }}
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <a
                  href={project.link}
                  className="inline-flex items-center text-white border border-[#555] rounded hover:bg-[rgba(255,255,255,0.06)] transition-colors"
                  style={{
                    padding: "8px 16px",
                    fontSize: "13px",
                    gap: "6px",
                  }}
                >
                  Learn more <span>→</span>
                </a>
              </div>

              {/* Image Placeholder */}
              <div className="flex-1">
                <div
                  className="flex items-center justify-center"
                  style={{
                    borderRadius: "8px",
                    border: "1px solid #333",
                    background: "#1e1e1e",
                    height: "240px",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={project.image}
                    alt={project.name}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = "none";
                      if (target.parentElement) {
                        target.parentElement.innerHTML = `
                          <div style="display:flex;flex-direction:column;align-items:center;gap:8px;color:#858585;">
                            <span style="font-size:48px;">🖥️</span>
                            <span style="font-size:13px;">${project.name}</span>
                          </div>
                        `;
                      }
                    }}
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