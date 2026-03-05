"use client"

import { motion } from "framer-motion"
import { Users, Award, Headphones, FileText, Video, CheckCircle } from "lucide-react"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export default function Features() {
  const features = [
    {
      icon: Video,
      title: "Live Interactive Classes",
      description: "Join live sessions with industry experts and interact in real-time",
      color: "bg-tz-medium-blue",
    },
    {
      icon: Users,
      title: "1:1 Mentorship",
      description: "Get personalized guidance from experienced professionals",
      color: "bg-tz-bright-orange",
    },
    {
      icon: FileText,
      title: "Industry Projects",
      description: "Work on real-world projects to build your portfolio",
      color: "bg-tz-light-blue",
    },
    {
      icon: Award,
      title: "Certification",
      description: "Earn industry-recognized certificates upon completion",
      color: "bg-tz-dark-orange",
    },
    {
      icon: Headphones,
      title: "Hybrid Class model",
      description: "Learn flexibly with both online and offline classroom experiences.",
      color: "bg-tz-medium-blue",
    },
    {
      icon: CheckCircle,
      title: "Job Placement",
      description: "Access to exclusive job opportunities and career guidance",
      color: "bg-tz-bright-orange",
    },
  ]

  const benefits = [
    "Learn from Industry Experts",
    "Flexible Learning Schedule",
    "Hands-on Project Experience",
    "Career Support & Guidance",
    "Lifetime Access to Content",
    "Global Learning Community",
  ]

  return (
    <section id="features" className="section-padding bg-gradient-to-bl from-white/95 to-[#CBD5E1]/90">
      <div className="container-modern">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="bg-tz-cream text-tz-dark-navy mb-6 px-6 py-2 text-sm font-semibold">
            Why Choose TechZnanie
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-tz-dark-navy mb-6">
            Everything You Need to
            <span className="text-gradient block">Succeed in Tech</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our comprehensive learning platform provides all the tools, resources, and support you need to master
            in-demand skills and advance your career.
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="card-feature group">
                <CardContent className="text-center">
                  <div
                    className={`w-16 h-16 ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}
                  >
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-tz-dark-navy mb-4">{feature.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{feature.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Benefits Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-white rounded-3xl p-12 shadow-modern"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold text-tz-dark-navy mb-6">Joined 500+ Students Who Trust TechZnanie</h3>
              <p className="text-lg text-gray-600 mb-8">
                Our proven methodology and comprehensive support system have helped thousands of students successfully
                transition into tech careers.
              </p>

              <div className="grid grid-cols-1 gap-4">
                {benefits.map((benefit, index) => (
                  <motion.div
                    key={benefit}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center space-x-3"
                  >
                    <div className="w-6 h-6 bg-tz-bright-orange rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4 text-white" />
                    </div>
                    <span className="text-tz-dark-navy font-medium">{benefit}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <div className="relative">
              <img
                src="https://media.istockphoto.com/id/1413552652/photo/girl-using-the-laptop-and-looking-at-it-with-strained-eyes.webp?a=1&b=1&s=612x612&w=0&k=20&c=HLxmnPjUrQC-d14L-2SGR1fuYAuYZ_kOgfq6p_6OgYY="
                alt="Modern learning environment"
                className="rounded-2xl shadow-modern w-full h-80 object-cover"
              />

              {/* Floating Success Card */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
                viewport={{ once: true }}
                className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-modern border border-gray-100"
              >
                <div className="flex items-center space-x-4">
                  <div className="w-12 h-12 bg-tz-bright-orange rounded-xl flex items-center justify-center">
                    <Award className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-tz-dark-navy">₹6.5L</div>
                    <div className="text-sm text-gray-600">Avg. Starting Salary</div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
