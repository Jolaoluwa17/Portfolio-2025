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
      title: "Neuro",
      description:
        "A quiz management web application that enables users to create quizzes, share links with recipients, and track detailed assessment metrics.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["Next.js", "TypeScript", "Node.js", "Express", "MongoDB"],
      liveUrl: "#",
      githubUrl: "#",
      longDescription:
        "Neuro is an ongoing project designed to streamline quiz creation and distribution. Users can easily build custom quizzes, share them with multiple recipients via links, and monitor various metrics related to assessment performance. The app focuses on delivering insightful analytics and an intuitive user experience, built using modern web technologies.",
    },
    {
      title: "Portfolio Website 2024",
      description:
        "A personal portfolio website showcasing my skills, projects, and professional journey with a clean, modern design.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["React.js", "TypeScript", "Tailwind CSS", "Vite"],
      liveUrl: "#",
      githubUrl: "#",
      longDescription:
        "This portfolio website highlights my latest work, technical skills, and experience. Designed with a focus on usability and performance, it features responsive layouts, dark mode support, and easy navigation. Built using React and Tailwind CSS with Vite for fast development and optimized builds.",
    },
    {
      title: "Finance Dashboard",
      description:
        "An interactive financial dashboard with data visualization, expense tracking, and budget planning tools.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["React", "D3.js", "Express", "MySQL", "Redux"],
      liveUrl: "#",
      githubUrl: "#",
      longDescription:
        "This financial dashboard provides users with powerful tools to manage their finances. It includes interactive charts and graphs for visualizing spending patterns, income tracking, expense categorization, budget planning features, and financial goal setting. The dashboard uses D3.js for advanced data visualization and implements secure authentication.",
    },
    {
      title: "Social Media Platform",
      description:
        "A social networking platform with user profiles, posts, comments, likes, and direct messaging.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["Next.js", "GraphQL", "Apollo", "MongoDB", "AWS"],
      liveUrl: "#",
      githubUrl: "#",
      longDescription:
        "This social media platform enables users to connect and share content. Features include customizable user profiles, post creation with rich media support, commenting system, likes and reactions, direct messaging, friend/follow functionality, and notifications. The platform uses GraphQL for efficient data fetching and AWS for media storage and processing.",
    },
    {
      title: "Fitness Tracking App",
      description:
        "A mobile-first fitness application for tracking workouts, nutrition, and progress with personalized plans.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["React Native", "Firebase", "Redux", "Node.js", "Express"],
      liveUrl: "#",
      githubUrl: "#",
      longDescription:
        "This fitness tracking application helps users achieve their health goals. It includes workout tracking with exercise library, nutrition logging and meal planning, progress photos and measurements, personalized workout and diet plans, achievement badges, and social sharing features. The app syncs data across devices and provides detailed analytics on user progress.",
    },
    {
      title: "Real Estate Platform",
      description:
        "A property listing and management platform with search filters, virtual tours, and agent communication.",
      image: "/placeholder.svg?height=600&width=800",
      tags: ["Vue.js", "Django", "PostgreSQL", "Redis", "Docker"],
      liveUrl: "#",
      githubUrl: "#",
      longDescription:
        "This real estate platform connects property buyers, sellers, and agents. Features include advanced property search with filters, virtual property tours, detailed property listings with high-quality images, agent profiles and communication tools, saved favorites, and property alerts. The platform includes an admin dashboard for property management and analytics.",
    },
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
