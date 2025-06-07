"use client"
import React from "react"
import { motion } from "framer-motion"

export const TestimonialsColumn = (props: {
  className?: string
  testimonials: typeof testimonials
  duration?: number
}) => {
  return (
    <div className={props.className}>
      <motion.div
        animate={{
          translateY: "-50%",
        }}
        transition={{
          duration: props.duration || 10,
          repeat: Number.POSITIVE_INFINITY,
          ease: "linear",
          repeatType: "loop",
        }}
        className="flex flex-col gap-6 pb-6"
      >
        {[
          ...new Array(2).fill(0).map((_, index) => (
            <React.Fragment key={index}>
              {props.testimonials.map(({ text, image, name, role }, i) => (
                <div
                  className="p-6 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 shadow-lg max-w-xs w-full"
                  key={i}
                >
                  <div className="text-white/90 text-sm leading-relaxed">{text}</div>
                  <div className="flex items-center gap-3 mt-4">
                    <img
                      width={40}
                      height={40}
                      src={image || "/placeholder.svg"}
                      alt={name}
                      className="h-10 w-10 rounded-full border-2 border-white/30"
                    />
                    <div className="flex flex-col">
                      <div className="font-medium tracking-tight leading-5 text-white">{name}</div>
                      <div className="leading-5 opacity-70 tracking-tight text-purple-200 text-sm">{role}</div>
                    </div>
                  </div>
                </div>
              ))}
            </React.Fragment>
          )),
        ]}
      </motion.div>
    </div>
  )
}

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
