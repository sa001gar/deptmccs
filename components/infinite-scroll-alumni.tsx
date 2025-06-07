"use client"

import { useRef, useEffect } from "react"
import { gsap } from "gsap"
import ChromaGrid from "@/components/ui/chroma-grid"

const InfiniteScrollAlumni = () => {
  const scrollRef = useRef<HTMLDivElement>(null)

  const alumniData = [
    {
      image: "https://randomuser.me/api/portraits/women/1.jpg",
      title: "Priya Sharma",
      subtitle: "Software Engineer at Google",
      handle: "@priyasharma",
      location: "Bangalore, India",
      borderColor: "#4285F4",
      gradient: "linear-gradient(145deg, #4285F4, #1a1a1a)",
      url: "https://linkedin.com/in/priyasharma",
    },
    {
      image: "https://randomuser.me/api/portraits/men/2.jpg",
      title: "Amit Patel",
      subtitle: "Full Stack Developer at Microsoft",
      handle: "@amitpatel",
      location: "Hyderabad, India",
      borderColor: "#00BCF2",
      gradient: "linear-gradient(210deg, #00BCF2, #1a1a1a)",
      url: "https://linkedin.com/in/amitpatel",
    },
    {
      image: "https://randomuser.me/api/portraits/women/3.jpg",
      title: "Dr. Sneha Gupta",
      subtitle: "Assistant Professor & Researcher",
      handle: "@drsneha",
      location: "Mumbai, India",
      borderColor: "#FF6B6B",
      gradient: "linear-gradient(165deg, #FF6B6B, #1a1a1a)",
      url: "https://scholar.google.com/sneha",
    },
    {
      image: "https://randomuser.me/api/portraits/men/4.jpg",
      title: "Rahul Kumar",
      subtitle: "Cloud Engineer at Microsoft",
      handle: "@rahulkumar",
      location: "Seattle, USA",
      borderColor: "#00BCF2",
      gradient: "linear-gradient(195deg, #00BCF2, #1a1a1a)",
      url: "https://linkedin.com/in/rahulkumar",
    },
    {
      image: "https://randomuser.me/api/portraits/women/5.jpg",
      title: "Ananya Singh",
      subtitle: "PhD Scholar at IIT Delhi",
      handle: "@ananyasingh",
      location: "Delhi, India",
      borderColor: "#8B5CF6",
      gradient: "linear-gradient(225deg, #8B5CF6, #1a1a1a)",
      url: "https://iitd.ac.in/ananya",
    },
    {
      image: "https://randomuser.me/api/portraits/women/6.jpg",
      title: "Kavya Reddy",
      subtitle: "Tech Entrepreneur & Founder",
      handle: "@kavyareddy",
      location: "Bangalore, India",
      borderColor: "#F59E0B",
      gradient: "linear-gradient(135deg, #F59E0B, #1a1a1a)",
      url: "https://kavyatech.com",
    },
    {
      image: "https://randomuser.me/api/portraits/men/7.jpg",
      title: "Arjun Mehta",
      subtitle: "Cybersecurity Analyst at IBM",
      handle: "@arjunmehta",
      location: "Pune, India",
      borderColor: "#EF4444",
      gradient: "linear-gradient(180deg, #EF4444, #1a1a1a)",
      url: "https://linkedin.com/in/arjunmehta",
    },
    {
      image: "https://randomuser.me/api/portraits/women/8.jpg",
      title: "Riya Joshi",
      subtitle: "Data Scientist at Amazon",
      handle: "@riyajoshi",
      location: "Bangalore, India",
      borderColor: "#FF9500",
      gradient: "linear-gradient(270deg, #FF9500, #1a1a1a)",
      url: "https://linkedin.com/in/riyajoshi",
    },
    {
      image: "https://randomuser.me/api/portraits/men/9.jpg",
      title: "Vikash Yadav",
      subtitle: "DevOps Engineer at Netflix",
      handle: "@vikashyadav",
      location: "Mumbai, India",
      borderColor: "#E50914",
      gradient: "linear-gradient(315deg, #E50914, #1a1a1a)",
      url: "https://linkedin.com/in/vikashyadav",
    },
    {
      image: "https://randomuser.me/api/portraits/women/10.jpg",
      title: "Neha Agarwal",
      subtitle: "Product Manager at Flipkart",
      handle: "@nehaagarwal",
      location: "Bangalore, India",
      borderColor: "#FF6C37",
      gradient: "linear-gradient(45deg, #FF6C37, #1a1a1a)",
      url: "https://linkedin.com/in/nehaagarwal",
    },
    {
      image: "https://randomuser.me/api/portraits/men/11.jpg",
      title: "Sanjay Verma",
      subtitle: "AI Research Scientist at OpenAI",
      handle: "@sanjayverma",
      location: "San Francisco, USA",
      borderColor: "#10A37F",
      gradient: "linear-gradient(90deg, #10A37F, #1a1a1a)",
      url: "https://openai.com/sanjay",
    },
    {
      image: "https://randomuser.me/api/portraits/women/12.jpg",
      title: "Pooja Malhotra",
      subtitle: "UX Designer at Adobe",
      handle: "@poojamalhotra",
      location: "Noida, India",
      borderColor: "#FF0000",
      gradient: "linear-gradient(120deg, #FF0000, #1a1a1a)",
      url: "https://behance.net/poojamalhotra",
    },
  ]

  // Duplicate the data for infinite scroll effect
  const duplicatedData = [...alumniData, ...alumniData, ...alumniData]

  useEffect(() => {
    const container = scrollRef.current
    if (!container) return

    // Set up infinite horizontal scroll animation
    const scrollWidth = container.scrollWidth / 3 // Since we have 3 copies

    gsap.set(container, { x: 0 })

    const tl = gsap.timeline({ repeat: -1 })
    tl.to(container, {
      x: -scrollWidth,
      duration: 60, // Adjust speed as needed
      ease: "none",
    })

    return () => {
      tl.kill()
    }
  }, [])

  return (
    <div className="relative overflow-hidden w-full h-[600px]">
      <div ref={scrollRef} className="flex gap-6 h-full" style={{ width: "max-content" }}>
        <ChromaGrid items={duplicatedData} className="flex-shrink-0 min-w-max px-4" radius={250} damping={0.3} />
      </div>

      {/* Gradient overlays for smooth edges */}
      <div className="absolute left-0 top-0 w-32 h-full bg-gradient-to-r from-purple-900 to-transparent pointer-events-none z-50" />
      <div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-purple-900 to-transparent pointer-events-none z-50" />
    </div>
  )
}

export default InfiniteScrollAlumni
