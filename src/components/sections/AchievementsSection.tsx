"use client";

import React from "react";
import { achievements } from "@/data/portfolio";

export default function AchievementsSection() {
  return (
    <section style={{ paddingTop: "60px", paddingBottom: "60px" }}>
      {/* Headline */}
      <h2
        className="font-bold leading-tight"
        style={{ fontSize: "clamp(28px, 4vw, 44px)", marginBottom: "48px" }}
      >
        My <span className="text-[#4ec9b0]">Achievements</span> in{" "}
        <span className="text-[#4ec9b0]">Competitive Programming</span> and
        other domains
      </h2>

      {/* Coding Profiles */}
      <div style={{ marginBottom: "48px" }}>
        <h3
          className="text-white font-bold"
          style={{
            fontSize: "22px",
            marginBottom: "8px",
            paddingBottom: "8px",
            borderBottom: "1px solid #333",
          }}
        >
          Coding Profiles
        </h3>
        <ul style={{ marginTop: "16px", listStyle: "none", padding: 0 }}>
          {achievements.codingProfiles.map((profile, index) => (
            <li
              key={index}
              className="flex items-start"
              style={{ gap: "8px", marginLeft: "16px", marginBottom: "12px" }}
            >
              <span className="text-white" style={{ marginTop: "2px" }}>
                •
              </span>
              <p
                className="text-[#858585]"
                style={{ fontSize: "14px", lineHeight: 1.6 }}
              >
                <a
                  href={profile.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#4ec9b0] hover:underline"
                >
                  {profile.platform}
                </a>{" "}
                : {profile.description}
              </p>
            </li>
          ))}
        </ul>
      </div>

      {/* Mentorship & Scholarships */}
      {achievements.mentorship && achievements.mentorship.length > 0 && (
        <div style={{ marginBottom: "48px" }}>
          <h3
            className="text-white font-bold"
            style={{
              fontSize: "22px",
              marginBottom: "8px",
              paddingBottom: "8px",
              borderBottom: "1px solid #333",
            }}
          >
            Mentorship & Scholarships
          </h3>

          {achievements.mentorship.map((item, index) => (
            <div
              key={index}
              style={{
                marginTop: "24px",
                padding: "24px",
                background: "#252526",
                borderRadius: "8px",
                border: "1px solid #333",
              }}
            >
              <div
                className="flex justify-between items-start flex-wrap"
                style={{ gap: "8px", marginBottom: "12px" }}
              >
                <h4
                  className="text-[#e5a000] font-bold"
                  style={{ fontSize: "16px" }}
                >
                  {item.name}
                </h4>
                <span
                  className="text-[#858585]"
                  style={{ fontSize: "13px" }}
                >
                  {item.period}
                </span>
              </div>
              <p
                className="text-[#858585]"
                style={{ fontSize: "14px", lineHeight: 1.7 }}
              >
                {item.description}
              </p>
            </div>
          ))}
        </div>
      )}
    </section>
  );
}