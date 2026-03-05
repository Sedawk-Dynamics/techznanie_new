"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Search,
  Code,
  Users,
  Cpu,
  ChevronDown,
  ChevronUp,
  Download,
  Star,
  Trophy,
  Lightbulb,
  CheckCircle2,
  ArrowRight,
  BookOpen,
  FileText,
  Layers,
  Award,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

interface Question {
  id: string
  category: string
  domain: string
  question: string
  answer: string
  difficulty: "Easy" | "Medium" | "Hard"
  tips?: string
  code?: string
}

const categories = [
  { id: "all", name: "All Questions", icon: BookOpen },
  { id: "technical", name: "Technical", icon: Code },
  { id: "behavioral", name: "Behavioral/HR", icon: Users },
  { id: "system-design", name: "System Design", icon: Layers },
  { id: "coding", name: "Coding Challenges", icon: Cpu },
]

const domains = [
  "All Domains",
  "Web Development",
  "Data Science & AI",
  "Embedded Systems",
  "Cloud & DevOps",
  "Cybersecurity",
  "Core Engineering",
]

const questions: Question[] = [
  {
    id: "1",
    category: "technical",
    domain: "Web Development",
    question: "Explain the difference between == and === in JavaScript.",
    answer:
      "== is the abstract equality operator that performs type coercion before comparison, while === is the strict equality operator that compares both value and type without coercion. For example: '5' == 5 is true, but '5' === 5 is false.",
    difficulty: "Easy",
    tips: "Always prefer === in JavaScript to avoid unexpected type coercion bugs.",
  },
  {
    id: "2",
    category: "technical",
    domain: "Web Development",
    question: "What is the Virtual DOM, and how does React use it?",
    answer:
      "The Virtual DOM is a lightweight JavaScript representation of the actual DOM. React uses it to optimize updates by comparing the current Virtual DOM with the previous one (diffing), calculating the minimal changes needed, and then updating only those parts of the real DOM (reconciliation). This makes React faster than direct DOM manipulation.",
    difficulty: "Medium",
    tips: "Be ready to explain the reconciliation process and why it's more efficient than updating the real DOM directly.",
  },
  {
    id: "3",
    category: "technical",
    domain: "Web Development",
    question: "How do you design a RESTful API?",
    answer:
      "A RESTful API follows these principles: 1) Use HTTP methods correctly (GET for reading, POST for creating, PUT/PATCH for updating, DELETE for removing), 2) Use meaningful URIs (e.g., /users/123), 3) Return appropriate status codes (200, 201, 404, 500), 4) Be stateless, 5) Support different data formats (JSON is standard), 6) Version your API (e.g., /api/v1/users).",
    difficulty: "Medium",
    tips: "Mention security considerations like authentication (JWT, OAuth) and rate limiting.",
  },
  {
    id: "4",
    category: "coding",
    domain: "Web Development",
    question: "SQL: Write a query to fetch the 2nd highest salary from a table.",
    answer: "SELECT MAX(salary) FROM employees WHERE salary < (SELECT MAX(salary) FROM employees);",
    difficulty: "Medium",
    tips: "Alternative approaches include using LIMIT with OFFSET or ROW_NUMBER() window function.",
    code: `-- Approach 1: Using subquery
SELECT MAX(salary) 
FROM employees 
WHERE salary < (SELECT MAX(salary) FROM employees);

-- Approach 2: Using LIMIT and OFFSET
SELECT DISTINCT salary 
FROM employees 
ORDER BY salary DESC 
LIMIT 1 OFFSET 1;`,
  },
  {
    id: "5",
    category: "technical",
    domain: "Data Science & AI",
    question: "What is the difference between supervised and unsupervised learning?",
    answer:
      "Supervised Learning uses labeled data where the algorithm learns from input-output pairs. Examples include classification (spam detection) and regression (house price prediction). Algorithms: Linear Regression, Decision Trees, Neural Networks.\n\nUnsupervised Learning works with unlabeled data to find patterns and structures. Examples include clustering (customer segmentation) and dimensionality reduction. Algorithms: K-Means, PCA, Hierarchical Clustering.",
    difficulty: "Easy",
    tips: 'Always provide real-world examples: "Predicting house prices (supervised)" vs "Customer segmentation in retail (unsupervised)".',
  },
  {
    id: "6",
    category: "technical",
    domain: "Data Science & AI",
    question: "Explain overfitting and how to avoid it.",
    answer:
      "Overfitting occurs when a model learns the training data too well, including noise and outliers, resulting in poor performance on new data. Prevention methods: 1) Use more training data, 2) Cross-validation, 3) Regularization (L1/L2), 4) Feature selection, 5) Early stopping in neural networks, 6) Ensemble methods like Random Forest.",
    difficulty: "Medium",
    tips: "Explain the bias-variance tradeoff and mention that overfitting means high variance.",
  },
  {
    id: "7",
    category: "coding",
    domain: "Data Science & AI",
    question: "Write a function to check if a string is a palindrome.",
    answer:
      "A palindrome reads the same forwards and backwards. The simplest approach is to compare the string with its reverse.",
    difficulty: "Easy",
    tips: "Explain time complexity O(n) and space complexity O(n) for the reverse method. For O(1) space, use two-pointer approach.",
    code: `def is_palindrome(s):
    return s == s[::-1]

print(is_palindrome("madam"))      # True
print(is_palindrome("techznanie")) # False

# Alternative: Two-pointer approach (O(1) space)
def is_palindrome_optimized(s):
    left, right = 0, len(s) - 1
    while left < right:
        if s[left] != s[right]:
            return False
        left += 1
        right -= 1
    return True`,
  },
  {
    id: "8",
    category: "behavioral",
    domain: "All Domains",
    question: "Tell me about yourself.",
    answer:
      "Structure: Present → Past → Future\n\nPresent: I'm currently pursuing/completed my degree in [domain] from [college], where I've developed strong skills in [key skills].\n\nPast: During my academic journey, I worked on projects like [project name] which helped me gain hands-on experience in [technologies]. I also completed internships/certifications in [relevant area].\n\nFuture: I'm excited to apply my skills in a professional environment at [company name] and continue learning cutting-edge technologies in [domain].",
    difficulty: "Medium",
    tips: "Keep it under 2 minutes. Focus on relevant experiences. Show enthusiasm for the role and company.",
  },
  {
    id: "9",
    category: "behavioral",
    domain: "All Domains",
    question: "Tell me about a time you handled pressure in a project.",
    answer:
      "STAR Method:\n\nSituation: In my final-year project, the deadline was suddenly preponed by 2 weeks due to university schedule changes.\n\nTask: I had to coordinate with a team of 3 members to finish all remaining work, testing, and documentation ahead of the new schedule.\n\nAction: I divided tasks based on each member's strengths, used Trello for tracking progress, and organized daily stand-up meetings to address blockers immediately.\n\nResult: We submitted our project 2 days early and secured the best project award in our department. The experience taught me effective time management and team coordination under pressure.",
    difficulty: "Medium",
    tips: "Use STAR method (Situation, Task, Action, Result). Be specific with numbers and outcomes.",
  },
  {
    id: "10",
    category: "behavioral",
    domain: "All Domains",
    question: "Why should we hire you?",
    answer:
      "Link your skills to company needs:\n\n'Based on the job description, you're looking for someone with [key skills from JD]. I bring exactly that through my experience with [relevant projects/internships]. What sets me apart is my passion for continuous learning - I've completed [certifications/bootcamps] to stay current with industry trends. I'm particularly excited about [specific company initiative/project] and I believe my background in [domain] would allow me to contribute meaningfully from day one.'",
    difficulty: "Medium",
    tips: "Research the company beforehand. Mention specific projects or values that resonate with you.",
  },
  {
    id: "11",
    category: "system-design",
    domain: "Web Development",
    question: "Design a URL Shortener (like Bit.ly)",
    answer:
      "Requirements: 1) Shorten long URLs, 2) Redirect short URLs to original, 3) Handle high traffic, 4) Track analytics.\n\nHigh-Level Architecture:\n- Load Balancer → Multiple App Servers\n- Database: Key-Value store (Redis for cache, PostgreSQL for persistence)\n- Short URL Generation: Base62 encoding or Hash function\n- CDN for static content\n\nKey Components:\n1. URL Shortening Service: Generate unique short codes\n2. Redirection Service: Look up and redirect\n3. Analytics Service: Track clicks, locations\n4. Database: Store URL mappings\n\nTrade-offs:\n- Hash collisions: Use hash + counter approach\n- Scalability: Horizontal scaling with consistent hashing\n- Expiration: Implement TTL for URLs",
    difficulty: "Hard",
    tips: "Discuss CAP theorem, database sharding, and how to handle 100M+ URLs.",
  },
  {
    id: "12",
    category: "system-design",
    domain: "Web Development",
    question: "How would you design an online food delivery system (like Swiggy/Zomato)?",
    answer:
      "Core Components:\n1. User Service (Authentication, Profiles)\n2. Restaurant Service (Menu, Availability)\n3. Order Service (Cart, Checkout, Payment)\n4. Delivery Service (Rider assignment, Tracking)\n5. Notification Service (SMS, Push)\n\nArchitecture:\n- Microservices architecture\n- API Gateway for routing\n- Message Queue (Kafka/RabbitMQ) for async operations\n- Real-time tracking: WebSockets\n- Database: SQL for transactional data, NoSQL for menu/catalog\n- Cache: Redis for frequently accessed data\n\nKey Challenges:\n- Real-time location tracking\n- Optimal rider assignment algorithm\n- Payment gateway integration\n- High availability during peak hours\n- Consistent inventory management",
    difficulty: "Hard",
    tips: "Discuss how to handle peak load, geographic partitioning, and recommendation systems.",
  },
]

