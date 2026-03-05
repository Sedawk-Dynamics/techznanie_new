"use client";

import { motion } from "framer-motion";
import {
  ArrowLeft,
  Clock,
  Users,
  Star,
  BookOpen,
  Award,
  Target,
  Zap,
  CheckCircle,
  Play,
  Download,
  ArrowRight,
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
import Link from "next/link";
import { useParams } from "next/navigation";
import { useState } from "react";
import { PDFViewerModal } from "@/components/pdf-viewer-modal";

const domainCourses = {
  "computer-science": {
    title: "Computer Science & Engineering",
    description:
      "Master the fundamentals of computing, programming, and software development with industry-leading curriculum",
    gradient: "from-blue-600/90 to-purple-700/90",
    icon: "💻",
    heroImage:
      "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
    stats: { courses: 13, students: "100+", rating: 4.8, projects: "100+" },
    courses: [
      // Core Domains
      {
        id: 1,
        title: "Full Stack Web Development",
        description:
          "Master frontend, backend, and full-stack development with React, Node.js, and modern frameworks. Build complete web applications from scratch.",
        duration: "3 months",
        students: "3,500+",
        rating: 4.8,
        level: "Intermediate",
        //price: "₹36,999",
        originalPrice: "₹41,999",
        link: "https://lms.techznanieinnoversity.com/home/course/full-stack-web-development/2",
        image:
          "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1469&q=80",
        skills: [
          "React",
          "Node.js",
          "MongoDB",
          "Express",
          "JavaScript",
          "HTML/CSS",
        ],
        highlights: [
          "5+ Live Projects",
          "Industry Mentorship",
          "Job Guarantee",
          "Certificate",
        ],
        popular: true,
        category: "Core",
      },
      {
        id: 2,
        title: "Mobile App Development",
        description:
          "Build native Android, iOS apps and cross-platform applications using Flutter. Learn complete mobile development lifecycle.",
        duration: "3 months",
        students: "2,200+",
        rating: 4.7,
        level: "Intermediate",
        //price: "₹36,999",
        originalPrice: "₹41,999",
        link: "https://lms.techznanieinnoversity.com/home/course/mobile-app-development/3",
        image:
          "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        skills: [
          "Android",
          "iOS",
          "Flutter",
          "React Native",
          "Firebase",
          "API Integration",
        ],
        highlights: [
          "Cross-Platform Apps",
          "App Store Publishing",
          "UI/UX Design",
          "Live Projects",
        ],
        popular: false,
        category: "Core",
      },
      {
        id: 3,
        title: "Data Structures & Algorithms",
        description:
          "Master fundamental programming concepts, problem-solving techniques, and competitive programming skills.",
        duration: "3 months",
        students: "4,100+",
        rating: 4.6,
        level: "Beginner",
        //price: "₹36,999",
        originalPrice: "₹41,999",
        link: "https://lms.techznanieinnoversity.com/home/course/data-structures-algorithms/4",
        image:
          "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        skills: [
          "Arrays",
          "Linked Lists",
          "Trees",
          "Graphs",
          "Dynamic Programming",
          "Sorting",
        ],
        highlights: [
          "Coding Interview Prep",
          "Competitive Programming",
          "Problem Solving",
          "Practice Platform",
        ],
        popular: true,
        category: "Core",
      },
      {
        id: 4,
        title: "Database Management & SQL",
        description:
          "Learn database design, SQL queries, database administration, and modern database technologies.",
        duration: "3 months",
        students: "2,800+",
        rating: 4.5,
        level: "Beginner",
        //price: "₹36,999",
        originalPrice: "₹41,999",
        link: "https://lms.techznanieinnoversity.com/home/course/database-management-sql/5",
        image:
          "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1421&q=80",
        skills: [
          "SQL",
          "MySQL",
          "PostgreSQL",
          "MongoDB",
          "Database Design",
          "Query Optimization",
        ],
        highlights: [
          "Real Database Projects",
          "Performance Tuning",
          "Industry Tools",
          "Certification",
        ],
        popular: false,
        category: "Core",
      },
      {
        id: 5,
        title: "Operating Systems & Computer Networks",
        description:
          "Understand OS concepts, network protocols, system administration, and network security fundamentals.",
        duration: "3 months",
        students: "1,900+",
        rating: 4.4,
        level: "Intermediate",
        //price: "₹36,999",
        originalPrice: "₹41,999",
        link: "https://lms.techznanieinnoversity.com/home/course/operating-systems-computer-networks/6",
        image:
          "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1434&q=80",
        skills: [
          "Linux",
          "Windows Server",
          "TCP/IP",
          "Network Security",
          "System Administration",
          "Protocols",
        ],
        highlights: [
          "Hands-on Labs",
          "Network Simulation",
          "System Projects",
          "Industry Exposure",
        ],
        popular: false,
        category: "Core",
      },
      // Advanced Domains
      {
        id: 6,
        title: "Data Science & Machine Learning",
        description:
          "Learn Python, statistics, ML algorithms, and AI applications with hands-on projects using real industry datasets.",
        duration: "3 months",
        students: "2,100+",
        rating: 4.9,
        level: "Advanced",
        //price: "₹36,999",
        originalPrice: "₹41,999",
        link: "https://lms.techznanieinnoversity.com/home/course/data-science-machine-learning/7",
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        skills: [
          "Python",
          "TensorFlow",
          "Pandas",
          "Scikit-learn",
          "Statistics",
          "Deep Learning",
        ],
        highlights: [
          "Real Industry Data",
          "ML Model Deployment",
          "Research Projects",
          "Internship",
        ],
        popular: true,
        category: "Advanced",
      },
      {
        id: 7,
        title: "Artificial Intelligence",
        description:
          "Explore AI concepts, neural networks, computer vision, NLP, and build intelligent applications.",
        duration: "3 months",
        students: "1,600+",
        rating: 4.8,
        level: "Advanced",
        //price: "₹36,999",
        originalPrice: "₹41,999",
        link: "https://lms.techznanieinnoversity.com/home/course/artificial-intelligence/8",
        image:
          "https://images.unsplash.com/photo-1677442136019-21780ecad995?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        skills: [
          "Neural Networks",
          "Computer Vision",
          "NLP",
          "TensorFlow",
          "PyTorch",
          "AI Ethics",
        ],
        highlights: [
          "AI Project Portfolio",
          "Research Papers",
          "Industry Applications",
          "Expert Mentorship",
        ],
        popular: false,
        category: "Advanced",
      },
      {
        id: 8,
        title: "Cloud Computing (AWS, Azure, GCP)",
        description:
          "Master cloud platforms, DevOps practices, and scalable application deployment on major cloud providers.",
        duration: "3 months",
        students: "1,800+",
        rating: 4.7,
        level: "Advanced",
        //price: "₹36,999",
        originalPrice: "₹41,999",
        link: "https://lms.techznanieinnoversity.com/home/course/cloud-computing-aws-azure-gcp/9",
        image:
          "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
        skills: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Terraform"],
        highlights: [
          "Cloud Certification Prep",
          "Real Infrastructure Projects",
          "DevOps Integration",
          "Industry Tools",
        ],
        popular: true,
        category: "Advanced",
      },
      {
        id: 9,
        title: "Cybersecurity & Ethical Hacking",
        description:
          "Learn cybersecurity fundamentals, ethical hacking techniques, and security assessment methodologies.",
        duration: "3 months",
        students: "1,400+",
        rating: 4.6,
        level: "Advanced",
        //price: "₹36,999",
        originalPrice: "₹41,999",
        link: "https://lms.techznanieinnoversity.com/home/course/cybersecurity-ethical-hacking/10",
        image:
          "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        skills: [
          "Penetration Testing",
          "Network Security",
          "Cryptography",
          "Security Tools",
          "Risk Assessment",
          "Compliance",
        ],
        highlights: [
          "Hands-on Hacking Labs",
          "Security Certifications",
          "Real-world Scenarios",
          "Industry Recognition",
        ],
        popular: false,
        category: "Advanced",
      },
      {
        id: 10,
        title: "DevOps Engineering",
        description:
          "Master CI/CD pipelines, containerization, infrastructure automation, and modern DevOps practices.",
        duration: "3 months",
        students: "1,300+",
        rating: 4.7,
        level: "Advanced",
        //price: "₹36,999",
        originalPrice: "₹41,999",
        link: "https://lms.techznanieinnoversity.com/home/course/devops-engineering/11",
        image:
          "https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1488&q=80",
        skills: [
          "Jenkins",
          "Docker",
          "Kubernetes",
          "Git",
          "Ansible",
          "Monitoring",
        ],
        highlights: [
          "CI/CD Pipeline Setup",
          "Infrastructure as Code",
          "Automation Projects",
          "Industry Best Practices",
        ],
        popular: false,
        category: "Advanced",
      },
      {
        id: 11,
        title: "Blockchain Development",
        description:
          "Learn blockchain technology, smart contracts, cryptocurrency, and decentralized application development.",
        duration: "3 months",
        students: "900+",
        rating: 4.5,
        level: "Advanced",
        //price: "₹36,999",
        originalPrice: "₹41,999",
        link: "https://lms.techznanieinnoversity.com/home/course/blockchain-development/12",
        image:
          "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80",
        skills: [
          "Solidity",
          "Ethereum",
          "Smart Contracts",
          "Web3",
          "DeFi",
          "NFTs",
        ],
        highlights: [
          "DApp Development",
          "Smart Contract Deployment",
          "Crypto Projects",
          "Future Technology",
        ],
        popular: false,
        category: "Advanced",
      },
      {
        id: 12,
        title: "UI/UX Design",
        description:
          "Master user interface and user experience design principles, tools, and create stunning digital experiences.",
        duration: "3 months",
        students: "2,000+",
        rating: 4.6,
        level: "Beginner",
        //price: "₹36,999",
        originalPrice: "₹41,999",
        link: "https://lms.techznanieinnoversity.com/home/course/ui-ux-design/13",
        image:
          "https://images.unsplash.com/photo-1561070791-2526d30994b5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1464&q=80",
        skills: [
          "Figma",
          "Adobe XD",
          "Prototyping",
          "User Research",
          "Design Systems",
          "Usability Testing",
        ],
        highlights: [
          "Design Portfolio Creation",
          "User Research Projects",
          "Industry Design Tools",
          "Design Agency Connections",
        ],
        popular: true,
        category: "Advanced",
      },
      {
        id: 13,
        title: "Software Testing & Automation",
        description:
          "Learn manual and automated testing techniques, testing frameworks, and quality assurance practices.",
        duration: "3 months",
        students: "1,500+",
        rating: 4.4,
        level: "Intermediate",
        //price: "₹36,999",
        originalPrice: "₹41,999",
        link: "https://lms.techznanieinnoversity.com/home/course/software-testing-automation/14",
        image:
          "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        skills: [
          "Selenium",
          "TestNG",
          "JUnit",
          "API Testing",
          "Performance Testing",
          "Test Automation",
        ],
        highlights: [
          "Automation Framework",
          "Real Testing Projects",
          "Industry Tools",
          "QA Best Practices",
        ],
        popular: false,
        category: "Advanced",
      },
    ],
  },
  "electronics-communication": {
    title: "Electronics & Communication Engineering",
    description:
      "Explore the world of electronics, communication systems, and embedded technologies with cutting-edge labs",
    gradient: "from-green-600/90 to-teal-700/90",
    icon: "⚡",
    heroImage:
      "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1425&q=80",
    stats: { courses: 10, students: "100+", rating: 4.7, projects: "60+" },
    courses: [
      // Core Domains
      {
        id: 1,
        title: "Digital Electronics & VLSI Design",
        description:
          "Master digital circuit design, VLSI technology, and semiconductor device fundamentals with industry-standard tools.",
        duration: "3 months",
        students: "1,800+",
        rating: 4.8,
        level: "Advanced",
        //price: "₹39,999",
        originalPrice: "₹44,999",
        link: "https://lms.techznanieinnoversity.com/home/course/digital-electronics-vlsi-design/15",
        image:
          "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1425&q=80",
        skills: [
          "Verilog",
          "SystemVerilog",
          "Cadence",
          "Synopsis",
          "FPGA",
          "ASIC Design",
        ],
        highlights: [
          "Industry Tools",
          "Chip Design Projects",
          "Semiconductor Labs",
          "Placement Support",
        ],
        popular: true,
        category: "Core",
      },
      {
        id: 2,
        title: "Embedded Systems & Microcontrollers",
        description:
          "Learn 8051, AVR, PIC microcontrollers, embedded programming, and IoT device development.",
        duration: "3 months",
        students: "2,200+",
        rating: 4.7,
        level: "Intermediate",
        //price: "₹39,999",
        originalPrice: "₹44,999",
        link: "https://lms.techznanieinnoversity.com/home/course/embedded-systems-amp-microcontrollers/16",
        image:
          "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        skills: ["8051", "AVR", "PIC", "Arduino", "Raspberry Pi", "C/C++"],
        highlights: [
          "Hardware Kits Included",
          "Hands-on Projects",
          "Industry Visits",
          "Certification",
        ],
        popular: true,
        category: "Core",
      },
      {
        id: 3,
        title: "Analog Electronics & Circuit Design",
        description:
          "Master analog circuit analysis, design, and simulation using industry-standard tools and techniques.",
        duration: "3 months",
        students: "1,600+",
        rating: 4.5,
        level: "Intermediate",
        //price: "₹39,999",
        originalPrice: "₹44,999",
        link: "https://lms.techznanieinnoversity.com/home/course/analog-electronics-amp-circuit-design/17",
        image:
          "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        skills: [
          "Op-Amps",
          "Transistors",
          "Circuit Analysis",
          "SPICE",
          "PCB Design",
          "Signal Conditioning",
        ],
        highlights: [
          "Circuit Simulation",
          "PCB Projects",
          "Lab Experiments",
          "Industry Applications",
        ],
        popular: false,
        category: "Core",
      },
      {
        id: 4,
        title: "Signal Processing",
        description:
          "Learn digital signal processing, image processing, and audio processing with MATLAB and practical applications.",
        duration: "3 months",
        students: "1,200+",
        rating: 4.6,
        level: "Advanced",
        //price: "₹39,999",
        originalPrice: "₹44,999",
        link: "https://lms.techznanieinnoversity.com/home/course/signal-processing/18",
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        skills: [
          "DSP",
          "MATLAB",
          "Image Processing",
          "Audio Processing",
          "Filters",
          "FFT",
        ],
        highlights: [
          "MATLAB Projects",
          "Signal Analysis",
          "Real-time Processing",
          "Industry Applications",
        ],
        popular: false,
        category: "Core",
      },
      // Advanced Domains
      {
        id: 5,
        title: "Internet of Things (IoT)",
        description:
          "Build connected devices, IoT applications, and smart systems using modern IoT platforms and protocols.",
        duration: "3 months",
        students: "2,000+",
        rating: 4.8,
        level: "Advanced",
        //price: "₹39,999",
        originalPrice: "₹44,999",
        link: "https://lms.techznanieinnoversity.com/home/course/internet-of-things-iot/19",
        image:
          "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        skills: [
          "IoT Protocols",
          "Sensors",
          "Cloud Integration",
          "MQTT",
          "LoRaWAN",
          "Edge Computing",
        ],
        highlights: [
          "IoT Project Development",
          "Cloud Integration",
          "Industry Partnerships",
          "Smart Solutions",
        ],
        popular: true,
        category: "Advanced",
      },
      {
        id: 6,
        title: "Wireless Communication (5G, LTE)",
        description:
          "Understand modern wireless technologies, 5G networks, and communication system design principles.",
        duration: "3 months",
        students: "1,100+",
        rating: 4.7,
        level: "Advanced",
        //price: "₹39,999",
        originalPrice: "₹44,999",
        link: "https://lms.techznanieinnoversity.com/home/course/wireless-communication-5g-lte/20",
        image:
          "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        skills: [
          "5G Technology",
          "LTE",
          "RF Design",
          "Antenna Theory",
          "Network Protocols",
          "Signal Processing",
        ],
        highlights: [
          "5G Lab Access",
          "RF Measurements",
          "Telecom Projects",
          "Industry Exposure",
        ],
        popular: false,
        category: "Advanced",
      },
      {
        id: 7,
        title: "Robotics & Automation",
        description:
          "Design and program robots, automation systems, and intelligent machines for industrial applications.",
        duration: "3 months",
        students: "1,400+",
        rating: 4.6,
        level: "Advanced",
        //price: "₹39,999",
        originalPrice: "₹44,999",
        link: "https://lms.techznanieinnoversity.com/home/course/robotics-amp-automation/21",
        image:
          "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        skills: [
          "Robot Programming",
          "Automation",
          "Sensors",
          "Actuators",
          "Control Systems",
          "AI Integration",
        ],
        highlights: [
          "Robot Building",
          "Automation Projects",
          "Industry Exposure",
          "Research Opportunities",
        ],
        popular: false,
        category: "Advanced",
      },
      {
        id: 8,
        title: "FPGA Programming (Verilog/VHDL)",
        description:
          "Master FPGA development, hardware description languages, and digital system implementation.",
        duration: "3 months",
        students: "800+",
        rating: 4.5,
        level: "Advanced",
        //price: "₹39,999",
        originalPrice: "₹44,999",
        link: "https://lms.techznanieinnoversity.com/home/course/fpga-programming-verilog-vhdl/22",
        image:
          "https://images.unsplash.com/photo-1518709268805-4e9042af2176?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1425&q=80",
        skills: [
          "Verilog",
          "VHDL",
          "FPGA",
          "Xilinx",
          "Altera",
          "Digital Design",
        ],
        highlights: [
          "FPGA Development Boards",
          "Hardware Projects",
          "Industry Tools",
          "Professional Certification",
        ],
        popular: false,
        category: "Advanced",
      },
      {
        id: 9,
        title: "MATLAB & Simulink Applications",
        description:
          "Learn advanced MATLAB programming, Simulink modeling, and engineering simulation techniques.",
        duration: "3 months",
        students: "1,300+",
        rating: 4.4,
        level: "Intermediate",
        //price: "₹39,999",
        originalPrice: "₹44,999",
        link: "https://lms.techznanieinnoversity.com/home/course/matlab-simulink-applications/23",
        image:
          "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        skills: [
          "MATLAB",
          "Simulink",
          "Signal Processing",
          "Control Systems",
          "Modeling",
          "Simulation",
        ],
        highlights: [
          "Engineering Simulations",
          "Control System Design",
          "Signal Analysis",
          "Industry Applications",
        ],
        popular: false,
        category: "Advanced",
      },
      {
        id: 10,
        title: "PCB Design & Fabrication",
        description:
          "Master printed circuit board design, layout optimization, and manufacturing processes.",
        duration: "3 months",
        students: "1,000+",
        rating: 4.5,
        level: "Intermediate",
        //price: "₹39,999",
        originalPrice: "₹44,999",
        link: "https://lms.techznanieinnoversity.com/home/course/pcb-design-fabrication/24",
        image:
          "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        skills: [
          "Altium Designer",
          "Eagle",
          "KiCad",
          "PCB Layout",
          "Manufacturing",
          "Testing",
        ],
        highlights: [
          "PCB Fabrication",
          "Design Projects",
          "Industry Standards",
          "Manufacturing Process",
        ],
        popular: false,
        category: "Advanced",
      },
    ],
  },
  "electrical-electronics": {
    title: "Electrical & Electronics Engineering",
    description:
      "Power systems, control engineering, and electrical machine design with hands-on laboratory experience",
    gradient: "from-yellow-600/90 to-orange-700/90",
    icon: "⚡",
    heroImage:
      "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    stats: { courses: 9, students: "100+", rating: 4.6, projects: "45+" },
    courses: [
      // Core Domains
      {
        id: 1,
        title: "Electrical Machines & Power Systems",
        description:
          "Master electrical machines, power generation, transmission, distribution, and grid systems analysis.",
        duration: "3 months",
        students: "1,500+",
        rating: 4.7,
        level: "Advanced",
        //price: "₹39,999",
        originalPrice: "₹44,999",
        link: "https://lms.techznanieinnoversity.com/home/course/electrical-machines-power-systems/25",
        image:
          "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        skills: [
          "Power Systems",
          "Electrical Machines",
          "Grid Analysis",
          "MATLAB",
          "Power Electronics",
          "Protection",
        ],
        highlights: [
          "Power Lab Access",
          "Industry Projects",
          "Grid Simulation",
          "Professional Certification",
        ],
        popular: true,
        category: "Core",
      },
      {
        id: 2,
        title: "Control Systems",
        description:
          "Learn control theory, system modeling, PID controllers, and modern control techniques for industrial applications.",
        duration: "3 months",
        students: "1,200+",
        rating: 4.6,
        level: "Advanced",
        //price: "₹39,999",
        originalPrice: "₹44,999",
        link: "https://lms.techznanieinnoversity.com/home/course/control-systems/26",
        image:
          "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        skills: [
          "Control Theory",
          "PID Controllers",
          "MATLAB Simulink",
          "System Modeling",
          "Stability Analysis",
          "Modern Control",
        ],
        highlights: [
          "Control Lab",
          "Simulation Projects",
          "Industrial Applications",
          "System Design",
        ],
        popular: false,
        category: "Core",
      },
      {
        id: 3,
        title: "Power Electronics",
        description:
          "Master power semiconductor devices, converters, inverters, and power management systems.",
        duration: "3 months",
        students: "1,100+",
        rating: 4.5,
        level: "Advanced",
        //price: "₹39,999",
        originalPrice: "₹44,999",
        link: "https://lms.techznanieinnoversity.com/home/course/power-electronics/27",
        image:
          "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        skills: [
          "Power Semiconductors",
          "Converters",
          "Inverters",
          "PWM",
          "Power Management",
          "Circuit Design",
        ],
        highlights: [
          "Power Electronics Lab",
          "Converter Design",
          "Industry Applications",
          "Simulation Tools",
        ],
        popular: false,
        category: "Core",
      },
      {
        id: 4,
        title: "Circuit Theory & Analysis",
        description:
          "Fundamental circuit analysis techniques, network theorems, and advanced circuit design principles.",
        duration: "3 months",
        students: "1,400+",
        rating: 4.4,
        level: "Intermediate",
        //price: "₹39,999",
        originalPrice: "₹44,999",
        link: "https://lms.techznanieinnoversity.com/home/course/circuit-theory-analysis/28",
        image:
          "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        skills: [
          "Circuit Analysis",
          "Network Theorems",
          "AC/DC Circuits",
          "Phasor Analysis",
          "Frequency Response",
          "Filter Design",
        ],
        highlights: [
          "Circuit Simulation",
          "Lab Experiments",
          "Problem Solving",
          "Foundation Building",
        ],
        popular: false,
        category: "Core",
      },
      // Advanced Domains
      {
        id: 5,
        title: "Smart Grids",
        description:
          "Learn modern smart grid technologies, renewable integration, and intelligent power distribution systems.",
        duration: "3 months",
        students: "900+",
        rating: 4.8,
        level: "Advanced",
        //price: "₹39,999",
        originalPrice: "₹44,999",
        link: "https://lms.techznanieinnoversity.com/home/course/smart-grids/29",
        image:
          "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        skills: [
          "Smart Grid Technology",
          "Renewable Integration",
          "Grid Automation",
          "Energy Management",
          "IoT in Power",
          "Data Analytics",
        ],
        highlights: [
          "Smart Grid Projects",
          "Industry Partnerships",
          "Future Technology",
          "Research Opportunities",
        ],
        popular: true,
        category: "Advanced",
      },
      {
        id: 6,
        title: "Renewable Energy Systems",
        description:
          "Master solar, wind, and other renewable energy technologies with system design and implementation.",
        duration: "3 months",
        students: "1,100+",
        rating: 4.7,
        level: "Advanced",
        //price: "₹39,999",
        originalPrice: "₹44,999",
        link: "https://lms.techznanieinnoversity.com/home/course/renewable-energy-systems/30",
        image:
          "https://images.unsplash.com/photo-1466611653911-95081537e5b7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        skills: [
          "Solar PV",
          "Wind Energy",
          "Energy Storage",
          "Grid Integration",
          "System Design",
          "Economics",
        ],
        highlights: [
          "Renewable Projects",
          "Site Visits",
          "System Design",
          "Sustainability Focus",
        ],
        popular: true,
        category: "Advanced",
      },
      {
        id: 7,
        title: "PLC & SCADA",
        description:
          "Learn programmable logic controllers, SCADA systems, and industrial automation technologies.",
        duration: "3 months",
        students: "1,300+",
        rating: 4.6,
        level: "Intermediate",
        //price: "₹39,999",
        originalPrice: "₹44,999",
        link: "https://lms.techznanieinnoversity.com/home/course/plc-scada/31",
        image:
          "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        skills: [
          "PLC Programming",
          "SCADA",
          "HMI",
          "Industrial Networks",
          "Process Control",
          "Automation",
        ],
        highlights: [
          "PLC Lab Training",
          "Industrial Visits",
          "Automation Projects",
          "Job Support",
        ],
        popular: false,
        category: "Advanced",
      },
      {
        id: 8,
        title: "Electric Vehicles (EV Technology)",
        description:
          "Explore EV design, battery systems, charging infrastructure, and future mobility solutions.",
        duration: "3 months",
        students: "1,000+",
        rating: 4.8,
        level: "Advanced",
        //price: "₹39,999",
        originalPrice: "₹44,999",
        link: "https://lms.techznanieinnoversity.com/home/course/electric-vehicles-ev-technology/32",
        image:
          "https://images.unsplash.com/photo-1593941707882-a5bac6861d75?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1472&q=80",
        skills: [
          "EV Technology",
          "Battery Management",
          "Motor Control",
          "Charging Systems",
          "Power Electronics",
          "Vehicle Dynamics",
        ],
        highlights: [
          "EV Lab Access",
          "Battery Testing",
          "Industry Partnerships",
          "Future Skills",
        ],
        popular: true,
        category: "Advanced",
      },
      {
        id: 9,
        title: "Industrial Automation",
        description:
          "Master industrial automation systems, robotics integration, and smart manufacturing technologies.",
        duration: "3 months",
        students: "800+",
        rating: 4.5,
        level: "Advanced",
        //price: "₹39,999",
        originalPrice: "₹44,999",
        link: "https://lms.techznanieinnoversity.com/home/course/industrial-automation/33",
        image:
          "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        skills: [
          "Industrial Automation",
          "Robotics",
          "Manufacturing Systems",
          "Quality Control",
          "Process Optimization",
          "Industry 4.0",
        ],
        highlights: [
          "Automation Lab",
          "Industry Projects",
          "Smart Manufacturing",
          "Technology Integration",
        ],
        popular: false,
        category: "Advanced",
      },
    ],
  },
  mechanical: {
    title: "Mechanical Engineering",
    description:
      "Design, manufacturing, and mechanical system optimization with modern CAD/CAM technologies",
    gradient: "from-gray-600/90 to-slate-700/90",
    icon: "⚙️",
    heroImage:
      "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    stats: { courses: 10, students: "100+", rating: 4.5, projects: "70+" },
    courses: [
      // Core Domains
      {
        id: 1,
        title: "Thermodynamics & Heat Transfer",
        description:
          "Master thermal engineering principles, heat transfer mechanisms, and energy system analysis.",
        duration: "3 months",
        students: "1,400+",
        rating: 4.5,
        level: "Intermediate",
        //price: "₹44,999",
        originalPrice: "₹49,999",
        link: "https://lms.techznanieinnoversity.com/home/course/thermodynamics-heat-transfer/34",
        image:
          "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        skills: [
          "Thermodynamics",
          "Heat Transfer",
          "Energy Systems",
          "Thermal Analysis",
          "HVAC",
          "Refrigeration",
        ],
        highlights: [
          "Thermal Lab",
          "Energy Projects",
          "HVAC Design",
          "Industry Applications",
        ],
        popular: false,
        category: "Core",
      },
      {
        id: 2,
        title: "Fluid Mechanics",
        description:
          "Learn fluid statics, dynamics, flow analysis, and hydraulic system design principles.",
        duration: "3 months",
        students: "1,200+",
        rating: 4.4,
        level: "Intermediate",
        //price: "₹44,999",
        originalPrice: "₹49,999",
        link: "https://lms.techznanieinnoversity.com/home/course/fluid-mechanics/35",
        image:
          "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        skills: [
          "Fluid Statics",
          "Fluid Dynamics",
          "Flow Analysis",
          "Hydraulics",
          "Pumps",
          "Turbines",
        ],
        highlights: [
          "Fluid Lab",
          "Flow Experiments",
          "Hydraulic Systems",
          "Practical Applications",
        ],
        popular: false,
        category: "Core",
      },
      {
        id: 3,
        title: "Manufacturing Processes",
        description:
          "Master traditional and modern manufacturing techniques, quality control, and production systems.",
        duration: "3 months",
        students: "1,600+",
        rating: 4.6,
        level: "Intermediate",
        //price: "₹44,999",
        originalPrice: "₹49,999",
        link: "https://lms.techznanieinnoversity.com/home/course/manufacturing-processes/36",
        image:
          "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        skills: [
          "Machining",
          "Casting",
          "Welding",
          "Quality Control",
          "Production Planning",
          "Lean Manufacturing",
        ],
        highlights: [
          "Manufacturing Lab",
          "Industry Visits",
          "Quality Systems",
          "Production Projects",
        ],
        popular: true,
        category: "Core",
      },
      {
        id: 4,
        title: "Engineering Drawing & CAD",
        description:
          "Learn technical drawing, geometric dimensioning, and computer-aided design fundamentals.",
        duration: "3 months",
        students: "2,000+",
        rating: 4.3,
        level: "Beginner",
        //price: "₹44,999",
        originalPrice: "₹49,999",
        link: "https://lms.techznanieinnoversity.com/home/course/engineering-drawing-cad/37",
        image:
          "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        skills: [
          "Technical Drawing",
          "AutoCAD",
          "Geometric Dimensioning",
          "Tolerancing",
          "Assembly Drawing",
          "3D Modeling",
        ],
        highlights: [
          "CAD Software Training",
          "Drawing Projects",
          "Industry Standards",
          "Portfolio Development",
        ],
        popular: true,
        category: "Core",
      },
      // Advanced Domains
      {
        id: 5,
        title: "AutoCAD, SolidWorks, CATIA, ANSYS",
        description:
          "Master industry-standard CAD/CAE software for design, simulation, and analysis.",
        duration: "3 months",
        students: "2,200+",
        rating: 4.8,
        level: "Advanced",
        //price: "₹44,999",
        originalPrice: "₹49,999",
        link: "https://lms.techznanieinnoversity.com/home/course/autocad-solidworks-catia-ansys/38",
        image:
          "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        skills: ["AutoCAD", "SolidWorks", "CATIA", "ANSYS", "FEA", "CFD"],
        highlights: [
          "Industry Software",
          "Design Projects",
          "Simulation Analysis",
          "Professional Certification",
        ],
        popular: true,
        category: "Advanced",
      },
      {
        id: 6,
        title: "Robotics & Mechatronics",
        description:
          "Design and program robotic systems, automation, and intelligent mechanical systems.",
        duration: "3 months",
        students: "1,300+",
        rating: 4.7,
        level: "Advanced",
        //price: "₹44,999",
        originalPrice: "₹49,999",
        link: "https://lms.techznanieinnoversity.com/home/course/robotics-mechatronics/39",
        image:
          "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        skills: [
          "Robotics",
          "Mechatronics",
          "Automation",
          "Programming",
          "Sensors",
          "Actuators",
        ],
        highlights: [
          "Robot Programming",
          "Automation Projects",
          "Industry Exposure",
          "Research Opportunities",
        ],
        popular: false,
        category: "Advanced",
      },
      {
        id: 7,
        title: "HVAC Systems",
        description:
          "Learn heating, ventilation, air conditioning system design, and energy-efficient building systems.",
        duration: "3 months",
        students: "1,000+",
        rating: 4.5,
        level: "Advanced",
        //price: "₹44,999",
        originalPrice: "₹49,999",
        link: "https://lms.techznanieinnoversity.com/home/course/hvac-systems/40",
        image:
          "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        skills: [
          "HVAC Design",
          "Load Calculations",
          "Duct Design",
          "Energy Efficiency",
          "Building Systems",
          "Controls",
        ],
        highlights: [
          "HVAC Lab",
          "System Design",
          "Energy Analysis",
          "Industry Applications",
        ],
        popular: false,
        category: "Advanced",
      },
      {
        id: 8,
        title: "3D Printing & Additive Manufacturing",
        description:
          "Master 3D printing technologies, additive manufacturing processes, and rapid prototyping.",
        duration: "3 months",
        students: "1,100+",
        rating: 4.6,
        level: "Advanced",
        //price: "₹44,999",
        originalPrice: "₹49,999",
        link: "https://lms.techznanieinnoversity.com/home/course/3d-printing-additive-manufacturing/41",
        image:
          "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        skills: [
          "3D Printing",
          "Additive Manufacturing",
          "Rapid Prototyping",
          "Material Science",
          "Design for AM",
          "Post-processing",
        ],
        highlights: [
          "3D Printing Lab",
          "Prototype Development",
          "Material Testing",
          "Innovation Projects",
        ],
        popular: true,
        category: "Advanced",
      },
      {
        id: 9,
        title: "CNC Programming",
        description:
          "Learn computer numerical control programming, machining operations, and automated manufacturing.",
        duration: "3 months",
        students: "900+",
        rating: 4.4,
        level: "Advanced",
        //price: "₹44,999",
        originalPrice: "₹49,999",
        link: "https://lms.techznanieinnoversity.com/home/course/cnc-programming/42",
        image:
          "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        skills: [
          "CNC Programming",
          "G-Code",
          "CAM Software",
          "Machining Operations",
          "Tool Selection",
          "Quality Control",
        ],
        highlights: [
          "CNC Lab Training",
          "Machining Projects",
          "Industry Software",
          "Job-ready Skills",
        ],
        popular: false,
        category: "Advanced",
      },
      {
        id: 10,
        title: "Industrial Engineering",
        description:
          "Optimize industrial processes, supply chain management, and operational efficiency.",
        duration: "3 months",
        students: "800+",
        rating: 4.5,
        level: "Advanced",
        //price: "₹44,999",
        originalPrice: "₹49,999",
        link: "https://lms.techznanieinnoversity.com/home/course/industrial-engineering/43",
        image:
          "https://images.unsplash.com/photo-1581092160562-40aa08e78837?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        skills: [
          "Process Optimization",
          "Supply Chain",
          "Quality Management",
          "Lean Six Sigma",
          "Operations Research",
          "Project Management",
        ],
        highlights: [
          "Process Improvement",
          "Industry Projects",
          "Lean Certification",
          "Management Skills",
        ],
        popular: false,
        category: "Advanced",
      },
    ],
  },
  civil: {
    title: "Civil Engineering",
    description:
      "Infrastructure development, construction management, and structural design with modern technologies",
    gradient: "from-amber-600/90 to-brown-700/90",
    icon: "🏗️",
    heroImage:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    stats: { courses: 9, students: "100+", rating: 4.4, projects: "40+" },
    courses: [
      // Core Domains
      {
        id: 1,
        title: "Structural Engineering",
        description:
          "Master structural analysis, design principles, and building safety with modern engineering practices.",
        duration: "3 months",
        students: "1,200+",
        rating: 4.6,
        level: "Advanced",
        //price: "₹29,999",
        originalPrice: "₹34,999",
        link: "https://lms.techznanieinnoversity.com/home/course/structural-engineering/44",
        image:
          "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        skills: [
          "Structural Analysis",
          "RCC Design",
          "Steel Structures",
          "Foundation Design",
          "Earthquake Engineering",
          "Building Codes",
        ],
        highlights: [
          "Industry Software",
          "Structural Projects",
          "Safety Analysis",
          "Professional Certification",
        ],
        popular: true,
        category: "Core",
      },
      {
        id: 2,
        title: "Transportation Engineering",
        description:
          "Learn highway design, traffic engineering, and transportation planning for modern infrastructure.",
        duration: "3 months",
        students: "800+",
        rating: 4.4,
        level: "Advanced",
        //price: "₹29,999",
        originalPrice: "₹34,999",
        link: "https://lms.techznanieinnoversity.com/home/course/transportation-engineering/45",
        image:
          "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        skills: [
          "Highway Design",
          "Traffic Engineering",
          "Transportation Planning",
          "Pavement Design",
          "Traffic Management",
          "Urban Planning",
        ],
        highlights: [
          "Highway Projects",
          "Traffic Analysis",
          "Planning Software",
          "Infrastructure Development",
        ],
        popular: false,
        category: "Core",
      },
      {
        id: 3,
        title: "Geotechnical Engineering",
        description:
          "Master soil mechanics, foundation engineering, and ground improvement techniques.",
        duration: "3 months",
        students: "700+",
        rating: 4.3,
        level: "Advanced",
        //price: "₹29,999",
        originalPrice: "₹34,999",
        link: "https://lms.techznanieinnoversity.com/home/course/geotechnical-engineering/46",
        image:
          "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        skills: [
          "Soil Mechanics",
          "Foundation Engineering",
          "Slope Stability",
          "Ground Improvement",
          "Geotechnical Investigation",
          "Earth Structures",
        ],
        highlights: [
          "Soil Testing Lab",
          "Foundation Design",
          "Site Investigation",
          "Geotechnical Analysis",
        ],
        popular: false,
        category: "Core",
      },
      {
        id: 4,
        title: "Surveying & Estimation",
        description:
          "Learn land surveying techniques, quantity estimation, and project cost analysis.",
        duration: "3 months",
        students: "1,000+",
        rating: 4.2,
        level: "Intermediate",
        //price: "₹29,999",
        originalPrice: "₹34,999",
        link: "https://lms.techznanieinnoversity.com/home/course/surveying-estimation/47",
        image:
          "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        skills: [
          "Land Surveying",
          "Quantity Estimation",
          "Cost Analysis",
          "Total Station",
          "GPS Surveying",
          "Digital Mapping",
        ],
        highlights: [
          "Surveying Equipment",
          "Field Training",
          "Estimation Projects",
          "Digital Tools",
        ],
        popular: false,
        category: "Core",
      },
      // Advanced Domains
      {
        id: 5,
        title: "AutoCAD Civil 3D / STAAD.Pro / Revit",
        description:
          "Master industry-standard civil engineering software for design, analysis, and BIM modeling.",
        duration: "3 months",
        students: "1,500+",
        rating: 4.7,
        level: "Advanced",
        //price: "₹29,999",
        originalPrice: "₹34,999",
        link: "https://lms.techznanieinnoversity.com/home/course/autocad-civil-3d-staad-pro-revit/48",
        image:
          "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        skills: [
          "AutoCAD Civil 3D",
          "STAAD.Pro",
          "Revit",
          "BIM",
          "Structural Analysis",
          "3D Modeling",
        ],
        highlights: [
          "Industry Software",
          "BIM Projects",
          "Structural Analysis",
          "Professional Certification",
        ],
        popular: true,
        category: "Advanced",
      },
      {
        id: 6,
        title: "Construction Project Management",
        description:
          "Master project planning, cost estimation, site management, and construction administration.",
        duration: "3 months",
        students: "1,100+",
        rating: 4.5,
        level: "Advanced",
        //price: "₹29,999",
        originalPrice: "₹34,999",
        link: "https://lms.techznanieinnoversity.com/home/course/construction-project-management/49",
        image:
          "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        skills: [
          "Project Management",
          "Cost Estimation",
          "Site Planning",
          "Quality Control",
          "Safety Management",
          "Contract Management",
        ],
        highlights: [
          "Real Projects",
          "Site Visits",
          "Management Skills",
          "Industry Networking",
        ],
        popular: true,
        category: "Advanced",
      },
      {
        id: 7,
        title: "Environmental Engineering",
        description:
          "Learn water treatment, waste management, and environmental impact assessment techniques.",
        duration: "3 months",
        students: "600+",
        rating: 4.4,
        level: "Advanced",
        //price: "₹29,999",
        originalPrice: "₹34,999",
        link: "https://lms.techznanieinnoversity.com/home/course/environmental-engineering/50",
        image:
          "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        skills: [
          "Water Treatment",
          "Waste Management",
          "Environmental Impact",
          "Pollution Control",
          "Sustainability",
          "Green Building",
        ],
        highlights: [
          "Environmental Projects",
          "Sustainability Focus",
          "Green Technologies",
          "Impact Assessment",
        ],
        popular: false,
        category: "Advanced",
      },
      {
        id: 8,
        title: "Smart Cities & Infrastructure",
        description:
          "Design intelligent urban infrastructure, IoT integration, and sustainable city planning.",
        duration: "3 months",
        students: "700+",
        rating: 4.6,
        level: "Advanced",
        //price: "₹29,999",
        originalPrice: "₹34,999",
        link: "https://lms.techznanieinnoversity.com/home/course/smart-cities-infrastructure/51",
        image:
          "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        skills: [
          "Smart Infrastructure",
          "IoT Integration",
          "Urban Planning",
          "Sustainability",
          "Data Analytics",
          "Smart Transportation",
        ],
        highlights: [
          "Smart City Projects",
          "IoT Applications",
          "Future Technologies",
          "Urban Innovation",
        ],
        popular: false,
        category: "Advanced",
      },
      {
        id: 9,
        title: "GIS & Remote Sensing",
        description:
          "Master geographic information systems, satellite imagery analysis, and spatial data management.",
        duration: "3 months",
        students: "500+",
        rating: 4.5,
        level: "Advanced",
        //price: "₹29,999",
        originalPrice: "₹34,999",
        link: "https://lms.techznanieinnoversity.com/home/course/gis-remote-sensing/52",
        image:
          "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
        skills: [
          "GIS",
          "Remote Sensing",
          "Spatial Analysis",
          "Satellite Imagery",
          "Mapping",
          "GPS Technology",
        ],
        highlights: [
          "GIS Software Training",
          "Mapping Projects",
          "Spatial Analysis",
          "Technology Applications",
        ],
        popular: false,
        category: "Advanced",
      },
    ],
  },
  management: {
    title: "Management & Business",
    description:
      "Develop leadership skills and business acumen for the modern digital workplace",
    gradient: "from-orange-600/90 to-red-700/90",
    icon: "📊",
    heroImage:
      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1415&q=80",
    stats: { courses: 7, students: "100+", rating: 4.6, projects: "50+" },
    courses: [
      {
        id: 1,
        title: "Project Management",
        description:
          "Master project planning, execution, and delivery with industry-standard methodologies and tools.",
        duration: "3 months",
        students: "2,500+",
        rating: 4.7,
        level: "Intermediate",
        //price: "₹29,999",
        originalPrice: "₹34,999",
        link: "https://lms.techznanieinnoversity.com/home/course/project-management/53",
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1415&q=80",
        skills: [
          "PMP Framework",
          "Agile/Scrum",
          "Risk Management",
          "Stakeholder Management",
          "MS Project",
          "Leadership",
        ],
        highlights: [
          "PMP Exam Prep",
          "Real Projects",
          "Industry Tools",
          "Leadership Training",
        ],
        popular: true,
        category: "Core",
      },
      {
        id: 2,
        title: "Business Analytics",
        description:
          "Learn data analysis with Excel, Power BI, SQL, and Tableau for business insights and dashboard reporting.",
        duration: "3 months",
        students: "2,200+",
        rating: 4.6,
        level: "Intermediate",
        //price: "₹29,999",
        originalPrice: "₹34,999",
        link: "https://lms.techznanieinnoversity.com/home/course/business-analytics/54",
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1415&q=80",
        skills: [
          "Excel Advanced",
          "Power BI",
          "SQL",
          "Tableau",
          "Data Analysis",
          "Dashboard Creation",
        ],
        highlights: [
          "Business Cases",
          "Dashboard Projects",
          "BI Tools",
          "Data-driven Decisions",
        ],
        popular: true,
        category: "Core",
      },
      {
        id: 3,
        title: "Digital Marketing (SEO, SEM, Google Ads)",
        description:
          "Master digital marketing strategies, SEO, SEM, and Google Ads with real campaign experience.",
        duration: "3 months",
        students: "3,000+",
        rating: 4.8,
        level: "Beginner",
        //price: "₹29,999",
        originalPrice: "₹34,999",
        link: "https://lms.techznanieinnoversity.com/home/course/digital-marketing-seo-sem-google-ads/55",
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1415&q=80",
        skills: [
          "SEO",
          "SEM",
          "Google Ads",
          "Social Media Marketing",
          "Content Marketing",
          "Analytics",
        ],
        highlights: [
          "Live Campaigns",
          "Google Certifications",
          "Agency Partnerships",
          "Freelance Opportunities",
        ],
        popular: true,
        category: "Core",
      },
      {
        id: 4,
        title: "Product Management",
        description:
          "Learn product strategy, roadmap planning, and product lifecycle management for successful launches.",
        duration: "3 months",
        students: "1,500+",
        rating: 4.5,
        level: "Advanced",
        //price: "₹29,999",
        originalPrice: "₹34,999",
        link: "https://lms.techznanieinnoversity.com/home/course/product-management/56",
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1415&q=80",
        skills: [
          "Product Strategy",
          "Roadmap Planning",
          "User Research",
          "Market Analysis",
          "Agile Methods",
          "Product Launch",
        ],
        highlights: [
          "Product Case Studies",
          "Strategy Projects",
          "Market Research",
          "Launch Planning",
        ],
        popular: false,
        category: "Advanced",
      },
      {
        id: 5,
        title: "Human Resource Management (HRM)",
        description:
          "Master HR practices, talent management, and organizational development for modern workplaces.",
        duration: "3 months",
        students: "1,800+",
        rating: 4.4,
        level: "Intermediate",
        //price: "₹29,999",
        originalPrice: "₹34,999",
        link: "https://lms.techznanieinnoversity.com/home/course/human-resource-management-hrm/57",
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1415&q=80",
        skills: [
          "Talent Management",
          "Performance Management",
          "Recruitment",
          "Employee Relations",
          "HR Analytics",
          "Organizational Development",
        ],
        highlights: [
          "HR Case Studies",
          "Talent Strategies",
          "Performance Systems",
          "People Management",
        ],
        popular: false,
        category: "Advanced",
      },
      {
        id: 6,
        title: "Operations & Supply Chain Management",
        description:
          "Optimize business operations, supply chain processes, and logistics for operational excellence.",
        duration: "3 months",
        students: "1,200+",
        rating: 4.5,
        level: "Advanced",
        //price: "₹29,999",
        originalPrice: "₹34,999",
        link: "https://lms.techznanieinnoversity.com/home/course/operations-amp-supply-chain-management/58",
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1415&q=80",
        skills: [
          "Supply Chain Management",
          "Operations Research",
          "Logistics",
          "Inventory Management",
          "Process Optimization",
          "Quality Management",
        ],
        highlights: [
          "Supply Chain Projects",
          "Process Improvement",
          "Logistics Planning",
          "Operational Excellence",
        ],
        popular: false,
        category: "Advanced",
      },
      {
        id: 7,
        title: "Finance & Accounting",
        description:
          "Learn financial analysis, accounting principles, and financial management for business decision-making.",
        duration: "3 months",
        students: "1,600+",
        rating: 4.6,
        level: "Intermediate",
        //price: "₹29,999",
        originalPrice: "₹34,999",
        link: "https://lms.techznanieinnoversity.com/home/course/finance-accounting/59",
        image:
          "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1415&q=80",
        skills: [
          "Financial Analysis",
          "Accounting Principles",
          "Financial Planning",
          "Investment Analysis",
          "Risk Management",
          "Financial Modeling",
        ],
        highlights: [
          "Financial Projects",
          "Investment Analysis",
          "Risk Assessment",
          "Financial Planning",
        ],
        popular: false,
        category: "Advanced",
      },
    ],
  },
};

