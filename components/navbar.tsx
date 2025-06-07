"use client"

import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, GraduationCap, ChevronDown, FileText, BookOpen, Bell, Download } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const academicsDropdown = [
    { name: "Study Materials", href: "/academics/study-materials", icon: BookOpen },
    { name: "Question Papers", href: "/academics/question-papers", icon: FileText },
    { name: "Syllabus", href: "/academics/syllabus", icon: Download },
    { name: "Notices", href: "/academics/notices", icon: Bell },
  ]

  const activitiesDropdown = [
    { name: "Social Projects", href: "/activities/social-projects", icon: null },
    { name: "Annual Magazine", href: "/activities/annual-magazine", icon: null },
    { name: "Research Works", href: "/activities/research-projects", icon: null },
  ]

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    {
      name: "Academics",
      href: "/academics",
      dropdown: academicsDropdown,
    },
    { name: "Faculty", href: "/faculty" },
    { name: "Alumni", href: "/alumni" },
    {
      name: "Activities",
      href: "/activities",
      dropdown: activitiesDropdown,
    },
    { name: "Gallery", href: "/gallery" },
    { name: "Feedback", href: "/feedback" },
  ]

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-4 left-4 right-4 z-50 transition-all duration-300 rounded-xl ${
        isScrolled
          ? "bg-white/95 backdrop-blur-md shadow-xl border border-gray-200"
          : "bg-white/10 backdrop-blur-sm border border-white/20"
      }`}
    >
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <div className="w-12 h-12 bg-gradient-to-br from-purple-600 to-blue-800 rounded-lg flex items-center justify-center">
              <GraduationCap className="h-7 w-7 text-white" />
            </div>
            <div className={`font-bold text-lg ${isScrolled ? "text-gray-800" : "text-white"}`}>
              Department of Computer Science
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() => item.dropdown && setActiveDropdown(item.name)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`font-medium transition-colors hover:text-purple-500 flex items-center ${
                    isScrolled ? "text-gray-700" : "text-white"
                  }`}
                >
                  {item.name}
                  {item.dropdown && <ChevronDown className="ml-1 h-4 w-4" />}
                </Link>

                {/* Dropdown */}
                <AnimatePresence>
                  {item.dropdown && activeDropdown === item.name && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 10 }}
                      className="absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-gray-200 py-2 z-50"
                    >
                      {item.dropdown.map((dropdownItem) => (
                        <Link
                          key={dropdownItem.name}
                          href={dropdownItem.href}
                          className="flex items-center px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors"
                        >
                          {dropdownItem.icon && <dropdownItem.icon className="h-4 w-4 mr-3" />}
                          {dropdownItem.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? "text-gray-800" : "text-white"}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? "text-gray-800" : "text-white"}`} />
            )}
          </Button>
        </div>

        {/* Enhanced Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              className="lg:hidden bg-white/95 backdrop-blur-md border-t border-gray-200 rounded-b-xl"
            >
              <div className="py-4 space-y-1">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link
                      href={item.href}
                      className="block px-4 py-3 text-gray-700 hover:bg-purple-50 hover:text-purple-600 transition-colors rounded-lg mx-2 font-medium"
                      onClick={() => setIsMobileMenuOpen(false)}
                    >
                      {item.name}
                    </Link>
                    {item.dropdown && (
                      <div className="ml-4 space-y-1">
                        {item.dropdown.map((dropdownItem, subIndex) => (
                          <motion.div
                            key={dropdownItem.name}
                            initial={{ opacity: 0, x: -10 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: index * 0.1 + subIndex * 0.05 + 0.1 }}
                          >
                            <Link
                              href={dropdownItem.href}
                              className="flex items-center px-4 py-2 text-sm text-gray-600 hover:bg-purple-50 hover:text-purple-600 transition-colors rounded-lg mx-2"
                              onClick={() => setIsMobileMenuOpen(false)}
                            >
                              {dropdownItem.icon && <dropdownItem.icon className="h-3 w-3 mr-2" />}
                              {dropdownItem.name}
                            </Link>
                          </motion.div>
                        ))}
                      </div>
                    )}
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.nav>
  )
}
