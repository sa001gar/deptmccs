"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import {
  Target,
  Eye,
  Trophy,
  Users,
  Award,
  BookOpen,
  Lightbulb,
  Globe,
  TrendingUp,
  Heart,
  Shield,
  Zap,
  Star,
  Building,
  GraduationCap,
  Briefcase,
  Database,
  Microscope,
  Monitor,
  Settings,
} from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import EnhancedChatbot from "@/components/enhanced-chatbot"
import RadialOrbitalTimeline from "@/components/ui/radial-orbital-timeline"
import { SplashCursor } from "@/components/ui/splash-cursor"

export default function AboutPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const milestones = [
    { year: "2009", event: "Department established with first batch of 30 students", icon: Building },
    { year: "2012", event: "First graduation ceremony with 100% placement rate", icon: GraduationCap },
    { year: "2015", event: "Research lab inaugurated with modern computing facilities", icon: Lightbulb },
    { year: "2018", event: "Achieved autonomous status and introduced new curriculum", icon: Award },
    { year: "2020", event: "Successfully transitioned to online learning during pandemic", icon: Globe },
    { year: "2023", event: "Celebrated 15 years of excellence with 500+ alumni", icon: Trophy },
  ]

  const timelineData = [
    {
      id: 1,
      title: "Foundation",
      date: "2009",
      content:
        "Department established with vision to create technology leaders and foster innovation in computer science education",
      category: "Establishment",
      icon: Building,
      relatedIds: [2],
      status: "completed" as const,
      energy: 100,
    },
    {
      id: 2,
      title: "First Batch",
      date: "2009-2012",
      content:
        "30 pioneering students began their transformative journey in computer science, setting the foundation for excellence",
      category: "Education",
      icon: GraduationCap,
      relatedIds: [1, 3],
      status: "completed" as const,
      energy: 95,
    },
    {
      id: 3,
      title: "100% Placement",
      date: "2012",
      content:
        "Achieved remarkable milestone with complete placement success, establishing our reputation in the industry",
      category: "Achievement",
      icon: Trophy,
      relatedIds: [2, 4],
      status: "completed" as const,
      energy: 90,
    },
    {
      id: 4,
      title: "Research Lab",
      date: "2015",
      content: "State-of-the-art research facility inaugurated for innovation in AI, ML, and emerging technologies",
      category: "Infrastructure",
      icon: Lightbulb,
      relatedIds: [3, 5],
      status: "completed" as const,
      energy: 85,
    },
    {
      id: 5,
      title: "Autonomous Status",
      date: "2018",
      content: "Gained autonomy and introduced cutting-edge curriculum aligned with industry 4.0 requirements",
      category: "Recognition",
      icon: Award,
      relatedIds: [4, 6],
      status: "completed" as const,
      energy: 80,
    },
    {
      id: 6,
      title: "Digital Transformation",
      date: "2020",
      content: "Successfully adapted to online learning during global pandemic, ensuring uninterrupted education",
      category: "Innovation",
      icon: Globe,
      relatedIds: [5, 7],
      status: "completed" as const,
      energy: 75,
    },
    {
      id: 7,
      title: "15 Years Excellence",
      date: "2023",
      content: "Celebrated milestone with 500+ successful alumni worldwide, continuing our legacy of excellence",
      category: "Legacy",
      icon: Users,
      relatedIds: [6, 8],
      status: "completed" as const,
      energy: 100,
    },
    {
      id: 8,
      title: "Future Vision",
      date: "2024-2030",
      content: "Expanding into emerging technologies like Quantum Computing, Blockchain, and Advanced AI research",
      category: "Future",
      icon: Zap,
      relatedIds: [7],
      status: "in-progress" as const,
      energy: 60,
    },
  ]

  const values = [
    {
      icon: Lightbulb,
      title: "Innovation",
      description: "Fostering creativity and cutting-edge research in computer science",
      color: "from-yellow-400 to-orange-500",
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Building strong partnerships between students, faculty, and industry",
      color: "from-blue-400 to-purple-500",
    },
    {
      icon: Shield,
      title: "Integrity",
      description: "Maintaining highest ethical standards in education and research",
      color: "from-green-400 to-blue-500",
    },
    {
      icon: TrendingUp,
      title: "Excellence",
      description: "Striving for continuous improvement and academic distinction",
      color: "from-purple-400 to-pink-500",
    },
    {
      icon: Heart,
      title: "Inclusivity",
      description: "Creating an environment where everyone can thrive and succeed",
      color: "from-pink-400 to-red-500",
    },
    {
      icon: Zap,
      title: "Agility",
      description: "Adapting quickly to technological changes and industry demands",
      color: "from-cyan-400 to-blue-500",
    },
  ]

  const achievements = [
    {
      icon: Award,
      title: "Academic Excellence",
      stats: "95%",
      description: "Student Success Rate",
      details: "Consistently high academic performance across all semesters",
    },
    {
      icon: Briefcase,
      title: "Industry Placements",
      stats: "500+",
      description: "Alumni Placed",
      details: "Working in top tech companies worldwide",
    },
    {
      icon: BookOpen,
      title: "Research Papers",
      stats: "150+",
      description: "Publications",
      details: "Faculty and student research contributions",
    },
    {
      icon: Trophy,
      title: "Awards Won",
      stats: "75+",
      description: "Competitions",
      details: "National and international coding competitions",
    },
  ]

  const leadership = [
    {
      name: "Dr. Rajesh Kumar",
      position: "Head of Department",
      image: "/placeholder.svg?height=150&width=150",
      experience: "15+ years",
      specialization: "Artificial Intelligence & Machine Learning",
      profileId: "1",
    },
    {
      name: "Dr. Priya Sharma",
      position: "Associate Professor",
      image: "/placeholder.svg?height=150&width=150",
      experience: "12+ years",
      specialization: "Database Systems & Big Data",
      profileId: "2",
    },
    {
      name: "Prof. Amit Patel",
      position: "Assistant Professor",
      image: "/placeholder.svg?height=150&width=150",
      experience: "8+ years",
      specialization: "Software Engineering & DevOps",
      profileId: "3",
    },
  ]

  const facilities = [
    {
      title: "Computer Labs",
      description: "5 state-of-the-art computer labs with 200+ high-performance systems",
      icon: Monitor,
      features: ["Latest hardware configurations", "Licensed software", "24/7 access for students"],
    },
    {
      title: "Research Center",
      description: "Dedicated research facility for AI, ML, and emerging technologies",
      icon: Microscope,
      features: ["High-performance computing cluster", "Specialized research tools", "Industry collaboration space"],
    },
    {
      title: "Digital Library",
      description: "Comprehensive collection of books, journals, and digital resources",
      icon: Database,
      features: ["10,000+ technical books", "Online journal access", "Digital learning platforms"],
    },
    {
      title: "Innovation Hub",
      description: "Collaborative space for startups and entrepreneurship",
      icon: Lightbulb,
      features: ["Incubation facilities", "Mentorship programs", "Industry networking events"],
    },
    {
      title: "Seminar Complex",
      description: "Modern auditoriums for conferences and presentations",
      icon: Users,
      features: ["300-seat main auditorium", "Smart classroom technology", "Video conferencing facilities"],
    },
    {
      title: "Project Labs",
      description: "Dedicated spaces for final year projects and group work",
      icon: Settings,
      features: ["Collaborative workspaces", "Prototyping equipment", "24/7 project access"],
    },
  ]

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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About Our Department</h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Discover our journey, vision, and commitment to excellence in computer science education and research
            </p>
          </motion.div>
        </div>
      </section>

      {/* Introduction */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-16 bg-white/80 backdrop-blur-sm"
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              Shaping Tomorrow's Technology Leaders
            </h2>
            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              The Department of Computer Science at Mankar College stands as a beacon of excellence in technological
              education. Since our establishment in 2009, we have been committed to nurturing innovative minds,
              fostering cutting-edge research, and preparing students for the dynamic world of technology.
            </p>
            <p className="text-lg text-gray-700 leading-relaxed">
              Our comprehensive programs blend theoretical foundations with practical applications, ensuring our
              graduates are well-equipped to tackle real-world challenges and drive technological advancement in their
              chosen fields.
            </p>
          </div>
        </div>
      </motion.section>

      {/* Vision & Mission */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-16 bg-gradient-to-b from-purple-800 to-purple-900"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Vision & Mission</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-white/90 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mr-4">
                      <Eye className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">Our Vision</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    To be a globally recognized center of excellence in computer science education and research,
                    producing innovative leaders who will shape the future of technology and contribute meaningfully to
                    society's digital transformation.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              viewport={{ once: true }}
            >
              <Card className="h-full bg-white/90 backdrop-blur-sm border-0 shadow-xl hover:shadow-2xl transition-all duration-300">
                <CardContent className="p-8">
                  <div className="flex items-center mb-6">
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center mr-4">
                      <Target className="h-6 w-6 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">Our Mission</h3>
                  </div>
                  <p className="text-gray-700 leading-relaxed">
                    To provide world-class computer science education that combines rigorous academic training with
                    practical experience, foster innovative research, and develop ethical technology professionals who
                    can address complex global challenges.
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Core Values */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-16 bg-white/80 backdrop-blur-sm"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card className="h-full bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <div
                      className={`w-16 h-16 mx-auto mb-4 bg-gradient-to-r ${value.color} rounded-full flex items-center justify-center`}
                    >
                      <value.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3 text-gray-800">{value.title}</h3>
                    <p className="text-gray-600 leading-relaxed">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Achievements */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-16 bg-gradient-to-b from-purple-800 to-purple-900"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">Our Achievements</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card className="h-full bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6 text-center text-white">
                    <achievement.icon className="h-12 w-12 mx-auto mb-4 text-purple-300" />
                    <div className="text-4xl font-bold mb-2">{achievement.stats}</div>
                    <h3 className="text-lg font-semibold mb-2">{achievement.title}</h3>
                    <p className="text-purple-200 text-sm mb-3">{achievement.description}</p>
                    <p className="text-xs text-purple-300">{achievement.details}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Leadership Team */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-16 bg-white/80 backdrop-blur-sm"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Leadership Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {leadership.map((leader, index) => (
              <motion.div
                key={leader.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="cursor-pointer"
                onClick={() => (window.location.href = `/faculty/${leader.profileId}`)}
              >
                <Card className="h-full bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <img
                      src={leader.image || "/placeholder.svg"}
                      alt={leader.name}
                      className="w-24 h-24 rounded-full mx-auto mb-4 border-4 border-purple-200"
                    />
                    <h3 className="text-xl font-bold text-gray-800 mb-1">{leader.name}</h3>
                    <p className="text-purple-600 font-medium mb-2">{leader.position}</p>
                    <p className="text-sm text-gray-600 mb-2">{leader.experience}</p>
                    <p className="text-xs text-gray-500">{leader.specialization}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Infrastructure */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-16 bg-gradient-to-b from-purple-800 to-purple-900"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 text-white">World-Class Infrastructure</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {facilities.map((facility, index) => (
              <motion.div
                key={facility.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
              >
                <Card className="h-full bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg hover:shadow-xl transition-all duration-300">
                  <CardContent className="p-6 text-white">
                    <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full flex items-center justify-center mb-4">
                      <facility.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold mb-3">{facility.title}</h3>
                    <p className="text-purple-200 mb-4 leading-relaxed">{facility.description}</p>
                    <ul className="space-y-2">
                      {facility.features.map((feature, i) => (
                        <li key={i} className="flex items-center text-sm text-purple-300">
                          <Star className="h-3 w-3 mr-2 text-yellow-400" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* History & Milestones */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-16 bg-white/80 backdrop-blur-sm"
      >
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
            Our Journey Through Time
          </h2>
          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-blue-500"></div>

              {milestones.map((milestone, index) => (
                <motion.div
                  key={milestone.year}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.6 }}
                  viewport={{ once: true }}
                  className="relative flex items-center mb-12"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-white font-bold mr-8 z-10 shadow-lg">
                    <milestone.icon className="h-6 w-6" />
                  </div>
                  <Card className="flex-1 bg-white/80 backdrop-blur-sm border-0 shadow-lg hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-center mb-3">
                        <span className="text-3xl font-bold text-purple-600 mr-4">{milestone.year}</span>
                      </div>
                      <p className="text-gray-700 leading-relaxed">{milestone.event}</p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </motion.section>

      

      {/* Call to Action */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-16 bg-gradient-to-r from-purple-600 via-purple-700 to-blue-800"
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Join Our Legacy of Excellence</h2>
          <p className="text-xl text-purple-200 mb-8 max-w-3xl mx-auto">
            Be part of a community that's shaping the future of technology. Discover opportunities for learning,
            research, and innovation at our department.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => (window.location.href = "/academics")}
              className="bg-white text-purple-700 px-8 py-3 rounded-lg font-semibold hover:bg-purple-50 transition-colors"
            >
              Explore Programs
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => (window.location.href = "/feedback")}
              className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-purple-700 transition-colors"
            >
              Contact Us
            </motion.button>
          </div>
        </div>
      </motion.section>

      <Footer />
      <EnhancedChatbot />
    </div>
  )
}
