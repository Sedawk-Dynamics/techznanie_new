"use client"

import { motion } from "framer-motion"
import Link from "next/link"
import {
  Cookie,
  Shield,
  Settings,
  BarChart3,
  MessageSquare,
  Lock,
  Target,
  Users,
  Eye,
  Clock,
  Mail,
  CheckCircle2,
  ArrowRight,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar"
import Footer from "@/components/footer"
import { useState } from "react"

export default function CookiePolicyPage() {
  const [expandedSections, setExpandedSections] = useState<{ [key: string]: boolean }>({})

  const toggleSection = (section: string) => {
    setExpandedSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }))
  }

  const cookieCategories = [
    {
      icon: Shield,
      title: "Strictly Necessary",
      color: "text-red-500",
      bgColor: "bg-red-500/10",
      description: "Required for core features (sign-in, security, payment flow, load balancing)",
      canDisable: false,
      examples: "Session ID, auth state, anti-forgery tokens",
      duration: "Session / up to 12 months",
    },
    {
      icon: Settings,
      title: "Functional/Preferences",
      color: "text-blue-500",
      bgColor: "bg-blue-500/10",
      description: "Remember choices (language, campus, saved forms), enhance accessibility and UX",
      canDisable: true,
      examples: "Preference key-values, UI state",
      duration: "1–12 months",
    },
    {
      icon: BarChart3,
      title: "Performance/Analytics",
      color: "text-green-500",
      bgColor: "bg-green-500/10",
      description: "Help us understand usage (session counts, feature adoption) and improve quality",
      canDisable: true,
      examples: "Event counts, approximate geo (city), device/browser",
      duration: "1–24 months",
    },
    {
      icon: MessageSquare,
      title: "Communications/Engagement",
      color: "text-purple-500",
      bgColor: "bg-purple-500/10",
      description: "Enable service messages, support chat/widgets, and measure deliverability",
      canDisable: true,
      examples: "Contact ID (hashed), message state",
      duration: "Session / 12 months",
    },
    {
      icon: Lock,
      title: "Security/Fraud Prevention",
      color: "text-yellow-500",
      bgColor: "bg-yellow-500/10",
      description: "Detect abuse, rate-limit requests, and protect accounts and transactions",
      canDisable: false,
      examples: "Device fingerprint hash, IP (truncated)",
      duration: "Session / 24 months",
    },
    {
      icon: Target,
      title: "Marketing Measurement",
      color: "text-pink-500",
      bgColor: "bg-pink-500/10",
      description: "Measure campaign performance for our own ads or partner pages",
      canDisable: true,
      examples: "Referrer, campaign ID, page events",
      duration: "1–6 months",
    },
  ]

  const providers = [
    {
      name: "Hosting/CDN",
      category: "Strictly Necessary",
      essential: true,
      purpose: "Load, cache, security",
      cookies: "__cf_bm",
    },
    {
      name: "Auth/LMS",
      category: "Strictly Necessary",
      essential: true,
      purpose: "Session/auth",
      cookies: "session_id, XSRF-TOKEN",
    },
    {
      name: "Payment Gateway",
      category: "Strictly Necessary",
      essential: true,
      purpose: "Payment processing & fraud prevention",
      cookies: "device_id, payment_intent",
    },
    {
      name: "Analytics",
      category: "Performance",
      essential: false,
      purpose: "Usage analytics",
      cookies: "_ga, _gid, event IDs",
    },
    {
      name: "Crash/Diagnostics",
      category: "Performance/Security",
      essential: false,
      purpose: "Error monitoring",
      cookies: "crash_session",
    },
    {
      name: "Email/SMS/WhatsApp",
      category: "Communications",
      essential: false,
      purpose: "Messaging & deliverability",
      cookies: "msgid",
    },
    {
      name: "Support/Chat",
      category: "Communications",
      essential: false,
      purpose: "Support widget",
      cookies: "helpdesk_session",
    },
    {
      name: "Marketing Measurement",
      category: "Measurement",
      essential: false,
      purpose: "Campaign attribution",
      cookies: "_utm, _fbp",
    },
  ]

  const quickNav = [
    { title: "What are Cookies?", href: "#what-are-cookies" },
    { title: "Legal Basis", href: "#legal-basis" },
    { title: "Types of Cookies", href: "#types-of-cookies" },
    { title: "Cookie Table", href: "#cookie-table" },
    { title: "Children's Data", href: "#childrens-data" },
    { title: "Your Choices", href: "#your-choices" },
    { title: "Third-Party Cookies", href: "#third-party" },
    { title: "Data Retention", href: "#data-retention" },
    { title: "Policy Updates", href: "#policy-updates" },
    { title: "Contact Us", href: "#contact" },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-tz-dark-navy via-[#0D1B2A] to-tz-dark-navy">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-tz-bright-orange/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-tz-medium-blue/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container-modern relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-tz-bright-orange to-orange-600 rounded-2xl mb-6">
              <Cookie className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">Cookie Policy</h1>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Understanding how TechZnanie uses cookies and similar technologies to provide and improve our Services
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-white/60">
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Effective: 19-08-2025</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                <span>Last Updated: 15-09-2025</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Summary */}
      <section className="py-16 relative">
        <div className="container-modern">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <div className="bg-gradient-to-br from-tz-bright-orange/20 to-orange-600/10 border border-tz-bright-orange/30 rounded-2xl p-8">
              <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
                <CheckCircle2 className="w-7 h-7 text-tz-bright-orange" />
                Quick Summary
              </h2>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  "We use cookies to make our Services work and improve your experience",
                  "Essential cookies cannot be disabled; they're required for core features",
                  "You can manage non-essential cookies via Cookie Settings anytime",
                  "We obtain consent for non-essential cookies under DPDP Act, 2023",
                  "No behavioural advertising targeted at children under 18",
                  "We do not sell your personal data to third parties",
                ].map((point, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-tz-bright-orange flex-shrink-0 mt-0.5" />
                    <p className="text-white/90 text-sm leading-relaxed">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-12 relative">
        <div className="container-modern">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-5xl mx-auto"
          >
            <h2 className="text-2xl font-bold text-white mb-6">Quick Navigation</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
              {quickNav.map((item, index) => (
                <motion.a
                  key={index}
                  href={item.href}
                  whileHover={{ scale: 1.02, x: 5 }}
                  className="flex items-center gap-3 p-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all duration-300 group"
                >
                  <ArrowRight className="w-4 h-4 text-tz-bright-orange group-hover:translate-x-1 transition-transform" />
                  <span className="text-white/90 text-sm font-medium">{item.title}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 relative">
        <div className="container-modern">
          <div className="max-w-5xl mx-auto space-y-8">
            {/* Section 1 */}
            <motion.div
              id="what-are-cookies"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 scroll-mt-24"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center">
                  <Cookie className="w-6 h-6 text-blue-400" />
                </div>
                <h2 className="text-2xl font-bold text-white">1. What are Cookies & Similar Technologies?</h2>
              </div>
              <div className="space-y-4 text-white/80 leading-relaxed">
                <ul className="space-y-3 ml-4">
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-tz-bright-orange flex-shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-white">Cookies</strong> are small text files placed on your browser or
                      device to store information.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-tz-bright-orange flex-shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-white">SDKs</strong> (software development kits) and device identifiers
                      play a similar role in mobile apps.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-tz-bright-orange flex-shrink-0 mt-0.5" />
                    <span>
                      <strong className="text-white">Pixels/tags</strong> help measure interactions with pages, emails,
                      or features.
                    </span>
                  </li>
                </ul>
                <p className="mt-4">
                  These technologies help us make the Services work, keep them secure, understand performance, remember
                  your preferences, and—only with consent—improve experiences through analytics.{" "}
                  <strong className="text-tz-bright-orange">
                    We do not direct behavioural advertising to children.
                  </strong>
                </p>
              </div>
            </motion.div>

            {/* Section 2 */}
            <motion.div
              id="legal-basis"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 scroll-mt-24"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center">
                  <Shield className="w-6 h-6 text-green-400" />
                </div>
                <h2 className="text-2xl font-bold text-white">2. Legal Basis & DPDP (India) Compliance</h2>
              </div>
              <div className="space-y-4 text-white/80 leading-relaxed">
                <p>
                  Under India's{" "}
                  <strong className="text-white">Digital Personal Data Protection Act, 2023 (DPDP Act)</strong>, we
                  obtain consent for non-essential cookies that process personal data. You may withdraw consent at any
                  time using our Cookie Settings (see Section 6).
                </p>
                <p>Essential cookies rely on legitimate and necessary purposes to deliver the Services you request.</p>
              </div>
            </motion.div>

            {/* Section 3 - Cookie Categories */}
            <motion.div
              id="types-of-cookies"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 scroll-mt-24"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center">
                  <Settings className="w-6 h-6 text-purple-400" />
                </div>
                <h2 className="text-2xl font-bold text-white">3. Types of Cookies We Use</h2>
              </div>
              <p className="text-white/80 leading-relaxed mb-6">We group cookies/SDKs into the following categories:</p>
              <div className="grid md:grid-cols-2 gap-4">
                {cookieCategories.map((category, index) => (
                  <div
                    key={index}
                    className={`${category.bgColor} border border-white/10 rounded-xl p-6 transition-all duration-300 hover:scale-105`}
                  >
                    <div className="flex items-start gap-4 mb-4">
                      <div className={`w-10 h-10 ${category.bgColor} rounded-lg flex items-center justify-center`}>
                        <category.icon className={`w-5 h-5 ${category.color}`} />
                      </div>
                      <div className="flex-1">
                        <h3 className="text-lg font-bold text-white mb-1">{category.title}</h3>
                        {!category.canDisable && (
                          <span className="inline-block px-2 py-1 bg-red-500/20 text-red-300 text-xs rounded-md">
                            Always Active
                          </span>
                        )}
                      </div>
                    </div>
                    <p className="text-white/80 text-sm mb-3">{category.description}</p>
                    <div className="space-y-2 text-xs">
                      <div className="flex items-start gap-2">
                        <span className="text-white/60">Examples:</span>
                        <span className="text-white/80">{category.examples}</span>
                      </div>
                      <div className="flex items-start gap-2">
                        <Clock className="w-3 h-3 text-white/60 mt-0.5" />
                        <span className="text-white/80">{category.duration}</span>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
              <div className="mt-6 p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-xl">
                <p className="text-sm text-white/90">
                  <strong className="text-yellow-400">Important:</strong> We do not run behavioural/interest-based
                  advertising targeted at children and we do not sell your personal data.
                </p>
              </div>
            </motion.div>

            {/* Section 4 - Cookie Table */}
            <motion.div
              id="cookie-table"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 scroll-mt-24"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center">
                  <Eye className="w-6 h-6 text-orange-400" />
                </div>
                <h2 className="text-2xl font-bold text-white">4. Current Cookies & Providers (Annexure A)</h2>
              </div>
              <p className="text-white/80 leading-relaxed mb-6">
                Below is an illustrative list of cookies/SDKs you can expect in our stack:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-sm">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="text-left py-3 px-4 text-white font-semibold">Provider</th>
                      <th className="text-left py-3 px-4 text-white font-semibold">Category</th>
                      <th className="text-left py-3 px-4 text-white font-semibold">Essential</th>
                      <th className="text-left py-3 px-4 text-white font-semibold">Purpose</th>
                      <th className="text-left py-3 px-4 text-white font-semibold">Key Cookies</th>
                    </tr>
                  </thead>
                  <tbody>
                    {providers.map((provider, index) => (
                      <tr key={index} className="border-b border-white/10 hover:bg-white/5 transition-colors">
                        <td className="py-3 px-4 text-white/90 font-medium">{provider.name}</td>
                        <td className="py-3 px-4 text-white/80">{provider.category}</td>
                        <td className="py-3 px-4">
                          {provider.essential ? (
                            <span className="inline-block px-2 py-1 bg-red-500/20 text-red-300 text-xs rounded-md">
                              Yes
                            </span>
                          ) : (
                            <span className="inline-block px-2 py-1 bg-green-500/20 text-green-300 text-xs rounded-md">
                              No
                            </span>
                          )}
                        </td>
                        <td className="py-3 px-4 text-white/80">{provider.purpose}</td>
                        <td className="py-3 px-4 text-white/70 font-mono text-xs">{provider.cookies}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/20 rounded-xl">
                <p className="text-sm text-white/90">
                  <strong className="text-blue-400">Note:</strong> We do not enable behavioural targeting to children.
                  Marketing measurement is limited to aggregate attribution and our own campaign performance.
                </p>
              </div>
            </motion.div>

            {/* Section 5 - Children's Data */}
            <motion.div
              id="childrens-data"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 scroll-mt-24"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-pink-500/20 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-pink-400" />
                </div>
                <h2 className="text-2xl font-bold text-white">5. Children's Data and Safeguards</h2>
              </div>
              <div className="space-y-4 text-white/80 leading-relaxed">
                <p>
                  For users <strong className="text-white">under 18</strong>, we seek verifiable parent/guardian consent
                  before placing any non-essential cookies/SDKs that process personal data.
                </p>
                <p>
                  We <strong className="text-tz-bright-orange">do not use behavioural advertising cookies</strong> for
                  minors. Where feasible, we apply stricter defaults (e.g., analytics disabled until consent).
                </p>
              </div>
            </motion.div>

            {/* Section 6 - Your Choices */}
            <motion.div
              id="your-choices"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-tz-bright-orange/20 to-orange-600/10 border border-tz-bright-orange/30 rounded-2xl p-8 scroll-mt-24"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-tz-bright-orange/30 rounded-xl flex items-center justify-center">
                  <Settings className="w-6 h-6 text-tz-bright-orange" />
                </div>
                <h2 className="text-2xl font-bold text-white">6. Your Choices — Manage Cookies/SDKs</h2>
              </div>
              <p className="text-white/90 leading-relaxed mb-6">
                You can control cookies and withdraw consent at any time:
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-tz-bright-orange flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">Cookie Settings</h3>
                    <p className="text-white/80 text-sm">
                      Use the in-product "Cookie Settings" link in the footer or banner to toggle non-essential
                      categories on/off.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-tz-bright-orange flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">Browser Controls</h3>
                    <p className="text-white/80 text-sm">
                      Most browsers allow you to block/delete cookies or set site-specific controls. Blocking essential
                      cookies may break parts of the Services.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-tz-bright-orange flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">Mobile OS Controls</h3>
                    <p className="text-white/80 text-sm">
                      On iOS/Android, limit ad tracking/reset IDs; control app permissions and background data.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-tz-bright-orange flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">Email Controls</h3>
                    <p className="text-white/80 text-sm">
                      Disable images or tracking in your email client to reduce open-pixel measurement.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-tz-bright-orange flex-shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-white font-semibold mb-1">Global Privacy Control (GPC)</h3>
                    <p className="text-white/80 text-sm">
                      Where supported by your browser, we will treat a valid GPC signal as a request to limit
                      non-essential tracking (applies on a best-effort basis under Indian law).
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Section 7 - Third Party */}
            <motion.div
              id="third-party"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 scroll-mt-24"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-indigo-500/20 rounded-xl flex items-center justify-center">
                  <Users className="w-6 h-6 text-indigo-400" />
                </div>
                <h2 className="text-2xl font-bold text-white">7. Third-Party Cookies & SDKs</h2>
              </div>
              <div className="space-y-4 text-white/80 leading-relaxed">
                <p>
                  Some cookies are set by third parties providing services on our behalf (e.g., cloud hosting/CDN,
                  analytics, payment gateways, email/SMS/WhatsApp providers, support/chat).
                </p>
                <p>
                  These providers are <strong className="text-white">Data Processors</strong> under contract and may
                  only process data per our instructions. Links to their policies are provided in Annexure A.
                </p>
              </div>
            </motion.div>

            {/* Section 8 - Data Retention */}
            <motion.div
              id="data-retention"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 scroll-mt-24"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-teal-500/20 rounded-xl flex items-center justify-center">
                  <Clock className="w-6 h-6 text-teal-400" />
                </div>
                <h2 className="text-2xl font-bold text-white">8. Data Retention (Annexure B)</h2>
              </div>
              <p className="text-white/80 leading-relaxed mb-6">
                Cookie/SDK data is kept only as long as necessary for the purposes described. Typical retention ranges:
              </p>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  { type: "Strictly Necessary/Session", duration: "Session to 12 months" },
                  { type: "Functional/Preferences", duration: "1–12 months" },
                  { type: "Performance/Analytics", duration: "3–24 months" },
                  { type: "Communications Widgets", duration: "Session to 12 months" },
                  { type: "Security/Fraud Prevention", duration: "Session to 24 months" },
                  { type: "Marketing Measurement", duration: "1–6 months" },
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3 p-4 bg-white/5 rounded-xl border border-white/10">
                    <Clock className="w-5 h-5 text-teal-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <h3 className="text-white font-semibold text-sm mb-1">{item.type}</h3>
                      <p className="text-white/70 text-xs">{item.duration}</p>
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-white/70 text-sm mt-4">
                Aggregated analytics may be kept longer for trend analysis without identifying you.
              </p>
            </motion.div>

            {/* Section 9 - Updates */}
            <motion.div
              id="policy-updates"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-8 scroll-mt-24"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-yellow-500/20 rounded-xl flex items-center justify-center">
                  <ArrowRight className="w-6 h-6 text-yellow-400" />
                </div>
                <h2 className="text-2xl font-bold text-white">9. Updates to this Policy</h2>
              </div>
              <div className="space-y-4 text-white/80 leading-relaxed">
                <p>
                  We may update this Cookie Policy to reflect changes to cookies/SDKs, providers, or legal requirements.
                </p>
                <p>
                  When we make material changes, we will prompt you via a banner or in-product notice and refresh
                  consent as required.
                </p>
              </div>
            </motion.div>

            {/* Section 10 - Contact */}
            <motion.div
              id="contact"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-tz-bright-orange/20 to-orange-600/10 border border-tz-bright-orange/30 rounded-2xl p-8 scroll-mt-24"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-tz-bright-orange/30 rounded-xl flex items-center justify-center">
                  <Mail className="w-6 h-6 text-tz-bright-orange" />
                </div>
                <h2 className="text-2xl font-bold text-white">10. Contact Us</h2>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                  <h3 className="text-white font-semibold mb-2">Privacy & Cookies Queries</h3>
                  <a href="mailto:privacy@techznanieinnoversity.com" className="text-tz-bright-orange hover:underline">
                    privacy@techznanieinnoversity.com
                  </a>
                </div>
                <div className="p-4 bg-white/5 rounded-xl border border-white/10">
                  <h3 className="text-white font-semibold mb-2">Grievance Officer</h3>
                  <p className="text-white/80 text-sm mb-2">Prabhath Sandesh</p>
                  <p className="text-white/70 text-sm mb-2">
                    UG9, First Floor, DSL ABACUS IT PARK, IDA Uppal, Hyderabad – 500039, Telangana, India
                  </p>
                  <a
                    href="mailto:grievance@techznanieinnoversity.com"
                    className="text-tz-bright-orange hover:underline text-sm"
                  >
                    grievance@techznanieinnoversity.com
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-tz-bright-orange/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container-modern relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Questions About Our Cookie Policy?</h2>
            <p className="text-xl text-white/80 mb-8">
              Our team is here to help you understand how we use cookies and protect your privacy
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button
                asChild
                className="bg-tz-bright-orange hover:bg-[#e67200] text-white font-semibold px-8 py-6 rounded-xl transition-all duration-300"
              >
                <Link href="mailto:privacy@techznanieinnoversity.com">Contact Privacy Team</Link>
              </Button>
              <Button
                asChild
                variant="outline"
                className="border-2 border-white/20 text-white hover:bg-white/10 font-semibold px-8 py-6 rounded-xl transition-all duration-300 bg-transparent"
              >
                <Link href="/privacy-policy">View Privacy Policy</Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  )
}
