import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  GraduationCap,
  ChevronRight,
  Heart,
} from "lucide-react"
import Link from "next/link"

export default function Footer() {
  const quickLinks = [
    { name: "About Us", href: "/about" },
    { name: "Academics", href: "/academics" },
    { name: "Faculty", href: "/faculty" },
    { name: "Alumni", href: "/alumni" },
    { name: "Activities", href: "/activities" },
    { name: "Gallery", href: "/gallery" },
  ]

  const academicLinks = [
    { name: "Study Materials", href: "/academics/study-materials" },
    { name: "Question Papers", href: "/academics/question-papers" },
    { name: "Syllabus", href: "/academics/syllabus" },
    { name: "Notices", href: "/academics/notices" },
    { name: "Research", href: "/research" },
    { name: "Projects", href: "/projects" },
  ]

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook", color: "hover:bg-blue-600" },
    { icon: Twitter, href: "#", label: "Twitter", color: "hover:bg-sky-500" },
    { icon: Instagram, href: "#", label: "Instagram", color: "hover:bg-pink-600" },
    { icon: Linkedin, href: "#", label: "LinkedIn", color: "hover:bg-blue-700" },
  ]

  return (
    <footer className="bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900 text-white relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 25%, white 1px, transparent 1px)`,
            backgroundSize: "30px 30px",
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Department Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
                <GraduationCap className="h-7 w-7 text-white" />
              </div>
              <div>
                <h3 className="text-xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  CS Department
                </h3>
                <p className="text-gray-400 text-sm">Mankar College</p>
              </div>
            </div>

            <p className="text-gray-300 mb-6 leading-relaxed">
              Empowering students with cutting-edge computer science education and research opportunities since 2009.
            </p>

            <div className="space-y-3">
              <div className="flex items-center space-x-3 text-gray-300 hover:text-purple-400 transition-colors">
                <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <MapPin className="h-4 w-4" />
                </div>
                <span className="text-sm">Mankar College, West Bengal, India</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 hover:text-purple-400 transition-colors">
                <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <Phone className="h-4 w-4" />
                </div>
                <span className="text-sm">+91 12345 67890</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-300 hover:text-purple-400 transition-colors">
                <div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
                  <Mail className="h-4 w-4" />
                </div>
                <span className="text-sm">cs.dept@mankarcollege.edu.in</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-purple-400 transition-colors flex items-center group text-sm"
                  >
                    <ChevronRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Academic Resources */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Academic Resources</h3>
            <ul className="space-y-3">
              {academicLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-gray-300 hover:text-purple-400 transition-colors flex items-center group text-sm"
                  >
                    <ChevronRight className="h-3 w-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social */}
          <div>
            <h3 className="text-lg font-bold mb-6 text-white">Connect With Us</h3>

            {/* Social Media */}
            <div>
              <p className="text-gray-300 text-sm mb-4">Follow us on social media</p>
              <div className="flex space-x-3">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    className={`w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center hover:scale-110 transition-all duration-300 ${social.color}`}
                    aria-label={social.label}
                  >
                    <social.icon className="h-4 w-4 text-white" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-12 pt-8">
          <div className="flex flex-col lg:flex-row justify-between items-center space-y-4 lg:space-y-0">
            <div className="flex flex-col sm:flex-row items-center space-y-2 sm:space-y-0 sm:space-x-6 text-gray-400 text-sm">
              <p>© 2024 Department of Computer Science, Mankar College. All rights reserved.</p>
              <div className="flex space-x-4">
                <Link href="/privacy" className="hover:text-purple-400 transition-colors">
                  Privacy Policy
                </Link>
                <Link href="/terms" className="hover:text-purple-400 transition-colors">
                  Terms of Service
                </Link>
              </div>
            </div>
            <div className="flex items-center space-x-2 text-gray-400 text-sm">
              <span>Made with</span>
              <Heart className="h-4 w-4 text-red-500 fill-current" />
              <span>by CS Students</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}
