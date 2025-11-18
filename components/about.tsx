"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FileText, Code, Briefcase, Award, TrendingUp } from "lucide-react";
import Link from "next/link";

export default function About() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 },
  };

  return (
    <div className="container mx-auto px-4">
      <motion.div
        initial="initial"
        whileInView="animate"
        viewport={{ once: true }}
        className="text-center mb-12"
      >
        <motion.h2
          variants={fadeInUp}
          className="text-3xl md:text-4xl font-bold mb-4"
        >
          About Me
        </motion.h2>
        <motion.div
          variants={fadeInUp}
          transition={{ delay: 0.1 }}
          className="h-1 w-20 bg-primary mx-auto mb-6"
        />
        <motion.p
          variants={fadeInUp}
          transition={{ delay: 0.2 }}
          className="text-muted-foreground max-w-2xl mx-auto"
        >
          Get to know more about me, my background, and what drives me.
        </motion.p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="space-y-6"
        >
          {/* Statistics Cards */}
          <div className="grid grid-cols-2 gap-4">
            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              whileHover={{ scale: 1.05, y: -5, rotateY: 5 }}
              className="bg-card rounded-xl p-6 border shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-2">
                <Briefcase className="h-8 w-8 text-primary" />
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </div>
              <h3 className="text-3xl font-bold mb-1">4+</h3>
              <p className="text-sm text-muted-foreground">Years Experience</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              whileHover={{ scale: 1.05, y: -5, rotateY: 5 }}
              className="bg-card rounded-xl p-6 border shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-2">
                <Code className="h-8 w-8 text-primary" />
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </div>
              <h3 className="text-3xl font-bold mb-1">30+</h3>
              <p className="text-sm text-muted-foreground">Projects Completed</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              whileHover={{ scale: 1.05, y: -5, rotateY: 5 }}
              className="bg-card rounded-xl p-6 border shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-2">
                <Award className="h-8 w-8 text-primary" />
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </div>
              <h3 className="text-3xl font-bold mb-1">20+</h3>
              <p className="text-sm text-muted-foreground">Technologies</p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9, rotateY: -15 }}
              whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
              whileHover={{ scale: 1.05, y: -5, rotateY: 5 }}
              className="bg-card rounded-xl p-6 border shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center justify-between mb-2">
                <Briefcase className="h-8 w-8 text-primary" />
                <TrendingUp className="h-4 w-4 text-muted-foreground" />
              </div>
              <h3 className="text-3xl font-bold mb-1">3+</h3>
              <p className="text-sm text-muted-foreground">Active Roles</p>
            </motion.div>
          </div>

          {/* Tech Stack Preview */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="bg-card rounded-xl p-6 border shadow-sm"
          >
            <h4 className="text-lg font-bold mb-4">Core Technologies</h4>
            <div className="flex flex-wrap gap-2">
              {["React", "Next.js", "TypeScript", "Node.js", "MongoDB", "PostgreSQL"].map((tech, index) => (
                <motion.span
                  key={tech}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: 0.6 + index * 0.1 }}
                  className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-6"
        >
          <motion.h3
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-2xl font-bold"
          >
            A passionate Fullstack Developer based in Plymouth, United Kingdom
          </motion.h3>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-muted-foreground"
          >
            With over 4 years of experience, I've built a variety of web and
            mobile applications—from simple websites to complex backend systems.
            I'm passionate about creating scalable, efficient, and user-friendly
            solutions that address real-world challenges.
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="text-muted-foreground"
          >
            I specialize in JavaScript/TypeScript ecosystems, with expertise in
            React, Next.js, Node.js, and various database technologies. I'm
            constantly learning and adapting to new technologies to stay at the
            forefront of web development.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="grid grid-cols-2 gap-4 pt-4 box-border"
          >
            {[
              { label: "Name:", value: "Jolaoluwa Olusanya" },
              { label: "Email:", value: "olusanyajolaoluwa@gmail.com", break: true },
              { label: "From:", value: "Plymouth, UK" },
              { label: "Availability:", value: "Freelance / Full-time" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.4 + index * 0.1 }}
                whileHover={{ scale: 1.05, x: 5 }}
                className="bg-card/50 rounded-lg p-3 border border-transparent hover:border-primary/20 transition-colors"
              >
                <h4 className="font-medium mb-1">{item.label}</h4>
                <p className={`text-muted-foreground ${item.break ? "break-words" : ""}`}>
                  {item.value}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Button asChild className="mt-6">
              <Link
                href="https://1drv.ms/b/c/d3810bfe395b3c11/EdIWfIX9wgJNo2mYX1qlBj8BRuq-tX21RYDIEP8vJvxwFg?e=SmrPxd"
                download
                target="_blank"
              >
                <FileText className="mr-2 h-4 w-4" /> View Resume
              </Link>
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
