"use client"

import { useEffect } from "react"
import { motion } from "framer-motion"
import { Microscope, Calendar, Users, ArrowLeft, TrendingUp, FileText, ExternalLink } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import EnhancedChatbot from "@/components/enhanced-chatbot"
import { SplashCursor } from "@/components/ui/splash-cursor"

export default function ResearchProjectsPage() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const researchProjects = [
    {
      id: 1,
      title: "AI-Powered Medical Diagnosis System",
      researcher: "Dr. Rajesh Kumar & Team",
      description:
        "Development of machine learning algorithms for early disease detection using medical imaging. This project focuses on creating accurate, fast, and reliable diagnostic tools for healthcare professionals.",
      status: "Ongoing",
      funding: "₹25 Lakhs",
      duration: "2022-2024",
      publications: 3,
      image: "/placeholder.svg?height=300&width=400",
      category: "Artificial Intelligence",
      collaborators: ["AIIMS Delhi", "IIT Kharagpur", "Tata Memorial Hospital"],
      objectives: [
        "Develop CNN models for medical image analysis",
        "Create early detection algorithms for cancer",
        "Implement real-time diagnostic systems",
        "Validate with clinical trials",
      ],
      outcomes: [
        "95% accuracy in cancer detection",
        "Reduced diagnosis time by 60%",
        "3 peer-reviewed publications",
        "Patent application filed",
      ],
      technologies: ["Deep Learning", "Computer Vision", "TensorFlow", "Python"],
    },
    {
      id: 2,
      title: "Smart City Traffic Management",
      researcher: "Dr. Sneha Gupta & Students",
      description:
        "IoT-based intelligent traffic control system for urban areas using real-time data analytics. The system optimizes traffic flow and reduces congestion in metropolitan areas.",
      status: "Completed",
      funding: "₹18 Lakhs",
      duration: "2021-2023",
      publications: 5,
      image: "/placeholder.svg?height=300&width=400",
      category: "Internet of Things",
      collaborators: ["Kolkata Municipal Corporation", "IIT Bombay", "CDAC"],
      objectives: [
        "Design IoT sensor networks for traffic monitoring",
        "Develop predictive traffic algorithms",
        "Create adaptive signal control systems",
        "Implement city-wide deployment",
      ],
      outcomes: [
        "40% reduction in traffic congestion",
        "25% decrease in travel time",
        "5 international publications",
        "System deployed in 3 cities",
      ],
      technologies: ["IoT", "Machine Learning", "Cloud Computing", "Big Data"],
    },
    {
      id: 3,
      title: "Blockchain for Supply Chain",
      researcher: "Prof. Amit Patel & Team",
      description:
        "Implementing blockchain technology for transparent and secure supply chain management. This project ensures traceability and authenticity in global supply networks.",
      status: "Ongoing",
      funding: "₹20 Lakhs",
      duration: "2023-2025",
      publications: 2,
      image: "/placeholder.svg?height=300&width=400",
      category: "Blockchain",
      collaborators: ["IBM Research", "Wipro", "Supply Chain Council"],
      objectives: [
        "Design blockchain architecture for supply chains",
        "Implement smart contracts for automation",
        "Create transparency and traceability solutions",
        "Develop industry-standard protocols",
      ],
      outcomes: [
        "Prototype deployed with 5 companies",
        "99.9% transaction accuracy",
        "2 conference presentations",
        "Industry partnership established",
      ],
      technologies: ["Blockchain", "Smart Contracts", "Ethereum", "Hyperledger"],
    },
    {
      id: 4,
      title: "Natural Language Processing for Regional Languages",
      researcher: "Dr. Priya Sharma & Research Team",
      description:
        "Developing NLP models and tools for Bengali and other regional languages to bridge the language gap in digital communication and information access.",
      status: "Ongoing",
      funding: "₹15 Lakhs",
      duration: "2023-2025",
      publications: 4,
      image: "/placeholder.svg?height=300&width=400",
      category: "Natural Language Processing",
      collaborators: ["Google Research", "Microsoft Research", "ISI Kolkata"],
      objectives: [
        "Create large-scale Bengali language datasets",
        "Develop transformer models for regional languages",
        "Build translation and summarization tools",
        "Deploy applications for public use",
      ],
      outcomes: [
        "50,000+ sentence corpus created",
        "85% accuracy in translation",
        "4 research papers published",
        "Open-source toolkit released",
      ],
      technologies: ["NLP", "Transformers", "BERT", "PyTorch"],
    },
    {
      id: 5,
      title: "Cybersecurity for IoT Devices",
      researcher: "Prof. Vikram Singh & Security Lab",
      description:
        "Research on securing Internet of Things devices against cyber threats and developing robust security frameworks for connected devices in smart environments.",
      status: "Ongoing",
      funding: "₹22 Lakhs",
      duration: "2022-2024",
      publications: 6,
      image: "/placeholder.svg?height=300&width=400",
      category: "Cybersecurity",
      collaborators: ["DRDO", "C-DAC", "Cyber Security Agency"],
      objectives: [
        "Identify IoT security vulnerabilities",
        "Develop lightweight encryption protocols",
        "Create intrusion detection systems",
        "Establish security standards",
      ],
      outcomes: [
        "15 vulnerabilities discovered and patched",
        "Novel encryption algorithm developed",
        "6 security publications",
        "Industry security guidelines published",
      ],
      technologies: ["Cybersecurity", "IoT", "Cryptography", "Network Security"],
    },
    {
      id: 6,
      title: "Quantum Computing Applications",
      researcher: "Dr. Anita Roy & Quantum Lab",
      description:
        "Exploring quantum computing applications in optimization problems and developing quantum algorithms for solving complex computational challenges.",
      status: "Ongoing",
      funding: "₹30 Lakhs",
      duration: "2023-2026",
      publications: 2,
      image: "/placeholder.svg?height=300&width=400",
      category: "Quantum Computing",
      collaborators: ["IBM Quantum", "IIT Delhi", "TIFR"],
      objectives: [
        "Develop quantum optimization algorithms",
        "Explore quantum machine learning",
        "Create quantum simulation tools",
        "Build quantum software frameworks",
      ],
      outcomes: [
        "Quantum algorithm for logistics optimization",
        "50% speedup in specific problems",
        "2 quantum computing papers",
        "Collaboration with IBM established",
      ],
      technologies: ["Quantum Computing", "Qiskit", "Quantum Algorithms", "Optimization"],
    },
  ]

  const getStatusColor = (status: string) => {
    return status === "Ongoing" ? "bg-blue-100 text-blue-600" : "bg-green-100 text-green-600"
  }

  const getCategoryColor = (category: string) => {
    const colors = {
      "Artificial Intelligence": "bg-purple-100 text-purple-600",
      "Internet of Things": "bg-blue-100 text-blue-600",
      Blockchain: "bg-orange-100 text-orange-600",
      "Natural Language Processing": "bg-green-100 text-green-600",
      Cybersecurity: "bg-red-100 text-red-600",
      "Quantum Computing": "bg-indigo-100 text-indigo-600",
    }
    return colors[category] || "bg-gray-100 text-gray-600"
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Research Projects</h1>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">
              Cutting-edge research initiatives driving innovation in computer science and technology
            </p>
          </motion.div>
        </div>
      </section>

      {/* Research Stats */}
      <section className="py-16 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { label: "Active Projects", value: "12+", icon: Microscope },
              { label: "Publications", value: "50+", icon: FileText },
              { label: "Research Funding", value: "₹2.5 Cr", icon: TrendingUp },
              { label: "Collaborations", value: "25+", icon: Users },
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

      {/* Research Projects Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {researchProjects.map((project, index) => (
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
                    <div className="absolute top-4 left-4 flex gap-2">
                      <Badge className={getStatusColor(project.status)}>{project.status}</Badge>
                      <Badge className={getCategoryColor(project.category)}>{project.category}</Badge>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-gray-800 mb-2">{project.title}</h3>
                    <p className="text-purple-600 font-medium mb-3">{project.researcher}</p>
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">{project.description}</p>

                    <div className="grid grid-cols-3 gap-3 mb-4">
                      <div className="text-center p-2 bg-purple-50 rounded">
                        <div className="font-bold text-purple-600">{project.funding}</div>
                        <div className="text-xs text-gray-600">Funding</div>
                      </div>
                      <div className="text-center p-2 bg-blue-50 rounded">
                        <div className="font-bold text-blue-600">{project.publications}</div>
                        <div className="text-xs text-gray-600">Publications</div>
                      </div>
                      <div className="text-center p-2 bg-green-50 rounded">
                        <div className="font-bold text-green-600">{project.collaborators.length}</div>
                        <div className="text-xs text-gray-600">Partners</div>
                      </div>
                    </div>

                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-sm text-gray-600">
                        <Calendar className="h-4 w-4 mr-2 text-purple-500" />
                        Duration: {project.duration}
                      </div>
                      <div className="flex items-center text-sm text-gray-600">
                        <Users className="h-4 w-4 mr-2 text-purple-500" />
                        Collaborators: {project.collaborators.slice(0, 2).join(", ")}
                        {project.collaborators.length > 2 && "..."}
                      </div>
                    </div>

                    <div className="mb-4">
                      <h4 className="font-semibold text-gray-800 mb-2">Technologies</h4>
                      <div className="flex flex-wrap gap-1">
                        {project.technologies.map((tech, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {tech}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="flex gap-2">
                      <Button
                        className="flex-1 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700"
                        onClick={() =>
                          (window.location.href = `/faculty/${project.researcher.split(" ")[1] === "Rajesh" ? "1" : project.researcher.split(" ")[1] === "Sneha" ? "4" : "3"}`)
                        }
                      >
                        View Details
                      </Button>
                      <Button variant="outline" className="border-purple-200 text-purple-600 hover:bg-purple-50">
                        <ExternalLink className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

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
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Join Our Research Community</h2>
            <p className="text-xl text-purple-200 mb-8 max-w-2xl mx-auto">
              Collaborate with leading researchers and contribute to groundbreaking discoveries in computer science and
              technology.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-white text-purple-700 hover:bg-purple-50"
                onClick={() => (window.location.href = "/feedback")}
              >
                <Microscope className="h-4 w-4 mr-2" />
                Join Research
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white/10"
                onClick={() => (window.location.href = "/feedback")}
              >
                Propose Project
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
