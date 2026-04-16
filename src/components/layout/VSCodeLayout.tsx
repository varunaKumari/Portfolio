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
    const element = document.getElementById(id);
    if (element && editorRef.current) {
      const container = editorRef.current;
      const elementTop = element.offsetTop - container.offsetTop;
      container.scrollTo({
        top: elementTop - 20,
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    const container = editorRef.current;
    if (!container) return;

    const handleScroll = () => {
      const sections = [
        "about-me",
        "work-experience",
        "skills",
        "my-work",
        "achievements",
        "contact-me",
        "explore-more",
      ];

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          const containerRect = container.getBoundingClientRect();
          if (rect.top >= containerRect.top && rect.top < containerRect.top + 300) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    container.addEventListener("scroll", handleScroll);
    return () => container.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="h-screen w-screen flex flex-col overflow-hidden bg-vscode-bg">
      {/* Title Bar */}
      <TitleBar />

      {/* Menu Bar */}
      <div className="h-8 bg-[#3c3c3c] flex items-center px-2 text-sm text-vscode-text border-b border-[#2b2b2b]">
        {["File", "Edit", "Selection", "View", "Go", "Run", "Terminal", "Help"].map(
          (item) => (
            <button
              key={item}
              className="px-2 py-1 hover:bg-[#505050] rounded text-[13px]"
            >
              {item}
            </button>
          )
        )}
      </div>

      {/* Main Content */}
      <div className="flex flex-1 overflow-hidden">
        {/* Activity Bar */}
        <ActivityBar
          sidebarOpen={sidebarOpen}
          onToggleSidebar={() => setSidebarOpen(!sidebarOpen)}
        />

        {/* Sidebar / Explorer */}
        {sidebarOpen && (
          <Sidebar
            activeSection={activeSection}
            onNavigate={scrollToSection}
          />
        )}

        {/* Editor Area */}
        <div className="flex-1 flex flex-col overflow-hidden">
          {/* Tabs */}
          <TabBar />

          {/* Editor Content */}
          <div
            ref={editorRef}
            className="flex-1 overflow-y-auto editor-scroll bg-vscode-editor"
          >
            <div className="max-w-5xl mx-auto px-8 py-4">
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