const resources = [
  {
    title: "Top 100 Interview Questions for Freshers 2025",
    description: "Comprehensive guide covering technical and behavioral questions",
    type: "Free PDF",
    pages: 45,
    downloads: 12500,
  },
  {
    title: "System Design Case Studies",
    description: "In-depth analysis of 15 real-world system design problems",
    type: "Premium",
    pages: 80,
    downloads: 5200,
  },
  {
    title: "Data Structures & Algorithms Handbook",
    description: "Complete DSA guide with 200+ solved problems",
    type: "Free PDF",
    pages: 120,
    downloads: 18300,
  },
]

export default function InterviewPrepPage() {
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedDomain, setSelectedDomain] = useState("All Domains")
  const [searchQuery, setSearchQuery] = useState("")
  const [expandedQuestions, setExpandedQuestions] = useState<Set<string>>(new Set())

  const toggleQuestion = (id: string) => {
    const newExpanded = new Set(expandedQuestions)
    if (newExpanded.has(id)) {
      newExpanded.delete(id)
    } else {
      newExpanded.add(id)
    }
    setExpandedQuestions(newExpanded)
  }

  const filteredQuestions = questions.filter((q) => {
    const matchesCategory = selectedCategory === "all" || q.category === selectedCategory
    const matchesDomain = selectedDomain === "All Domains" || q.domain === selectedDomain
    const matchesSearch =
      searchQuery === "" ||
      q.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      q.domain.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesDomain && matchesSearch
  })

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Easy":
        return "bg-green-500/20 text-green-400 border-green-500/30"
      case "Medium":
        return "bg-yellow-500/20 text-yellow-400 border-yellow-500/30"
      case "Hard":
        return "bg-red-500/20 text-red-400 border-red-500/30"
      default:
        return "bg-gray-500/20 text-gray-400 border-gray-500/30"
    }
  }

  return (
    <div className="min-h-screen bg-tz-dark-navy">
        <Navbar />
      {/* Hero Section */}
      <section className="relative py-20 lg:py-32 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage: 'url("/interview-preparation-coding-office.jpg")',
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-tz-dark-navy/95 via-tz-dark-navy/90 to-tz-dark-navy" />
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 z-0">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 90, 0],
            }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY }}
            className="absolute top-20 right-20 w-72 h-72 bg-tz-bright-orange/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, -90, 0],
            }}
            transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY }}
            className="absolute bottom-20 left-20 w-96 h-96 bg-tz-medium-blue/10 rounded-full blur-3xl"
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
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="inline-flex items-center space-x-2 bg-tz-bright-orange/10 border border-tz-bright-orange/30 rounded-full px-6 py-3 mb-6"
            >
              <Trophy className="w-5 h-5 text-tz-bright-orange" />
              <span className="text-tz-bright-orange font-semibold">Your Path to Interview Success</span>
            </motion.div>

            <h1 className="text-5xl lg:text-7xl font-bold mb-6 bg-gradient-to-r from-white via-tz-cream to-tz-bright-orange bg-clip-text text-transparent">
              Interview Preparation Hub
            </h1>
            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Ace your next interview with confidence! Explore common technical and HR interview questions,
              domain-specific coding challenges, and system design walkthroughs. Updated weekly with fresh questions
              from real recruiter interactions.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 max-w-2xl mx-auto mb-12">
              {[
                { value: "500+", label: "Interview Questions" },
                { value: "15+", label: "Tech Domains" },
                { value: "95%", label: "Success Rate" },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-2xl p-6"
                >
                  <div className="text-3xl font-bold text-tz-bright-orange mb-2">{stat.value}</div>
                  <div className="text-white/70 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <a href="#Question">
            <Button className="bg-tz-bright-orange hover:bg-[#e67200] text-white font-semibold px-8 py-6 text-lg rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Start Practicing
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Question of the Week */}
      <section className="py-20 relative">
        <div className="container-modern">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Star className="w-6 h-6 text-tz-bright-orange" />
              <h2 id="Question" className="text-3xl font-bold text-white">Question of the Week</h2>
              <Star className="w-6 h-6 text-tz-bright-orange" />
            </div>

            <Card className="bg-[#0A0EEC] bg-gradient-to-br from-[#0D0B52] via-[#0E107A] to-[#0A0EEC] border border-[#1E1FFF]/30 text-white overflow-hidden rounded-2xl shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="bg-tz-bright-orange/20 p-3 rounded-xl">
                      <Layers className="w-6 h-6 text-tz-bright-orange" />
                    </div>
                    <div>
                      <div className="text-sm text-white/60 mb-1">System Design • This Week</div>
                      <div className="text-sm font-semibold text-tz-bright-orange">Featured Challenge</div>
                    </div>
                  </div>
                  <div className="bg-red-500/20 text-red-400 border border-red-500/30 px-3 py-1 rounded-full text-sm font-medium">
                    Hard
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-white mb-4">
                  How would you design an online food delivery system (like Swiggy/Zomato)?
                </h3>

                <Button
                  onClick={() => toggleQuestion("12")}
                  className="bg-white/10 hover:bg-white/20 text-white border border-white/20"
                >
                  {expandedQuestions.has("12") ? (
                    <>
                      <ChevronUp className="w-4 h-4 mr-2" />
                      Hide Answer
                    </>
                  ) : (
                    <>
                      <ChevronDown className="w-4 h-4 mr-2" />
                      Reveal Answer
                    </>
                  )}
                </Button>

                {expandedQuestions.has("12") && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-6 p-6 bg-white/5 rounded-xl border border-white/10"
                  >
                    <div className="prose prose-invert max-w-none">
                      <p className="text-white/80 whitespace-pre-line">{questions[11].answer}</p>
                      {questions[11].tips && (
                        <div className="mt-4 flex items-start space-x-3 bg-tz-bright-orange/10 p-4 rounded-lg border border-tz-bright-orange/30">
                          <Lightbulb className="w-5 h-5 text-tz-bright-orange flex-shrink-0 mt-1" />
                          <div>
                            <div className="font-semibold text-tz-bright-orange mb-1">Expert Tip</div>
                            <p className="text-white/80 text-sm">{questions[11].tips}</p>
                          </div>
                        </div>
                      )}
                    </div>
                  </motion.div>
                )}
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-12 bg-white/5 backdrop-blur-sm">
        <div className="container-modern">
          <div className="max-w-6xl mx-auto">
            {/* Search Bar */}
            <div className="relative mb-8">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/40" />
              <Input
                type="text"
                placeholder="Search questions by topic or keyword..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 bg-white/10 border-white/20 text-white placeholder:text-white/40 h-14 text-lg"
              />
            </div>

            {/* Category Tabs */}
            <div className="flex flex-wrap gap-3 mb-6">
              {categories.map((cat) => {
                const Icon = cat.icon
                return (
                  <Button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.id)}
                    className={`${
                      selectedCategory === cat.id
                        ? "bg-tz-bright-orange text-white"
                        : "bg-white/10 text-white/80 hover:bg-white/20"
                    } border-0 transition-all duration-300`}
                  >
                    <Icon className="w-4 h-4 mr-2" />
                    {cat.name}
                  </Button>
                )
              })}
            </div>

            {/* Domain Filter */}
            <div className="flex flex-wrap gap-3">
              {domains.map((domain) => (
                <Button
                  key={domain}
                  onClick={() => setSelectedDomain(domain)}
                  className={`${
                    selectedDomain === domain
                      ? "bg-tz-medium-blue text-white"
                      : "bg-white/5 text-white/70 hover:bg-white/10"
                  } border border-white/10 transition-all duration-300 text-sm`}
                >
                  {domain}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Questions List */}
      <section className="py-20">
        <div className="container-modern">
          <div className="max-w-6xl mx-auto">
            <div className="mb-8 flex items-center justify-between">
              <h2 className="text-3xl font-bold text-white">{filteredQuestions.length} Questions Found</h2>
            </div>

            <div className="space-y-4">
              {filteredQuestions.map((question, index) => (
                <motion.div
                  key={question.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.05 }}
                  viewport={{ once: true }}
                >
                  <Card className="bg-white/5 backdrop-blur-sm border-white/10 hover:border-tz-bright-orange/30 transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="flex items-start justify-between mb-4">
                        <div className="flex-1">
                          <div className="flex items-center space-x-3 mb-3">
                            <span className="text-xs font-semibold text-tz-bright-orange bg-tz-bright-orange/10 px-3 py-1 rounded-full">
                              {question.domain}
                            </span>
                            <span
                              className={`text-xs font-semibold px-3 py-1 rounded-full border ${getDifficultyColor(question.difficulty)}`}
                            >
                              {question.difficulty}
                            </span>
                          </div>
                          <h3 className="text-lg font-semibold text-white mb-2">{question.question}</h3>
                        </div>
                        <Button
                          onClick={() => toggleQuestion(question.id)}
                          className="bg-white/10 hover:bg-white/20 text-white border border-white/20 ml-4"
                        >
                          {expandedQuestions.has(question.id) ? (
                            <ChevronUp className="w-4 h-4" />
                          ) : (
                            <ChevronDown className="w-4 h-4" />
                          )}
                        </Button>
                      </div>

                      {expandedQuestions.has(question.id) && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          className="mt-6 space-y-4"
                        >
                          <div className="p-6 bg-white/5 rounded-xl border border-white/10">
                            <div className="flex items-center space-x-2 mb-4">
                              <CheckCircle2 className="w-5 h-5 text-green-400" />
                              <span className="font-semibold text-green-400">Answer</span>
                            </div>
                            <p className="text-white/80 whitespace-pre-line">{question.answer}</p>

                            {question.code && (
                              <div className="mt-4">
                                <pre className="bg-black/50 p-4 rounded-lg overflow-x-auto">
                                  <code className="text-sm text-green-400">{question.code}</code>
                                </pre>
                              </div>
                            )}
                          </div>

                          {question.tips && (
                            <div className="flex items-start space-x-3 bg-tz-bright-orange/10 p-4 rounded-lg border border-tz-bright-orange/30">
                              <Lightbulb className="w-5 h-5 text-tz-bright-orange flex-shrink-0 mt-1" />
                              <div>
                                <div className="font-semibold text-tz-bright-orange mb-1">Expert Tip</div>
                                <p className="text-white/80 text-sm">{question.tips}</p>
                              </div>
                            </div>
                          )}
                        </motion.div>
                      )}
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Downloadable Resources */}
      <section className="py-20 bg-white/5 backdrop-blur-sm">
        <div className="container-modern">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-4xl font-bold text-white mb-4">Downloadable Resources</h2>
            <p className="text-xl text-white/70">
              Take your preparation offline with our comprehensive guides and handbooks
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {resources.map((resource, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-[#0A0EEC] bg-gradient-to-br from-[#0D0B52] via-[#0E107A] to-[#0A0EEC] border border-[#1E1FFF]/30 text-white overflow-hidden rounded-2xl shadow-lg">
                  <CardContent className="p-6">
                    <div className="bg-gradient-to-br from-tz-bright-orange/20 to-tz-medium-blue/20 p-4 rounded-xl mb-4">
                      <FileText className="w-12 h-12 text-tz-bright-orange mx-auto" />
                    </div>
                    <h3 className="text-xl font-bold text-white mb-2">{resource.title}</h3>
                    <p className="text-white/70 mb-4 text-sm">{resource.description}</p>
                    <div className="flex items-center justify-between mb-4">
                      <span className="text-xs text-white/60">{resource.pages} pages</span>
                      <span className="text-xs text-white/60">{resource.downloads.toLocaleString()} downloads</span>
                    </div>
                    <Button
                      className={`w-full ${
                        resource.type === "Free PDF"
                          ? "bg-tz-bright-orange hover:bg-[#e67200]"
                          : "bg-tz-medium-blue hover:bg-[#0131bf]"
                      } text-white`}
                    >
                      <Download className="w-4 h-4 mr-2" />
                      {resource.type === "Free PDF" ? "Download Free" : "Get Premium Access"}
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-tz-bright-orange/20 to-tz-medium-blue/20" />
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 180, 0] }}
          transition={{ duration: 30, repeat: Number.POSITIVE_INFINITY }}
          className="absolute top-0 left-1/4 w-96 h-96 bg-tz-bright-orange/10 rounded-full blur-3xl"
        />

        <div className="container-modern relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <Award className="w-16 h-16 text-tz-bright-orange mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-white mb-6">Ready to Ace Your Interview?</h2>
            <p className="text-xl text-white/80 mb-8">
              Join our comprehensive bootcamps for structured preparation with mock interviews, personalized feedback,
              and placement support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-tz-bright-orange hover:bg-[#e67200] text-white font-semibold px-8 py-6 text-lg rounded-xl">
                Explore Bootcamps
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold px-8 py-6 text-lg rounded-xl">
                Talk to Career Advisor
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
