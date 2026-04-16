"use client";

import React from "react";
import { personalInfo, languages, socialLinks } from "@/data/portfolio";
import { FaLinkedinIn, FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

export default function AboutSection() {
  return (
    <section className="py-16">
      {/* Headline */}
      <h2 className="text-4xl md:text-5xl font-bold mb-12 leading-tight">
        A <span className="text-[#4fc1ff]">student</span> with expertise in{" "}
        <span className="text-[#4fc1ff]">Web Development</span>, Generative AI,
        Devops and{" "}
        <span className="text-[#4fc1ff]">Competitive Programming</span>.
      </h2>

      {/* Profile Section */}
      <div className="flex flex-col md:flex-row gap-8 mb-12">
        {/* Text */}
        <div className="flex-1">
          <h3 className="text-xl font-bold text-white mb-1">
            {personalInfo.name}
          </h3>
          <p className="text-[#4fc1ff] mb-6">{personalInfo.subtitle}</p>

          {personalInfo.bio.map((paragraph, index) => (
            <p key={index} className="text-[#858585] mb-4 leading-relaxed">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Profile Image */}
        <div className="flex-shrink-0">
          <div className="w-48 h-48 rounded-full overflow-hidden border-2 border-[#333]">
            <img
              src={personalInfo.profileImage}
              alt={personalInfo.name}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Languages */}
      <div className="mb-8">
        <h3 className="text-[#4fc1ff] text-xl font-bold mb-3 pb-2 border-b border-[#333]">
          Languages
        </h3>
        <div className="flex flex-wrap gap-8 mt-3">
          {languages.map((lang) => (
            <div key={lang.name} className="text-sm">
              <span className="font-bold text-white">{lang.name}</span>
              <span className="text-[#858585]"> - {lang.level}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Social Links */}
      <div className="flex items-center gap-4">
        <a
          href={socialLinks.linkedin}
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 flex items-center justify-center rounded bg-[#333] hover:bg-[#444] transition-colors text-white"
        >
          <FaLinkedinIn size={16} />
        </a>
        <a
          href={socialLinks.github}
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 flex items-center justify-center rounded bg-[#333] hover:bg-[#444] transition-colors text-white"
        >
          <FaGithub size={16} />
        </a>
        <a
          href={socialLinks.leetcode}
          target="_blank"
          rel="noopener noreferrer"
          className="w-9 h-9 flex items-center justify-center rounded bg-[#333] hover:bg-[#444] transition-colors text-white"
        >
          <SiLeetcode size={16} />
        </a>
        <a
          href="#contact-me"
          className="px-4 py-2 border border-[#555] rounded text-white text-sm hover:bg-[#333] transition-colors flex items-center gap-2"
        >
          Contact Me <span>→</span>
        </a>
      </div>
    </section>
  );
}