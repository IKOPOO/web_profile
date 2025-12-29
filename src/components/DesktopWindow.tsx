"use client"

import { useState, useRef, useEffect } from "react"
import { X, Minus, Maximize2 } from "lucide-react"

interface DesktopWindowProps {
  title: string
  isOpen: boolean
  onClose: () => void
  onFocus: () => void
  children: React.ReactNode
  id: string
  zIndex: number
  initialPos?: { x: number; y: number }
}

export default function DesktopWindow({
  title,
  isOpen,
  onClose,
  onFocus,
  children,
  id,
  zIndex,
  initialPos = { x: 50, y: 50 }
}: DesktopWindowProps) {
  const [pos, setPos] = useState(initialPos)
  const [isDragging, setIsDragging] = useState(false)
  const [rel, setRel] = useState({ x: 0, y: 0 }) // Position relative to the window
  const windowRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!isDragging) return

    const onMouseMove = (e: MouseEvent) => {
      setPos({
        x: e.pageX - rel.x,
        y: e.pageY - rel.y
      })
    }

    const onMouseUp = () => {
      setIsDragging(false)
    }

    window.addEventListener("mousemove", onMouseMove)
    window.addEventListener("mouseup", onMouseUp)

    return () => {
      window.removeEventListener("mousemove", onMouseMove)
      window.removeEventListener("mouseup", onMouseUp)
    }
  }, [isDragging, rel])

  if (!isOpen) return null

  const onMouseDown = (e: React.MouseEvent) => {
    if (e.button !== 0) return // Only left click
    onFocus()

    const rect = windowRef.current?.getBoundingClientRect()
    if (rect) {
      setIsDragging(true)
      setRel({
        x: e.pageX - rect.left,
        y: e.pageY - rect.top
      })
    }
  }

  return (
    <div
      ref={windowRef}
      className={`absolute w-[90%] md:w-[80%] lg:w-[60%] min-h-[400px] h-[68%] bg-bg-dark/50 backdrop-blur-md border border-bg-medium rounded-lg shadow-2xl flex flex-col animate-in zoom-in-95 duration-200 ${isDragging ? "select-none" : ""}`}
      style={{
        left: `${pos.x}px`,
        top: `${pos.y}px`,
        zIndex: zIndex
      }}
      id={`window-${id}`}
      onMouseDown={onFocus}
    >
      {/* Title Bar */}
      <div
        className="h-9 bg-bg-dark-hard/10 border-b border-bg-medium rounded-t-lg flex items-center justify-between px-4 cursor-move select-none"
        onMouseDown={onMouseDown}
      >
        <div className="flex items-center gap-2 pointer-events-none">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red/40" />
            <div className="w-3 h-3 rounded-full bg-yellow/40" />
            <div className="w-3 h-3 rounded-full bg-green/40" />
          </div>
          <span className="text-xs font-mono text-fg-dim ml-2">{title}</span>
        </div>

        <div className="flex items-center gap-3 text-gray">
          <Minus size={14} className="hover:text-fg cursor-pointer" />
          <Maximize2 size={14} className="hover:text-fg cursor-pointer" />
          <X
            size={16}
            className="hover:text-red transition-colors cursor-pointer"
            onClick={(e) => {
              e.stopPropagation()
              onClose()
            }}
          />
        </div>
      </div>

      {/* Content Area */}
      <div className="flex-1 overflow-y-auto p-6 scrollbar-thin scrollbar-thumb-bg-medium scrollbar-track-transparent">
        {children}
      </div>
    </div>
  )
}
