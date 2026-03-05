"use client"

import { motion } from "framer-motion"
import { ArrowLeft, AlertCircle, CheckCircle2, Clock, FileText, HelpCircle, Mail, MapPin } from "lucide-react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function RefundPolicyPage() {
  const refundMatrix = [
    {
      stage: "Pre-course",
      window: "Within 7 days of payment and before Batch Start Date",
      refund: "80% of NRF",
      notes: "Processing & admin retained",
    },
    {
      stage: "Early window",
      window: "Day 1–7 from Batch Start Date",
      refund: "60% of NRF",
      notes: "Access revoked on approval",
    },
    {
      stage: "Mid window",
      window: "Day 8–14",
      refund: "30% of NRF",
      notes: "Case-by-case; learning hours/kit usage considered",
    },
    {
      stage: "Late window",
      window: "After Day 14",
      refund: "0%",
      notes: "No refunds; see Deferral",
    },
    {
      stage: "Deferral",
      window: "Up to 1 cohort cycle",
      refund: "₹1,000 admin fee",
      notes: "One-time only",
    },
  ]

  const specialScenarios = [
    {
      title: "Duplicate payment / payment error",
      description: "100% reversal to original instrument after verification.",
    },
    {
      title: "Transaction failure",
      description: "Auto-reversal by the issuing bank/gateway or manual reversal by TechZnanie on proof.",
    },
    {
      title: "Programme cancelled by TechZnanie",
      description: "Full 100% of NRF refund or free deferral at your choice (if no equivalent alternate offered).",
    },
    {
      title: "Material schedule/content change",
      description: "Proportionate refund or deferral (submit evidence causing inability to attend).",
    },
    {
      title: "Medical emergency / bereavement",
      description:
        "Case-by-case discretion with documentary proof; may result in enhanced refund/fee waiver or free deferral.",
    },
    {
      title: "Misconduct/cheating/ToS breach",
      description: "No refund; access may be terminated.",
    },
  ]

  const keyDefinitions = [
    {
      term: "Batch Start Date",
      definition: "The published start date of your cohort.",
    },
    {
      term: "Net Realised Fees (NRF)",
      definition:
        "Gross fees actually received by TechZnanie minus GST, payment gateway charges, chargebacks, refunds and statutory deductions. Refunds are calculated on NRF.",
    },
    {
      term: "Active Learner",
      definition:
        "A learner who has attended at least one live session or accessed LMS content after the Batch Start Date.",
    },
    {
      term: "Deferral",
      definition: "A one-time move to a later cohort of the same programme under the terms below.",
    },
    {
      term: "Standard Programme Fee",
      definition:
        "₹21,999 (exclusive of applicable GST) unless a different price is explicitly shown on the programme page or your SOW/offer letter.",
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
        <Navbar />
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-tz-dark-navy via-tz-medium-blue to-tz-light-blue py-20 overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 right-20 w-72 h-72 bg-tz-bright-orange/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 left-20 w-96 h-96 bg-tz-cream/10 rounded-full blur-3xl"></div>
        </div>

        <div className="container-modern relative z-10">
          <Link href="/" className="inline-flex items-center text-white/80 hover:text-white mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Link>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Refunds, Cancellations & Deferrals Policy
            </h1>
            <p className="text-xl text-white/90 mb-4">TECHZNANIE INNOVERSITY PRIVATE LIMITED</p>
            <div className="flex flex-wrap gap-4 text-white/80">
              <div className="flex items-center">
                <Clock className="w-5 h-5 mr-2" />
                <span>Effective: 19-08-2025</span>
              </div>
              <div className="flex items-center">
                <FileText className="w-5 h-5 mr-2" />
                <span>Last Updated: 15-09-2025</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Summary */}
      <section className="py-16 bg-gradient-to-br from-orange-50 to-blue-50">
        <div className="container-modern">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-white rounded-2xl shadow-lg p-8 border-l-4 border-tz-bright-orange"
          >
            <div className="flex items-start mb-6">
              <AlertCircle className="w-8 h-8 text-tz-bright-orange mr-4 flex-shrink-0 mt-1" />
              <div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">Quick Consumer Summary</h2>
                <p className="text-gray-600 mb-4">(Non-contractual overview)</p>
              </div>
            </div>
            <ul className="space-y-3">
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">
                  <strong>Refunds depend on timing:</strong> 80% ≤7 days pre-start; 60% Days 1–7; 30% Days 8–14; 0%
                  after Day 14
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">
                  <strong>One deferral allowed</strong> (₹1,000 admin fee) within 6 months
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">
                  <strong>Official payments only:</strong> Pay and get refunded only via TechZnanie's official gateways
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">
                  <strong>Duplicate/failed transactions</strong> are fully reversed
                </span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">
                  <strong>Programme cancelled by TechZnanie</strong> → 100% NRF back or free deferral
                </span>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16">
        <div className="container-modern max-w-6xl">
          {/* Where This Policy Applies */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">1. Where This Policy Applies</h2>
              <div className="space-y-4">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Who</h3>
                  <p className="text-gray-700">
                    Individual learners (or parents/guardians for minors) who enrol directly with TechZnanie.
                  </p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">What</h3>
                  <p className="text-gray-700">TechZnanie-branded programmes and bootcamps (online/offline/blended).</p>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">Not Covered</h3>
                  <p className="text-gray-700">
                    Corporate/CSR-sponsored seats, third-party marketplace purchases, or non-TechZnanie programmes
                    delivered independently by a partner. Such cases follow the sponsor's/marketplace's policy.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Key Definitions */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">2. Key Definitions</h2>
              <div className="space-y-6">
                {keyDefinitions.map((item, index) => (
                  <div key={index} className="border-l-4 border-tz-bright-orange pl-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{item.term}</h3>
                    <p className="text-gray-700">{item.definition}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Refund Matrix */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">3. Standard Consumer Refund Matrix</h2>
              <p className="text-gray-700 mb-6">
                Unless a specific programme policy states otherwise, the following applies:
              </p>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                  <thead>
                    <tr className="bg-gradient-to-r from-tz-bright-orange to-tz-dark-orange text-white">
                      <th className="p-4 text-left rounded-tl-lg">Stage</th>
                      <th className="p-4 text-left">Request Window</th>
                      <th className="p-4 text-left">Refund Amount</th>
                      <th className="p-4 text-left rounded-tr-lg">Notes</th>
                    </tr>
                  </thead>
                  <tbody>
                    {refundMatrix.map((row, index) => (
                      <tr
                        key={index}
                        className={`border-b border-gray-200 ${index % 2 === 0 ? "bg-gray-50" : "bg-white"}`}
                      >
                        <td className="p-4 font-semibold text-gray-900">{row.stage}</td>
                        <td className="p-4 text-gray-700">{row.window}</td>
                        <td className="p-4 text-gray-900 font-semibold">{row.refund}</td>
                        <td className="p-4 text-gray-700">{row.notes}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="mt-6 p-4 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-lg">
                <p className="text-yellow-800 font-semibold">
                  <strong>Important:</strong> Training Centres are not authorised to collect or refund fees for
                  TechZnanie-branded programmes. All payments and refunds are processed by TechZnanie via its authorised
                  gateways only.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Special Scenarios */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">4. Special Scenarios</h2>
              <div className="grid gap-6">
                {specialScenarios.map((scenario, index) => (
                  <div
                    key={index}
                    className="p-6 bg-gradient-to-br from-blue-50 to-orange-50 rounded-xl border border-gray-200"
                  >
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{scenario.title}</h3>
                    <p className="text-gray-700">{scenario.description}</p>
                  </div>
                ))}
                <div className="p-6 bg-gradient-to-br from-blue-50 to-orange-50 rounded-xl border border-gray-200">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Hardware/learning kits</h3>
                  <p className="text-gray-700">
                    Physical kits must be returned unused (or charged at cost) for refunds above the Early window.
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* EMI/Loan Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">5. EMI/Loan & Third-Party Finance</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-tz-bright-orange rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    If you paid via EMI/loan, refunds are processed by TechZnanie to the original merchant transaction;
                    settlement with your lender (including pre-closure/foreclosure charges) is between you and the
                    lender.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-tz-bright-orange rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    For no-cost EMI, bank interest subvention arrangements do not increase your refund.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-tz-bright-orange rounded-full mt-2 mr-4 flex-shrink-0"></div>
                  <p className="text-gray-700">
                    Wallets/UPI/cards: credit back follows the issuing bank's/payment gateway timelines after TechZnanie
                    approves the refund.
                  </p>
                </li>
              </ul>
            </div>
          </motion.div>

          {/* How to Request */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="bg-gradient-to-br from-tz-bright-orange/10 to-tz-medium-blue/10 rounded-2xl shadow-lg p-8 border-2 border-tz-bright-orange/30">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">7. How to Request a Refund or Deferral</h2>
              <ol className="space-y-4">
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-tz-bright-orange text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                    1
                  </div>
                  <p className="text-gray-700 mt-1">
                    Email{" "}
                    <a href="mailto:support@techznanieinnoversity.com" className="text-tz-bright-orange font-semibold">
                      support@techznanieinnoversity.com
                    </a>{" "}
                    (subject: Refund / Deferral), or raise a ticket via the LMS Help menu.
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-tz-bright-orange text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                    2
                  </div>
                  <p className="text-gray-700 mt-1">
                    Provide: full name, registered email/phone, programme & batch, payment reference, reason, and
                    evidence (if applicable).
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-tz-bright-orange text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                    3
                  </div>
                  <p className="text-gray-700 mt-1">
                    Return any physical learning kit when requested (instructions will be shared).
                  </p>
                </li>
                <li className="flex items-start">
                  <div className="w-8 h-8 bg-tz-bright-orange text-white rounded-full flex items-center justify-center font-bold mr-4 flex-shrink-0">
                    4
                  </div>
                  <p className="text-gray-700 mt-1">
                    <strong>Timelines:</strong> We acknowledge within 48 business hours and decide within 7 business
                    days of receiving complete details/kit. Post-approval, bank/gateway credit typically reflects as per
                    the instrument's norms.
                  </p>
                </li>
              </ol>
            </div>
          </motion.div>

          {/* Worked Example */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Worked Example (Illustrative)</h2>
              <div className="bg-blue-50 p-6 rounded-xl">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-tz-bright-orange rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>
                      <strong>Fee paid:</strong> ₹21,999 + GST
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-tz-bright-orange rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>
                      <strong>Deductions:</strong> Payment gateway charges and statutory deductions total ₹500
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-tz-bright-orange rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>
                      <strong>Net Realised Fees (NRF):</strong> ₹21,499
                    </span>
                  </li>
                  <li className="flex items-start">
                    <div className="w-2 h-2 bg-tz-bright-orange rounded-full mt-2 mr-3 flex-shrink-0"></div>
                    <span>
                      <strong>If you cancel on Day 5:</strong> Refund = 60% × ₹21,499 = ₹12,899.40 (inclusive of taxes
                      in the same proportion) back to your original method once approved.
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </motion.div>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="mb-12"
          >
            <div className="bg-gradient-to-br from-tz-dark-navy to-tz-medium-blue rounded-2xl shadow-lg p-8 text-white">
              <h2 className="text-3xl font-bold mb-6">12. Grievances & Escalation</h2>
              <p className="mb-6 text-white/90">
                If you are dissatisfied with the outcome or timelines, write to our Grievance Officer:
              </p>
              <div className="space-y-4">
                <div className="flex items-start">
                  <Mail className="w-6 h-6 mr-4 flex-shrink-0 text-tz-bright-orange" />
                  <div>
                    <p className="font-semibold mb-1">Email</p>
                    <a
                      href="mailto:grievance@techznanieinnoversity.com"
                      className="text-tz-cream hover:text-white transition-colors"
                    >
                      grievance@techznanieinnoversity.com
                    </a>
                  </div>
                </div>
                <div className="flex items-start">
                  <MapPin className="w-6 h-6 mr-4 flex-shrink-0 text-tz-bright-orange" />
                  <div>
                    <p className="font-semibold mb-1">Address</p>
                    <p className="text-white/90">
                      UG9, First Floor, DSL ABACUS IT PARK, IDA Uppal, Hyderabad – 500039, Telangana, India
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-br from-tz-bright-orange/10 to-tz-medium-blue/10">
        <div className="container-modern text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <HelpCircle className="w-16 h-16 text-tz-bright-orange mx-auto mb-6" />
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Have Questions About Refunds?</h2>
            <p className="text-xl text-gray-700 mb-8 max-w-2xl mx-auto">
              Our support team is here to help you understand your options and process your request.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button className="bg-tz-bright-orange hover:bg-[#e67200] text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300">
                <Mail className="w-5 h-5 mr-2" />
                Contact Support
              </Button>
              <Link href="/">
                <Button
                  variant="outline"
                  className="border-2 border-tz-bright-orange text-tz-bright-orange hover:bg-tz-bright-orange hover:text-white font-semibold px-8 py-3 rounded-xl transition-all duration-300 bg-transparent"
                >
                  <ArrowLeft className="w-5 h-5 mr-2" />
                  Back to Home
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
