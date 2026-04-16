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
    <div className="h-6 bg-[#007acc] flex items-center justify-between px-2 text-white text-[12px] select-none">
      {/* Left */}
      <div className="flex items-center gap-3">
        <div className="flex items-center gap-1 hover:bg-[#1f8ad2] px-1 cursor-pointer">
          <VscSourceControl size={14} />
          <span>main*</span>
        </div>
        <div className="flex items-center gap-1 hover:bg-[#1f8ad2] px-1 cursor-pointer">
          <VscSync size={12} />
        </div>
        <div className="flex items-center gap-2 hover:bg-[#1f8ad2] px-1 cursor-pointer">
          <div className="flex items-center gap-1">
            <VscError size={14} />
            <span>0</span>
          </div>
          <div className="flex items-center gap-1">
            <VscWarning size={14} />
            <span>0</span>
          </div>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-3">
        <span className="hover:bg-[#1f8ad2] px-1 cursor-pointer">Spaces: 2</span>
        <span className="hover:bg-[#1f8ad2] px-1 cursor-pointer">UTF-8</span>
        <span className="hover:bg-[#1f8ad2] px-1 cursor-pointer">CRLF</span>
        <span className="hover:bg-[#1f8ad2] px-1 cursor-pointer">{"{ } TypeScript JSX"}</span>
        <div className="flex items-center gap-1 hover:bg-[#1f8ad2] px-1 cursor-pointer">
          <VscBroadcast size={14} />
          <span>Go Live</span>
        </div>
      </div>
    </div>
  );
}