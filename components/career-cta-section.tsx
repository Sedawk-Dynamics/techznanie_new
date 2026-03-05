"use client"

import { motion } from "framer-motion"
import { Users, Award, TrendingUp, ArrowRight, Briefcase, Heart } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"

const careerHighlights = [
  {
    icon: Users,
    title: "Growing Team",
    description: "Join 50+ passionate educators and technologists",
    color: "bg-blue-50 text-blue-600"
  },
  {
    icon: Award,
    title: "Great Culture",
    description: "4.8★ employee rating with 95% retention rate",
    color: "bg-green-50 text-green-600"
  },
  {
    icon: TrendingUp,
    title: "Career Growth",
    description: "Fast-track your career in the EdTech industry",
    color: "bg-purple-50 text-purple-600"
  },
  {
    icon: Heart,
    title: "Make Impact",
    description: "Help transform thousands of students' lives",
    color: "bg-red-50 text-red-600"
  }
]

export default function CareerCTASection() {
  return (
    <section className="py-20 px-4 bg-gradient-to-br from-[#0D1B2A]/95 to-tz-dark-navy/90 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        {Array.from({ length: 6 }).map((_, index) => (
          <motion.div
            key={index}
            className="absolute w-32 h-32 bg-tz-bright-orange/5 rounded-full blur-xl"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [0.3, 0.6, 0.3],
              x: [0, Math.random() * 100 - 50, 0],
              y: [0, Math.random() * 100 - 50, 0],
            }}
            transition={{
              duration: 8 + Math.random() * 4,
              repeat: Infinity,
              delay: Math.random() * 4,
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block mb-6"
            >
              <div className="flex items-center gap-3 bg-tz-bright-orange/20 backdrop-blur-sm px-4 py-2 rounded-full border border-tz-bright-orange/30">
                <Briefcase className="w-5 h-5 text-tz-bright-orange" />
                <span className="text-tz-bright-orange font-semibold">We're Hiring!</span>
              </div>
            </motion.div>

            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Ready to Shape the
              <span 
                className="text-tz-bright-orange block"
                
              >
                Future of Education?
              </span>
            </h2>
            
            <p className="text-xl text-tz-cream mb-8 leading-relaxed">
              Join TechZnanie Innoversity and be part of a mission-driven team that's transforming 
              how students learn and grow in the digital age.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link href="/careers">
                <motion.div
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Button 
                    size="lg" 
                    className="bg-tz-bright-orange hover:bg-tz-bright-orange/90 text-white px-8 py-4 text-lg font-bold rounded-xl shadow-2xl hover:shadow-tz-bright-orange/25 transition-all duration-300 group"
                  >
                    View Open Positions
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
              </Link>
              
             <Link href="/about">
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button 
                  variant="outline" 
                  size="lg" 
                  className="border-white text-tz-dark-navy hover:bg-white hover:text-tz-dark-navy px-8 py-4 text-lg font-bold rounded-xl backdrop-blur-sm"
                >
                  Learn About Culture
                </Button>
              </motion.div>
              </Link>
            </div>

            {/* Quick Stats */}
            <div className="flex flex-wrap gap-6 text-tz-cream">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-tz-bright-orange rounded-full"></div>
                <span className="font-medium">6 Open Positions</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-tz-bright-orange rounded-full"></div>
                <span className="font-medium">Remote Friendly</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-tz-bright-orange rounded-full"></div>
                <span className="font-medium">Competitive Benefits</span>
              </div>
            </div>
          </motion.div>

          {/* Right Content - Career Highlights */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-4"
          >
            {careerHighlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5, scale: 1.02 }}
              >
                <Card className="bg-white/10 backdrop-blur-md border-white/20 hover:bg-white/15 transition-all duration-300">
                  <CardContent className="p-6 text-center">
                    <motion.div 
                      className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 border border-white/30"
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <highlight.icon className="w-6 h-6 text-tz-bright-orange" />
                    </motion.div>
                    <h3 className="font-bold text-white mb-2">{highlight.title}</h3>
                    <p className="text-tz-cream/80 text-sm leading-relaxed">{highlight.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
