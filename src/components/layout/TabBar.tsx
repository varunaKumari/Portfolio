"use client";

import React from "react";
import { VscClose, VscSplitHorizontal } from "react-icons/vsc";

export default function TabBar() {
  return (
    <div className="h-9 bg-[#252526] flex items-center justify-between border-b border-[#1e1e1e]">
      {/* Tabs */}
      <div className="flex h-full">
        <div className="flex items-center h-full px-3 bg-[#1e1e1e] border-t-[2px] border-t-[#007acc] text-white text-[13px] gap-2 min-w-[120px]">
          <span>⭐</span>
          <span className="text-[#e5c07b]">About Me</span>
          <button className="ml-auto hover:bg-[#333] rounded p-[2px]">
            <VscClose size={14} />
          </button>
        </div>
      </div>

      {/* Right actions */}
      <div className="flex items-center px-2 gap-1">
        <button className="p-1 hover:bg-[#333] rounded text-vscode-textMuted">
          <VscSplitHorizontal size={16} />
        </button>
      </div>
    </div>
  );
}