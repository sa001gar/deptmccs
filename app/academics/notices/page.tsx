"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Bell, Calendar, AlertCircle, Search, Filter } from "lucide-react"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import EnhancedChatbot from "@/components/enhanced-chatbot"

export default function NoticesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterPriority, setFilterPriority] = useState("all")

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const notices = [
    {
      id: 1,
      title: "Semester Registration Open for Spring 2025",
      date: "2024-12-15",
      content:
        "Registration for Spring 2025 semester is now open. Students must complete registration by January 10, 2025. Late registration will incur additional fees.",
      priority: "high",
      category: "Registration",
    },
    {
      id: 2,
      title: "Guest Lecture on Quantum Computing",
      date: "2024-12-20",
      content:
        "Dr. Amit Sharma from IIT Delhi will deliver a guest lecture on 'Quantum Computing: The Future of Technology' on December 25th, 2024 at 2:00 PM in the main auditorium.",
      priority: "medium",
      category: "Event",
    },
    {
      id: 3,
      title: "Project Submission Deadline Extended",
      date: "2024-12-18",
      content:
        "Due to technical issues with the submission portal, the final project submission deadline has been extended to January 5th, 2025.",
      priority: "high",
      category: "Deadline",
    },
    {
      id: 4,
      title: "Winter Break Holiday Notice",
      date: "2024-12-22",
      content:
        "The college will remain closed from December 25th to January 2nd for winter break. Classes will resume on January 3rd, 2025.",
      priority: "low",
      category: "Holiday",
    },
    {
      id: 5,
      title: "Lab Schedule Update",
      date: "2024-12-10",
      content:
        "Updated lab schedules for all semesters have been posted. Students are requested to check the new timings on the department notice board.",
      priority: "medium",
      category: "Schedule",
    },
    {
      id: 6,
      title: "Scholarship Applications Open",
      date: "2024-12-05",
      content:
        "Merit-based scholarship applications for the academic year 2025-26 are now open. Eligible students can apply through the student portal.",
      priority: "medium",
      category: "Scholarship",
    },
  ]

  const filteredNotices = notices.filter((notice) => {
    const matchesSearch =
      notice.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      notice.content.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesPriority = filterPriority === "all" || notice.priority === filterPriority
    return matchesSearch && matchesPriority
  })

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "high":
        return "text-red-500 bg-red-100"
      case "medium":
        return "text-yellow-600 bg-yellow-100"
      default:
        return "text-green-600 bg-green-100"
    }
  }

  const getCategoryColor = (category: string) => {
    const colors = {
      Registration: "bg-blue-100 text-blue-600",
      Event: "bg-purple-100 text-purple-600",
      Deadline: "bg-red-100 text-red-600",
      Holiday: "bg-green-100 text-green-600",
      Schedule: "bg-orange-100 text-orange-600",
      Scholarship: "bg-indigo-100 text-indigo-600",
    }
    return colors[category] || "bg-gray-100 text-gray-600"
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-gradient-to-br from-purple-600 via-purple-700 to-blue-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Notices & Announcements</h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Stay updated with the latest announcements and important notices from the department
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search notices..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 focus-visible:ring-purple-500"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Filter className="h-4 w-4 text-gray-600" />
              <Select value={filterPriority} onValueChange={setFilterPriority}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Priority" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Priorities</SelectItem>
                  <SelectItem value="high">High</SelectItem>
                  <SelectItem value="medium">Medium</SelectItem>
                  <SelectItem value="low">Low</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Notices List */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="space-y-6 max-w-4xl mx-auto">
            {filteredNotices.map((notice, index) => (
              <motion.div
                key={notice.id}
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="flex items-center space-x-3">
                        <div className="w-10 h-10 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                          <Bell className="h-5 w-5 text-white" />
                        </div>
                        <div>
                          <h3 className="text-xl font-semibold text-gray-800 mb-1">{notice.title}</h3>
                          <div className="flex items-center space-x-3">
                            <div className="flex items-center text-sm text-gray-500">
                              <Calendar className="h-4 w-4 mr-1" />
                              {new Date(notice.date).toLocaleDateString()}
                            </div>
                            <span className={`text-xs px-2 py-1 rounded-full ${getCategoryColor(notice.category)}`}>
                              {notice.category}
                            </span>
                          </div>
                        </div>
                      </div>
                      <div className="flex items-center space-x-2">
                        <AlertCircle className={`h-4 w-4 ${getPriorityColor(notice.priority).split(" ")[0]}`} />
                        <span
                          className={`text-xs px-2 py-1 rounded-full font-medium ${getPriorityColor(notice.priority)}`}
                        >
                          {notice.priority.toUpperCase()}
                        </span>
                      </div>
                    </div>
                    <p className="text-gray-700 leading-relaxed">{notice.content}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredNotices.length === 0 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
              <Bell className="h-16 w-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No notices found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
      <EnhancedChatbot />
    </div>
  )
}
