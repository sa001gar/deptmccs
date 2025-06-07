"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Mail, Phone, Award, Filter, Search } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Chatbot from "@/components/chatbot"

export default function FacultyPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterSpecialization, setFilterSpecialization] = useState("all")

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const facultyMembers = [
    {
      id: 1,
      name: "Dr. Rajesh Kumar",
      designation: "Professor & Head",
      specialization: "Artificial Intelligence",
      email: "rajesh.kumar@mankarcollege.edu.in",
      phone: "+91 98765 43210",
      image: "/placeholder.svg?height=200&width=200",
      experience: "15 years",
      qualifications: "Ph.D. in Computer Science, M.Tech, B.Tech",
      research: "Machine Learning, Deep Learning, Computer Vision",
    },
    {
      id: 2,
      name: "Dr. Priya Sharma",
      designation: "Associate Professor",
      specialization: "Database Systems",
      email: "priya.sharma@mankarcollege.edu.in",
      phone: "+91 98765 43211",
      image: "/placeholder.svg?height=200&width=200",
      experience: "12 years",
      qualifications: "Ph.D. in Database Systems, M.Tech, B.Tech",
      research: "Big Data Analytics, NoSQL Databases, Data Mining",
    },
    {
      id: 3,
      name: "Prof. Amit Patel",
      designation: "Assistant Professor",
      specialization: "Software Engineering",
      email: "amit.patel@mankarcollege.edu.in",
      phone: "+91 98765 43212",
      image: "/placeholder.svg?height=200&width=200",
      experience: "8 years",
      qualifications: "M.Tech in Software Engineering, B.Tech",
      research: "Agile Methodologies, DevOps, Software Testing",
    },
    {
      id: 4,
      name: "Dr. Sneha Gupta",
      designation: "Associate Professor",
      specialization: "Computer Networks",
      email: "sneha.gupta@mankarcollege.edu.in",
      phone: "+91 98765 43213",
      image: "/placeholder.svg?height=200&width=200",
      experience: "10 years",
      qualifications: "Ph.D. in Computer Networks, M.Tech, B.Tech",
      research: "Network Security, IoT, Wireless Networks",
    },
    {
      id: 5,
      name: "Prof. Vikram Singh",
      designation: "Assistant Professor",
      specialization: "Web Technologies",
      email: "vikram.singh@mankarcollege.edu.in",
      phone: "+91 98765 43214",
      image: "/placeholder.svg?height=200&width=200",
      experience: "6 years",
      qualifications: "M.Tech in Computer Science, B.Tech",
      research: "Full Stack Development, Cloud Computing, Microservices",
    },
    {
      id: 6,
      name: "Dr. Anita Roy",
      designation: "Professor",
      specialization: "Data Science",
      email: "anita.roy@mankarcollege.edu.in",
      phone: "+91 98765 43215",
      image: "/placeholder.svg?height=200&width=200",
      experience: "14 years",
      qualifications: "Ph.D. in Data Science, M.Tech, B.Tech",
      research: "Statistical Analysis, Predictive Modeling, Business Intelligence",
    },
  ]

  const specializations = [
    "all",
    "Artificial Intelligence",
    "Database Systems",
    "Software Engineering",
    "Computer Networks",
    "Web Technologies",
    "Data Science",
  ]

  const filteredFaculty = facultyMembers.filter((faculty) => {
    const matchesSearch =
      faculty.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      faculty.specialization.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesFilter = filterSpecialization === "all" || faculty.specialization === filterSpecialization
    return matchesSearch && matchesFilter
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Faculty</h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Meet our experienced and dedicated faculty members who are committed to excellence in education and
              research
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search faculty members..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 focus-visible:ring-purple-500"
              />
            </div>
            <div className="flex items-center space-x-2">
              <Filter className="h-4 w-4 text-gray-600" />
              <Select value={filterSpecialization} onValueChange={setFilterSpecialization}>
                <SelectTrigger className="w-48 focus-visible:ring-purple-500">
                  <SelectValue placeholder="Filter by specialization" />
                </SelectTrigger>
                <SelectContent>
                  {specializations.map((spec) => (
                    <SelectItem key={spec} value={spec}>
                      {spec === "all" ? "All Specializations" : spec}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Faculty Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredFaculty.map((faculty, index) => (
              <motion.div
                key={faculty.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10 }}
              >
                <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden">
                  <div className="relative">
                    <img
                      src={faculty.image || "/placeholder.svg"}
                      alt={faculty.name}
                      className="w-full h-64 object-cover"
                    />
                    <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-500 to-purple-500 text-white px-3 py-1 rounded-full text-sm">
                      {faculty.experience}
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-1">{faculty.name}</h3>
                    <p className="text-purple-600 font-medium mb-2">{faculty.designation}</p>

                    <div className="space-y-3 mb-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <Award className="h-4 w-4 mr-2 text-purple-500" />
                        <span>{faculty.specialization}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Mail className="h-4 w-4 mr-2 text-blue-500" />
                        <span className="truncate">{faculty.email}</span>
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Phone className="h-4 w-4 mr-2 text-green-500" />
                        <span>{faculty.phone}</span>
                      </div>
                    </div>

                    <div className="space-y-2 mb-4">
                      <div>
                        <h4 className="text-sm font-semibold text-gray-800 mb-1">Qualifications:</h4>
                        <p className="text-xs text-gray-600">{faculty.qualifications}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-gray-800 mb-1">Research Areas:</h4>
                        <p className="text-xs text-gray-600">{faculty.research}</p>
                      </div>
                    </div>

                    <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                      View Profile
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredFaculty.length === 0 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
              <p className="text-gray-500 text-lg">No faculty members found matching your criteria.</p>
            </motion.div>
          )}
        </div>
      </section>

      <Footer />
      <Chatbot />
    </div>
  )
}
