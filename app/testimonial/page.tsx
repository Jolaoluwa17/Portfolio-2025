"use client";

import { useState, ChangeEvent, FormEvent, DragEvent } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import {
  Star,
  Send,
  CheckCircle,
  User,
  Building,
  Briefcase,
  MessageSquare,
  Mail,
  Upload,
  X,
  ExternalLink,
  AlertCircle,
} from "lucide-react";
import { usePostTestimonialsMutation } from "@/api/features/testimonials/testimonialsSlice";

interface FormData {
  name: string;
  email: string;
  role: string;
  company: string;
  project: string;
  projectUrl: string;
  rating: number;
  shortQuote: string;
  fullTestimonial: string;
  profileImage: File | null;
}

export default function TestimonialsForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    role: "",
    company: "",
    project: "",
    projectUrl: "",
    rating: 0,
    shortQuote: "",
    fullTestimonial: "",
    profileImage: null,
  });

  const [hoveredRating, setHoveredRating] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [dragActive, setDragActive] = useState(false);
  const [imagePreview, setImagePreview] = useState<string | null>(null);

  const [postTestimonial, { isLoading: isSubmitting, error: submitError }] =
    usePostTestimonialsMutation();

  const handleInputChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleRatingClick = (rating: number) => {
    setFormData((prev) => ({
      ...prev,
      rating: rating,
    }));
  };

  const handleImageUpload = (file: File) => {
    if (file && file.type.startsWith("image/")) {
      setFormData((prev) => ({
        ...prev,
        profileImage: file,
      }));

      // Create preview URL
      const reader = new FileReader();
      reader.onload = (e) => {
        if (e.target?.result) {
          setImagePreview(e.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDrag = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleImageUpload(e.dataTransfer.files[0]);
    }
  };

  const removeImage = () => {
    setFormData((prev) => ({
      ...prev,
      profileImage: null,
    }));
    setImagePreview(null);
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    try {
      // Create FormData for multipart/form-data submission
      const submitData = new FormData();

      // Map form fields to your backend schema
      submitData.append("fullName", formData.name);
      submitData.append("email", formData.email);
      submitData.append("role", formData.role);
      submitData.append("companyName", formData.company);
      submitData.append("projectName", formData.project);
      submitData.append("projectUrl", formData.projectUrl || "");
      submitData.append("rating", formData.rating.toString());
      submitData.append("shortQuote", formData.shortQuote);
      submitData.append("testimonials", formData.fullTestimonial);

      // Add profile image if exists
      if (formData.profileImage) {
        submitData.append("profileImg", formData.profileImage);
      }

      // Submit the testimonial
      await postTestimonial(submitData).unwrap();

      setIsSubmitted(true);
    } catch (error) {
      console.error("Failed to submit testimonial:", error);
      // Error will be handled by the error state from the mutation
    }
  };

  const renderStars = (interactive = false) => {
    return Array.from({ length: 5 }, (_, index) => {
      const starValue = index + 1;
      const isFilled = interactive
        ? hoveredRating
          ? starValue <= hoveredRating
          : starValue <= formData.rating
        : starValue <= formData.rating;

      return (
        <Star
          key={index}
          className={`h-6 w-6 cursor-pointer transition-colors ${
            isFilled
              ? "fill-yellow-400 text-yellow-400"
              : "text-gray-300 hover:text-yellow-200"
          }`}
          onClick={() => interactive && handleRatingClick(starValue)}
          onMouseEnter={() => interactive && setHoveredRating(starValue)}
          onMouseLeave={() => interactive && setHoveredRating(0)}
        />
      );
    });
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-background py-16">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-2xl mx-auto text-center"
          >
            <div className="mb-8">
              <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-4" />
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Thank You!
              </h1>
              <div className="h-1 w-20 bg-primary mx-auto mb-6" />
              <p className="text-muted-foreground text-lg">
                Your testimonial has been submitted successfully. I really
                appreciate you taking the time to share your experience!
              </p>
            </div>

            <Card className="p-6 mb-8">
              <h3 className="font-semibold mb-4">Your Testimonial Preview:</h3>
              <div className="text-left">
                <div className="flex items-center mb-3">
                  {imagePreview ? (
                    <img
                      src={imagePreview}
                      alt="Profile"
                      className="w-12 h-12 rounded-full object-cover mr-3"
                    />
                  ) : (
                    <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center text-primary-foreground font-semibold mr-3">
                      {formData.name.charAt(0).toUpperCase()}
                    </div>
                  )}
                  <div>
                    <p className="font-semibold">{formData.name}</p>
                    <p className="text-sm text-muted-foreground">
                      {formData.role} at {formData.company}
                    </p>
                  </div>
                </div>
                <div className="flex mb-3">{renderStars()}</div>
                <p className="text-muted-foreground italic">
                  "{formData.shortQuote}"
                </p>
                {formData.projectUrl && (
                  <p className="text-sm text-primary mt-2">
                    Project:{" "}
                    <a
                      href={formData.projectUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="underline hover:no-underline"
                    >
                      {formData.project}
                    </a>
                  </p>
                )}
              </div>
            </Card>

            <Button onClick={() => window.location.reload()} size="lg">
              Submit Another Testimonial
            </Button>
          </motion.div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background py-16">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Share Your Experience
          </h1>
          <div className="h-1 w-20 bg-primary mx-auto mb-6" />
          <p className="text-muted-foreground max-w-2xl mx-auto">
            I'd love to hear about your experience working with me. Your
            feedback helps me improve and helps others understand what it's like
            to work together.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="max-w-4xl mx-auto"
        >
          <Card>
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <MessageSquare className="h-5 w-5" />
                Testimonial Form
              </CardTitle>
              <CardDescription>
                Please fill out the form below. All fields marked with * are
                required.
              </CardDescription>
            </CardHeader>
            <CardContent>
              {/* Error Message */}
              {submitError && (
                <div className="mb-6 p-4 border border-red-200 rounded-lg bg-red-50 dark:bg-red-900/20 dark:border-red-800">
                  <div className="flex items-center gap-2">
                    <AlertCircle className="h-5 w-5 text-red-500" />
                    <p className="text-red-700 dark:text-red-300">
                      Failed to submit testimonial. Please try again.
                    </p>
                  </div>
                </div>
              )}

              <div className="space-y-6">
                {/* Personal Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="name" className="flex items-center gap-2">
                      <User className="h-4 w-4" />
                      Full Name *
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="John Doe"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="flex items-center gap-2">
                      <Mail className="h-4 w-4" />
                      Email Address *
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@company.com"
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="role" className="flex items-center gap-2">
                      <Briefcase className="h-4 w-4" />
                      Your Role *
                    </Label>
                    <Input
                      id="role"
                      name="role"
                      value={formData.role}
                      onChange={handleInputChange}
                      placeholder="CEO, Product Manager, etc."
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label
                      htmlFor="company"
                      className="flex items-center gap-2"
                    >
                      <Building className="h-4 w-4" />
                      Company Name *
                    </Label>
                    <Input
                      id="company"
                      name="company"
                      value={formData.company}
                      onChange={handleInputChange}
                      placeholder="Your Company Inc."
                      required
                    />
                  </div>
                </div>

                {/* Profile Image Upload */}
                <div className="space-y-2">
                  <Label className="flex items-center gap-2">
                    <Upload className="h-4 w-4" />
                    Profile Image (Optional)
                  </Label>
                  <div
                    className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors ${
                      dragActive
                        ? "border-primary bg-primary/5"
                        : "border-muted-foreground/25"
                    }`}
                    onDragEnter={handleDrag}
                    onDragLeave={handleDrag}
                    onDragOver={handleDrag}
                    onDrop={handleDrop}
                  >
                    {imagePreview ? (
                      <div className="flex items-center justify-center gap-4">
                        <img
                          src={imagePreview}
                          alt="Profile preview"
                          className="w-16 h-16 rounded-full object-cover"
                        />
                        <Button
                          type="button"
                          variant="outline"
                          size="sm"
                          onClick={removeImage}
                        >
                          <X className="h-4 w-4 mr-2" />
                          Remove
                        </Button>
                      </div>
                    ) : (
                      <>
                        <Upload className="h-8 w-8 mx-auto mb-2 text-muted-foreground" />
                        <p className="text-sm text-muted-foreground mb-2">
                          Drag and drop your image here, or click to browse
                        </p>
                        <Input
                          type="file"
                          accept="image/*"
                          onChange={(e) => {
                            if (e.target.files && e.target.files[0]) {
                              handleImageUpload(e.target.files[0]);
                            }
                          }}
                          className="w-full"
                        />
                      </>
                    )}
                  </div>
                </div>

                {/* Project Information */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <Label htmlFor="project">Project Name *</Label>
                    <Input
                      id="project"
                      name="project"
                      value={formData.project}
                      onChange={handleInputChange}
                      placeholder="E-commerce Platform, Mobile App, etc."
                      required
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="projectUrl">Project URL (Optional)</Label>
                    <Input
                      id="projectUrl"
                      name="projectUrl"
                      type="url"
                      value={formData.projectUrl}
                      onChange={handleInputChange}
                      placeholder="https://example.com"
                    />
                  </div>
                </div>

                {/* Rating */}
                <div className="space-y-2">
                  <Label>Overall Rating *</Label>
                  <div className="flex items-center gap-2">
                    {renderStars(true)}
                    <span className="text-sm text-muted-foreground ml-2">
                      ({formData.rating}/5)
                    </span>
                  </div>
                </div>

                {/* Short Quote */}
                <div className="space-y-2">
                  <Label htmlFor="shortQuote">Short Quote for Preview *</Label>
                  <Textarea
                    id="shortQuote"
                    name="shortQuote"
                    value={formData.shortQuote}
                    onChange={handleInputChange}
                    placeholder="A brief, impactful statement about your experience (1-2 sentences)"
                    rows={3}
                    maxLength={200}
                    required
                  />
                  <p className="text-xs text-muted-foreground">
                    {formData.shortQuote.length}/200 characters
                  </p>
                </div>

                {/* Full Testimonial */}
                <div className="space-y-2">
                  <Label htmlFor="fullTestimonial">
                    Detailed Testimonial *
                  </Label>
                  <Textarea
                    id="fullTestimonial"
                    name="fullTestimonial"
                    value={formData.fullTestimonial}
                    onChange={handleInputChange}
                    placeholder="Please share your detailed experience working with me. Include specifics about the project, communication, quality of work, and overall satisfaction."
                    rows={6}
                    maxLength={1000}
                    required
                  />
                  <p className="text-xs text-muted-foreground">
                    {formData.fullTestimonial.length}/1000 characters
                  </p>
                </div>

                {/* Submit Button */}
                <Button
                  onClick={handleSubmit}
                  size="lg"
                  className="w-full"
                  disabled={isSubmitting || formData.rating === 0}
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2" />
                      Submitting...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Submit Testimonial
                    </>
                  )}
                </Button>
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
