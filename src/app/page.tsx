"use client"

import { useState, useEffect } from "react"
import Hero from "@/components/Hero"
import About from "@/components/About"
import Blog from "@/components/Blog"
import Notes from "@/components/Notes"
import Projects from "@/components/Projects"
import DesktopWindow from "@/components/DesktopWindow"

export default function Home() {
  const [openWindows, setOpenWindows] = useState<string[]>([])
  const [focusOrder, setFocusOrder] = useState<string[]>([])

  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace("#", "")
      const id = (hash === "home" || !hash) ? "terminal" : hash

      setOpenWindows(prev => prev.includes(id) ? prev : [...prev, id])
      focusWindow(id)
    }

    window.addEventListener("hashchange", handleHashChange)
    handleHashChange()
    return () => window.removeEventListener("hashchange", handleHashChange)
  }, [])

  const focusWindow = (id: string) => {
    setFocusOrder(prev => {
      const filtered = prev.filter(w => w !== id)
      return [...filtered, id]
    })

    // Sync hash for Waybar
    const currentHash = window.location.hash.replace("#", "")
    if (id === "terminal") {
      if (currentHash !== "") {
        window.history.pushState(null, "", window.location.pathname)
        window.dispatchEvent(new Event("hashchange"))
      }
    } else if (currentHash !== id) {
      window.history.pushState(null, "", `#${id}`)
      window.dispatchEvent(new Event("hashchange"))
    }
  }

  const closeWindow = (id: string) => {
    setOpenWindows(prev => prev.filter(w => w !== id))
    setFocusOrder(prev => prev.filter(w => w !== id))
    // Clear hash if the active window is closed
    if (window.location.hash === `#${id}`) {
      window.history.pushState(null, "", window.location.pathname)
      window.dispatchEvent(new Event("hashchange"))
    }
  }

  const getZIndex = (id: string) => focusOrder.indexOf(id) + 10

  return (
    <div className="w-full h-full relative overflow-hidden">
      {/* Desktop Windows */}

      <DesktopWindow
        id="terminal"
        title="iko@backend:~"
        isOpen={openWindows.includes("terminal")}
        onClose={() => closeWindow("terminal")}
        onFocus={() => focusWindow("terminal")}
        zIndex={getZIndex("terminal")}
        initialPos={{ x: 80, y: 80 }}
      >
        <Hero />
      </DesktopWindow>

      <DesktopWindow
        id="about"
        title="about_me.txt"
        isOpen={openWindows.includes("about")}
        onClose={() => closeWindow("about")}
        onFocus={() => focusWindow("about")}
        zIndex={getZIndex("about")}
        initialPos={{ x: 140, y: 120 }}
      >
        <About />
      </DesktopWindow>

      <DesktopWindow
        id="blog"
        title="technical_posts.md"
        isOpen={openWindows.includes("blog")}
        onClose={() => closeWindow("blog")}
        onFocus={() => focusWindow("blog")}
        zIndex={getZIndex("blog")}
        initialPos={{ x: 200, y: 160 }}
      >
        <Blog />
      </DesktopWindow>

      <DesktopWindow
        id="notes"
        title="dev_notes.log"
        isOpen={openWindows.includes("notes")}
        onClose={() => closeWindow("notes")}
        onFocus={() => focusWindow("notes")}
        zIndex={getZIndex("notes")}
        initialPos={{ x: 260, y: 200 }}
      >
        <Notes />
      </DesktopWindow>

      <DesktopWindow
        id="projects"
        title="systems_built.tree"
        isOpen={openWindows.includes("projects")}
        onClose={() => closeWindow("projects")}
        onFocus={() => focusWindow("projects")}
        zIndex={getZIndex("projects")}
        initialPos={{ x: 320, y: 240 }}
      >
        <Projects />
      </DesktopWindow>
    </div>
  )
}
