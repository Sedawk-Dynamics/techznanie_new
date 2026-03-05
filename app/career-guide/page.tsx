"use client"

import { motion } from "framer-motion"
import {
  BookOpen,
  Download,
  TrendingUp,
  Users,
  FileText,
  Lock,
  CheckCircle,
  ArrowRight,
  Star,
  Code,
  Database,
  Cpu,
  BarChart,
  Briefcase,
  GraduationCap,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";

export default function CareerGuidePage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [showDownloadModal, setShowDownloadModal] = useState(false)
  const [selectedGuide, setSelectedGuide] = useState<any>(null)

  const categories = [
    { id: "all", name: "All Resources", icon: BookOpen },
    { id: "career-guides", name: "Career Guides", icon: Briefcase },
    { id: "ebooks", name: "E-Books", icon: FileText },
    { id: "whitepapers", name: "Whitepapers", icon: TrendingUp },
  ]

  const guides = [
    {
      id: 1,
      title: "Roadmap to Full Stack Developer (2025 Edition)",
      description:
        "Your comprehensive 6-month journey to becoming a job-ready full stack engineer. Learn HTML, CSS, JavaScript, React, Node.js, databases, and deployment.",
      category: "career-guides",
      type: "Career Guide",
      pages: 18,
      downloads: 2847,
      rating: 4.8,
      isPremium: false,
      color: "from-blue-500 to-cyan-500",
      icon: Code,
      features: ["6-month learning roadmap", "5 must-do projects", "Resume & interview tips", "Salary insights 2025"],
    },
    {
      id: 2,
      title: "Guide to Transitioning into Data Science",
      description:
        "Perfect for non-CS backgrounds! Learn Python, SQL, ML basics, and statistics. Includes real-life transition stories and certification recommendations.",
      category: "career-guides",
      type: "Career Guide",
      pages: 22,
      downloads: 1923,
      rating: 4.9,
      isPremium: false,
      color: "from-purple-500 to-pink-500",
      icon: Database,
      features: [
        "Skills for non-CS graduates",
        "Free & paid tools guide",
        "Project portfolio ideas",
        "Certification roadmap",
      ],
    },
    {
      id: 3,
      title: "Embedded Systems Career Pathway",
      description:
        "Explore careers in automotive, IoT, and electronics. Master C, C++, MATLAB, and microcontrollers with hands-on project ideas.",
      category: "career-guides",
      type: "Career Guide",
      pages: 16,
      downloads: 1456,
      rating: 4.7,
      isPremium: false,
      color: "from-green-500 to-teal-500",
      icon: Cpu,
      features: [
        "Industry-specific skills",
        "Arduino project ideas",
        "EV & IoT opportunities",
        "Placement preparation",
      ],
    },
    {
      id: 4,
      title: "AI for Everyone: Practical Use Cases in 2025",
      description:
        "A comprehensive 60-page e-book covering AI applications across industries, real-world case studies, and hands-on implementation guides.",
      category: "ebooks",
      type: "E-Book",
      pages: 60,
      downloads: 3421,
      rating: 4.9,
      isPremium: true,
      color: "from-orange-500 to-red-500",
      icon: TrendingUp,
      features: [
        "40+ real-world use cases",
        "Industry applications",
        "Implementation guides",
        "Future trends analysis",
      ],
    },
    {
      id: 5,
      title: "Cracking Campus Placements – The Insider's Playbook",
      description:
        "Everything you need to ace campus interviews: resume templates, coding challenges, HR questions, and negotiation tactics.",
      category: "ebooks",
      type: "E-Book",
      pages: 45,
      downloads: 4123,
      rating: 4.8,
      isPremium: true,
      color: "from-yellow-500 to-orange-500",
      icon: GraduationCap,
      features: ["Resume templates", "200+ interview questions", "Coding challenge prep", "Salary negotiation tips"],
    },
    {
      id: 6,
      title: "Agile Project Management for Engineering Graduates",
      description:
        "Master Agile methodologies, Scrum frameworks, and project management tools essential for modern software development teams.",
      category: "ebooks",
      type: "E-Book",
      pages: 52,
      downloads: 2156,
      rating: 4.7,
      isPremium: true,
      color: "from-indigo-500 to-purple-500",
      icon: Briefcase,
      features: ["Agile & Scrum basics", "Tool mastery guide", "Team collaboration tips", "Real project examples"],
    },
    {
      id: 7,
      title: "Bridging the Education-to-Employment Gap in Tier-II & III India",
      description:
        "A research-driven whitepaper analyzing employability challenges and solutions for students from emerging cities across India.",
      category: "whitepapers",
      type: "Whitepaper",
      pages: 38,
      downloads: 1245,
      rating: 4.9,
      isPremium: true,
      color: "from-cyan-500 to-blue-500",
      icon: BarChart,
      features: ["Data-driven insights", "Regional analysis", "Solution frameworks", "Industry benchmarks"],
    },
    {
      id: 8,
      title: "Employability Trends 2025: What Recruiters Want",
      description:
        "Comprehensive analysis of top skills, salary trends, and recruiter expectations based on surveys with 500+ hiring managers.",
      category: "whitepapers",
      type: "Whitepaper",
      pages: 42,
      downloads: 1876,
      rating: 4.8,
      isPremium: true,
      color: "from-pink-500 to-rose-500",
      icon: TrendingUp,
      features: ["2025 salary insights", "Top 20 in-demand skills", "Recruiter interviews", "Regional comparisons"],
    },
    {
      id: 9,
      title: "AI-Driven Bootcamps: The Future of Skilling",
      description:
        "Explore how AI-powered learning is transforming education in emerging economies with case studies and implementation strategies.",
      category: "whitepapers",
      type: "Whitepaper",
      pages: 35,
      downloads: 967,
      rating: 4.7,
      isPremium: true,
      color: "from-violet-500 to-purple-500",
      icon: TrendingUp,
      features: ["AI in education", "Global case studies", "ROI analysis", "Implementation roadmap"],
    },
  ]

  const benefits = [
    {
      icon: BookOpen,
      title: "Expert-Crafted Content",
      description: "Created by industry professionals and career coaches with 10+ years of experience",
    },
    {
      icon: TrendingUp,
      title: "Always Up-to-Date",
      description: "Regular updates to reflect the latest industry trends and market demands",
    },
    {
      icon: Users,
      title: "Real Success Stories",
      description: "Learn from actual career transitions and placement successes of our students",
    },
    {
      icon: CheckCircle,
      title: "Actionable Roadmaps",
      description: "Step-by-step guidance with timelines, milestones, and practical project ideas",
    },
  ]

  const filteredGuides = selectedCategory === "all" ? guides : guides.filter((g) => g.category === selectedCategory)

  const handleDownload = (guide: any) => {
    setSelectedGuide(guide)
    setShowDownloadModal(true)
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <Navbar />
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-r from-tz-dark-navy/95 to-tz-medium-blue/90 z-10"></div>
          <img
            src="/placeholder.svg?height=600&width=1920&text=Career+Success+Path"
            alt="Career Guide Background"
            className="w-full h-full object-cover"
          />
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-64 h-64 bg-tz-bright-orange/10 rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-tz-light-blue/10 rounded-full blur-3xl animate-float delay-1000"></div>
        </div>

        <div className="container-modern relative z-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center text-white"
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center justify-center w-20 h-20 bg-tz-bright-orange rounded-2xl mb-6"
            >
              <BookOpen className="w-10 h-10 text-white" />
            </motion.div>

            <h1 className="text-5xl md:text-6xl font-bold mb-6">Career Guides, E-Books & Whitepapers</h1>

            <p className="text-xl text-white/90 mb-8 leading-relaxed">
              Stay ahead in your career with our expertly crafted guides, in-depth e-books, and industry whitepapers.
              Whether you are just starting out or transitioning into a new domain, these resources are designed to give
              you clarity, direction, and confidence.
            </p>

            <div className="flex flex-wrap justify-center gap-4 mb-8">
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <Download className="w-5 h-5 text-tz-bright-orange" />
                <span className="font-semibold">15,000+ Downloads</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <Star className="w-5 h-5 text-yellow-400 fill-current" />
                <span className="font-semibold">4.8 Average Rating</span>
              </div>
              <div className="flex items-center space-x-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-lg">
                <Users className="w-5 h-5 text-tz-bright-orange" />
                <span className="font-semibold">500+ Success Stories</span>
              </div>
            </div>

            <a href="#explore">
            <Button
              size="lg"
              className="bg-tz-bright-orange hover:bg-tz-dark-orange text-white px-8 py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Explore Free Guides
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-white">
        <div className="container-modern">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold mb-4">Why Our Career Resources Stand Out</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Trusted by thousands of students and professionals for career guidance that actually works
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-tz-bright-orange">
                  <CardContent className="p-6 text-center">
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-tz-bright-orange to-tz-dark-orange rounded-2xl mb-4">
                      <benefit.icon className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">{benefit.title}</h3>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 bg-gray-50">
        <div className="container-modern">
          <div className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSelectedCategory(category.id)}
                className={`flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  selectedCategory === category.id
                    ? "bg-gradient-to-r from-tz-bright-orange to-tz-dark-orange text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-100"
                }`}
              >
                <category.icon className="w-5 h-5" />
                <span>{category.name}</span>
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* Guides Grid */}
      <section id="explore" className="section-padding">
        <div className="container-modern">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredGuides.map((guide, index) => (
              <motion.div
                key={guide.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-300 overflow-hidden group">
                  {/* Card Header with Gradient */}
                  <div className={`h-48 bg-gradient-to-br ${guide.color} relative overflow-hidden`}>
                    <div className="absolute inset-0 bg-black/20"></div>
                    <div className="absolute inset-0 flex items-center justify-center">
                      <guide.icon className="w-24 h-24 text-white/90" />
                    </div>
                    {guide.isPremium && (
                      <Badge className="absolute top-4 right-4 bg-yellow-500 text-black font-bold">
                        <Lock className="w-3 h-3 mr-1" />
                        Premium
                      </Badge>
                    )}
                    <Badge className="absolute top-4 left-4 bg-white/90 text-gray-900">{guide.type}</Badge>
                  </div>

                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-gray-500">{guide.pages} Pages</span>
                      <div className="flex items-center space-x-1">
                        <Star className="w-4 h-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-semibold">{guide.rating}</span>
                      </div>
                    </div>

                    <h3 className="text-xl font-bold mb-3 group-hover:text-tz-bright-orange transition-colors">
                      {guide.title}
                    </h3>

                    <p className="text-gray-600 mb-4 line-clamp-3">{guide.description}</p>

                    <div className="space-y-2 mb-4">
                      {guide.features.map((feature, idx) => (
                        <div key={idx} className="flex items-center space-x-2 text-sm text-gray-600">
                          <CheckCircle className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span>{feature}</span>
                        </div>
                      ))}
                    </div>

                    <div className="flex items-center justify-between pt-4 border-t">
                      <span className="text-sm text-gray-500 flex items-center space-x-1">
                        <Download className="w-4 h-4" />
                        <span>{guide.downloads.toLocaleString()} downloads</span>
                      </span>
                      <Button
                        onClick={() => handleDownload(guide)}
                        className={
                          guide.isPremium
                            ? "bg-gradient-to-r from-yellow-500 to-orange-500 hover:from-yellow-600 hover:to-orange-600 text-white"
                            : "bg-gradient-to-r from-tz-bright-orange to-tz-dark-orange hover:from-tz-dark-orange hover:to-tz-bright-orange text-white"
                        }
                      >
                        {guide.isPremium ? "Get Premium" : "Download Free"}
                        <Download className="ml-2 w-4 h-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-tz-dark-navy to-tz-medium-blue text-white relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-tz-bright-orange/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-tz-light-blue/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container-modern relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto text-center"
          >
            <h2 className="text-4xl font-bold mb-6">Want More Personalized Career Guidance?</h2>
            <p className="text-xl text-white/90 mb-8">
              Join our bootcamps and get 1-on-1 mentorship, live projects, and guaranteed placement support from
              industry experts.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="#explore">
              <Button
                size="lg"
                className="bg-tz-bright-orange hover:bg-tz-dark-orange text-white px-8 py-6 text-lg rounded-xl shadow-lg"
              >
                Explore Bootcamps
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              </a>
              <a href="+91-7207276622">
              <Button
                size="lg"
                variant="outline"
                className="bg-white text-tz-dark-navy hover:bg-gray-100 px-8 py-6 text-lg rounded-xl border-2"
              >
                Talk to Career Advisor
              </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Download Modal */}
      {showDownloadModal && selectedGuide && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-white rounded-2xl max-w-md w-full p-8 shadow-2xl"
          >
            <div className="text-center mb-6">
              <div
                className={`inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br ${selectedGuide.color} rounded-2xl mb-4`}
              >
                <selectedGuide.icon className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-bold mb-2">
                {selectedGuide.isPremium ? "Get Premium Access" : "Download Free Guide"}
              </h3>
              <p className="text-gray-600">{selectedGuide.title}</p>
            </div>

            <div className="space-y-4 mb-6">
              <Input type="text" placeholder="Full Name" className="form-input" />
              <Input type="email" placeholder="Email Address" className="form-input" />
              <Input type="tel" placeholder="Phone Number" className="form-input" />
              {selectedGuide.isPremium && (
                <div className="bg-yellow-50 border border-yellow-200 rounded-lg p-4 text-sm text-yellow-800">
                  <Lock className="w-4 h-4 inline mr-2" />
                  Premium content requires enrollment in our bootcamp programs.
                </div>
              )}
            </div>

            <div className="flex gap-4">
              <Button onClick={() => setShowDownloadModal(false)} variant="outline" className="flex-1">
                Cancel
              </Button>
              <Button className="flex-1 bg-gradient-to-r from-tz-bright-orange to-tz-dark-orange hover:from-tz-dark-orange hover:to-tz-bright-orange text-white">
                {selectedGuide.isPremium ? "Request Access" : "Download Now"}
                <Download className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      )}
      <Footer />
    </div>
  )
}
