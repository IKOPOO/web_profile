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
import { AlertTriangle } from "lucide-react";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.className} antialiased bg-bg-dark-hard text-fg h-screen overflow-hidden flex`}>
        {/* Mobile Display Barrier */}
        <div className="md:hidden fixed inset-0 z-[1000] bg-bg-dark-hard flex flex-col items-center justify-center p-8 text-center font-mono">
          <div className="text-red mb-6 animate-pulse">
            <AlertTriangle size={56} />
          </div>

          <div className="space-y-6 max-w-xs">
            <div className="space-y-2">
              <h2 className="text-orange text-xl font-bold uppercase tracking-[0.2em]">
                System Underflow
              </h2>
              <div className="h-0.5 w-full bg-orange/20" />
            </div>

            <div className="text-fg-dim text-sm space-y-4">
              <p className="leading-relaxed">
                [ ERROR ] Resolved screen width is insufficient for <span className="text-orange">window-management.sys</span>
              </p>

              <div className="border border-bg-medium p-6 bg-bg-dark/50 text-xs text-left space-y-3">
                <p className="text-yellow">{"// "}Recommendation:</p>
                <p className="text-fg">
                  This terminal workspace is designed for desktop-class displays (min-width: 768px).
                </p>
                <p className="text-fg">
                  Please visit from a larger screen to explore the full backend architecture.
                </p>
              </div>
            </div>

            <div className="pt-8 text-gray text-[10px] tracking-widest uppercase">
              IKO_OS v1.0.4-LTS // build_2024.12
            </div>
          </div>
        </div>

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
