"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Download, Calendar, FileText } from "lucide-react"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import EnhancedChatbot from "@/components/enhanced-chatbot"

export default function SyllabusPage() {
  const [selectedSemester, setSelectedSemester] = useState(1)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const syllabusData = [
    {
      semester: 1,
      title: "1st Semester",
      subjects: [
        "Programming Fundamentals",
        "Mathematics I (Calculus)",
        "Physics",
        "English Communication",
        "Environmental Studies",
      ],
      credits: 24,
      pdfUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/screencapture-computersciencemancoll-in-syllabus-2025-05-30-12_52_19-xEkm5QwZrwG51ScjA0UbucHRU1vOXy.png",
    },
    {
      semester: 2,
      title: "2nd Semester",
      subjects: [
        "Object Oriented Programming",
        "Mathematics II (Linear Algebra)",
        "Digital Logic Design",
        "Statistics & Probability",
        "Technical Writing",
      ],
      credits: 24,
      pdfUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/screencapture-computersciencemancoll-in-syllabus-2025-05-30-12_52_19-xEkm5QwZrwG51ScjA0UbucHRU1vOXy.png",
    },
    {
      semester: 3,
      title: "3rd Semester",
      subjects: [
        "Data Structures & Algorithms",
        "Computer Organization",
        "Discrete Mathematics",
        "Economics",
        "Computer Graphics",
      ],
      credits: 26,
      pdfUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/screencapture-computersciencemancoll-in-syllabus-2025-05-30-12_52_19-xEkm5QwZrwG51ScjA0UbucHRU1vOXy.png",
    },
    {
      semester: 4,
      title: "4th Semester",
      subjects: [
        "Database Management Systems",
        "Operating Systems",
        "Software Engineering",
        "Computer Networks",
        "Web Technologies",
      ],
      credits: 26,
      pdfUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/screencapture-computersciencemancoll-in-syllabus-2025-05-30-12_52_19-xEkm5QwZrwG51ScjA0UbucHRU1vOXy.png",
    },
    {
      semester: 5,
      title: "5th Semester",
      subjects: [
        "Theory of Computation",
        "Compiler Design",
        "Artificial Intelligence",
        "Mobile Computing",
        "Elective I",
      ],
      credits: 24,
      pdfUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/screencapture-computersciencemancoll-in-syllabus-2025-05-30-12_52_19-xEkm5QwZrwG51ScjA0UbucHRU1vOXy.png",
    },
    {
      semester: 6,
      title: "6th Semester",
      subjects: ["Machine Learning", "Cybersecurity", "Cloud Computing", "Project Work", "Elective II"],
      credits: 24,
      pdfUrl:
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/screencapture-computersciencemancoll-in-syllabus-2025-05-30-12_52_19-xEkm5QwZrwG51ScjA0UbucHRU1vOXy.png",
    },
  ]

  const selectedSemesterData = syllabusData.find((sem) => sem.semester === selectedSemester)

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 relative">
      
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-8 bg-gradient-to-br from-purple-600 via-purple-700 to-blue-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white pt-8"
          >
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Course Syllabus</h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Access and download the Department of Computer Science syllabi by semester
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8">
        <div className="container mx-auto px-4">
          <div className="bg-white rounded-lg shadow-lg overflow-hidden">
            <div className="flex flex-col lg:flex-row h-[800px]">
              {/* Sidebar */}
              <div className="lg:w-1/3 bg-gray-50 border-r">
                <div className="p-6">
                  <h2 className="text-2xl font-bold text-gray-800 mb-6">Course Syllabus</h2>
                  <p className="text-gray-600 mb-6 text-sm">
                    Access and download the Department of Computer Science syllabi by semester
                  </p>

                  <div className="space-y-2">
                    {syllabusData.map((sem) => (
                      <button
                        key={sem.semester}
                        onClick={() => setSelectedSemester(sem.semester)}
                        className={cn(
                          "w-full text-left p-4 rounded-lg transition-all duration-200 flex items-center justify-between",
                          selectedSemester === sem.semester
                            ? "bg-blue-600 text-white shadow-md"
                            : "bg-white text-gray-700 hover:bg-gray-100 border border-gray-200",
                        )}
                      >
                        <div className="flex items-center">
                          <Calendar className="h-5 w-5 mr-3" />
                          <div>
                            <div className="font-semibold">{sem.title}</div>
                            <div className="text-sm opacity-75">{sem.credits} Credits</div>
                          </div>
                        </div>
                        {selectedSemester === sem.semester && <div className="w-2 h-2 bg-white rounded-full"></div>}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              {/* PDF Viewer */}
              <div className="lg:w-2/3 flex flex-col">
                <div className="p-4 bg-white border-b flex items-center justify-between">
                  <div className="flex items-center">
                    <FileText className="h-5 w-5 mr-2 text-gray-600" />
                    <span className="font-semibold text-gray-800">{selectedSemesterData?.title} Syllabus</span>
                  </div>
                  <Button
                    className="bg-blue-600 hover:bg-blue-700 text-white"
                    onClick={() => {
                      const link = document.createElement("a")
                      link.href = selectedSemesterData?.pdfUrl || ""
                      link.download = `${selectedSemesterData?.title}_Syllabus.pdf`
                      link.click()
                    }}
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download PDF
                  </Button>
                </div>

                <div className="flex-1 bg-gray-100 p-4">
                  <div className="bg-white rounded-lg shadow-inner h-full overflow-hidden">
                    {/* PDF Iframe */}
                    <iframe
                      src={selectedSemesterData?.pdfUrl}
                      className="w-full h-full border-0"
                      title={`${selectedSemesterData?.title} Syllabus`}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <EnhancedChatbot />
    </div>
  )
}
