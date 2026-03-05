"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  ArrowRight,
  Play,
  Star,
  Users,
  BookOpen,
  Award,
  TrendingUp,
  Sparkles,
  X,
  CheckCircle,
  User,
  Mail,
  Phone,
} from "lucide-react"
import { Button } from "@/components/ui/button"

interface Webinar {
  title: string
}

export default function Hero() {
  const [showRegistrationModal, setShowRegistrationModal] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    domain: "",
  })
  const [selectedWebinar, setSelectedWebinar] = useState<Webinar>({
    title: "Exclusive Tech Webinar: Master Future-Ready Skills",
  })

  // ✅ Automatically show popup once per session
  useEffect(() => {
    const hasShown = sessionStorage.getItem("popup-shown")
    if (!hasShown) {
      const timer = setTimeout(() => {
        setShowRegistrationModal(true)
        sessionStorage.setItem("popup-shown", "true")
      }, 1000) // show after 1 second
      return () => clearTimeout(timer)
    }
  }, [])

  const handleRegisterClick = (webinar: Webinar) => {
    setSelectedWebinar(webinar)
    setShowRegistrationModal(true)
    setIsSubmitted(false)
    setFormData({ name: "", email: "", phone: "", domain: "" })
  }

  const handleCloseModal = () => {
    setShowRegistrationModal(false)
    setIsSubmitted(false)
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)

    try {
      const res = await fetch("/api/webinar-registration", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...formData,
          webinarTitle: selectedWebinar?.title,
        }),
      })

      const data = await res.json()

      if (res.ok) {
        setIsSubmitted(true)
        setTimeout(() => {
          handleCloseModal()
        }, 3000)
      } else {
        console.error(data.error)
        alert("Something went wrong while submitting the form.")
      }
    } catch (error) {
      console.error("Submission error:", error)
      alert("Unable to submit at the moment.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const stats = [
    { icon: Users, label: "Active Learners", value: "500+" },
    { icon: BookOpen, label: "Courses", value: "60+" },
    { icon: Award, label: "Success Rate", value: "95%" },
    { icon: TrendingUp, label: "Avg Salary Hike", value: "90%" },
  ]

  const features = [
    "Industry-Certified Programs",
    "Live Interactive Classes",
    "1:1 Mentorship",
    "Job Placement Support",
  ]

  return (
    <section className="relative min-h-screen overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/images/hero-backdrop.jpg"
          alt="Technology background"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 backdrop-blur-sm"></div>
      </div>

      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#0D1B2A]/95 via-[#0D1B2A]/90 to-tz-medium-blue/85"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-tz-dark-navy/80 via-transparent to-tz-dark-navy/60"></div>

      {/* Floating particles */}
      <div className="absolute inset-0">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-yellow-400/30 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1],
            }}
            transition={{
              duration: 3 + Math.random() * 2,
              repeat: Infinity,
              delay: Math.random() * 2,
            }}
          />
        ))}
      </div>

      {/* Hero content */}
      <div className="container-modern relative z-10 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            {/* Badge */}
            <motion.div className="inline-flex items-center space-x-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-yellow-400/30 shadow-lg">
              <Sparkles className="w-5 h-5 text-yellow-400" />
              <div className="flex items-center space-x-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 text-yellow-400 fill-current" />
                ))}
              </div>
              <span className="text-white font-semibold drop-shadow-sm">
                Trusted by 500+ Students
              </span>
            </motion.div>

            {/* Headline */}
            <div className="space-y-6">
              <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                <span className="text-white drop-shadow-lg">Master</span>
                <br />
                <span className="text-yellow-300 drop-shadow-lg">Future-Ready</span>
                <br />
                <span className="bg-gradient-to-r from-yellow-400 via-yellow-300 to-yellow-500 bg-clip-text text-transparent drop-shadow-lg">
                  Skills
                </span>
              </h1>
              <p className="text-xl lg:text-2xl text-white/95 leading-relaxed max-w-2xl drop-shadow-sm">
                Transform your career with industry-relevant programs designed by experts.
              </p>
            </div>

            {/* Features */}
            <div className="grid grid-cols-2 gap-4">
              {features.map((feature) => (
                <div key={feature} className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-yellow-400 rounded-full shadow-sm"></div>
                  <span className="text-white/95 font-medium drop-shadow-sm">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-tz-dark-navy font-bold text-lg px-8 py-4 rounded-xl shadow-lg"
                onClick={() => setShowRegistrationModal(true)}
              >
                Start Learning Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>

              <a href="https://www.youtube.com/@TechZnanieInnoversity" target="_blank">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-white/10 backdrop-blur-md border-2 border-white/30 text-white hover:bg-white hover:text-tz-dark-navy text-lg px-8 py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg"
                >
                  <Play className="mr-2 w-5 h-5" />
                  Watch Demo
                </Button>
              </a>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 pt-8">
              {stats.map((stat) => (
                <motion.div
                  key={stat.label}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="text-center group"
                >
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center mx-auto mb-3 border border-white/20 shadow-lg">
                    <stat.icon className="w-8 h-8 text-white group-hover:text-yellow-300 transition-colors duration-300" />
                  </div>
                  <div className="text-2xl lg:text-3xl font-bold text-yellow-300 drop-shadow-sm">
                    {stat.value}
                  </div>
                  <div className="text-sm text-white/90 font-medium drop-shadow-sm">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
              className="relative overflow-hidden rounded-3xl shadow-2xl border border-white/20"
            >
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1471&q=80"
                alt="Students learning together"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-tz-dark-navy/60 via-transparent to-tz-dark-navy/20" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Registration Modal */}
      <AnimatePresence>
        {showRegistrationModal && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4"
            onClick={handleCloseModal}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", duration: 0.5 }}
              className="bg-white rounded-2xl max-w-md w-full shadow-2xl overflow-hidden"
              onClick={(e) => e.stopPropagation()}
            >
              {!isSubmitted ? (
                <>
                  <div className="bg-gradient-to-br from-tz-bright-orange to-tz-dark-orange p-6 text-white relative">
                    <button
                      onClick={handleCloseModal}
                      className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                    <h3 className="text-2xl font-bold mb-2">
                      Register for Future Ready Skills
                    </h3>
                    <p className="text-white/90 text-sm">{selectedWebinar?.title}</p>
                  </div>

                  <form onSubmit={handleSubmit} className="p-6 space-y-4">
                    {/* Name */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="text"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-tz-bright-orange"
                          placeholder="Enter your full name"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-tz-bright-orange"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="tel"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-tz-bright-orange"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                    </div>

                    {/* Domain */}
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Domain of Interest *
                      </label>
                      <select
                        name="domain"
                        value={formData.domain}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-tz-bright-orange"
                      >
                        <option value="">Select your domain</option>
                        <option value="web-development">Web Development</option>
                        <option value="ai-ml">AI & Machine Learning</option>
                        <option value="data-science">Data Science</option>
                        <option value="cloud-devops">Cloud & DevOps</option>
                        <option value="cybersecurity">Cybersecurity</option>
                        <option value="embedded-systems">Embedded Systems</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-gradient-to-r from-tz-bright-orange to-tz-dark-orange text-white text-lg py-3 rounded-lg font-semibold"
                    >
                      {isSubmitting ? "Registering..." : "Complete Registration"}
                    </Button>
                  </form>
                </>
              ) : (
                <div className="p-8 text-center">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-12 h-12 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">
                    Registration Successful!
                  </h3>
                  <p className="text-gray-600 mb-4">
                    You've successfully registered for{" "}
                    <strong>{selectedWebinar?.title}</strong>
                  </p>
                  <Button onClick={handleCloseModal} className="bg-tz-bright-orange text-white">
                    Close
                  </Button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  )
}
