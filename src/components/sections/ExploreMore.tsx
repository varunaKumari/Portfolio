"use client";

import React from "react";

export default function ExploreMore() {
  return (
    <section className="py-16">
      {/* Headline */}
      <h2 className="text-4xl md:text-5xl font-bold mb-8 leading-tight">
        Here&apos;s The List Of More Of My Work You Can{" "}
        <span className="text-[#e5a000]">Explore</span>
      </h2>

      <p className="text-[#858585] mb-8">
        Here&apos;s how you can navigate through the different directories of my
        portfolio.
      </p>

      {/* 1. My Work */}
      <div className="mb-8">
        <h3 className="text-xl font-bold text-white mb-3">1. My Work</h3>
        <p className="text-[#858585] mb-4">
          Dive into my specific project builds and deployed work:
        </p>
        <div className="space-y-2 ml-4">
          {[
            { name: "Jivika", desc: "Healthcare assistance platform." },
            { name: "Marcel", desc: "Ai Workflow solution." },
            { name: "PearlPost", desc: "Social connectivity tool." },
          ].map((item) => (
            <p key={item.name} className="text-[#858585]">
              <span className="font-bold text-white">{item.name}</span>
              <span className="text-[#858585]"> | </span>
              {item.desc}
            </p>
          ))}
        </div>
      </div>

      {/* 2. Extensions */}
      <div className="mb-8">
        <h3 className="text-xl font-bold text-white mb-3">
          2. Extensions (Your Work)
        </h3>
        <p className="text-[#858585] mb-4">
          Explore the extensions tab where you can view installed tools or add
          new ones to your workflow.
        </p>
        <div className="blockquote-accent">
          <p className="text-[#858585] italic">
            &quot;Want to build your own? Refer to the &apos;Your Work&apos;
            section to learn how to add a custom extension.&quot;
          </p>
        </div>
      </div>
    </section>
  );
}