export default function CoursePage() {
  const params = useParams();
  const domain = params.domain as string;
  const domainData = domainCourses[domain as keyof typeof domainCourses];

  const [isPdfModalOpen, setIsPdfModalOpen] = useState(false);
  const [selectedPdf, setSelectedPdf] = useState({ path: "", title: "" });

  const handleOpenRoadmap = (course: any) => {
    // Map of course titles to PDF filenames for each domain
    const pdfMappings: Record<string, Record<string, string>> = {
      "computer-science": {
        "Full Stack Web Development": "WEB DEVELOPMENT.pdf",
        "Mobile App Development": "Mobile App Development Track Slides.pdf",
        "Data Structures & Algorithms":
          "Data Structures & Algorithms program.pdf",
        "Database Management & SQL": "Database Management & SQL Track.pdf",
        "Operating Systems & Computer Networks":
          "Operating Systems & Computer Networks Track.pdf",
        "Data Science & Machine Learning":
          "Data Science & Machine Learning Track.pdf",
        "Artificial Intelligence": "Artificial Intelligence Track Program.pdf",
        "Cloud Computing (AWS, Azure, GCP)": "cloud computing track.pdf",
        "Cybersecurity & Ethical Hacking":
          "Cybersecurity & Ethical Hacking Track.pdf",
        "DevOps Engineering": "DevOps Track Program.pdf",
        "Blockchain Development": "Blockchain Development Track.pdf",
        "UI/UX Design": "UI_UX Design Track Presentation.pdf",
        "Software Testing & Automation":
          "Software Testing & Automation Track.pdf",
      },
      "electronics-communication": {
        "Digital Electronics & VLSI Design":
          "Digital Electronics & VLSI Design Program.pdf",
        "Embedded Systems & Microcontrollers":
          "Embedded Systems & Microcontrollers Program.pdf",
        "Analog Electronics & Circuit Design":
          "Analog Electronics & Circuit Design Track.pdf",
        "Signal Processing": "Signal Processing Track Program.pdf",
        "Internet of Things (IoT)": "Create IoT training slides.pdf",
        "Wireless Communication (5G, LTE)":
          "Wireless Communication (5G, LTE) Track.pdf",
        "Robotics & Automation": "Robotics & Automation Track slides.pdf",
        "FPGA Programming (Verilog/VHDL)": "FPGA Programming Track Slides.pdf",
        "MATLAB & Simulink Applications":
          "MATLAB & Simulink Applications Track.pdf",
        "PCB Design & Fabrication": "PCB Design & Fabrication Program.pdf",
      },
      "electrical-electronics": {
        "Electrical Machines & Power Systems":
          "Electrical Machines & Power Systems Track.pdf",
        "Control Systems": "Design Control Systems Track slides.pdf",
        "Power Electronics": "Power Electronics Track Program.pdf",
        "Circuit Theory & Analysis": "Circuit Theory & Analysis Track.pdf",
        "Smart Grids": "SMART GRIDS TRACK.pdf",
        "Renewable Energy Systems": "RENEWABLE ENERGY SYSTEMS TRACK.pdf",
        "PLC & SCADA": "PLC & SCADA Training Program.pdf",
        "Electric Vehicles (EV Technology)":
          "ELECTRIC VEHICLES - EV TECHNOLOGY .pdf",
        "Industrial Automation": "INDUSTRIAL AUTOMATION.pdf",
      },
      mechanical: {
        "Thermodynamics & Heat Transfer":
          "Thermodynamics & Heat Transfer Track.pdf",
        "Fluid Mechanics": "Fluid Mechanics Track Program.pdf",
        "Manufacturing Processes":
          "Manufacturing Processes Training Program.pdf",
        "Engineering Drawing & CAD":
          "Engineering Drawing & CAD Track Program.pdf",
        "AutoCAD, SolidWorks, CATIA, ANSYS": "CAD and FEA training program.pdf",
        "Robotics & Mechatronics":
          "Robotics & Mechatronics Track Program (1).pdf",
        "HVAC Systems": "Design HVAC system for commercial building.pdf",
        "3D Printing & Additive Manufacturing":
          "Create 3D printing training slides.pdf",
        "CNC Programming": "Create CNC Programming Track slides.pdf",
        "Industrial Engineering": "Industrial Engineering Track Program.pdf",
      },
      civil: {
        "Structural Engineering": "Structural Engineering Track Program.pdf",
        "Transportation Engineering":
          "Transportation Engineering Training Program.pdf",
        "Geotechnical Engineering":
          "Geotechnical Engineering Track Program.pdf",
        "Surveying & Estimation": "Surveying & Estimation Training Program.pdf",
        "AutoCAD Civil 3D / STAAD.Pro / Revit":
          "Advanced Civil Design Tools Track.pdf",
        "Construction Project Management":
          "Create AI slides for Construction Project Management Track.pdf",
        "Environmental Engineering":
          "Environmental Engineering Track Program.pdf",
        "Smart Cities & Infrastructure":
          "Smart Cities & Infrastructure Program.pdf",
        "GIS & Remote Sensing": "GIS & Remote Sensing Track Program.pdf",
      },
      management: {
        "Project Management":
          "project_management_track_program_20250822125735.pdf",
        "Business Analytics":
          "Unlock-the-Power-of-Data-Your-Path-to-Becoming-a-Business-Analyst.pdf",
        "Digital Marketing (SEO, SEM, Google Ads)":
          "Ignite-Your-Digital-Marketing-Career.pdf",
        "Product Management": "Unlock-Your-Product-Vision.pdf",
        "Human Resource Management (HRM)":
          "Mastering-HR-Your-Path-to-a-Dynamic-Career.pdf",
        "Operations & Supply Chain Management":
          "Mastering-Operations-and-Supply-Chain-Management.pdf",
        "Finance & Accounting":
          "Accelerate-Your-Future-Finance-and-Accounting-Immersion.pdf",
      },
    };

    // Get the PDF filename from the mapping or use a fallback
    const pdfFilename = pdfMappings[domain]?.[course.title] || "";

    if (!pdfFilename) {
      console.error(
        `No PDF mapping found for course: ${course.title} in domain: ${domain}`
      );
      return;
    }

    // Map domain names to folder names
    const domainToFolder: Record<string, string> = {
      "electronics-communication": "electronics",
      "electrical-electronics": "electrical",
      "computer-science": "computer-science",
      mechanical: "mechanical",
      civil: "civil",
      management: "management",
    };

    // Get the correct folder name
    const folderName = domainToFolder[domain] || domain;

    // Construct the PDF path with proper encoding to handle spaces and special characters
    // First, ensure the filename doesn't have any leading/trailing whitespace
    const cleanFilename = pdfFilename.trim();

    // Encode the filename to handle spaces and special characters
    const encodedFilename = encodeURIComponent(cleanFilename);

    // Construct the full path
    const pdfPath = `/roadmap-pdfs/${folderName}/${encodedFilename}`;

    console.log(`Opening PDF: ${pdfPath}`);

    setSelectedPdf({
      path: pdfPath,
      title: `${course.title} Roadmap`,
    });
    setIsPdfModalOpen(true);
  };

  if (!domainData) {
    return (
      <div className="min-h-screen bg-white">
        <Navbar />
        <div className="flex items-center justify-center min-h-[60vh]">
          <div className="text-center">
            <h1 className="text-2xl font-bold text-tz-dark-navy mb-4">
              Domain Not Found
            </h1>
            <Link href="/">
              <Button>Return Home</Button>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Navbar />

      {/* PDF Viewer Modal */}
      <PDFViewerModal
        isOpen={isPdfModalOpen}
        onClose={() => setIsPdfModalOpen(false)}
        pdfPath={selectedPdf.path}
        title={selectedPdf.title}
      />

      {/* Enhanced Hero Section with Backdrop Blur */}
      <section className="relative py-24 px-4 overflow-hidden">
        {/* Background Image with Blur */}
        <div className="absolute inset-0">
          <img
            src={domainData.heroImage || "/placeholder.svg"}
            alt={domainData.title}
            className="w-full h-full object-cover blur-sm"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/70 backdrop-blur-[2px]"></div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          {Array.from({ length: 12 }).map((_, index) => (
            <motion.div
              key={index}
              className="absolute w-20 h-20 bg-white/5 rounded-full blur-xl"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.3, 0.7, 0.3],
                x: [0, Math.random() * 60 - 30, 0],
                y: [0, Math.random() * 60 - 30, 0],
              }}
              transition={{
                duration: 6 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 4,
              }}
            />
          ))}
        </div>

        <div className="max-w-6xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
          >
            <div className="flex items-center gap-4 mb-6 mt-20">
              <motion.div
                className="text-6xl"
                animate={{ rotate: [0, 10, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity }}
              >
                {domainData.icon}
              </motion.div>
              <div>
                <motion.h1
                  className="text-4xl lg:text-5xl font-bold text-white mb-4"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                >
                  {domainData.title}
                </motion.h1>
                <motion.p
                  className="text-lg text-white/90 max-w-4xl leading-relaxed"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6, duration: 0.8 }}
                >
                  {domainData.description}
                </motion.p>
              </div>
            </div>

            {/* Domain Stats */}
            <motion.div
              className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-8"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                <BookOpen className="w-8 h-8 text-white mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">
                  {domainData.stats.courses}
                </div>
                <div className="text-white/80 text-sm">Courses</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                <Users className="w-8 h-8 text-white mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">
                  {domainData.stats.students}
                </div>
                <div className="text-white/80 text-sm">Students</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                <Star className="w-8 h-8 text-white mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">
                  {domainData.stats.rating}★
                </div>
                <div className="text-white/80 text-sm">Rating</div>
              </div>
              <div className="text-center bg-white/10 backdrop-blur-sm rounded-2xl p-4 border border-white/20">
                <Target className="w-8 h-8 text-white mx-auto mb-2" />
                <div className="text-2xl font-bold text-white">
                  {domainData.stats.projects}
                </div>
                <div className="text-white/80 text-sm">Projects</div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Enhanced Courses Section */}
      <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold text-tz-dark-navy mb-6">
              Featured Courses
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Choose from our carefully curated courses designed by industry
              experts with hands-on projects
            </p>
          </motion.div>

          {/* Course Categories */}
          <div className="mb-12">
            <div className="flex justify-center gap-4 mb-8">
              <Badge className="bg-tz-bright-orange text-white px-4 py-2">
                Core Domains
              </Badge>
              <Badge className="bg-tz-dark-navy text-white px-4 py-2">
                Advanced Domains
              </Badge>
            </div>
          </div>

          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {domainData.courses.map((course, index) => (
              <motion.div
                key={course.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-500 group overflow-hidden border-0 bg-white">
                  {/* Course Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={course.image || "/placeholder.svg"}
                      alt={course.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

                    {/* Badges */}
                    <div className="absolute top-4 left-4 flex gap-2">
                      <Badge
                        className={`${
                          course.level === "Beginner"
                            ? "bg-green-500"
                            : course.level === "Intermediate"
                            ? "bg-yellow-500"
                            : "bg-red-500"
                        } text-white font-bold`}
                      >
                        {course.level}
                      </Badge>
                      <Badge
                        className={`${
                          course.category === "Core"
                            ? "bg-tz-bright-orange"
                            : "bg-tz-dark-navy"
                        } text-white font-bold text-xs`}
                      >
                        {course.category}
                      </Badge>
                      {course.popular && (
                        <motion.div
                          animate={{ scale: [1, 1.1, 1] }}
                          transition={{ duration: 2, repeat: Infinity }}
                        >
                          <Badge className="bg-red-500 text-white font-bold">
                            🔥 Popular
                          </Badge>
                        </motion.div>
                      )}
                    </div>

                    {/* Play Button */}
                    <motion.div
                      className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      whileHover={{ scale: 1.1 }}
                    >
                      <div className="w-16 h-16 bg-white/90 backdrop-blur-sm rounded-full flex items-center justify-center shadow-2xl">
                        <Play className="w-8 h-8 text-tz-bright-orange ml-1" />
                      </div>
                    </motion.div>
                  </div>

                  <CardContent className="p-6 flex-1 flex flex-col">
                    {/* Course Header */}
                    <div className="flex-1">
                      <div className="flex items-start justify-between mb-3">
                        <CardTitle className="text-xl font-bold text-tz-dark-navy group-hover:text-tz-bright-orange transition-colors leading-tight">
                          {course.title}
                        </CardTitle>
                        <div className="flex items-center gap-1 ml-2">
                          <Star className="w-4 h-4 text-yellow-400 fill-current" />
                          <span className="text-sm font-bold text-gray-600">
                            {course.rating}
                          </span>
                        </div>
                      </div>

                      <p className="text-gray-600 mb-4 leading-relaxed text-sm">
                        {course.description}
                      </p>

                      {/* Course Stats */}
                      <div className="flex items-center justify-between mb-4 text-sm text-gray-500">
                        <div className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-full">
                          <Clock className="w-3 h-3" />
                          <span>{course.duration}</span>
                        </div>
                        <div className="flex items-center gap-1 bg-gray-100 px-2 py-1 rounded-full">
                          <Users className="w-3 h-3" />
                          <span>{course.students}</span>
                        </div>
                      </div>

                      {/* Skills */}
                      <div className="mb-4">
                        <h4 className="text-sm font-semibold text-tz-dark-navy mb-2 flex items-center">
                          <Zap className="w-4 h-4 mr-1 text-tz-bright-orange" />
                          Skills You'll Learn:
                        </h4>
                        <div className="flex flex-wrap gap-1">
                          {course.skills.slice(0, 4).map((skill) => (
                            <Badge
                              key={skill}
                              variant="secondary"
                              className="bg-tz-bright-orange/10 text-tz-dark-navy text-xs hover:bg-tz-bright-orange hover:text-white transition-colors"
                            >
                              {skill}
                            </Badge>
                          ))}
                          {course.skills.length > 4 && (
                            <Badge
                              variant="secondary"
                              className="bg-gray-100 text-gray-600 text-xs"
                            >
                              +{course.skills.length - 4}
                            </Badge>
                          )}
                        </div>
                      </div>

                      {/* Highlights */}
                      <div className="mb-6">
                        <h4 className="text-sm font-semibold text-tz-dark-navy mb-2 flex items-center">
                          <Award className="w-4 h-4 mr-1 text-tz-bright-orange" />
                          Course Highlights:
                        </h4>
                        <div className="space-y-1">
                          {course.highlights.slice(0, 2).map((highlight) => (
                            <div
                              key={highlight}
                              className="flex items-center text-xs text-gray-600"
                            >
                              <CheckCircle className="w-3 h-3 text-green-500 mr-2 flex-shrink-0" />
                              <span>{highlight}</span>
                            </div>
                          ))}
                        </div>
                      </div>
                    </div>

                    {/* Pricing and CTA */}
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        {/* <div> */}
                          {/* <div className="flex items-center gap-2">
                            <span className="text-2xl font-bold text-tz-bright-orange">
                              {course.price}
                            </span>
                            <span className="text-lg text-gray-400 line-through">
                              {course.originalPrice}
                            </span>
                          </div> */}
                          {/* <div className="text-sm text-green-600 font-semibold">
                            Save{" "}
                            {Math.round(
                              (1 -
                                parseInt(course.price.replace(/[₹,]/g, "")) /
                                  parseInt(
                                    course.originalPrice.replace(/[₹,]/g, "")
                                  )) *
                                100
                            )}
                            %
                          </div> */}
                        {/* </div> */}
                        <div>
                        <motion.div
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                        >
                          <Button
                            variant="outline"
                            size="sm"
                            className="border-tz-bright-orange text-tz-bright-orange hover:bg-tz-bright-orange hover:text-white"
                            onClick={() => handleOpenRoadmap(course)}
                          >
                            Roadmap
                          </Button>
                        </motion.div>
                      </div>

                      <motion.div
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Link href={course.link} target="_blank">
  <Button>Enroll Now</Button>
</Link>
                      </motion.div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
