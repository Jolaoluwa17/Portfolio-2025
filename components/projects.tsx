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
      status: "completed", // Add status field
      longDescription:
        "Rissa Bites is a full-stack food delivery web application built to provide a seamless ordering experience for users. Customers can browse a wide range of treats and snacks, add items to their cart, and place orders effortlessly. The platform integrates a secure Stripe payment gateway, ensuring smooth and reliable transactions. With a responsive and modern UI powered by Tailwind CSS, users can enjoy a fast and intuitive experience across all devices. On the backend, Node.js, Express.js, and MongoDB handle data management and scalability, while Redux and RTK Query streamline state management and API consumption on the frontend. Designed with both performance and user satisfaction in mind, Rissa Bites offers an efficient solution for food ordering, tailored to the client's business needs.",
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
      status: "completed",
      longDescription:
        "ReceiptSnap is a full-stack web application built to automate the tedious task of receipt collation. Users can upload images of receipts, which are processed using OCR (Optical Character Recognition) to extract key purchase details such as items, amounts, and dates. The extracted data is then organized and stored in MongoDB, allowing users to manage and track their expenses with ease. To further enhance productivity, the platform integrates Nodemailer, enabling users to receive structured purchase summaries directly in their email. With a React and Tailwind CSS frontend, ReceiptSnap delivers a clean, responsive, and user-friendly interface, while the Node.js and Express backend ensures scalability and efficient data processing. The tool simplifies expense tracking by turning paper clutter into digital insights seamlessly.",
    },
    {
      title: "Focus",
      description:
        "A modern clothing eCommerce platform offering a curated selection of fashion-forward styles.",
      image: "/focus.png?height=600&width=800",
      tags: ["Next.js", "TypeScript", "shadcn", "Tailwind CSS"],
      liveUrl: "https://focus-ecommerce.netlify.app",
      githubUrl: "https://github.com/Jolaoluwa17/Focus",
      status: "completed",
      longDescription:
        "Focus is a sleek and responsive eCommerce web application tailored for fashion retail. It offers users a modern shopping experience with a curated collection of clothing and accessories, designed to reflect contemporary style trends. Built with Next.js and TypeScript, the platform ensures high performance, scalability, and a seamless user experience. The UI is powered by Tailwind CSS and shadcn components, providing a clean, minimal, and highly customizable design system. With intuitive navigation, product browsing, and a mobile-first layout, Focus delivers a smooth and engaging online shopping journey for fashion-forward users.",
    },
    {
      title: "Neuro",
      description:
        "A quiz management web application for creating quizzes and tracking assessment metrics.",
      image: "/neuro.png?height=600&width=800",
      tags: ["Next.js", "TypeScript", "Node.js", "Express", "MongoDB"],
      liveUrl: "https://neuroquiz.netlify.app",
      githubUrl: "https://github.com/Jolaoluwa17/Neuro",
      status: "ongoing", // This project is ongoing
      longDescription:
        "Neuro is an ongoing project designed to streamline quiz creation, distribution, and performance tracking. The platform enables instructors or administrators to create customizable quizzes, assign them to participants, and monitor results in real time. With a robust backend built on Node.js, Express, and MongoDB, Neuro ensures efficient data storage and management of quiz content and assessment metrics. On the frontend, Next.js and TypeScript power a responsive and intuitive interface that allows users to take quizzes seamlessly across devices. By combining ease of use with insightful analytics, Neuro aims to provide an effective solution for both educators and learners to evaluate knowledge and track progress.",
    },
    {
      title: "Royal Gate Group",
      description:
        "Official website of Royal Gate Group, an international export and import company.",
      image: "/royalGate.png?height=600&width=800",
      tags: ["Next.js", "Tailwind CSS", "Vite"],
      liveUrl: "https://royalgategroup.com.ng",
      githubUrl: "#",
      status: "completed",
      longDescription:
        "Royal Gate Group is a global export and import company dedicated to facilitating seamless international trade across diverse industries. The official website serves as a professional digital presence, showcasing the company's services, core values, and global reach. Built with Next.js and styled using Tailwind CSS, the platform is fast, responsive, and optimized for accessibility across devices. Leveraging Vite for efficient development and build processes, the site ensures a smooth user experience while reflecting the brand's commitment to reliability and excellence. Designed with a clean and modern aesthetic, the website enhances credibility and provides potential clients and partners with easy access to essential information about Royal Gate Group.",
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
        "The Lagos State Material Testing Laboratory (LSMTL) mobile platform provides citizens and organizations with convenient access to a wide range of building and construction material testing services. Designed to promote structural integrity and safety, the platform allows users to explore available services, submit requests, and access vital information about testing standards and procedures. Built with Next.js and Tailwind CSS, the frontend ensures a modern, responsive, and user-friendly interface, while Node.js and Express power a reliable backend for handling requests efficiently. By digitizing service access, LSMTL enhances transparency, efficiency, and public trust in Lagos State's construction oversight efforts.",
    },
    {
      title: "Tic-Tac-Toe",
      description:
        "A classic single and two-player Tic-Tac-Toe game built with Next.js.",
      image: "/tictactoe.png?height=600&width=800",
      tags: ["Next.js", "CSS"],
      liveUrl: "https://tic-tac-toe-pi-gold.vercel.app",
      githubUrl: "https://github.com/Jolaoluwa17/tic-tac-toe",
      status: "completed",
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
    <div className="container mx-auto px-6 sm:px-12 lg:px-16 xl:px-20">
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
            initial={{ opacity: 0, y: 50, rotateX: -10 }}
            whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            whileHover={{ y: -10, scale: 1.02, rotateX: 5 }}
            className="bg-card rounded-xl overflow-hidden border shadow-sm hover:shadow-md transition-all group"
          >
            <div className="relative overflow-hidden aspect-video">
              <img
                src={project.image || "/placeholder.svg"}
                alt={project.title}
                className="object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
              />

              {/* Status Tag - Only show if status is ongoing */}
              {project.status === "ongoing" && (
                <div className="absolute top-3 right-3 z-10">
                  <Badge className="bg-orange-500 hover:bg-orange-600 text-white shadow-lg animate-pulse">
                    <div className="flex items-center gap-1">
                      <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                      Ongoing
                    </div>
                  </Badge>
                </div>
              )}

              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Button
                  variant="secondary"
                  size="icon"
                  onClick={() => setSelectedProject(index)}
                  className="mr-2"
                >
                  <Maximize2 className="h-5 w-5" />
                </Button>
                {project.githubUrl !== "#" && (
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
                )}
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
              <div className="flex items-start justify-between mb-2">
                <h3 className="text-xl font-bold flex-1">{project.title}</h3>
              </div>
              <p className="text-muted-foreground mb-4">
                {project.description}
              </p>
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ staggerChildren: 0.05 }}
                className="flex flex-wrap gap-2 mt-4"
              >
                {project.tags.map((tag, tagIndex) => (
                  <motion.div
                    key={tagIndex}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: tagIndex * 0.05 }}
                    whileHover={{ scale: 1.1, rotate: 2 }}
                  >
                    <Badge variant="secondary">{tag}</Badge>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* See More Button */}
      {visibleCount < projects.length && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex justify-center mt-8"
        >
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button onClick={handleSeeMore} variant="outline">
              See More
            </Button>
          </motion.div>
        </motion.div>
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

                {/* Status Tag in Modal */}
                {displayedProjects[selectedProject]?.status === "ongoing" && (
                  <div className="absolute top-4 left-4 z-10">
                    <Badge className="bg-orange-500 hover:bg-orange-600 text-white shadow-lg">
                      <div className="flex items-center gap-1">
                        <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                        Ongoing
                      </div>
                    </Badge>
                  </div>
                )}

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
                <div className="flex items-start justify-between mb-2">
                  <h3 className="text-2xl font-bold flex-1">
                    {displayedProjects[selectedProject]?.title}
                  </h3>
                  {/* Status indicator in modal header */}
                  {displayedProjects[selectedProject]?.status === "ongoing" && (
                    <div className="ml-2 flex items-center gap-2">
                      <div className="w-2 h-2 bg-orange-500 rounded-full animate-pulse"></div>
                      <span className="text-sm text-orange-600 font-medium">
                        In Progress
                      </span>
                    </div>
                  )}
                </div>
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
                  {displayedProjects[selectedProject]?.githubUrl !== "#" && (
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
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
