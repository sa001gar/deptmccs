"use client"

import { useState, useRef, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  MessageCircle,
  X,
  Send,
  Mic,
  MicOff,
  Volume2,
  VolumeX,
  Sparkles,
  BookOpen,
  Users,
  Calendar,
  HelpCircle,
  Zap,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card } from "@/components/ui/card"

interface Message {
  id: string
  text: string
  isBot: boolean
  timestamp: Date
}

export default function EnhancedChatbot() {
  const [isOpen, setIsOpen] = useState(false)
  const [messages, setMessages] = useState<Message[]>([])
  const [inputValue, setInputValue] = useState("")
  const [isListening, setIsListening] = useState(false)
  const [isSpeaking, setIsSpeaking] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const messagesEndRef = useRef<HTMLDivElement>(null)
  const recognitionRef = useRef<any>(null)

  const suggestions = [
    { icon: BookOpen, text: "Tell me about CS courses", category: "academics" },
    { icon: Users, text: "Faculty information", category: "faculty" },
    { icon: Calendar, text: "Upcoming events", category: "events" },
    { icon: HelpCircle, text: "Admission process", category: "admission" },
    { icon: Zap, text: "Placement statistics", category: "placements" },
  ]

  useEffect(() => {
    if (messages.length === 0 && isOpen) {
      const welcomeMessage: Message = {
        id: Date.now().toString(),
        text: "Hello! I'm your CS Department AI assistant. How can I help you today?",
        isBot: true,
        timestamp: new Date(),
      }
      setMessages([welcomeMessage])
    }
  }, [isOpen, messages.length])

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }, [messages])

  useEffect(() => {
    if (typeof window !== "undefined" && "webkitSpeechRecognition" in window) {
      const SpeechRecognition = (window as any).webkitSpeechRecognition
      recognitionRef.current = new SpeechRecognition()
      recognitionRef.current.continuous = false
      recognitionRef.current.interimResults = false
      recognitionRef.current.lang = "en-US"

      recognitionRef.current.onresult = (event: any) => {
        const transcript = event.results[0][0].transcript
        setInputValue(transcript)
        setIsListening(false)
      }

      recognitionRef.current.onerror = () => {
        setIsListening(false)
      }

      recognitionRef.current.onend = () => {
        setIsListening(false)
      }
    }
  }, [])

  const startListening = () => {
    if (recognitionRef.current) {
      setIsListening(true)
      recognitionRef.current.start()
    }
  }

  const stopListening = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop()
      setIsListening(false)
    }
  }

  const speak = (text: string) => {
    if ("speechSynthesis" in window) {
      const utterance = new SpeechSynthesisUtterance(text)
      utterance.rate = 0.8
      utterance.pitch = 1
      utterance.volume = 0.8

      utterance.onstart = () => setIsSpeaking(true)
      utterance.onend = () => setIsSpeaking(false)

      speechSynthesis.speak(utterance)
    }
  }

  const stopSpeaking = () => {
    if ("speechSynthesis" in window) {
      speechSynthesis.cancel()
      setIsSpeaking(false)
    }
  }

  const sendMessage = async (text: string = inputValue) => {
    if (!text.trim()) return

    const userMessage: Message = {
      id: Date.now().toString(),
      text: text.trim(),
      isBot: false,
      timestamp: new Date(),
    }

    setMessages((prev) => [...prev, userMessage])
    setInputValue("")
    setIsLoading(true)

    try {
      // Simulate Gemini API call
      const response = await simulateGeminiResponse(text.trim())

      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: response,
        isBot: true,
        timestamp: new Date(),
      }

      setMessages((prev) => [...prev, botMessage])
    } catch (error) {
      const errorMessage: Message = {
        id: (Date.now() + 1).toString(),
        text: "I apologize, but I'm having trouble connecting right now. Please try again later or contact our department directly.",
        isBot: true,
        timestamp: new Date(),
      }
      setMessages((prev) => [...prev, errorMessage])
    } finally {
      setIsLoading(false)
    }
  }

  const simulateGeminiResponse = async (input: string): Promise<string> => {
    // Simulate API delay
    await new Promise((resolve) => setTimeout(resolve, 1000 + Math.random() * 2000))

    const lowerInput = input.toLowerCase()

    if (lowerInput.includes("course") || lowerInput.includes("subject") || lowerInput.includes("curriculum")) {
      return "Our CS department offers a comprehensive 3-year undergraduate program covering Programming Fundamentals, Data Structures, Algorithms, Database Systems, Computer Networks, Software Engineering, AI/ML, and more. We also have specialized electives in Web Technologies, Mobile Computing, and Cybersecurity. Would you like details about any specific semester or subject?"
    }

    if (lowerInput.includes("faculty") || lowerInput.includes("teacher") || lowerInput.includes("professor")) {
      return "We have 15+ experienced faculty members including Dr. Rajesh Kumar (Head, AI specialist), Dr. Priya Sharma (Database Systems), Prof. Amit Patel (Software Engineering), and Dr. Sneha Gupta (Computer Networks). Our faculty have industry experience and advanced degrees from premier institutions. Would you like to know about any specific faculty member?"
    }

    if (lowerInput.includes("admission") || lowerInput.includes("eligibility") || lowerInput.includes("apply")) {
      return "Admission to our CS program requires 10+2 with Mathematics and minimum 60% marks. We conduct entrance exams in May-June. Application forms are available online from March. The selection process includes written exam, interview, and merit-based selection. Current application deadline is June 30th. Need help with the application process?"
    }

    if (lowerInput.includes("placement") || lowerInput.includes("job") || lowerInput.includes("career")) {
      return "Our placement record is excellent with 95%+ placement rate! Top recruiters include Google, Microsoft, Amazon, TCS, Wipro, Infosys, and many startups. Average package is ₹6-8 LPA with highest reaching ₹25+ LPA. We also have dedicated placement cell and career guidance programs. Want to know about specific companies or preparation tips?"
    }

    if (lowerInput.includes("event") || lowerInput.includes("fest") || lowerInput.includes("activity")) {
      return "We organize various events throughout the year including Annual Tech Fest (February), Coding Competitions, Guest Lectures, Cultural Night, Sports Day, and Hackathons. Our next major event is the Tech Fest 2025 in February with competitions, exhibitions, and industry expert sessions. Would you like details about upcoming events?"
    }

    if (lowerInput.includes("fee") || lowerInput.includes("cost") || lowerInput.includes("expense")) {
      return "The annual fee structure is approximately ₹45,000 including tuition, lab fees, and library charges. We also offer scholarships for meritorious students and financial assistance for economically weaker sections. Additional costs may include books (₹5,000/year) and hostel (₹35,000/year if required). Need information about scholarship schemes?"
    }

    if (lowerInput.includes("lab") || lowerInput.includes("infrastructure") || lowerInput.includes("facility")) {
      return "We have state-of-the-art infrastructure including 5 computer labs with 200+ systems, dedicated research lab, high-speed internet, modern library with 10,000+ books and digital resources, seminar halls, and project rooms. All labs are equipped with latest software and hardware for practical learning. Want to know about any specific facility?"
    }

    // Default response
    return "Thank you for your question! I'm here to help with information about our CS department including courses, faculty, admissions, placements, events, and facilities. Could you please be more specific about what you'd like to know? You can also use the suggestion buttons below for quick queries."
  }

  const handleSuggestionClick = (suggestion: string) => {
    sendMessage(suggestion)
  }

  return (
    <>
      {/* Chat Button */}
      <motion.button
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 z-50 w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
      >
        <MessageCircle className="h-6 w-6" />
        <div className="absolute -top-2 -right-2 w-4 h-4 bg-green-500 rounded-full animate-pulse"></div>
        <div className="absolute -top-12 right-0 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Chat with AI Assistant
        </div>
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            className="fixed bottom-24 right-4 z-50 w-96 h-[600px] max-w-[calc(100vw-2rem)] max-h-[calc(100vh-8rem)]"
          >
            <Card className="h-full flex flex-col shadow-2xl border-0 bg-white/95 backdrop-blur-lg">
              {/* Header */}
              <div className="bg-gradient-to-r from-purple-600 to-blue-600 text-white p-4 rounded-t-lg">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                      <Sparkles className="h-5 w-5" />
                    </div>
                    <div>
                      <h3 className="font-semibold">CS AI Assistant</h3>
                      <p className="text-xs text-purple-200">Powered by Gemini 2.0</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={isSpeaking ? stopSpeaking : () => {}}
                      className="text-white hover:bg-white/20 p-1"
                    >
                      {isSpeaking ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setIsOpen(false)}
                      className="text-white hover:bg-white/20 p-1"
                    >
                      <X className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Messages */}
              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-gradient-to-b from-purple-50/50 to-blue-50/50">
                {messages.map((message) => (
                  <motion.div
                    key={message.id}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className={`flex ${message.isBot ? "justify-start" : "justify-end"}`}
                  >
                    <div className={`max-w-[80%] ${message.isBot ? "order-2" : ""}`}>
                      {message.isBot && (
                        <div className="flex items-center space-x-2 mb-1">
                          <div className="w-6 h-6 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center">
                            <Sparkles className="h-3 w-3 text-white" />
                          </div>
                          <span className="text-xs text-gray-500">AI Assistant</span>
                        </div>
                      )}
                      <div
                        className={`px-4 py-3 rounded-2xl text-sm leading-relaxed ${
                          message.isBot
                            ? "bg-white border border-gray-200 text-gray-800 shadow-sm"
                            : "bg-gradient-to-r from-purple-600 to-blue-600 text-white"
                        }`}
                      >
                        {message.text}
                        {message.isBot && (
                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => speak(message.text)}
                            className="mt-2 h-6 px-2 text-xs hover:bg-gray-100"
                          >
                            <Volume2 className="h-3 w-3 mr-1" />
                            Listen
                          </Button>
                        )}
                      </div>
                      <div className="text-xs text-gray-400 mt-1 px-2">
                        {message.timestamp.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" })}
                      </div>
                    </div>
                  </motion.div>
                ))}

                {isLoading && (
                  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-start">
                    <div className="bg-white border border-gray-200 rounded-2xl px-4 py-3 shadow-sm">
                      <div className="flex space-x-1">
                        <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"></div>
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.1s" }}
                        ></div>
                        <div
                          className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                          style={{ animationDelay: "0.2s" }}
                        ></div>
                      </div>
                    </div>
                  </motion.div>
                )}

                {/* Suggestions */}
                {messages.length === 1 && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    className="space-y-2"
                  >
                    <p className="text-xs text-gray-500 text-center">Quick suggestions:</p>
                    <div className="grid grid-cols-1 gap-2">
                      {suggestions.map((suggestion, index) => (
                        <motion.button
                          key={index}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: 0.6 + index * 0.1 }}
                          onClick={() => handleSuggestionClick(suggestion.text)}
                          className="flex items-center space-x-2 p-3 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-colors text-left text-sm"
                        >
                          <suggestion.icon className="h-4 w-4 text-purple-600" />
                          <span>{suggestion.text}</span>
                        </motion.button>
                      ))}
                    </div>
                  </motion.div>
                )}

                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="p-4 border-t bg-white">
                <div className="flex space-x-2">
                  <div className="flex-1 relative">
                    <Input
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      placeholder="Type your message..."
                      onKeyPress={(e) => e.key === "Enter" && sendMessage()}
                      className="pr-12 focus-visible:ring-purple-500"
                      disabled={isLoading}
                    />
                    <Button
                      onClick={isListening ? stopListening : startListening}
                      size="sm"
                      variant="ghost"
                      className={`absolute right-1 top-1/2 transform -translate-y-1/2 h-8 w-8 p-0 ${
                        isListening ? "text-red-500 animate-pulse" : "text-gray-400 hover:text-purple-600"
                      }`}
                    >
                      {isListening ? <MicOff className="h-4 w-4" /> : <Mic className="h-4 w-4" />}
                    </Button>
                  </div>
                  <Button
                    onClick={() => sendMessage()}
                    disabled={!inputValue.trim() || isLoading}
                    className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 h-10 w-10 p-0"
                  >
                    <Send className="h-4 w-4" />
                  </Button>
                </div>
                <p className="text-xs text-gray-500 mt-2 text-center">
                  Press and hold mic for voice input • Click speaker to hear responses
                </p>
              </div>
            </Card>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
