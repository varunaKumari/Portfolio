"use client";

import React from "react";

export default function ExploreMore() {
  return (
    <section style={{ paddingTop: "60px", paddingBottom: "60px" }}>
      <h2
        className="font-bold leading-tight"
        style={{ fontSize: "clamp(28px, 4vw, 44px)", marginBottom: "32px" }}
      >
        Here&apos;s The List Of More Of My Work You Can{" "}
        <span className="text-[#e5a000]">Explore</span>
      </h2>
      <p
        className="text-[#858585]"
        style={{ fontSize: "14px", lineHeight: 1.7, marginBottom: "32px" }}
      >
        Here&apos;s how you can navigate through the different directories of my
        portfolio.
      </p>

      {/* 1. My Work */}
      <div style={{ marginBottom: "32px" }}>
        <h3
          className="text-white font-bold"
          style={{ fontSize: "18px", marginBottom: "12px" }}
        >
          1. My Work
        </h3>
        <p
          className="text-[#858585]"
          style={{ fontSize: "14px", marginBottom: "16px" }}
        >
          Dive into my specific project builds and deployed work:
        </p>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "8px",
            marginLeft: "16px",
          }}
        >
          {[
            {
              name: "Whiteboard",
              desc: "Real-time collaborative whiteboard application.",
            },
            {
              name: "SocialMedia",
              desc: "AI-enhanced social platform for teens & developers.",
            },
          ].map((item) => (
            <p
              key={item.name}
              className="text-[#858585]"
              style={{ fontSize: "14px" }}
            >
              <span className="font-bold text-white">{item.name}</span> |{" "}
              {item.desc}
            </p>
          ))}
        </div>
      </div>

      {/* 2. Extensions */}
      <div style={{ marginBottom: "32px" }}>
        <h3
          className="text-white font-bold"
          style={{ fontSize: "18px", marginBottom: "12px" }}
        >
          2. Extensions (Your Work)
        </h3>
        <p
          className="text-[#858585]"
          style={{ fontSize: "14px", marginBottom: "16px" }}
        >
          Explore the extensions tab where you can view installed tools or add
          new ones to your workflow.
        </p>
        <div
          style={{
            borderLeft: "3px solid #007acc",
            paddingLeft: "16px",
          }}
        >
          <p
            className="text-[#858585] italic"
            style={{ fontSize: "14px" }}
          >
            &quot;Want to build your own? Refer to the &apos;Your Work&apos;
            section to learn how to add a custom extension.&quot;
          </p>
        </div>
      </div>
    </section>
  );
}