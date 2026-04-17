"use client";

import React from "react";
import { skillCategories } from "@/data/portfolio";

const skillIconMap: Record<string, string> = {
  python:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg",
  java: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg",
  js: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg",
  ts: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg",
  sql: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/azuresqldatabase/azuresqldatabase-original.svg",
  react:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg",
  nextjs:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nextjs/nextjs-original.svg",
  html: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg",
  css: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg",
  nodejs:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg",
  express:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/express/express-original.svg",
  fastapi:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/fastapi/fastapi-original.svg",
  graphql:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/graphql/graphql-plain.svg",
  postgresql:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg",
  mongodb:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mongodb/mongodb-original.svg",
  selenium:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/selenium/selenium-original.svg",
  cypress:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/cypressio/cypressio-original.svg",
  postman:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postman/postman-original.svg",
  git: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/git/git-original.svg",
  github:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/github/github-original.svg",
  docker:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/docker/docker-original.svg",
  jenkins:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jenkins/jenkins-original.svg",
  vscode:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/vscode/vscode-original.svg",
  jira: "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/jira/jira-original.svg",
  prometheus:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/prometheus/prometheus-original.svg",
  grafana:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/grafana/grafana-original.svg",
  githubactions:
    "https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/githubactions/githubactions-original.svg",
};

export default function SkillsSection() {
  return (
    <section style={{ paddingTop: "60px", paddingBottom: "60px" }}>
      {/* Headline */}
      <h2
        className="font-bold leading-tight"
        style={{ fontSize: "clamp(28px, 4vw, 44px)", marginBottom: "48px" }}
      >
        <span className="text-[#e5a000]">Full Stack</span> Developer with
        expertise in Testing, AI &{" "}
        <span className="text-[#4fc1ff]">Competitive Programming</span>
      </h2>

      {/* Skill Categories */}
      {skillCategories.map((category, catIndex) => (
        <div key={catIndex} style={{ marginBottom: "32px" }}>
          <h3
            className="text-white font-bold"
            style={{ fontSize: "20px", marginBottom: "16px" }}
          >
            {category.title}
          </h3>
          <div className="flex flex-wrap" style={{ gap: "20px" }}>
            {category.skills.map((skill, skillIndex) => {
              const iconUrl = skillIconMap[skill.icon];
              return (
                <div
                  key={skillIndex}
                  className="flex flex-col items-center"
                  style={{ width: "88px", gap: "8px" }}
                >
                  <div
                    className="flex items-center justify-center bg-[#2a2a2a] rounded-lg hover:bg-[#333] transition-colors"
                    style={{ width: "60px", height: "60px", padding: "8px" }}
                  >
                    {iconUrl ? (
                      <img
                        src={iconUrl}
                        alt={skill.name}
                        style={{
                          width: "40px",
                          height: "40px",
                          objectFit: "contain",
                        }}
                        onError={(e) => {
                          const target = e.target as HTMLImageElement;
                          target.style.display = "none";
                          if (target.parentElement) {
                            target.parentElement.innerHTML = `<span style="font-size:24px;color:#858585;">⚡</span>`;
                          }
                        }}
                      />
                    ) : (
                      <span style={{ fontSize: "24px", color: "#858585" }}>
                        ⚡
                      </span>
                    )}
                  </div>
                  <span
                    className="text-[#cccccc] text-center"
                    style={{ fontSize: "11px", lineHeight: 1.3 }}
                  >
                    {skill.name}
                  </span>
                </div>
              );
            })}
          </div>
        </div>
      ))}

      {/* Divider */}
      <div
        className="flex items-center"
        style={{ marginTop: "48px", gap: "16px" }}
      >
        <div style={{ width: "32px", height: "2px", background: "#858585" }} />
        <div style={{ flex: 1, height: "1px", background: "#333" }} />
      </div>
    </section>
  );
}