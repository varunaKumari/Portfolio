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
    { Icon: VscFiles, label: "Explorer" },
    { Icon: VscSearch, label: "Search" },
    { Icon: VscSourceControl, label: "Source Control" },
    { Icon: VscDebugAlt, label: "Run and Debug" },
    { Icon: VscExtensions, label: "Extensions" },
  ];

  const bottomIcons = [
    { Icon: VscAccount, label: "Accounts" },
    { Icon: VscSettingsGear, label: "Manage" },
  ];

  return (
    <div
      className="bg-[#333333] flex flex-col justify-between items-center border-r border-[#222]"
      style={{ width: "48px", minWidth: "48px" }}
    >
      {/* Top Icons */}
      <div className="flex flex-col w-full">
        {topIcons.map(({ Icon, label }, index) => {
          const isActive = activeIcon === index;
          return (
            <div key={label} className="relative group">
              <button
                className={`w-full flex items-center justify-center transition-colors ${
                  isActive
                    ? "text-white"
                    : "text-[#858585] hover:text-white"
                }`}
                style={{ height: "48px" }}
                onClick={() => {
                  setActiveIcon(index);
                  if (index === 0) onToggleSidebar();
                }}
                title={label}
              >
                {isActive && (
                  <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-white" />
                )}
                <Icon size={24} />
              </button>
            </div>
          );
        })}
      </div>

      {/* Bottom Icons */}
      <div className="flex flex-col w-full">
        {bottomIcons.map(({ Icon, label }) => (
          <button
            key={label}
            className="w-full flex items-center justify-center text-[#858585] hover:text-white transition-colors"
            style={{ height: "48px" }}
            title={label}
          >
            <Icon size={24} />
          </button>
        ))}
      </div>
    </div>
  );
}