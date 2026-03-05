"use client"

import { motion } from "framer-motion"
import { Lightbulb, GraduationCap, Cpu, Code, BookOpen, Target, Zap, Brain, Rocket, Trophy } from 'lucide-react'

const educationalIcons = [Lightbulb, GraduationCap, Cpu, Code, BookOpen, Target, Zap, Brain, Rocket, Trophy]

export default function LoadingScreen() {
  return (
    <div className="fixed inset-0 bg-[#1A2A41] flex items-center justify-center text-white overflow-hidden">
      {/* Animated Tech Grid Background */}
      <div className="absolute inset-0">
        <svg className="w-full h-full opacity-10" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
              <motion.path
                d="M 10 0 L 0 0 0 10"
                fill="none"
                stroke="#F4A300"
                strokeWidth="0.5"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ pathLength: 1, opacity: 0.3 }}
                transition={{ duration: 2, repeat: Infinity, repeatType: "reverse" }}
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
        
        {/* Animated Grid Lines */}
        {Array.from({ length: 20 }).map((_, index) => (
          <motion.div
            key={`grid-line-${index}`}
            className="absolute bg-gradient-to-r from-transparent via-[#F4A300]/20 to-transparent"
            style={{
              width: index % 2 === 0 ? '100%' : '1px',
              height: index % 2 === 0 ? '1px' : '100%',
              left: index % 2 === 0 ? '0' : `${(index / 2) * 10}%`,
              top: index % 2 === 0 ? `${(index / 2) * 10}%` : '0',
            }}
            animate={{
              opacity: [0, 0.5, 0],
              scale: [0.8, 1.2, 0.8],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: index * 0.2,
            }}
          />
        ))}
      </div>

      {/* Radial Light Burst Behind Logo */}
      <motion.div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at center, #F4A300 0%, rgba(244, 163, 0, 0.3) 20%, rgba(244, 163, 0, 0.1) 40%, #1A2A41 100%)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.6, 0.3],
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Morphing Blobs */}
      <div className="absolute inset-0">
        {/* Orange Blob - Left */}
        <motion.div
          className="absolute w-96 h-96 bg-gradient-to-br from-[#F4A300]/30 to-[#FFF3C2]/20 rounded-full blur-3xl"
          style={{ top: '20%', left: '10%' }}
          animate={{
            scale: [1, 1.5, 0.8, 1.3, 1],
            x: [0, 50, -30, 20, 0],
            y: [0, -40, 60, -20, 0],
            borderRadius: [
              "50%",
              "60% 40% 30% 70%",
              "30% 60% 70% 40%",
              "70% 30% 60% 40%",
              "50%"
            ],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* Navy Blob - Right */}
        <motion.div
          className="absolute w-80 h-80 bg-gradient-to-br from-[#3D4B61]/40 to-[#A9CCE3]/30 rounded-full blur-3xl"
          style={{ top: '50%', right: '15%' }}
          animate={{
            scale: [0.8, 1.6, 1.1, 0.9, 0.8],
            x: [0, -60, 40, -30, 0],
            y: [0, 50, -70, 30, 0],
            borderRadius: [
              "50%",
              "40% 60% 60% 40%",
              "60% 40% 40% 60%",
              "45% 55% 55% 45%",
              "50%"
            ],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        />

        {/* Sky Blue Blob - Bottom */}
        <motion.div
          className="absolute w-72 h-72 bg-gradient-to-br from-[#A9CCE3]/35 to-[#FFF3C2]/25 rounded-full blur-3xl"
          style={{ bottom: '15%', left: '30%' }}
          animate={{
            scale: [1.2, 0.7, 1.8, 1, 1.2],
            x: [0, 80, -50, 40, 0],
            y: [0, -60, 40, -30, 0],
            borderRadius: [
              "50%",
              "70% 30% 30% 70%",
              "30% 70% 70% 30%",
              "55% 45% 45% 55%",
              "50%"
            ],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 6,
          }}
        />
      </div>

      {/* Floating Educational Icons */}
      <div className="absolute inset-0">
        {Array.from({ length: 15 }).map((_, index) => {
          const Icon = educationalIcons[index % educationalIcons.length]
          return (
            <motion.div
              key={`floating-icon-${index}`}
              className="absolute text-[#F4A300]/20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                fontSize: `${20 + Math.random() * 15}px`,
              }}
              animate={{
                y: [0, -30, 0],
                x: [0, Math.random() * 40 - 20, 0],
                rotate: [0, 360],
                opacity: [0.2, 0.6, 0.2],
                scale: [1, 1.3, 1],
              }}
              transition={{
                duration: 8 + Math.random() * 4,
                repeat: Infinity,
                delay: Math.random() * 5,
                ease: "easeInOut",
              }}
            >
              <Icon className="w-full h-full drop-shadow-lg" />
            </motion.div>
          )
        })}
      </div>

      {/* Orange Sparks/Particles */}
      <div className="absolute inset-0">
        {Array.from({ length: 25 }).map((_, index) => (
          <motion.div
            key={`spark-${index}`}
            className="absolute w-1 h-1 bg-[#F4A300] rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              scale: [0, 1, 0],
              opacity: [0, 1, 0],
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              delay: Math.random() * 3,
              ease: "easeOut",
            }}
          />
        ))}
      </div>

      {/* Main Content */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        className="z-10 text-center relative"
      >
        {/* Logo with Pulse and Glow */}
        <motion.div
          animate={{
            scale: [1, 1.05, 1],
            boxShadow: [
              '0 0 0px rgba(244, 163, 0, 0)',
              '0 0 30px rgba(244, 163, 0, 0.6)',
              '0 0 0px rgba(244, 163, 0, 0)'
            ]
          }}
          transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
          className="mb-8 relative"
        >
          {/* Logo Background Glow */}
          <div className="absolute inset-0 bg-[#F4A300]/20 rounded-full blur-2xl scale-150"></div>
          
          {/* Logo Container */}
          <div className="relative w-40 h-40 mx-auto bg-white/10 backdrop-blur-sm rounded-full flex items-center justify-center border-2 border-[#F4A300]/30">
            <motion.img 
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/techznanie%20png2-oOaToBOGCyM98fyvfygvFFEwoCVv5C.png" 
              alt="TechZnanie Logo" 
              className="w-24 h-24 object-contain filter brightness-110 contrast-110"
              animate={{
                rotate: [0, 5, -5, 0],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </div>

          {/* Orbiting Elements */}
          {[Lightbulb, GraduationCap, Cpu, Code].map((Icon, index) => (
            <motion.div
              key={`orbit-${index}`}
              className="absolute w-8 h-8 text-[#A9CCE3]"
              style={{
                top: '50%',
                left: '50%',
                transformOrigin: '0 0',
              }}
              animate={{
                rotate: 360,
              }}
              transition={{
                duration: 8 + index * 2,
                repeat: Infinity,
                ease: "linear",
              }}
            >
              <div
                style={{
                  transform: `translate(-50%, -50%) translateX(${100 + index * 15}px)`,
                }}
              >
                <motion.div
                  animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.7, 1, 0.7],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: index * 0.5,
                  }}
                  className="w-8 h-8 bg-[#F4A300]/20 backdrop-blur-sm rounded-lg flex items-center justify-center border border-[#F4A300]/30"
                >
                  <Icon className="w-5 h-5" />
                </motion.div>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Typing Animation Text */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.8 }}
          className="mb-8"
        >
          <motion.h1
            animate={{
              opacity: [0, 1, 1, 1, 0],
              y: [10, 0, 0, 0, -10]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            className="text-2xl font-semibold text-[#F4A300] mb-2"
          >
            Threading Skills into Success...
          </motion.h1>
          
          {/* Bouncing Dots Loader */}
          <div className="flex justify-center gap-2">
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="w-3 h-3 rounded-full bg-[#F4A300]"
                animate={{ y: [0, -15, 0] }}
                transition={{
                  repeat: Infinity,
                  duration: 1.2,
                  delay: i * 0.2,
                  ease: 'easeInOut',
                }}
              />
            ))}
          </div>
        </motion.div>

        {/* Interactive Quiz Question */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 2, duration: 0.8 }}
          className="bg-white/5 backdrop-blur-sm rounded-2xl p-6 border border-[#F4A300]/20 max-w-md mx-auto"
        >
          <motion.p
            animate={{
              opacity: [0.7, 1, 0.7],
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
            }}
            className="text-[#FFF3C2] text-lg mb-4"
          >
            What are you excited to learn today?
          </motion.p>
          
          <div className="flex flex-wrap justify-center gap-2">
            {['Coding', 'Design', 'AI/ML', 'Business'].map((topic, index) => (
              <motion.div
                key={topic}
                whileHover={{ scale: 1.05, backgroundColor: 'rgba(244, 163, 0, 0.2)' }}
                className="px-4 py-2 bg-[#3D4B61]/30 rounded-full text-[#A9CCE3] text-sm cursor-pointer border border-[#A9CCE3]/30 transition-colors"
                animate={{
                  y: [0, -5, 0],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: index * 0.3,
                }}
              >
                {topic}
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Progress Bar */}
        <motion.div
          initial={{ opacity: 0, width: 0 }}
          animate={{ opacity: 1, width: '100%' }}
          transition={{ delay: 3, duration: 0.8 }}
          className="mt-8 max-w-md mx-auto"
        >
          <div className="h-2 bg-[#3D4B61]/30 rounded-full overflow-hidden backdrop-blur-sm border border-[#F4A300]/20">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: "100%" }}
              transition={{ delay: 3.5, duration: 2.5, ease: "easeInOut" }}
              className="h-full bg-gradient-to-r from-[#F4A300] via-[#FFF3C2] to-[#F4A300] rounded-full relative overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent"
                animate={{ x: ['-100%', '100%'] }}
                transition={{ duration: 1, repeat: Infinity, delay: 4 }}
              />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  )
}
