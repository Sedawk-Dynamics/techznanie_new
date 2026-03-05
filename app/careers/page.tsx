"use client";

import { motion } from "framer-motion";
import {
  MapPin,
  Clock,
  Users,
  DollarSign,
  Heart,
  Zap,
  ArrowRight,
  Star,
  Building,
  Award,
  Coffee,
  Wifi,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";
import { useState } from "react";

const jobOpenings = [
  {
    id: 1,
    title: "Operations Manager",
    department: "Engineering",
    location: "Bangalore, India",
    type: "Full-time",
    experience: "3-5 years",
    salary: "₹12-18 LPA",
    description:
      "Join our engineering team to build cutting-edge educational technology platforms that impact thousands of students.",
    requirements: [
      "React.js, Node.js",
      "Cloud platforms (AWS/Azure)",
      "Database design",
      "Agile methodology",
    ],
    posted: "2 days ago",
    urgent: true,
    remote: false,
  },
  {
    id: 2,
    title: "Educational Content Designer",
    department: "Education",
    location: "Remote",
    type: "Full-time",
    experience: "2-4 years",
    salary: "₹8-12 LPA",
    description:
      "Create engaging educational content and curriculum for our diverse range of technical courses.",
    requirements: [
      "Instructional design",
      "Technical writing",
      "Video production",
      "Learning management systems",
    ],
    posted: "1 week ago",
    urgent: false,
    remote: true,
  },
  {
    id: 3,
    title: "Business Development Associate",
    department: "Design",
    location: "Hyderabad, India",
    type: "Full-time",
    experience: "2-3 years",
    salary: "₹6-10 LPA",
    description:
      "Design intuitive and beautiful user experiences for our educational platforms and mobile applications.",
    requirements: [
      "Figma/Sketch",
      "User research",
      "Prototyping",
      "Design systems",
    ],
    posted: "3 days ago",
    urgent: false,
    remote: false,
  },
  {
    id: 4,
    title: "Digital Marketing Specialist",
    department: "Marketing",
    location: "Mumbai, India",
    type: "Full-time",
    experience: "1-3 years",
    salary: "₹5-8 LPA",
    description:
      "Drive our digital marketing initiatives to reach and engage students across various online channels.",
    requirements: [
      "SEO/SEM",
      "Social media marketing",
      "Content marketing",
      "Analytics tools",
    ],
    posted: "5 days ago",
    urgent: true,
    remote: false,
  },
  {
    id: 5,
    title: "Student Success Manager",
    department: "Student Services",
    location: "Delhi, India",
    type: "Full-time",
    experience: "1-2 years",
    salary: "₹4-6 LPA",
    description:
      "Support student journey from enrollment to placement, ensuring high satisfaction and success rates.",
    requirements: [
      "Communication skills",
      "CRM systems",
      "Data analysis",
      "Student counseling",
    ],
    posted: "1 week ago",
    urgent: false,
    remote: false,
  },
  {
    id: 6,
    title: "DevOps Engineer",
    department: "Engineering",
    location: "Pune, India",
    type: "Full-time",
    experience: "3-5 years",
    salary: "₹10-15 LPA",
    description:
      "Manage and optimize our cloud infrastructure to ensure scalable and reliable educational services.",
    requirements: [
      "Docker/Kubernetes",
      "CI/CD pipelines",
      "AWS/Azure",
      "Monitoring tools",
    ],
    posted: "4 days ago",
    urgent: false,
    remote: false,
  },
];

const benefits = [
  {
    icon: Heart,
    title: "Health & Wellness",
    description: "Comprehensive health insurance and wellness programs",
    color: "bg-red-50 text-red-600",
  },
  {
    icon: Zap,
    title: "Learning & Development",
    description: "Continuous learning opportunities and skill development",
    color: "bg-yellow-50 text-yellow-600",
  },
  {
    icon: Users,
    title: "Work-Life Balance",
    description: "Flexible working hours and remote work options",
    color: "bg-blue-50 text-blue-600",
  },
  {
    icon: DollarSign,
    title: "Competitive Compensation",
    description: "Market-competitive salary with performance bonuses",
    color: "bg-green-50 text-green-600",
  },
  {
    icon: Coffee,
    title: "Great Workplace",
    description: "Modern office spaces with free meals and snacks",
    color: "bg-orange-50 text-orange-600",
  },
  {
    icon: Wifi,
    title: "Tech & Tools",
    description: "Latest technology and tools to help you succeed",
    color: "bg-purple-50 text-purple-600",
  },
];

const companyStats = [
  { number: "50+", label: "Team Members", icon: Users },
  { number: "1", label: "Office Location", icon: Building },
  { number: "4.8★", label: "Employee Rating", icon: Star },
  { number: "95%", label: "Retention Rate", icon: Award },
];

export default function CareersPage() {
  const [status, setStatus] = useState<"idle" | "success" | "error" | "loading">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = e.currentTarget;
    const formData = new FormData(form);

    setStatus("loading");

    try {
      const res = await fetch("/api/careers", {
        method: "POST",
        body: formData,
      });

      const result = await res.json();
      if (result.success) {
        setStatus("success");
        form.reset();
      } else {
        setStatus("error");
      }
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* Enhanced Hero Section with Backdrop Blur */}
      <section className="relative py-24 px-4 overflow-hidden">
        {/* Background Image with Blur */}
        <div className="absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1557425529-b1ae9c141e7d?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjN8fGNhcmVlcnxlbnwwfHwwfHx8MA%3D%3D"
            alt="Modern office workspace"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/90 via-black/50 to-black/90 backdrop-blur-[2px]"></div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {Array.from({ length: 8 }).map((_, index) => (
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

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              className="inline-block mb-6"
            >
              <Badge className="bg-tz-bright-orange text-white px-6 py-2 text-lg font-bold rounded-full">
                🚀 We're Hiring!
              </Badge>
            </motion.div>

            <motion.h1
              className="text-6xl lg:text-7xl font-bold text-white mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
              Join Our
              <motion.span
                className="text-tz-bright-orange block"
                animate={{
                  textShadow: [
                    "0 0 20px rgba(255, 165, 0, 0.5)",
                    "0 0 40px rgba(255, 165, 0, 0.8)",
                    "0 0 20px rgba(255, 165, 0, 0.5)",
                  ],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                Mission
              </motion.span>
            </motion.h1>

            <motion.p
              className="text-2xl text-tz-cream mb-12 max-w-4xl mx-auto leading-relaxed"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              Help us shape the future of education technology and empower the
              next generation of innovators
            </motion.p>

            {/* Company Stats */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              {companyStats.map((stat, index) => (
                <motion.div
                  key={index}
                  className="text-center"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <div className="w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-3 border border-white/20">
                    <stat.icon className="w-8 h-8 text-tz-bright-orange" />
                  </div>
                  <div className="text-3xl font-bold text-tz-bright-orange mb-1">
                    {stat.number}
                  </div>
                  <div className="text-tz-cream font-medium">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.8 }}
            >
              <a href="#apply">
              <Button
                size="lg"
                className="bg-tz-bright-orange hover:bg-tz-bright-orange/90 text-white px-8 py-4 text-lg font-bold rounded-full shadow-2xl hover:shadow-tz-bright-orange/25 transition-all duration-300 transform hover:scale-105"
              >
                View Open Positions
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Benefits Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-tz-dark-navy mb-6">
              Why Choose TechZnanie?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We believe in creating an environment where our team can thrive
              and make a meaningful impact
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10, scale: 1.02 }}
              >
                <Card className="text-center h-full hover:shadow-2xl transition-all duration-300 border-0 bg-white/80 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <motion.div
                      className={`w-16 h-16 ${
                        benefit.color.split(" ")[0]
                      } rounded-2xl flex items-center justify-center mx-auto mb-6`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <benefit.icon
                        className={`w-8 h-8 ${benefit.color.split(" ")[1]}`}
                      />
                    </motion.div>
                    <h3 className="text-xl font-bold text-tz-dark-navy mb-4">
                      {benefit.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {benefit.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Job Application Form */}
      <section id="apply" className="py-20 px-4 bg-white">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-tz-dark-navy mb-6">
              Apply for a Position
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Fill out the form below to submit your application to TechZnanie
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Card className="shadow-xl border-0 bg-gradient-to-br from-white to-gray-50/50 overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-tz-bright-orange to-tz-dark-orange"></div>

              <CardContent className="p-8">
                <form
                  className="space-y-6"
                  onSubmit={handleSubmit}
                >
                  {/* Personal Information */}
                  <div className="space-y-4">
                    <h3 className="text-xl font-bold text-tz-dark-navy flex items-center">
                      <Users className="w-5 h-5 mr-2 text-tz-bright-orange" />
                      Personal Information
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* First Name */}
                      <div className="space-y-2">
                        <label
                          htmlFor="firstName"
                          className="block text-sm font-medium text-gray-700"
                        >
                          First Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="firstName"
                          name="firstName"
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-tz-bright-orange focus:border-transparent"
                          placeholder="Enter your first name"
                        />
                      </div>

                      {/* Last Name */}
                      <div className="space-y-2">
                        <label
                          htmlFor="lastName"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Last Name <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="text"
                          id="lastName"
                          name="lastName"
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-tz-bright-orange focus:border-transparent"
                          placeholder="Enter your last name"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Date of Birth */}
                      <div className="space-y-2">
                        <label
                          htmlFor="dob"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Date of Birth <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="date"
                          id="dob"
                          name="dob"
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-tz-bright-orange focus:border-transparent"
                        />
                      </div>

                      {/* Contact Number */}
                      <div className="space-y-2">
                        <label
                          htmlFor="phone"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Contact Number <span className="text-red-500">*</span>
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-tz-bright-orange focus:border-transparent"
                          placeholder="Enter your contact number"
                        />
                      </div>
                    </div>

                    {/* Email */}
                    <div className="space-y-2">
                      <label
                        htmlFor="email"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-tz-bright-orange focus:border-transparent"
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>

                  {/* Education */}
                  <div className="space-y-4 pt-4">
                    <h3 className="text-xl font-bold text-tz-dark-navy flex items-center">
                      <Building className="w-5 h-5 mr-2 text-tz-bright-orange" />
                      Education
                    </h3>

                    {/* College/University */}
                    <div className="space-y-2">
                      <label
                        htmlFor="college"
                        className="block text-sm font-medium text-gray-700"
                      >
                        College/University{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        id="college"
                        name="college"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-tz-bright-orange focus:border-transparent"
                        placeholder="Enter your college/university name"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Degree */}
                      <div className="space-y-2">
                        <label
                          htmlFor="degree"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Highest Degree <span className="text-red-500">*</span>
                        </label>
                        <select
                          id="degree"
                          name="degree"
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-tz-bright-orange focus:border-transparent"
                        >
                          <option value="">Select your degree</option>
                          <option value="Bachelors">Bachelor's Degree</option>
                          <option value="Masters">Master's Degree</option>
                          <option value="PhD">PhD</option>
                          <option value="Diploma">Diploma</option>
                          <option value="Other">Other</option>
                        </select>
                      </div>

                      {/* Graduation Year */}
                      <div className="space-y-2">
                        <label
                          htmlFor="graduationYear"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Graduation Year{" "}
                          <span className="text-red-500">*</span>
                        </label>
                        <select
                          id="graduationYear"
                          name="graduationYear"
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-tz-bright-orange focus:border-transparent"
                        >
                          <option value="">Select year</option>
                          {Array.from(
                            { length: 15 },
                            (_, i) => new Date().getFullYear() - i
                          ).map((year) => (
                            <option key={year} value={year}>
                              {year}
                            </option>
                          ))}
                        </select>
                      </div>
                    </div>
                  </div>

                  {/* Professional Information */}
                  <div className="space-y-4 pt-4">
                    <h3 className="text-xl font-bold text-tz-dark-navy flex items-center">
                      <Award className="w-5 h-5 mr-2 text-tz-bright-orange" />
                      Professional Information
                    </h3>

                    {/* Position */}
                    <div className="space-y-2">
                      <label
                        htmlFor="position"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Position Applying For{" "}
                        <span className="text-red-500">*</span>
                      </label>
                      <select
                        id="position"
                        name="position"
                        required
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-tz-bright-orange focus:border-transparent"
                      >
                        <option value="">Select a position</option>
                        {jobOpenings.map((job) => (
                          <option key={job.id} value={job.title}>
                            {job.title} - {job.department}
                          </option>
                        ))}
                      </select>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      {/* Experience */}
                      <div className="space-y-2">
                        <label
                          htmlFor="experience"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Years of Experience{" "}
                          <span className="text-red-500">*</span>
                        </label>
                        <select
                          id="experience"
                          name="experience"
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-tz-bright-orange focus:border-transparent"
                        >
                          <option value="">Select experience</option>
                          <option value="0-1">0-1 years</option>
                          <option value="1-2">1-2 years</option>
                          <option value="2-3">2-3 years</option>
                          <option value="3-5">3-5 years</option>
                          <option value="5+">5+ years</option>
                        </select>
                      </div>

                      {/* Current/Expected Salary */}
                      <div className="space-y-2">
                        <label
                          htmlFor="salary"
                          className="block text-sm font-medium text-gray-700"
                        >
                          Expected Salary (₹ LPA)
                        </label>
                        <input
                          type="text"
                          id="salary"
                          name="salary"
                          className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-tz-bright-orange focus:border-transparent"
                          placeholder="Enter your expected salary"
                        />
                      </div>
                    </div>

                    {/* Resume Upload */}
                    <div className="space-y-2">
                      <label
                        htmlFor="resume"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Upload Resume <span className="text-red-500">*</span>
                      </label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg px-6 py-8 text-center hover:border-tz-bright-orange transition-colors">
                        <input
                          type="file"
                          id="resume"
                          name="resume"
                          accept=".pdf,.doc,.docx"
                          required
                          className="hidden"
                        />
                        <label htmlFor="resume" className="cursor-pointer">
                          <div className="flex flex-col items-center justify-center space-y-2">
                            <div className="w-12 h-12 bg-tz-bright-orange/10 rounded-full flex items-center justify-center">
                              <ArrowRight className="w-6 h-6 text-tz-bright-orange transform rotate-90" />
                            </div>
                            <span className="font-medium text-tz-bright-orange">
                              Click to upload your resume
                            </span>
                            <span className="text-sm text-gray-500">
                              PDF, DOC, or DOCX (Max 2MB)
                            </span>
                          </div>
                        </label>
                      </div>
                    </div>

                    {/* Cover Letter */}
                    <div className="space-y-2">
                      <label
                        htmlFor="coverLetter"
                        className="block text-sm font-medium text-gray-700"
                      >
                        Cover Letter
                      </label>
                      <textarea
                        id="coverLetter"
                        name="coverLetter"
                        rows={4}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-tz-bright-orange focus:border-transparent"
                        placeholder="Tell us why you're interested in this position and why you'd be a great fit"
                      ></textarea>
                    </div>
                  </div>

                  {/* Terms & Submit */}
                  <div className="pt-4 space-y-6">
                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="terms"
                          name="terms"
                          type="checkbox"
                          required
                          className="w-4 h-4 text-tz-bright-orange border-gray-300 rounded focus:ring-tz-bright-orange"
                        />
                      </div>
                      <div className="ml-3 text-sm">
                        <label
                          htmlFor="terms"
                          className="font-medium text-gray-700"
                        >
                          I agree to the{" "}
                          <a
                            href="#"
                            className="text-tz-bright-orange hover:underline"
                          >
                            Terms and Conditions
                          </a>{" "}
                          and{" "}
                          <a
                            href="#"
                            className="text-tz-bright-orange hover:underline"
                          >
                            Privacy Policy
                          </a>
                        </label>
                      </div>
                    </div>

                    <motion.div
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                    >
                       {status === "loading" && (
                      <p className="text-blue-600 font-medium mb-2">⏳ Sending your application...</p>
                    )}
                      <Button type="submit" 
                      disabled={status === "loading"}
                      className="w-full bg-gradient-to-r from-tz-bright-orange to-tz-dark-orange hover:from-tz-dark-orange hover:to-tz-bright-orange text-white font-bold py-5 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 text-lg">
                         {status === "loading" ? "Sending..." : "Submit Application"}
                        <ArrowRight className="ml-2 w-5 h-5" />
                      </Button>
                    </motion.div>
                  </div>
                  {/* ✅ Inline messages */}
                {status === "success" && (
                  <p className="mt-4 text-green-600 font-semibold text-center">
                    ✅ Your application has been submitted successfully!
                  </p>
                )}
                {status === "error" && (
                  <p className="mt-4 text-red-600 font-semibold text-center">
                    ❌ Something went wrong. Please try again later.
                  </p>
                )}
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
