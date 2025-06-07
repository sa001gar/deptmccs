"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import {
  Calendar,
  MapPin,
  Users,
  Trophy,
  BookOpen,
  Gamepad2,
  Music,
  FileText,
  Microscope,
  Heart,
  Download,
  Eye,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Chatbot from "@/components/chatbot"

export default function ActivitiesPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const upcomingEvents = [
    {
      id: 1,
      title: "Annual Tech Fest 2025",
      date: "2025-02-15",
      time: "09:00 AM",
      location: "Main Auditorium",
      participants: "500+",
      category: "technical",
      description: "A grand celebration of technology with competitions, exhibitions, and guest lectures.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      title: "Coding Marathon",
      date: "2025-01-20",
      time: "10:00 AM",
      location: "Computer Lab",
      participants: "100+",
      category: "technical",
      description: "24-hour coding challenge to solve real-world problems.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      title: "Cultural Night",
      date: "2025-01-25",
      time: "06:00 PM",
      location: "Open Ground",
      participants: "300+",
      category: "cultural",
      description: "An evening of music, dance, and cultural performances.",
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 4,
      title: "Sports Tournament",
      date: "2025-02-01",
      time: "08:00 AM",
      location: "Sports Complex",
      participants: "200+",
      category: "sports",
      description: "Inter-departmental sports competition across various games.",
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const pastEvents = [
    {
      id: 1,
      title: "Fresher's Welcome 2024",
      date: "2024-12-15",
      participants: "150+",
      category: "cultural",
      description: "Welcome ceremony for new students with cultural programs.",
      achievements: ["Best Performance Award", "Cultural Excellence"],
    },
    {
      id: 2,
      title: "Hackathon 2024",
      date: "2024-11-20",
      participants: "80+",
      category: "technical",
      description: "48-hour hackathon with innovative project developments.",
      achievements: ["1st Prize - Smart City Solution", "2nd Prize - Healthcare App"],
    },
    {
      id: 3,
      title: "Annual Sports Day",
      date: "2024-10-10",
      participants: "250+",
      category: "sports",
      description: "Department-wide sports competition and fitness activities.",
      achievements: ["Overall Champions", "Best Team Spirit"],
    },
  ]

  const clubs = [
    {
      name: "Coding Club",
      icon: BookOpen,
      members: "120+",
      description: "Learn programming, participate in competitions, and build amazing projects.",
      activities: ["Weekly coding sessions", "Competitive programming", "Project mentorship"],
      color: "from-blue-500 to-purple-600",
    },
    {
      name: "Tech Innovation Club",
      icon: Trophy,
      members: "85+",
      description: "Explore emerging technologies and work on innovative solutions.",
      activities: ["Tech workshops", "Innovation challenges", "Industry visits"],
      color: "from-purple-500 to-pink-600",
    },
    {
      name: "Cultural Club",
      icon: Music,
      members: "95+",
      description: "Showcase your artistic talents and organize cultural events.",
      activities: ["Cultural festivals", "Talent shows", "Art exhibitions"],
      color: "from-pink-500 to-red-600",
    },
    {
      name: "Sports Club",
      icon: Gamepad2,
      members: "110+",
      description: "Stay fit, play games, and represent the department in competitions.",
      activities: ["Daily sports", "Tournaments", "Fitness training"],
      color: "from-green-500 to-blue-600",
    },
  ]

  const researchWorks = [
    {
      id: 1,
      title: "AI-Powered Medical Diagnosis System",
      researcher: "Dr. Rajesh Kumar & Team",
      description: "Development of machine learning algorithms for early disease detection using medical imaging.",
      status: "Ongoing",
      funding: "₹25 Lakhs",
      duration: "2022-2024",
      publications: 3,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      title: "Smart City Traffic Management",
      researcher: "Dr. Sneha Gupta & Students",
      description: "IoT-based intelligent traffic control system for urban areas using real-time data analytics.",
      status: "Completed",
      funding: "₹18 Lakhs",
      duration: "2021-2023",
      publications: 5,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      title: "Blockchain for Supply Chain",
      researcher: "Prof. Amit Patel & Team",
      description: "Implementing blockchain technology for transparent and secure supply chain management.",
      status: "Ongoing",
      funding: "₹20 Lakhs",
      duration: "2023-2025",
      publications: 2,
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const socialProjects = [
    {
      id: 1,
      title: "Digital Literacy for Rural Communities",
      description: "Teaching basic computer skills and digital literacy to rural populations.",
      beneficiaries: "500+ People",
      location: "15 Villages in West Bengal",
      duration: "2023-Ongoing",
      volunteers: 25,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 2,
      title: "E-Waste Management Initiative",
      description: "Collecting and properly disposing of electronic waste while raising awareness.",
      beneficiaries: "Local Community",
      location: "Mankar & Surrounding Areas",
      duration: "2022-Ongoing",
      volunteers: 40,
      image: "/placeholder.svg?height=200&width=300",
    },
    {
      id: 3,
      title: "Free Coding Bootcamp for Underprivileged",
      description: "Providing free programming education to economically disadvantaged students.",
      beneficiaries: "100+ Students",
      location: "Community Centers",
      duration: "2023-2024",
      volunteers: 15,
      image: "/placeholder.svg?height=200&width=300",
    },
  ]

  const magazines = [
    {
      id: 1,
      title: "TechVision 2024",
      description: "Annual magazine featuring student articles, research highlights, and department achievements.",
      year: "2024",
      pages: 120,
      articles: 45,
      coverImage: "/placeholder.svg?height=300&width=200",
      pdfUrl: "/placeholder.svg?height=800&width=600",
    },
    {
      id: 2,
      title: "Innovation Chronicles 2023",
      description: "Special edition focusing on innovative projects and startup initiatives by students.",
      year: "2023",
      pages: 95,
      articles: 38,
      coverImage: "/placeholder.svg?height=300&width=200",
      pdfUrl: "/placeholder.svg?height=800&width=600",
    },
    {
      id: 3,
      title: "Code & Create 2022",
      description: "Compilation of coding competitions, hackathon winners, and creative projects.",
      year: "2022",
      pages: 85,
      articles: 32,
      coverImage: "/placeholder.svg?height=300&width=200",
      pdfUrl: "/placeholder.svg?height=800&width=600",
    },
  ]

  const getCategoryIcon = (category) => {
    switch (category) {
      case "technical":
        return BookOpen
      case "cultural":
        return Music
      case "sports":
        return Gamepad2
      default:
        return Calendar
    }
  }

  const getCategoryColor = (category) => {
    switch (category) {
      case "technical":
        return "from-blue-500 to-purple-600"
      case "cultural":
        return "from-purple-500 to-pink-600"
      case "sports":
        return "from-green-500 to-blue-600"
      default:
        return "from-gray-500 to-gray-600"
    }
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Activities & Events</h1>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">
              Discover the vibrant campus life with exciting events, competitions, and club activities
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <Tabs defaultValue="upcoming" className="w-full">
            <TabsList className="grid w-full grid-cols-6 mb-8 bg-white/80 backdrop-blur-sm">
              <TabsTrigger
                value="upcoming"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-blue-600 data-[state=active]:text-white"
              >
                Upcoming Events
              </TabsTrigger>
              <TabsTrigger
                value="past"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-blue-600 data-[state=active]:text-white"
              >
                Past Events
              </TabsTrigger>
              <TabsTrigger
                value="clubs"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-blue-600 data-[state=active]:text-white"
              >
                Clubs
              </TabsTrigger>
              <TabsTrigger
                value="research"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-blue-600 data-[state=active]:text-white"
              >
                Research
              </TabsTrigger>
              <TabsTrigger
                value="magazines"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-blue-600 data-[state=active]:text-white"
              >
                Magazines
              </TabsTrigger>
              <TabsTrigger
                value="social"
                className="data-[state=active]:bg-gradient-to-r data-[state=active]:from-purple-600 data-[state=active]:to-blue-600 data-[state=active]:text-white"
              >
                Social Projects
              </TabsTrigger>
            </TabsList>

            {/* Upcoming Events */}
            <TabsContent value="upcoming">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {upcomingEvents.map((event, index) => {
                    const IconComponent = getCategoryIcon(event.category)
                    return (
                      <motion.div
                        key={event.id}
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.6 }}
                        whileHover={{ y: -5 }}
                      >
                        <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm overflow-hidden">
                          <div className="relative">
                            <img
                              src={event.image || "/placeholder.svg"}
                              alt={event.title}
                              className="w-full h-48 object-cover"
                            />
                            <div
                              className={`absolute top-4 left-4 bg-gradient-to-r ${getCategoryColor(event.category)} text-white px-3 py-1 rounded-full text-sm font-medium flex items-center`}
                            >
                              <IconComponent className="h-3 w-3 mr-1" />
                              {event.category}
                            </div>
                          </div>
                          <CardContent className="p-6">
                            <h3 className="text-xl font-bold text-gray-800 mb-3">{event.title}</h3>
                            <p className="text-gray-600 mb-4">{event.description}</p>

                            <div className="space-y-2 mb-4">
                              <div className="flex items-center text-sm text-gray-600">
                                <Calendar className="h-4 w-4 mr-2 text-purple-500" />
                                {new Date(event.date).toLocaleDateString()} at {event.time}
                              </div>
                              <div className="flex items-center text-sm text-gray-600">
                                <MapPin className="h-4 w-4 mr-2 text-purple-500" />
                                {event.location}
                              </div>
                              <div className="flex items-center text-sm text-gray-600">
                                <Users className="h-4 w-4 mr-2 text-purple-500" />
                                {event.participants} Expected
                              </div>
                            </div>

                            <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                              Register Now
                            </Button>
                          </CardContent>
                        </Card>
                      </motion.div>
                    )
                  })}
                </div>
              </motion.div>
            </TabsContent>

            {/* Past Events */}
            <TabsContent value="past">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <div className="space-y-6">
                  {pastEvents.map((event, index) => {
                    const IconComponent = getCategoryIcon(event.category)
                    return (
                      <motion.div
                        key={event.id}
                        initial={{ opacity: 0, x: -30 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1, duration: 0.6 }}
                      >
                        <Card className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
                          <CardContent className="p-6">
                            <div className="flex flex-col md:flex-row gap-6">
                              <div className="flex-1">
                                <div className="flex items-center mb-3">
                                  <div
                                    className={`w-10 h-10 bg-gradient-to-r ${getCategoryColor(event.category)} rounded-full flex items-center justify-center mr-3`}
                                  >
                                    <IconComponent className="h-5 w-5 text-white" />
                                  </div>
                                  <div>
                                    <h3 className="text-xl font-bold text-gray-800">{event.title}</h3>
                                    <p className="text-sm text-gray-500">{new Date(event.date).toLocaleDateString()}</p>
                                  </div>
                                </div>
                                <p className="text-gray-600 mb-4">{event.description}</p>
                                <div className="flex items-center text-sm text-gray-600 mb-4">
                                  <Users className="h-4 w-4 mr-2 text-purple-500" />
                                  {event.participants} Participants
                                </div>
                              </div>
                              <div className="md:w-1/3">
                                <h4 className="font-semibold text-gray-800 mb-2">Achievements</h4>
                                <div className="space-y-2">
                                  {event.achievements.map((achievement, i) => (
                                    <div key={i} className="flex items-center text-sm">
                                      <Trophy className="h-3 w-3 mr-2 text-yellow-500" />
                                      <span className="text-gray-600">{achievement}</span>
                                    </div>
                                  ))}
                                </div>
                              </div>
                            </div>
                          </CardContent>
                        </Card>
                      </motion.div>
                    )
                  })}
                </div>
              </motion.div>
            </TabsContent>

            {/* Clubs & Societies */}
            <TabsContent value="clubs">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {clubs.map((club, index) => (
                    <motion.div
                      key={club.name}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      whileHover={{ y: -5 }}
                    >
                      <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm">
                        <CardHeader>
                          <div className="flex items-center justify-between">
                            <div
                              className={`w-12 h-12 bg-gradient-to-r ${club.color} rounded-xl flex items-center justify-center`}
                            >
                              <club.icon className="h-6 w-6 text-white" />
                            </div>
                            <span className="text-sm bg-purple-100 text-purple-600 px-3 py-1 rounded-full">
                              {club.members} Members
                            </span>
                          </div>
                          <CardTitle className="text-xl text-gray-800">{club.name}</CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-gray-600 mb-4">{club.description}</p>
                          <div>
                            <h4 className="font-semibold text-gray-800 mb-2">Activities</h4>
                            <ul className="space-y-1">
                              {club.activities.map((activity, i) => (
                                <li key={i} className="flex items-center text-sm text-gray-600">
                                  <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mr-2"></div>
                                  {activity}
                                </li>
                              ))}
                            </ul>
                          </div>
                          <Button className={`w-full mt-4 bg-gradient-to-r ${club.color} hover:opacity-90`}>
                            Join Club
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </TabsContent>

            {/* Research Works */}
            <TabsContent value="research">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                  {researchWorks.map((research, index) => (
                    <motion.div
                      key={research.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      whileHover={{ y: -5 }}
                    >
                      <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm overflow-hidden">
                        <div className="relative">
                          <img
                            src={research.image || "/placeholder.svg"}
                            alt={research.title}
                            className="w-full h-48 object-cover"
                          />
                          <div
                            className={`absolute top-4 left-4 px-3 py-1 rounded-full text-sm font-medium text-white ${
                              research.status === "Ongoing" ? "bg-blue-500" : "bg-green-500"
                            }`}
                          >
                            {research.status}
                          </div>
                        </div>
                        <CardContent className="p-6">
                          <h3 className="text-xl font-bold text-gray-800 mb-2">{research.title}</h3>
                          <p className="text-purple-600 font-medium mb-3">{research.researcher}</p>
                          <p className="text-gray-600 mb-4 text-sm">{research.description}</p>

                          <div className="space-y-2 mb-4">
                            <div className="flex items-center text-sm text-gray-600">
                              <Microscope className="h-4 w-4 mr-2 text-purple-500" />
                              Funding: {research.funding}
                            </div>
                            <div className="flex items-center text-sm text-gray-600">
                              <Calendar className="h-4 w-4 mr-2 text-purple-500" />
                              Duration: {research.duration}
                            </div>
                            <div className="flex items-center text-sm text-gray-600">
                              <FileText className="h-4 w-4 mr-2 text-purple-500" />
                              Publications: {research.publications}
                            </div>
                          </div>

                          <Button className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                            View Details
                          </Button>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </TabsContent>

            {/* Annual Magazines */}
            <TabsContent value="magazines">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
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
                          <p className="text-gray-600 mb-4 text-sm">{magazine.description}</p>

                          <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
                            <div className="text-center p-2 bg-purple-50 rounded">
                              <div className="font-bold text-purple-600">{magazine.pages}</div>
                              <div className="text-gray-600">Pages</div>
                            </div>
                            <div className="text-center p-2 bg-blue-50 rounded">
                              <div className="font-bold text-blue-600">{magazine.articles}</div>
                              <div className="text-gray-600">Articles</div>
                            </div>
                          </div>

                          <div className="flex gap-2">
                            <Button className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700">
                              <Eye className="h-4 w-4 mr-2" />
                              Preview
                            </Button>
                            <Button variant="outline" className="border-purple-200 text-purple-600 hover:bg-purple-50">
                              <Download className="h-4 w-4" />
                            </Button>
                          </div>
                        </CardContent>
                      </Card>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </TabsContent>

            {/* Social Projects */}
            <TabsContent value="social">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {socialProjects.map((project, index) => (
                    <motion.div
                      key={project.id}
                      initial={{ opacity: 0, y: 30 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.1, duration: 0.6 }}
                      whileHover={{ y: -5 }}
                    >
                      <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white/80 backdrop-blur-sm overflow-hidden">
                        <div className="relative">
                          <img
                            src={project.image || "/placeholder.svg"}
                            alt={project.title}
                            className="w-full h-48 object-cover"
                          />
                          <div className="absolute top-4 left-4 bg-green-600 text-white px-3 py-1 rounded-full text-sm font-medium flex items-center">
                            <Heart className="h-3 w-3 mr-1" />
                            Social Impact
                          </div>
                        </div>
                        <CardContent className="p-6">
                          <h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3>
                          <p className="text-gray-600 mb-4">{project.description}</p>

                          <div className="space-y-2 mb-4">
                            <div className="flex items-center text-sm text-gray-600">
                              <Users className="h-4 w-4 mr-2 text-green-500" />
                              Beneficiaries: {project.beneficiaries}
                            </div>
                            <div className="flex items-center text-sm text-gray-600">
                              <MapPin className="h-4 w-4 mr-2 text-green-500" />
                              Location: {project.location}
                            </div>
                            <div className="flex items-center text-sm text-gray-600">
                              <Calendar className="h-4 w-4 mr-2 text-green-500" />
                              Duration: {project.duration}
                            </div>
                            <div className="flex items-center text-sm text-gray-600">
                              <Heart className="h-4 w-4 mr-2 text-green-500" />
                              Volunteers: {project.volunteers}
                            </div>
                          </div>

                          <Button className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700">
                            Join Project
                          </Button>
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
