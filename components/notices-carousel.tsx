"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronLeft, ChevronRight, Calendar, AlertCircle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"

const notices = [
  {
    id: 1,
    title: "Semester Examination Schedule Released",
    content:
      "The final semester examination schedule for Computer Science has been published. Students are advised to check the academic portal for detailed timings.",
    date: "2024-12-15",
    type: "exam",
    priority: "high",
  },
  {
    id: 2,
    title: "Guest Lecture on AI & Machine Learning",
    content:
      "Join us for an exciting guest lecture by Dr. Sarah Johnson from IIT Delhi on 'Future of AI in Healthcare' on December 20th, 2024.",
    date: "2024-12-20",
    type: "event",
    priority: "medium",
  },
  {
    id: 3,
    title: "Project Submission Deadline Extended",
    content:
      "Due to technical issues, the final project submission deadline has been extended to January 5th, 2025. Submit your projects via the online portal.",
    date: "2025-01-05",
    type: "deadline",
    priority: "high",
  },
  {
    id: 4,
    title: "Winter Break Holiday Notice",
    content:
      "The college will remain closed from December 25th to January 2nd for winter break. Classes will resume on January 3rd, 2025.",
    date: "2024-12-25",
    type: "holiday",
    priority: "low",
  },
]

export default function NoticesCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % notices.length)
    }, 5000)

    return () => clearInterval(timer)
  }, [])

  const nextNotice = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % notices.length)
  }

  const prevNotice = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + notices.length) % notices.length)
  }

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "text-red-500"
      case "medium":
        return "text-yellow-500"
      default:
        return "text-green-500"
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "exam":
        return "📝"
      case "event":
        return "🎓"
      case "deadline":
        return "⏰"
      case "holiday":
        return "🏖️"
      default:
        return "📢"
    }
  }

  return (
    <div className="relative max-w-4xl mx-auto">
      <div className="relative overflow-hidden rounded-xl">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            initial={{ opacity: 0, x: 300 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -300 }}
            transition={{ duration: 0.5 }}
          >
            <Card className="bg-gradient-to-r from-blue-50 to-purple-50 border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <span className="text-2xl">{getTypeIcon(notices[currentIndex].type)}</span>
                    <div>
                      <h3 className="text-xl font-bold text-gray-800 mb-1">{notices[currentIndex].title}</h3>
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(notices[currentIndex].date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <AlertCircle className={`h-4 w-4 ${getPriorityColor(notices[currentIndex].priority)}`} />
                          <span className={`capitalize ${getPriorityColor(notices[currentIndex].priority)}`}>
                            {notices[currentIndex].priority} Priority
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-gray-700 leading-relaxed">{notices[currentIndex].content}</p>
              </CardContent>
            </Card>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Navigation Buttons */}
      <Button
        variant="outline"
        size="sm"
        onClick={prevNotice}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm hover:bg-white"
      >
        <ChevronLeft className="h-4 w-4" />
      </Button>

      <Button
        variant="outline"
        size="sm"
        onClick={nextNotice}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-sm hover:bg-white"
      >
        <ChevronRight className="h-4 w-4" />
      </Button>

      {/* Indicators */}
      <div className="flex justify-center mt-6 space-x-2">
        {notices.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-3 h-3 rounded-full transition-all duration-300 ${
              index === currentIndex ? "bg-gradient-to-r from-blue-500 to-purple-500" : "bg-gray-300 hover:bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  )
}
