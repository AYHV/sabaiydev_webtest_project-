"use client"

import { Button } from "@/components/ui/button"
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react"
import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function Hero() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })
  const techCorpText = "TechCorp"
  const solutionsText = "Solutions"

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  const scrollToSection = (sectionId: string) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 4 + 1,
    duration: Math.random() * 20 + 20,
  }))

  return (
    <section id="hero" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-slate-950">
      {/* Background gradient */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute inset-0 bg-gradient-to-br from-purple-900/50 via-blue-900/30 to-slate-900/50"
          animate={{
            background: [
              "linear-gradient(45deg, rgba(147, 51, 234, 0.5), rgba(59, 130, 246, 0.3), rgba(15, 23, 42, 0.5))",
              "linear-gradient(90deg, rgba(59, 130, 246, 0.5), rgba(147, 51, 234, 0.3), rgba(15, 23, 42, 0.5))",
              "linear-gradient(135deg, rgba(147, 51, 234, 0.5), rgba(59, 130, 246, 0.3), rgba(15, 23, 42, 0.5))",
            ],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
        />
      </div>

      {/* Mouse orb */}
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl"
        style={{
          left: mousePosition.x - 192,
          top: mousePosition.y - 192,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200 }}
      />

      {/* Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute bg-white/10 rounded-full backdrop-blur-sm"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
          }}
          animate={{
            y: [0, -100, 0],
            opacity: [0.2, 0.8, 0.2],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Geometric shapes */}
      <motion.div className="absolute top-20 left-20 w-20 h-20 border border-blue-500/30 rotate-45"
        animate={{ rotate: [45, 405] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div className="absolute top-40 right-32 w-16 h-16 bg-purple-500/20 rounded-full"
        animate={{ y: [0, -30, 0], scale: [1, 1.1, 1] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div className="absolute bottom-32 left-32 w-12 h-12 border-2 border-blue-400/40 rounded-full"
        animate={{ scale: [1, 1.3, 1], opacity: [0.4, 0.8, 0.4] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* Grid overlay */}
      <div className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                            linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
          backgroundSize: '50px 50px'
        }}
      />

      {/* Main content */}
      <div className="container mx-auto px-4 text-center relative z-10 pt-16">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
        >
          {/* Title */}
          <div className="relative mb-6">
            {/* Glow background */}
            <motion.div
              className="absolute inset-0 text-5xl md:text-7xl lg:text-8xl font-bold blur-sm opacity-50"
              animate={{ scale: [1, 1.02, 1] }}
              transition={{ scale: { duration: 3, repeat: Infinity, ease: "easeInOut" } }}
            >
              <span className="text-blue-400">{techCorpText}</span>
              <span className="text-yellow-400 ml-4">{solutionsText}</span>
            </motion.div>

            {/* Animated Title */}
            <motion.h1 className="relative text-5xl md:text-7xl lg:text-8xl font-bold">
              {/* TechCorp */}
              <motion.span className="text-blue-400">
                {techCorpText.split("").map((letter, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, y: 50, rotateX: -90 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: index * 0.1,
                      ease: "easeOut"
                    }}
                    whileHover={{
                      scale: 1.1,
                      y: -10,
                      transition: { duration: 0.2 }
                    }}
                    className="inline-block cursor-default"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.span>

              <span className="mx-4"></span>

              {/* Solutions */}
              <motion.span className="text-yellow-400">
                {solutionsText.split("").map((letter, index) => (
                  <motion.span
                    key={index + techCorpText.length}
                    initial={{ opacity: 0, y: 50, rotateX: -90 }}
                    animate={{ opacity: 1, y: 0, rotateX: 0 }}
                    transition={{
                      duration: 0.8,
                      delay: (index + techCorpText.length + 1) * 0.1,
                      ease: "easeOut"
                    }}
                    whileHover={{
                      scale: 1.1,
                      y: -10,
                      transition: { duration: 0.2 }
                    }}
                    className="inline-block cursor-default"
                    style={{ transformStyle: "preserve-3d" }}
                  >
                    {letter}
                  </motion.span>
                ))}
              </motion.span>
            </motion.h1>

            {/* Cursor */}
            <motion.span
              className="inline-block w-1 h-16 md:h-20 lg:h-24 bg-gradient-to-b from-blue-400 to-purple-400 ml-2"
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 1, repeat: Infinity, ease: "easeInOut" }}
            />

            {/* Sparkles */}
            {Array.from({ length: 6 }).map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-2 h-2 bg-white rounded-full"
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${Math.random() * 100}%`,
                }}
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                  rotate: [0, 180, 360],
                }}
                transition={{
                  duration: 2,
                  delay: i * 0.3,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            ))}
          </div>

          {/* Subtitle */}
          <motion.p
            className="text-xl md:text-2xl mb-8 text-gray-300 max-w-3xl mx-auto leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.3, ease: "easeOut" }}
          >
            We create innovative digital solutions that transform businesses and deliver exceptional user experiences
          </motion.p>
        </motion.div>

        {/* Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, ease: "easeOut" }}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12"
        >
          <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white px-8 py-3 shadow-lg shadow-blue-500/25 border-0"
              onClick={() => scrollToSection("projects")}
            >
              View Our Work
            </Button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05, y: -2 }} whileTap={{ scale: 0.95 }}>
            <Button
              size="lg"
              variant="outline"
              className="border-2 border-white/30 text-blue-400 hover:bg-white/10 hover:border-white/50 px-8 py-3 backdrop-blur-sm"
              onClick={() => scrollToSection("contact")}
            >
              Get In Touch
            </Button>
          </motion.div>
        </motion.div>

        {/* Social Icons */}
        
      
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className="absolute  left-1/2 transform -translate-x-1/2"
        >
          <motion.button
            onClick={() => scrollToSection("about")}
            className="text-gray-400 hover:text-white transition-all duration-300 p-2 rounded-full hover:bg-white/10 backdrop-blur-sm"
            animate={{ y: [0, -8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            whileHover={{ scale: 1.1 }}
          >
            <ArrowDown className="w-6 h-6" />
          </motion.button>
        </motion.div>
      </div>

      {/* Bottom wave */}
      <motion.div
        className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-slate-950/50 to-transparent"
        animate={{ opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
    </section>
  )
}
