"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, Send, X, Bot, User } from "lucide-react";
import { Button } from "@/components/ui/button";

interface Message {
  id: number;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: 1,
      text: "Hi! I'm Jolaoluwa's AI assistant. Ask me about his experience, skills, or projects!",
      isBot: true,
      timestamp: new Date(),
    },
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const abortRef = useRef<AbortController | null>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  async function sendToAssistant(prompt: string): Promise<string> {
    // Cancel any in-flight request if user sends again
    abortRef.current?.abort();
    abortRef.current = new AbortController();

    const res = await fetch("../api/ask", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: prompt }),
      signal: abortRef.current.signal,
    });

    if (!res.ok) {
      const fallback = `Sorry—I'm having trouble right now. Please try again.`;
      try {
        const { text } = await res.json();
        return text || fallback;
      } catch {
        return fallback;
      }
    }

    const data = await res.json();
    return (data?.text as string) || "…";
  }

  const handleSendMessage = async () => {
    const text = inputValue.trim();
    if (!text || isTyping) return;

    setErrorMsg(null);

    const userMessage: Message = {
      id: Date.now(),
      text,
      isBot: false,
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsTyping(true);

    try {
      const botText = await sendToAssistant(text);

      const botMessage: Message = {
        id: Date.now() + 1,
        text: botText,
        isBot: true,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch (err: any) {
      setErrorMsg(err?.message || "Network error.");
      const botMessage: Message = {
        id: Date.now() + 1,
        text: "Oops—I couldn’t reach the assistant. Please try again.",
        isBot: true,
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botMessage]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 20 },
  };

  return (
    <>
      {/* Chat Toggle Button */}
      <motion.div
        className="fixed bottom-8 left-8 z-50"
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 1, type: "spring", stiffness: 260, damping: 20 }}
      >
        <Button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-full w-12 h-12 shadow-lg hover:shadow-xl transition-shadow"
          size="icon"
        >
          <AnimatePresence mode="wait">
            {isOpen ? (
              <motion.div
                key="close"
                initial={{ rotate: -90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <X className="h-10 w-10" />
              </motion.div>
            ) : (
              <motion.div
                key="chat"
                initial={{ rotate: 90, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: -90, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                <MessageCircle className="h-10 w-10" />
              </motion.div>
            )}
          </AnimatePresence>
        </Button>
      </motion.div>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.3 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.3 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="fixed bottom-24 left-8 w-80 h-96 bg-background border rounded-xl shadow-2xl z-40 flex flex-col overflow-hidden"
          >
            {/* Header */}
            <div className="bg-primary text-primary-foreground p-4 flex items-center gap-3">
              <div className="relative">
                <div className="w-8 h-8 bg-primary-foreground/20 rounded-full flex items-center justify-center">
                  <Bot className="h-4 w-4" />
                </div>
                <motion.div
                  className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-400 rounded-full border-2 border-primary"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
              <div>
                <h3 className="font-semibold">Portfolio Assistant</h3>
                <p className="text-xs opacity-90">Online now</p>
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 overflow-y-auto space-y-4">
              <AnimatePresence>
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    variants={fadeInUp}
                    initial="initial"
                    animate="animate"
                    exit="exit"
                    className={`flex ${
                      message.isBot ? "justify-start" : "justify-end"
                    }`}
                  >
                    <div
                      className={`max-w-[80%] rounded-lg p-3 ${
                        message.isBot
                          ? "bg-muted text-muted-foreground"
                          : "bg-primary text-primary-foreground"
                      }`}
                    >
                      <div className="flex items-start gap-2">
                        {message.isBot ? (
                          <Bot className="h-4 w-4 mt-0.5 flex-shrink-0" />
                        ) : (
                          <User className="h-4 w-4 mt-0.5 flex-shrink-0" />
                        )}
                        <p className="text-sm leading-relaxed">
                          {message.text}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </AnimatePresence>

              {/* Typing Indicator */}
              <AnimatePresence>
                {isTyping && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    className="flex justify-start"
                  >
                    <div className="bg-muted text-muted-foreground rounded-lg p-3 max-w-[80%]">
                      <div className="flex items-center gap-2">
                        <Bot className="h-4 w-4" />
                        <div className="flex space-x-1">
                          {[0, 1, 2].map((i) => (
                            <motion.div
                              key={i}
                              className="w-2 h-2 bg-muted-foreground rounded-full"
                              animate={{ opacity: [0.4, 1, 0.4] }}
                              transition={{
                                duration: 1.4,
                                repeat: Infinity,
                                delay: i * 0.2,
                              }}
                            />
                          ))}
                        </div>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {errorMsg && (
                <div className="text-xs text-red-500/90 px-1">{errorMsg}</div>
              )}

              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t bg-muted/30">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyPress={handleKeyPress}
                  placeholder="Ask me about Jolaoluwa..."
                  className="flex-1 px-3 py-2 text-sm bg-background border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary"
                  disabled={isTyping}
                />
                <Button
                  onClick={handleSendMessage}
                  size="sm"
                  disabled={!inputValue.trim() || isTyping}
                  className="px-3"
                >
                  <Send className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
