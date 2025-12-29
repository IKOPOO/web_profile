"use client"

import { useState, useEffect } from "react"
import { Terminal, User, FileText, Edit3, Folder } from "lucide-react"

export default function Sidebar() {
  const [currentSection, setCurrentSection] = useState("home")

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "") || "home"
      setCurrentSection(hash)
    }

    window.addEventListener("hashchange", handleHashChange)
    handleHashChange()
    return () => window.removeEventListener("hashchange", handleHashChange)
  }, [])

  const navItems = [
    { name: "home", icon: Terminal, href: "#home" },
    { name: "about", icon: User, href: "#about" },
    { name: "blog", icon: FileText, href: "#blog" },
    { name: "notes", icon: Edit3, href: "#notes" },
    { name: "projects", icon: Folder, href: "#projects" },
  ]

  return (
    <div className="w-16 h-full bg-bg-dark-hard border-r border-bg-medium flex flex-col items-center py-6 gap-6 shrink-0">
      {navItems.map((item) => {
        const Icon = item.icon
        const isActive = currentSection === item.name

        return (
          <a
            key={item.href}
            href={item.href}
            onClick={(e) => {
              e.preventDefault()
              const id = item.name === "home" ? "" : item.name
              window.history.pushState(null, "", id ? `#${id}` : window.location.pathname)
              window.dispatchEvent(new Event("hashchange"))
            }}
            className={`
              w-10 h-10 flex items-center justify-center rounded-lg
              transition-all duration-200 group relative
              ${isActive
                ? "bg-orange text-bg-dark-hard shadow-[0_0_15px_rgba(254,128,25,0.3)]"
                : "text-gray hover:bg-bg-medium hover:text-fg"
              }
            `}
            title={item.name}
          >
            <Icon size={20} strokeWidth={isActive ? 2.5 : 2} />

            {/* Tooltip or Label */}
            <span className="absolute left-12 px-2 py-1 bg-bg-dark border border-bg-medium text-fg text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-[100]">
              {item.name}
            </span>
          </a>
        )
      })}
    </div>
  )
}
