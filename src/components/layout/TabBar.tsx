"use client";

import React from "react";
import { VscClose, VscEllipsis } from "react-icons/vsc";

export default function TabBar() {
  return (
    <div
      className="bg-[#252526] flex items-end justify-between"
      style={{ height: "35px", minHeight: "35px" }}
    >
      {/* Tab */}
      <div className="flex h-full items-end">
        <div
          className="flex items-center gap-2 bg-[#1e1e1e] text-white px-3 h-[35px] border-t-[2px] border-t-[#007acc] relative"
          style={{ fontSize: "13px", minWidth: "140px" }}
        >
          <span className="text-[14px]">⭐</span>
          <span className="text-[#e8bf6a]">About Me</span>
          <button className="ml-auto p-[2px] rounded hover:bg-[rgba(255,255,255,0.1)]">
            <VscClose size={16} className="text-[#cccccc] hover:text-white" />
          </button>
        </div>
      </div>

      {/* Right side icons */}
      <div className="flex items-center pr-2 h-full gap-1">
        <button className="p-1 rounded hover:bg-[rgba(255,255,255,0.1)] text-[#cccccc]">
          <VscEllipsis size={16} />
        </button>
      </div>
    </div>
  );
}