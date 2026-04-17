"use client";

import React from "react";
import { personalInfo, socialLinks } from "@/data/portfolio";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function HeroSection() {
  return (
    <section
      className="flex flex-col items-center justify-center text-center fade-in"
      style={{ minHeight: "85vh", paddingTop: "60px", paddingBottom: "60px" }}
    >
      {/* Name */}
      <h1
        className="text-white font-bold tracking-tight"
        style={{
          fontSize: "clamp(48px, 8vw, 90px)",
          lineHeight: 1.1,
          marginBottom: "24px",
        }}
      >
        {personalInfo.name}
      </h1>

      {/* Subtitle */}
      <p
        className="text-[#858585] max-w-[600px]"
        style={{ fontSize: "16px", lineHeight: 1.6, marginBottom: "32px" }}
      >
        {personalInfo.title}
      </p>

      {/* Social Links Row */}
      <div className="flex items-center" style={{ gap: "12px" }}>
        <a
          href={socialLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center rounded-full bg-[#333] hover:bg-[#444] transition-colors text-white"
          style={{ width: "40px", height: "40px" }}
        >
          <FaLinkedinIn size={17} />
        </a>
        <a
          href={socialLinks.github}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center rounded-full bg-[#333] hover:bg-[#444] transition-colors text-white"
          style={{ width: "40px", height: "40px" }}
        >
          <FaGithub size={17} />
        </a>
        <a
          href={socialLinks.leetcode}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center rounded-full bg-[#333] hover:bg-[#444] transition-colors text-white"
          style={{ width: "40px", height: "40px" }}
        >
          <SiLeetcode size={17} />
        </a>
        <a
          href="#contact-me"
          className="flex items-center text-white border border-[#555] rounded-full hover:bg-[rgba(255,255,255,0.06)] transition-colors"
          style={{ padding: "8px 20px", fontSize: "14px", gap: "8px" }}
        >
          Contact Me <span>→</span>
        </a>
      </div>

      {/* Scroll indicator */}
      <div className="scroll-bounce" style={{ marginTop: "80px" }}>
        <div
          className="border-2 border-[#555] rounded-full flex justify-center"
          style={{ width: "26px", height: "42px", paddingTop: "8px" }}
        >
          <div
            className="bg-[#555] rounded-full"
            style={{ width: "3px", height: "10px" }}
          />
        </div>
      </div>
    </section>
  );
}