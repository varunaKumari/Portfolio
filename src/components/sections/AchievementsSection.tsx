"use client";

import React from "react";
import { achievements } from "@/data/portfolio";

export default function AchievementsSection() {
  return (
    <section className="py-16">
      {/* Headline */}
      <h2 className="text-4xl md:text-5xl font-bold mb-12 leading-tight">
        My <span className="text-[#4ec9b0]">Achievements</span> in{" "}
        <span className="text-[#4ec9b0]">Competitive Programming</span> and
        other domains
      </h2>

      {/* Coding Profiles */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-white mb-2 pb-2 border-b border-[#333]">
          Coding Profiles
        </h3>
        <ul className="space-y-3 mt-4">
          {achievements.codingProfiles.map((profile, index) => (
            <li key={index} className="flex items-start gap-2 ml-4">
              <span className="text-white mt-1">•</span>
              <p className="text-[#858585]">
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

      {/* Offline Contest Ranks */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-white mb-2 pb-2 border-b border-[#333]">
          Offline Contest Ranks
        </h3>
        <p className="text-[#858585] mt-4 mb-4">
          Here are some of my notable achievements in various coding contests:
        </p>
        <ul className="space-y-3">
          {achievements.contestRanks.map((contest, index) => (
            <li key={index} className="flex items-start gap-2 ml-4">
              <span className="text-white mt-1">•</span>
              <p className="text-[#858585]">
                <span className="text-[#4ec9b0]">{contest.name}</span> :{" "}
                {contest.description}
              </p>
            </li>
          ))}
        </ul>
      </div>

      {/* Positions of Responsibility */}
      <div className="mb-12">
        <h3 className="text-2xl font-bold text-white mb-2 pb-2 border-b border-[#333]">
          Positions of Responsibility
        </h3>
        <p className="text-[#858585] mt-4 mb-6">
          In addition to my coding achievements, I have also held the following
          positions of responsibility:
        </p>
        {achievements.positions.map((pos, index) => (
          <div key={index} className="mb-6">
            <h4 className="text-[#4ec9b0] text-lg font-semibold mb-2">
              {pos.role}
            </h4>
            <div className="blockquote-accent">
              <p className="text-[#858585] italic">
                &quot;{pos.description}&quot;
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}