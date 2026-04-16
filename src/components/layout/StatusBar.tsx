"use client";

import React from "react";
import {
  VscSourceControl,
  VscSync,
  VscError,
  VscWarning,
  VscBroadcast,
} from "react-icons/vsc";

export default function StatusBar() {
  return (
    <div
      className="bg-[#007acc] flex items-center justify-between text-white select-none"
      style={{ height: "22px", fontSize: "12px", lineHeight: "22px" }}
    >
      {/* Left side */}
      <div className="flex items-center h-full">
        {/* Branch */}
        <div className="flex items-center gap-[6px] px-[8px] h-full hover:bg-[rgba(255,255,255,0.12)] cursor-pointer">
          <VscSourceControl size={14} />
          <span>main*</span>
        </div>
        {/* Sync */}
        <div className="flex items-center px-[6px] h-full hover:bg-[rgba(255,255,255,0.12)] cursor-pointer">
          <VscSync size={14} />
        </div>
        {/* Errors & Warnings */}
        <div className="flex items-center gap-[8px] px-[8px] h-full hover:bg-[rgba(255,255,255,0.12)] cursor-pointer">
          <span className="flex items-center gap-[3px]">
            <VscError size={14} />
            <span>0</span>
          </span>
          <span className="flex items-center gap-[3px]">
            <VscWarning size={14} />
            <span>0</span>
          </span>
        </div>
      </div>

      {/* Right side */}
      <div className="flex items-center h-full">
        {["Spaces: 2", "UTF-8", "CRLF", "{ } TypeScript JSX"].map((item) => (
          <div
            key={item}
            className="px-[8px] h-full hover:bg-[rgba(255,255,255,0.12)] cursor-pointer flex items-center"
          >
            {item}
          </div>
        ))}
        {/* Go Live */}
        <div className="flex items-center gap-[4px] px-[8px] h-full hover:bg-[rgba(255,255,255,0.12)] cursor-pointer">
          <VscBroadcast size={14} />
          <span>Go Live</span>
        </div>
      </div>
    </div>
  );
}