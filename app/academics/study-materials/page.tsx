"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { BookOpen, Download, Search, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import EnhancedChatbot from "@/components/enhanced-chatbot"

export default function StudyMaterialsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterSemester, setFilterSemester] = useState("all")

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const studyMaterials = [
    { title: "Programming Fundamentals", subject: "PF", semester: 1, type: "PDF", size: "2.1 MB", downloads: 245 },
    { title: "Object Oriented Programming", subject: "OOP", semester: 2, type: "PDF", size: "3.4 MB", downloads: 198 },
    {
      title: "Data Structures and Algorithms",
      subject: "DSA",
      semester: 3,
      type: "PDF",
      size: "2.5 MB",
      downloads: 312,
    },
    { title: "Database Management Systems", subject: "DBMS", semester: 4, type: "PDF", size: "3.2 MB", downloads: 267 },
    { title: "Computer Networks", subject: "CN", semester: 5, type: "PDF", size: "4.1 MB", downloads: 189 },
    { title: "Operating Systems", subject: "OS", semester: 4, type: "PDF", size: "2.8 MB", downloads: 234 },
    { title: "Software Engineering", subject: "SE", semester: 6, type: "PDF", size: "3.5 MB", downloads: 156 },
    { title: "Machine Learning Basics", subject: "ML", semester: 7, type: "PDF", size: "5.2 MB", downloads: 298 },
    { title: "Web Technologies", subject: "WT", semester: 5, type: "PDF", size: "2.9 MB", downloads: 203 },
    { title: "Mobile Computing", subject: "MC", semester: 6, type: "PDF", size: "3.7 MB", downloads: 167 },
  ]

  const filteredMaterials = studyMaterials.filter((material) => {
    const matchesSearch =
      material.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      material.subject.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesSemester = filterSemester === "all" || material.semester.toString() === filterSemester
    return matchesSearch && matchesSemester
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Study Materials</h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Access comprehensive study materials for all semesters and subjects
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
                placeholder="Search materials..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 focus-visible:ring-purple-500"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Filter className="h-4 w-4 text-gray-600" />
              <Select value={filterSemester} onValueChange={setFilterSemester}>
                <SelectTrigger className="w-40">
                  <SelectValue placeholder="Semester" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">All Semesters</SelectItem>
                  {[1, 2, 3, 4, 5, 6, 7, 8].map((sem) => (
                    <SelectItem key={sem} value={sem.toString()}>
                      Semester {sem}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Materials Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredMaterials.map((material, index) => (
              <motion.div
                key={material.title}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardHeader>
                    <div className="flex items-center justify-between">
                      <BookOpen className="h-8 w-8 text-purple-500" />
                      <span className="text-sm bg-purple-100 text-purple-600 px-2 py-1 rounded">
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
                      <p className="text-sm text-gray-600">Downloads: {material.downloads}</p>
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
        </div>
      </section>

      <Footer />
      <EnhancedChatbot />
    </div>
  )
}
