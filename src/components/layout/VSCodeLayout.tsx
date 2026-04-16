"use client";

import React, { useState, useRef, useEffect } from "react";
import ActivityBar from "./ActivityBar";
import Sidebar from "./Sidebar";
import TabBar from "./TabBar";
import StatusBar from "./StatusBar";
import TitleBar from "./TitleBar";
import HeroSection from "../sections/HeroSection";
import AboutSection from "../sections/AboutSection";
import WorkExperience from "../sections/WorkExperience";
import SkillsSection from "../sections/SkillsSection";
import ProjectsSection from "../sections/ProjectsSection";
import AchievementsSection from "../sections/AchievementsSection";
import ContactSection from "../sections/ContactSection";
import ExploreMore from "../sections/ExploreMore";
import Footer from "../sections/Footer";

export default function VSCodeLayout() {
  const [activeSection, setActiveSection] = useState("about-me");
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const editorRef = useRef<HTMLDivElement>(null);

  const scrollToSection = (id: string) => {
    setActiveSection(id);
    const el = document.getElementById(id);
    if (el && editorRef.current) {
      const container = editorRef.current;
      const top = el.offsetTop - container.offsetTop;
      container.scrollTo({ top: top - 20, behavior: "smooth" });
    }
  };

  // Track scroll position to highlight active sidebar item
  useEffect(() => {
    const container = editorRef.current;
    if (!container) return;

    const onScroll = () => {
      const ids = [
        "about-me",
        "work-experience",
        "skills",
        "my-work",
        "achievements",
        "contact-me",
        "explore-more",
      ];
      const containerTop = container.getBoundingClientRect().top;

      for (const id of ids) {
        const el = document.getElementById(id);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top >= containerTop && rect.top < containerTop + 400) {
            setActiveSection(id);
            break;
          }
        }
      }
    };

    container.addEventListener("scroll", onScroll);
    return () => container.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="h-screen w-screen flex flex-col overflow-hidden bg-[#1e1e1e]">
      {/* Title Bar */}
      <TitleBar />

      {/* Menu Bar */}
      <div
        className="bg-[#3c3c3c] flex items-center px-[4px] border-b border-[#2b2b2b]"
        style={{ height: "30px", minHeight: "30px" }}
      >
        {["File", "Edit", "Selection", "View", "Go", "Run", "Terminal", "Help"].map(
          (item) => (
            <button
              key={item}
              className="px-[7px] py-[2px] text-[#cccccc] hover:bg-[rgba(255,255,255,0.1)] rounded-[3px]"
              style={{ fontSize: "13px" }}
            >
              {item}
            </button>
          )
        )}
      </div>

      {/* Main Area */}
      <div className="flex flex-1 overflow-hidden">
        {/* Activity Bar */}
        <ActivityBar
          sidebarOpen={sidebarOpen}
          onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        />

        {/* Sidebar */}
        {sidebarOpen && (
          <Sidebar activeSection={activeSection} onNavigate={scrollToSection} />
        )}

        {/* Editor */}
        <div className="flex-1 flex flex-col overflow-hidden min-w-0">
          {/* Tab Bar */}
          <TabBar />

          {/* Editor Content */}
          <div
            ref={editorRef}
            className="flex-1 overflow-y-auto editor-area bg-[#1e1e1e]"
          >
            <div className="max-w-[1000px] mx-auto px-[40px] pb-[100px]">
              <div id="about-me">
                <HeroSection />
                <AboutSection />
              </div>
              <div id="work-experience">
                <WorkExperience />
              </div>
              <div id="skills">
                <SkillsSection />
              </div>
              <div id="my-work">
                <ProjectsSection />
              </div>
              <div id="achievements">
                <AchievementsSection />
              </div>
              <div id="contact-me">
                <ContactSection />
              </div>
              <div id="explore-more">
                <ExploreMore />
              </div>
              <Footer />
            </div>
          </div>
        </div>
      </div>

      {/* Status Bar */}
      <StatusBar />
    </div>
  );
}