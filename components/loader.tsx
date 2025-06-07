"use client"

import { motion } from "framer-motion"
import { GraduationCap, Code, BookOpen, Users } from "lucide-react"

export default function Loader() {
  return (
    <div className="fixed inset-0 bg-gradient-to-br from-purple-600 via-purple-700 to-blue-800 flex items-center justify-center z-50 overflow-hidden">
      {/* Animated Background Particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-white/20 rounded-full"
            initial={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            animate={{
              x: Math.random() * window.innerWidth,
              y: Math.random() * window.innerHeight,
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
          />
        ))}
      </div>

      <div className="text-center relative z-10">
        {/* Main Logo Animation */}
        <motion.div
          className="relative mb-8"
          initial={{ scale: 0, rotate: -180 }}
          animate={{ scale: 1, rotate: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          <motion.div
            animate={{
              rotate: 360,
            }}
            transition={{
              duration: 3,
              repeat: Number.POSITIVE_INFINITY,
              ease: "linear",
            }}
            className="w-24 h-24 bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center mx-auto border-2 border-white/30"
          >
            <GraduationCap className="h-12 w-12 text-white" />
          </motion.div>

          {/* Orbiting Icons */}
          {[Code, BookOpen, Users].map((Icon, index) => (
            <motion.div
              key={index}
              className="absolute w-8 h-8 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center border border-white/40"
              style={{
                top: "50%",
                left: "50%",
              }}
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 4 + index,
                repeat: Number.POSITIVE_INFINITY,
                ease: "linear",
              }}
              transformTemplate={({ rotate }) =>
                `translate(-50%, -50%) rotate(${rotate}) translateY(-60px) rotate(-${rotate})`
              }
            >
              <Icon className="h-4 w-4 text-white" />
            </motion.div>
          ))}
        </motion.div>

        {/* Department Name Animation */}
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="text-3xl font-bold text-white mb-2"
        >
          Department of Computer Science
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="text-blue-200 mb-8"
        >
          Mankar College
        </motion.p>

        {/* Loading Progress Bar */}
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ delay: 1, duration: 2, ease: "easeInOut" }}
          className="h-1 bg-gradient-to-r from-white/60 to-blue-300 rounded-full mx-auto mb-4"
          style={{ maxWidth: "200px" }}
        />

        {/* Loading Text */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ delay: 1.5, duration: 1.5, repeat: Number.POSITIVE_INFINITY }}
          className="text-blue-200"
        >
          Loading Excellence...
        </motion.div>

        {/* Pulse Effect */}
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.1, 0.3],
          }}
          transition={{
            duration: 2,
            repeat: Number.POSITIVE_INFINITY,
            ease: "easeInOut",
          }}
        />
      </div>
    </div>
  )
}
