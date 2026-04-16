"use client";

import React, { useState, useEffect } from "react";
import { personalInfo, socialLinks } from "@/data/portfolio";
import { FaLinkedinIn, FaGithub, FaDownload } from "react-icons/fa";

export default function ContactSection() {
  const [currentTime, setCurrentTime] = useState("");

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      setCurrentTime(
        now.toLocaleTimeString("en-US", {
          hour: "2-digit",
          minute: "2-digit",
          second: undefined,
          hour12: true,
          timeZone: "Asia/Kolkata",
        })
      );
    };
    updateTime();
    const interval = setInterval(updateTime, 60000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-16">
      {/* Headline */}
      <h2 className="text-4xl md:text-5xl font-bold mb-12 leading-tight">
        Let&apos;s <span className="text-[#4fc1ff]">talk</span> and{" "}
        <span className="text-[#4fc1ff]">work together</span>
      </h2>

      {/* Collaborate Section */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold mb-3">
          Let&apos;s <span className="text-[#4ec9b0]">Collaborate</span>
        </h3>
        <p className="text-[#858585] max-w-2xl leading-relaxed">
          I am currently available for freelance projects and open-source
          contributions. If you have a technical challenge or a product vision,
          let&apos;s discuss how we can execute it.
        </p>
      </div>

      {/* Contact Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left Column */}
        <div className="space-y-6">
          {/* Status */}
          <div className="flex items-center gap-3 px-4 py-3 bg-[#252526] rounded-lg border border-[#333]">
            <div className="w-3 h-3 rounded-full bg-green-500" />
            <span className="text-white">Open for Opportunities</span>
          </div>

          {/* Location */}
          <div>
            <p className="text-[10px] tracking-widest text-[#858585] uppercase mb-1">
              Base of Operations
            </p>
            <p className="text-white font-semibold">{personalInfo.location}</p>
          </div>

          {/* Local Time */}
          <div>
            <p className="text-[10px] tracking-widest text-[#858585] uppercase mb-1">
              Local Time ({personalInfo.timezone})
            </p>
            <p className="text-white font-mono font-semibold text-lg">
              {currentTime}
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div className="bg-[#252526] rounded-lg border border-[#333] p-6 space-y-6">
          {/* Primary Contact */}
          <div>
            <p className="text-[10px] tracking-widest text-[#858585] uppercase mb-3">
              Primary Contact
            </p>
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center justify-between px-4 py-3 bg-[#1e1e1e] rounded-lg hover:bg-[#2a2a2a] transition-colors"
            >
              <span className="text-white">{personalInfo.email}</span>
              <span className="text-[#858585]">↗</span>
            </a>
          </div>

          {/* Social Links */}
          <div className="grid grid-cols-3 gap-3">
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 py-4 bg-[#1e1e1e] rounded-lg hover:bg-[#2a2a2a] transition-colors"
            >
              <FaLinkedinIn size={20} className="text-white" />
              <span className="text-[11px] text-[#858585] uppercase tracking-wide">
                LinkedIn
              </span>
            </a>
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 py-4 bg-[#1e1e1e] rounded-lg hover:bg-[#2a2a2a] transition-colors"
            >
              <FaGithub size={20} className="text-white" />
              <span className="text-[11px] text-[#858585] uppercase tracking-wide">
                GitHub
              </span>
            </a>
            <a
              href={socialLinks.resume}
              className="flex flex-col items-center gap-2 py-4 bg-[#1e1e1e] rounded-lg hover:bg-[#2a2a2a] transition-colors"
            >
              <FaDownload size={20} className="text-white" />
              <span className="text-[11px] text-[#858585] uppercase tracking-wide">
                Resume
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}