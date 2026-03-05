"use client"

import { useState } from "react"
import { motion } from "framer-motion"
import {
  Search,
  Filter,
  Code2,
  Trophy,
  Zap,
  Clock,
  Star,
  Lock,
  ChevronDown,
  ChevronRight,
  Award,
  TrendingUp,
  Target,
  Flame,
  BookOpen,
  CheckCircle2,
  Download,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

export default function CodingChallengesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedDomain, setSelectedDomain] = useState("all")
  const [selectedDifficulty, setSelectedDifficulty] = useState("all")
  const [expandedChallenge, setExpandedChallenge] = useState<string | null>(null)
  const [activeTab, setActiveTab] = useState<{ [key: string]: string }>({})

  const domains = [
    { id: "all", name: "All Domains", icon: Code2 },
    { id: "dsa", name: "DSA", icon: Target },
    { id: "web", name: "Web Dev", icon: Code2 },
    { id: "sql", name: "SQL/Data", icon: BookOpen },
    { id: "ml", name: "Machine Learning", icon: TrendingUp },
    { id: "embedded", name: "Embedded/IoT", icon: Zap },
    { id: "security", name: "Cybersecurity", icon: Award },
  ]

  const difficulties = [
    { id: "all", name: "All Levels" },
    { id: "beginner", name: "Beginner", color: "bg-green-500" },
    { id: "intermediate", name: "Intermediate", color: "bg-yellow-500" },
    { id: "advanced", name: "Advanced", color: "bg-red-500" },
  ]

  const challenges = [
    {
      id: "move-zeroes",
      title: "Move Zeros to End (Stable)",
      domain: "dsa",
      difficulty: "beginner",
      points: 10,
      eta: "15 min",
      solved: 1234,
      description: "Given array nums, move all zeros to the end preserving order. Do it in-place.",
      example: "[0,1,0,3,12] → [1,3,12,0,0]",
      constraints: "1 ≤ n ≤ 1e5",
      hints: [
        "Two pointers; overwrite non-zeros first.",
        "Fill trailing positions with 0.",
        "Time complexity should be O(n) with single pass.",
      ],
      solution: `def moveZeroes(nums):
    j = 0
    for x in nums:
        if x != 0:
            nums[j] = x
            j += 1
    for k in range(j, len(nums)):
        nums[k] = 0`,
      language: "Python",
      testCases: ["[] → []", "[0,0,0] → [0,0,0]", "[1,2,3] → [1,2,3]"],
    },
    {
      id: "longest-subarray",
      title: "Longest Subarray Sum ≤ K",
      domain: "dsa",
      difficulty: "intermediate",
      points: 25,
      eta: "30 min",
      solved: 856,
      description: "For non-negative nums and K, find max length subarray with sum ≤ K.",
      example: "nums=[1,2,1,0,1,1,0], K=4 → 5 (subarray [1,0,1,1,0])",
      constraints: "1 ≤ n ≤ 1e5, all nums[i] ≥ 0",
      hints: [
        "Sliding window grows while sum ≤ K; shrink when sum > K.",
        "Track max length after each expand/shrink.",
        "Two pointers approach with left and right boundaries.",
      ],
      solution: `def longest_at_most_k(nums, K):
    s = 0
    left = 0
    best = 0
    for right, v in enumerate(nums):
        s += v
        while s > K:
            s -= nums[left]
            left += 1
        best = max(best, right - left + 1)
    return best`,
      language: "Python",
      testCases: ["K=0 with all zeros", "Single element arrays", "Large n performance"],
    },
    {
      id: "shortest-path-obstacles",
      title: "Shortest Path with Obstacles",
      domain: "dsa",
      difficulty: "advanced",
      points: 50,
      eta: "60 min",
      solved: 342,
      description:
        "Grid 0 = free, 1 = wall. You may remove up to k walls. Find shortest path from (0,0) to (m-1,n-1) or -1.",
      example: "Grid 3x3 with k=1 allows breaking one wall",
      constraints: "1 ≤ m,n ≤ 40, 0 ≤ k ≤ m*n",
      hints: [
        "BFS state: (r, c, breaks_used); visited must track k.",
        "Early exit on reaching goal.",
        "Use deque for BFS traversal.",
      ],
      solution: `from collections import deque

def shortest_path(grid, k):
    m, n = len(grid), len(grid[0])
    dq = deque([(0,0,0,0)])  # r,c,steps,used
    seen = {(0,0,0)}
    
    while dq:
        r, c, steps, used = dq.popleft()
        if (r,c) == (m-1,n-1):
            return steps
            
        for dr, dc in [(1,0),(-1,0),(0,1),(0,-1)]:
            nr, nc = r+dr, c+dc
            if 0 <= nr < m and 0 <= nc < n:
                nu = used + grid[nr][nc]
                if nu <= k and (nr,nc,nu) not in seen:
                    seen.add((nr,nc,nu))
                    dq.append((nr,nc,steps+1,nu))
    
    return -1`,
      language: "Python",
      testCases: ["No path exists", "k=0 (no breaks allowed)", "Multiple optimal paths"],
    },
    {
      id: "debounced-search",
      title: "Debounced Search Box",
      domain: "web",
      difficulty: "beginner",
      points: 10,
      eta: "20 min",
      solved: 1089,
      description:
        'Build a search box that calls /api/search?q= only after 400ms of no typing. Show "Searching..." while pending.',
      example: "User types 'react' → waits 400ms → makes API call",
      constraints: "Handle race conditions with AbortController",
      hints: [
        "Use setTimeout/clearTimeout or debounce function.",
        "Handle race conditions with AbortController.",
        "Disable button while fetching.",
      ],
      solution: `<input id="q" placeholder="Search..." />
<ul id="out"></ul>

<script>
let t, ctrl;
q.oninput = () => {
    clearTimeout(t);
    if (ctrl) ctrl.abort();
    
    t = setTimeout(async () => {
        ctrl = new AbortController();
        const res = await fetch(
            '/api/search?q=' + encodeURIComponent(q.value),
            {signal: ctrl.signal}
        );
        const data = await res.json();
        out.innerHTML = data.results
            .map(r => \`<li>\${r}</li>\`)
            .join('');
    }, 400);
};
</script>`,
      language: "JavaScript",
      testCases: ["Empty query", "Rapid typing", "Network errors"],
    },
    {
      id: "url-shortener",
      title: "URL Shortener Backend",
      domain: "web",
      difficulty: "intermediate",
      points: 25,
      eta: "45 min",
      solved: 723,
      description: "Implement POST /shorten {url} → returns {code}, and GET /:code → redirects. Add rate limit.",
      example: "POST /shorten {url: 'https://example.com'} → {code: 'aB3x'}",
      constraints: "Rate limit: 60 req/min per IP",
      hints: [
        "Hash + collision check; or base-62 counter.",
        "Store TTL for expired links.",
        "Use express-rate-limit middleware.",
      ],
      solution: `import express from "express";
import rateLimit from "express-rate-limit";

const app = express();
app.use(express.json());
app.use(rateLimit({windowMs: 60e3, max: 60}));

const db = new Map();
let id = 100000;

const toBase62 = n => {
    const a = "0123456789abcdefghijklmnopqrstuvwxyz" +
              "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let s = "";
    while(n) {
        s = a[n%62] + s;
        n = Math.floor(n/62);
    }
    return s || "0";
}

app.post("/shorten", (req, res) => {
    const {url} = req.body;
    const code = toBase62(id++);
    db.set(code, {url, ts: Date.now()});
    res.json({code});
});

app.get("/:code", (req, res) => {
    const rec = db.get(req.params.code);
    return rec ? res.redirect(rec.url) : res.sendStatus(404);
});

app.listen(3000);`,
      language: "JavaScript",
      testCases: ["Collision handling", "Invalid URLs", "Expired links"],
    },
    {
      id: "second-highest-salary",
      title: "2nd Highest Salary per Department",
      domain: "sql",
      difficulty: "intermediate",
      points: 25,
      eta: "25 min",
      solved: 945,
      description: "Find the second highest salary in each department. Return NULL if not exists.",
      example: "dept='Engineering', salaries=[100k, 90k, 85k] → 90k",
      constraints: "Handle departments with < 2 employees",
      hints: [
        "Use window function DENSE_RANK() over PARTITION BY dept.",
        "Order by salary DESC.",
        "Use CASE to handle NULL for departments with only 1 salary.",
      ],
      solution: `SELECT dept,
    MAX(CASE WHEN rnk = 2 THEN salary END) AS second_highest_salary
FROM (
    SELECT dept, salary,
        DENSE_RANK() OVER (
            PARTITION BY dept 
            ORDER BY salary DESC
        ) AS rnk
    FROM employees
) t
GROUP BY dept;`,
      language: "SQL",
      testCases: ["Single employee dept", "Tied salaries", "Empty department"],
    },
    {
      id: "titanic-classification",
      title: "Titanic Mini Classification",
      domain: "ml",
      difficulty: "beginner",
      points: 10,
      eta: "40 min",
      solved: 567,
      description: "Train/test split (80/20), Logistic Regression, report accuracy + ROC-AUC.",
      example: "Features: age, sex, pclass, fare → Predict: survived (0/1)",
      constraints: "Handle missing age with median",
      hints: [
        "One-hot encode sex/pclass, scale fare.",
        "Use sklearn Pipeline for preprocessing.",
        "Handle missing values with SimpleImputer.",
      ],
      solution: `import pandas as pd
from sklearn.model_selection import train_test_split
from sklearn.linear_model import LogisticRegression
from sklearn.compose import ColumnTransformer
from sklearn.preprocessing import OneHotEncoder, StandardScaler
from sklearn.pipeline import Pipeline
from sklearn.metrics import accuracy_score, roc_auc_score

df = pd.read_csv("titanic_mini.csv")
X = df.drop("survived", axis=1)
y = df["survived"]

num = ["age", "fare"]
cat = ["sex", "pclass"]

pre = ColumnTransformer([
    ("num", StandardScaler(), num),
    ("cat", OneHotEncoder(handle_unknown="ignore"), cat)
], remainder="drop")

clf = Pipeline([
    ("prep", pre),
    ("lr", LogisticRegression(max_iter=1000))
])

Xtr, Xte, ytr, yte = train_test_split(
    X, y, test_size=0.2, random_state=42, stratify=y
)

clf.fit(Xtr, ytr)
p = clf.predict(Xte)
proba = clf.predict_proba(Xte)[:,1]

print("ACC", accuracy_score(yte, p))
print("AUC", roc_auc_score(yte, proba))`,
      language: "Python",
      testCases: ["All features missing", "Imbalanced classes", "Cross-validation"],
    },
    {
      id: "button-debounce",
      title: "Button Debounce (Timer-based)",
      domain: "embedded",
      difficulty: "beginner",
      points: 10,
      eta: "30 min",
      solved: 234,
      description: "Toggle LED on button press with debounce 50ms using timer (no delay loops).",
      example: "Button press → wait 50ms → toggle LED state",
      constraints: "Use millis() on Arduino or TIM interrupt on STM32",
      hints: [
        "State machine: IDLE → BOUNCING → STABLE.",
        "Use millis() instead of delay().",
        "Track last button state to detect changes.",
      ],
      solution: `const int BTN = 2, LED = 13;
unsigned long t = 0;
bool last = HIGH, led = LOW;
bool bouncing = false;

void setup() {
    pinMode(BTN, INPUT_PULLUP);
    pinMode(LED, OUTPUT);
}

void loop() {
    bool cur = digitalRead(BTN);
    
    if (cur != last) {
        last = cur;
        bouncing = true;
        t = millis();
    }
    
    if (bouncing && millis() - t >= 50) {
        bouncing = false;
        if (cur == LOW) {
            led = !led;
            digitalWrite(LED, led);
        }
    }
}`,
      language: "C++",
      testCases: ["Rapid button presses", "Long press", "Multiple LEDs"],
    },
    {
      id: "password-strength",
      title: "Password Strength Checker",
      domain: "security",
      difficulty: "beginner",
      points: 10,
      eta: "15 min",
      solved: 1456,
      description: "Given a string, score 0–4 based on: length≥8, upper, lower, digit, special.",
      example: "'Pass123!' → Score: 4 (Strong)",
      constraints: "Return category: Weak/Medium/Strong",
      hints: [
        "Use regex groups for each criteria.",
        "Sum up matches for total score.",
        "Map score to strength category.",
      ],
      solution: `function checkPasswordStrength(password) {
    let score = 0;
    
    if (password.length >= 8) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/[a-z]/.test(password)) score++;
    if (/\\d/.test(password)) score++;
    if (/[^A-Za-z0-9]/.test(password)) score++;
    
    const categories = {
        0: "Very Weak",
        1: "Weak",
        2: "Medium",
        3: "Strong",
        4: "Very Strong"
    };
    
    return {
        score: score,
        category: categories[score]
    };
}`,
      language: "JavaScript",
      testCases: ["Empty string", "All lowercase", "Maximum security"],
    },
  ]

  const filteredChallenges = challenges.filter((challenge) => {
    const matchesSearch =
      challenge.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      challenge.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesDomain = selectedDomain === "all" || challenge.domain === selectedDomain
    const matchesDifficulty = selectedDifficulty === "all" || challenge.difficulty === selectedDifficulty

    return matchesSearch && matchesDomain && matchesDifficulty
  })

  const getTab = (challengeId: string) => activeTab[challengeId] || "problem"
  const setTab = (challengeId: string, tab: string) => {
    setActiveTab((prev) => ({ ...prev, [challengeId]: tab }))
  }

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "beginner":
        return "bg-green-500"
      case "intermediate":
        return "bg-yellow-500"
      case "advanced":
        return "bg-red-500"
      default:
        return "bg-gray-500"
    }
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-tz-dark-navy via-[#051930] to-tz-dark-navy">
        <Navbar />
      {/* Hero Section */}
      <section className="relative py-24 overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0">
          <img
            src="/coding-challenge-workspace-multiple-monitors.jpg"
            alt="Coding Challenge Background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-tz-dark-navy/90 via-tz-dark-navy/80 to-tz-dark-navy"></div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.3, 0.5, 0.3],
            }}
            transition={{ duration: 8, repeat: Number.POSITIVE_INFINITY }}
            className="absolute top-20 right-20 w-96 h-96 bg-tz-bright-orange/10 rounded-full blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1.2, 1, 1.2],
              opacity: [0.2, 0.4, 0.2],
            }}
            transition={{ duration: 10, repeat: Number.POSITIVE_INFINITY }}
            className="absolute bottom-20 left-20 w-80 h-80 bg-tz-medium-blue/10 rounded-full blur-3xl"
          />
        </div>

        <div className="container-modern relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center max-w-4xl mx-auto"
          >
            <div className="flex items-center justify-center gap-3 mb-6">
              <Code2 className="w-12 h-12 text-tz-bright-orange" />
              <h1 className="text-5xl md:text-6xl font-bold text-white">Coding Challenges</h1>
            </div>

            <p className="text-xl text-white/80 mb-8 leading-relaxed">
              Master your coding skills with daily challenges. Practice DSA, Web Development, SQL, Machine Learning, and
              more. Compete on leaderboards and earn badges!
            </p>

            {/* Stats */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8">
              {[
                { icon: Code2, value: "500+", label: "Challenges" },
                { icon: Trophy, value: "15K+", label: "Active Solvers" },
                { icon: Flame, value: "95%", label: "Success Rate" },
                { icon: Award, value: "50+", label: "Skill Badges" },
              ].map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white/5 backdrop-blur-sm rounded-xl p-4 border border-white/10"
                >
                  <stat.icon className="w-8 h-8 text-tz-bright-orange mx-auto mb-2" />
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-sm text-white/60">{stat.label}</div>
                </motion.div>
              ))}
            </div>

            <a href="#n1">
            <Button className="bg-tz-bright-orange hover:bg-[#e67200] text-white font-semibold px-8 py-3 rounded-xl text-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
              Start Coding Now
              <ChevronRight className="ml-2 w-5 h-5" />
            </Button>
            </a>
          </motion.div>
        </div>
      </section>

      {/* Question of the Week */}
      <section id="n1" className="py-12">
        <div className="container-modern">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="relative bg-gradient-to-br from-tz-bright-orange/20 to-tz-medium-blue/20 rounded-2xl p-8 border border-tz-bright-orange/30 overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-64 h-64 bg-tz-bright-orange/10 rounded-full blur-3xl"></div>

            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-4">
                <Flame className="w-8 h-8 text-tz-bright-orange" />
                <h2 className="text-3xl font-bold text-white">Challenge of the Week</h2>
                <Badge className="bg-red-500 text-white">Advanced</Badge>
              </div>

              <h3 className="text-2xl font-bold text-white mb-4">
                Design an Online Food Delivery System (like Swiggy/Zomato)
              </h3>

              <p className="text-white/80 mb-6 text-lg leading-relaxed">
                Design a scalable food delivery system with restaurant management, order tracking, delivery assignment,
                and real-time updates. Consider high availability, consistency, and fault tolerance.
              </p>

              <div className="flex flex-wrap gap-4 items-center">
                <div className="flex items-center gap-2 text-white/80">
                  <Clock className="w-5 h-5" />
                  <span>90 min</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <Trophy className="w-5 h-5 text-yellow-400" />
                  <span>50 points</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span>156 solved this week</span>
                </div>
                
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Filters and Search */}
      <section className="py-8">
        <div className="container-modern">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            {/* Search Bar */}
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-white/40" />
              <Input
                type="text"
                placeholder="Search challenges by name or description..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 bg-white/5 border-white/10 text-white placeholder:text-white/40 h-14 text-lg rounded-xl focus:border-tz-bright-orange"
              />
            </div>

            {/* Domain Filters */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Filter className="w-5 h-5 text-white/60" />
                <span className="text-white/80 font-semibold">Filter by Domain:</span>
              </div>
              <div className="flex flex-wrap gap-3">
                {domains.map((domain) => (
                  <Button
                    key={domain.id}
                    onClick={() => setSelectedDomain(domain.id)}
                    className={`${
                      selectedDomain === domain.id
                        ? "bg-tz-bright-orange text-white"
                        : "bg-white/5 text-white/80 hover:bg-white/10"
                    } border border-white/10 rounded-xl transition-all duration-300`}
                  >
                    <domain.icon className="w-4 h-4 mr-2" />
                    {domain.name}
                  </Button>
                ))}
              </div>
            </div>

            {/* Difficulty Filters */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <Target className="w-5 h-5 text-white/60" />
                <span className="text-white/80 font-semibold">Filter by Difficulty:</span>
              </div>
              <div className="flex flex-wrap gap-3">
                {difficulties.map((difficulty) => (
                  <Button
                    key={difficulty.id}
                    onClick={() => setSelectedDifficulty(difficulty.id)}
                    className={`${
                      selectedDifficulty === difficulty.id
                        ? "bg-tz-bright-orange text-white"
                        : "bg-white/5 text-white/80 hover:bg-white/10"
                    } border border-white/10 rounded-xl transition-all duration-300`}
                  >
                    {difficulty.name}
                  </Button>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Challenges Grid */}
      <section className="py-12 pb-24">
        <div className="container-modern">
          <div className="space-y-6">
            {filteredChallenges.map((challenge, index) => (
              <motion.div
                key={challenge.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                viewport={{ once: true }}
                className="bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 overflow-hidden hover:border-tz-bright-orange/50 transition-all duration-300"
              >
                {/* Challenge Header */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div className="flex-1">
                      <div className="flex items-center gap-3 mb-2">
                        <h3 className="text-2xl font-bold text-white">{challenge.title}</h3>
                        <Badge className={`${getDifficultyColor(challenge.difficulty)} text-white`}>
                          {challenge.difficulty}
                        </Badge>
                      </div>
                      <p className="text-white/70 text-lg mb-3">{challenge.description}</p>
                      <div className="flex flex-wrap gap-4 text-sm text-white/60">
                        <div className="flex items-center gap-2">
                          <Clock className="w-4 h-4" />
                          <span>{challenge.eta}</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <Trophy className="w-4 h-4 text-yellow-400" />
                          <span>{challenge.points} points</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-400" />
                          <span>{challenge.solved} solved</span>
                        </div>
                        <Badge className="bg-white/10 text-white">{challenge.language}</Badge>
                      </div>
                    </div>
                    <Button
                      onClick={() => setExpandedChallenge(expandedChallenge === challenge.id ? null : challenge.id)}
                      className="bg-tz-bright-orange hover:bg-[#e67200] text-white font-semibold rounded-xl"
                    >
                      {expandedChallenge === challenge.id ? "Close" : "View Details"}
                      {expandedChallenge === challenge.id ? (
                        <ChevronDown className="ml-2 w-4 h-4" />
                      ) : (
                        <ChevronRight className="ml-2 w-4 h-4" />
                      )}
                    </Button>
                  </div>

                  {/* Expanded Content */}
                  {expandedChallenge === challenge.id && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="mt-6 pt-6 border-t border-white/10"
                    >
                      {/* Tabs */}
                      <div className="flex gap-2 mb-6 overflow-x-auto">
                        {["problem", "examples", "hints", "solution"].map((tab) => (
                          <Button
                            key={tab}
                            onClick={() => setTab(challenge.id, tab)}
                            className={`${
                              getTab(challenge.id) === tab
                                ? "bg-tz-bright-orange text-white"
                                : "bg-white/5 text-white/60 hover:bg-white/10"
                            } rounded-lg capitalize transition-all duration-300`}
                          >
                            {tab === "solution" && <Lock className="w-4 h-4 mr-2" />}
                            {tab}
                          </Button>
                        ))}
                      </div>

                      {/* Tab Content */}
                      <div className="bg-white/5 rounded-xl p-6">
                        {getTab(challenge.id) === "problem" && (
                          <div className="space-y-4">
                            <div>
                              <h4 className="text-lg font-semibold text-white mb-2">Problem Statement</h4>
                              <p className="text-white/80">{challenge.description}</p>
                            </div>
                            <div>
                              <h4 className="text-lg font-semibold text-white mb-2">Constraints</h4>
                              <p className="text-white/80 font-mono text-sm">{challenge.constraints}</p>
                            </div>
                          </div>
                        )}

                        {getTab(challenge.id) === "examples" && (
                          <div className="space-y-4">
                            <div>
                              <h4 className="text-lg font-semibold text-white mb-2">Example</h4>
                              <div className="bg-tz-dark-navy/50 rounded-lg p-4 font-mono text-sm text-white/80">
                                {challenge.example}
                              </div>
                            </div>
                            <div>
                              <h4 className="text-lg font-semibold text-white mb-2">Test Cases</h4>
                              <ul className="space-y-2">
                                {challenge.testCases.map((test, i) => (
                                  <li key={i} className="text-white/80 flex items-start gap-2">
                                    <CheckCircle2 className="w-5 h-5 text-green-400 flex-shrink-0 mt-0.5" />
                                    <span>{test}</span>
                                  </li>
                                ))}
                              </ul>
                            </div>
                          </div>
                        )}

                        {getTab(challenge.id) === "hints" && (
                          <div className="space-y-4">
                            <h4 className="text-lg font-semibold text-white mb-4">Hints</h4>
                            {challenge.hints.map((hint, i) => (
                              <div key={i} className="flex gap-3 items-start">
                                <div className="w-8 h-8 rounded-full bg-tz-bright-orange/20 flex items-center justify-center flex-shrink-0 text-tz-bright-orange font-semibold">
                                  {i + 1}
                                </div>
                                <p className="text-white/80 flex-1">{hint}</p>
                              </div>
                            ))}
                          </div>
                        )}

                        {getTab(challenge.id) === "solution" && (
                          <div className="space-y-4">
                            <div className="flex items-center gap-2 mb-4">
                              <Lock className="w-5 h-5 text-tz-bright-orange" />
                              <h4 className="text-lg font-semibold text-white">Solution Code</h4>
                              <Badge className="bg-white/10 text-white ml-auto">{challenge.language}</Badge>
                            </div>
                            <pre className="bg-tz-dark-navy/70 rounded-lg p-6 overflow-x-auto">
                              <code className="text-sm text-white/90 font-mono">{challenge.solution}</code>
                            </pre>
                            <div className="bg-blue-500/10 border border-blue-500/30 rounded-lg p-4">
                              <div className="flex items-start gap-2">
                                <Zap className="w-5 h-5 text-blue-400 flex-shrink-0 mt-0.5" />
                                <div>
                                  <h5 className="font-semibold text-white mb-1">Complexity Analysis</h5>
                                  <p className="text-white/70 text-sm">
                                    Time: O(n) | Space: O(1) - This solution uses optimal approach with minimal space
                                    overhead.
                                  </p>
                                </div>
                              </div>
                            </div>
                          </div>
                        )}
                      </div>

                      {/* Action Buttons */}
                      <div className="mt-6 flex gap-4">
                        <Button className="flex-1 bg-tz-bright-orange hover:bg-[#e67200] text-white font-semibold rounded-xl">
                          Start Coding
                          <Code2 className="ml-2 w-4 h-4" />
                        </Button>
                        <Button className="bg-white/5 hover:bg-white/10 text-white border border-white/10 rounded-xl">
                          <Download className="w-4 h-4 mr-2" />
                          Save
                        </Button>
                      </div>
                    </motion.div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {filteredChallenges.length === 0 && (
            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center py-20">
              <Code2 className="w-20 h-20 text-white/20 mx-auto mb-4" />
              <h3 className="text-2xl font-bold text-white mb-2">No challenges found</h3>
              <p className="text-white/60">Try adjusting your filters or search query</p>
            </motion.div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-tz-bright-orange/10 to-tz-medium-blue/10"></div>

        <div className="container-modern relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center max-w-3xl mx-auto"
          >
            <Trophy className="w-16 h-16 text-tz-bright-orange mx-auto mb-6" />
            <h2 className="text-4xl font-bold text-white mb-4">Ready to Level Up Your Skills?</h2>
            <p className="text-xl text-white/80 mb-8">
              Join our structured bootcamps for comprehensive learning paths, personalized mentorship, and guaranteed
              placement support.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#n1">
              <Button className="bg-tz-bright-orange hover:bg-[#e67200] text-white font-semibold px-8 py-3 rounded-xl text-lg">
                Explore Bootcamps
                <ChevronRight className="ml-2 w-5 h-5" />
              </Button>
              </a>
              <a href="tel:7207276622">
              <Button className="bg-white/10 hover:bg-white/20 text-white border border-white/20 font-semibold px-8 py-3 rounded-xl text-lg">
                Talk to Career Advisor
              </Button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
      <Footer />
    </div>
  )
}
