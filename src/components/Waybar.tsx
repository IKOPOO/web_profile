"use client"

import { useState, useEffect } from "react"
import { Cpu, MemoryStick, Wifi, Volume2, Battery, Power } from "lucide-react"

interface WaybarProps {
  currentSection?: string
}

export default function Waybar({ currentSection: propSection }: WaybarProps) {
  const [currentTime, setCurrentTime] = useState(new Date())
  const [activeSection, setActiveSection] = useState(propSection || "home")

  // Sync with URL hash
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "") || "home"
      setActiveSection(hash)
    }
    window.addEventListener("hashchange", handleHashChange)
    handleHashChange()
    return () => window.removeEventListener("hashchange", handleHashChange)
  }, [])

  // Update clock every second
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  const workspaces = [
    { id: 1, name: "home", href: "#home" },
    { id: 2, name: "about", href: "#about" },
    { id: 3, name: "blog", href: "#blog" },
    { id: 4, name: "notes", href: "#notes" },
    { id: 5, name: "projects", href: "#projects" },
  ]

  // Format date and time
  const formatDate = (date: Date) => {
    const months = [
      "January", "February", "March", "April", "May", "June",
      "July", "August", "September", "October", "November", "December",
    ]
    const day = date.getDate()
    const month = months[date.getMonth()]
    const year = date.getFullYear()
    const hours = String(date.getHours()).padStart(2, "0")
    const minutes = String(date.getMinutes()).padStart(2, "0")

    return `${day} ${month} ${year} | ${hours}:${minutes}`
  }

  return (
    <div className="sticky top-2 z-50 flex justify-center w-full mb-8 h-10">
      <div className="w-[98%] h-full bg-bg-dark rounded-xl border border-bg-medium shadow-lg bg-opacity-95 backdrop-blur px-3">
        <div className="h-full text-sm font-mono flex items-center justify-between">
          {/* Left: Workspaces + Current Page */}
          <div className="flex items-center gap-2">
            {/* Workspace numbers */}
            <div className="flex items-center gap-1">
              {workspaces.map(ws => (
                <a
                  key={ws.id}
                  href={ws.href}
                  className={`
                    w-7 h-7 flex items-center justify-center rounded
                    transition-colors duration-200
                    ${activeSection === ws.name
                      ? "bg-orange text-bg-dark font-bold"
                      : "bg-bg-medium text-fg-dim hover:bg-bg-medium hover:text-fg"
                    }
                  `}
                  onClick={(e) => {
                    e.preventDefault()
                    const id = ws.name === "home" ? "" : ws.name
                    window.history.pushState(null, "", id ? `#${id}` : window.location.pathname)
                    window.dispatchEvent(new Event("hashchange"))
                  }}
                >
                  {ws.id}
                </a>
              ))}
            </div>

            {/* Separator */}
            <div className="text-gray">|</div>

            {/* Current page indicator */}
            <div className="text-green">
              <span className="text-gray">[</span>
              {activeSection}
              <span className="text-gray">]</span>
            </div>
          </div>

          {/* Center: Date & Time */}
          <div className="text-fg font-semibold">{formatDate(currentTime)}</div>

          {/* Right: System info (dummy) */}
          <div className="flex items-center gap-3 text-fg-dim">
            <div className="flex items-center gap-1">
              <Cpu size={16} className="text-blue" />
              <span>45%</span>
            </div>
            <div className="flex items-center gap-1">
              <MemoryStick size={16} className="text-yellow" />
              <span>8.2GB</span>
            </div>
            <div className="flex items-center gap-1">
              <Wifi size={16} className="text-green" />
              <span>WiFi</span>
            </div>
            <div className="flex items-center gap-1">
              <Volume2 size={16} className="text-aqua" />
              <span>75%</span>
            </div>
            <div className="flex items-center gap-1">
              <Battery size={16} className="text-orange" />
              <span>85%</span>
            </div>
            <div className="text-red hover:text-yellow cursor-pointer transition-colors">
              <Power size={18} />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
