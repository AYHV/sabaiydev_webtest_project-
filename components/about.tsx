"use client"

import { motion } from "framer-motion"
import { Card, CardContent } from "@/components/ui/card"
import { Users, Award, Clock, Target } from "lucide-react"

export function About() {
  const stats = [
    { icon: Users, label: "Happy Clients", value: "150+" },
    { icon: Award, label: "Projects Completed", value: "300+" },
    { icon: Clock, label: "Years Experience", value: "8+" },
    { icon: Target, label: "Success Rate", value: "98%" },
  ]

  return (
    <section id="about" className="py-20 bg-white dark:bg-slate-900 transition-colors">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">About TechCorp</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We are a team of passionate developers, designers, and strategists dedicated to creating digital solutions
            that make a difference. Our expertise spans web development, mobile apps, and digital transformation.
          </p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="text-center p-6 hover:shadow-lg transition-shadow dark:bg-slate-800 dark:border-slate-700">
                <CardContent className="p-0">
                  <stat.icon className="w-8 h-8 mx-auto mb-4 text-blue-600 dark:text-blue-400" />
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-2">{stat.value}</div>
                  <div className="text-gray-600 dark:text-gray-300">{stat.label}</div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-2 gap-12 items-center"
        >
          <div>
            <h3 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">Our Mission</h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              To empower businesses with cutting-edge technology solutions that drive growth, enhance efficiency, and
              create meaningful connections with their customers.
            </p>
            <p className="text-gray-600 dark:text-gray-300">
              We believe in the power of innovation and collaboration to solve complex challenges and deliver
              exceptional results that exceed expectations.
            </p>
          </div>
          <div className="relative">
            <img
              src="/image.png?height=400&width=600"
              alt="Team collaboration"
              className="rounded-lg shadow-lg w-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  )
}
