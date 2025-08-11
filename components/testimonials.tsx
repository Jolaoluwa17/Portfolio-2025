"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Quote, Star, X, Maximize2 } from "lucide-react";

export default function Testimonials() {
  const [selectedTestimonial, setSelectedTestimonial] = useState<number | null>(
    null
  );

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "Product Manager",
      company: "TechStart Inc.",
      image: "/testimonial-1.jpg?height=400&width=400",
      rating: 5,
      quote:
        "Working with this developer was an absolute pleasure. They delivered exceptional quality and exceeded our expectations.",
      fullTestimonial:
        "Working with this developer was an absolute pleasure. They delivered exceptional quality and exceeded our expectations. The attention to detail and ability to understand complex requirements made our project a huge success. Their communication throughout the process was clear and professional, and they consistently met all deadlines. I would definitely recommend their services to anyone looking for top-tier development work.",
      project: "E-commerce Platform",
      tags: ["React", "Node.js", "MongoDB"],
    },
    {
      name: "Michael Chen",
      role: "CEO",
      company: "Digital Solutions Ltd.",
      image: "/testimonial-2.jpg?height=400&width=400",
      rating: 5,
      quote:
        "The technical expertise and problem-solving skills demonstrated on our project were outstanding.",
      fullTestimonial:
        "The technical expertise and problem-solving skills demonstrated on our project were outstanding. They tackled complex challenges with innovative solutions and delivered a product that significantly improved our business operations. Their ability to translate business requirements into functional, scalable code is remarkable. The project was completed on time and within budget, which speaks volumes about their professionalism and efficiency.",
      project: "Business Dashboard",
      tags: ["Next.js", "TypeScript", "PostgreSQL"],
    },
    {
      name: "Emily Rodriguez",
      role: "Design Director",
      company: "Creative Agency",
      image: "/testimonial-3.jpg?height=400&width=400",
      rating: 5,
      quote:
        "They brought our designs to life with pixel-perfect precision and smooth animations.",
      fullTestimonial:
        "They brought our designs to life with pixel-perfect precision and smooth animations. As a designer, I'm very particular about how my work is implemented, and they exceeded every expectation. The attention to detail in translating our visual concepts into functional, responsive interfaces was impressive. They also provided valuable feedback that improved the overall user experience. It's rare to find a developer who combines technical skill with such a strong design sensibility.",
      project: "Portfolio Website",
      tags: ["React", "Framer Motion", "Tailwind CSS"],
    },
    {
      name: "David Thompson",
      role: "Startup Founder",
      company: "InnovateLabs",
      image: "/testimonial-4.jpg?height=400&width=400",
      rating: 5,
      quote:
        "From concept to deployment, the entire process was seamless and professional.",
      fullTestimonial:
        "From concept to deployment, the entire process was seamless and professional. As a non-technical founder, I needed someone who could not only build our MVP but also guide us through technical decisions. They provided excellent consultation throughout the project, explaining complex concepts in simple terms and offering strategic advice that shaped our product roadmap. The final result exceeded our expectations and has been crucial to our early success.",
      project: "SaaS Platform",
      tags: ["Next.js", "Stripe", "AWS"],
    },
    {
      name: "Lisa Wang",
      role: "Marketing Manager",
      company: "Growth Co.",
      image: "/testimonial-5.jpg?height=400&width=400",
      rating: 5,
      quote:
        "The website they built has significantly improved our conversion rates and user engagement.",
      fullTestimonial:
        "The website they built has significantly improved our conversion rates and user engagement. They took time to understand our business goals and target audience, which reflected in the final product. The site is not only visually appealing but also optimized for performance and SEO. Since launch, we've seen a 40% increase in lead generation and our bounce rate has decreased significantly. Their post-launch support has been excellent as well.",
      project: "Marketing Website",
      tags: ["Next.js", "SEO", "Analytics"],
    },
    {
      name: "James Mitchell",
      role: "CTO",
      company: "DataFlow Systems",
      image: "/testimonial-6.jpg?height=400&width=400",
      rating: 5,
      quote:
        "Exceptional code quality and architecture. The system they built scales beautifully.",
      fullTestimonial:
        "Exceptional code quality and architecture. The system they built scales beautifully and has been running flawlessly in production. Their understanding of modern development practices, clean code principles, and scalable architecture is evident in every aspect of the work. They also implemented comprehensive testing and documentation, making it easy for our team to maintain and extend the system. This level of professionalism and technical excellence is exactly what we needed.",
      project: "Data Processing Platform",
      tags: ["Node.js", "Docker", "Microservices"],
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

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
        }`}
      />
    ));
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
          What Clients Say
        </h2>
        <div className="h-1 w-20 bg-primary mx-auto mb-6" />
        <p className="text-muted-foreground max-w-2xl mx-auto">
          Don't just take my word for it. Here's what some of my clients have to
          say about working with me.
        </p>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      >
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            variants={item}
            className="bg-card rounded-xl border shadow-sm hover:shadow-md transition-all group p-6 relative"
          >
            <div className="absolute top-4 right-4 text-primary opacity-20">
              <Quote className="h-8 w-8" />
            </div>

            <div className="flex items-center mb-4">
              <div className="relative w-12 h-12 mr-4 overflow-hidden rounded-full bg-muted">
                <img
                  src={testimonial.image || "/placeholder.svg"}
                  alt={testimonial.name}
                  className="object-cover w-full h-full"
                />
              </div>
              <div className="flex-1">
                <h4 className="font-semibold text-sm">{testimonial.name}</h4>
                <p className="text-xs text-muted-foreground">
                  {testimonial.role}
                </p>
                <p className="text-xs text-muted-foreground">
                  {testimonial.company}
                </p>
              </div>
            </div>

            <div className="flex mb-3">{renderStars(testimonial.rating)}</div>

            <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
              "{testimonial.quote}"
            </p>
            <div className="flex items-center justify-between">
              <span className="text-xs font-medium text-primary">
                {testimonial.project}
              </span>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSelectedTestimonial(index)}
                className="opacity-0 group-hover:opacity-100 transition-opacity"
              >
                <Maximize2 className="h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        ))}
      </motion.div>

      {/* Testimonial Modal */}
      <AnimatePresence>
        {selectedTestimonial !== null && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-background/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={() => setSelectedTestimonial(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              className="bg-card rounded-xl shadow-lg max-w-2xl w-full max-h-[90vh] overflow-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="p-8 relative">
                <Button
                  variant="secondary"
                  size="icon"
                  className="absolute top-4 right-4"
                  onClick={() => setSelectedTestimonial(null)}
                >
                  <X className="h-5 w-5" />
                </Button>

                <div className="absolute top-6 left-6 text-primary opacity-20">
                  <Quote className="h-12 w-12" />
                </div>

                <div className="flex items-center mb-6 mt-8">
                  <div className="relative w-16 h-16 mr-4 overflow-hidden rounded-full bg-muted">
                    <img
                      src={
                        testimonials[selectedTestimonial].image ||
                        "/placeholder.svg"
                      }
                      alt={testimonials[selectedTestimonial].name}
                      className="object-cover w-full h-full"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold">
                      {testimonials[selectedTestimonial].name}
                    </h3>
                    <p className="text-muted-foreground">
                      {testimonials[selectedTestimonial].role}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonials[selectedTestimonial].company}
                    </p>
                  </div>
                </div>

                <div className="flex mb-6">
                  {renderStars(testimonials[selectedTestimonial].rating)}
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  "{testimonials[selectedTestimonial].fullTestimonial}"
                </p>

                <div className="border-t pt-6">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="font-medium text-sm mb-2">
                        Project: {testimonials[selectedTestimonial].project}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
