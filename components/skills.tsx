"use client";

import { motion } from "framer-motion";
import {
  Code,
  Database,
  Globe,
  Layout,
  Server,
  Terminal,
  Smartphone,
  Workflow,
} from "lucide-react";

export default function Skills() {
  const skills = [
    {
      category: "Frontend",
      icon: <Layout className="h-8 w-8" />,
      items: [
        "React",
        "Next.js",
        "TypeScript",
        "Tailwind CSS",
        "Framer Motion",
      ],
    },
    {
      category: "Backend",
      icon: <Server className="h-8 w-8" />,
      items: ["Node.js", "Express", "NestJS"],
    },
    {
      category: "Database",
      icon: <Database className="h-8 w-8" />,
      items: ["MongoDB", "PostgreSQL"],
    },
    {
      category: "DevOps",
      icon: <Terminal className="h-8 w-8" />,
      items: ["Docker", "AWS", "CI/CD", "GitHub Actions"],
    },
    {
      category: "Mobile",
      icon: <Smartphone className="h-8 w-8" />,
      items: ["React Native", "Expo"],
    },
    {
      category: "Web",
      icon: <Globe className="h-8 w-8" />,
      items: ["SEO", "Web Performance", "Accessibility", "Web Security"],
    },
    {
      category: "Tools",
      icon: <Workflow className="h-8 w-8" />,
      items: ["Git", "VS Code", "Figma", "Jira", "Postman"],
    },
    {
      category: "Languages",
      icon: <Code className="h-8 w-8" />,
      items: ["JavaScript", "TypeScript", "HTML", "CSS", "Python"],
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
        <h2 className="text-3xl md:text-4xl font-bold mb-4">My Skills</h2>
        <div className="h-1 w-20 bg-primary mx-auto mb-6" />
        <p className="text-muted-foreground max-w-2xl mx-auto">
          I've worked with a variety of technologies in the web development
          world. Here's an overview of my technical skills.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
      >
        {skills.map((skill, index) => (
          <motion.div
            key={skill.category}
            variants={item}
            className="bg-card rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow border"
          >
            <div className="flex items-center mb-4">
              <div className="p-2 rounded-lg bg-primary/10 text-primary mr-4">
                {skill.icon}
              </div>
              <h3 className="text-xl font-bold">{skill.category}</h3>
            </div>

            <ul className="space-y-2">
              {skill.items.map((item, itemIndex) => (
                <li key={itemIndex} className="flex items-center">
                  <div className="w-2 h-2 rounded-full bg-primary mr-2" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-16 text-center"
      >
        {/* <h3 className="text-2xl font-bold mb-4">And Many More...</h3> */}
        <p className="text-muted-foreground max-w-2xl mx-auto">
          I'm constantly learning and expanding my skill set to stay up-to-date
          with the latest technologies and best practices.
        </p>
      </motion.div>
    </div>
  );
}
