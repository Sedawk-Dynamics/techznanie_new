"use client"

import { motion } from "framer-motion"
import {
  Shield,
  Building2,
  Scale,
  Database,
  Target,
  Gavel,
  Cookie,
  Share2,
  Globe,
  Clock,
  Lock,
  UserCheck,
  Baby,
  Handshake,
  Users,
  AlertTriangle,
  Phone,
  RefreshCw,
  MapPin,
  Mail,
  FileText,
  CheckCircle2,
  ArrowRight,
  Eye,
  Edit3,
  Trash2,
  MessageSquare,
  UserPlus,
} from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const sections = [
  { id: "who-we-are", title: "Who We Are & Scope", icon: Building2 },
  { id: "applicable-law", title: "Applicable Law & Our Role", icon: Scale },
  { id: "data-collection", title: "What Personal Data We Collect", icon: Database },
  { id: "purposes", title: "Why We Process Personal Data", icon: Target },
  { id: "legal-bases", title: "Legal Bases Under Indian Law", icon: Gavel },
  { id: "cookies", title: "Cookies & Similar Technologies", icon: Cookie },
  { id: "sharing", title: "Sharing & Disclosures", icon: Share2 },
  { id: "international", title: "International Transfers", icon: Globe },
  { id: "retention", title: "Data Retention", icon: Clock },
  { id: "security", title: "Security", icon: Lock },
  { id: "your-rights", title: "Your Rights", icon: UserCheck },
  { id: "children", title: "Children's Privacy", icon: Baby },
  { id: "training-centres", title: "Relationship with Training Centres", icon: Handshake },
  { id: "processors", title: "Sub-processors & Third Parties", icon: Users },
  { id: "breaches", title: "Data Breaches & Notifications", icon: AlertTriangle },
  { id: "contact", title: "Grievance Officer & Contact", icon: Phone },
  { id: "changes", title: "Changes to This Policy", icon: RefreshCw },
  { id: "jurisdiction", title: "Jurisdiction", icon: MapPin },
]

