"use client";

import React from "react";
import { personalInfo, socialLinks } from "@/data/portfolio";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function HeroSection() {
  return (
    <section className="min-h-[80vh] flex flex-col items-center justify-center text-center py-20">
      {/* Name */}
      <h1 className="text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-6 fade-in-up">
        {personalInfo.name}
      </h1>

      {/* Subtitle */}
      <p className="text-lg md:text-xl text-[#858585] mb-8 max-w-2xl">
        {personalInfo.title}
      </p>

      {/* Social Links & Contact */}
      <div className="flex items-center gap-4">
        <a
          href={socialLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center rounded-full bg-[#333] hover:bg-[#444] transition-colors text-white"
        >
          <FaLinkedinIn size={18} />
        </a>
        <a
          href={socialLinks.github}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center rounded-full bg-[#333] hover:bg-[#444] transition-colors text-white"
        >
          <FaGithub size={18} />
        </a>
        <a
          href={socialLinks.leetcode}
          target="_blank"
          rel="noopener noreferrer"
          className="w-10 h-10 flex items-center justify-center rounded-full bg-[#333] hover:bg-[#444] transition-colors text-white"
        >
          <SiLeetcode size={18} />
        </a>
        <a
          href="#contact-me"
          className="px-5 py-2 border border-[#555] rounded-full text-white hover:bg-[#333] transition-colors flex items-center gap-2"
        >
          Contact Me <span>→</span>
        </a>
      </div>

      {/* Scroll Indicator */}
      <div className="mt-20 scroll-indicator">
        <div className="w-6 h-10 border-2 border-[#555] rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-[#555] rounded-full" />
        </div>
      </div>
    </section>
  );
}