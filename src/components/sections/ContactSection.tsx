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
    <section style={{ paddingTop: "60px", paddingBottom: "60px" }}>
      {/* Headline */}
      <h2
        className="font-bold leading-tight"
        style={{ fontSize: "clamp(28px, 4vw, 44px)", marginBottom: "48px" }}
      >
        Let&apos;s <span className="text-[#4fc1ff]">talk</span> and{" "}
        <span className="text-[#4fc1ff]">work together</span>
      </h2>

      {/* Collaborate Section */}
      <div style={{ marginBottom: "48px" }}>
        <h3
          className="font-bold"
          style={{ fontSize: "22px", marginBottom: "12px" }}
        >
          Let&apos;s <span className="text-[#4ec9b0]">Collaborate</span>
        </h3>
        <p
          className="text-[#858585]"
          style={{
            fontSize: "14px",
            lineHeight: 1.7,
            maxWidth: "600px",
          }}
        >
          I am currently a student at IIIT Raichur, actively looking for
          internship opportunities and open-source collaborations. If you have a
          technical challenge or a product vision, let&apos;s discuss how we can
          execute it.
        </p>
      </div>

      {/* Contact Grid */}
      <div
        className="grid grid-cols-1 md:grid-cols-2"
        style={{ gap: "32px" }}
      >
        {/* Left Column */}
        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          {/* Status */}
          <div
            className="flex items-center bg-[#252526] rounded-lg border border-[#333]"
            style={{ gap: "12px", padding: "12px 16px" }}
          >
            <div
              className="rounded-full bg-green-500"
              style={{ width: "10px", height: "10px" }}
            />
            <span className="text-white" style={{ fontSize: "14px" }}>
              Open for Internships & Opportunities
            </span>
          </div>

          {/* Location */}
          <div>
            <p
              className="text-[#858585] uppercase"
              style={{
                fontSize: "10px",
                letterSpacing: "1.5px",
                marginBottom: "4px",
              }}
            >
              Base of Operations
            </p>
            <p className="text-white font-semibold" style={{ fontSize: "14px" }}>
              {personalInfo.location}
            </p>
          </div>

          {/* Local Time */}
          <div>
            <p
              className="text-[#858585] uppercase"
              style={{
                fontSize: "10px",
                letterSpacing: "1.5px",
                marginBottom: "4px",
              }}
            >
              Local Time ({personalInfo.timezone})
            </p>
            <p
              className="text-white font-mono font-semibold"
              style={{ fontSize: "18px" }}
            >
              {currentTime}
            </p>
          </div>
        </div>

        {/* Right Column */}
        <div
          className="bg-[#252526] rounded-lg border border-[#333]"
          style={{
            padding: "24px",
            display: "flex",
            flexDirection: "column",
            gap: "24px",
          }}
        >
          {/* Primary Contact */}
          <div>
            <p
              className="text-[#858585] uppercase"
              style={{
                fontSize: "10px",
                letterSpacing: "1.5px",
                marginBottom: "12px",
              }}
            >
              Primary Contact
            </p>
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center justify-between bg-[#1e1e1e] rounded-lg hover:bg-[#2a2a2a] transition-colors"
              style={{ padding: "12px 16px" }}
            >
              <span className="text-white" style={{ fontSize: "14px" }}>
                {personalInfo.email}
              </span>
              <span className="text-[#858585]">↗</span>
            </a>
          </div>

          {/* Social Links */}
          <div
            className="grid grid-cols-3"
            style={{ gap: "12px" }}
          >
            <a
              href={socialLinks.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center bg-[#1e1e1e] rounded-lg hover:bg-[#2a2a2a] transition-colors"
              style={{ gap: "8px", padding: "16px 0" }}
            >
              <FaLinkedinIn size={18} className="text-white" />
              <span
                className="text-[#858585] uppercase"
                style={{ fontSize: "10px", letterSpacing: "1px" }}
              >
                LinkedIn
              </span>
            </a>
            <a
              href={socialLinks.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center bg-[#1e1e1e] rounded-lg hover:bg-[#2a2a2a] transition-colors"
              style={{ gap: "8px", padding: "16px 0" }}
            >
              <FaGithub size={18} className="text-white" />
              <span
                className="text-[#858585] uppercase"
                style={{ fontSize: "10px", letterSpacing: "1px" }}
              >
                GitHub
              </span>
            </a>
            <a
              href={socialLinks.resume}
              className="flex flex-col items-center bg-[#1e1e1e] rounded-lg hover:bg-[#2a2a2a] transition-colors"
              style={{ gap: "8px", padding: "16px 0" }}
            >
              <FaDownload size={18} className="text-white" />
              <span
                className="text-[#858585] uppercase"
                style={{ fontSize: "10px", letterSpacing: "1px" }}
              >
                Resume
              </span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}