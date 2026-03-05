"use client"

import { motion } from "framer-motion"
import {
  Download,
  TrendingUp,
  Users,
  Target,
  BarChart3,
  ArrowRight,
  CheckCircle2,
  Calendar,
  FileText,
  Lock,
  Award,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useState } from "react"
import Link from "next/link"
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function SalaryReportsPage() {
  const [showDownloadModal, setShowDownloadModal] = useState(false)
  const [selectedReport, setSelectedReport] = useState<any>(null)
  const [filter, setFilter] = useState("all")

  const handleDownload = (report: any) => {
    setSelectedReport(report)
    setShowDownloadModal(true)
  }

  const reports = [
    {
      id: 1,
      title: "2025 India Tech Salary Report",
      subtitle: "Fresh Graduates Edition",
      description:
        "Comprehensive salary benchmarks, industry trends, and regional breakdowns for fresh engineering graduates across India.",
      type: "yearly",
      pages: 28,
      downloads: 12500,
      date: "January 2025",
      isPremium: false,
      cover: "/placeholder.svg?height=400&width=300&text=2025+Salary+Report",
      highlights: [
        "Salary data from 500+ companies",
        "Tier-II & Tier-III city focus",
        "Domain-wise breakdowns",
        "Skill demand analysis",
      ],
    },
    {
      id: 2,
      title: "Hyderabad & Telangana IT Hiring Trends",
      subtitle: "Regional Market Report 2025",
      description:
        "In-depth analysis of tech hiring patterns, salary ranges, and growth opportunities specific to Hyderabad and Telangana region.",
      type: "yearly",
      pages: 22,
      downloads: 8300,
      date: "January 2025",
      isPremium: false,
      cover: "/placeholder.svg?height=400&width=300&text=Telangana+Report",
      highlights: ["Regional salary insights", "Top hiring companies", "Growth projections", "Local skill demands"],
    },
    {
      id: 3,
      title: "Q4 2025: Top Tech Roles",
      subtitle: "Quarterly Trends Snapshot",
      description:
        "Latest quarterly update on the most in-demand tech roles, emerging skills, and hiring patterns across India.",
      type: "quarterly",
      pages: 8,
      downloads: 15200,
      date: "October 2025",
      isPremium: false,
      cover: "/placeholder.svg?height=400&width=300&text=Q4+Trends",
      highlights: ["Hot roles this quarter", "Emerging technologies", "Quick insights", "Actionable data"],
    },
    {
      id: 4,
      title: "Engineering Graduates Salary Guide",
      subtitle: "Core vs Software Comparison",
      description:
        "Detailed comparison of career prospects and salary ranges between core engineering and software engineering roles.",
      type: "yearly",
      pages: 25,
      downloads: 9800,
      date: "December 2024",
      isPremium: false,
      cover: "/placeholder.svg?height=400&width=300&text=Core+vs+Software",
      highlights: ["Career path comparison", "Switching opportunities", "Skill gap analysis", "Future projections"],
    },
    {
      id: 5,
      title: "AI & ML Career Landscape 2025",
      subtitle: "Specialized Domain Report",
      description:
        "Exclusive report on AI/ML job market, required skills, salary ranges, and career growth opportunities in India.",
      type: "specialized",
      pages: 32,
      downloads: 6500,
      date: "February 2025",
      isPremium: true,
      cover: "/placeholder.svg?height=400&width=300&text=AI+ML+Report",
      highlights: ["AI/ML salary benchmarks", "Required certifications", "Company-wise analysis", "Career roadmaps"],
    },
    {
      id: 6,
      title: "Cloud & DevOps Salary Guide",
      subtitle: "High-Growth Career Report",
      description:
        "Comprehensive guide to cloud computing and DevOps careers, covering certifications, salary ranges, and job opportunities.",
      type: "specialized",
      pages: 26,
      downloads: 7200,
      date: "March 2025",
      isPremium: true,
      cover: "/placeholder.svg?height=400&width=300&text=Cloud+DevOps",
      highlights: ["Cloud platform comparison", "Certification ROI", "Remote work trends", "Global opportunities"],
    },
  ]

  const filteredReports = filter === "all" ? reports : reports.filter((r) => r.type === filter)

  const salaryData = [
    { domain: "Data Science / AI", salary: "8.5 LPA", color: "bg-purple-500" },
    { domain: "Cybersecurity", salary: "9.0 LPA", color: "bg-red-500" },
    { domain: "Cloud & DevOps", salary: "8.0 LPA", color: "bg-blue-500" },
    { domain: "Full Stack Dev", salary: "7.2 LPA", color: "bg-green-500" },
    { domain: "Embedded / IoT", salary: "5.5 LPA", color: "bg-yellow-500" },
    { domain: "Core Engineering", salary: "4.5 LPA", color: "bg-gray-500" },
  ]

  const skillDemand = [
    { skill: "Python & AI", percentage: 28, color: "bg-purple-500" },
    { skill: "Web (React/Node)", percentage: 22, color: "bg-blue-500" },
    { skill: "Cloud/DevOps", percentage: 18, color: "bg-cyan-500" },
    { skill: "Data Analytics", percentage: 15, color: "bg-green-500" },
    { skill: "Cybersecurity", percentage: 10, color: "bg-red-500" },
    { skill: "Embedded", percentage: 7, color: "bg-yellow-500" },
  ]

  const regionalData = [
    { domain: "Full Stack Development", india: "₹5.0 - 7.2 LPA", telangana: "₹4.5 - 6.5 LPA" },
    { domain: "Data Science / AI / ML", india: "₹6.0 - 8.5 LPA", telangana: "₹5.5 - 7.5 LPA" },
    { domain: "Cloud & DevOps", india: "₹6.2 - 8.0 LPA", telangana: "₹5.8 - 7.2 LPA" },
    { domain: "Embedded Systems / IoT", india: "₹4.0 - 5.5 LPA", telangana: "₹3.8 - 5.0 LPA" },
    { domain: "Cybersecurity", india: "₹6.5 - 9.0 LPA", telangana: "₹5.8 - 8.0 LPA" },
    { domain: "Core Engineering", india: "₹3.2 - 4.5 LPA", telangana: "₹3.0 - 4.0 LPA" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-tz-dark-navy to-[#0D1B2A]">
        <Navbar />
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0">
          <img
            src="/placeholder.svg?height=800&width=1600&text=Salary+Data+Analytics"
            alt="Salary Reports"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-tz-dark-navy/90 via-tz-dark-navy/80 to-tz-dark-navy"></div>
        </div>

        {/* Floating Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              x: [0, 100, 0],
              y: [0, 50, 0],
              rotate: [0, 180, 360],
            }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="absolute top-20 left-10 w-64 h-64 bg-tz-bright-orange/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              x: [0, -100, 0],
              y: [0, -50, 0],
              rotate: [360, 180, 0],
            }}
            transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "linear" }}
            className="absolute bottom-20 right-10 w-96 h-96 bg-tz-medium-blue/10 rounded-full blur-3xl"
          />
        </div>

        <div className="container-modern relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <motion.div
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className="inline-flex items-center space-x-2 bg-tz-bright-orange/20 border border-tz-bright-orange/30 rounded-full px-6 py-2 mb-6"
            >
              <TrendingUp className="w-5 h-5 text-tz-bright-orange" />
              <span className="text-tz-cream font-semibold">2025 Industry Insights</span>
            </motion.div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Salary Reports &<br />
              <span className="text-gradient">Industry Trends</span>
            </h1>

            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Stay updated with the latest salary benchmarks, industry hiring trends, and in-demand skills across India
              and especially Tier-II & Tier-III regions.
            </p>

            <div className="flex flex-wrap justify-center gap-6 mb-12">
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 min-w-[200px]"
              >
                <Users className="w-8 h-8 text-tz-bright-orange mx-auto mb-2" />
                <div className="text-3xl font-bold text-white mb-1">50K+</div>
                <div className="text-white/70 text-sm">Report Downloads</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 min-w-[200px]"
              >
                <Target className="w-8 h-8 text-tz-bright-orange mx-auto mb-2" />
                <div className="text-3xl font-bold text-white mb-1">500+</div>
                <div className="text-white/70 text-sm">Companies Analyzed</div>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6 min-w-[200px]"
              >
                <BarChart3 className="w-8 h-8 text-tz-bright-orange mx-auto mb-2" />
                <div className="text-3xl font-bold text-white mb-1">15+</div>
                <div className="text-white/70 text-sm">Domains Covered</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Key Insights Section */}
      <section className="py-20 relative">
        <div className="container-modern">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Average Fresher Salaries 2025</h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto">
              Based on data from 500+ companies across India and Telangana region
            </p>
          </motion.div>

          {/* Salary Bar Chart */}
          <div className="max-w-4xl mx-auto mb-16">
            {salaryData.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="mb-6"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-white font-semibold">{item.domain}</span>
                  <span className="text-tz-cream font-bold">{item.salary}</span>
                </div>
                <div className="w-full bg-white/10 rounded-full h-8 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${(Number.parseFloat(item.salary) / 9.0) * 100}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className={`${item.color} h-full rounded-full flex items-center justify-end pr-3`}
                  >
                    <span className="text-white text-sm font-semibold">{item.salary}</span>
                  </motion.div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Regional Comparison Table */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="mb-16"
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">Regional Salary Comparison</h3>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-tz-bright-orange/20 border-b border-white/10">
                      <th className="text-left p-6 text-white font-bold">Domain</th>
                      <th className="text-left p-6 text-white font-bold">India Average</th>
                      <th className="text-left p-6 text-white font-bold">Telangana Average</th>
                    </tr>
                  </thead>
                  <tbody>
                    {regionalData.map((row, index) => (
                      <motion.tr
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.5, delay: index * 0.1 }}
                        className="border-b border-white/5 hover:bg-white/5 transition-colors"
                      >
                        <td className="p-6 text-white/90">{row.domain}</td>
                        <td className="p-6 text-tz-cream font-semibold">{row.india}</td>
                        <td className="p-6 text-tz-cream font-semibold">{row.telangana}</td>
                      </motion.tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </motion.div>

          {/* Skill Demand Chart */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-8 text-center">Top In-Demand Skills 2025</h3>
            <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
              <div className="space-y-4">
                {skillDemand.map((item, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-white font-semibold">{item.skill}</span>
                      <span className="text-tz-cream font-bold">{item.percentage}%</span>
                    </div>
                    <div className="w-full bg-white/10 rounded-full h-6 overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.1 }}
                        className={`${item.color} h-full rounded-full`}
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
              <div className="flex items-center justify-center">
                <div className="relative w-64 h-64">
                  <svg viewBox="0 0 100 100" className="transform -rotate-90">
                    {skillDemand.map((item, index) => {
                      const previousPercentage = skillDemand
                        .slice(0, index)
                        .reduce((acc, curr) => acc + curr.percentage, 0)
                      const circumference = 2 * Math.PI * 40
                      const offset = (previousPercentage / 100) * circumference
                      const dashArray = (item.percentage / 100) * circumference

                      return (
                        <motion.circle
                          key={index}
                          cx="50"
                          cy="50"
                          r="40"
                          fill="none"
                          stroke={item.color.replace("bg-", "")}
                          strokeWidth="20"
                          strokeDasharray={`${dashArray} ${circumference}`}
                          strokeDashoffset={-offset}
                          initial={{ strokeDasharray: `0 ${circumference}` }}
                          whileInView={{ strokeDasharray: `${dashArray} ${circumference}` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: index * 0.1 }}
                          className={
                            item.color.includes("purple")
                              ? "stroke-purple-500"
                              : item.color.includes("blue")
                                ? "stroke-blue-500"
                                : item.color.includes("cyan")
                                  ? "stroke-cyan-500"
                                  : item.color.includes("green")
                                    ? "stroke-green-500"
                                    : item.color.includes("red")
                                      ? "stroke-red-500"
                                      : "stroke-yellow-500"
                          }
                        />
                      )
                    })}
                  </svg>
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center">
                      <div className="text-3xl font-bold text-white">100%</div>
                      <div className="text-white/70 text-sm">Job Market</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Reports Library Section */}
      <section className="py-20 relative">
        <div className="container-modern">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Download Detailed Reports</h2>
            <p className="text-white/70 text-lg max-w-2xl mx-auto mb-8">
              Access comprehensive salary reports, quarterly trends, and specialized domain insights
            </p>

            {/* Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4">
              {["all", "yearly", "quarterly", "specialized"].map((filterType) => (
                <Button
                  key={filterType}
                  onClick={() => setFilter(filterType)}
                  variant={filter === filterType ? "default" : "outline"}
                  className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                    filter === filterType
                      ? "bg-tz-bright-orange hover:bg-tz-dark-orange text-white"
                      : "bg-white/10 hover:bg-white/20 text-white border-white/20"
                  }`}
                >
                  {filterType.charAt(0).toUpperCase() + filterType.slice(1)}
                </Button>
              ))}
            </div>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredReports.map((report, index) => (
              <motion.div
                key={report.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:border-tz-bright-orange/50 transition-all duration-300 h-full group">
                  <CardContent className="p-0">
                    {/* Report Cover */}
                    <div className="relative overflow-hidden rounded-t-xl">
                      <img
                        src={report.cover || "/placeholder.svg"}
                        alt={report.title}
                        className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-tz-dark-navy via-transparent to-transparent"></div>
                      {report.isPremium && (
                        <div className="absolute top-4 right-4 bg-tz-bright-orange text-white px-3 py-1 rounded-full text-xs font-bold flex items-center space-x-1">
                          <Lock className="w-3 h-3" />
                          <span>Premium</span>
                        </div>
                      )}
                      <div className="absolute bottom-4 left-4 right-4">
                        <div className="flex items-center space-x-2 text-white/90 text-sm">
                          <Calendar className="w-4 h-4" />
                          <span>{report.date}</span>
                          <span className="mx-2">•</span>
                          <FileText className="w-4 h-4" />
                          <span>{report.pages} pages</span>
                        </div>
                      </div>
                    </div>

                    {/* Report Content */}
                    <div className="p-6 space-y-4">
                      <div>
                        <h3 className="text-xl font-bold text-white mb-2 group-hover:text-tz-bright-orange transition-colors">
                          {report.title}
                        </h3>
                        <p className="text-tz-cream text-sm font-semibold mb-3">{report.subtitle}</p>
                        <p className="text-white/70 text-sm leading-relaxed">{report.description}</p>
                      </div>

                      {/* Highlights */}
                      <div className="space-y-2">
                        {report.highlights.map((highlight, idx) => (
                          <div key={idx} className="flex items-start space-x-2">
                            <CheckCircle2 className="w-4 h-4 text-tz-bright-orange flex-shrink-0 mt-0.5" />
                            <span className="text-white/80 text-sm">{highlight}</span>
                          </div>
                        ))}
                      </div>

                      {/* Stats */}
                      <div className="flex items-center justify-between pt-4 border-t border-white/10">
                        <div className="flex items-center space-x-2 text-white/60 text-sm">
                          <Download className="w-4 h-4" />
                          <span>{report.downloads.toLocaleString()} downloads</span>
                        </div>
                        <Button
                          onClick={() => handleDownload(report)}
                          className={`${
                            report.isPremium
                              ? "bg-gradient-to-r from-tz-bright-orange to-tz-dark-orange"
                              : "bg-tz-bright-orange hover:bg-tz-dark-orange"
                          } text-white font-semibold px-6 py-2 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105`}
                        >
                          {report.isPremium ? "Get Access" : "Download"}
                          <ArrowRight className="ml-2 w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Insight Section */}
      <section className="py-20 relative">
        <div className="container-modern">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <Card className="bg-[#0A0EEC] bg-gradient-to-br from-[#0D0B52] via-[#0E107A] to-[#0A0EEC] border border-[#1E1FFF]/30 text-white overflow-hidden rounded-2xl shadow-lg">

              <CardContent className="p-8 md:p-12">
                <div className="flex items-start space-x-4 mb-6">
                  <div className="w-12 h-12 bg-tz-bright-orange rounded-xl flex items-center justify-center flex-shrink-0">
                    <TrendingUp className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">Featured Insight</h3>
                    <p className="text-white/80 text-lg leading-relaxed">
                      "In Telangana, Full Stack Developers with cloud exposure earn{" "}
                      <span className="text-tz-cream font-bold">₹6.5 LPA</span> on average, compared to{" "}
                      <span className="text-tz-cream font-bold">₹5.2 LPA</span> nationally."
                    </p>
                  </div>
                </div>
                <div className="flex flex-wrap gap-4">
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-2">
                    <div className="text-tz-cream font-bold text-lg">25%</div>
                    <div className="text-white/70 text-sm">Higher than national avg</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-2">
                    <div className="text-tz-cream font-bold text-lg">14%</div>
                    <div className="text-white/70 text-sm">YoY growth in Hyderabad</div>
                  </div>
                  <div className="bg-white/10 backdrop-blur-sm rounded-xl px-4 py-2">
                    <div className="text-tz-cream font-bold text-lg">Top 3</div>
                    <div className="text-white/70 text-sm">City for tech hiring</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-tz-bright-orange/10 to-tz-medium-blue/10"></div>
        <div className="container-modern relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-3xl mx-auto"
          >
            <Award className="w-16 h-16 text-tz-bright-orange mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Want to Earn in This Range?</h2>
            <p className="text-white/80 text-lg mb-8">
              Explore our industry-aligned bootcamps and certification programs designed to help you land high-paying
              tech jobs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                className="bg-tz-bright-orange hover:bg-tz-dark-orange text-white font-semibold px-8 py-6 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                <Link href="/course/computer-science">
                  Explore Bootcamps
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="bg-white/10 hover:bg-white/20 text-white border-white/20 font-semibold px-8 py-6 rounded-xl transition-all duration-300"
              >
                <Link href="7207276622">Talk to Career Advisor</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Download Modal */}
      {showDownloadModal && selectedReport && (
        <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-tz-dark-navy border border-white/20 rounded-2xl max-w-md w-full p-8 relative"
          >
            <button
              onClick={() => setShowDownloadModal(false)}
              className="absolute top-4 right-4 text-white/60 hover:text-white transition-colors"
            >
              ✕
            </button>

            <div className="text-center mb-6">
              <div className="w-16 h-16 bg-tz-bright-orange/20 rounded-2xl flex items-center justify-center mx-auto mb-4">
                {selectedReport.isPremium ? (
                  <Lock className="w-8 h-8 text-tz-bright-orange" />
                ) : (
                  <Download className="w-8 h-8 text-tz-bright-orange" />
                )}
              </div>
              <h3 className="text-2xl font-bold text-white mb-2">
                {selectedReport.isPremium ? "Premium Content" : "Download Report"}
              </h3>
              <p className="text-white/70">
                {selectedReport.isPremium
                  ? "This report is available to enrolled students"
                  : "Enter your details to download the full report"}
              </p>
            </div>

            {selectedReport.isPremium ? (
              <div className="space-y-4">
                <div className="bg-white/5 border border-white/10 rounded-xl p-4">
                  <p className="text-white/80 text-sm leading-relaxed">
                    Premium reports include in-depth analysis, company-wise breakdowns, and exclusive career insights.
                    Enroll in any TechZnanie program to get full access.
                  </p>
                </div>
                <Button
                  asChild
                  className="w-full bg-tz-bright-orange hover:bg-tz-dark-orange text-white font-semibold py-3 rounded-xl"
                >
                  <Link href="/contact">Enroll Now</Link>
                </Button>
              </div>
            ) : (
              <form className="space-y-4">
                <div>
                  <Label htmlFor="name" className="text-white mb-2 block">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    placeholder="Enter your name"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-white mb-2 block">
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-white mb-2 block">
                    Phone Number
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    className="bg-white/10 border-white/20 text-white placeholder:text-white/50"
                  />
                </div>
                <Button
                  type="submit"
                  className="w-full bg-tz-bright-orange hover:bg-tz-dark-orange text-white font-semibold py-3 rounded-xl"
                >
                  Download Report
                  <Download className="ml-2 w-4 h-4" />
                </Button>
              </form>
            )}
          </motion.div>
        </div>
      )}
      <Footer />
    </div>
  )
}
