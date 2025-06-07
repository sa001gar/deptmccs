"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Star,
  Send,
  CheckCircle,
  ArrowLeft,
  ArrowRight,
  Phone,
  Mail,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Clock,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Label } from "@/components/ui/label"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import EnhancedChatbot from "@/components/enhanced-chatbot"

export default function FeedbackPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [rating, setRating] = useState(0)
  const [hoveredRating, setHoveredRating] = useState(0)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    category: "",
    userType: "",
    subject: "",
    message: "",
    suggestions: "",
    experience: "",
  })

  const totalSteps = 4

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const handleInputChange = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }))
  }

  const nextStep = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleSubmit = () => {
    setIsSubmitted(true)
    setTimeout(() => {
      setIsSubmitted(false)
      setCurrentStep(1)
      setFormData({
        name: "",
        email: "",
        phone: "",
        category: "",
        userType: "",
        subject: "",
        message: "",
        suggestions: "",
        experience: "",
      })
      setRating(0)
    }, 3000)
  }

  const previousFeedbacks = [
    {
      id: 1,
      date: "2024-12-10",
      subject: "Course Curriculum Feedback",
      status: "Reviewed",
      rating: 4,
    },
    {
      id: 2,
      date: "2024-11-25",
      subject: "Faculty Teaching Methods",
      status: "In Progress",
      rating: 5,
    },
    {
      id: 3,
      date: "2024-11-15",
      subject: "Lab Infrastructure",
      status: "Resolved",
      rating: 3,
    },
  ]

  const stepTitles = ["Personal Information", "Feedback Category", "Your Experience", "Final Review"]

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-purple-50 to-blue-50">
        <Navbar />
        <div className="pt-32 min-h-screen flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center bg-white/80 backdrop-blur-sm p-12 rounded-2xl shadow-xl"
          >
            <CheckCircle className="h-20 w-20 text-green-500 mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-800 mb-4">Thank You!</h2>
            <p className="text-gray-600 mb-6">Your feedback has been submitted successfully.</p>
            <p className="text-sm text-gray-500">We appreciate your time and will review your feedback carefully.</p>
          </motion.div>
        </div>
      </div>
    )
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
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Your Feedback Matters</h1>
            <p className="text-xl text-blue-200 max-w-3xl mx-auto">
              Help us improve by sharing your thoughts, suggestions, and experiences
            </p>
          </motion.div>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar */}
            <div className="lg:col-span-1 space-y-6">
              {/* Progress */}
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">Progress</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {stepTitles.map((title, index) => (
                      <div key={index} className="flex items-center space-x-3">
                        <div
                          className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium ${
                            index + 1 < currentStep
                              ? "bg-green-500 text-white"
                              : index + 1 === currentStep
                                ? "bg-purple-600 text-white"
                                : "bg-gray-200 text-gray-600"
                          }`}
                        >
                          {index + 1 < currentStep ? <CheckCircle className="h-4 w-4" /> : index + 1}
                        </div>
                        <span
                          className={`text-sm ${
                            index + 1 <= currentStep ? "text-gray-800 font-medium" : "text-gray-500"
                          }`}
                        >
                          {title}
                        </span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Previous Feedbacks */}
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg flex items-center">
                    <Clock className="h-5 w-5 mr-2" />
                    Previous Feedbacks
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {previousFeedbacks.map((feedback) => (
                      <div key={feedback.id} className="p-3 bg-gray-50 rounded-lg">
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-sm font-medium">{feedback.subject}</span>
                          <div className="flex">
                            {[...Array(feedback.rating)].map((_, i) => (
                              <Star key={i} className="h-3 w-3 text-yellow-400 fill-current" />
                            ))}
                          </div>
                        </div>
                        <div className="flex items-center justify-between text-xs text-gray-500">
                          <span>{feedback.date}</span>
                          <span
                            className={`px-2 py-1 rounded ${
                              feedback.status === "Resolved"
                                ? "bg-green-100 text-green-600"
                                : feedback.status === "In Progress"
                                  ? "bg-yellow-100 text-yellow-600"
                                  : "bg-blue-100 text-blue-600"
                            }`}
                          >
                            {feedback.status}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Contact Info */}
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-lg">
                <CardHeader>
                  <CardTitle className="text-lg">Contact Us</CardTitle>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center space-x-3 text-sm">
                    <Phone className="h-4 w-4 text-purple-500" />
                    <span>+91 12345 67890</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm">
                    <Mail className="h-4 w-4 text-purple-500" />
                    <span>feedback@mankarcollege.edu.in</span>
                  </div>
                  <div className="flex items-center space-x-3 text-sm">
                    <MapPin className="h-4 w-4 text-purple-500" />
                    <span>Mankar College, West Bengal</span>
                  </div>
                  <div className="flex space-x-2 pt-2">
                    <Button size="sm" variant="outline" className="p-2">
                      <Facebook className="h-3 w-3" />
                    </Button>
                    <Button size="sm" variant="outline" className="p-2">
                      <Twitter className="h-3 w-3" />
                    </Button>
                    <Button size="sm" variant="outline" className="p-2">
                      <Instagram className="h-3 w-3" />
                    </Button>
                    <Button size="sm" variant="outline" className="p-2">
                      <Linkedin className="h-3 w-3" />
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>

            {/* Main Form */}
            <div className="lg:col-span-3">
              <Card className="bg-white/80 backdrop-blur-sm border-0 shadow-xl">
                <CardHeader className="bg-gradient-to-r from-purple-50 to-blue-50">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-2xl bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                      Step {currentStep}: {stepTitles[currentStep - 1]}
                    </CardTitle>
                    <div className="text-sm text-gray-500">
                      {currentStep} of {totalSteps}
                    </div>
                  </div>
                  {/* Progress Bar */}
                  <div className="w-full bg-gray-200 rounded-full h-2 mt-4">
                    <div
                      className="bg-gradient-to-r from-purple-600 to-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${(currentStep / totalSteps) * 100}%` }}
                    ></div>
                  </div>
                </CardHeader>

                <CardContent className="p-8">
                  <AnimatePresence mode="wait">
                    <motion.div
                      key={currentStep}
                      initial={{ opacity: 0, x: 20 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -20 }}
                      transition={{ duration: 0.3 }}
                    >
                      {/* Step 1: Personal Information */}
                      {currentStep === 1 && (
                        <div className="space-y-6">
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                              <Label htmlFor="name" className="text-sm font-medium text-gray-700 mb-2 block">
                                Full Name *
                              </Label>
                              <Input
                                id="name"
                                value={formData.name}
                                onChange={(e) => handleInputChange("name", e.target.value)}
                                placeholder="Enter your full name"
                                className="focus-visible:ring-purple-500"
                                required
                              />
                            </div>
                            <div>
                              <Label htmlFor="email" className="text-sm font-medium text-gray-700 mb-2 block">
                                Email Address *
                              </Label>
                              <Input
                                id="email"
                                type="email"
                                value={formData.email}
                                onChange={(e) => handleInputChange("email", e.target.value)}
                                placeholder="your.email@example.com"
                                className="focus-visible:ring-purple-500"
                                required
                              />
                            </div>
                          </div>
                          <div>
                            <Label htmlFor="phone" className="text-sm font-medium text-gray-700 mb-2 block">
                              Phone Number
                            </Label>
                            <Input
                              id="phone"
                              value={formData.phone}
                              onChange={(e) => handleInputChange("phone", e.target.value)}
                              placeholder="+91 12345 67890"
                              className="focus-visible:ring-purple-500"
                            />
                          </div>
                          <div>
                            <Label className="text-sm font-medium text-gray-700 mb-3 block">I am a: *</Label>
                            <RadioGroup
                              value={formData.userType}
                              onValueChange={(value) => handleInputChange("userType", value)}
                              className="grid grid-cols-2 md:grid-cols-4 gap-4"
                            >
                              {["Current Student", "Alumni", "Faculty", "Visitor"].map((type) => (
                                <div key={type} className="flex items-center space-x-2">
                                  <RadioGroupItem value={type.toLowerCase().replace(" ", "")} id={type} />
                                  <Label htmlFor={type} className="text-sm">
                                    {type}
                                  </Label>
                                </div>
                              ))}
                            </RadioGroup>
                          </div>
                        </div>
                      )}

                      {/* Step 2: Feedback Category */}
                      {currentStep === 2 && (
                        <div className="space-y-6">
                          <div>
                            <Label htmlFor="category" className="text-sm font-medium text-gray-700 mb-2 block">
                              Feedback Category *
                            </Label>
                            <Select
                              value={formData.category}
                              onValueChange={(value) => handleInputChange("category", value)}
                            >
                              <SelectTrigger>
                                <SelectValue placeholder="Select a category" />
                              </SelectTrigger>
                              <SelectContent>
                                <SelectItem value="academics">Academics & Curriculum</SelectItem>
                                <SelectItem value="faculty">Faculty & Teaching</SelectItem>
                                <SelectItem value="infrastructure">Infrastructure & Facilities</SelectItem>
                                <SelectItem value="website">Website & Digital Services</SelectItem>
                                <SelectItem value="events">Events & Activities</SelectItem>
                                <SelectItem value="administration">Administration</SelectItem>
                                <SelectItem value="general">General Feedback</SelectItem>
                              </SelectContent>
                            </Select>
                          </div>
                          <div>
                            <Label htmlFor="subject" className="text-sm font-medium text-gray-700 mb-2 block">
                              Subject *
                            </Label>
                            <Input
                              id="subject"
                              value={formData.subject}
                              onChange={(e) => handleInputChange("subject", e.target.value)}
                              placeholder="Brief subject of your feedback"
                              className="focus-visible:ring-purple-500"
                              required
                            />
                          </div>
                          <div>
                            <Label className="text-sm font-medium text-gray-700 mb-3 block">Overall Rating *</Label>
                            <div className="flex items-center space-x-2">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <button
                                  key={star}
                                  type="button"
                                  onClick={() => setRating(star)}
                                  onMouseEnter={() => setHoveredRating(star)}
                                  onMouseLeave={() => setHoveredRating(0)}
                                  className="focus:outline-none"
                                >
                                  <Star
                                    className={`h-8 w-8 transition-colors ${
                                      star <= (hoveredRating || rating)
                                        ? "text-yellow-400 fill-current"
                                        : "text-gray-300"
                                    }`}
                                  />
                                </button>
                              ))}
                              <span className="ml-2 text-sm text-gray-600">
                                {rating > 0 && `${rating} out of 5 stars`}
                              </span>
                            </div>
                          </div>
                        </div>
                      )}

                      {/* Step 3: Your Experience */}
                      {currentStep === 3 && (
                        <div className="space-y-6">
                          <div>
                            <Label htmlFor="message" className="text-sm font-medium text-gray-700 mb-2 block">
                              Detailed Feedback *
                            </Label>
                            <Textarea
                              id="message"
                              value={formData.message}
                              onChange={(e) => handleInputChange("message", e.target.value)}
                              placeholder="Please share your detailed feedback, concerns, or issues..."
                              className="min-h-32 focus-visible:ring-purple-500"
                              required
                            />
                          </div>
                          <div>
                            <Label htmlFor="experience" className="text-sm font-medium text-gray-700 mb-2 block">
                              Your Experience
                            </Label>
                            <Textarea
                              id="experience"
                              value={formData.experience}
                              onChange={(e) => handleInputChange("experience", e.target.value)}
                              placeholder="Tell us about your overall experience..."
                              className="min-h-24 focus-visible:ring-purple-500"
                            />
                          </div>
                          <div>
                            <Label htmlFor="suggestions" className="text-sm font-medium text-gray-700 mb-2 block">
                              Suggestions for Improvement
                            </Label>
                            <Textarea
                              id="suggestions"
                              value={formData.suggestions}
                              onChange={(e) => handleInputChange("suggestions", e.target.value)}
                              placeholder="Any suggestions to help us improve?"
                              className="min-h-24 focus-visible:ring-purple-500"
                            />
                          </div>
                        </div>
                      )}

                      {/* Step 4: Final Review */}
                      {currentStep === 4 && (
                        <div className="space-y-6">
                          <div className="bg-gradient-to-r from-purple-50 to-blue-50 p-6 rounded-lg">
                            <h3 className="text-lg font-semibold mb-4">Review Your Feedback</h3>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                              <div>
                                <span className="font-medium">Name:</span> {formData.name}
                              </div>
                              <div>
                                <span className="font-medium">Email:</span> {formData.email}
                              </div>
                              <div>
                                <span className="font-medium">User Type:</span> {formData.userType}
                              </div>
                              <div>
                                <span className="font-medium">Category:</span> {formData.category}
                              </div>
                              <div className="md:col-span-2">
                                <span className="font-medium">Subject:</span> {formData.subject}
                              </div>
                              <div className="md:col-span-2">
                                <span className="font-medium">Rating:</span>
                                <div className="flex items-center mt-1">
                                  {[...Array(rating)].map((_, i) => (
                                    <Star key={i} className="h-4 w-4 text-yellow-400 fill-current" />
                                  ))}
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="bg-yellow-50 border border-yellow-200 p-4 rounded-lg">
                            <h4 className="font-semibold text-yellow-800 mb-2">Privacy Notice</h4>
                            <p className="text-sm text-yellow-700">
                              Your feedback will be treated confidentially and used only for improvement purposes.
                              Personal information will not be shared with third parties.
                            </p>
                          </div>
                        </div>
                      )}
                    </motion.div>
                  </AnimatePresence>

                  {/* Navigation Buttons */}
                  <div className="flex justify-between mt-8 pt-6 border-t">
                    <Button
                      onClick={prevStep}
                      disabled={currentStep === 1}
                      variant="outline"
                      className="flex items-center"
                    >
                      <ArrowLeft className="h-4 w-4 mr-2" />
                      Previous
                    </Button>

                    {currentStep < totalSteps ? (
                      <Button
                        onClick={nextStep}
                        className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 flex items-center"
                      >
                        Next
                        <ArrowRight className="h-4 w-4 ml-2" />
                      </Button>
                    ) : (
                      <Button
                        onClick={handleSubmit}
                        className="bg-gradient-to-r from-green-600 to-green-700 hover:from-green-700 hover:to-green-800 flex items-center"
                      >
                        <Send className="h-4 w-4 mr-2" />
                        Submit Feedback
                      </Button>
                    )}
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
