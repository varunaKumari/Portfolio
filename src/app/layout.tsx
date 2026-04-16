import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Made With Love",
  description: "VS Code Themed Portfolio",
  icons: {
    icon: "/vscode-icon.svg",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="overflow-hidden">{children}</body>
    </html>
  );
}