"use client"

import { motion } from "framer-motion"
import {
  Scale,
  Shield,
  Users,
  CreditCard,
  FileText,
  AlertCircle,
  Mail,
  Phone,
  MapPin,
  CheckCircle,
  ChevronRight,
} from "lucide-react"
import Link from "next/link"
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function TermsOfServicePage() {
  const sections = [
    { id: "who-we-are", title: "Who We Are", icon: Users },
    { id: "scope", title: "Scope & Acceptance", icon: FileText },
    { id: "eligibility", title: "Eligibility", icon: CheckCircle },
    { id: "accounts", title: "Accounts & Security", icon: Shield },
    { id: "programmes", title: "Programmes & Certificates", icon: FileText },
    { id: "conduct", title: "Permitted Use & Conduct", icon: AlertCircle },
    { id: "fees", title: "Fees, Payments & Taxes", icon: CreditCard },
    { id: "refunds", title: "Refunds & Cancellations", icon: CreditCard },
    { id: "ip", title: "Intellectual Property", icon: Shield },
    { id: "liability", title: "Limitation of Liability", icon: Scale },
    { id: "disputes", title: "Governing Law & Disputes", icon: Scale },
    { id: "contact", title: "Grievance Officer & Contact", icon: Mail },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-tz-dark-navy via-[#0D1B2A] to-tz-dark-navy">
        <Navbar />
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-0 w-96 h-96 bg-tz-bright-orange/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-tz-medium-blue/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container-modern relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br from-tz-bright-orange to-orange-600 rounded-2xl mb-6">
              <Scale className="w-10 h-10 text-white" />
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Terms of Service & Conditions
            </h1>
            <p className="text-xl text-white/80 mb-8">
              Please read these terms carefully before using TechZnanie Innoversity services
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-white/60">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-tz-bright-orange" />
                <span>Effective: 19-08-2025</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-tz-bright-orange" />
                <span>Last Updated: 15-09-2025</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Summary */}
      <section className="py-12 bg-gradient-to-r from-tz-bright-orange/10 to-orange-600/10 border-y border-white/10">
        <div className="container-modern">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <AlertCircle className="w-7 h-7 text-tz-bright-orange" />
              Quick Consumer Summary (Non-Contractual)
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "Pay only on TechZnanie's official payment gateway",
                "Standard refunds: 80% (≤7 days pre-start), 60% (Days 1–7), 30% (Days 8–14)",
                "No job guarantee; we provide placement best-efforts support",
                "Be respectful, don't cheat, don't share content publicly",
                "One deferral allowed with ₹1,000 fee",
                "Disputes: Arbitration in Hyderabad; Indian law applies",
              ].map((point, index) => (
                <div key={index} className="flex items-start gap-3 text-white/90">
                  <ChevronRight className="w-5 h-5 text-tz-bright-orange flex-shrink-0 mt-0.5" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Navigation */}
      <section className="py-12 border-b border-white/10">
        <div className="container-modern">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-2xl font-bold text-white mb-6">Quick Navigation</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {sections.map((section, index) => (
                <motion.a
                  key={section.id}
                  href={`#${section.id}`}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  className="flex items-center gap-3 p-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl transition-all duration-300 group"
                >
                  <section.icon className="w-5 h-5 text-tz-bright-orange" />
                  <span className="text-white/90 group-hover:text-white transition-colors">{section.title}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container-modern max-w-5xl">
          {/* Section 1: Who We Are */}
          <motion.div
            id="who-we-are"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16 scroll-mt-24"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-tz-bright-orange to-orange-600 rounded-xl flex items-center justify-center">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white">1. Who We Are</h2>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-tz-cream mb-2">Entity</h3>
                <p className="text-white/80">
                  TECHZNANIE INNOVERSITY PRIVATE LIMITED ("TechZnanie"), a private company incorporated under the
                  Companies Act, 2013.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-tz-cream mb-2">Registered Office</h3>
                <p className="text-white/80">
                  UG9, First Floor, DSL ABACUS IT PARK, IDA Uppal, Hyderabad – 500039, Telangana, India.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-tz-cream mb-2">What We Do</h3>
                <p className="text-white/80">
                  We build and operate digital learning platforms and industry-aligned training programmes, including
                  curriculum, LMS, assessments and certification, and provide placement enablement through our employer
                  network. We collaborate with colleges, training centres and employers to deliver TechZnanie-branded
                  cohorts across India.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-tz-cream mb-2">Authorised Enrolment & Payments</h3>
                <p className="text-white/80">
                  For TechZnanie-branded programmes, enrolments and fee collection happen only via TechZnanie's official
                  CRM/LMS and authorised payment gateways; partners are not authorised to collect fees on our behalf.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-tz-cream mb-2">Official Contacts</h3>
                <div className="space-y-2">
                  <p className="text-white/80">
                    Legal:{" "}
                    <a href="mailto:legal@techznanieinnoversity.com" className="text-tz-bright-orange hover:underline">
                      legal@techznanieinnoversity.com
                    </a>
                  </p>
                  <p className="text-white/80">
                    Support:{" "}
                    <a
                      href="mailto:support@techznanieinnoversity.com"
                      className="text-tz-bright-orange hover:underline"
                    >
                      support@techznanieinnoversity.com
                    </a>
                  </p>
                  <p className="text-white/80">
                    Grievance:{" "}
                    <a
                      href="mailto:grievance@techznanieinnoversity.com"
                      className="text-tz-bright-orange hover:underline"
                    >
                      grievance@techznanieinnoversity.com
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Section 2: Scope & Acceptance */}
          <motion.div
            id="scope"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16 scroll-mt-24"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-tz-bright-orange to-orange-600 rounded-xl flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white">2. Scope & Acceptance</h2>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <p className="text-white/80 leading-relaxed">
                These Terms govern your use of our websites, mobile apps, learning management system, admissions/CRM
                flows, assessments, cohorts, placement-enablement, communications, and any other Services we identify.
                You accept these Terms by creating an account, clicking "I agree", paying fees, or using any part of the
                Services.
              </p>
            </div>
          </motion.div>

          {/* Section 3: Eligibility */}
          <motion.div
            id="eligibility"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16 scroll-mt-24"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-tz-bright-orange to-orange-600 rounded-xl flex items-center justify-center">
                <CheckCircle className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white">3. Eligibility</h2>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-4">
              <div className="flex items-start gap-3">
                <ChevronRight className="w-5 h-5 text-tz-bright-orange flex-shrink-0 mt-1" />
                <p className="text-white/80">
                  You must be 18 years or older, or use the Services under verifiable parental/guardian consent for
                  minors.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <ChevronRight className="w-5 h-5 text-tz-bright-orange flex-shrink-0 mt-1" />
                <p className="text-white/80">
                  You represent and warrant that the information you provide is accurate, and that you will keep it
                  updated.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Section 4: Accounts & Security */}
          <motion.div
            id="accounts"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16 scroll-mt-24"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-tz-bright-orange to-orange-600 rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white">4. Accounts & Security</h2>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-4">
              <div className="flex items-start gap-3">
                <ChevronRight className="w-5 h-5 text-tz-bright-orange flex-shrink-0 mt-1" />
                <p className="text-white/80">
                  Keep your login credentials confidential. You are responsible for activity under your account unless
                  you promptly report unauthorised use.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <ChevronRight className="w-5 h-5 text-tz-bright-orange flex-shrink-0 mt-1" />
                <p className="text-white/80">
                  We may require identity/KYC verification only where necessary and proportionate (e.g., certification
                  issuance, placement verification) and as permitted by law.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <ChevronRight className="w-5 h-5 text-tz-bright-orange flex-shrink-0 mt-1" />
                <p className="text-white/80">
                  We may suspend or terminate accounts that violate these Terms or applicable law.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Section 5: Programmes, Content & Certificates */}
          <motion.div
            id="programmes"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16 scroll-mt-24"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-tz-bright-orange to-orange-600 rounded-xl flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white">5. Programmes, Content & Certificates</h2>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-4">
              <div className="flex items-start gap-3">
                <ChevronRight className="w-5 h-5 text-tz-bright-orange flex-shrink-0 mt-1" />
                <p className="text-white/80">
                  <strong className="text-tz-cream">No employment guarantee:</strong> Placement support is on a
                  best-efforts basis; employers make hiring decisions.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <ChevronRight className="w-5 h-5 text-tz-bright-orange flex-shrink-0 mt-1" />
                <p className="text-white/80">
                  We may record sessions for quality assurance, trainer enablement, and learner safety; recordings may
                  be reviewed by authorised personnel and are handled per our Privacy Policy.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <ChevronRight className="w-5 h-5 text-tz-bright-orange flex-shrink-0 mt-1" />
                <p className="text-white/80">
                  Course outlines, schedules, trainers, tools and assessment methods may change with reasonable notice;
                  a materially adverse change allows you to request a deferral or a refund as per Section 8.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Section 6: Permitted Use & Conduct */}
          <motion.div
            id="conduct"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16 scroll-mt-24"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-tz-bright-orange to-orange-600 rounded-xl flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white">6. Permitted Use & Conduct</h2>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <p className="text-white/80 mb-4">You agree not to:</p>
              <div className="space-y-3">
                {[
                  "Circumvent access controls",
                  "Copy, distribute or create derivative works from course materials except as allowed",
                  "Upload unlawful, infringing, harmful, or deceptive content",
                  "Harass, discriminate, or engage in academic misconduct (plagiarism/cheating, unauthorised proctoring evasion)",
                  "Interfere with networks or attempt to reverse-engineer the platform",
                  "Misrepresent your identity, qualifications, or outcomes",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <ChevronRight className="w-5 h-5 text-tz-bright-orange flex-shrink-0 mt-1" />
                    <p className="text-white/80">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Section 7: Fees, Payments & Taxes */}
          <motion.div
            id="fees"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16 scroll-mt-24"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-tz-bright-orange to-orange-600 rounded-xl flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white">7. Fees, Payments & Taxes</h2>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-tz-cream mb-2">Official Payment Channels Only</h3>
                <p className="text-white/80">
                  All programme fees are collected by TechZnanie through its authorised payment gateway(s). Training
                  Centres are not authorised to collect fees for TechZnanie-branded programmes; paying elsewhere is at
                  your own risk.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <ChevronRight className="w-5 h-5 text-tz-bright-orange flex-shrink-0 mt-1" />
                <p className="text-white/80">
                  Prices are exclusive of applicable taxes (e.g., GST). You authorise the payment processor to charge
                  your selected payment method for fees and charges, including EMIs/instalments, as applicable.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <ChevronRight className="w-5 h-5 text-tz-bright-orange flex-shrink-0 mt-1" />
                <p className="text-white/80">
                  Receipts and tax invoices will be issued via our systems; any discounts must be pre-authorised by
                  TechZnanie.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Section 8: Refunds Table */}
          <motion.div
            id="refunds"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16 scroll-mt-24"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-tz-bright-orange to-orange-600 rounded-xl flex items-center justify-center">
                <CreditCard className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white">8. Refunds, Cancellations & Deferrals</h2>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <p className="text-white/80 mb-6">
                Unless a specific programme policy states otherwise, our standard consumer policy is:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse">
                  <thead>
                    <tr className="border-b border-white/20">
                      <th className="p-4 text-tz-cream font-semibold">Stage</th>
                      <th className="p-4 text-tz-cream font-semibold">Request Window</th>
                      <th className="p-4 text-tz-cream font-semibold">Refund Amount</th>
                      <th className="p-4 text-tz-cream font-semibold">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr className="border-b border-white/10">
                      <td className="p-4 text-white/90 font-medium">Pre-course</td>
                      <td className="p-4 text-white/80">Within 7 days of payment & before batch start</td>
                      <td className="p-4 text-green-400 font-semibold">80% of NRF</td>
                      <td className="p-4 text-white/70 text-sm">Processing fee retained</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="p-4 text-white/90 font-medium">Early window</td>
                      <td className="p-4 text-white/80">Day 1–7 from batch start</td>
                      <td className="p-4 text-yellow-400 font-semibold">60% of NRF</td>
                      <td className="p-4 text-white/70 text-sm">Access revoked on approval</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="p-4 text-white/90 font-medium">Mid window</td>
                      <td className="p-4 text-white/80">Day 8–14</td>
                      <td className="p-4 text-orange-400 font-semibold">30% of NRF</td>
                      <td className="p-4 text-white/70 text-sm">Case-by-case; learning hours deducted</td>
                    </tr>
                    <tr className="border-b border-white/10">
                      <td className="p-4 text-white/90 font-medium">Late window</td>
                      <td className="p-4 text-white/80">After Day 14</td>
                      <td className="p-4 text-red-400 font-semibold">0%</td>
                      <td className="p-4 text-white/70 text-sm">Only deferral allowed</td>
                    </tr>
                    <tr>
                      <td className="p-4 text-white/90 font-medium">Deferral</td>
                      <td className="p-4 text-white/80">Up to 1 cohort cycle</td>
                      <td className="p-4 text-blue-400 font-semibold">₹1,000 admin fee</td>
                      <td className="p-4 text-white/70 text-sm">One-time only</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <p className="text-white/70 text-sm mt-6">
                <strong className="text-tz-cream">NRF</strong> means the gross fee actually received by TechZnanie minus
                taxes, payment gateway charges, chargebacks, refunds and statutory deductions.
              </p>
              <p className="text-white/80 mt-4">
                For complete refund policy details, please visit our{" "}
                <Link href="/refund-policy" className="text-tz-bright-orange hover:underline">
                  Refund Policy page
                </Link>
                .
              </p>
            </div>
          </motion.div>

          {/* Section 9: Intellectual Property */}
          <motion.div
            id="ip"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16 scroll-mt-24"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-tz-bright-orange to-orange-600 rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white">9. Intellectual Property</h2>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-4">
              <div className="flex items-start gap-3">
                <ChevronRight className="w-5 h-5 text-tz-bright-orange flex-shrink-0 mt-1" />
                <p className="text-white/80">
                  All course content, text, graphics, videos, assessments, software, and trademarks are the intellectual
                  property of TechZnanie or its licensors. You receive a limited, revocable, non-exclusive,
                  non-transferable licence to access the content for your enrolled programme for the programme duration
                  and solely for personal educational purposes.
                </p>
              </div>
              <div className="flex items-start gap-3">
                <ChevronRight className="w-5 h-5 text-tz-bright-orange flex-shrink-0 mt-1" />
                <p className="text-white/80">
                  You must not copy, distribute, re-publish, resell, re-skin, or use content outside the permitted
                  scope.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-tz-cream mb-2">User Content</h3>
                <p className="text-white/80">
                  You retain ownership of your original work (projects, assignments). You grant TechZnanie a
                  non-exclusive licence to use anonymised or aggregated outputs for academic quality improvement and
                  showcasing, subject to the Privacy Policy.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Section 10: Third-Party Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-tz-bright-orange to-orange-600 rounded-xl flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white">10. Third-Party Services & Links</h2>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <p className="text-white/80">
                Our Services may integrate with third-party tools (e.g., conferencing, proctoring, IDEs, job boards,
                payment gateways). Their terms and privacy policies apply. We are not responsible for third-party
                acts/omissions.
              </p>
            </div>
          </motion.div>

          {/* Section 11: Data Protection */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-tz-bright-orange to-orange-600 rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white">11. Data Protection & Privacy</h2>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <p className="text-white/80">
                Your personal data is processed in accordance with our Privacy Policy and applicable Indian law,
                including the Digital Personal Data Protection Act, 2023 (as and when operationalised). By using the
                Services, you acknowledge that you have read our Privacy Policy and understand how we process your data.
              </p>
            </div>
          </motion.div>

          {/* Section 12: Communications */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-tz-bright-orange to-orange-600 rounded-xl flex items-center justify-center">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white">12. Communications & Marketing</h2>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <p className="text-white/80">
                You consent to receive service/transactional messages (email/SMS/WhatsApp). You can manage marketing
                preferences via in-product settings or by writing to us; we do not direct behavioural advertising at
                children.
              </p>
            </div>
          </motion.div>

          {/* Section 13: Warranties & Disclaimers */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-tz-bright-orange to-orange-600 rounded-xl flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white">13. Warranties & Disclaimers</h2>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <p className="text-white/80">
                The Services and content are provided on an "as is" and "as available" basis with reasonable skill and
                care. To the maximum extent permitted by law, we disclaim implied warranties of merchantability, fitness
                for a particular purpose, and non-infringement.
              </p>
            </div>
          </motion.div>

          {/* Section 14: Limitation of Liability */}
          <motion.div
            id="liability"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16 scroll-mt-24"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-tz-bright-orange to-orange-600 rounded-xl flex items-center justify-center">
                <Scale className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white">14. Limitation of Liability</h2>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <p className="text-white/80 mb-4">
                To the maximum extent permitted by law, TechZnanie is not liable for indirect, incidental, special,
                punitive or consequential losses, or loss of profits, data, goodwill or business interruption.
              </p>
              <p className="text-white/80">
                Our aggregate liability for claims arising out of or related to the Services shall not exceed the total
                fees you paid to TechZnanie for the programme giving rise to the claim in the 12 months preceding the
                event. Nothing excludes liability that cannot be limited under applicable law.
              </p>
            </div>
          </motion.div>

          {/* Section 15: Indemnity */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-tz-bright-orange to-orange-600 rounded-xl flex items-center justify-center">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white">15. Indemnity</h2>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <p className="text-white/80">
                You agree to indemnify and hold harmless TechZnanie and its officers, directors, employees and agents
                from claims, losses, liabilities, damages, costs and expenses (including reasonable legal fees) arising
                out of: (a) your breach of these Terms or law; (b) your user content; or (c) your misuse of the
                Services.
              </p>
            </div>
          </motion.div>

          {/* Section 16: Suspension & Termination */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-tz-bright-orange to-orange-600 rounded-xl flex items-center justify-center">
                <AlertCircle className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white">16. Suspension & Termination</h2>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <p className="text-white/80 mb-4">We may suspend or terminate access immediately if you:</p>
              <div className="space-y-3">
                {[
                  "Materially breach these Terms",
                  "Engage in academic misconduct, harassment, fraud, or unlawful activity",
                  "Compromise platform security",
                  "Fail to pay fees",
                ].map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <ChevronRight className="w-5 h-5 text-tz-bright-orange flex-shrink-0 mt-1" />
                    <p className="text-white/80">{item}</p>
                  </div>
                ))}
              </div>
              <p className="text-white/80 mt-4">
                On termination, your licence ends and access to content may cease. Certain sections survive (IP,
                payments due, liability, indemnity, disputes).
              </p>
            </div>
          </motion.div>

          {/* Section 17: Changes to Services & Terms */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-tz-bright-orange to-orange-600 rounded-xl flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white">17. Changes to the Services & Terms</h2>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <p className="text-white/80">
                We may modify the Services (including content and features) or these Terms to improve quality, maintain
                compliance, or reflect business changes. Material changes will be notified via email/in-product notice.
                Your continued use after the effective date constitutes acceptance.
              </p>
            </div>
          </motion.div>

          {/* Section 18: Governing Law & Disputes */}
          <motion.div
            id="disputes"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16 scroll-mt-24"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-tz-bright-orange to-orange-600 rounded-xl flex items-center justify-center">
                <Scale className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white">18. Governing Law, Disputes & Jurisdiction</h2>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8">
              <p className="text-white/80">
                These Terms are governed by the laws of India. Disputes shall be referred to arbitration under the
                Arbitration and Conciliation Act, 1996 (as amended). Seat and venue: Hyderabad, Telangana; language:
                English; sole arbitrator mutually appointed. Subject to arbitration, the courts at Hyderabad, Telangana
                have exclusive jurisdiction.
              </p>
            </div>
          </motion.div>

          {/* Section 19: Grievance Officer */}
          <motion.div
            id="contact"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16 scroll-mt-24"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-tz-bright-orange to-orange-600 rounded-xl flex items-center justify-center">
                <Mail className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white">19. Grievance Officer & Contact</h2>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-tz-cream mb-3">Grievance Officer</h3>
                <p className="text-white/90 font-medium mb-2">Prabhath Sandesh</p>
                <div className="space-y-2">
                  <div className="flex items-start gap-3">
                    <MapPin className="w-5 h-5 text-tz-bright-orange flex-shrink-0 mt-0.5" />
                    <p className="text-white/80">
                      UG9, First Floor, DSL ABACUS IT PARK, IDA Uppal, Hyderabad – 500039, Telangana, India
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <Mail className="w-5 h-5 text-tz-bright-orange" />
                    <a
                      href="mailto:grievance@techznanieinnoversity.com"
                      className="text-tz-bright-orange hover:underline"
                    >
                      grievance@techznanieinnoversity.com
                    </a>
                  </div>
                </div>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-tz-cream mb-3">General Support</h3>
                <div className="flex items-center gap-3">
                  <Mail className="w-5 h-5 text-tz-bright-orange" />
                  <a href="mailto:support@techznanieinnoversity.com" className="text-tz-bright-orange hover:underline">
                    support@techznanieinnoversity.com
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Section 20: Miscellaneous */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-gradient-to-br from-tz-bright-orange to-orange-600 rounded-xl flex items-center justify-center">
                <FileText className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white">20. Miscellaneous</h2>
            </div>
            <div className="bg-white/5 border border-white/10 rounded-2xl p-8 space-y-4">
              <div>
                <h3 className="text-lg font-semibold text-tz-cream mb-2">Force Majeure</h3>
                <p className="text-white/80">
                  We are not liable for delays or failures due to events beyond reasonable control (e.g., natural
                  disasters, epidemic, governmental action, internet outages, third-party service failures).
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-tz-cream mb-2">Severability</h3>
                <p className="text-white/80">If any provision is unenforceable, the remainder remains in effect.</p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-tz-cream mb-2">No Assignment Without Consent</h3>
                <p className="text-white/80">
                  You may not assign these Terms without our prior written consent; we may assign to an affiliate or in
                  connection with a reorganisation.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-tz-cream mb-2">Notices</h3>
                <p className="text-white/80">
                  We may contact you at your registered email/phone; you may contact us at the addresses above.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-tz-cream mb-2">Entire Agreement</h3>
                <p className="text-white/80">
                  These Terms together with programme-specific policies and the Privacy Policy are the entire agreement
                  between you and TechZnanie.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-tz-bright-orange/20 to-orange-600/20 border-t border-white/10">
        <div className="container-modern">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-white mb-4">Questions About Our Terms?</h2>
            <p className="text-white/80 mb-8">
              If you have any questions or concerns about these Terms of Service, please don't hesitate to contact us.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a
                href="mailto:support@techznanieinnoversity.com"
                className="inline-flex items-center gap-2 bg-tz-bright-orange hover:bg-orange-600 text-white font-semibold px-8 py-4 rounded-xl transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
                Contact Support
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-semibold px-8 py-4 rounded-xl border border-white/20 transition-all duration-300"
              >
                <Phone className="w-5 h-5" />
                Get in Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer Note */}
      <section className="py-8 border-t border-white/10">
        <div className="container-modern">
          <p className="text-center text-white/60 text-sm">
            © 2025 TechZnanie Innoversity Private Limited. All rights reserved.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  )
}
