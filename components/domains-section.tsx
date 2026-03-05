"use client"

import { motion } from "framer-motion"
import { ArrowRight, Users, BookOpen, Star, Code, Cpu, Zap, Wrench, Building, TrendingUp } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"

const domains = [
  {
    id: "computer-science",
    title: "Computer Science & Engineering",
    description: "Master programming, software development, and cutting-edge technologies",
    icon: Code,
    courses: 12,
    students: "100+",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
    gradient: "from-blue-600/20 to-purple-700/20",
    popular: true
  },
  {
    id: "electronics-communication",
    title: "Electronics & Communication",
    description: "Explore electronics, embedded systems, and communication technologies",
    icon: Cpu,
    courses: 8,
    students: "100+",
    rating: 4.7,
    image: "https://plus.unsplash.com/premium_photo-1663040598592-9f3e311f9841?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8ZWxlY3Ryb25pY3MlMjBhbmQlMjBjb21tdW5pY2F0aW9ufGVufDB8fDB8fHww",
    gradient: "from-green-600/20 to-teal-700/20",
    popular: false
  },
  {
    id: "electrical-electronics",
    title: "Electrical & Electronics",
    description: "Power systems, control engineering, and electrical machine design",
    icon: Zap,
    courses: 6,
    students: "100+",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    gradient: "from-yellow-600/20 to-orange-700/20",
    popular: false
  },
  {
    id: "mechanical",
    title: "Mechanical Engineering",
    description: "Design, manufacturing, and mechanical system optimization",
    icon: Wrench,
    courses: 7,
    students: "100+",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    gradient: "from-gray-600/20 to-slate-700/20",
    popular: false
  },
  {
    id: "civil",
    title: "Civil Engineering",
    description: "Infrastructure development, construction management, and structural design",
    icon: Building,
    courses: 5,
    students: "100+",
    rating: 4.4,
    image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    gradient: "from-amber-600/20 to-brown-700/20",
    popular: false
  },
  {
    id: "management",
    title: "Management & Business",
    description: "Leadership, strategy, and business development skills",
    icon: TrendingUp,
    courses: 6,
    students: "100+",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1415&q=80",
    gradient: "from-orange-600/20 to-red-700/20",
    popular: true
  }
]

export default function DomainsSection() {
  return (
    <section id='domainss' className="py-20 px-4 bg-gradient-to-tr from-[#CBD5E1] to-white">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-tz-dark-navy mb-6">
            Explore Engineering Domains
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Choose your specialization and dive deep into industry-relevant courses designed by experts
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {domains.map((domain, index) => (
            <motion.div
              key={domain.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -10 }}
            >
              <Link href={`/course/${domain.id}`}>
                <Card className="h-full hover:shadow-2xl transition-all duration-500 group overflow-hidden border-0 cursor-pointer">
                  {/* Domain Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={domain.image || "/placeholder.svg"}
                      alt={domain.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className={`absolute inset-0 bg-gradient-to-t ${domain.gradient} group-hover:opacity-80 transition-opacity duration-300`} />
                    
                    {/* Popular Badge */}
                    {domain.popular && (
                      <div className="absolute top-4 right-4">
                        <motion.div
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <Badge className="bg-tz-bright-orange text-white font-bold">
                            🔥 Popular
                          </Badge>
                        </motion.div>
                      </div>
                    )}
                    
                    {/* Domain Icon */}
                    <div className="absolute top-4 left-4">
                      <motion.div
                        className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center border border-white/30"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <domain.icon className="w-6 h-6 text-white" />
                      </motion.div>
                    </div>

                    {/* Stats Overlay */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center justify-between text-white text-sm">
                        <div className="flex items-center gap-4">
                          <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">
                            <BookOpen className="w-3 h-3" />
                            <span>{domain.courses} courses</span>
                          </div>
                          <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">
                            <Users className="w-3 h-3" />
                            <span>{domain.students}</span>
                          </div>
                        </div>
                        <div className="flex items-center gap-1 bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">
                          <Star className="w-3 h-3 fill-current text-yellow-300" />
                          <span>{domain.rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold text-tz-dark-navy mb-3 group-hover:text-tz-bright-orange transition-colors">
                      {domain.title}
                    </h3>
                    <p className="text-gray-600 mb-4 leading-relaxed">
                      {domain.description}
                    </p>
                    
                    <motion.div
                      whileHover={{ x: 5 }}
                      className="flex items-center text-tz-bright-orange font-semibold group-hover:text-tz-dark-orange transition-colors"
                    >
                      <span>Explore Courses</span>
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </motion.div>
                  </CardContent>
                </Card>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
