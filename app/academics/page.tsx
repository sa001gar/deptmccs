"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { BookOpen, FileText, Download, Calendar, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Chatbot from "@/components/chatbot"

export default function AcademicsPage() {
  const [searchTerm, setSearchTerm] = useState("")

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const studyMaterials = [
    { title: "Data Structures and Algorithms", subject: "DSA", semester: 3, type: "PDF", size: "2.5 MB" },
    { title: "Database Management Systems", subject: "DBMS", semester: 4, type: "PDF", size: "3.2 MB" },
    { title: "Computer Networks", subject: "CN", semester: 5, type: "PDF", size: "4.1 MB" },
    { title: "Operating Systems", subject: "OS", semester: 4, type: "PDF", size: "2.8 MB" },
    { title: "Software Engineering", subject: "SE", semester: 6, type: "PDF", size: "3.5 MB" },
    { title: "Machine Learning Basics", subject: "ML", semester: 7, type: "PDF", size: "5.2 MB" },
  ]

  const questionPapers = [
    { title: "DSA Final Exam 2023", semester: 3, year: 2023, type: "Final", subject: "Data Structures" },
    { title: "DBMS Mid-term 2023", semester: 4, year: 2023, type: "Mid-term", subject: "Database Systems" },
    { title: "CN Final Exam 2022", semester: 5, year: 2022, type: "Final", subject: "Computer Networks" },
    { title: "OS Final Exam 2023", semester: 4, year: 2023, type: "Final", subject: "Operating Systems" },
    { title: "SE Mid-term 2022", semester: 6, year: 2022, type: "Mid-term", subject: "Software Engineering" },
  ]

  const syllabusData = [
    { semester: 1, subjects: ["Programming Fundamentals", "Mathematics I", "Physics", "English"] },
    { semester: 2, subjects: ["Object Oriented Programming", "Mathematics II", "Digital Logic", "Statistics"] },
    { semester: 3, subjects: ["Data Structures", "Computer Organization", "Discrete Mathematics", "Economics"] },
    { semester: 4, subjects: ["Algorithms", "Database Systems", "Operating Systems", "Software Engineering"] },
    { semester: 5, subjects: ["Computer Networks", "Web Technologies", "Theory of Computation", "Elective I"] },
    { semester: 6, subjects: ["Compiler Design", "AI Fundamentals", "Mobile Computing", "Elective II"] },
  ]

  const notices = [
    {
      title: "Semester Registration Open",
      date: "2024-12-15",
      content: "Registration for Spring 2025 semester is now open. Deadline: January 10, 2025.",
      priority: "high",
    },
    {
      title: "Guest Lecture Series",
      date: "2024-12-20",
      content: "Monthly guest lecture series on emerging technologies starts from January 2025.",
      priority: "medium",
    },
    {
      title: "Lab Schedule Update",
      date: "2024-12-18",
      content: "Updated lab schedules for all semesters have been posted on the notice board.",
      priority: "low",
    },
  ]

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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Academic Resources</h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Access study materials, question papers, syllabus, and important notices
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="materials" className="w-full">
            <TabsList className="grid w-full grid-cols-4 mb-8 bg-white/80 backdrop-blur-sm">
              <TabsTrigger
                value="materials"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-blue-600 data-[state=active]:text-white"
              >
                Study Materials
              </TabsTrigger>
              <TabsTrigger
                value="papers"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-blue-600 data-[state=active]:text-white"
              >
                Question Papers
              </TabsTrigger>
              <TabsTrigger
                value="syllabus"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-blue-600 data-[state=active]:text-white"
              >
                Syllabus
              </TabsTrigger>
              <TabsTrigger
                value="notices"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-blue-600 data-[state=active]:text-white"
              >
                Notices
              </TabsTrigger>
            </TabsList>

            {/* Study Materials Tab */}
            <TabsContent value="materials">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <div className="mb-6">
                  <div className="relative max-w-md">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                    <Input
                      placeholder="Search study materials..."
                      value={searchTerm}
                      onChange={(e) => setSearchTerm(e.target.value)}
                      className="pl-10 focus-visible:ring-purple-500 focus-visible:border-purple-500"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {studyMaterials.map((material, index) => (
                    <motion.div
                      key={material.title}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      whileHover={{ y: -5 }}
                    >
                      <Card className="h-full border-0 shadow-lg hover:shadow-xl bg-white/80 backdrop-blur-sm transition-all duration-300">
                        <CardHeader>
                          <div className="flex items-center justify-between">
                            <BookOpen className="h-8 w-8 text-blue-500" />
                            <span className="text-sm bg-blue-100 text-blue-600 px-2 py-1 rounded">
                              Sem {material.semester}
                            </span>
                          </div>
                          <CardTitle className="text-lg">{material.title}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2 mb-4">
                            <p className="text-sm text-gray-600">Subject: {material.subject}</p>
                            <p className="text-sm text-gray-600">Type: {material.type}</p>
                            <p className="text-sm text-gray-600">Size: {material.size}</p>
                          </div>
                          <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                            <Download className="h-4 w-4 mr-2" />
                            Download
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </TabsContent>

            {/* Question Papers Tab */}
            <TabsContent value="papers">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {questionPapers.map((paper, index) => (
                    <motion.div
                      key={paper.title}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      whileHover={{ y: -5 }}
                    >
                      <Card className="border-0 shadow-lg hover:shadow-xl bg-white/80 backdrop-blur-sm transition-all duration-300">
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between mb-4">
                            <FileText className="h-8 w-8 text-purple-500" />
                            <div className="text-right">
                              <span className="text-sm bg-purple-100 text-purple-600 px-2 py-1 rounded mr-2">
                                {paper.type}
                              </span>
                              <span className="text-sm bg-gray-100 text-gray-600 px-2 py-1 rounded">{paper.year}</span>
                            </div>
                          </div>
                          <h3 className="text-lg font-semibold mb-2">{paper.title}</h3>
                          <div className="space-y-1 mb-4">
                            <p className="text-sm text-gray-600">Subject: {paper.subject}</p>
                            <p className="text-sm text-gray-600">Semester: {paper.semester}</p>
                          </div>
                          <Button
                            variant="outline"
                            className="w-full hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 hover:text-white"
                          >
                            <Download className="h-4 w-4 mr-2" />
                            Download Paper
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </TabsContent>

            {/* Syllabus Tab */}
            <TabsContent value="syllabus">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {syllabusData.map((sem, index) => (
                    <motion.div
                      key={sem.semester}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      whileHover={{ y: -5 }}
                    >
                      <Card className="h-full border-0 shadow-lg hover:shadow-xl bg-white/80 backdrop-blur-sm transition-all duration-300">
                        <CardHeader>
                          <CardTitle className="flex items-center">
                            <Calendar className="h-6 w-6 text-green-500 mr-2" />
                            Semester {sem.semester}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <div className="space-y-2 mb-4">
                            {sem.subjects.map((subject, subIndex) => (
                              <div key={subIndex} className="flex items-center p-2 bg-gray-50 rounded">
                                <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mr-3"></div>
                                <span className="text-sm text-gray-700">{subject}</span>
                              </div>
                            ))}
                          </div>
                          <Button
                            variant="outline"
                            className="w-full hover:bg-gradient-to-r hover:from-purple-600 hover:to-blue-600 hover:text-white"
                          >
                            <Download className="h-4 w-4 mr-2" />
                            Download Syllabus
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </TabsContent>

            {/* Notices Tab */}
            <TabsContent value="notices">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <div className="space-y-6">
                  {notices.map((notice, index) => (
                    <motion.div
                      key={notice.title}
                      initial={{ opacity: 0, x: -30 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                    >
                      <Card className="border-0 shadow-lg hover:shadow-xl bg-white/80 backdrop-blur-sm transition-all duration-300">
                        <CardContent className="p-6">
                          <div className="flex items-start justify-between mb-4">
                            <h3 className="text-xl font-semibold text-gray-800">{notice.title}</h3>
                            <div className="flex items-center space-x-2">
                              <span
                                className={`px-2 py-1 rounded text-xs font-medium ${
                                  notice.priority === "high"
                                    ? "bg-red-100 text-red-600"
                                    : notice.priority === "medium"
                                      ? "bg-yellow-100 text-yellow-600"
                                      : "bg-green-100 text-green-600"
                                }`}
                              >
                                {notice.priority.toUpperCase()}
                              </span>
                              <span className="text-sm text-gray-500">{notice.date}</span>
                            </div>
                          </div>
                          <p className="text-gray-700 leading-relaxed">{notice.content}</p>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
      <Chatbot />
    </div>
  )
}
