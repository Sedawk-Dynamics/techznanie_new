"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
  ArrowRight,
  Star,
  X,
  Bot,
  Send,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import Link from "next/link"

export default function Footer() {
  // ---------- Chatbot State ----------
  const [showChat, setShowChat] = useState(false)
  const [messages, setMessages] = useState<{ sender: string; text: string }[]>([
    {
      sender: "bot",
      text: "👋 Welcome to TechZnanie Innoversity — India’s Employability Engine. How can I assist you today?",
    },
  ])
  const [input, setInput] = useState("")

  // ---------- Chatbot Logic ----------
  const handleChatSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim()) return

    const userMessage = input.trim()
    setMessages((prev) => [...prev, { sender: "user", text: userMessage }])
    setInput("")

    let reply = ""
    const t = userMessage.toLowerCase()

    if (t.includes("domain") || t.includes("course") || t.includes("program")) {
      reply = `We offer 58+ upskilling programs across multiple streams:\n
A. Technology: Full Stack, Data Science, AI, Cybersecurity, Cloud, DevOps\n
B. Management: Sales, Product, HR, Marketing\n
C. Engineering: Civil, Mechanical, Electrical, Electronics\n
D. Finance: Tally, GST, Investment Banking\n
E. Creative: UI/UX, Graphic Design, Digital Marketing\n
Would you like to view course details or book a demo session?`
    } else if (t.includes("fee") || t.includes("price") || t.includes("admission")) {
      reply = `💰 Program Fee: ₹21,999 (Inclusive of LMS, mentor sessions & certification)\n
✅ Token Fee: ₹3,000 (Non-refundable)\n
No EMI / Installments.\n
Admission Steps:\n1️⃣ Choose Domain\n2️⃣ Pay Token\n3️⃣ Submit Onboarding Form\n4️⃣ Receive LMS Login\n5️⃣ Start Training`
    } else if (t.includes("placement") || t.includes("job")) {
      reply = `🎯 Our Placement Cell supports you with:\n
✅ Resume & LinkedIn Optimization\n✅ Mock Interviews (Tech + HR)\n✅ Portfolio Setup (GitHub, Dashboards)\n✅ Job Referral Support (Performance-based)\n
Would you like to speak to the placement team or view the roadmap?`
    } else if (t.includes("demo")) {
      reply = `🧑‍🏫 We offer Free 20–30 minute demo sessions for all domains.\n
Please share:\n• Full Name\n• Phone Number\n• Email\n• Domain of Interest\n• Preferred Date & Time\n
Once submitted, our team will confirm your session.`
    } else if (t.includes("career")) {
      reply = `🎯 Not sure which career suits you?\nSelect your goal:\n• IT Career Path\n• Management Career Path\n• Engineering Career Path\n• Finance Career Path\n• Creative Career Path`
    } else if (t.includes("college")) {
      reply = `🏫 We collaborate with colleges for:\n✅ On-Campus Workshops\n✅ Faculty Training\n✅ Job-Ready Bootcamps\n✅ Co-branded Certificates\n\nPlease share:\n• College Name\n• Contact Person\n• Email\n• Required Domains`
    } else if (t.includes("mentor") || t.includes("trainer") || t.includes("partner")) {
      reply = `🤝 We're onboarding Training Partners!\n\nModel:\n₹6,000 per student enrollment\n25–30 students per batch\n\nShare:\n• Name\n• Organization\n• Domains\n• Contact Number\n• Email`
    } else if (t.includes("lms")) {
      reply = `💻 LMS Support Options:\n• Reset Password\n• Re-send Login Details\n• Report Issue\n• Talk to LMS Support`
    } else if (t.includes("contact") || t.includes("support")) {
      reply = `📞 +91-7207276622\n📩 support@techznanieinnoversity.com\n🕓 10 AM – 7 PM (Mon–Sat)\nWould you like to speak to a counsellor?`
    } else if (t.includes("hello") || t.includes("hi")) {
      reply = `Hello 👋! I can help you explore:\n• Courses\n• Fees & Admission\n• Placements\n• Demo Sessions\n• College or Mentor Collaborations`
    } else {
      reply = `I'm here to help you with:\n• Explore Domains\n• Fees & Admission\n• Placement Support\n• Demo Session\n• LMS Help\n• College / Mentor Partnerships`
    }

    setTimeout(() => {
      setMessages((prev) => [...prev, { sender: "bot", text: reply }])
    }, 700)
  }

  // ---------- Footer Data ----------
  const quickLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
    { name: "Blog", href: "/blogs" },
  ]

  const programs = [
    { name: "Computer Science Engineering", href: "/course/computer-science" },
    { name: "Electronics & Communication", href: "/course/electronics-communication" },
    { name: "Electrical & Electronics", href: "/course/electrical-electronics" },
    { name: "Mechanical Engineering", href: "/course/mechanical" },
    { name: "Civil Engineering", href: "/course/civil" },
    { name: "Management & Business", href: "/course/management" },
  ]

  const resources = [
    { name: "Free Webinars", href: "/webinars" },
    { name: "Career Guide", href: "/career-guide" },
    { name: "Salary Reports", href: "/salary-report" },
    { name: "Interview Prep", href: "/interview-prep" },
    { name: "Coding Challenges", href: "/coding-challenges" },
  ]

  const socialLinks = [
    { icon: Facebook, href: "https://www.facebook.com/share/1Cmb8696aK/?mibextid=wwXIfr", label: "Facebook", color: "hover:bg-blue-600" },
    { icon: Twitter, href: "https://x.com/TechZnanie", label: "Twitter", color: "hover:bg-blue-400" },
    { icon: Linkedin, href: "https://www.linkedin.com/company/techznanie/", label: "LinkedIn", color: "hover:bg-blue-700" },
    { icon: Instagram, href: "https://www.instagram.com/techznanieinnoversity?igsh=eXgzdDM4M29mcDN6", label: "Instagram", color: "hover:bg-pink-600" },
    { icon: Youtube, href: "https://www.youtube.com/@TechZnanieInnoversity", label: "YouTube", color: "hover:bg-red-600" },
  ]

  return (
    <footer className="bg-gradient-to-t from-[#0D1B2A]/95 to-tz-dark-navy/90 text-white relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-0 right-0 w-96 h-96 bg-tz-bright-orange/5 rounded-full blur-3xl"></div>
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-tz-medium-blue/10 rounded-full blur-3xl"></div>
      </div>

      <div className="container-modern relative z-10">
        {/* Newsletter Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="py-16 border-b border-white/10"
        >
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-3xl font-bold mb-4">Stay Updated with Tech Trends</h3>
              <p className="text-white/80 text-lg">
                Get the latest industry insights, career tips, and exclusive offers delivered to your inbox every week.
              </p>
              <div className="flex items-center space-x-2 mt-4">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
                <span className="text-white/80 ml-2">Trusted by 500+ professionals</span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Main Footer Content */}
        <div className="py-16">
          <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
            {/* Company Info */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="lg:col-span-2 space-y-6"
            >
              <div className="flex items-center space-x-3">
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/techznanie%20png2-oOaToBOGCyM98fyvfygvFFEwoCVv5C.png"
                  alt="TechZnanie Innoversity"
                  className="h-12 w-auto"
                />
              </div>
              <p className="text-white/80 leading-relaxed text-lg">
                Empowering the next generation of tech professionals through innovative, industry-relevant education and
                comprehensive career support.
              </p>

              {/* Contact Info */}
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5 text-tz-bright-orange flex-shrink-0" />
                  <span className="text-white/80 text-sm">
                    FIRST FLOOR, Survey Colony, IDA Uppal, Uppal, Hyderabad, Telangana 500039
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <Phone className="w-5 h-5 text-tz-bright-orange" />
                  <span className="text-white/80">+91-7207276622</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="w-5 h-5 text-tz-bright-orange" />
                  <span className="text-white/80">info@techznanieinnoversity.com</span>
                </div>
              </div>

              {/* Social Links */}
              <div className="flex space-x-4">
                {socialLinks.map((social) => (
                  <motion.a
                    key={social.label}
                    href={social.href}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className={`w-12 h-12 bg-white/10 rounded-xl flex items-center justify-center transition-all duration-300 ${social.color}`}
                  >
                    <social.icon className="w-5 h-5" />
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* Quick Links */}
            <FooterColumn title="Quick Links" items={quickLinks} delay={0.1} />
            <FooterColumn title="Programs" items={programs} delay={0.2} />
            <FooterColumn title="Resources" items={resources} delay={0.3} />
          </div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="border-t border-white/10 py-8"
        >
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-white/60 text-sm">© 2025 TechZnanie Innoversity. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-6">
              <Link href="/privacy-policy" className="text-white/60 hover:text-tz-bright-orange text-sm transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms-of-service" className="text-white/60 hover:text-tz-bright-orange text-sm transition-colors">
                Terms of Service
              </Link>
              <Link href="/cookie-policy" className="text-white/60 hover:text-tz-bright-orange text-sm transition-colors">
                Cookie Policy
              </Link>
              <Link href="/refund-policy" className="text-white/60 hover:text-tz-bright-orange text-sm transition-colors">
                Refund Policy
              </Link>
            </div>
          </div>
        </motion.div>
      </div>

      {/* ✅ WhatsApp Floating Button */}
      <motion.a
        href="https://wa.me/917207276622?text=Hi%20I%20visited%20TechZnanie%20and%20want%20to%20learn%20more%20about%20your%20courses!"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 z-50 group"
        aria-label="Chat on WhatsApp"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <div className="bg-[#25D366] p-4 rounded-full shadow-lg transition-all duration-300 group-hover:scale-110 group-hover:shadow-xl">
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg"
            alt="WhatsApp"
            className="w-10 h-10"
          />
        </div>
      </motion.a>

      {/* ✅ Floating Chatbot Button */}
      <motion.div
        className="fixed bottom-24 right-6 z-50"
        animate={{ y: [0, -5, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <button
          onClick={() => setShowChat((prev) => !prev)}
          className="bg-gradient-to-r from-tz-bright-orange to-tz-dark-orange text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform duration-300"
          aria-label="Open Chatbot"
        >
          <Bot className="w-6 h-6" />
        </button>
      </motion.div>

      {/* ✅ Chatbot Popup */}
      <AnimatePresence>
        {showChat && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 30 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-28 right-6 w-80 bg-white shadow-2xl rounded-2xl overflow-hidden z-50 border border-gray-200"
          >
            <div className="bg-gradient-to-r from-tz-bright-orange to-tz-dark-orange p-4 text-white flex justify-between items-center">
              <h4 className="font-semibold">TechZnanie Assistant</h4>
              <button onClick={() => setShowChat(false)}>
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="h-64 overflow-y-auto p-4 space-y-3 text-sm bg-gray-50">
              {messages.map((msg, index) => (
                <div
                  key={index}
                  className={`flex ${msg.sender === "user" ? "justify-end" : "justify-start"}`}
                >
                  <div
                    className={`p-3 rounded-lg max-w-[80%] whitespace-pre-line ${
                      msg.sender === "user"
                        ? "bg-tz-bright-orange text-white rounded-br-none"
                        : "bg-gray-200 text-gray-800 rounded-bl-none"
                    }`}
                  >
                    {msg.text}
                  </div>
                </div>
              ))}
            </div>

        <form onSubmit={handleChatSubmit} className="p-3 border-t border-gray-200 bg-white flex space-x-2">
  <Input
    type="text"
    value={input}
    onChange={(e) => setInput(e.target.value)}
    placeholder="Type a message..."
    className="flex-1 border rounded-lg px-3 py-2 text-sm 
               text-black placeholder-gray-500
               focus:outline-none focus:ring-2 focus:ring-tz-bright-orange"
  />

  <Button
    type="submit"
    className="bg-gradient-to-r from-tz-bright-orange to-tz-dark-orange text-white px-3 py-2 rounded-lg hover:opacity-90 transition"
  >
    <Send className="w-4 h-4" />
  </Button>
</form>

          </motion.div>
        )}
      </AnimatePresence>
    </footer>
  )
}

// ✅ Reusable FooterColumn component
function FooterColumn({
  title,
  items,
  delay = 0,
}: {
  title: string
  items: { name: string; href: string }[]
  delay?: number
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay }}
      viewport={{ once: true }}
    >
      <h4 className="text-lg font-bold mb-6 text-tz-cream">{title}</h4>
      <ul className="space-y-3">
        {items.map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
              className="text-black/80 hover:text-tz-bright-orange transition-colors flex items-center group"
            >
              <ArrowRight className="w-3 h-3 mr-2 opacity-0 group-hover:opacity-100 transition-opacity" />
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </motion.div>
  )
}
