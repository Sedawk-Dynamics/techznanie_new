"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X, ChevronDown, Search, User } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Careers", href: "/careers" },
    { name: "Contact", href: "/contact" },
    {
      name: "Programs",
      href: "#programs",
      dropdown: [
        {
          name: "Computer Science Engineering",
          href: "/course/computer-science",
        },
        {
          name: "Electronics & Communication",
          href: "/course/electronics-communication",
        },
        {
          name: "Electrical & Electronics",
          href: "/course/electrical-electronics",
        },
        { name: "Mechanical Engineering", href: "/course/mechanical" },
        { name: "Civil Engineering", href: "/course/civil" },
        { name: "Management & Business", href: "/course/management" },
      ],
    },
    { name: "Blogs", href: "/blogs" },
  ];

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`fixed top-0 w-full z-50 transition-all duration-500 bg-white/95 ${
        scrolled
          ? "backdrop-blur-xl shadow-modern border-b border-gray-100"
          : "backdrop-blur-md border-b border-white/10"
      }`}
    >
      <div className="container-modern">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/">
            <motion.div
              whileHover={{ scale: 1.05 }}
              className="flex items-center space-x-3 cursor-pointer"
            >
              <div className={`p-2 rounded-xl transition-all duration-300`}>
                <img
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/techznanie%20png2-oOaToBOGCyM98fyvfygvFFEwoCVv5C.png"
                  alt="TechZnanie Innoversity"
                  className="h-12 w-auto"
                />
              </div>
            </motion.div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            {navItems.map((item) => (
              <div
                key={item.name}
                className="relative"
                onMouseEnter={() =>
                  item.dropdown && setActiveDropdown(item.name)
                }
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <motion.a
                  href={item.href}
                  whileHover={{ y: -2 }}
                  className={`flex items-center space-x-1 font-semibold transition-all duration-300 text-tz-dark-navy hover:text-tz-bright-orange`}
                >
                  <span>{item.name}</span>
                  {item.dropdown && <ChevronDown className="w-4 h-4" />}
                </motion.a>

                {/* Dropdown Menu */}
                {item.dropdown && activeDropdown === item.name && (
                  <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="absolute top-full left-0 mt-2 w-64 bg-white/95 backdrop-blur-xl rounded-xl shadow-modern border border-gray-100 py-2"
                  >
                    {item.dropdown.map((subItem) => (
                      <Link
                        key={subItem.name}
                        href={subItem.href}
                        className="block px-4 py-3 text-tz-dark-navy hover:bg-yellow-50 hover:text-tz-bright-orange transition-colors font-medium"
                      >
                        {subItem.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop Actions */}
          <div className="hidden lg:flex items-center space-x-4">
            <Button
              variant="ghost"
              className={`font-semibold transition-all duration-300 text-tz-dark-navy hover:text-tz-bright-orange hover:bg-yellow-50 `}
              onClick={() =>
                window.open(
                  "https://lms.techznanieinnoversity.com/login",
                  "_blank"
                )
              }
            >
              <User className="w-4 h-4 mr-2" />
              Login
            </Button>
            <Button
              className={`font-bold px-6 py-2 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 bg-gradient-to-r from-tz-bright-orange to-tz-dark-orange text-white hover:from-tz-dark-orange hover:to-tz-bright-orange`}
              onClick={() =>
                window.open(
                  "https://lms.techznanieinnoversity.com/home/courses",
                  "_blank"
                )
              }
            >
              Enroll Now
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="lg:hidden">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
              className={`transition-all duration-300 ${
                scrolled
                  ? "text-tz-dark-navy hover:bg-yellow-50"
                  : "text-white hover:bg-white/10 backdrop-blur-sm"
              }`}
            >
              {isOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-white/95 backdrop-blur-xl border-t border-gray-100 rounded-b-2xl shadow-modern"
          >
            <div className="px-4 py-6 space-y-4">
              {navItems.map((item) => (
                <div key={item.name} className="relative">
                  <a
                    href={item.href}
                    className="block py-3 text-tz-dark-navy hover:text-tz-bright-orange font-semibold transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </a>
                  {item.dropdown && (
                    <div className="ml-4 mt-2 space-y-2">
                      {item.dropdown.map((subItem) => (
                        <Link
                          key={subItem.name}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-tz-dark-navy hover:text-tz-bright-orange transition-colors"
                          onClick={() => setIsOpen(false)}
                        >
                          {subItem.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <div className="pt-4 space-y-3">
                <Button
                  variant="outline"
                  className="w-full border-tz-dark-navy text-tz-dark-navy hover:bg-tz-dark-navy hover:text-white bg-transparent"
                  onClick={() =>
                    window.open(
                      "https://lms.techznanieinnoversity.com/login",
                      "_blank"
                    )
                  }
                >
                  Login
                </Button>
                <Button
                  className="w-full bg-gradient-to-r from-tz-bright-orange to-tz-dark-orange text-white hover:from-tz-dark-orange hover:to-tz-bright-orange"
                  onClick={() =>
                    window.open(
                      "https://lms.techznanieinnoversity.com/home/courses",
                      "_blank"
                    )
                  }
                >
                  Enroll Now
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </div>
    </motion.nav>
  );
}