export default function PrivacyPolicyPage() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id)
    if (element) {
      const offset = 100
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - offset

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-tz-dark-navy via-[#0D1B2A] to-tz-dark-navy">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-tz-bright-orange/10 via-transparent to-tz-medium-blue/10"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-tz-bright-orange/20 rounded-full blur-3xl"></div>
        <div className="absolute bottom-10 left-10 w-96 h-96 bg-tz-medium-blue/20 rounded-full blur-3xl"></div>

        <div className="container-modern relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="flex items-center justify-center mb-6">
              <Shield className="w-16 h-16 text-tz-bright-orange" />
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">Privacy Policy</h1>
            <p className="text-xl text-white/80 mb-8">
              Your privacy is important to us. Learn how we collect, use, and protect your personal data.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-6 text-white/70">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-tz-bright-orange" />
                <span>
                  <strong>Effective Date:</strong> 19-08-2025
                </span>
              </div>
              <div className="flex items-center gap-2">
                <RefreshCw className="w-5 h-5 text-tz-bright-orange" />
                <span>
                  <strong>Last Updated:</strong> 15-09-2025
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Summary */}
      <section className="py-12 border-y border-white/10 bg-gradient-to-r from-tz-bright-orange/10 to-tz-medium-blue/10">
        <div className="container-modern">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-3">
              <CheckCircle2 className="w-8 h-8 text-tz-bright-orange" />
              Quick Summary (Non-Contractual)
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {[
                "TechZnanie is the Data Fiduciary for its platforms; partners are Data Processors",
                "We collect only what we need; we don't sell personal data",
                "Children <18: parental consent required; no behavioural monitoring/targeted ads",
                "You have access/correction/erasure/grievance/nomination rights",
                "Security & breach response in place; we notify as required by law",
                "International transfers only to countries not restricted by Government of India, with safeguards",
              ].map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="flex items-start gap-3 bg-white/5 backdrop-blur-sm p-4 rounded-xl border border-white/10"
                >
                  <CheckCircle2 className="w-5 h-5 text-tz-bright-orange flex-shrink-0 mt-0.5" />
                  <span className="text-white/90">{item}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Navigation */}
      <section className="py-16 bg-tz-dark-navy/50">
        <div className="container-modern">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="max-w-6xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-white mb-8 text-center">Quick Navigation</h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {sections.map((section, index) => (
                <motion.button
                  key={section.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  viewport={{ once: true }}
                  onClick={() => scrollToSection(section.id)}
                  className="flex items-center gap-3 p-4 bg-white/5 hover:bg-white/10 backdrop-blur-sm rounded-xl border border-white/10 hover:border-tz-bright-orange/50 transition-all duration-300 text-left group"
                >
                  <section.icon className="w-5 h-5 text-tz-bright-orange flex-shrink-0 group-hover:scale-110 transition-transform" />
                  <span className="text-white/90 group-hover:text-white text-sm">{section.title}</span>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-20">
        <div className="container-modern">
          <div className="max-w-4xl mx-auto space-y-12">
            {/* Section 1: Who We Are */}
            <motion.div
              id="who-we-are"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm p-8 rounded-2xl border border-white/10 scroll-mt-24"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-tz-bright-orange/20 rounded-xl">
                  <Building2 className="w-6 h-6 text-tz-bright-orange" />
                </div>
                <h2 className="text-2xl font-bold text-white">1. Who We Are & Scope</h2>
              </div>
              <div className="space-y-4 text-white/80">
                <div>
                  <h3 className="font-semibold text-white mb-2">Legal Entity:</h3>
                  <p>TECHZNANIE INNOVERSITY PRIVATE LIMITED, a company limited by shares incorporated in India.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">Registered Office:</h3>
                  <p>UG9, First Floor, DSL ABACUS IT PARK, IDA Uppal, Hyderabad – 500039, Telangana, India.</p>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">Contact:</h3>
                  <ul className="list-disc list-inside space-y-1 ml-4">
                    <li>
                      Legal:{" "}
                      <a
                        href="mailto:legal@techznanieinnoversity.com"
                        className="text-tz-bright-orange hover:underline"
                      >
                        legal@techznanieinnoversity.com
                      </a>
                    </li>
                    <li>
                      Support:{" "}
                      <a
                        href="mailto:support@techznanieinnoversity.com"
                        className="text-tz-bright-orange hover:underline"
                      >
                        support@techznanieinnoversity.com
                      </a>
                    </li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-semibold text-white mb-2">Applicability:</h3>
                  <p>
                    This Policy applies to individuals using our Services, including learners, applicants,
                    parents/guardians, trainers, placement participants, and visitors to our sites/apps. It also applies
                    to personal data we process via authorised training centre partners and service providers acting on
                    our instructions.
                  </p>
                </div>
                <div className="bg-tz-bright-orange/10 border border-tz-bright-orange/30 p-4 rounded-xl">
                  <p className="text-sm">
                    <strong>Note:</strong> If a partner determines its own purposes/means outside our written
                    instructions (e.g., runs a non-TechZnanie programme using its own systems), that partner acts as an
                    independent data fiduciary for that processing. In such cases, their privacy policy applies.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Section 2: Applicable Law */}
            <motion.div
              id="applicable-law"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm p-8 rounded-2xl border border-white/10 scroll-mt-24"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-blue-500/20 rounded-xl">
                  <Scale className="w-6 h-6 text-blue-400" />
                </div>
                <h2 className="text-2xl font-bold text-white">2. Applicable Law & Our Role</h2>
              </div>
              <div className="space-y-4 text-white/80">
                <p>
                  We process digital personal data in accordance with India's{" "}
                  <strong>Digital Personal Data Protection Act, 2023 (DPDP Act)</strong> and related rules/notifications
                  as they come into effect, together with applicable provisions of the Information Technology Act, 2000
                  and rules (including privacy/security requirements) for relevant activities.
                </p>
                <div>
                  <h3 className="font-semibold text-white mb-2">Our Role:</h3>
                  <ul className="list-disc list-inside space-y-2 ml-4">
                    <li>
                      For TechZnanie-branded programmes and platforms, <strong>TechZnanie is the Data Fiduciary</strong>
                      .
                    </li>
                    <li>
                      Authorised training centres, cloud vendors, payment gateways and similar vendors act as{" "}
                      <strong>Data Processors</strong> under written contracts.
                    </li>
                  </ul>
                </div>
                <div className="bg-blue-500/10 border border-blue-500/30 p-4 rounded-xl">
                  <h3 className="font-semibold text-white mb-2">Children's Data:</h3>
                  <p className="text-sm">
                    We treat persons under 18 years as children. We implement parental/guardian consent workflows and do
                    not engage in behavioural monitoring or targeted advertising directed at children.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Section 3: Data Collection */}
            <motion.div
              id="data-collection"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm p-8 rounded-2xl border border-white/10 scroll-mt-24"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-purple-500/20 rounded-xl">
                  <Database className="w-6 h-6 text-purple-400" />
                </div>
                <h2 className="text-2xl font-bold text-white">3. What Personal Data We Collect</h2>
              </div>
              <div className="space-y-4 text-white/80">
                <p>The categories we may collect and process include:</p>
                <div className="grid gap-4">
                  <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                    <h3 className="font-semibold text-white mb-2">Identity & Contact:</h3>
                    <p className="text-sm">
                      Name, photo, date of birth, age, gender (optional), email, phone, address, parent/guardian
                      details.
                    </p>
                  </div>
                  <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                    <h3 className="font-semibold text-white mb-2">Education & Programme:</h3>
                    <p className="text-sm">
                      Qualifications, institution, grades, assessments, attendance, projects/portfolios, certificates,
                      placement readiness scores.
                    </p>
                  </div>
                  <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                    <h3 className="font-semibold text-white mb-2">Admissions & Finance:</h3>
                    <p className="text-sm">
                      Application form data, batch/programme selected, fee plan, payment identifiers (via PG), invoices,
                      refunds/deferrals.
                    </p>
                  </div>
                  <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                    <h3 className="font-semibold text-white mb-2">KYC & Compliance (where required):</h3>
                    <p className="text-sm">
                      Government ID last 4 digits / masked copy, nationality, disability support requirements
                      (optional), residency; strictly minimised.
                    </p>
                  </div>
                  <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                    <h3 className="font-semibold text-white mb-2">Device/Usage:</h3>
                    <p className="text-sm">
                      IP, device/browser data, app identifiers, event logs, LMS usage, interactions, cookies/SDK
                      telemetry.
                    </p>
                  </div>
                  <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                    <h3 className="font-semibold text-white mb-2">Communications:</h3>
                    <p className="text-sm">
                      Enquiries, support tickets, calls/chats, email/SMS/WhatsApp preferences, survey/NPS responses.
                    </p>
                  </div>
                  <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                    <h3 className="font-semibold text-white mb-2">Placement:</h3>
                    <p className="text-sm">
                      Resume/profile, preferred roles/locations, interview performance notes, offer/joining outcomes.
                    </p>
                  </div>
                </div>
                <p className="text-sm">
                  We collect data directly from you (forms, uploads, assessments), automatically (cookies/SDKs), and
                  from partners (authorised training centres, employers for offer verification) strictly for permitted
                  purposes.
                </p>
              </div>
            </motion.div>

            {/* Section 4: Purposes */}
            <motion.div
              id="purposes"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm p-8 rounded-2xl border border-white/10 scroll-mt-24"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-green-500/20 rounded-xl">
                  <Target className="w-6 h-6 text-green-400" />
                </div>
                <h2 className="text-2xl font-bold text-white">4. Why We Process Personal Data (Purposes)</h2>
              </div>
              <div className="space-y-3 text-white/80">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Admissions & enrolment:</strong> Verify eligibility; programme
                    allotment; generate invoices/receipts; refunds/deferrals; fraud prevention.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Learning delivery:</strong> Enable LMS access; track
                    progress/attendance; assessments & certification; trainer QA.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Placement enablement:</strong> Aptitude/GD/interview prep; resume
                    forwarding with your consent; scheduling interviews; outcome tracking.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Customer support & communications:</strong> Service messages, policy
                    updates, grievance handling.
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Analytics & improvement:</strong> Usage analytics, quality audits,
                    new feature/content development (in aggregated or de-identified form where possible).
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                  <div>
                    <strong className="text-white">Legal & compliance:</strong> Tax/GST, KYC (where applicable),
                    court/government requests, statutory reporting, and security incident response.
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Section 5: Legal Bases */}
            <motion.div
              id="legal-bases"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm p-8 rounded-2xl border border-white/10 scroll-mt-24"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-yellow-500/20 rounded-xl">
                  <Gavel className="w-6 h-6 text-yellow-400" />
                </div>
                <h2 className="text-2xl font-bold text-white">5. Legal Bases / Grounds Under Indian Law</h2>
              </div>
              <div className="space-y-4 text-white/80">
                <p>We process personal data on the following grounds:</p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">Consent:</strong> Clear, specific consent obtained at the point of
                      collection, with the ability to withdraw at any time.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">Certain legitimate uses permitted by law:</strong> E.g., to comply
                      with law or court orders; to respond to medical emergencies; for employment/HR; for
                      prevention/detection of offences; or for fair and reasonable purposes as permitted.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-yellow-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">Contractual necessity:</strong> To provide the Services you request
                      (e.g., enrolment and delivery).
                    </div>
                  </div>
                </div>
                <div className="bg-yellow-500/10 border border-yellow-500/30 p-4 rounded-xl">
                  <p className="text-sm">
                    Withdrawal of consent does not affect prior processing. If you withdraw consent or deny processing
                    necessary for the Services, some features may become unavailable.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Section 6: Cookies */}
            <motion.div
              id="cookies"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm p-8 rounded-2xl border border-white/10 scroll-mt-24"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-pink-500/20 rounded-xl">
                  <Cookie className="w-6 h-6 text-pink-400" />
                </div>
                <h2 className="text-2xl font-bold text-white">6. Cookies & Similar Technologies</h2>
              </div>
              <div className="space-y-4 text-white/80">
                <p>
                  We use cookies, SDKs and similar tools for core functionality (authentication, session management),
                  preferences, analytics, and to measure campaign performance.
                </p>
                <p>
                  You can manage cookies via browser/app settings; essential cookies cannot be disabled as they are
                  required for the Services to function.
                </p>
                <div className="bg-pink-500/10 border border-pink-500/30 p-4 rounded-xl">
                  <p className="text-sm">
                    <strong>Important:</strong> We do not serve targeted advertising to children.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Section 7: Sharing */}
            <motion.div
              id="sharing"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm p-8 rounded-2xl border border-white/10 scroll-mt-24"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-cyan-500/20 rounded-xl">
                  <Share2 className="w-6 h-6 text-cyan-400" />
                </div>
                <h2 className="text-2xl font-bold text-white">7. Sharing & Disclosures</h2>
              </div>
              <div className="space-y-4 text-white/80">
                <div className="bg-cyan-500/10 border border-cyan-500/30 p-4 rounded-xl">
                  <p className="font-semibold text-white">We do not sell personal data.</p>
                </div>
                <p>We share data in these limited circumstances:</p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">Processors acting for us:</strong> Authorised training centres (for
                      delivery/coordination), cloud/LMS/CRM, payment gateways, email/SMS/WhatsApp providers, analytics
                      vendors, proctoring tools (where applicable).
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">Placement partners/employers:</strong> With your consent to enable
                      interviews and offers.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">Legal & compliance:</strong> Regulators, courts, law enforcement
                      when legally required; auditors/consultants under confidentiality.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">Business transfers:</strong> During mergers, acquisitions or
                      reorganisation with appropriate safeguards.
                    </div>
                  </div>
                </div>
                <p className="text-sm">
                  All processors are bound by contracts requiring confidentiality, security, and processing solely on
                  our instructions. We maintain a current list of sub-processors on request.
                </p>
              </div>
            </motion.div>

            {/* Section 8: International Transfers */}
            <motion.div
              id="international"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm p-8 rounded-2xl border border-white/10 scroll-mt-24"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-indigo-500/20 rounded-xl">
                  <Globe className="w-6 h-6 text-indigo-400" />
                </div>
                <h2 className="text-2xl font-bold text-white">8. International Transfers</h2>
              </div>
              <div className="space-y-4 text-white/80">
                <p>
                  We may process and store data on servers or cloud regions outside India. Transfers are performed with
                  contractual safeguards and only to countries/regions not restricted by the Government of India.
                </p>
                <p>Where required, we will provide you information on the destination and safeguards.</p>
              </div>
            </motion.div>

            {/* Section 9: Data Retention */}
            <motion.div
              id="retention"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm p-8 rounded-2xl border border-white/10 scroll-mt-24"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-orange-500/20 rounded-xl">
                  <Clock className="w-6 h-6 text-orange-400" />
                </div>
                <h2 className="text-2xl font-bold text-white">9. Data Retention</h2>
              </div>
              <div className="space-y-4 text-white/80">
                <p>
                  We keep personal data only as long as necessary for the purposes described, including legal/accounting
                  requirements and dispute resolution, after which we delete or irreversibly anonymise it.
                </p>
                <div className="space-y-3">
                  <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                    <strong className="text-white">Admissions, billing & tax records:</strong> 8 years from the end of
                    the financial year
                  </div>
                  <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                    <strong className="text-white">Academic & assessment records:</strong> 5 years after course
                    completion
                  </div>
                  <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                    <strong className="text-white">Placement records:</strong> 3 years after outcome closure
                  </div>
                  <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                    <strong className="text-white">Support/grievance logs:</strong> 3 years from closure
                  </div>
                  <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                    <strong className="text-white">Cookies/telemetry:</strong> Per cookie/SDK life (generally 3–24
                    months), unless aggregated
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Section 10: Security */}
            <motion.div
              id="security"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm p-8 rounded-2xl border border-white/10 scroll-mt-24"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-red-500/20 rounded-xl">
                  <Lock className="w-6 h-6 text-red-400" />
                </div>
                <h2 className="text-2xl font-bold text-white">10. Security</h2>
              </div>
              <div className="space-y-4 text-white/80">
                <p>We implement organisational, technical and physical safeguards, including:</p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    "Role-based access control",
                    "Encryption in transit",
                    "Secure key management",
                    "Network segmentation",
                    "Logging/monitoring",
                    "Vulnerability management",
                    "Staff training",
                    "Vendor due diligence",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 bg-white/5 p-3 rounded-lg border border-white/10"
                    >
                      <CheckCircle2 className="w-4 h-4 text-red-400 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <p>
                  We operate an incident response process including detection, containment, investigation, and
                  notification as required by law.
                </p>
              </div>
            </motion.div>

            {/* Section 11: Your Rights */}
            <motion.div
              id="your-rights"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm p-8 rounded-2xl border border-white/10 scroll-mt-24"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-emerald-500/20 rounded-xl">
                  <UserCheck className="w-6 h-6 text-emerald-400" />
                </div>
                <h2 className="text-2xl font-bold text-white">11. Your Rights (Data Principal Rights)</h2>
              </div>
              <div className="space-y-4 text-white/80">
                <p>Subject to law, you can:</p>
                <div className="space-y-3">
                  <div className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
                    <Eye className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">Access</strong> a summary of personal data we process about you
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
                    <Edit3 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">Correct/Update</strong> inaccurate or incomplete data
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
                    <Trash2 className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">Erase</strong> data that is no longer necessary or where consent is
                      withdrawn (subject to legal retention)
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
                    <MessageSquare className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">Grievance-redressal</strong> via our Grievance Officer
                    </div>
                  </div>
                  <div className="flex items-start gap-3 bg-white/5 p-4 rounded-xl border border-white/10">
                    <UserPlus className="w-5 h-5 text-emerald-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">Nominate</strong> an individual to exercise your rights in the
                      event of your death or incapacity
                    </div>
                  </div>
                </div>
                <div className="bg-emerald-500/10 border border-emerald-500/30 p-4 rounded-xl">
                  <h3 className="font-semibold text-white mb-2">How to exercise:</h3>
                  <p className="text-sm">
                    Email{" "}
                    <a
                      href="mailto:privacy@techznanieinnoversity.com"
                      className="text-tz-bright-orange hover:underline"
                    >
                      privacy@techznanieinnoversity.com
                    </a>{" "}
                    or use in-product settings where available. We will verify your identity and respond within
                    statutory timelines.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Section 12: Children's Privacy */}
            <motion.div
              id="children"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm p-8 rounded-2xl border border-white/10 scroll-mt-24"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-pink-500/20 rounded-xl">
                  <Baby className="w-6 h-6 text-pink-400" />
                </div>
                <h2 className="text-2xl font-bold text-white">12. Children's Privacy</h2>
              </div>
              <div className="space-y-4 text-white/80">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-pink-400 flex-shrink-0 mt-0.5" />
                    <div>We treat individuals under 18 years as children.</div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-pink-400 flex-shrink-0 mt-0.5" />
                    <div>We seek verifiable parental/guardian consent before processing children's data.</div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-pink-400 flex-shrink-0 mt-0.5" />
                    <div>We do not undertake behavioural monitoring or targeted advertising directed at children.</div>
                  </div>
                  <div className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-pink-400 flex-shrink-0 mt-0.5" />
                    <div>
                      Parents/guardians can review, correct or request deletion of their child's data by contacting us.
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Section 13: Training Centres */}
            <motion.div
              id="training-centres"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm p-8 rounded-2xl border border-white/10 scroll-mt-24"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-violet-500/20 rounded-xl">
                  <Handshake className="w-6 h-6 text-violet-400" />
                </div>
                <h2 className="text-2xl font-bold text-white">13. Relationship with Authorised Training Centres</h2>
              </div>
              <div className="space-y-4 text-white/80">
                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">For TechZnanie-branded programmes:</strong> Centres act as Data
                      Processors on our behalf and must follow our Data Processing Addendum and instructions.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-white">Payment collection:</strong> Centres must not collect programme
                      fees directly; admissions and fee authorisation are managed by TechZnanie's official systems.
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <ArrowRight className="w-5 h-5 text-violet-400 flex-shrink-0 mt-0.5" />
                    <div>
                      Where a centre determines purposes/means beyond our instructions (e.g., non-TechZnanie offerings),
                      it acts as an independent Data Fiduciary and must provide its own privacy notice and lawful basis.
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Section 14: Sub-processors */}
            <motion.div
              id="processors"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm p-8 rounded-2xl border border-white/10 scroll-mt-24"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-sky-500/20 rounded-xl">
                  <Users className="w-6 h-6 text-sky-400" />
                </div>
                <h2 className="text-2xl font-bold text-white">14. Sub-processors & Third Parties</h2>
              </div>
              <div className="space-y-4 text-white/80">
                <p>We maintain contracts with all processors and require appropriate safeguards. Typical categories:</p>
                <div className="grid sm:grid-cols-2 gap-3">
                  {[
                    "Cloud hosting/CDN",
                    "Email/SMS/WhatsApp",
                    "Analytics",
                    "Payment gateways",
                    "Digital signing",
                    "Proctoring/remote exam tools",
                    "Customer support",
                    "Placement portals",
                  ].map((item, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-2 bg-white/5 p-3 rounded-lg border border-white/10"
                    >
                      <CheckCircle2 className="w-4 h-4 text-sky-400 flex-shrink-0" />
                      <span className="text-sm">{item}</span>
                    </div>
                  ))}
                </div>
                <p className="text-sm">We will provide an up-to-date list on request.</p>
              </div>
            </motion.div>

            {/* Section 15: Data Breaches */}
            <motion.div
              id="breaches"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm p-8 rounded-2xl border border-white/10 scroll-mt-24"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-amber-500/20 rounded-xl">
                  <AlertTriangle className="w-6 h-6 text-amber-400" />
                </div>
                <h2 className="text-2xl font-bold text-white">15. Data Breaches & Notifications</h2>
              </div>
              <div className="space-y-4 text-white/80">
                <p>
                  If we become aware of a personal data breach, we will take steps to mitigate harm and notify the Data
                  Protection Board of India and affected individuals as required by law and/or Board directions.
                </p>
              </div>
            </motion.div>

            {/* Section 16: Grievance Officer */}
            <motion.div
              id="contact"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-tz-bright-orange/10 to-tz-medium-blue/10 backdrop-blur-sm p-8 rounded-2xl border border-tz-bright-orange/30 scroll-mt-24"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-tz-bright-orange/20 rounded-xl">
                  <Phone className="w-6 h-6 text-tz-bright-orange" />
                </div>
                <h2 className="text-2xl font-bold text-white">16. Grievance Officer & Contact</h2>
              </div>
              <div className="space-y-4 text-white/80">
                <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                  <h3 className="font-semibold text-white mb-2">Grievance Officer:</h3>
                  <p className="mb-3">Prabhath Sandesh</p>
                  <div className="space-y-2">
                    <div className="flex items-start gap-2">
                      <MapPin className="w-4 h-4 text-tz-bright-orange flex-shrink-0 mt-0.5" />
                      <span className="text-sm">
                        UG9, First Floor, DSL ABACUS IT PARK, IDA Uppal, Hyderabad – 500039, Telangana, India
                      </span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Mail className="w-4 h-4 text-tz-bright-orange flex-shrink-0" />
                      <a
                        href="mailto:grievance@techznanieinnoversity.com"
                        className="text-tz-bright-orange hover:underline text-sm"
                      >
                        grievance@techznanieinnoversity.com
                      </a>
                    </div>
                  </div>
                </div>
                <div className="bg-white/5 p-4 rounded-xl border border-white/10">
                  <h3 className="font-semibold text-white mb-2">Data Protection / Privacy Queries:</h3>
                  <a href="mailto:privacy@techznanieinnoversity.com" className="text-tz-bright-orange hover:underline">
                    privacy@techznanieinnoversity.com
                  </a>
                </div>
                <p className="text-sm">
                  If you are unsatisfied with our response, you may escalate per applicable law including to the Data
                  Protection Board of India.
                </p>
              </div>
            </motion.div>

            {/* Section 17: Changes */}
            <motion.div
              id="changes"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm p-8 rounded-2xl border border-white/10 scroll-mt-24"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-teal-500/20 rounded-xl">
                  <RefreshCw className="w-6 h-6 text-teal-400" />
                </div>
                <h2 className="text-2xl font-bold text-white">17. Changes to This Policy</h2>
              </div>
              <div className="space-y-4 text-white/80">
                <p>
                  We may update this Policy from time to time. Material changes will be notified via email/in-product
                  notice. The updated Policy will be effective on posting unless a different effective date is stated.
                </p>
              </div>
            </motion.div>

            {/* Section 18: Jurisdiction */}
            <motion.div
              id="jurisdiction"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-white/5 to-white/[0.02] backdrop-blur-sm p-8 rounded-2xl border border-white/10 scroll-mt-24"
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-rose-500/20 rounded-xl">
                  <MapPin className="w-6 h-6 text-rose-400" />
                </div>
                <h2 className="text-2xl font-bold text-white">18. Jurisdiction</h2>
              </div>
              <div className="space-y-4 text-white/80">
                <p>
                  This Policy is governed by the laws of India. Disputes are subject to applicable law and forums in
                  India, without prejudice to rights under data protection law.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-tz-bright-orange/10 to-tz-medium-blue/10 border-t border-white/10">
        <div className="container-modern">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto text-center"
          >
            <Shield className="w-16 h-16 text-tz-bright-orange mx-auto mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Questions About Your Privacy?</h2>
            <p className="text-xl text-white/80 mb-8">
              Our team is here to help you understand how we protect your personal information.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asChild size="lg" className="bg-tz-bright-orange hover:bg-[#e67200] text-white">
                <Link href="/contact">
                  <Mail className="mr-2 w-5 h-5" />
                  Contact Us
                </Link>
              </Button>
              <Button
                asChild
                size="lg"
                variant="outline"
                className="border-white/20 text-white hover:bg-white/10 bg-transparent"
              >
                <Link href="/terms-of-service">
                  <FileText className="mr-2 w-5 h-5" />
                  Terms of Service
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
