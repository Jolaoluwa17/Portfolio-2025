"use client";

import { motion } from "framer-motion";
import { Briefcase, Calendar, GraduationCap, MapPin } from "lucide-react";

export default function Experience() {
  const workExperience = [
    {
      title: "Full-Stack Developer",
      company: "TechGate",
      location: "Lagos, Nigeria",
      period: "2021 - Present",
      description:
        "Developed the frontend of the university companion app Acadu using React Native, integrating backend APIs with Redux. Contributed to multiple projects including Royal Gates Group's official website as well as Lagos State Materials Testing Laboratory (LSTML) official website. Built the event scheduling website ReservNow with Next.js and Redux, also supporting backend development with Node.js, Express.js, and MongoDB.",
    },
    {
      title: "Backend Developer",
      company: "Tekktopia Ltd",
      location: "Lagos, Nigeria",
      period: "2024 - Present",
      description:
        "Worked as part of the frontend team that developed the official Tekktopia website. Currently leading the backend development of CribXpert, a Nigeria-based platform similar to Airbnb, focused on property listings and short-term rentals.",
    },
    {
      title: "Full-Stack Developer",
      company: "TechWings Global",
      location: "Casper, Wyoming, USA (Remote)",
      period: "2024 - 2025",
      description:
        "Collaborate on backend development for the TechWings Evaluator App called ProficioNext. Communicate effectively with team members to resolve technical challenges, ensuring smooth project progress. Contribute to requirement gathering by identifying issues and proposing solutions to improve functionality and user experience.",
    },

    {
      title: "Data Analyst",
      company: "Gems Consulting Limited",
      location: "Lagos, Nigeria",
      period: "2022 - 2023",
      description:
        "Delivered superior customer service by creating clear user guides, collaborated with teams to analyze data and provide actionable insights, and trained colleagues to improve productivity and business efficiency.",
    },
  ];

  const education = [
    {
      degree: "Master in Cybersecurity",
      institution: "University of Plymouth",
      location: "Drake Circus, Plymouth PL4 8AA",
      period: "2025 - 2026 (ongoing)",
      description:
        "Currently pursuing a Master’s in Cybersecurity with a focus on Machine Learning and AI.",
    },
    {
      degree: "Bachelor of Science in Software Engineering",
      institution: "Babcock University",
      location: "Ilishan-Remo, Ogun State, Nigeria",
      period: "2019 - 2023",
      description:
        "Graduated with a 4.17 CGPA (2nd Class Upper), focusing on Web Development and Database Systems. Final year project: Library Management System (LMS).",
    },
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Experience & Education
        </h2>
        <div className="h-1 w-20 bg-primary mx-auto mb-6" />
        <p className="text-muted-foreground max-w-2xl mx-auto">
          My professional journey and educational background that have shaped my
          skills and expertise.
        </p>
      </motion.div>

      <div className="grid md:grid-cols-2 gap-12">
        {/* Work Experience */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center mb-8"
          >
            <div className="p-2 rounded-lg bg-primary/10 text-primary mr-4">
              <Briefcase className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-bold">Work Experience</h3>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative border-l border-muted pl-8 ml-4"
          >
            {workExperience.map((job, index) => (
              <motion.div
                key={index}
                variants={item}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ x: 10, scale: 1.02 }}
                className="mb-12 relative"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  whileHover={{ scale: 1.5, rotate: 180 }}
                  className="absolute w-4 h-4 bg-primary rounded-full -left-[2.55rem] top-0"
                />
                <div className="bg-card rounded-lg p-6 shadow-sm border">
                  <h4 className="text-xl font-bold">{job.title}</h4>
                  <div className="flex flex-wrap items-center text-muted-foreground mt-1 mb-3">
                    <span className="flex items-center mr-4">
                      <Briefcase className="h-4 w-4 mr-1" /> {job.company}
                    </span>
                    <span className="flex items-center mr-4">
                      <MapPin className="h-4 w-4 mr-1" /> {job.location}
                    </span>
                    <span className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" /> {job.period}
                    </span>
                  </div>
                  <p className="text-muted-foreground">{job.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>

        {/* Education */}
        <div>
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="flex items-center mb-8"
          >
            <div className="p-2 rounded-lg bg-primary/10 text-primary mr-4">
              <GraduationCap className="h-6 w-6" />
            </div>
            <h3 className="text-2xl font-bold">Education</h3>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            className="relative border-l border-muted pl-8 ml-4"
          >
            {education.map((edu, index) => (
              <motion.div
                key={index}
                variants={item}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ x: 10, scale: 1.02 }}
                className="mb-12 relative"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  whileHover={{ scale: 1.5, rotate: 180 }}
                  className="absolute w-4 h-4 bg-primary rounded-full -left-[2.55rem] top-0"
                />
                <div className="bg-card rounded-lg p-6 shadow-sm border">
                  <h4 className="text-xl font-bold">{edu.degree}</h4>
                  <div className="flex flex-wrap items-center text-muted-foreground mt-1 mb-3">
                    <span className="flex items-center mr-4">
                      <GraduationCap className="h-4 w-4 mr-1" />{" "}
                      {edu.institution}
                    </span>
                    <span className="flex items-center mr-4">
                      <MapPin className="h-4 w-4 mr-1" /> {edu.location}
                    </span>
                    <span className="flex items-center">
                      <Calendar className="h-4 w-4 mr-1" /> {edu.period}
                    </span>
                  </div>
                  <p className="text-muted-foreground">{edu.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  );
}
