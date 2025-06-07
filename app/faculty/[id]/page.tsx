"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import { useParams } from "next/navigation"
import {
  Mail,
  Phone,
  Award,
  BookOpen,
  Users,
  Calendar,
  MapPin,
  ExternalLink,
  Star,
  Clock,
  GraduationCap,
  ArrowLeft,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import EnhancedChatbot from "@/components/enhanced-chatbot"
import { SplashCursor } from "@/components/ui/splash-cursor"

export default function FacultyProfilePage() {
  const params = useParams()
  const facultyId = params.id

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  // Mock faculty data - in real app, this would come from API
  const facultyData = {
    "1": {
      id: 1,
      name: "Dr. Rajesh Kumar",
      designation: "Professor & Head of Department",
      specialization: "Artificial Intelligence & Machine Learning",
      email: "rajesh.kumar@mankarcollege.edu.in",
      phone: "+91 98765 43210",
      office: "Room 301, CS Department",
      image: "/placeholder.svg?height=300&width=300",
      experience: "15 years",
      qualifications: [
        "Ph.D. in Computer Science (IIT Delhi, 2008)",
        "M.Tech in AI (IIT Bombay, 2004)",
        "B.Tech in CSE (NIT Warangal, 2002)",
      ],
      researchAreas: ["Machine Learning", "Deep Learning", "Computer Vision", "Natural Language Processing"],
      biography:
        "Dr. Rajesh Kumar is a distinguished professor with over 15 years of experience in computer science education and research. He has been instrumental in establishing the AI research lab and has guided numerous students in cutting-edge research projects.",
      publications: [
        {
          title: "Deep Learning Approaches for Medical Image Analysis",
          journal: "IEEE Transactions on Medical Imaging",
          year: "2023",
          citations: 45,
        },
        {
          title: "Federated Learning in Healthcare: A Comprehensive Survey",
          journal: "Nature Machine Intelligence",
          year: "2022",
          citations: 78,
        },
        {
          title: "Explainable AI for Clinical Decision Support Systems",
          journal: "Journal of Biomedical Informatics",
          year: "2021",
          citations: 92,
        },
      ],
      projects: [
        {
          title: "AI-Powered Diagnostic System",
          funding: "₹25 Lakhs",
          duration: "2022-2024",
          agency: "DST, Govt. of India",
        },
        {
          title: "Smart Campus Initiative",
          funding: "₹15 Lakhs",
          duration: "2021-2023",
          agency: "AICTE",
        },
      ],
      courses: ["Artificial Intelligence", "Machine Learning", "Data Mining", "Research Methodology"],
      awards: ["Best Teacher Award 2023", "Excellence in Research Award 2022", "Young Scientist Award 2019"],
      officeHours: "Monday-Friday: 2:00 PM - 4:00 PM",
      socialLinks: {
        linkedin: "https://linkedin.com/in/rajeshkumar",
        googleScholar: "https://scholar.google.com/rajeshkumar",
        researchGate: "https://researchgate.net/profile/rajeshkumar",
      },
    },
    "2": {
      id: 2,
      name: "Dr. Priya Sharma",
      designation: "Associate Professor",
      specialization: "Database Systems & Big Data",
      email: "priya.sharma@mankarcollege.edu.in",
      phone: "+91 98765 43211",
      office: "Room 302, CS Department",
      image: "/placeholder.svg?height=300&width=300",
      experience: "12 years",
      qualifications: [
        "Ph.D. in Database Systems (IIT Kharagpur, 2011)",
        "M.Tech in Computer Science (IIT Kanpur, 2007)",
        "B.Tech in IT (IIIT Allahabad, 2005)",
      ],
      researchAreas: ["Database Systems", "Big Data Analytics", "Data Mining", "Cloud Computing"],
      biography:
        "Dr. Priya Sharma is an accomplished researcher and educator specializing in database systems and big data analytics. She has published extensively in top-tier conferences and journals.",
      publications: [
        {
          title: "Scalable Data Processing in Distributed Database Systems",
          journal: "ACM Transactions on Database Systems",
          year: "2023",
          citations: 62,
        },
        {
          title: "Optimizing Query Performance in Big Data Environments",
          journal: "IEEE Transactions on Knowledge and Data Engineering",
          year: "2022",
          citations: 89,
        },
        {
          title: "NoSQL Database Design Patterns for Modern Applications",
          journal: "VLDB Journal",
          year: "2021",
          citations: 134,
        },
      ],
      projects: [
        {
          title: "Smart Data Analytics Platform",
          funding: "₹20 Lakhs",
          duration: "2023-2025",
          agency: "SERB, Govt. of India",
        },
        {
          title: "Healthcare Data Management System",
          funding: "₹12 Lakhs",
          duration: "2022-2024",
          agency: "DBT",
        },
      ],
      courses: ["Database Management Systems", "Big Data Analytics", "Data Warehousing", "NoSQL Databases"],
      awards: ["Outstanding Faculty Award 2023", "Best Research Paper Award 2022", "Women in Tech Excellence 2021"],
      officeHours: "Tuesday-Thursday: 3:00 PM - 5:00 PM",
      socialLinks: {
        linkedin: "https://linkedin.com/in/priyasharma",
        googleScholar: "https://scholar.google.com/priyasharma",
        researchGate: "https://researchgate.net/profile/priyasharma",
      },
    },
    "3": {
      id: 3,
      name: "Prof. Amit Patel",
      designation: "Assistant Professor",
      specialization: "Software Engineering & DevOps",
      email: "amit.patel@mankarcollege.edu.in",
      phone: "+91 98765 43212",
      office: "Room 303, CS Department",
      image: "/placeholder.svg?height=300&width=300",
      experience: "8 years",
      qualifications: [
        "M.Tech in Software Engineering (IIT Roorkee, 2015)",
        "B.Tech in Computer Science (NIT Surat, 2013)",
        "Certified DevOps Professional (AWS, 2018)",
      ],
      researchAreas: ["Software Engineering", "DevOps", "Cloud Computing", "Agile Methodologies"],
      biography:
        "Prof. Amit Patel brings extensive industry experience in software development and DevOps practices. He has worked with leading tech companies before joining academia.",
      publications: [
        {
          title: "Continuous Integration and Deployment in Microservices Architecture",
          journal: "Journal of Software Engineering",
          year: "2023",
          citations: 34,
        },
        {
          title: "DevOps Practices for Educational Institutions",
          journal: "IEEE Software",
          year: "2022",
          citations: 28,
        },
      ],
      projects: [
        {
          title: "Automated Testing Framework",
          funding: "₹8 Lakhs",
          duration: "2023-2024",
          agency: "Industry Collaboration",
        },
      ],
      courses: ["Software Engineering", "DevOps Practices", "Web Development", "Project Management"],
      awards: ["Industry Excellence Award 2022", "Innovation in Teaching 2021"],
      officeHours: "Monday, Wednesday, Friday: 1:00 PM - 3:00 PM",
      socialLinks: {
        linkedin: "https://linkedin.com/in/amitpatel",
        googleScholar: "https://scholar.google.com/amitpatel",
        researchGate: "https://researchgate.net/profile/amitpatel",
      },
    },
  }

  const faculty = facultyData[facultyId as keyof typeof facultyData]

  if (!faculty) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 relative">
        <SplashCursor />
        <Navbar />
        <div className="pt-32 pb-16 text-center">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">Faculty Not Found</h1>
          <p className="text-gray-600 mb-8">The requested faculty profile could not be found.</p>
          <Button onClick={() => window.history.back()} className="bg-gradient-to-r from-purple-600 to-blue-600">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Go Back
          </Button>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50 relative">
      <SplashCursor />
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
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 max-w-4xl mx-auto">
              <motion.img
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                src={faculty.image}
                alt={faculty.name}
                className="w-48 h-48 rounded-full border-4 border-white/20 shadow-2xl"
              />
              <div className="text-center md:text-left">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">{faculty.name}</h1>
                <p className="text-xl text-blue-200 mb-2">{faculty.designation}</p>
                <p className="text-lg text-blue-300 mb-4">{faculty.specialization}</p>
                <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                  <Badge className="bg-white/20 text-white border-white/30">{faculty.experience} Experience</Badge>
                  <Badge className="bg-white/20 text-white border-white/30">
                    {faculty.publications.length} Publications
                  </Badge>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <Button
                onClick={() => window.history.back()}
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-purple-700"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Faculty
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Left Column - Contact & Quick Info */}
            <div className="space-y-6">
              {/* Contact Information */}
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-purple-700">
                    <Users className="h-5 w-5 mr-2" />
                    Contact Information
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-center">
                    <Mail className="h-4 w-4 mr-3 text-blue-500" />
                    <a href={`mailto:${faculty.email}`} className="text-sm text-gray-600 hover:text-blue-600">
                      {faculty.email}
                    </a>
                  </div>
                  <div className="flex items-center">
                    <Phone className="h-4 w-4 mr-3 text-green-500" />
                    <a href={`tel:${faculty.phone}`} className="text-sm text-gray-600 hover:text-green-600">
                      {faculty.phone}
                    </a>
                  </div>
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-3 text-red-500" />
                    <span className="text-sm text-gray-600">{faculty.office}</span>
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-3 text-purple-500" />
                    <span className="text-sm text-gray-600">{faculty.officeHours}</span>
                  </div>
                </CardContent>
              </Card>

              {/* Research Areas */}
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-purple-700">
                    <BookOpen className="h-5 w-5 mr-2" />
                    Research Areas
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-2">
                    {faculty.researchAreas.map((area, index) => (
                      <Badge key={index} variant="outline" className="border-purple-200 text-purple-700">
                        {area}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Awards */}
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-purple-700">
                    <Award className="h-5 w-5 mr-2" />
                    Awards & Recognition
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {faculty.awards.map((award, index) => (
                      <div key={index} className="flex items-center">
                        <Star className="h-3 w-3 mr-2 text-yellow-500" />
                        <span className="text-sm text-gray-700">{award}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Right Column - Detailed Information */}
            <div className="lg:col-span-2 space-y-6">
              {/* Biography */}
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-purple-700">Biography</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 leading-relaxed">{faculty.biography}</p>
                </CardContent>
              </Card>

              {/* Qualifications */}
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-purple-700">
                    <GraduationCap className="h-5 w-5 mr-2" />
                    Educational Qualifications
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {faculty.qualifications.map((qual, index) => (
                      <div key={index} className="flex items-center p-3 bg-purple-50 rounded-lg">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-3"></div>
                        <span className="text-gray-700">{qual}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Publications */}
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center justify-between text-purple-700">
                    <div className="flex items-center">
                      <BookOpen className="h-5 w-5 mr-2" />
                      Recent Publications
                    </div>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => window.open(faculty.socialLinks.googleScholar, "_blank")}
                    >
                      <ExternalLink className="h-4 w-4 mr-2" />
                      View All
                    </Button>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {faculty.publications.map((pub, index) => (
                      <div key={index} className="border-l-4 border-purple-200 pl-4">
                        <h4 className="font-semibold text-gray-800 mb-1">{pub.title}</h4>
                        <p className="text-sm text-gray-600 mb-1">
                          {pub.journal} ({pub.year})
                        </p>
                        <p className="text-xs text-gray-500">Citations: {pub.citations}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Current Projects */}
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-purple-700">
                    <Calendar className="h-5 w-5 mr-2" />
                    Current Research Projects
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {faculty.projects.map((project, index) => (
                      <div key={index} className="p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg">
                        <h4 className="font-semibold text-gray-800 mb-2">{project.title}</h4>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 text-sm text-gray-600">
                          <div>Funding: {project.funding}</div>
                          <div>Duration: {project.duration}</div>
                          <div>Agency: {project.agency}</div>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Courses Teaching */}
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="flex items-center text-purple-700">
                    <BookOpen className="h-5 w-5 mr-2" />
                    Courses Teaching
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {faculty.courses.map((course, index) => (
                      <div key={index} className="p-3 bg-white border border-purple-100 rounded-lg shadow-sm">
                        <span className="text-gray-700 font-medium">{course}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      <EnhancedChatbot />
    </div>
  )
}
