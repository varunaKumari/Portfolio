"use client";

import React from "react";

export default function WorkExperience() {
  return (
    <section style={{ paddingTop: "60px", paddingBottom: "60px" }}>
      {/* Headline */}
      <h2
        className="font-bold leading-tight text-white"
        style={{ fontSize: "clamp(28px, 4vw, 44px)", marginBottom: "48px" }}
      >
        <span className="text-[#e5a000]">Work</span> Experience
      </h2>

      {/* Empty State */}
      <div
        className="flex flex-col items-center justify-center text-center"
        style={{
          padding: "80px 40px",
          border: "1px dashed #444",
          borderRadius: "12px",
          background: "#252526",
        }}
      >
        {/* Icon */}
        <div
          className="flex items-center justify-center rounded-full bg-[#1e1e1e] border border-[#444]"
          style={{ width: "80px", height: "80px", marginBottom: "24px" }}
        >
          <span style={{ fontSize: "36px" }}>🚀</span>
        </div>

        <h3
          className="text-white font-bold"
          style={{ fontSize: "22px", marginBottom: "12px" }}
        >
          Currently a Student
        </h3>

        <p
          className="text-[#858585] max-w-md"
          style={{ fontSize: "14px", lineHeight: 1.7, marginBottom: "24px" }}
        >
          I&apos;m currently pursuing my B.Tech at IIIT Raichur and actively
          looking for internship opportunities. I&apos;m passionate about
          full-stack development, AI, and building real-world projects.
        </p>

        <div className="flex items-center" style={{ gap: "8px" }}>
          <div
            className="rounded-full bg-[#4ec9b0]"
            style={{ width: "8px", height: "8px" }}
          />
          <span className="text-[#4ec9b0]" style={{ fontSize: "13px" }}>
            Open for Internships & Collaborations
          </span>
        </div>

        {/* Code snippet */}
        <div
          className="font-mono text-left w-full max-w-sm"
          style={{
            marginTop: "32px",
            padding: "16px",
            background: "#1e1e1e",
            borderRadius: "8px",
            border: "1px solid #333",
            fontSize: "12px",
          }}
        >
          <div>
            <span className="text-[#c586c0]">const</span>{" "}
            <span className="text-[#9cdcfe]">status</span>{" "}
            <span className="text-white">=</span>{" "}
            <span className="text-[#ce9178]">&quot;seeking_internship&quot;</span>
            <span className="text-white">;</span>
          </div>
          <div>
            <span className="text-[#c586c0]">const</span>{" "}
            <span className="text-[#9cdcfe]">passion</span>{" "}
            <span className="text-white">=</span>{" "}
            <span className="text-[#ce9178]">&quot;building_cool_stuff&quot;</span>
            <span className="text-white">;</span>
          </div>
          <div style={{ marginTop: "8px" }}>
            <span className="text-[#6a9955]">
              {"// Will update this section soon! 🎯"}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}