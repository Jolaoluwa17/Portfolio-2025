"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronUp } from "lucide-react"
import Hero from "@/components/hero"
import About from "@/components/about"
import Skills from "@/components/skills"
import Projects from "@/components/projects"
import Experience from "@/components/experience"
import Contact from "@/components/contact"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import Testimonials from "@/components/testimonials"
import Chatbot from "@/components/portfolioChatbot"
import CursorFollower from "@/components/cursor-follower"

export default function Home() {
  const [showScrollTop, setShowScrollTop] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setShowScrollTop(true)
      } else {
        setShowScrollTop(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <main className="min-h-screen bg-background">
      <CursorFollower />
      <Navbar />

      <section id="hero">
        <Hero />
      </section>

      <section id="about" className="py-20">
        <About />
      </section>

      <section id="skills" className="py-20 bg-muted/50">
        <Skills />
      </section>

      <section id="projects" className="py-20">
        <Projects />
      </section>

      <section id="projects" className="py-20">
        <Testimonials />
      </section>

      <section id="experience" className="py-20 bg-muted/50">
        <Experience />
      </section>

      <section id="contact" className="py-20">
        <Contact />
      </section>

      <Footer />

      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            onClick={scrollToTop}
            className="fixed bottom-4 left-4 sm:bottom-8 sm:left-8 p-3 rounded-full bg-primary text-primary-foreground shadow-lg z-50"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            aria-label="Scroll to top"
          >
            <ChevronUp className="h-6 w-6" />
          </motion.button>
        )}
      </AnimatePresence>

      <Chatbot />
    </main>
  )
}
