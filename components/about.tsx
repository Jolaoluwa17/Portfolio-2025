"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { FileText } from "lucide-react";
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
          className="relative"
        >
          <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-primary/20 to-secondary/20 blur-lg opacity-70" />
          <div className="relative aspect-square overflow-hidden rounded-xl">
            <img
              src="/animatedImage.png?height=600&width=600"
              alt="About Me"
              className="object-cover w-full h-full"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="space-y-6"
        >
          <h3 className="text-2xl font-bold">
            A passionate Fullstack Developer based in Plymouth, United Kingdom
          </h3>

          <p className="text-muted-foreground">
            With over 4 years of experience, I've built a variety of web and
            mobile applications—from simple websites to complex backend systems.
            I'm passionate about creating scalable, efficient, and user-friendly
            solutions that address real-world challenges.
          </p>

          <p className="text-muted-foreground">
            I specialize in JavaScript/TypeScript ecosystems, with expertise in
            React, Next.js, Node.js, and various database technologies. I'm
            constantly learning and adapting to new technologies to stay at the
            forefront of web development.
          </p>

          <div className="grid grid-cols-2 gap-4 pt-4 box-border">
            <div>
              <h4 className="font-medium">Name:</h4>
              <p className="text-muted-foreground">Jolaoluwa Olusanya</p>
            </div>
            <div>
              <h4 className="font-medium">Email:</h4>
              <p className="text-muted-foreground break-words">
                olusanyajolaoluwa@gmail.com
              </p>
            </div>
            <div>
              <h4 className="font-medium">From:</h4>
              <p className="text-muted-foreground">Plymouth, UK</p>
            </div>
            <div>
              <h4 className="font-medium">Availability:</h4>
              <p className="text-muted-foreground">Freelance / Full-time</p>
            </div>
          </div>

          <Button asChild className="mt-6">
            <Link
              href="https://1drv.ms/b/c/d3810bfe395b3c11/EaFzmPn1CohLooCa14BIhRUBmnrpLPRKSP_LcnAossz32Q?e=vIQaY0"
              download
              target="_blank"
            >
              <FileText className="mr-2 h-4 w-4" /> View Resume
            </Link>
          </Button>
        </motion.div>
      </div>
    </div>
  );
}
