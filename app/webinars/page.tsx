"use client"

import type React from "react"

import { motion, AnimatePresence } from "framer-motion"
import {
  Calendar,
  Clock,
  Users,
  Play,
  BookOpen,
  Award,
  MessageSquare,
  ChevronRight,
  Search,
  Filter,
  Linkedin,
  Download,
  Eye,
  Lock,
  X,
  Mail,
  Phone,
  User,
  CheckCircle,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import Link from "next/link"
import { useState } from "react"
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

interface Webinar {
  id: number
  title: string
  date: string
  time: string
  speaker: {
    name: string
    designation: string
    image: string
    linkedin: string
  }
  description: string
  category: string
  attendees: number
  status: string
}

export default function WebinarsPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [showRegistrationModal, setShowRegistrationModal] = useState(false)
  const [selectedWebinar, setSelectedWebinar] = useState<Webinar | null>(null)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    domain: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSubmitted, setIsSubmitted] = useState(false)

  const upcomingWebinars: Webinar[] = [
    {
      id: 1,
      title: "Roadmap to Full Stack Developer",
      date: "5th Nov 2025",
      time: "7:00 PM IST",
      speaker: {
        name: "Ankit Verma",
        designation: "Ex-Amazon, Full Stack Architect",
        image: "/placeholder.svg?height=80&width=80&text=AV",
        linkedin: "#",
      },
      description:
        "Learn the essential roadmap to become a full stack developer in 2025, from basics to advanced projects.",
      category: "Web Development",
      attendees: 245,
      status: "upcoming",
    },
    {
      id: 2,
      title: "AI for Beginners",
      date: "12th Nov 2025",
      time: "6:30 PM IST",
      speaker: {
        name: "Dr. Nisha Reddy",
        designation: "AI Researcher, Microsoft",
        image: "/placeholder.svg?height=80&width=80&text=NR",
        linkedin: "#",
      },
      description: "A hands-on workshop on how to use Generative AI tools for coding, design & automation.",
      category: "AI & ML",
      attendees: 312,
      status: "upcoming",
    },
    {
      id: 3,
      title: "Mastering UI/UX",
      date: "18th Nov 2025",
      time: "7:30 PM IST",
      speaker: {
        name: "Rajesh Kumar",
        designation: "Senior Frontend Developer, Google",
        image: "/placeholder.svg?height=80&width=80&text=RK",
        linkedin: "#",
      },
      description: "Deep dive into React 19 features, best practices, and building production-ready applications.",
      category: "Web Development",
      attendees: 189,
      status: "upcoming",
    },
    {
      id: 4,
      title: "IOT",
      date: "25th Nov 2025",
      time: "6:00 PM IST",
      speaker: {
        name: "Priya Sharma",
        designation: "HR Director, TCS",
        image: "/placeholder.svg?height=80&width=80&text=PS",
        linkedin: "#",
      },
      description: "Learn how to crack your first interview and build a successful career in technology.",
      category: "Career Skills",
      attendees: 421,
      status: "upcoming",
    },
  ]

  const pastWebinars = [
    {
      id: 1,
      title: "Introduction to Generative AI",
      category: "AI & ML",
      speaker: "Dr. Nisha Reddy",
      duration: "50 min",
      views: 1240,
      thumbnail: "https://blog.coeruniversity.ac.in/wp-content/uploads/2024/02/Introduction-to-Generative-AI.jpg",
      isPremium: false,
      date: "Oct 15, 2025",
      link:"youtube.com/@TechZnanieInnoversity",
    },
    {
      id: 2,
      title: "Machine Learning for Beginners",
      category: "AI & ML",
      speaker: "Arun Patel",
      duration: "1h 20min",
      views: 890,
      thumbnail: "https://images.codebasics.io/filters:format(webp)/images/1.1.419/courses/thumbnails/machine-learning-for-beginners.webp",
      isPremium: true,
      date: "Oct 8, 2025",
      link:"https://lms.techznanieinnoversity.com/",
    },
    {
      id: 3,
      title: "React.js Crash Course",
      category: "Web Development",
      speaker: "Rajesh Kumar",
      duration: "45 min",
      views: 2150,
      thumbnail: "https://miro.medium.com/0*syUfAfQ5v-51iAo1.png",
      isPremium: false,
      date: "Oct 1, 2025",
      link:"youtube.com/@TechZnanieInnoversity",
    },
    {
      id: 4,
      title: "Building Scalable Web Apps",
      category: "Web Development",
      speaker: "Ankit Verma",
      duration: "1h 15min",
      views: 1560,
      thumbnail: "https://miro.medium.com/v2/resize:fit:512/1*GaBtlHe240ZkwlcBrFczgQ.jpeg",
      isPremium: true,
      date: "Sep 24, 2025",
      link:"https://lms.techznanieinnoversity.com/",
    },
    {
      id: 5,
      title: "How to Crack Your First Interview",
      category: "Career Skills",
      speaker: "Priya Sharma",
      duration: "40 min",
      views: 3420,
      thumbnail: "https://5cc2b83c.delivery.rocketcdn.me/app/uploads/qualitative-interview-jpg.webp",
      isPremium: false,
      date: "Sep 17, 2025",
      link:"youtube.com/@TechZnanieInnoversity",
    },
    {
      id: 6,
      title: "Resume & LinkedIn Masterclass",
      category: "Career Skills",
      speaker: "Vikram Singh",
      duration: "55 min",
      views: 2780,
      thumbnail: "https://img-c.udemycdn.com/course/750x422/2504252_28c5_2.jpg",
      isPremium: true,
      date: "Sep 10, 2025",
      link:"https://lms.techznanieinnoversity.com/",
    },
    {
      id: 7,
      title: "IoT & Embedded Systems Fundamentals",
      category: "Embedded Systems",
      speaker: "Dr. Suresh Reddy",
      duration: "1h 10min",
      views: 670,
      thumbnail: "https://emteria.com/hs-fs/hubfs/blog_header_img/iot-embedded-system.webp?width=600&height=500&name=iot-embedded-system.webp",
      isPremium: false,
      date: "Sep 3, 2025",
      link:"youtube.com/@TechZnanieInnoversity",
    },
    {
      id: 8,
      title: "Industry 4.0 and Smart Manufacturing",
      category: "Industry Insights",
      speaker: "Meera Gupta",
      duration: "50 min",
      views: 890,
      thumbnail: "https://octopusdtl.com/wp-content/uploads/2024/04/Blog-12-inner-image-Industry-4.0-1-1024x655.png",
      isPremium: true,
      date: "Aug 27, 2025",
      link:"https://lms.techznanieinnoversity.com/",
    },
  ]

  const categories = ["all", "AI & ML", "Web Development", "Embedded Systems", "Career Skills", "Industry Insights"]

  const filteredPastWebinars = pastWebinars.filter((webinar) => {
    const matchesSearch = webinar.title.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "all" || webinar.category === selectedCategory
    return matchesSearch && matchesCategory
  })

  const benefits = [
    {
      icon: Users,
      title: "Insider Tips from Top Professionals",
      description: "Learn directly from industry experts and experienced mentors",
    },
    {
      icon: BookOpen,
      title: "Hands-on Demonstrations",
      description: "Practical sessions on latest tools & frameworks",
    },
    {
      icon: Play,
      title: "Access to Past Recordings",
      description: "Watch recorded webinars anytime at your convenience",
    },
    {
      icon: MessageSquare,
      title: "Interactive Q&A Sessions",
      description: "Get your questions answered by experts in real-time",
    },
  ]

  const handleRegisterClick = (webinar: Webinar) => {
    setSelectedWebinar(webinar)
    setShowRegistrationModal(true)
    setIsSubmitted(false)
    setFormData({ name: "", email: "", phone: "", domain: "" })
  }

  const handleCloseModal = () => {
    setShowRegistrationModal(false)
    setSelectedWebinar(null)
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
      // Optionally show success toast here
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



  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      <Navbar />
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="/placeholder.svg?height=600&width=1920&text=Webinar+Background"
            alt="Webinars Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-tz-dark-navy/95 via-tz-medium-blue/90 to-tz-dark-navy/95"></div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-tz-bright-orange/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-tz-light-blue/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="container-modern relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center text-white"
          >
            <Badge className="mb-6 bg-tz-bright-orange/20 text-tz-bright-orange border-tz-bright-orange/30 px-6 py-2 text-sm">
              Learn from Industry Experts
            </Badge>

            <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-tz-cream to-white bg-clip-text text-transparent">
              Free Webinars & Expert Workshops
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-white/90 leading-relaxed">
              At TechZnanie Innoversity, learning doesn't stop in the classroom. Our free webinars and hands-on
              workshops bring industry experts, real-world case studies, and trending topics directly to you — live and
              interactive.
            </p>

            <a href="#webinars">
            <Button className="btn-primary text-lg px-8 py-6 group">
              Register for Upcoming Webinar
              <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-white">
        <div className="container-modern">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What You'll Get</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Join thousands of learners who are upgrading their skills with our expert-led sessions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-gradient-to-br from-white to-gray-50 p-6 rounded-2xl border border-gray-200 hover:border-tz-bright-orange/50 hover:shadow-xl transition-all duration-300"
              >
                <div className="w-14 h-14 bg-gradient-to-br from-tz-bright-orange to-tz-dark-orange rounded-xl flex items-center justify-center mb-4">
                  <benefit.icon className="w-7 h-7 text-white" />
                </div>
                <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                <p className="text-gray-600">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Upcoming Webinars Section */}
      <section id="webinars" className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container-modern">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Upcoming Webinars</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Register now and secure your spot in our upcoming expert-led sessions
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {upcomingWebinars.map((webinar, index) => (
              <motion.div
                key={webinar.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl border border-gray-200 overflow-hidden hover:shadow-2xl transition-all duration-300 group"
              >
                <div className="p-8">
                  <div className="flex items-start justify-between mb-4">
                    <Badge className="bg-tz-bright-orange/10 text-tz-bright-orange border-tz-bright-orange/20">
                      {webinar.category}
                    </Badge>
                    <Badge className="bg-green-50 text-green-600 border-green-200">Upcoming</Badge>
                  </div>

                  <h3 className="text-2xl font-bold mb-4 group-hover:text-tz-bright-orange transition-colors">
                    {webinar.title}
                  </h3>

                  <div className="flex items-center space-x-6 mb-4 text-gray-600">
                    <div className="flex items-center space-x-2">
                      <Calendar className="w-4 h-4" />
                      <span className="text-sm">{webinar.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span className="text-sm">{webinar.time}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Users className="w-4 h-4" />
                      <span className="text-sm">{webinar.attendees} registered</span>
                    </div>
                  </div>

                  <p className="text-gray-600 mb-6">{webinar.description}</p>

                  <div className="flex items-center space-x-4 mb-6 pb-6 border-b border-gray-200">
                    <img
                      src={webinar.speaker.image || "/placeholder.svg"}
                      alt={webinar.speaker.name}
                      className="w-16 h-16 rounded-full object-cover"
                    />
                    <div className="flex-1">
                      <p className="font-bold text-lg">{webinar.speaker.name}</p>
                      <p className="text-sm text-gray-600">{webinar.speaker.designation}</p>
                    </div>
                    <a
                      href={webinar.speaker.linkedin}
                      className="w-10 h-10 bg-blue-50 rounded-full flex items-center justify-center hover:bg-blue-100 transition-colors"
                    >
                      <Linkedin className="w-5 h-5 text-blue-600" />
                    </a>
                  </div>

                  <Button onClick={() => handleRegisterClick(webinar)} className="w-full btn-primary group/btn">
                    Register Now
                    <ChevronRight className="ml-2 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Past Webinars Section */}
      <section className="py-20 bg-gradient-to-b from-white to-gray-50">
        <div className="container-modern">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Past Webinars Library</h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Catch up anytime! Access our recorded webinars across various categories
            </p>
          </motion.div>

          {/* Search and Filter */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row gap-4 mb-8"
          >
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <Input
                type="text"
                placeholder="Search webinars..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 py-6 text-lg border-gray-300 focus:border-tz-bright-orange"
              />
            </div>
            <div className="relative md:w-64">
              <Filter className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <select
                value={selectedCategory}
                onChange={(e) => setSelectedCategory(e.target.value)}
                className="w-full pl-12 pr-4 py-6 text-lg border border-gray-300 rounded-xl focus:outline-none focus:border-tz-bright-orange appearance-none bg-white"
              >
                {categories.map((category) => (
                  <option key={category} value={category}>
                    {category === "all" ? "All Categories" : category}
                  </option>
                ))}
              </select>
            </div>
          </motion.div>

          {/* Past Webinars Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredPastWebinars.map((webinar, index) => (
              <motion.div
                key={webinar.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 group"
              >
                <div className="relative">
                  <img
                    src={webinar.thumbnail || "/placeholder.svg"}
                    alt={webinar.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="w-16 h-16 bg-tz-bright-orange rounded-full flex items-center justify-center transform scale-0 group-hover:scale-100 transition-transform duration-300">
                      {webinar.isPremium ? (
                        <Lock className="w-8 h-8 text-white" />
                      ) : (
                        <Play className="w-8 h-8 text-white" />
                      )}
                    </div>
                  </div>
                  <div className="absolute top-3 right-3">
                    <Badge
                      className={
                        webinar.isPremium ? "bg-yellow-500 text-white border-0" : "bg-green-500 text-white border-0"
                      }
                    >
                      {webinar.isPremium ? "Premium" : "Free"}
                    </Badge>
                  </div>
                  <div className="absolute bottom-3 left-3">
                    <Badge className="bg-black/70 text-white border-0">{webinar.duration}</Badge>
                  </div>
                </div>

                <div className="p-4">
                  <Badge className="mb-2 bg-tz-bright-orange/10 text-tz-bright-orange border-tz-bright-orange/20 text-xs">
                    {webinar.category}
                  </Badge>
                  <h3 className="text-lg font-bold mb-2 group-hover:text-tz-bright-orange transition-colors line-clamp-2">
                    {webinar.title}
                  </h3>
                  <p className="text-sm text-gray-600 mb-3">{webinar.speaker}</p>

                  <div className="flex items-center justify-between text-sm text-gray-500 mb-3">
                    <div className="flex items-center space-x-1">
                      <Eye className="w-4 h-4" />
                      <span>{webinar.views.toLocaleString()} views</span>
                    </div>
                    <span>{webinar.date}</span>
                  </div>

                  <Link href={webinar.link}>
                  <Button
                    className={
                      webinar.isPremium ? "w-full bg-yellow-500 hover:bg-yellow-600 text-white" : "w-full btn-primary"
                    }
                  >
                    {webinar.isPremium ? (
                      <>
                        <Lock className="mr-2 w-4 h-4" />
                        Access Premium
                      </>
                    ) : (
                      <>
                        <Play className="mr-2 w-4 h-4" />
                        Watch Free
                      </>
                    )}
                  </Button>
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          {filteredPastWebinars.length === 0 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-12">
              <p className="text-gray-500 text-lg">No webinars found. Try adjusting your search or filters.</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section with Certificates */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/placeholder.svg?height=600&width=1920&text=Certificate+Background"
            alt="Certificate Background"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-tz-dark-navy/95 to-tz-medium-blue/90"></div>
        </div>

        <div className="container-modern relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center text-white"
          >
            <div className="inline-block p-4 bg-tz-bright-orange/20 rounded-2xl mb-6">
              <Award className="w-16 h-16 text-tz-bright-orange" />
            </div>

            <h2 className="text-3xl md:text-5xl font-bold mb-6">Get Certified for Your Participation</h2>

            <p className="text-xl mb-8 text-white/90 leading-relaxed">
              Attend our webinars and receive an official Certificate of Participation. Showcase your commitment to
              continuous learning and add it to your resume or LinkedIn profile.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://lms.techznanieinnoversity.com/">
              <Button className="bg-white text-tz-dark-navy hover:bg-gray-100 text-lg px-8 py-6">
                Enroll Now
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
        <div className="container-modern">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-5xl font-bold mb-6">Ready to Start Learning?</h2>
            <p className="text-xl text-gray-600 mb-8">
              Join thousands of professionals who are advancing their careers with TechZnanie Innoversity
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#webinars">
              <Button className="btn-primary text-lg px-8 py-6">
                Register for Next Webinar
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
              </a>
              <Button asChild variant="outline" className="text-lg px-8 py-6 border-2 bg-transparent">
                <Link href="/contact">Contact Us</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

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
                  {/* Modal Header */}
                  <div className="bg-gradient-to-br from-tz-bright-orange to-tz-dark-orange p-6 text-white relative">
                    <button
                      onClick={handleCloseModal}
                      className="absolute top-4 right-4 w-8 h-8 bg-white/20 rounded-full flex items-center justify-center hover:bg-white/30 transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                    <h3 className="text-2xl font-bold mb-2">Register for Webinar</h3>
                    <p className="text-white/90 text-sm">{selectedWebinar?.title}</p>
                  </div>

                  {/* Modal Body */}
                  <form onSubmit={handleSubmit} className="p-6 space-y-4">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                        Full Name *
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-tz-bright-orange focus:border-transparent"
                          placeholder="Enter your full name"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-tz-bright-orange focus:border-transparent"
                          placeholder="your.email@example.com"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                        Phone Number *
                      </label>
                      <div className="relative">
                        <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleInputChange}
                          required
                          className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-tz-bright-orange focus:border-transparent"
                          placeholder="+91 98765 43210"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="domain" className="block text-sm font-medium text-gray-700 mb-2">
                        Domain of Interest *
                      </label>
                      <select
                        id="domain"
                        name="domain"
                        value={formData.domain}
                        onChange={handleInputChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-tz-bright-orange focus:border-transparent"
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

                    <div className="flex items-start space-x-2 pt-2">
                      <input
                        type="checkbox"
                        id="updates"
                        className="mt-1 w-4 h-4 text-tz-bright-orange border-gray-300 rounded focus:ring-tz-bright-orange"
                      />
                      <label htmlFor="updates" className="text-sm text-gray-600">
                        I agree to receive updates about upcoming webinars and courses from TechZnanie Innoversity
                      </label>
                    </div>

                    <Button type="submit" disabled={isSubmitting} className="w-full btn-primary text-lg py-3 mt-6">
                      {isSubmitting ? (
                        <span className="flex items-center justify-center">
                          <svg
                            className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                            ></path>
                          </svg>
                          Registering...
                        </span>
                      ) : (
                        "Complete Registration"
                      )}
                    </Button>
                  </form>
                </>
              ) : (
                <div className="p-8 text-center">
                  <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle className="w-12 h-12 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-bold mb-2 text-gray-900">Registration Successful!</h3>
                  <p className="text-gray-600 mb-4">
                    You've successfully registered for <strong>{selectedWebinar?.title}</strong>
                  </p>
                  <p className="text-sm text-gray-500 mb-6">
                    We will share confirmation email with the webinar details and joining link to{" "}
                    <strong>{formData.email}</strong>
                  </p>
                  <Button onClick={handleCloseModal} className="btn-primary">
                    Close
                  </Button>
                </div>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
      <Footer />
    </div>
  )
}
