"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Smartphone, Globe, Palette, Database, Shield } from "lucide-react"

export function Services() {
  const services = [
    {
      icon: Code,
      title: "Web Development",
      description: "Custom web applications built with modern technologies like React, Next.js, and Node.js",
    },
    {
      icon: Smartphone,
      title: "Mobile Apps",
      description: "Native and cross-platform mobile applications for iOS and Android platforms",
    },
    {
      icon: Globe,
      title: "Digital Strategy",
      description: "Comprehensive digital transformation strategies to modernize your business",
    },
    {
      icon: Palette,
      title: "UI/UX Design",
      description: "User-centered design solutions that create engaging and intuitive experiences",
    },
    {
      icon: Database,
      title: "Backend Systems",
      description: "Scalable backend infrastructure and API development for robust applications",
    },
    {
      icon: Shield,
      title: "Security Solutions",
      description: "Comprehensive security audits and implementation of best practices",
    },
  ]

  return (
    <section className="py-20 bg-gray-50 dark:bg-slate-800 transition-colors">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-900 dark:text-white">Our Services</h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            We offer a comprehensive range of digital services to help your business thrive in the modern world
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="h-full hover:shadow-lg transition-all duration-300 hover:-translate-y-1 dark:bg-slate-900 dark:border-slate-700">
                <CardHeader>
                  <service.icon className="w-12 h-12 text-blue-600 dark:text-blue-400 mb-4" />
                  <CardTitle className="text-xl text-gray-900 dark:text-white">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 dark:text-gray-300">{service.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
