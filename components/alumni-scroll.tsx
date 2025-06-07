"use client"

import { motion } from "framer-motion"
import { MapPin, Briefcase, Calendar } from "lucide-react"

const alumni = [
  {
    id: 1,
    name: "Priya Sharma",
    batch: "2020",
    position: "Software Engineer",
    company: "Google",
    location: "Bangalore",
    image: "https://randomuser.me/api/portraits/women/1.jpg",
    achievement: "Led development of Google Pay features",
  },
  {
    id: 2,
    name: "Amit Patel",
    batch: "2019",
    position: "Full Stack Developer",
    company: "Microsoft",
    location: "Hyderabad",
    image: "https://randomuser.me/api/portraits/men/2.jpg",
    achievement: "Contributed to Azure cloud services",
  },
  {
    id: 3,
    name: "Ananya Singh",
    batch: "2021",
    position: "Data Scientist",
    company: "Amazon",
    location: "Mumbai",
    image: "https://randomuser.me/api/portraits/women/3.jpg",
    achievement: "Developed ML models for recommendation systems",
  },
  {
    id: 4,
    name: "Rahul Kumar",
    batch: "2018",
    position: "Cloud Engineer",
    company: "IBM",
    location: "Pune",
    image: "https://randomuser.me/api/portraits/men/4.jpg",
    achievement: "Architected enterprise cloud solutions",
  },
  {
    id: 5,
    name: "Kavya Reddy",
    batch: "2020",
    position: "Tech Entrepreneur",
    company: "TechStart Inc.",
    location: "Delhi",
    image: "https://randomuser.me/api/portraits/women/5.jpg",
    achievement: "Founded successful EdTech startup",
  },
  {
    id: 6,
    name: "Arjun Mehta",
    batch: "2019",
    position: "Cybersecurity Analyst",
    company: "Wipro",
    location: "Chennai",
    image: "https://randomuser.me/api/portraits/men/6.jpg",
    achievement: "Prevented major security breaches",
  },
  {
    id: 7,
    name: "Riya Joshi",
    batch: "2021",
    position: "Product Manager",
    company: "Flipkart",
    location: "Bangalore",
    image: "https://randomuser.me/api/portraits/women/7.jpg",
    achievement: "Launched successful mobile app features",
  },
  {
    id: 8,
    name: "Vikash Yadav",
    batch: "2018",
    position: "DevOps Engineer",
    company: "Zomato",
    location: "Gurgaon",
    image: "https://randomuser.me/api/portraits/men/8.jpg",
    achievement: "Optimized deployment pipelines",
  },
]

export default function AlumniScroll() {
  return (
    <div className="relative overflow-hidden">
      <motion.div
        animate={{
          x: [0, -100 * alumni.length],
        }}
        transition={{
          x: {
            repeat: Number.POSITIVE_INFINITY,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        }}
        className="flex gap-6"
      >
        {[...alumni, ...alumni].map((alum, index) => (
          <div
            key={`${alum.id}-${index}`}
            className="flex-shrink-0 w-80 bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20"
          >
            <div className="flex items-center gap-4 mb-4">
              <img
                src={alum.image || "/placeholder.svg"}
                alt={alum.name}
                className="w-16 h-16 rounded-full border-3 border-white/30"
              />
              <div>
                <h3 className="text-lg font-semibold text-white">{alum.name}</h3>
                <div className="flex items-center gap-2 text-purple-200 text-sm">
                  <Calendar className="h-3 w-3" />
                  <span>Batch {alum.batch}</span>
                </div>
              </div>
            </div>

            <div className="space-y-3">
              <div className="flex items-center gap-2 text-white/90">
                <Briefcase className="h-4 w-4 text-purple-300" />
                <span className="text-sm">
                  {alum.position} at {alum.company}
                </span>
              </div>

              <div className="flex items-center gap-2 text-white/90">
                <MapPin className="h-4 w-4 text-purple-300" />
                <span className="text-sm">{alum.location}</span>
              </div>

              <p className="text-purple-200 text-sm leading-relaxed">{alum.achievement}</p>
            </div>
          </div>
        ))}
      </motion.div>
    </div>
  )
}
