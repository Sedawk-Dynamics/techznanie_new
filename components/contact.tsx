"use client"

import { motion } from "framer-motion"
import { MapPin, Phone, Mail, Clock, Send, MessageCircle, Calendar } from 'lucide-react'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"

export default function Contact() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    program: "",
    message: "",
  })
  const [status, setStatus] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("Sending...")

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const result = await res.json()
      if (result.success) {
        setStatus("✅ Message sent successfully!")
        setFormData({ firstName: "", lastName: "", email: "", phone: "", program: "", message: "" })
      } else {
        setStatus("❌ Failed to send. Try again later.")
      }
    } catch (err) {
      setStatus("❌ Something went wrong.")
    }
  }

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Our Campus",
      details: "FIRST FLOOR, DSL ABACUS IT PARK, Survey Colony, IDA Uppal, Uppal, Hyderabad, Telangana 500039",
      action: "Get Directions",
      link: "https://share.google/nJXPT5N1ubkKSkFTP"
    },
    {
      icon: Phone,
      title: "Call Us",
      details: "+91-7207276622",
      action: "Call Now",
      link: "tel:+91-7207276622"
    },
    {
      icon: Mail,
      title: "Email Us",
      details: "info@techznanieinnoversity.com",
      action: "Send Email",
      link: "mailto:info@techznanieinnoversity.com"
    },
    {
      icon: Clock,
      title: "Office Hours",
      details: "Mon - Fri: 10:30 AM - 8:00 PM\nSat: 10:30 AM - 8:00 PM",
      action: "Schedule Visit",
      link: "https://calendly.com/techznanie/30min"
    }
  ]

  const quickActions = [
    {
      icon: Calendar,
      title: "Book Free Demo",
      description: "Experience our teaching methodology",
      color: "bg-tz-bright-orange"
    },
    {
      icon: MessageCircle,
      title: "Career Counseling",
      description: "Get personalized career guidance",
      color: "bg-tz-medium-blue"
    },
    {
      icon: Phone,
      title: "Instant Callback",
      description: "We'll call you within 30 minutes",
      color: "bg-tz-light-blue"
    }
  ]

  return (
    <section id="contact" className="section-padding bg-white">
      <div className="container-modern">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="bg-tz-dark-orange text-white mb-6 px-6 py-2 text-sm font-semibold">
            Get In Touch
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-tz-dark-navy mb-6">
            Ready to Start Your
            <span className="text-gradient block">Learning Journey?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Have questions about our programs? Want to speak with our career counselors? 
            We're here to help you make the right choice for your future.
          </p>
        </motion.div>

        {/* Quick Actions */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-6 mb-16"
        >
          {quickActions.map((action) => (
            <motion.div
              key={action.title}
              whileHover={{ scale: 1.05, y: -5 }}
              className="cursor-pointer"
            >
              <Card className="card-modern text-center group">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 ${action.color} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <action.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-tz-dark-navy mb-2">{action.title}</h3>
                  <p className="text-gray-600">{action.description}</p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info (left side) */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="text-3xl font-bold text-tz-dark-navy mb-8">Get in Touch</h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <motion.div
                    key={info.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="group"
                  >
                    <Card className="card-modern p-6 hover:shadow-hover transition-all duration-300">
                      <div className="flex items-start space-x-4">
                        <div className="w-12 h-12 bg-tz-bright-orange rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                          <info.icon className="w-6 h-6 text-white" />
                        </div>
                        <div className="flex-1">
                          <h4 className="text-lg font-bold text-tz-dark-navy mb-2">{info.title}</h4>
                          <p className="text-gray-600 mb-3 whitespace-pre-line">{info.details}</p>
                          <Button asChild variant="outline" size="sm" className="border-tz-bright-orange text-tz-bright-orange hover:bg-tz-bright-orange hover:text-white">
                            <a href={info.link} target="_blank" rel="noopener noreferrer">
                              {info.action}
                            </a>
                          </Button>
                        </div>
                      </div>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact Form (right side) */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="card-modern">
              <CardHeader className="gradient-secondary text-white rounded-t-2xl">
                <CardTitle className="text-2xl">Send us a Message</CardTitle>
                <p className="text-white/90">We'll respond within 2 hours during business hours</p>
              </CardHeader>
              <CardContent className="p-8 space-y-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-tz-dark-navy font-semibold">First Name *</Label>
                      <Input id="firstName" value={formData.firstName} onChange={handleChange} placeholder="Enter your first name" className="form-input" required />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-tz-dark-navy font-semibold">Last Name *</Label>
                      <Input id="lastName" value={formData.lastName} onChange={handleChange} placeholder="Enter your last name" className="form-input" required />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-tz-dark-navy font-semibold">Email Address *</Label>
                    <Input id="email" type="email" value={formData.email} onChange={handleChange} placeholder="your.email@example.com" className="form-input" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone" className="text-tz-dark-navy font-semibold">Phone Number *</Label>
                    <Input id="phone" type="tel" value={formData.phone} onChange={handleChange} placeholder="+91 XXXXX XXXXX" className="form-input" required />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="program" className="text-tz-dark-navy font-semibold">Interested Program</Label>
                    <select id="program" value={formData.program} onChange={handleChange} className="form-input">
                      <option value="">Select a Stream</option>
                      <option value="CSE">Computer Science & Engineering</option>
                      <option value="ECE">Electronics & Communications</option>
                      <option value="EEE">Electrical & Electronics</option>
                      <option value="ME">Mechanical Engineering</option>
                      <option value="CE">Civil Engineering</option>
                      <option value="Management">Management</option>
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-tz-dark-navy font-semibold">Message</Label>
                    <Textarea id="message" value={formData.message} onChange={handleChange} placeholder="Tell us about your career goals and any questions you have..." rows={5} className="form-textarea" />
                  </div>

                  <Button type="submit" className="w-full btn-primary text-lg py-4">
                    <Send className="w-5 h-5 mr-2" />
                    Send Message
                  </Button>

                  {status && (
                    <p className="text-center text-sm mt-2">
                      {status}
                    </p>
                  )}
                </form>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
