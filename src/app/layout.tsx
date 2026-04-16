import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Made With Love",
  description: "VS Code Themed Portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link
          rel="icon"
          href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><path d='M95.4 25.3L75.2 15.1c-1.8-.9-3.9-.7-5.5.5L24 52.6 9.9 41.8c-1.5-1.1-3.5-1-4.9.1L1.3 45c-1.7 1.5-1.7 4.1 0 5.6l12 10.5-12 10.5c-1.7 1.5-1.7 4.1 0 5.6l3.7 3.2c1.4 1.2 3.4 1.3 4.9.1L24 70l45.7 37c1.6 1.2 3.7 1.4 5.5.5l20.2-10.2c1.6-.8 2.6-2.5 2.6-4.3V29.6c0-1.8-1-3.5-2.6-4.3z' fill='%23007ACC'/></svg>"
          type="image/svg+xml"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}