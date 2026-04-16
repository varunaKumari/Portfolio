import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./src/**/*.{js,ts,jsx,tsx,mdx}"],
  theme: {
    extend: {
      colors: {
        vscode: {
          bg: "#1e1e1e",
          sidebar: "#252526",
          activityBar: "#333333",
          activityBarBg: "#2c2c2c",
          editor: "#1e1e1e",
          titleBar: "#3c3c3c",
          tab: "#2d2d2d",
          tabActive: "#1e1e1e",
          tabBorder: "#1e1e1e",
          statusBar: "#007acc",
          statusBarBg: "#1f1f1f",
          text: "#cccccc",
          textMuted: "#858585",
          textBright: "#ffffff",
          accent: "#007acc",
          sidebarText: "#cccccc",
          sidebarHover: "#2a2d2e",
          sidebarActive: "#37373d",
          border: "#474747",
          scrollbar: "#424242",
          highlight: "#264f78",
          green: "#4ec9b0",
          yellow: "#dcdcaa",
          orange: "#ce9178",
          blue: "#569cd6",
          lightBlue: "#9cdcfe",
          pink: "#c586c0",
          yellowBright: "#e5c07b",
        },
      },
      fontFamily: {
        mono: ["Consolas", "Courier New", "monospace"],
        sans: ["Segoe UI", "Helvetica", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;