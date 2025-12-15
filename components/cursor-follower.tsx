"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"

export default function CursorFollower() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const [isVisible, setIsVisible] = useState(false)
  const [isPointer, setIsPointer] = useState(false)

  useEffect(() => {
    // Only show on non-touch devices
    const isTouchDevice = "ontouchstart" in window || navigator.maxTouchPoints > 0
    if (isTouchDevice) return

    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
      setIsVisible(true)
    }

    const handleMouseLeave = () => {
      setIsVisible(false)
    }

    const handleMouseOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      // Check if hovering over clickable elements
      if (
        target.tagName === "A" ||
        target.tagName === "BUTTON" ||
        target.onclick !== null ||
        window.getComputedStyle(target).cursor === "pointer"
      ) {
        setIsPointer(true)
      } else {
        setIsPointer(false)
      }
    }

    window.addEventListener("mousemove", handleMouseMove)
    window.addEventListener("mouseleave", handleMouseLeave)
    window.addEventListener("mouseover", handleMouseOver)

    return () => {
      window.removeEventListener("mousemove", handleMouseMove)
      window.removeEventListener("mouseleave", handleMouseLeave)
      window.removeEventListener("mouseover", handleMouseOver)
    }
  }, [])

  // Don't render on touch devices
  if (typeof window !== "undefined" && ("ontouchstart" in window || navigator.maxTouchPoints > 0)) {
    return null
  }

  return (
    <>
      <motion.div
        className="fixed top-0 left-0 w-2 h-2 bg-primary rounded-full pointer-events-none z-[9999]"
        animate={{
          x: mousePosition.x - 4,
          y: mousePosition.y - 4,
          scale: isPointer ? 1.5 : 1,
        }}
        transition={{
          type: "spring",
          stiffness: 500,
          damping: 28,
          mass: 0.5,
        }}
        style={{
          opacity: isVisible ? 1 : 0,
          boxShadow: "0 0 16px hsl(var(--primary)), 0 0 24px hsl(var(--primary) / 0.6)",
        }}
      />
      {/* Outer ring for smoother effect */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 border border-primary/60 rounded-full pointer-events-none z-[9998]"
        animate={{
          x: mousePosition.x - 16,
          y: mousePosition.y - 16,
          scale: isPointer ? 1.2 : 0.8,
        }}
        transition={{
          type: "spring",
          stiffness: 150,
          damping: 15,
          mass: 0.5,
        }}
        style={{
          opacity: isVisible ? 0.8 : 0,
          boxShadow: "0 0 12px hsl(var(--primary) / 0.4)",
        }}
      />
    </>
  )
}

