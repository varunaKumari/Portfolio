"use client";

import React from "react";
import { personalInfo, languages, socialLinks } from "@/data/portfolio";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function AboutSection() {
  return (
    <section style={{ paddingTop: "60px", paddingBottom: "60px" }}>
      {/* Headline */}
      <h2
        className="font-bold leading-tight"
        style={{ fontSize: "clamp(28px, 4vw, 44px)", marginBottom: "48px" }}
      >
        A <span className="text-[#4fc1ff]">student</span> with expertise in{" "}
        <span className="text-[#4fc1ff]">Web Development</span>, AI & GenAI,
        Testing and{" "}
        <span className="text-[#4fc1ff]">Competitive Programming</span>.
      </h2>

      {/* Profile Section */}
      <div
        className="flex flex-col md:flex-row"
        style={{ gap: "32px", marginBottom: "48px" }}
      >
        {/* Text */}
        <div className="flex-1">
          <h3
            className="text-white font-bold"
            style={{ fontSize: "20px", marginBottom: "4px" }}
          >
            {personalInfo.name}
          </h3>
          <p
            className="text-[#4fc1ff]"
            style={{ fontSize: "14px", marginBottom: "24px" }}
          >
            {personalInfo.subtitle}
          </p>

          {personalInfo.bio.map((paragraph, index) => (
            <p
              key={index}
              className="text-[#858585]"
              style={{
                fontSize: "14px",
                lineHeight: 1.7,
                marginBottom: "16px",
              }}
            >
              {paragraph}
            </p>
          ))}
        </div>

        {/* Profile Image */}
        <div className="flex-shrink-0">
          <div
            className="rounded-full overflow-hidden border-2 border-[#333] bg-[#252526]"
            style={{ width: "180px", height: "180px" }}
          >
            <img
              src={personalInfo.profileImage}
              alt={personalInfo.name}
              className="w-full h-full object-cover"
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = "none";
                if (target.parentElement) {
                  target.parentElement.innerHTML = `
                    <div style="width:100%;height:100%;display:flex;align-items:center;justify-content:center;background:#252526;color:#858585;font-size:48px;">
                      VK
                    </div>
                  `;
                }
              }}
            />
          </div>
        </div>
      </div>

      {/* Education */}
      <div style={{ marginBottom: "32px" }}>
        <h3
          className="text-[#4fc1ff] font-bold"
          style={{
            fontSize: "18px",
            marginBottom: "12px",
            paddingBottom: "8px",
            borderBottom: "1px solid #333",
          }}
        >
          Education
        </h3>
        <div style={{ marginTop: "12px" }}>
          <div className="flex justify-between items-start flex-wrap gap-2">
            <div>
              <p className="text-white font-semibold" style={{ fontSize: "14px" }}>
                {personalInfo.college}
              </p>
              <p className="text-[#858585]" style={{ fontSize: "13px" }}>
                {personalInfo.degree}
              </p>
            </div>
            <div className="text-right">
              <p className="text-[#858585]" style={{ fontSize: "13px" }}>
                {personalInfo.collegeStart} - {personalInfo.collegeEnd}
              </p>
              <p className="text-white font-semibold" style={{ fontSize: "13px" }}>
                CGPA: {personalInfo.cgpa}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Languages */}
      <div style={{ marginBottom: "32px" }}>
        <h3
          className="text-[#4fc1ff] font-bold"
          style={{
            fontSize: "18px",
            marginBottom: "12px",
            paddingBottom: "8px",
            borderBottom: "1px solid #333",
          }}
        >
          Languages
        </h3>
        <div className="flex flex-wrap" style={{ gap: "32px", marginTop: "12px" }}>
          {languages.map((lang) => (
            <div key={lang.name} style={{ fontSize: "13px" }}>
              <span className="font-bold text-white">{lang.name}</span>
              <span className="text-[#858585]"> - {lang.level}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Social Links */}
      <div className="flex items-center" style={{ gap: "12px" }}>
        <a
          href={socialLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center rounded bg-[#333] hover:bg-[#444] transition-colors text-white"
          style={{ width: "36px", height: "36px" }}
        >
          <FaLinkedinIn size={15} />
        </a>
        <a
          href={socialLinks.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center rounded bg-[#333] hover:bg-[#444] transition-colors text-white"
          style={{ width: "36px", height: "36px" }}
        >
          <FaGithub size={15} />
        </a>
        <a
          href={socialLinks.leetcode}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center rounded bg-[#333] hover:bg-[#444] transition-colors text-white"
          style={{ width: "36px", height: "36px" }}
        >
          <SiLeetcode size={15} />
        </a>
        <a
          href="#contact-me"
          className="flex items-center text-white border border-[#555] rounded hover:bg-[rgba(255,255,255,0.06)] transition-colors"
          style={{ padding: "6px 16px", fontSize: "13px", gap: "6px" }}
        >
          Contact Me <span>→</span>
        </a>
      </div>
    </section>
  );
}