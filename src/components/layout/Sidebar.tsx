"use client";

import React, { useState } from "react";
import { VscChevronDown, VscChevronRight } from "react-icons/vsc";
import { sidebarItems } from "@/data/portfolio";

interface Props {
  activeSection: string;
  onNavigate: (id: string) => void;
}

export default function Sidebar({ activeSection, onNavigate }: Props) {
  const [expandedFolders, setExpandedFolders] = useState<Record<string, boolean>>({
    portfolio: true,
    public: true,
    src: true,
    my_work: true,
    your_work: true,
    openEditors: true,
  });

  const toggleFolder = (folder: string) => {
    setExpandedFolders((prev) => ({ ...prev, [folder]: !prev[folder] }));
  };

  const getIconForItem = (id: string) => {
    const iconMap: Record<string, string> = {
      "about-me": "👤",
      "work-experience": "💻",
      skills: "🔧",
      "my-work": "💡",
      achievements: "🏆",
      "contact-me": "📧",
      "explore-more": "✅",
    };
    return iconMap[id] || "📄";
  };

  return (
    <div className="w-64 bg-[#252526] border-r border-[#2b2b2b] flex flex-col select-none overflow-hidden">
      {/* Header */}
      <div className="h-9 flex items-center justify-between px-4 text-[11px] font-semibold tracking-wide text-[#bbbbbb] uppercase">
        <span>Explorer</span>
        <span className="text-vscode-textMuted cursor-pointer">···</span>
      </div>

      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto sidebar-scroll text-[13px]">
        {/* OPEN EDITORS */}
        <div>
          <button
            className="w-full flex items-center px-2 py-1 hover:bg-[#2a2d2e] text-[11px] font-semibold tracking-wide uppercase"
            onClick={() => toggleFolder("openEditors")}
          >
            {expandedFolders.openEditors ? (
              <VscChevronDown size={16} />
            ) : (
              <VscChevronRight size={16} />
            )}
            <span className="ml-1">Open Editors</span>
          </button>
        </div>

        {/* PORTFOLIO */}
        <div>
          <button
            className="w-full flex items-center px-2 py-1 hover:bg-[#2a2d2e] text-[11px] font-semibold tracking-wide uppercase"
            onClick={() => toggleFolder("portfolio")}
          >
            {expandedFolders.portfolio ? (
              <VscChevronDown size={16} />
            ) : (
              <VscChevronRight size={16} />
            )}
            <span className="ml-1">Portfolio</span>
          </button>

          {expandedFolders.portfolio && (
            <div className="ml-4">
              {/* .next folder */}
              <div className="flex items-center px-2 py-[2px] text-vscode-textMuted">
                <VscChevronRight size={14} />
                <span className="ml-1">⚫</span>
                <span className="ml-2">.next</span>
              </div>

              {/* node_modules */}
              <div className="flex items-center px-2 py-[2px] text-vscode-textMuted">
                <VscChevronRight size={14} />
                <span className="ml-1">📦</span>
                <span className="ml-2">node_modules</span>
              </div>

              {/* public folder */}
              <div>
                <button
                  className="w-full flex items-center px-2 py-[2px] hover:bg-[#2a2d2e]"
                  onClick={() => toggleFolder("public")}
                >
                  {expandedFolders.public ? (
                    <VscChevronDown size={14} />
                  ) : (
                    <VscChevronRight size={14} />
                  )}
                  <span className="ml-1">📁</span>
                  <span className="ml-2">public</span>
                </button>

                {expandedFolders.public && (
                  <div className="ml-6">
                    {/* about_me.ts - active file */}
                    <div className="flex items-center px-2 py-[2px] bg-[#37373d] text-white">
                      <span>⭐</span>
                      <span className="ml-2">about_me.ts</span>
                    </div>

                    {/* Navigation Items */}
                    <div className="ml-4 border-l border-[#404040]">
                      {sidebarItems.map((item) => (
                        <button
                          key={item.id}
                          className={`w-full flex items-center px-3 py-[2px] hover:bg-[#2a2d2e] transition-colors ${
                            activeSection === item.id
                              ? "text-[#4fc1ff] font-medium"
                              : "text-vscode-text"
                          }`}
                          onClick={() => onNavigate(item.id)}
                        >
                          <span className="text-xs">{item.icon}</span>
                          <span className="ml-2 text-[13px]">{item.label}</span>
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* src folder */}
              <div>
                <button
                  className="w-full flex items-center px-2 py-[2px] hover:bg-[#2a2d2e]"
                  onClick={() => toggleFolder("src")}
                >
                  {expandedFolders.src ? (
                    <VscChevronDown size={14} />
                  ) : (
                    <VscChevronRight size={14} />
                  )}
                  <span className="ml-1">📦</span>
                  <span className="ml-2">src</span>
                </button>

                {expandedFolders.src && (
                  <div className="ml-6">
                    {/* my_work folder */}
                    <div>
                      <button
                        className="w-full flex items-center px-2 py-[2px] hover:bg-[#2a2d2e]"
                        onClick={() => toggleFolder("my_work")}
                      >
                        {expandedFolders.my_work ? (
                          <VscChevronDown size={14} />
                        ) : (
                          <VscChevronRight size={14} />
                        )}
                        <span className="ml-1">📊</span>
                        <span className="ml-2">my_work</span>
                      </button>

                      {expandedFolders.my_work && (
                        <div className="ml-6">
                          {["MarcelPearl.tsx", "PearlPost.tsx", "Jivika"].map(
                            (file) => (
                              <div
                                key={file}
                                className="flex items-center px-2 py-[2px] hover:bg-[#2a2d2e] cursor-pointer text-vscode-text"
                              >
                                <span>⚙️</span>
                                <span className="ml-2">{file}</span>
                              </div>
                            )
                          )}
                        </div>
                      )}
                    </div>

                    {/* your_work folder */}
                    <div>
                      <button
                        className="w-full flex items-center px-2 py-[2px] hover:bg-[#2a2d2e]"
                        onClick={() => toggleFolder("your_work")}
                      >
                        {expandedFolders.your_work ? (
                          <VscChevronDown size={14} />
                        ) : (
                          <VscChevronRight size={14} />
                        )}
                        <span className="ml-1">📊</span>
                        <span className="ml-2">your_work</span>
                      </button>

                      {expandedFolders.your_work && (
                        <div className="ml-6">
                          <div className="flex items-center px-2 py-[2px] hover:bg-[#2a2d2e] cursor-pointer text-vscode-text">
                            <span>📄</span>
                            <span className="ml-2">Readme.md</span>
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                )}
              </div>

              {/* Root files */}
              {[
                { name: ".eslintrc.json", icon: "⚙️" },
                { name: ".gitignore", icon: "🔴" },
                { name: "next.config.js", icon: "⚫" },
                { name: "package-lock.json", icon: "📦" },
                { name: "package.json", icon: "📦" },
                { name: "tailwind.config.ts", icon: "🌊" },
                { name: "tsconfig.json", icon: "📘" },
              ].map((file) => (
                <div
                  key={file.name}
                  className="flex items-center px-2 py-[2px] hover:bg-[#2a2d2e] cursor-pointer text-vscode-text"
                >
                  <span>{file.icon}</span>
                  <span className="ml-2">{file.name}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Bottom sections */}
        {["OUTLINE", "TIMELINE", "SCRIPTS"].map((section) => (
          <button
            key={section}
            className="w-full flex items-center px-2 py-1 hover:bg-[#2a2d2e] text-[11px] font-semibold tracking-wide uppercase"
          >
            <VscChevronRight size={16} />
            <span className="ml-1">{section}</span>
          </button>
        ))}
      </div>
    </div>
  );
}