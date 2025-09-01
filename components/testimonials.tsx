"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Quote,
  Star,
  X,
  Maximize2,
  MessageSquare,
  Users,
  Loader2,
  AlertCircle,
  User, // ⬅️ default avatar icon
  Globe, // ⬅️ website icon
  ExternalLink, // ⬅️ link affordance
} from "lucide-react";
import { useGetTestimonialsQuery } from "@/api/features/testimonials/testimonialsSlice";

export default function Testimonials() {
  const [selectedTestimonial, setSelectedTestimonial] = useState<number | null>(
    null
  );

  const {
    data: testimonials = [],
    isLoading,
    isError,
    error,
    refetch,
  } = useGetTestimonialsQuery(undefined);

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.1 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 20 },
    show: { opacity: 1, y: 0 },
  };

  const renderStars = (rating: number) =>
    Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        className={`h-4 w-4 ${
          index < rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"
        }`}
      />
    ));

  // Small helper to render avatar (img or fallback icon)
  const Avatar = ({
    url,
    alt,
    size = 48,
  }: {
    url?: string;
    alt?: string;
    size?: number;
  }) => {
    const wrapper = `relative overflow-hidden rounded-full bg-muted flex items-center justify-center`;
    const dim = { width: `${size}px`, height: `${size}px` };
    if (url) {
      return (
        <div className={wrapper} style={dim}>
          <img
            src={url}
            alt={alt || "Profile"}
            className="object-cover w-full h-full"
          />
        </div>
      );
    }
    return (
      <div className={wrapper} style={dim}>
        <User className="h-1/2 w-1/2 text-muted-foreground" />
      </div>
    );
  };

  const LoadingState = () => (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="text-center py-16"
    >
      <Loader2 className="h-12 w-12 animate-spin mx-auto mb-4 text-muted-foreground" />
      <p className="text-muted-foreground">Loading testimonials...</p>
    </motion.div>
  );

  const ErrorState = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center py-16"
    >
      <div className="flex justify-center items-center mb-4">
        <AlertCircle className="h-16 w-16 text-red-500/70" />
      </div>
      <h3 className="text-xl font-semibold mb-3 text-muted-foreground">
        Failed to load testimonials
      </h3>
      <p className="text-muted-foreground max-w-md mx-auto mb-6">
        We're having trouble loading the testimonials. Please try again.
      </p>
      <Button onClick={refetch} variant="outline">
        Try Again
      </Button>
    </motion.div>
  );

  const EmptyState = () => (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5 }}
      className="text-center py-16"
    >
      <div className="relative mb-8">
        <div className="flex justify-center items-center mb-4">
          <div className="relative">
            <MessageSquare className="h-16 w-16 text-muted-foreground/30" />
            <Users className="h-8 w-8 text-muted-foreground/50 absolute -bottom-2 -right-2" />
          </div>
        </div>
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-32 h-32 border-2 border-dashed border-muted-foreground/20 rounded-full" />
        </div>
      </div>

      <h3 className="text-xl font-semibold mb-3 text-muted-foreground">
        No testimonials yet
      </h3>
      <p className="text-muted-foreground max-w-md mx-auto mb-6">
        Client testimonials will appear here once projects are completed. Check
        back soon to see what people are saying about the work!
      </p>
      <Button variant="outline" disabled className="cursor-default">
        Coming Soon
      </Button>
    </motion.div>
  );

  const selected =
    selectedTestimonial !== null ? testimonials[selectedTestimonial] : null;

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

      {isLoading ? (
        <LoadingState />
      ) : isError ? (
        <ErrorState />
      ) : testimonials.length === 0 ? (
        <EmptyState />
      ) : (
        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial: any, index: number) => {
            const profileUrl = testimonial?.profileImg?.fileUrl;
            return (
              <motion.div
                key={index}
                variants={item}
                className="bg-card rounded-xl border shadow-sm hover:shadow-md transition-all group p-6 relative"
              >
                <div className="absolute top-4 right-4 text-primary opacity-20">
                  <Quote className="h-8 w-8" />
                </div>

                <div className="flex items-center mb-4">
                  <div className="relative w-12 h-12 mr-4">
                    <Avatar
                      url={profileUrl}
                      alt={testimonial?.fullName}
                      size={48}
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="font-semibold text-sm">
                      {testimonial?.fullName}
                    </h4>
                    <p className="text-xs text-muted-foreground">
                      {testimonial?.role}
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial?.companyName}
                    </p>
                  </div>
                </div>

                <div className="flex mb-3">
                  {renderStars(Number(testimonial?.rating || 0))}
                </div>

                <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                  "{testimonial?.shortQuote}"
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-xs font-medium text-primary">
                    {testimonial?.projectName}
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
            );
          })}
        </motion.div>
      )}

      {/* Testimonial Modal */}
      <AnimatePresence>
        {selected && selectedTestimonial !== null && (
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
                  <div className="relative w-16 h-16 mr-4">
                    <Avatar
                      url={selected?.profileImg?.fileUrl}
                      alt={selected?.fullName}
                      size={64}
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold">{selected?.fullName}</h3>
                    <p className="text-muted-foreground">{selected?.role}</p>
                    <p className="text-sm text-muted-foreground">
                      {selected?.companyName}
                    </p>
                  </div>
                </div>

                <div className="flex mb-6">
                  {renderStars(Number(selected?.rating || 0))}
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  "{selected?.testimonials}"
                </p>

                <div className="border-t pt-6 space-y-3">
                  <div className="flex items-center justify-between">
                    <p className="font-medium text-sm">
                      Project:{" "}
                      <span className="text-muted-foreground">
                        {selected?.projectName}
                      </span>
                    </p>
                  </div>

                  {/* NEW: Website row with fallback */}
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Globe className="h-4 w-4 text-muted-foreground" />
                      <p className="font-medium text-sm">Website</p>
                    </div>

                    {selected?.projectUrl ? (
                      <a
                        href={
                          selected.projectUrl?.startsWith("https://")
                            ? selected.projectUrl
                            : `https://${selected.projectUrl}`
                        }
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1 text-sm text-primary hover:underline"
                        title={selected.projectUrl}
                      >
                        Visit site <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    ) : (
                      <Badge variant="secondary" className="text-xs">
                        Unavailable
                      </Badge>
                    )}
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
