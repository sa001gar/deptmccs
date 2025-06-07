"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  ChevronRight,
  Award,
  ArrowUp,
  Sparkles,
  TrendingUp,
  Users,
  BookOpen,
  Code,
  Globe,
  Database,
  Cloud,
  Smartphone,
  Bot,
  Building,
  School,
  Rocket,
  GraduationCap,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import Chatbot from "@/components/chatbot"
import Loader from "@/components/loader"
import HeroSection from "@/components/hero-section"
import { TestimonialsColumn } from "@/components/ui/testimonials-columns-1"
import AlumniScroll from "@/components/alumni-scroll"

export default function HomePage() {
  const [isLoading, setIsLoading] = useState(true)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
    const timer = setTimeout(() => setIsLoading(false), 2000)

    const handleScroll = () => {
      if (typeof window !== "undefined") {
        setShowScrollTop(window.scrollY > 300)
      }
    }

    if (typeof window !== "undefined") {
      window.addEventListener("scroll", handleScroll)
    }

    return () => {
      clearTimeout(timer)
      if (typeof window !== "undefined") {
        window.removeEventListener("scroll", handleScroll)
      }
    }
  }, [])

  const techEcosystem = [
    { name: "Programming", icon: Code, color: "from-purple-400 to-purple-600" },
    { name: "Web Development", icon: Globe, color: "from-pink-400 to-pink-600" },
    { name: "Data Science", icon: Database, color: "from-indigo-400 to-indigo-600" },
    { name: "Cloud Computing", icon: Cloud, color: "from-cyan-400 to-cyan-600" },
    { name: "Mobile Apps", icon: Smartphone, color: "from-violet-400 to-violet-600" },
    { name: "AI/ML", icon: Bot, color: "from-fuchsia-400 to-fuchsia-600" },
  ]

  const achievements = [
    { title: "Academic Excellence", count: "95%", description: "Pass Rate", icon: BookOpen },
    { title: "Coding Competitions", count: "50+", description: "Awards Won", icon: Award },
    { title: "Research Papers", count: "25+", description: "Published", icon: TrendingUp },
  ]

  const workingStats = [
    { count: "94+", title: "Corporate Leaders", description: "Working in top tech companies", icon: Building },
    { count: "70+", title: "Government Services", description: "Serving in public sector", icon: School },
    { count: "35+", title: "Startups & Entrepreneurs", description: "Building their own ventures", icon: Rocket },
    { count: "47+", title: "Higher Education", description: "Pursuing advanced degrees", icon: GraduationCap },
  ]

  // Testimonials data
  const testimonials = [
    {
      text: "The CS department at Mankar College provided me with excellent theoretical knowledge and practical skills. The faculty is supportive and always encourages innovation.",
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      name: "Priya Sharma",
      role: "Software Engineer at Google",
    },
    {
      text: "The education I received here prepared me well for my career in software development. Currently working at a top tech company, thanks to the strong foundation built here.",
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      name: "Amit Patel",
      role: "Full Stack Developer",
    },
    {
      text: "Teaching at this department has been incredibly rewarding. The collaborative environment and research opportunities make it an ideal place for academic growth.",
      image: "https://randomuser.me/api/portraits/women/3.jpg",
      name: "Dr. Sneha Gupta",
      role: "Assistant Professor",
    },
    {
      text: "The department's focus on practical learning and industry exposure helped me secure a position at Microsoft. Forever grateful for the guidance received.",
      image: "https://randomuser.me/api/portraits/men/4.jpg",
      name: "Rahul Kumar",
      role: "Cloud Engineer at Microsoft",
    },
    {
      text: "The research opportunities and mentorship I received here shaped my career in AI/ML. Now pursuing PhD at IIT Delhi.",
      image: "https://randomuser.me/api/portraits/women/5.jpg",
      name: "Ananya Singh",
      role: "PhD Scholar at IIT Delhi",
    },
    {
      text: "The department's emphasis on innovation and entrepreneurship inspired me to start my own tech company. The journey has been incredible.",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
      name: "Kavya Reddy",
      role: "Tech Entrepreneur",
    },
    {
      text: "The comprehensive curriculum and hands-on projects prepared me for the challenges in the cybersecurity field. Highly recommend this program.",
      image: "https://randomuser.me/api/portraits/men/7.jpg",
      name: "Arjun Mehta",
      role: "Cybersecurity Analyst",
    },
    {
      text: "The faculty's dedication and the department's modern infrastructure created an excellent learning environment. Best decision of my academic career.",
      image: "https://randomuser.me/api/portraits/women/8.jpg",
      name: "Riya Joshi",
      role: "Data Scientist at Amazon",
    },
    {
      text: "The department's industry connections and placement support helped me land my dream job. The practical approach to learning is commendable.",
      image: "https://randomuser.me/api/portraits/men/9.jpg",
      name: "Vikash Yadav",
      role: "DevOps Engineer",
    },
  ]

  const firstColumn = testimonials.slice(0, 3)
  const secondColumn = testimonials.slice(3, 6)
  const thirdColumn = testimonials.slice(6, 9)

  // Don't render anything until mounted to avoid hydration issues
  if (!isMounted) {
    return null
  }

  if (isLoading) {
    return <Loader />
  }

  const handleScrollToTop = () => {
    if (typeof window !== "undefined") {
      window.scrollTo({ top: 0, behavior: "smooth" })
    }
  }

  return (
    <div className="min-h-screen bg-purple-800">
      <Navbar />

      {/* Hero Section */}
      <HeroSection />

      {/* About Our Department */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-16 bg-white"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-full mb-6"
            >
              <Users className="h-4 w-4 text-purple-600" />
              <span className="text-purple-600 text-sm font-medium">About Our Department</span>
            </motion.div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">
              Excellence in Computer Science Education and Research
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Pioneering the future of technology through innovative education and cutting-edge research
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 gap-4"
            >
              {[1, 2, 3, 4].map((i) => (
                <div key={i} className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-lg blur-lg group-hover:blur-xl transition-all duration-300"></div>
                  <img
                    src={`/placeholder.svg?height=200&width=300`}
                    alt={`Department Image ${i}`}
                    className="relative rounded-lg shadow-lg border border-gray-200 group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h3 className="text-3xl font-bold text-purple-700 mb-6">Pioneering Computer Science</h3>
              <div className="space-y-4 text-gray-700 leading-relaxed">
                <p>
                  The Department of Computer Science at Mankar College has been at the forefront of technology education
                  since 2009. Our commitment to excellence in teaching, research, and innovation has made us one of the
                  premier computer science departments in the region.
                </p>
                <p>
                  We offer comprehensive programs that blend theoretical knowledge with practical skills, preparing our
                  students for successful careers in the rapidly evolving field of computing sciences.
                </p>
                <p>
                  Our state-of-the-art facilities, experienced faculty, and industry partnerships ensure that our
                  graduates are well-equipped to meet the challenges of the digital age.
                </p>
              </div>
              <Button className="mt-6 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white border-0">
                Learn More About Us
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Alumni Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-16 bg-gradient-to-b from-purple-900 to-purple-800"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 mb-6"
            >
              <Award className="h-4 w-4 text-purple-300" />
              <span className="text-purple-200 text-sm font-medium">Our Alumni</span>
            </motion.div>
            <h2 className="text-4xl font-bold text-white mb-4">Success Stories</h2>
            <p className="text-purple-200 text-lg max-w-2xl mx-auto">
              Meet our accomplished alumni who are making their mark in the tech industry
            </p>
          </div>

          <AlumniScroll />
        </div>
      </motion.section>

      {/* Our Technology Ecosystem */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-16 bg-gray-50"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-full mb-6"
            >
              <Sparkles className="h-4 w-4 text-purple-600" />
              <span className="text-purple-600 text-sm font-medium">Technology Ecosystem</span>
            </motion.div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Our Technology Ecosystem</h2>
            <p className="text-gray-600 text-lg">Explore the cutting-edge technologies we teach and research</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {techEcosystem.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center group"
              >
                <div className="relative">
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-2xl blur-lg group-hover:blur-xl transition-all duration-300"></div>
                  <div
                    className={`relative w-20 h-20 mx-auto mb-4 bg-gradient-to-br ${tech.color} rounded-2xl flex items-center justify-center shadow-lg border border-white/20 group-hover:shadow-xl transition-all duration-300`}
                  >
                    <tech.icon className="h-8 w-8 text-white" />
                  </div>
                </div>
                <h3 className="font-semibold text-sm text-gray-800 group-hover:text-purple-600 transition-colors">
                  {tech.name}
                </h3>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Student Achievements */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-16 bg-white"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-purple-100 px-4 py-2 rounded-full mb-6"
            >
              <TrendingUp className="h-4 w-4 text-purple-600" />
              <span className="text-purple-600 text-sm font-medium">Achievements</span>
            </motion.div>
            <h2 className="text-4xl font-bold text-gray-800 mb-4">Student Achievements</h2>
            <p className="text-gray-600">Celebrating our students' remarkable success</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="text-center border border-gray-100 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                  <CardContent className="p-8">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10 rounded-full blur-lg group-hover:blur-xl transition-all duration-300"></div>
                      <div className="relative w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center">
                        <achievement.icon className="h-8 w-8 text-white" />
                      </div>
                    </div>
                    <h3 className="text-3xl font-bold text-purple-600 mb-2">{achievement.count}</h3>
                    <h4 className="text-lg font-semibold text-gray-800 mb-2">{achievement.title}</h4>
                    <p className="text-gray-600 text-sm">{achievement.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Our Students Are Working At */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-16 bg-gradient-to-b from-purple-800 to-purple-900"
      >
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 mb-6"
            >
              <Users className="h-4 w-4 text-purple-300" />
              <span className="text-purple-200 text-sm font-medium">Career Paths</span>
            </motion.div>
            <h2 className="text-4xl font-bold text-white mb-4">Our Students Are Working At</h2>
            <p className="text-purple-200">Our alumni have established successful careers across various sectors</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {workingStats.map((stat, index) => (
              <motion.div
                key={stat.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                className="group"
              >
                <Card className="text-center border-0 shadow-lg hover:shadow-xl transition-all duration-300 h-full bg-white/10 backdrop-blur-sm border border-white/20">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 mx-auto mb-4 bg-white/20 rounded-full flex items-center justify-center">
                      <stat.icon className="h-6 w-6 text-white" />
                    </div>
                    <div className="text-4xl font-bold text-white mb-2">{stat.count}</div>
                    <h3 className="text-lg font-semibold text-purple-200 mb-2">{stat.title}</h3>
                    <p className="text-purple-300 text-sm">{stat.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button className="bg-gradient-to-r from-purple-500 to-pink-500 hover:from-purple-600 hover:to-pink-600 text-white border-0">
              View More Alumni Stories
            </Button>
          </div>
        </div>
      </motion.section>

      {/* Testimonials Section */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-16 bg-gradient-to-b from-purple-900 to-purple-800 relative overflow-hidden"
      >
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center max-w-[540px] mx-auto mb-12"
          >
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full border border-white/20 mb-6">
              <span className="text-purple-200 text-sm font-medium">Testimonials</span>
            </div>

            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tighter text-white text-center">
              What our community says
            </h2>
            <p className="text-center mt-5 text-purple-200">
              See what our students, faculty, and alumni have to say about us.
            </p>
          </motion.div>

          <div className="flex justify-center gap-6 [mask-image:linear-gradient(to_bottom,transparent,black_25%,black_75%,transparent)] max-h-[740px] overflow-hidden">
            <TestimonialsColumn testimonials={firstColumn} duration={15} />
            <TestimonialsColumn testimonials={secondColumn} className="hidden md:block" duration={19} />
            <TestimonialsColumn testimonials={thirdColumn} className="hidden lg:block" duration={17} />
          </div>
        </div>
      </motion.section>

      {/* Begin Your Journey */}
      <motion.section
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="py-16 bg-gradient-to-r from-purple-600 via-purple-700 to-purple-800 text-white relative overflow-hidden"
      >
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `radial-gradient(circle at 25% 25%, white 2px, transparent 2px)`,
              backgroundSize: "50px 50px",
            }}
          ></div>
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold mb-6">Begin Your Journey in Tech Excellence</h2>
              <p className="text-xl mb-8 text-purple-100 leading-relaxed">
                Join our vibrant community of innovators and technology enthusiasts. Start your journey towards a
                successful career in computer science.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-purple-700 hover:bg-purple-50 border-0">
                  Apply Now
                </Button>
                <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 bg-white/5">
                  Download Brochure
                </Button>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="relative group">
                <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-xl blur-2xl group-hover:blur-3xl transition-all duration-300"></div>
                <img
                  src="/placeholder.svg?height=400&width=500"
                  alt="Graduate Student"
                  className="relative w-full max-w-md mx-auto rounded-xl shadow-2xl border border-white/20"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </motion.section>

      <Footer />
      <Chatbot />

      {/* Scroll to Top Button */}
      <AnimatePresence>
        {showScrollTop && (
          <motion.button
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            onClick={handleScrollToTop}
            className="fixed bottom-20 right-4 z-40 bg-gradient-to-r from-purple-500 to-pink-500 text-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-white/20"
          >
            <ArrowUp className="h-6 w-6" />
          </motion.button>
        )}
      </AnimatePresence>
    </div>
  )
}
