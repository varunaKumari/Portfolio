"use client";

import React, { useState } from "react";
import {
  VscChevronDown,
  VscChevronRight,
  VscNewFile,
  VscNewFolder,
  VscRefresh,
  VscCollapseAll,
} from "react-icons/vsc";
import { sidebarItems } from "@/data/portfolio";

interface Props {
  activeSection: string;
  onNavigate: (id: string) => void;
}

export default function Sidebar({ activeSection, onNavigate }: Props) {
  const [expanded, setExpanded] = useState<Record<string, boolean>>({
    openEditors: false,
    portfolio: true,
    public: true,
    src: true,
    my_work: true,
    your_work: true,
  });

  const toggle = (key: string) =>
    setExpanded((prev) => ({ ...prev, [key]: !prev[key] }));

  const ChevronIcon = ({ open }: { open: boolean }) =>
    open ? <VscChevronDown size={16} /> : <VscChevronRight size={16} />;

  // Sidebar section item with proper indentation
  const TreeItem = ({
    label,
    icon,
    depth = 0,
    isActive = false,
    onClick,
    isBold = false,
    isFile = false,
    children,
    expandable = false,
    expandKey,
  }: {
    label: string;
    icon?: React.ReactNode;
    depth?: number;
    isActive?: boolean;
    onClick?: () => void;
    isBold?: boolean;
    isFile?: boolean;
    children?: React.ReactNode;
    expandable?: boolean;
    expandKey?: string;
  }) => (
    <div>
      <div
        className={`flex items-center cursor-pointer hover:bg-[#2a2d2e] pr-2 ${
          isActive ? "bg-[#37373d]" : ""
        }`}
        style={{
          paddingLeft: `${depth * 16 + 8}px`,
          height: "22px",
          fontSize: "13px",
        }}
        onClick={() => {
          if (expandable && expandKey) toggle(expandKey);
          if (onClick) onClick();
        }}
      >
        {expandable && expandKey ? (
          <span className="flex-shrink-0 mr-[2px]">
            <ChevronIcon open={expanded[expandKey] ?? false} />
          </span>
        ) : isFile ? (
          <span style={{ width: "16px" }} className="flex-shrink-0" />
        ) : null}

        {icon && <span className="mr-[6px] flex-shrink-0 text-[14px]">{icon}</span>}

        <span
          className={`truncate ${
            isActive ? "text-white" : isBold ? "text-[#cccccc]" : "text-[#cccccc]"
          } ${isBold ? "font-semibold" : ""}`}
        >
          {label}
        </span>
      </div>
      {expandable && expandKey && expanded[expandKey] && children}
    </div>
  );

  return (
    <div
      className="bg-[#252526] flex flex-col select-none overflow-hidden border-r border-[#1e1e1e]"
      style={{ width: "260px", minWidth: "260px" }}
    >
      {/* Explorer Header */}
      <div
        className="flex items-center justify-between px-4 uppercase tracking-wider text-[#bbbbbb] font-normal"
        style={{ height: "35px", fontSize: "11px", letterSpacing: "1px" }}
      >
        <span>Explorer</span>
        <span className="text-[#cccccc] cursor-pointer text-[16px] tracking-normal">
          ···
        </span>
      </div>

      {/* Scrollable tree */}
      <div className="flex-1 overflow-y-auto sidebar-scroll">
        {/* OPEN EDITORS */}
        <div
          className="flex items-center px-2 cursor-pointer hover:bg-[#2a2d2e] uppercase font-semibold tracking-wider text-[#cccccc]"
          style={{ height: "22px", fontSize: "11px" }}
          onClick={() => toggle("openEditors")}
        >
          <ChevronIcon open={expanded.openEditors ?? false} />
          <span className="ml-1">Open Editors</span>
        </div>

        {/* PORTFOLIO Section Header */}
        <div
          className="flex items-center justify-between px-2 cursor-pointer hover:bg-[#2a2d2e] uppercase font-semibold tracking-wider text-[#cccccc]"
          style={{ height: "22px", fontSize: "11px" }}
          onClick={() => toggle("portfolio")}
        >
          <div className="flex items-center">
            <ChevronIcon open={expanded.portfolio ?? false} />
            <span className="ml-1">Portfolio</span>
          </div>
          {/* Action icons */}
          <div className="flex items-center gap-1 text-[#cccccc]">
            <VscNewFile size={14} className="hover:text-white" />
            <VscNewFolder size={14} className="hover:text-white" />
            <VscRefresh size={14} className="hover:text-white" />
            <VscCollapseAll size={14} className="hover:text-white" />
          </div>
        </div>

        {expanded.portfolio && (
          <div>
            {/* .next */}
            <TreeItem
              label=".next"
              icon={<span className="text-[12px]">⚫</span>}
              depth={1}
              expandable
              expandKey="dotNext"
            />

            {/* node_modules */}
            <TreeItem
              label="node_modules"
              icon={<span className="text-[12px]">📦</span>}
              depth={1}
              expandable
              expandKey="nodeModules"
            />

            {/* public folder */}
            <TreeItem
              label="public"
              icon={<span className="text-[12px]">📁</span>}
              depth={1}
              expandable
              expandKey="public"
            >
              {/* about_me.ts (active file) */}
              <div
                className="flex items-center bg-[#37373d] pr-2"
                style={{ paddingLeft: "48px", height: "22px", fontSize: "13px" }}
              >
                <span className="mr-[6px] text-[14px]">⭐</span>
                <span className="text-white">about_me.ts</span>
              </div>

              {/* Navigation Items (the section links) */}
              <div className="border-l border-[#585858]" style={{ marginLeft: "36px" }}>
                {sidebarItems.map((item) => (
                  <div
                    key={item.id}
                    className={`flex items-center cursor-pointer hover:bg-[#2a2d2e] pr-2 transition-colors ${
                      activeSection === item.id ? "" : ""
                    }`}
                    style={{ paddingLeft: "16px", height: "22px", fontSize: "13px" }}
                    onClick={() => onNavigate(item.id)}
                  >
                    <span className="mr-[6px] text-[14px]">{item.icon}</span>
                    <span
                      className={
                        activeSection === item.id
                          ? "text-[#4fc1ff]"
                          : "text-[#cccccc]"
                      }
                    >
                      {item.label}
                    </span>
                  </div>
                ))}
              </div>
            </TreeItem>

            {/* src folder */}
            <TreeItem
              label="src"
              icon={<span className="text-[12px]">📦</span>}
              depth={1}
              expandable
              expandKey="src"
            >
              {/* my_work */}
              <TreeItem
                label="my_work"
                icon={<span className="text-[12px]">📊</span>}
                depth={2}
                expandable
                expandKey="my_work"
              >
                {["MarcelPearl.tsx", "PearlPost.tsx", "Jivika"].map((file) => (
                  <div
                    key={file}
                    className="flex items-center hover:bg-[#2a2d2e] cursor-pointer pr-2 text-[#cccccc]"
                    style={{
                      paddingLeft: "72px",
                      height: "22px",
                      fontSize: "13px",
                    }}
                  >
                    <span className="mr-[6px] text-[14px]">⚙️</span>
                    <span>{file}</span>
                  </div>
                ))}
              </TreeItem>

              {/* your_work */}
              <TreeItem
                label="your_work"
                icon={<span className="text-[12px]">📊</span>}
                depth={2}
                expandable
                expandKey="your_work"
              >
                <div
                  className="flex items-center hover:bg-[#2a2d2e] cursor-pointer pr-2 text-[#cccccc]"
                  style={{
                    paddingLeft: "72px",
                    height: "22px",
                    fontSize: "13px",
                  }}
                >
                  <span className="mr-[6px] text-[14px]">📄</span>
                  <span>Readme.md</span>
                </div>
              </TreeItem>
            </TreeItem>

            {/* Root config files */}
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
                className="flex items-center hover:bg-[#2a2d2e] cursor-pointer pr-2 text-[#cccccc]"
                style={{
                  paddingLeft: "24px",
                  height: "22px",
                  fontSize: "13px",
                }}
              >
                <span className="mr-[6px] text-[14px]">{file.icon}</span>
                <span>{file.name}</span>
              </div>
            ))}
          </div>
        )}

        {/* Bottom collapsible sections */}
        {["OUTLINE", "TIMELINE", "SCRIPTS"].map((section) => (
          <div
            key={section}
            className="flex items-center px-2 cursor-pointer hover:bg-[#2a2d2e] uppercase font-semibold tracking-wider text-[#cccccc]"
            style={{ height: "22px", fontSize: "11px" }}
          >
            <VscChevronRight size={16} />
            <span className="ml-1">{section}</span>
          </div>
        ))}
      </div>
    </div>
  );
}