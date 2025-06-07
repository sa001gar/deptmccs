"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import { Heart, Users, MapPin, Calendar, ArrowLeft, Target, Award } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import EnhancedChatbot from "@/components/enhanced-chatbot"
import { SplashCursor } from "@/components/ui/splash-cursor"

export default function SocialProjectsPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const socialProjects = [
    {
      id: 1,
      title: "Digital Literacy for Rural Communities",
      description:
        "Teaching basic computer skills and digital literacy to rural populations, helping bridge the digital divide and empowering communities with essential technology knowledge.",
      beneficiaries: "500+ People",
      location: "15 Villages in West Bengal",
      duration: "2023-Ongoing",
      volunteers: 25,
      impact: "95% improvement in digital skills",
      image: "/placeholder.svg?height=300&width=400",
      objectives: [
        "Provide basic computer training",
        "Teach internet safety and digital citizenship",
        "Enable access to government digital services",
        "Create sustainable learning centers",
      ],
      achievements: [
        "Established 5 digital learning centers",
        "Trained 500+ rural residents",
        "100% success rate in basic certification",
        "Partnership with local government",
      ],
    },
    {
      id: 2,
      title: "E-Waste Management Initiative",
      description:
        "Collecting and properly disposing of electronic waste while raising awareness about environmental impact and sustainable technology practices.",
      beneficiaries: "Local Community",
      location: "Mankar & Surrounding Areas",
      duration: "2022-Ongoing",
      volunteers: 40,
      impact: "2 tons of e-waste recycled",
      image: "/placeholder.svg?height=300&width=400",
      objectives: [
        "Collect electronic waste from households",
        "Educate about proper e-waste disposal",
        "Partner with certified recycling facilities",
        "Promote sustainable technology use",
      ],
      achievements: [
        "Collected 2000+ kg of e-waste",
        "Organized 20+ awareness campaigns",
        "Partnered with 3 recycling companies",
        "Reduced environmental impact by 80%",
      ],
    },
    {
      id: 3,
      title: "Free Coding Bootcamp for Underprivileged",
      description:
        "Providing free programming education to economically disadvantaged students, opening doors to technology careers and digital opportunities.",
      beneficiaries: "100+ Students",
      location: "Community Centers",
      duration: "2023-2024",
      volunteers: 15,
      impact: "80% job placement rate",
      image: "/placeholder.svg?height=300&width=400",
      objectives: [
        "Teach programming fundamentals",
        "Provide career guidance and mentorship",
        "Connect students with job opportunities",
        "Build sustainable learning pathways",
      ],
      achievements: [
        "Trained 100+ underprivileged students",
        "80% job placement success rate",
        "Average salary increase of 300%",
        "Ongoing mentorship program",
      ],
    },
    {
      id: 4,
      title: "Senior Citizens Tech Support",
      description:
        "Helping elderly community members navigate modern technology, from smartphones to online banking, ensuring they stay connected in the digital age.",
      beneficiaries: "200+ Senior Citizens",
      location: "Local Senior Centers",
      duration: "2023-Ongoing",
      volunteers: 20,
      impact: "90% improved tech confidence",
      image: "/placeholder.svg?height=300&width=400",
      objectives: [
        "Teach smartphone and tablet usage",
        "Enable online banking and shopping",
        "Improve digital communication skills",
        "Enhance quality of life through technology",
      ],
      achievements: [
        "Assisted 200+ senior citizens",
        "90% improvement in tech confidence",
        "Reduced digital isolation by 70%",
        "Weekly ongoing support sessions",
      ],
    },
    {
      id: 5,
      title: "Women in Tech Empowerment",
      description:
        "Encouraging and supporting women to pursue careers in technology through workshops, mentorship, and skill development programs.",
      beneficiaries: "150+ Women",
      location: "Various Educational Institutions",
      duration: "2022-Ongoing",
      volunteers: 30,
      impact: "60% career advancement",
      image: "/placeholder.svg?height=300&width=400",
      objectives: [
        "Provide technical skill training",
        "Offer career mentorship and guidance",
        "Create networking opportunities",
        "Promote gender equality in tech",
      ],
      achievements: [
        "Empowered 150+ women in tech",
        "60% achieved career advancement",
        "Established women tech community",
        "Monthly networking events",
      ],
    },
    {
      id: 6,
      title: "School Technology Integration",
      description:
        "Helping local schools integrate technology into their curriculum and teaching methods, improving educational outcomes for students.",
      beneficiaries: "10 Schools, 2000+ Students",
      location: "Local Primary & Secondary Schools",
      duration: "2023-2025",
      volunteers: 35,
      impact: "40% improvement in learning outcomes",
      image: "/placeholder.svg?height=300&width=400",
      objectives: [
        "Set up computer labs in schools",
        "Train teachers in technology use",
        "Develop digital curriculum content",
        "Provide ongoing technical support",
      ],
      achievements: [
        "Established 10 computer labs",
        "Trained 100+ teachers",
        "Improved learning outcomes by 40%",
        "Created digital learning resources",
      ],
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Social Impact Projects</h1>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">
              Making a difference in our community through technology and education initiatives
            </p>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
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
                    <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-sm text-white px-3 py-1 rounded-full text-sm">
                      {project.volunteers} Volunteers
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-3">{project.title}</h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>

                    <div className="grid grid-cols-2 gap-4 mb-4">
                      <div className="text-center p-3 bg-green-50 rounded-lg">
                        <div className="font-bold text-green-600">{project.beneficiaries}</div>
                        <div className="text-xs text-gray-600">Beneficiaries</div>
                      </div>
                      <div className="text-center p-3 bg-blue-50 rounded-lg">
                        <div className="font-bold text-blue-600">{project.impact}</div>
                        <div className="text-xs text-gray-600">Impact</div>
                      </div>
                    </div>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <MapPin className="h-4 w-4 mr-2 text-green-500" />
                        {project.location}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="h-4 w-4 mr-2 text-green-500" />
                        {project.duration}
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                        <Target className="h-4 w-4 mr-2 text-purple-500" />
                        Key Objectives
                      </h4>
                      <ul className="space-y-1">
                        {project.objectives.slice(0, 2).map((objective, i) => (
                          <li key={i} className="flex items-start text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-purple-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                            {objective}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2 flex items-center">
                        <Award className="h-4 w-4 mr-2 text-yellow-500" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-1">
                        {project.achievements.slice(0, 2).map((achievement, i) => (
                          <li key={i} className="flex items-start text-sm text-gray-600">
                            <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full mt-2 mr-2 flex-shrink-0"></div>
                            {achievement}
                          </li>
                        ))}
                      </ul>
                    </div>

                    <Button className="w-full bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700">
                      <Users className="h-4 w-4 mr-2" />
                      Join Project
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-green-600 via-blue-600 to-purple-700">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Make a Difference Today</h2>
            <p className="text-xl text-green-200 mb-8 max-w-2xl mx-auto">
              Join our social impact initiatives and help create positive change in our community through technology and
              education.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-green-700 hover:bg-green-50"
                onClick={() => (window.location.href = "/feedback")}
              >
                Volunteer Now
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
                onClick={() => (window.location.href = "/feedback")}
              >
                Propose a Project
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
