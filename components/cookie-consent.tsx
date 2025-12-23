"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Cookie, X } from "lucide-react";
import { getConsent, setConsent } from "@/lib/cookies";
import { initGA } from "@/lib/analytics";

export default function CookieConsent() {
  const [showBanner, setShowBanner] = useState(false);

  useEffect(() => {
    // Check if user has already made a choice
    const consent = getConsent();
    
    if (consent === null) {
      // Show banner after a short delay for better UX
      setTimeout(() => {
        setShowBanner(true);
      }, 1000);
    } else if (consent === "accepted") {
      // User previously accepted, initialize GA
      initGA();
    }
  }, []);

  const handleAccept = () => {
    setConsent("accepted");
    setShowBanner(false);
    // Initialize Google Analytics
    initGA();
  };

  const handleReject = () => {
    setConsent("rejected");
    setShowBanner(false);
  };

  return (
    <AnimatePresence>
      {showBanner && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-0 left-0 right-0 z-[100] p-4 sm:p-6"
        >
          <div className="container mx-auto max-w-6xl">
            <div className="bg-background/95 backdrop-blur-lg border border-border rounded-2xl shadow-2xl p-4 sm:p-6">
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                {/* Icon */}
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                    <Cookie className="h-6 w-6 text-primary" />
                  </div>
                </div>

                {/* Content */}
                <div className="flex-1 space-y-2">
                  <h3 className="text-lg font-semibold">Cookie Consent</h3>
                  <p className="text-sm text-muted-foreground">
                    We use cookies to analyze our website traffic and optimize
                    your website experience. By accepting our use of cookies,
                    your data will be aggregated with all other user data via
                    Google Analytics.
                  </p>
                </div>

                {/* Actions */}
                <div className="flex flex-col sm:flex-row gap-2 w-full sm:w-auto">
                  <Button
                    onClick={handleReject}
                    variant="outline"
                    className="w-full sm:w-auto"
                  >
                    Reject
                  </Button>
                  <Button
                    onClick={handleAccept}
                    className="w-full sm:w-auto"
                  >
                    Accept
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

