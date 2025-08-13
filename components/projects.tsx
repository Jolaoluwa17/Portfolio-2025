"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Maximize2, X } from "lucide-react";
import Link from "next/link";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [visibleCount, setVisibleCount] = useState(6); // initial visible count

  const projects = [
    {
      title: "Rissa Bites",
      description:
        "A food delivery platform where users can order treats and snacks seamlessly, tailored to the client's business.",
      image: "/rissabites.png?height=600&width=800",
      tags: [
        "Next.js",
        "TypeScript",
        "MongoDB",
        "Node.js",
        "Express.js",
        "Tailwind CSS",
        "Stripe",
        "RTK Query",
        "Redux",
      ],
      liveUrl: "https://rissabites.com",
      githubUrl: "#",
      longDescription:
        "Rissa Bites is a full-stack food delivery web application built to provide a seamless ordering experience for users...",
    },
    {
      title: "ReceiptSnap",
      description:
        "A receipt automation tool that extracts, manages, and emails purchase data seamlessly from uploaded images.",
      image: "/receiptsnap.png?height=600&width=800",
      tags: [
        "Node.js",
        "Express",
        "MongoDB",
        "React",
        "Tailwind CSS",
        "OCR",
        "Nodemailer",
      ],
      liveUrl: "https://receiptsnap.netlify.app",
      githubUrl: "#",
      longDescription:
        "ReceiptSnap is a full-stack web application built to automate the tedious task of receipt collation...",
    },
    {
      title: "Focus",
      description:
        "A modern clothing eCommerce platform offering a curated selection of fashion-forward styles.",
      image: "/focus.png?height=600&width=800",
      tags: ["Next.js", "TypeScript", "shadcn", "Tailwind CSS"],
      liveUrl: "https://focus-ecommerce.netlify.app",
      githubUrl: "https://github.com/Jolaoluwa17/Focus",
      longDescription:
        "Focus is a sleek and responsive eCommerce web application tailored for fashion retail...",
    },
    {
      title: "Neuro",
      description:
        "A quiz management web application for creating quizzes and tracking assessment metrics.",
      image: "/neuro.png?height=600&width=800",
      tags: ["Next.js", "TypeScript", "Node.js", "Express", "MongoDB"],
      liveUrl: "https://neuroquiz.netlify.app",
      githubUrl: "https://github.com/Jolaoluwa17/Neuro",
      longDescription:
        "Neuro is an ongoing project designed to streamline quiz creation and distribution...",
    },
    {
      title: "Royal Gate Group",
      description:
        "Official website of Royal Gate Group, an international export and import company.",
      image: "/royalGate.png?height=600&width=800",
      tags: ["Next.js", "Tailwind CSS", "Vite"],
      liveUrl: "https://royalgategroup.com.ng",
      githubUrl: "#",
      longDescription:
        "Royal Gate Group is a global export and import company dedicated to facilitating seamless trade...",
    },
    {
      title: "Lagos State Material Testing Laboratory",
      description:
        "Official mobile platform for Lagos State Material Testing Laboratory.",
      image: "/lstml.png?height=600&width=800",
      tags: ["Next.js", "Tailwind CSS", "Node.js", "Express"],
      liveUrl: "https://www.lsmtl.lg.gov.ng",
      githubUrl: "#",
      longDescription:
        "The Lagos State Material Testing Laboratory mobile app provides access to testing services...",
    },
    {
      title: "Tic-Tac-Toe",
      description:
        "A classic single and two-player Tic-Tac-Toe game built with Next.js.",
      image: "/tictactoe.png?height=600&width=800",
      tags: ["Next.js", "CSS"],
      liveUrl: "https://tic-tac-toe-pi-gold.vercel.app",
      githubUrl: "https://github.com/Jolaoluwa17/tic-tac-toe",
      longDescription:
        "This project is a web-based implementation of the classic Tic-Tac-Toe game. Developed using Next.js and React, it features smooth, responsive gameplay for two players. The interface is clean and intuitive, making it easy for users to take turns, track wins, and restart the game. It serves as a simple but fun demonstration of component-based architecture and state management in a modern React framework.",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.1 } },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const handleSeeMore = () => {
    setVisibleCount((prev) => Math.min(prev + 3, projects.length));
  };

  // Get the projects to display
  const displayedProjects = projects.slice(0, visibleCount);

  return (
    <div className="container mx-auto px-4">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4">My Projects</h2>
        <div className="h-1 w-20 bg-primary mx-auto mb-6" />
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Here are some of my recent projects. Each one was built to solve a
          specific problem and demonstrates different aspects of my skills.
        </p>
      </motion.div>

      {/* Project Grid */}
      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center"
        key={visibleCount} // Force re-render when visibleCount changes
      >
        {displayedProjects.map((project, index) => (
          <motion.div
            key={`project-${index}`} // Use a more reliable key
            variants={item}
            className="bg-card rounded-xl overflow-hidden border shadow-sm hover:shadow-md transition-all group"
          >
            <div className="relative overflow-hidden aspect-video">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Button
                  variant="secondary"
                  size="icon"
                  onClick={() => setSelectedProject(index)}
                  className="mr-2"
                >
                  <Maximize2 className="h-5 w-5" />
                </Button>
                <Button
                  asChild
                  variant="secondary"
                  size="icon"
                  className="mr-2"
                >
                  <Link
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="h-5 w-5" />
                  </Link>
                </Button>
                <Button asChild variant="secondary" size="icon">
                  <Link
                    href={project.liveUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalLink className="h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>

            <div className="p-6">
              <h3 className="text-xl font-bold mb-2">{project.title}</h3>
              <p className="text-muted-foreground mb-4">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2 mt-4">
                {project.tags.map((tag, tagIndex) => (
                  <Badge key={tagIndex} variant="secondary">
                    {tag}
                  </Badge>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* See More Button */}
      {visibleCount < projects.length && (
        <div className="flex justify-center mt-8">
          <Button onClick={handleSeeMore} variant="outline">
            See More ({projects.length - visibleCount} remaining)
          </Button>
        </div>
      )}

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-card rounded-xl shadow-lg max-w-4xl w-full max-h-[90vh] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative aspect-video">
                <img
                  src={
                    displayedProjects[selectedProject]?.image ||
                    "/placeholder.svg"
                  }
                  alt={displayedProjects[selectedProject]?.title || "Project"}
                  className="object-cover w-full h-full rounded-t-xl"
                />
                <Button
                  variant="secondary"
                  size="icon"
                  className="absolute top-4 right-4"
                  onClick={() => setSelectedProject(null)}
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              <div className="p-6">
                <h3 className="text-2xl font-bold mb-2">
                  {displayedProjects[selectedProject]?.title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {displayedProjects[selectedProject]?.longDescription}
                </p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {displayedProjects[selectedProject]?.tags.map(
                    (tag, tagIndex) => (
                      <Badge key={tagIndex} variant="secondary">
                        {tag}
                      </Badge>
                    )
                  )}
                </div>
                <div className="flex gap-4">
                  <Button asChild>
                    <Link
                      href={displayedProjects[selectedProject]?.liveUrl || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                    </Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link
                      href={
                        displayedProjects[selectedProject]?.githubUrl || "#"
                      }
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Github className="mr-2 h-4 w-4" /> View Code
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
