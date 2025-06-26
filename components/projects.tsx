"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github, Maximize2, X } from "lucide-react";
import Link from "next/link";

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);

  const projects = [
    {
      title: "Focus",
      description:
        "A modern clothing eCommerce platform offering a curated selection of fashion-forward styles for men, women, and kids.",
      image: "/focus.png?height=600&width=800",
      tags: ["Next.js", "TypeScript", "shadcn", "Tailwind CSS"],
      liveUrl: "https://focus-ecommerce.netlify.app",
      githubUrl: "https://github.com/Jolaoluwa17/Focus",
      longDescription:
        "Focus is a sleek and responsive eCommerce web application tailored for fashion retail. It allows users to browse a wide range of stylish clothing collections, add items to their cart, and securely check out. With a clean interface and seamless navigation, Focus delivers a smooth shopping experience across all devices. Built using modern tools like Next.js, TypeScript, and shadcn UI components, it combines performance with aesthetic appeal.",
    },
    {
      title: "Neuro",
      description:
        "A quiz management web application that enables users to create quizzes, share links with recipients, and track detailed assessment metrics.",
      image: "/neuro.png?height=600&width=800",
      tags: ["Next.js", "TypeScript", "Node.js", "Express", "MongoDB"],
      liveUrl: "https://neuroquiz.netlify.app",
      githubUrl: "https://github.com/Jolaoluwa17/Neuro",
      longDescription:
        "Neuro is an ongoing project designed to streamline quiz creation and distribution. Users can easily build custom quizzes, share them with multiple recipients via links, and monitor various metrics related to assessment performance. The app focuses on delivering insightful analytics and an intuitive user experience, built using modern web technologies.",
    },
    // {
    //   title: "Portfolio Website 2024",
    //   description:
    //     "A personal portfolio website showcasing my skills, projects, and professional journey with a clean, modern design.",
    //   image: "/portfolio2024.png?height=600&width=800",
    //   tags: ["React.js", "TypeScript", "Tailwind CSS", "Vite"],
    //   liveUrl: "https://jolaoluwa-portfolio-2024.vercel.app",
    //   githubUrl: "https://github.com/Jolaoluwa17/Portfolio_",
    //   longDescription:
    //     "This portfolio website highlights my latest work, technical skills, and experience. Designed with a focus on usability and performance, it features responsive layouts, dark mode support, and easy navigation. Built using React and Tailwind CSS with Vite for fast development and optimized builds.",
    // },
    {
      title: "Royal Gate Group",
      description:
        "Official website of Royal Gate Group, an international export and import company offering reliable global trade and logistics solutions.",
      image: "/royalGate.png?height=600&width=800",
      tags: ["Next.js", "Tailwind CSS", "Vite"],
      liveUrl: "https://royalgategroup.com.ng",
      githubUrl: "#",
      longDescription:
        "Royal Gate Group is a global export and import company dedicated to facilitating seamless international trade. The platform showcases the company's wide range of services including product sourcing, global logistics, and customs management. Built with modern web technologies, the website serves as an information hub for clients, partners, and prospects—highlighting the company’s commitment to efficiency, transparency, and global connectivity.",
    },
    {
      title: "Lagos State Material Testing Laboratory",
      description:
        "Official mobile platform for Lagos State Material Testing Laboratory, offering access to testing services, reports, and regulatory information.",
      image: "/lstml.png?height=600&width=800",
      tags: ["Next.js", "Tailwind CSS", "Node.js", "Express"],
      liveUrl: "https://www.lsmtl.lg.gov.ng",
      githubUrl: "#",
      longDescription:
        "The Lagos State Material Testing Laboratory (LSMTL) mobile application provides a user-friendly platform for accessing construction material testing services, viewing test reports, and staying updated on regulatory standards. Built with React Native and powered by Firebase and Node.js, the app ensures easy scheduling of tests, secure data access, and real-time updates. It supports transparency and efficiency in quality assurance for building and infrastructure projects across Lagos State.",
    },
    {
      title: "Tic-Tac-Toe",
      description:
        "A classic single and two-player Tic-Tac-Toe game built with Next.js, featuring interactive gameplay and a sleek UI.",
      image: "/tictactoe.png?height=600&width=800",
      tags: ["Next.js", "CSS"],
      liveUrl: "https://tic-tac-toe-pi-gold.vercel.app",
      githubUrl: "https://github.com/Jolaoluwa17/tic-tac-toe",
      longDescription:
        "This project is a web-based implementation of the classic Tic-Tac-Toe game. Developed using Next.js and React, it features smooth, responsive gameplay for two players. The interface is clean and intuitive, making it easy for users to take turns, track wins, and restart the game. It serves as a simple but fun demonstration of component-based architecture and state management in a modern React framework.",
    },
    // {
    //   title: "Real Estate Platform",
    //   description:
    //     "A property listing and management platform with search filters, virtual tours, and agent communication.",
    //   image: "/placeholder.svg?height=600&width=800",
    //   tags: ["Vue.js", "Django", "PostgreSQL", "Redis", "Docker"],
    //   liveUrl: "#",
    //   githubUrl: "#",
    //   longDescription:
    //     "This real estate platform connects property buyers, sellers, and agents. Features include advanced property search with filters, virtual property tours, detailed property listings with high-quality images, agent profiles and communication tools, saved favorites, and property alerts. The platform includes an admin dashboard for property management and analytics.",
    // },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  return (
    <div className="container mx-auto px-4">
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

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
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
                  src={projects[selectedProject].image || "/placeholder.svg"}
                  alt={projects[selectedProject].title}
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
                  {projects[selectedProject].title}
                </h3>
                <p className="text-muted-foreground mb-6">
                  {projects[selectedProject].longDescription}
                </p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {projects[selectedProject].tags.map((tag, tagIndex) => (
                    <Badge key={tagIndex} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="flex gap-4">
                  <Button asChild>
                    <Link
                      href={projects[selectedProject].liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <ExternalLink className="mr-2 h-4 w-4" /> Live Demo
                    </Link>
                  </Button>
                  <Button asChild variant="outline">
                    <Link
                      href={projects[selectedProject].githubUrl}
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
