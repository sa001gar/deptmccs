"use client"

import { motion } from "framer-motion"
import { Star, Quote } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"

const testimonials = [
  {
    id: 1,
    name: "Priya Sharma",
    role: "Final Year Student",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "The CS department at Mankar College has provided me with excellent theoretical knowledge and practical skills. The faculty is supportive and always encourages innovation.",
    rating: 5,
  },
  {
    id: 2,
    name: "Dr. Rajesh Kumar",
    role: "Assistant Professor",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "Teaching at this department has been incredibly rewarding. The collaborative environment and research opportunities make it an ideal place for academic growth.",
    rating: 5,
  },
  {
    id: 3,
    name: "Amit Patel",
    role: "Alumni (2022)",
    image: "/placeholder.svg?height=80&width=80",
    content:
      "The education I received here prepared me well for my career in software development. Currently working at a top tech company, thanks to the strong foundation built here.",
    rating: 5,
  },
]

export default function TestimonialsSection() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      className="py-16 bg-gray-50"
    >
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
          What Our Community Says
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <Card className="h-full border-0 shadow-lg hover:shadow-xl transition-all duration-300 bg-white">
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Quote className="h-8 w-8 text-blue-500 mb-4" />
                  </div>

                  <p className="text-gray-700 mb-6 leading-relaxed">"{testimonial.content}"</p>

                  <div className="flex items-center mb-4">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                    ))}
                  </div>

                  <div className="flex items-center">
                    <img
                      src={testimonial.image || "/placeholder.svg"}
                      alt={testimonial.name}
                      className="w-12 h-12 rounded-full mr-4 object-cover"
                    />
                    <div>
                      <h4 className="font-semibold text-gray-800">{testimonial.name}</h4>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  )
}
