"use client";

import React from "react";

export default function Footer() {
  return (
    <section className="py-16">
      {/* Code Block */}
      <div className="code-block max-w-2xl mx-auto">
        {/* Header */}
        <div className="code-block-header">
          <div className="code-dot bg-[#ff5f57]" />
          <div className="code-dot bg-[#ffbd2e]" />
          <div className="code-dot bg-[#28c840]" />
          <span className="ml-auto text-xs text-[#858585]">footer.tsx</span>
        </div>

        {/* Code Content */}
        <div className="p-4 font-mono text-sm">
          <div className="flex">
            <span className="text-[#858585] w-8 text-right mr-4 select-none">
              1
            </span>
            <span>
              <span className="text-[#c586c0]">if</span>
              <span className="text-white"> (</span>
              <span className="text-[#9cdcfe]">user</span>
              <span className="text-white">.</span>
              <span className="text-[#dcdcaa]">hasRead</span>
              <span className="text-white">(</span>
              <span className="text-[#ce9178]">&quot;till_the_end&quot;</span>
              <span className="text-white">)) {"{"}</span>
            </span>
          </div>
          <div className="flex">
            <span className="text-[#858585] w-8 text-right mr-4 select-none">
              2
            </span>
            <span className="ml-8">
              <span className="text-[#9cdcfe]">console</span>
              <span className="text-white">.</span>
              <span className="text-[#dcdcaa]">log</span>
              <span className="text-white">(</span>
              <span className="text-[#ce9178]">
                &quot;Thank you for reading!&quot;
              </span>
              <span className="text-white">);</span>
            </span>
          </div>
          <div className="flex">
            <span className="text-[#858585] w-8 text-right mr-4 select-none">
              3
            </span>
            <span className="text-white">{"}"}</span>
          </div>
        </div>
      </div>
    </section>
  );
}