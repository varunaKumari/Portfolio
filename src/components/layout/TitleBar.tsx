"use client";

import React from "react";
import { VscChromeMinimize, VscChromeMaximize, VscChromeClose } from "react-icons/vsc";

export default function TitleBar() {
  return (
    <div className="h-8 bg-[#3c3c3c] flex items-center justify-between select-none border-b border-[#2b2b2b]">
      {/* Left - VS Code Icon */}
      <div className="flex items-center px-3">
        <svg width="16" height="16" viewBox="0 0 100 100" className="text-blue-500">
          <path
            d="M95.4 25.3L75.2 15.1c-1.8-.9-3.9-.7-5.5.5L24 52.6 9.9 41.8c-1.5-1.1-3.5-1-4.9.1L1.3 45c-1.7 1.5-1.7 4.1 0 5.6l12 10.5-12 10.5c-1.7 1.5-1.7 4.1 0 5.6l3.7 3.2c1.4 1.2 3.4 1.3 4.9.1L24 70l45.7 37c1.6 1.2 3.7 1.4 5.5.5l20.2-10.2c1.6-.8 2.6-2.5 2.6-4.3V29.6c0-1.8-1-3.5-2.6-4.3zM75 72.6L45.3 51.2 75 29.8v42.8z"
            fill="#007ACC"
          />
        </svg>
      </div>

      {/* Center - Title */}
      <div className="text-xs text-vscode-textMuted">
        Made With Love
      </div>

      {/* Right - Window Controls */}
      <div className="flex items-center h-full">
        <button className="h-full px-4 hover:bg-[#505050] flex items-center justify-center">
          <VscChromeMinimize size={14} className="text-vscode-text" />
        </button>
        <button className="h-full px-4 hover:bg-[#505050] flex items-center justify-center">
          <VscChromeMaximize size={14} className="text-vscode-text" />
        </button>
        <button className="h-full px-4 hover:bg-red-600 flex items-center justify-center">
          <VscChromeClose size={14} className="text-vscode-text" />
        </button>
      </div>
    </div>
  );
}