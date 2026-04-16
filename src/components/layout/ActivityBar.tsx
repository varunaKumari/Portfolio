"use client";

import React, { useState } from "react";
import {
  VscFiles,
  VscSearch,
  VscSourceControl,
  VscDebugAlt,
  VscExtensions,
  VscAccount,
  VscSettingsGear,
} from "react-icons/vsc";

interface Props {
  sidebarOpen: boolean;
  onToggleSidebar: () => void;
}

export default function ActivityBar({ sidebarOpen, onToggleSidebar }: Props) {
  const [activeIcon, setActiveIcon] = useState(0);

  const topIcons = [
    { icon: VscFiles, label: "Explorer" },
    { icon: VscSearch, label: "Search" },
    { icon: VscSourceControl, label: "Source Control" },
    { icon: VscDebugAlt, label: "Run and Debug" },
    { icon: VscExtensions, label: "Extensions" },
  ];

  const bottomIcons = [
    { icon: VscAccount, label: "Accounts" },
    { icon: VscSettingsGear, label: "Settings" },
  ];

  return (
    <div className="w-12 bg-[#2c2c2c] flex flex-col justify-between items-center py-1 border-r border-[#2b2b2b]">
      {/* Top Icons */}
      <div className="flex flex-col items-center w-full">
        {topIcons.map((item, index) => {
          const Icon = item.icon;
          const isActive = index === activeIcon;
          return (
            <div key={index} className="tooltip-container w-full">
              <button
                className={`w-full h-12 flex items-center justify-center relative
                  ${isActive ? "text-white" : "text-[#858585] hover:text-white"}
                `}
                onClick={() => {
                  setActiveIcon(index);
                  if (index === 0) onToggleSidebar();
                }}
              >
                {isActive && (
                  <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-white" />
                )}
                <Icon size={24} />
              </button>
              <span className="tooltip">{item.label}</span>
            </div>
          );
        })}
      </div>

      {/* Bottom Icons */}
      <div className="flex flex-col items-center w-full">
        {bottomIcons.map((item, index) => {
          const Icon = item.icon;
          return (
            <div key={index} className="tooltip-container w-full">
              <button className="w-full h-12 flex items-center justify-center text-[#858585] hover:text-white">
                <Icon size={24} />
              </button>
              <span className="tooltip">{item.label}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
}