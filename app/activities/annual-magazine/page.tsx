"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { FileText, Download, Eye, ArrowLeft, Calendar, Users, X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import EnhancedChatbot from "@/components/enhanced-chatbot"
import { SplashCursor } from "@/components/ui/splash-cursor"

export default function AnnualMagazinePage() {
  const [selectedMagazine, setSelectedMagazine] = useState(null)
  const [currentPage, setCurrentPage] = useState(0)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const magazines = [
    {
      id: 1,
      title: "TechVision 2024",
      description:
        "Annual magazine featuring student articles, research highlights, department achievements, and inspiring success stories from our alumni community.",
      year: "2024",
      pages: 120,
      articles: 45,
      contributors: 85,
      coverImage: "/placeholder.svg?height=400&width=300",
      pdfUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sample-magazine-preview.pdf",
      highlights: [
        "AI Research Breakthroughs",
        "Student Innovation Projects",
        "Alumni Success Stories",
        "Faculty Achievements",
        "Industry Collaborations",
      ],
      sections: [
        "Editorial",
        "Research Highlights",
        "Student Projects",
        "Alumni Corner",
        "Faculty Achievements",
        "Industry Partnerships",
        "Cultural Events",
        "Sports & Activities",
      ],
    },
    {
      id: 2,
      title: "Innovation Chronicles 2023",
      description:
        "Special edition focusing on innovative projects, startup initiatives by students, and technological advancements in the department.",
      year: "2023",
      pages: 95,
      articles: 38,
      contributors: 72,
      coverImage: "/placeholder.svg?height=400&width=300",
      pdfUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sample-magazine-preview.pdf",
      highlights: [
        "Startup Success Stories",
        "Innovation Lab Projects",
        "Tech Fest Highlights",
        "Research Publications",
        "Industry Internships",
      ],
      sections: [
        "Innovation Spotlight",
        "Startup Stories",
        "Tech Innovations",
        "Research Papers",
        "Student Achievements",
        "Faculty Research",
        "Industry Connect",
        "Future Vision",
      ],
    },
    {
      id: 3,
      title: "Code & Create 2022",
      description:
        "Compilation of coding competitions, hackathon winners, creative projects, and technical achievements of our students.",
      year: "2022",
      pages: 85,
      articles: 32,
      contributors: 65,
      coverImage: "/placeholder.svg?height=400&width=300",
      pdfUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sample-magazine-preview.pdf",
      highlights: [
        "Hackathon Winners",
        "Coding Competition Results",
        "Open Source Contributions",
        "Technical Workshops",
        "Programming Achievements",
      ],
      sections: [
        "Coding Champions",
        "Hackathon Heroes",
        "Open Source",
        "Technical Skills",
        "Programming Projects",
        "Algorithm Challenges",
        "Development Stories",
        "Future Coders",
      ],
    },
    {
      id: 4,
      title: "Digital Dreams 2021",
      description:
        "Pandemic edition showcasing how our department adapted to digital learning and continued to excel in virtual environments.",
      year: "2021",
      pages: 78,
      articles: 29,
      contributors: 58,
      coverImage: "/placeholder.svg?height=400&width=300",
      pdfUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sample-magazine-preview.pdf",
      highlights: [
        "Digital Transformation",
        "Online Learning Success",
        "Virtual Events",
        "Remote Collaboration",
        "Pandemic Innovations",
      ],
      sections: [
        "Digital Adaptation",
        "Virtual Learning",
        "Online Events",
        "Remote Projects",
        "Digital Innovation",
        "Virtual Community",
        "Online Achievements",
        "Future Ready",
      ],
    },
    {
      id: 5,
      title: "Tech Horizons 2020",
      description:
        "Milestone edition celebrating a decade of excellence, featuring the evolution of the department and future aspirations.",
      year: "2020",
      pages: 110,
      articles: 42,
      contributors: 90,
      coverImage: "/placeholder.svg?height=400&width=300",
      pdfUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sample-magazine-preview.pdf",
      highlights: [
        "Decade of Excellence",
        "Department Evolution",
        "Milestone Achievements",
        "Future Vision",
        "Legacy Stories",
      ],
      sections: [
        "Decade Review",
        "Milestone Moments",
        "Evolution Story",
        "Achievement Gallery",
        "Future Plans",
        "Legacy Alumni",
        "Vision 2030",
        "Celebration",
      ],
    },
    {
      id: 6,
      title: "Innovate & Inspire 2019",
      description:
        "Celebrating creativity and innovation with student projects, research initiatives, and inspiring stories from the tech world.",
      year: "2019",
      pages: 92,
      articles: 35,
      contributors: 68,
      coverImage: "/placeholder.svg?height=400&width=300",
      pdfUrl: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/sample-magazine-preview.pdf",
      highlights: ["Creative Projects", "Innovation Awards", "Inspiring Stories", "Tech Trends", "Student Innovations"],
      sections: [
        "Innovation Hub",
        "Creative Corner",
        "Inspiring Tales",
        "Tech Trends",
        "Student Spotlight",
        "Research Focus",
        "Industry Insights",
        "Future Tech",
      ],
    },
  ]

  const openMagazineViewer = (magazine) => {
    setSelectedMagazine(magazine)
    setCurrentPage(0)
  }

  const closeMagazineViewer = () => {
    setSelectedMagazine(null)
    setCurrentPage(0)
  }

  const nextPage = () => {
    if (selectedMagazine && currentPage < selectedMagazine.pages - 1) {
      setCurrentPage(currentPage + 1)
    }
  }

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1)
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 relative">
      <SplashCursor />
      <Navbar />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-br from-purple-600 via-purple-700 to-blue-800">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center text-white pt-8"
          >
            <div className="flex items-center justify-center mb-6">
              <Button
                onClick={() => (window.location.href = "/activities")}
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-purple-700 mr-4"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Activities
              </Button>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Annual Magazines</h1>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">
              Explore our collection of annual magazines showcasing student achievements, research highlights, and
              department milestones
            </p>
          </motion.div>
        </div>
      </section>

      {/* Magazine Stats */}
      <section className="py-16 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Total Magazines", value: "15+", icon: FileText },
              { label: "Articles Published", value: "500+", icon: FileText },
              { label: "Student Contributors", value: "800+", icon: Users },
              { label: "Years of Publication", value: "15", icon: Calendar },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-center"
              >
                <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-gray-800 mb-1">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Magazines Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {magazines.map((magazine, index) => (
              <motion.div
                key={magazine.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -5 }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm overflow-hidden">
                  <div className="relative">
                    <img
                      src={magazine.coverImage || "/placeholder.svg"}
                      alt={magazine.title}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-purple-600 text-white px-3 py-1 rounded-full text-sm font-medium">
                      {magazine.year}
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{magazine.title}</h3>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">{magazine.description}</p>

                    <div className="grid grid-cols-3 gap-3 mb-4 text-sm">
                      <div className="text-center p-2 bg-purple-50 rounded">
                        <div className="font-bold text-purple-600">{magazine.pages}</div>
                        <div className="text-gray-600">Pages</div>
                      </div>
                      <div className="text-center p-2 bg-blue-50 rounded">
                        <div className="font-bold text-blue-600">{magazine.articles}</div>
                        <div className="text-gray-600">Articles</div>
                      </div>
                      <div className="text-center p-2 bg-green-50 rounded">
                        <div className="font-bold text-green-600">{magazine.contributors}</div>
                        <div className="text-gray-600">Contributors</div>
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Highlights</h4>
                      <ul className="space-y-1">
                        {magazine.highlights.slice(0, 3).map((highlight, i) => (
                          <li key={i} className="flex items-start text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex gap-2">
                      <Button
                        className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                        onClick={() => openMagazineViewer(magazine)}
                      >
                        <Eye className="h-4 w-4 mr-2" />
                        Preview
                      </Button>
                      <Button
                        variant="outline"
                        className="border-purple-200 text-purple-600 hover:bg-purple-50"
                        onClick={() => {
                          const link = document.createElement("a")
                          link.href = magazine.pdfUrl
                          link.download = `${magazine.title}.pdf`
                          link.click()
                        }}
                      >
                        <Download className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Magazine Viewer Modal */}
      <AnimatePresence>
        {selectedMagazine && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeMagazineViewer}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b">
                <div>
                  <h2 className="text-xl font-bold text-gray-800">{selectedMagazine.title}</h2>
                  <p className="text-sm text-gray-600">
                    Page {currentPage + 1} of {selectedMagazine.pages}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => {
                      const link = document.createElement("a")
                      link.href = selectedMagazine.pdfUrl
                      link.download = `${selectedMagazine.title}.pdf`
                      link.click()
                    }}
                  >
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                  <Button onClick={closeMagazineViewer} variant="outline" size="sm">
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>

              {/* Navigation */}
              <div className="flex items-center justify-between p-4 bg-gray-50">
                <Button
                  onClick={prevPage}
                  disabled={currentPage === 0}
                  variant="outline"
                  size="sm"
                  className="flex items-center"
                >
                  <ChevronLeft className="h-4 w-4 mr-1" />
                  Previous
                </Button>

                <div className="flex items-center gap-2">
                  <span className="text-sm text-gray-600">Go to page:</span>
                  <input
                    type="number"
                    min="1"
                    max={selectedMagazine.pages}
                    value={currentPage + 1}
                    onChange={(e) => {
                      const page = Number.parseInt(e.target.value) - 1
                      if (page >= 0 && page < selectedMagazine.pages) {
                        setCurrentPage(page)
                      }
                    }}
                    className="w-16 px-2 py-1 text-sm border rounded"
                  />
                </div>

                <Button
                  onClick={nextPage}
                  disabled={currentPage === selectedMagazine.pages - 1}
                  variant="outline"
                  size="sm"
                  className="flex items-center"
                >
                  Next
                  <ChevronRight className="h-4 w-4 ml-1" />
                </Button>
              </div>

              {/* PDF Viewer */}
              <div className="h-96 bg-gray-100">
                <iframe
                  src={`${selectedMagazine.pdfUrl}#page=${currentPage + 1}`}
                  className="w-full h-full border-0"
                  title={selectedMagazine.title}
                />
              </div>

              {/* Magazine Info */}
              <div className="p-4 bg-gray-50 border-t">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm">
                  <div>
                    <span className="font-semibold">Year:</span> {selectedMagazine.year}
                  </div>
                  <div>
                    <span className="font-semibold">Pages:</span> {selectedMagazine.pages}
                  </div>
                  <div>
                    <span className="font-semibold">Articles:</span> {selectedMagazine.articles}
                  </div>
                  <div>
                    <span className="font-semibold">Contributors:</span> {selectedMagazine.contributors}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-purple-600 via-blue-600 to-indigo-700">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Contribute to Our Next Edition</h2>
            <p className="text-xl text-purple-200 mb-8 max-w-2xl mx-auto">
              Share your stories, research, and achievements. Be part of our annual magazine and inspire future
              generations.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-purple-700 hover:bg-purple-50"
                onClick={() => (window.location.href = "/feedback")}
              >
                <FileText className="h-4 w-4 mr-2" />
                Submit Article
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
                onClick={() => (window.location.href = "/feedback")}
              >
                Join Editorial Team
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <EnhancedChatbot />
    </div>
  )
}
