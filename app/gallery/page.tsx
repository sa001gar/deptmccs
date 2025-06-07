"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Search, Filter, Calendar, Eye, Download, X, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Chatbot from "@/components/chatbot"
import { SplashCursor } from "@/components/ui/splash-cursor"

export default function GalleryPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedImage, setSelectedImage] = useState(null)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const categories = [
    { id: "all", name: "All Images", count: 24 },
    { id: "fresher", name: "Fresher Party", count: 8 },
    { id: "social", name: "Social 2024", count: 6 },
    { id: "academic", name: "Academic Events", count: 5 },
    { id: "sports", name: "Sports Day", count: 5 },
  ]

  const galleryImages = [
    {
      id: 1,
      title: "Fresher's Welcome Ceremony 2024",
      category: "fresher",
      date: "Dec 2024",
      image: "/placeholder.svg?height=300&width=400",
      description:
        "Annual fresher's welcome ceremony with cultural programs and orientation sessions for new students joining the department.",
    },
    {
      id: 2,
      title: "Coding Competition Winners",
      category: "academic",
      date: "Nov 2024",
      image: "/placeholder.svg?height=300&width=400",
      description:
        "Students celebrating their victory in inter-college coding competition, showcasing exceptional programming skills and problem-solving abilities.",
    },
    {
      id: 3,
      title: "Tech Fest 2024",
      category: "social",
      date: "Oct 2024",
      image: "/placeholder.svg?height=300&width=400",
      description:
        "Annual technical festival with various competitions, exhibitions, workshops, and guest lectures from industry experts.",
    },
    {
      id: 4,
      title: "Sports Day Championship",
      category: "sports",
      date: "Sep 2024",
      image: "/placeholder.svg?height=300&width=400",
      description:
        "Inter-departmental sports competition and award ceremony featuring various indoor and outdoor games.",
    },
    {
      id: 5,
      title: "Guest Lecture on AI",
      category: "academic",
      date: "Aug 2024",
      image: "/placeholder.svg?height=300&width=400",
      description:
        "Distinguished guest speaker from Google discussing latest trends in AI and machine learning applications in industry.",
    },
    {
      id: 6,
      title: "Cultural Night 2024",
      category: "social",
      date: "Jul 2024",
      image: "/placeholder.svg?height=300&width=400",
      description:
        "Students showcasing their cultural talents and performances including dance, music, drama, and poetry recitation.",
    },
    {
      id: 7,
      title: "Project Exhibition",
      category: "academic",
      date: "Jun 2024",
      image: "/placeholder.svg?height=300&width=400",
      description:
        "Final year students presenting their innovative projects to industry experts and faculty members for evaluation.",
    },
    {
      id: 8,
      title: "Graduation Ceremony",
      category: "academic",
      date: "May 2024",
      image: "/placeholder.svg?height=300&width=400",
      description:
        "Proud graduates receiving their degrees in a grand ceremony attended by family, faculty, and distinguished guests.",
    },
  ]

  const filteredImages = galleryImages.filter((image) => {
    const matchesCategory = selectedCategory === "all" || image.category === selectedCategory
    const matchesSearch = image.title.toLowerCase().includes(searchTerm.toLowerCase())
    return matchesCategory && matchesSearch
  })

  const openImageModal = (image, index) => {
    setSelectedImage(image)
    setCurrentImageIndex(index)
  }

  const navigateImage = (direction) => {
    const newIndex =
      direction === "next"
        ? (currentImageIndex + 1) % filteredImages.length
        : (currentImageIndex - 1 + filteredImages.length) % filteredImages.length

    setCurrentImageIndex(newIndex)
    setSelectedImage(filteredImages[newIndex])
  }

  const closeModal = () => {
    setSelectedImage(null)
    setCurrentImageIndex(0)
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Gallery</h1>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">
              Explore our vibrant campus life through memorable moments and achievements
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8 bg-white/80 backdrop-blur-sm border-b border-purple-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search images..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 border-purple-200 focus:border-purple-500"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-3">
              {categories.map((category) => (
                <Button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  variant={selectedCategory === category.id ? "default" : "outline"}
                  className={`${
                    selectedCategory === category.id
                      ? "bg-gradient-to-r from-purple-600 to-blue-600 text-white border-0"
                      : "border-purple-200 text-purple-700 hover:bg-purple-50"
                  } transition-all duration-300`}
                >
                  {category.name}
                  <span className="ml-2 text-xs bg-white/20 px-2 py-0.5 rounded-full">{category.count}</span>
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <AnimatePresence>
              {filteredImages.map((image, index) => (
                <motion.div
                  key={image.id}
                  layout
                  initial={{ opacity: 0, scale: 0.8 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.8 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  whileHover={{ y: -10 }}
                  className="group cursor-pointer"
                  onClick={() => openImageModal(image, index)}
                >
                  <Card className="overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
                    <div className="relative overflow-hidden">
                      <img
                        src={image.image || "/placeholder.svg"}
                        alt={image.title}
                        className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="absolute top-3 right-3">
                        <span className="bg-gradient-to-r from-yellow-400 to-orange-500 text-white text-xs px-3 py-1 rounded-full font-medium">
                          {image.date}
                        </span>
                      </div>
                      <div className="absolute bottom-3 left-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <div className="flex items-center justify-between">
                          <Button size="sm" className="bg-white/20 backdrop-blur-sm text-white border-white/30">
                            <Eye className="h-4 w-4 mr-1" />
                            View
                          </Button>
                          <Button size="sm" className="bg-white/20 backdrop-blur-sm text-white border-white/30">
                            <Download className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                    </div>
                    <CardContent className="p-4">
                      <h3 className="font-semibold text-gray-800 mb-2 line-clamp-2">{image.title}</h3>
                      <p className="text-sm text-gray-600 line-clamp-2">{image.description}</p>
                      <div className="flex items-center mt-3 text-xs text-purple-600">
                        <Calendar className="h-3 w-3 mr-1" />
                        {image.date}
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {filteredImages.length === 0 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Filter className="h-16 w-16 mx-auto mb-4" />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No images found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Enhanced Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={closeModal}
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              className="relative max-w-5xl w-full bg-white rounded-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <Button
                onClick={closeModal}
                className="absolute top-4 right-4 z-10 bg-black/20 backdrop-blur-sm text-white border-0 hover:bg-black/40"
                size="sm"
              >
                <X className="h-4 w-4" />
              </Button>

              {/* Navigation Buttons */}
              <Button
                onClick={() => navigateImage("prev")}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/20 backdrop-blur-sm text-white border-0 hover:bg-black/40"
                size="sm"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>

              <Button
                onClick={() => navigateImage("next")}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 bg-black/20 backdrop-blur-sm text-white border-0 hover:bg-black/40"
                size="sm"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>

              {/* Image Counter */}
              <div className="absolute top-4 left-4 z-10 bg-black/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                {currentImageIndex + 1} / {filteredImages.length}
              </div>

              <img
                src={selectedImage.image || "/placeholder.svg"}
                alt={selectedImage.title}
                className="w-full h-96 object-cover"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold text-gray-800 mb-2">{selectedImage.title}</h2>
                <p className="text-gray-600 mb-4 leading-relaxed">{selectedImage.description}</p>
                <div className="flex items-center justify-between">
                  <div className="flex items-center text-purple-600">
                    <Calendar className="h-4 w-4 mr-2" />
                    {selectedImage.date}
                  </div>
                  <div className="flex gap-2">
                    <Button className="bg-gradient-to-r from-purple-600 to-blue-600">
                      <Download className="h-4 w-4 mr-2" />
                      Download
                    </Button>
                    <Button
                      variant="outline"
                      onClick={() =>
                        navigator.share &&
                        navigator.share({
                          title: selectedImage.title,
                          text: selectedImage.description,
                          url: window.location.href,
                        })
                      }
                    >
                      Share
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      <Footer />
      <Chatbot />
    </div>
  )
}
