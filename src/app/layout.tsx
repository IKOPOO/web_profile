import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";
import Waybar from "@/components/Waybar";

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata: Metadata = {
  title: "Backend Dev • Blog & Portfolio",
  description: "Personal blog of a backend/devops engineer - systems, code, and infrastructure",
};

import Sidebar from "@/components/Sidebar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased bg-bg-dark-hard text-fg h-screen overflow-hidden flex`}>
        {/* Main Desktop Container */}
        <div className="flex-1 flex flex-col min-w-0 bg-bg-dark relative">
          <Waybar />
          <div className="flex-1 flex overflow-hidden">
            {/* Sidebar inside the desktop */}
            <Sidebar />

            {/* The actual workspace where windows appear */}
            <main className="flex-1 relative overflow-hidden bg-[url('https://www.transparenttextures.com/patterns/stardust.png')] bg-fixed">
              {children}

              {/* Background Instruction Clue */}
              <div className="absolute top-[40%] right-[15%] -translate-y-1/2 text-white pointer-events-none select-none font-mono text-lg md:text-xl text-right space-y-2 max-w-xs">
                <p>[ HINT ] Windows are draggable & overlapping</p>
                <p>Drag title bars to reposition</p>
              </div>
            </main>
          </div>
        </div>
      </body>
    </html>
  );
}
