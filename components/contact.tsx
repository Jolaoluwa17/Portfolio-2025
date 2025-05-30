"use client";

import type React from "react";

import { useRef, useState } from "react";
import emailjs from "emailjs-com";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import Notification from "./notification";

export default function Contact() {
  const [formState, setFormState] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [msg, setMsg] = useState<React.ReactNode>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value,
    });
  };

  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    if (!formRef.current) return;

    emailjs
      .sendForm(
        "service_y3fcjr7",
        "template_mzrvkni",
        formRef.current,
        "A7u0Crj33k1DwdwQq"
      )
      .then(
        () => {
          setIsSubmitted(true);
          setLoading(true);
          setMsg(
            <>
              Message sent successfully <br /> We’ll get back to you soon 👍🏽
            </>
          );

          setFormState({ name: "", email: "", subject: "", message: "" });
          setIsSubmitting(false);

          setTimeout(() => {
            setIsSubmitted(false);
            setLoading(false);
          }, 5000);
        },
        (error: any) => {
          console.log("Error sending message:", error.text);
          setIsSubmitted(true);
          setLoading(true);
          setMsg(
            <>
              Something went wrong <br /> Please try again later 😔
            </>
          );

          setFormState({ name: "", email: "", subject: "", message: "" });
          setIsSubmitting(false);
          setTimeout(() => {
            setIsSubmitted(false);
            setLoading(false);
          }, 5000);
        }
      );
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
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Get In Touch</h2>
        <div className="h-1 w-20 bg-primary mx-auto mb-6" />
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Have a project in mind or want to discuss potential opportunities?
          Feel free to reach out!
        </p>
      </motion.div>

      <div className="grid lg:grid-cols-5 gap-12">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="lg:col-span-2 space-y-8"
        >
          <div>
            <h3 className="text-2xl font-bold mb-6">Contact Information</h3>
            <p className="text-muted-foreground mb-8">
              Feel free to reach out to me through any of these channels. I'm
              always open to discussing new projects, creative ideas, or
              opportunities to be part of your vision.
            </p>
          </div>

          <div className="space-y-6">
            <div className="flex items-start">
              <div className="p-3 rounded-lg bg-primary/10 text-primary mr-4">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-medium">Location</h4>
                <p className="text-muted-foreground">
                  Plymouth, United Kingdom
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="p-3 rounded-lg bg-primary/10 text-primary mr-4">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-medium">Email</h4>
                <p className="text-muted-foreground">
                  olusanyajolaoluwa@gmail.com
                </p>
              </div>
            </div>

            <div className="flex items-start">
              <div className="p-3 rounded-lg bg-primary/10 text-primary mr-4">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h4 className="font-medium">Phone</h4>
                <p className="text-muted-foreground">(+44) 7440176901</p>
              </div>
            </div>
          </div>

          <div className="pt-6">
            <h4 className="font-medium mb-4">Follow Me</h4>
            <div className="flex space-x-4">
              <a
                href="https://github.com/Jolaoluwa17"
                className="p-3 rounded-full bg-card border hover:bg-muted transition-colors"
                aria-label="GitHub"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/jolaoluwa-olusanya-539798234"
                className="p-3 rounded-full bg-card border hover:bg-muted transition-colors"
                aria-label="LinkedIn"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect x="2" y="9" width="4" height="12"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </a>
              <a
                href="#"
                className="p-3 rounded-full bg-card border hover:bg-muted transition-colors"
                aria-label="Twitter"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a
                href="#"
                className="p-3 rounded-full bg-card border hover:bg-muted transition-colors"
                aria-label="Instagram"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                </svg>
              </a>
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="lg:col-span-3"
        >
          <div className="bg-card rounded-xl p-8 border shadow-sm relative">
            <h3 className="text-2xl font-bold mb-6">Send Me a Message</h3>
            <Notification show={isSubmitted} loading={loading} message={msg} />
            {/* {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                className="bg-green-100 dark:bg-green-900/20 text-green-800 dark:text-green-300 p-4 rounded-lg flex items-center mb-6"
              >
                <CheckCircle className="h-5 w-5 mr-2" />
                <span>
                  Your message has been sent successfully! I'll get back to you
                  soon.
                </span>
              </motion.div>
            ) : ( */}
            <form ref={formRef} onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm font-medium">
                    Your Name
                  </label>
                  <Input
                    id="name"
                    name="name"
                    value={formState.name}
                    onChange={handleChange}
                    placeholder="John Doe"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <label htmlFor="email" className="text-sm font-medium">
                    Your Email
                  </label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formState.email}
                    onChange={handleChange}
                    placeholder="john@example.com"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label htmlFor="subject" className="text-sm font-medium">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  value={formState.subject}
                  onChange={handleChange}
                  placeholder="Project Inquiry"
                  required
                />
              </div>

              <div className="space-y-2">
                <label htmlFor="message" className="text-sm font-medium">
                  Your Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formState.message}
                  onChange={handleChange}
                  placeholder="Hello, I'd like to talk about..."
                  rows={6}
                  required
                />
              </div>

              <Button
                type="submit"
                className="w-full md:w-auto"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <span className="flex items-center">
                    <svg
                      className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                      ></path>
                    </svg>
                    Sending...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <Send className="mr-2 h-4 w-4" /> Send Message
                  </span>
                )}
              </Button>
            </form>
            {/* )} */}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
