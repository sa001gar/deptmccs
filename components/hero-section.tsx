"use client"

import { motion } from "framer-motion"
import { ChevronRight, Bell, Calendar } from "lucide-react"
import { Button } from "@/components/ui/button"
import { SplashCursor } from "@/components/ui/splash-cursor"

const notices = [
  {
    title: "Semester Registration Open for Semester 3",
    date: "Dec 15, 2024",
    type: "Registration",
  },
  {
    title: "Guest Lecture on AI & Machine Learning",
    date: "Dec 20, 2024",
    type: "Event",
  },
  {
    title: "Project Submission Deadline Extended",
    date: "Jan 5, 2025",
    type: "Deadline",
  },
]

export default function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Fluid Animation Background */}
      {/*<SplashCursor
        DENSITY_DISSIPATION={2.5}
        VELOCITY_DISSIPATION={1.5}
        SPLAT_FORCE={4000}
        COLOR_UPDATE_SPEED={5}
        BACK_COLOR={{ r: 0.1, g: 0.2, b: 0.4 }}
      />*/}

      {/* Gradient Overlay for Text Readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-purple-800 to-blue-900/80 z-10" />

      {/* Dark overlay for better text contrast */}
      <div className="absolute inset-0 bg-black/30 z-20" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-30 max-w-7xl h-full flex items-center pt-20 sm:pt-16 lg:pt-0">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-center w-full">
          {/* Left Content */}
          <div className="lg:col-span-8 space-y-6 lg:space-y-8 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="text-white space-y-4 lg:space-y-6"
            >
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight text-shadow-lg"
                style={{ textShadow: "2px 2px 4px rgba(0,0,0,0.8)" }}
              >
                Department of Computer Science, Mankar College
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6, duration: 0.8 }}
                className="text-base sm:text-lg md:text-xl lg:text-2xl text-blue-100 leading-relaxed max-w-4xl mx-auto lg:mx-0"
                style={{ textShadow: "1px 1px 2px rgba(0,0,0,0.8)" }}
              >
                Empowering minds through cutting-edge computer science education, fostering innovation, and preparing
                tomorrow's technology leaders.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.8 }}
                className="flex flex-col sm:flex-row gap-3 lg:gap-4 pt-2 lg:pt-4 justify-center lg:justify-start"
              >
                <Button size="lg" className="bg-white text-blue-700 hover:bg-blue-50 text-base lg:text-lg px-6 lg:px-8 py-2.5 lg:py-3 shadow-lg w-full sm:w-auto">
                  Explore Programs
                  <ChevronRight className="ml-2 h-4 w-4 lg:h-5 lg:w-5" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-blue-700 text-base lg:text-lg px-6 lg:px-8 py-2.5 lg:py-3 backdrop-blur-sm bg-white/10 w-full sm:w-auto"
                >
                  Virtual Tour
                </Button>
              </motion.div>
            </motion.div>
          </div>

          {/* Right Sidebar - Notice Board */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="lg:col-span-4 mt-8 lg:mt-0"
          >
            <div className="bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl overflow-hidden shadow-2xl max-w-sm mx-auto">
              {/* Notice Board Header */}
              <div className="bg-gradient-to-r from-purple-600/90 to-blue-600/90 p-3 sm:p-4">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full bg-white/20 flex items-center justify-center">
                      <Bell className="h-4 w-4 sm:h-5 sm:w-5 text-white" />
                    </div>
                    <h3 className="text-base sm:text-lg font-bold text-white">Notice Board</h3>
                  </div>
                  <span className="text-xs bg-white/20 text-white px-2 py-1 rounded-full">
                    {new Date().toLocaleDateString("en-US", { month: "short", year: "numeric" })}
                  </span>
                </div>
              </div>

              {/* Notices */}
              <div className="divide-y divide-white/10">
                {notices.map((notice, index) => (
                  <div key={index} className="p-3 sm:p-4 hover:bg-white/5 transition-colors group cursor-pointer">
                    <div className="flex items-start space-x-2 sm:space-x-3">
                      <div
                        className={`w-2 h-2 mt-2 rounded-full flex-shrink-0 ${
                          notice.type === "Registration"
                            ? "bg-blue-400"
                            : notice.type === "Event"
                              ? "bg-purple-400"
                              : "bg-pink-400"
                        }`}
                      ></div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between mb-1 gap-2">
                          <span
                            className={`text-xs px-2 py-0.5 rounded-full flex-shrink-0 ${
                              notice.type === "Registration"
                                ? "bg-blue-400/20 text-blue-200"
                                : notice.type === "Event"
                                  ? "bg-purple-400/20 text-purple-200"
                                  : "bg-pink-400/20 text-pink-200"
                            }`}
                          >
                            {notice.type}
                          </span>
                          <span className="text-xs text-white/60 flex items-center flex-shrink-0">
                            <Calendar className="h-3 w-3 mr-1" />
                            {notice.date}
                          </span>
                        </div>
                        <h4 className="font-medium text-white group-hover:text-blue-200 transition-colors text-sm leading-tight">
                          {notice.title}
                        </h4>
                        <div className="mt-2 flex justify-end">
                          <div className="w-6 h-6 rounded-full bg-white/10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                            <ChevronRight className="h-3 w-3 text-white" />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Footer */}
              <div className="p-3 sm:p-4 bg-gradient-to-r from-purple-600/20 to-blue-600/20">
                <button className="w-full py-2 rounded-lg border border-white/20 text-white text-sm hover:bg-white/10 transition-colors flex items-center justify-center space-x-2">
                  <span>View All Notices</span>
                  <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
