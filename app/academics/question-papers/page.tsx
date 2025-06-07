"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { FileText, Download, Search, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import EnhancedChatbot from "@/components/enhanced-chatbot"

export default function QuestionPapersPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterYear, setFilterYear] = useState("all")
  const [filterType, setFilterType] = useState("all")

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const questionPapers = [
    {
      title: "Programming Fundamentals Final",
      semester: 1,
      year: 2024,
      type: "Final",
      subject: "Programming Fundamentals",
      downloads: 156,
    },
    {
      title: "OOP Mid-term Exam",
      semester: 2,
      year: 2024,
      type: "Mid-term",
      subject: "Object Oriented Programming",
      downloads: 134,
    },
    {
      title: "DSA Final Exam",
      semester: 3,
      year: 2024,
      type: "Final",
      subject: "Data Structures & Algorithms",
      downloads: 198,
    },
    {
      title: "DBMS Final Exam",
      semester: 4,
      year: 2024,
      type: "Final",
      subject: "Database Management Systems",
      downloads: 167,
    },
    {
      title: "Computer Networks Final",
      semester: 5,
      year: 2024,
      type: "Final",
      subject: "Computer Networks",
      downloads: 145,
    },
    {
      title: "Operating Systems Mid-term",
      semester: 4,
      year: 2023,
      type: "Mid-term",
      subject: "Operating Systems",
      downloads: 123,
    },
    {
      title: "Software Engineering Final",
      semester: 6,
      year: 2023,
      type: "Final",
      subject: "Software Engineering",
      downloads: 189,
    },
    {
      title: "Machine Learning Final",
      semester: 7,
      year: 2023,
      type: "Final",
      subject: "Machine Learning",
      downloads: 201,
    },
  ]

  const filteredPapers = questionPapers.filter((paper) => {
    const matchesSearch =
      paper.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      paper.subject.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesYear = filterYear === "all" || paper.year.toString() === filterYear
    const matchesType = filterType === "all" || paper.type === filterType
    return matchesSearch && matchesYear && matchesType
  })

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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Question Papers</h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Access previous year question papers for exam preparation and practice
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
                placeholder="Search question papers..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 focus-visible:ring-purple-500"
              />
            </div>
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-2">
                <Filter className="h-4 w-4 text-gray-600" />
                <Select value={filterYear} onValueChange={setFilterYear}>
                  <SelectTrigger className="w-32">
                    <SelectValue placeholder="Year" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Years</SelectItem>
                    <SelectItem value="2024">2024</SelectItem>
                    <SelectItem value="2023">2023</SelectItem>
                    <SelectItem value="2022">2022</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Select value={filterType} onValueChange={setFilterType}>
                <SelectTrigger className="w-32">
                  <SelectValue placeholder="Type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Types</SelectItem>
                  <SelectItem value="Final">Final</SelectItem>
                  <SelectItem value="Mid-term">Mid-term</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Papers Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filteredPapers.map((paper, index) => (
              <motion.div
                key={paper.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <FileText className="h-8 w-8 text-purple-500" />
                      <div className="text-right">
                        <span
                          className={`text-sm px-2 py-1 rounded mr-2 ${
                            paper.type === "Final" ? "bg-red-100 text-red-600" : "bg-blue-100 text-blue-600"
                          }`}
                        >
                          {paper.type}
                        </span>
                        <span className="text-sm bg-gray-100 text-gray-600 px-2 py-1 rounded">{paper.year}</span>
                      </div>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{paper.title}</h3>
                    <div className="space-y-1 mb-4">
                      <p className="text-sm text-gray-600">Subject: {paper.subject}</p>
                      <p className="text-sm text-gray-600">Semester: {paper.semester}</p>
                      <p className="text-sm text-gray-600">Downloads: {paper.downloads}</p>
                    </div>
                    <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                      <Download className="h-4 w-4 mr-2" />
                      Download Paper
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
      <EnhancedChatbot />
    </div>
  )
}
