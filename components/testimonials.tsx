"use client"

import { motion } from "framer-motion"
import { Star, Quote, ArrowLeft, ArrowRight } from 'lucide-react'
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { useState } from "react"

export default function Testimonials() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Full Stack Developer",
      company: "Microsoft",
      //image: "https://static.pincel.app/cdn-cgi/image/width=750,format=auto/https://static.pincel.app/media/248dirybp3rfi0d2bdatvs-ras25b.png",
      content: "TechZnanie completely transformed my career. The hands-on projects and mentorship helped me land my dream job at Microsoft. The curriculum is perfectly aligned with industry needs.",
      rating: 5,
      salary: "₹18 LPA",
      course: "Full Stack Development",
      beforeRole: "Fresher"
    },
    {
      name: "Rahul Kumar",
      role: "Data Scientist",
      company: "Amazon",
      //image: "https://pixahive.com/wp-content/uploads/2021/02/An-Indian-boy-375075-pixahive.jpg",
      content: "The Data Science program exceeded my expectations. Real-world projects, industry datasets, and expert mentors made all the difference. Now I'm working on ML models at Amazon!",
      rating: 5,
      salary: "₹22 LPA",
      course: "Data Science & Analytics",
      beforeRole: "Support Engineer"
    },
    {
      name: "Sneha Patel",
      role: "UI/UX Designer",
      company: "Flipkart",
      //image: "https://images.unsplash.com/photo-1729101143873-d80050bae219?fm=jpg&q=60&w=3000&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bm9ydGglMjBpbmRpYW4lMjBnaXJsfGVufDB8fDB8fHww",
      content: "From a non-tech background to designing user experiences at Flipkart - TechZnanie made this incredible journey possible. The portfolio projects were game-changers!",
      rating: 5,
      salary: "₹15 LPA",
      course: "UI/UX Design",
      beforeRole: "Marketing Executive"
    },
    {
      name: "Arjun Singh",
      role: "Mobile App Developer",
      company: "Swiggy",
      //image: "https://i.pinimg.com/236x/fd/2c/35/fd2c35fe5388d58f66ba8d923c6b0fb5.jpg",
      content: "The mobile development course was incredibly comprehensive. Building real apps and deploying them gave me the confidence to excel in interviews. Highly recommend TechZnanie!",
      rating: 5,
      salary: "₹16 LPA",
      course: "Mobile App Development",
      beforeRole: "Fresher"
    },
    {
      name: "Kavya Reddy",
      role: "Digital Marketing Manager",
      company: "Zomato",
      //image: "https://img.freepik.com/free-photo/indian-woman-posing-cute-stylish-outfit-camera-smiling_482257-122351.jpg?semt=ais_hybrid&w=740&q=80",
      content: "The digital marketing program is outstanding! Live campaigns, Google certifications, and agency partnerships helped me transition from sales to marketing at Zomato.",
      rating: 5,
      salary: "₹12 LPA",
      course: "Digital Marketing",
      beforeRole: "Sales Executive"
    },
    {
      name: "Vikram Joshi",
      role: "DevOps Engineer",
      company: "Paytm",
      // image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmJk1BUwlPszZsn_tpBf6LuhlAxH4ZtdG5pQ&s",
      content: "Cloud computing and DevOps training was exactly what I needed. The hands-on AWS projects and certification prep landed me a senior role at Paytm. Excellent program!",
      rating: 5,
      salary: "₹20 LPA",
      course: "Cloud Computing & DevOps",
      beforeRole: "System Admin"
    }
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % Math.ceil(testimonials.length / 3))
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + Math.ceil(testimonials.length / 3)) % Math.ceil(testimonials.length / 3))
  }

  const visibleTestimonials = testimonials.slice(currentSlide * 3, (currentSlide + 1) * 3)

  return (
    <section id="testimonials" className="section-padding bg-gradient-to-tr from-[#CBD5E1] to-white">
      <div className="container-modern">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <Badge className="bg-tz-light-blue text-white mb-6 px-6 py-2 text-sm font-semibold">
            Success Stories
          </Badge>
          <h2 className="text-4xl lg:text-5xl font-bold text-tz-dark-navy mb-6">
            What Our Students
            <span className="text-gradient block">Are Saying</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join thousands of successful professionals who transformed their careers with TechZnanie. 
            Here are their inspiring stories.
          </p>
        </motion.div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {visibleTestimonials.map((testimonial, index) => (
              <motion.div
                key={`${currentSlide}-${index}`}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
              >
                <Card className="card-modern h-full">
                  <CardContent className="p-8">
                    {/* Rating */}
                    <div className="flex items-center mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    
                    {/* Quote */}
                    <Quote className="w-8 h-8 text-tz-bright-orange/30 mb-4" />
                    
                    <p className="text-gray-700 leading-relaxed mb-6 italic">
                      "{testimonial.content}"
                    </p>
                    
                    {/* Student Info */}
                    <div className="flex items-center space-x-4 mb-4">
                      
                      <div className="flex-1">
                        <h4 className="font-bold text-tz-dark-navy text-lg">{testimonial.name}</h4>
                        <p className="text-tz-bright-orange font-semibold">{testimonial.role}</p>
                        <p className="text-gray-600 text-sm">{testimonial.company}</p>
                      </div>
                    </div>
                    
                    {/* Career Transformation */}
                    <div className="bg-tz-cream/20 rounded-xl p-4 space-y-2">
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Course:</span>
                        <Badge className="bg-tz-medium-blue text-white text-xs">
                          {testimonial.course}
                        </Badge>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Career Jump:</span>
                        <span className="text-sm font-semibold text-tz-dark-navy">
                          {testimonial.beforeRole} → {testimonial.role}
                        </span>
                      </div>
                      <div className="flex justify-between items-center">
                        <span className="text-sm text-gray-600">Package:</span>
                        <span className="text-lg font-bold text-tz-bright-orange">
                          {testimonial.salary}
                        </span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex justify-center items-center space-x-4">
            <Button
              variant="outline"
              size="icon"
              onClick={prevSlide}
              className="rounded-full border-tz-medium-blue text-tz-medium-blue hover:bg-tz-medium-blue hover:text-white"
            >
              <ArrowLeft className="w-4 h-4" />
            </Button>
            
            <div className="flex space-x-2">
              {[...Array(Math.ceil(testimonials.length / 3))].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentSlide ? "bg-tz-bright-orange" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
            
            <Button
              variant="outline"
              size="icon"
              onClick={nextSlide}
              className="rounded-full border-tz-medium-blue text-tz-medium-blue hover:bg-tz-medium-blue hover:text-white"
            >
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>

        {/* Success Stats */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="bg-gradient-to-br from-[#0D1B2A]/95 to-tz-dark-navy/90 rounded-3xl p-12 text-white text-center"
        >
          <h3 className="text-3xl font-bold mb-8">Our Success Numbers Speak</h3>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <div className="text-4xl font-bold mb-2">500+</div>
              <div className="text-tz-cream">Students Trained</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">95%</div>
              <div className="text-tz-cream">Job Placement Rate</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">₹4.5L</div>
              <div className="text-tz-cream">Average Starting Salary</div>
            </div>
            <div>
              <div className="text-4xl font-bold mb-2">50+</div>
              <div className="text-tz-cream">Hiring Partners</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
