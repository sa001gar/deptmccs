"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Search, MapPin, Briefcase, Calendar, Award, ExternalLink, Filter } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Chatbot from "@/components/chatbot"

export default function AlumniPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [filterBatch, setFilterBatch] = useState("all")
  const [filterCompany, setFilterCompany] = useState("all")

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const alumni = [
    {
      id: 1,
      name: "Priya Sharma",
      batch: "2020",
      position: "Senior Software Engineer",
      company: "Google",
      location: "Bangalore, India",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      achievement: "Led development of Google Pay features used by millions",
      linkedin: "#",
      email: "priya.sharma@example.com",
    },
    {
      id: 2,
      name: "Amit Patel",
      batch: "2019",
      position: "Full Stack Developer",
      company: "Microsoft",
      location: "Hyderabad, India",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      achievement: "Contributed to Azure cloud services architecture",
      linkedin: "#",
      email: "amit.patel@example.com",
    },
    {
      id: 3,
      name: "Ananya Singh",
      batch: "2021",
      position: "Data Scientist",
      company: "Amazon",
      location: "Mumbai, India",
      image: "https://randomuser.me/api/portraits/women/3.jpg",
      achievement: "Developed ML models for recommendation systems",
      linkedin: "#",
      email: "ananya.singh@example.com",
    },
    {
      id: 4,
      name: "Rahul Kumar",
      batch: "2018",
      position: "Cloud Engineer",
      company: "IBM",
      location: "Pune, India",
      image: "https://randomuser.me/api/portraits/men/4.jpg",
      achievement: "Architected enterprise cloud solutions for Fortune 500",
      linkedin: "#",
      email: "rahul.kumar@example.com",
    },
    {
      id: 5,
      name: "Kavya Reddy",
      batch: "2020",
      position: "Tech Entrepreneur",
      company: "TechStart Inc.",
      location: "Delhi, India",
      image: "https://randomuser.me/api/portraits/women/5.jpg",
      achievement: "Founded successful EdTech startup with 100K+ users",
      linkedin: "#",
      email: "kavya.reddy@example.com",
    },
    {
      id: 6,
      name: "Arjun Mehta",
      batch: "2019",
      position: "Cybersecurity Analyst",
      company: "Wipro",
      location: "Chennai, India",
      image: "https://randomuser.me/api/portraits/men/6.jpg",
      achievement: "Prevented major security breaches for global clients",
      linkedin: "#",
      email: "arjun.mehta@example.com",
    },
  ]

  const stats = [
    { label: "Total Alumni", value: "500+", color: "from-blue-500 to-purple-600" },
    { label: "Companies", value: "150+", color: "from-purple-500 to-pink-600" },
    { label: "Countries", value: "25+", color: "from-pink-500 to-red-600" },
    { label: "Entrepreneurs", value: "35+", color: "from-green-500 to-blue-600" },
  ]

  const batches = ["all", "2018", "2019", "2020", "2021", "2022", "2023"]
  const companies = ["all", "Google", "Microsoft", "Amazon", "IBM", "TCS", "Wipro", "Infosys"]

  const filteredAlumni = alumni.filter((alum) => {
    const matchesSearch =
      alum.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      alum.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      alum.position.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesBatch = filterBatch === "all" || alum.batch === filterBatch
    const matchesCompany = filterCompany === "all" || alum.company === filterCompany
    return matchesSearch && matchesBatch && matchesCompany
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Alumni</h1>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">
              Meet our accomplished graduates who are making their mark in the tech industry worldwide
            </p>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="text-center"
              >
                <div
                  className={`w-20 h-20 mx-auto mb-4 bg-gradient-to-r ${stat.color} rounded-2xl flex items-center justify-center shadow-lg`}
                >
                  <span className="text-2xl font-bold text-white">{stat.value}</span>
                </div>
                <h3 className="font-semibold text-gray-800">{stat.label}</h3>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-8 bg-white/60 backdrop-blur-sm border-y border-purple-100">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
            {/* Search */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search alumni..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10 border-purple-200 focus:border-purple-500"
              />
            </div>

            {/* Filters */}
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex items-center gap-2">
                <Filter className="h-4 w-4 text-gray-600" />
                <span className="text-sm text-gray-600">Filter by:</span>
              </div>
              <Select value={filterBatch} onValueChange={setFilterBatch}>
                <SelectTrigger className="w-32 border-purple-200">
                  <SelectValue placeholder="Batch" />
                </SelectTrigger>
                <SelectContent>
                  {batches.map((batch) => (
                    <SelectItem key={batch} value={batch}>
                      {batch === "all" ? "All Batches" : batch}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              <Select value={filterCompany} onValueChange={setFilterCompany}>
                <SelectTrigger className="w-40 border-purple-200">
                  <SelectValue placeholder="Company" />
                </SelectTrigger>
                <SelectContent>
                  {companies.map((company) => (
                    <SelectItem key={company} value={company}>
                      {company === "all" ? "All Companies" : company}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      </section>

      {/* Alumni Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredAlumni.map((alum, index) => (
              <motion.div
                key={alum.id}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ y: -10 }}
              >
                <Card className="h-full border-0 shadow-lg hover:shadow-2xl transition-all duration-300 bg-white/80 backdrop-blur-sm overflow-hidden">
                  <div className="relative p-6 pb-0">
                    <div className="flex items-center gap-4 mb-4">
                      <img
                        src={alum.image || "/placeholder.svg"}
                        alt={alum.name}
                        className="w-16 h-16 rounded-full border-4 border-white shadow-lg"
                      />
                      <div className="flex-1">
                        <h3 className="text-xl font-bold text-gray-800">{alum.name}</h3>
                        <div className="flex items-center gap-2 text-purple-600 text-sm">
                          <Calendar className="h-3 w-3" />
                          <span>Batch {alum.batch}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-6 pt-0">
                    <div className="space-y-3 mb-4">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Briefcase className="h-4 w-4 text-purple-500" />
                        <span className="text-sm">{alum.position}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-blue-500 rounded-sm flex items-center justify-center">
                          <span className="text-xs text-white font-bold">{alum.company[0]}</span>
                        </div>
                        <span className="text-sm font-medium">{alum.company}</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <MapPin className="h-4 w-4 text-purple-500" />
                        <span className="text-sm">{alum.location}</span>
                      </div>
                    </div>

                    <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-4 rounded-lg mb-4">
                      <div className="flex items-start gap-2">
                        <Award className="h-4 w-4 text-purple-500 mt-0.5 flex-shrink-0" />
                        <p className="text-sm text-gray-700">{alum.achievement}</p>
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button
                        size="sm"
                        className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                      >
                        <ExternalLink className="h-3 w-3 mr-1" />
                        LinkedIn
                      </Button>
                      <Button
                        size="sm"
                        variant="outline"
                        className="flex-1 border-purple-200 text-purple-700 hover:bg-purple-50"
                      >
                        Contact
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {filteredAlumni.length === 0 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Search className="h-16 w-16 mx-auto mb-4" />
              </div>
              <h3 className="text-xl font-semibold text-gray-600 mb-2">No alumni found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-purple-600 via-purple-700 to-blue-800">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Alumni Network</h2>
            <p className="text-xl text-purple-200 mb-8 max-w-2xl mx-auto">
              Stay connected with your alma mater and fellow graduates. Share your success story and inspire current
              students.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-white text-purple-700 hover:bg-purple-50">
                Register as Alumni
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                Submit Success Story
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
      <Chatbot />
    </div>
  )
}
