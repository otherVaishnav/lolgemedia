"use client"

import { useState, useEffect } from "react"
import {
  ArrowRight,
  Zap,
  Target,
  TrendingUp,
  Users,
  Phone,
  Mail,
  MapPin,
  Twitter,
  Linkedin,
  Instagram,
  Menu,
  X,
  Eye,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"

// Add this right after the imports and before the component
const customStyles = `
  @keyframes gradient-x {
    0%, 100% {
      background-size: 200% 200%;
      background-position: left center;
    }
    50% {
      background-size: 200% 200%;
      background-position: right center;
    }
  }
  
  @keyframes spin-slow {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
  
  .animate-gradient-x {
    animation: gradient-x 3s ease infinite;
  }
  
  .animate-spin-slow {
    animation: spin-slow 20s linear infinite;
  }
`
export function RandomDots() {
  const [positions, setPositions] = useState<{ left: string; top: string; delay: string; duration: string }[]>([]);

  useEffect(() => {
    setPositions(
      [...Array(6)].map((_, i) => ({
        left: `${Math.random() * 100}%`,
        top: `${Math.random() * 100}%`,
        delay: `${i * 0.5}s`,
        duration: `${Math.random() * 3 + 2}s`,
      }))
    );
  }, []);

  return (
    <div className="absolute inset-0">
      {positions.map((pos, i) => (
        <div
          key={i}
          className="absolute w-2 h-2 bg-white/20 rounded-full animate-pulse"
          style={{
            left: pos.left,
            top: pos.top,
            animationDelay: pos.delay,
            animationDuration: pos.duration,
          }}
        />
      ))}
    </div>
  );
}


export default function LolgeMediaLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  const [isVisible, setIsVisible] = useState({})

  const testimonials = [
    {
      name: "Sarah Chen",
      company: "TechFlow Solutions",
      text: "Lolge Media transformed our digital presence completely. Our conversion rate increased by 340% in just 3 months.",
      avatar: "/professional-woman-avatar.png",
    },
    {
      name: "Marcus Rodriguez",
      company: "GrowthLab Inc",
      text: "The ROI we've seen is incredible. They don't just design - they engineer growth into every pixel.",
      avatar: "/professional-man-avatar.png",
    },
    {
      name: "Emily Watson",
      company: "Innovate Digital",
      text: "Working with Lolge Media was a game-changer. They understand both design and business strategy perfectly.",
      avatar: "/professional-woman-avatar-2.png",
    },
  ]

  const caseStudies = [
    {
      client: "E-commerce Startup",
      metric: "3x ROAS",
      description: "Complete brand redesign and marketing automation",
      image: "/ecommerce-dashboard.png",
    },
    {
      client: "SaaS Platform",
      metric: "60% CAC Reduction",
      description: "Landing page optimization and funnel redesign",
      image: "/saas-analytics-dashboard.png",
    },
    {
      client: "Tech Agency",
      metric: "250% Lead Increase",
      description: "Full digital transformation and growth strategy",
      image: "/tech-agency-website.png",
    },
  ]

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setIsVisible((prev) => ({
            ...prev,
            [entry.target.id]: entry.isIntersecting,
          }))
        })
      },
      { threshold: 0.1 },
    )

    document.querySelectorAll("[id]").forEach((el) => {
      observer.observe(el)
    })

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen bg-white">
      <style dangerouslySetInnerHTML={{ __html: customStyles }} />
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <div className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                Lolge Media
              </div>
            </div>

            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#services" className="text-gray-700 hover:text-purple-600 transition-colors">
                  Services
                </a>
                <a href="#results" className="text-gray-700 hover:text-purple-600 transition-colors">
                  Results
                </a>
                <a href="#about" className="text-gray-700 hover:text-purple-600 transition-colors">
                  About
                </a>
                <a href="#contact" className="text-gray-700 hover:text-purple-600 transition-colors">
                  Contact
                </a>
              </div>
            </div>

            <div className="md:hidden">
              <Button variant="ghost" size="sm" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-100">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#services" className="block px-3 py-2 text-gray-700 hover:text-purple-600">
                Services
              </a>
              <a href="#results" className="block px-3 py-2 text-gray-700 hover:text-purple-600">
                Results
              </a>
              <a href="#about" className="block px-3 py-2 text-gray-700 hover:text-purple-600">
                About
              </a>
              <a href="#contact" className="block px-3 py-2 text-gray-700 hover:text-purple-600">
                Contact
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-16 min-h-screen flex items-center relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-white"></div>
        <div className="absolute top-20 right-10 w-72 h-72 bg-gradient-to-br from-purple-400 to-blue-500 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute bottom-20 left-10 w-96 h-96 bg-gradient-to-tr from-blue-400 to-purple-500 rounded-full opacity-5 animate-pulse delay-1000"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div
              className={`space-y-8 transition-all duration-1000 opacity-0 translate-y-10`}
            >
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-7xl font-bold text-gray-900 leading-tight">
                  Design.
                  <span className="block bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
                    Market.
                  </span>
                  <span className="block">Grow.</span>
                </h1>
                <p className="text-xl text-gray-600 max-w-lg">
                  {"We don't just build websites. We engineer growth machines that convert visitors into customers and customers into advocates."}
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg group"
                >
                  Get Free Audit
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-2 border-purple-600 text-purple-600 hover:bg-purple-600 hover:text-white px-8 py-4 text-lg group bg-transparent"
                >
                  <Phone className="mr-2 h-5 w-5" />
                  Book a Call
                </Button>
              </div>

              <div className="flex items-center space-x-8 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">500+</div>
                  <div className="text-sm text-gray-600">Projects Delivered</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">98%</div>
                  <div className="text-sm text-gray-600">Client Satisfaction</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-gray-900">3.2x</div>
                  <div className="text-sm text-gray-600">Avg ROI Increase</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="relative z-10 bg-white rounded-2xl shadow-2xl p-8 transform hover:scale-105 transition-transform duration-500">
                <div className="space-y-6">
                  <div className="flex items-center justify-between">
                    <div className="text-sm text-gray-500">Dashboard Overview</div>
                    <div className="flex space-x-2">
                      <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                      <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 bg-gradient-to-r from-purple-50 to-blue-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <TrendingUp className="h-8 w-8 text-purple-600" />
                        <div>
                          <div className="font-semibold">Conversion Rate</div>
                          <div className="text-sm text-gray-600">+340% increase</div>
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-purple-600">12.4%</div>
                    </div>
                    <div className="flex items-center justify-between p-4 bg-gradient-to-r from-blue-50 to-purple-50 rounded-lg">
                      <div className="flex items-center space-x-3">
                        <Users className="h-8 w-8 text-blue-600" />
                        <div>
                          <div className="font-semibold">Lead Generation</div>
                          <div className="text-sm text-gray-600">Monthly growth</div>
                        </div>
                      </div>
                      <div className="text-2xl font-bold text-blue-600">+250%</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What We Do Section - Redesigned */}
      <section id="services" className="py-32 bg-black text-white relative overflow-hidden">
        {/* Animated Background Elements */}
        <div className="absolute inset-0">
          <div className="absolute top-20 left-10 w-96 h-96 bg-gradient-to-r from-purple-600/20 to-blue-600/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-20 right-10 w-80 h-80 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-r from-purple-600/10 to-blue-600/10 rounded-full blur-3xl animate-spin-slow"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20">
            <div className="inline-block">
              <h2 className="text-6xl lg:text-8xl font-black mb-6 bg-gradient-to-r from-white via-purple-200 to-blue-200 bg-clip-text text-transparent">
                HOW WE
              </h2>
              <div className="text-6xl lg:text-8xl font-black bg-gradient-to-r from-purple-400 via-blue-400 to-purple-400 bg-clip-text text-transparent animate-gradient-x">
                TRANSFORM
              </div>
            </div>
            <p className="text-xl text-gray-300 mt-8 max-w-3xl mx-auto">
              {"We don't just deliver services. We orchestrate digital transformations that redefine what's possible."}
            </p>
          </div>

          {/* Interactive Process Flow */}
          <div className="relative">
            {/* Connection Lines */}
            <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-purple-500 to-transparent transform -translate-y-1/2"></div>

            {/* Process Steps */}
            <div className="grid lg:grid-cols-3 gap-16 lg:gap-8">
              {/* DESIGN Step */}
              <div className="group relative">
                <div className="relative z-10 bg-gradient-to-br from-gray-900 to-black border border-purple-500/20 rounded-3xl p-8 hover:border-purple-500/50 transition-all duration-700 hover:scale-105 hover:-translate-y-4">
                  {/* Step Number */}
                  <div className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-2xl">
                    01
                  </div>

                  {/* Icon Area */}
                  <div className="mb-8 relative">
                    <div className="w-24 h-24 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 mx-auto">
                      <Eye className="h-12 w-12 text-purple-400 group-hover:text-purple-300 transition-colors" />
                    </div>
                    {/* Floating Elements */}
                    <div className="absolute -top-2 -right-2 w-4 h-4 bg-purple-500 rounded-full animate-ping"></div>
                    <div className="absolute -bottom-2 -left-2 w-3 h-3 bg-blue-500 rounded-full animate-pulse delay-500"></div>
                  </div>

                  <h3 className="text-3xl font-bold mb-6 text-center">
                    <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                      DESIGN
                    </span>
                  </h3>

                  {/* Interactive Content Reveal */}
                  <div className="space-y-4 opacity-70 group-hover:opacity-100 transition-opacity duration-500">
                    <p className="text-gray-300 text-center mb-6">
                      {"We craft experiences that don't just look stunning—they convert visitors into customers."}
                    </p>

                    {/* Skill Bars */}
                    <div className="space-y-3">
                      {[
                        { skill: "UI/UX Design", level: 95 },
                        { skill: "Conversion Rate", level: 88 },
                        { skill: "Brand Identity", level: 92 },
                      ].map((item, idx) => (
                        <div key={idx} className="group/skill">
                          <div className="flex justify-between text-sm text-gray-400 mb-1">
                            <span>{item.skill}</span>
                            <span>{item.level}%</span>
                          </div>
                          <div className="w-full bg-gray-800 rounded-full h-2">
                            <div
                              className="bg-gradient-to-r from-purple-500 to-blue-500 h-2 rounded-full transition-all duration-1000 group-hover:animate-pulse"
                              style={{ width: `${item.level}%` }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Hover Effect Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-br from-purple-600/5 to-blue-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                {/* Floating Action Button */}
                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-full px-6 py-2 text-sm shadow-2xl">
                    View Portfolio
                  </Button>
                </div>
              </div>

              {/* MARKET Step */}
              <div className="group relative lg:mt-16">
                <div className="relative z-10 bg-gradient-to-br from-gray-900 to-black border border-blue-500/20 rounded-3xl p-8 hover:border-blue-500/50 transition-all duration-700 hover:scale-105 hover:-translate-y-4">
                  {/* Step Number */}
                  <div className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-2xl">
                    02
                  </div>

                  {/* Icon Area with Animation */}
                  <div className="mb-8 relative">
                    <div className="w-24 h-24 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 mx-auto">
                      <Target className="h-12 w-12 text-blue-400 group-hover:text-blue-300 transition-colors group-hover:rotate-12" />
                    </div>
                    {/* Orbiting Elements */}
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                      <div className="w-32 h-32 border border-blue-500/20 rounded-full animate-spin-slow"></div>
                      <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-blue-500 rounded-full"></div>
                    </div>
                  </div>

                  <h3 className="text-3xl font-bold mb-6 text-center">
                    <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                      MARKET
                    </span>
                  </h3>

                  {/* Interactive Metrics */}
                  <div className="space-y-4 opacity-70 group-hover:opacity-100 transition-opacity duration-500">
                    <p className="text-gray-300 text-center mb-6">
                      Data-driven campaigns that scale. Every dollar tracked, measured, optimized.
                    </p>

                    {/* Live Metrics Simulation */}
                    <div className="grid grid-cols-2 gap-4">
                      {[
                        { metric: "ROAS", value: "4.2x", color: "text-green-400" },
                        { metric: "CTR", value: "12.4%", color: "text-blue-400" },
                        { metric: "CPA", value: "-60%", color: "text-purple-400" },
                        { metric: "Leads", value: "+340%", color: "text-yellow-400" },
                      ].map((item, idx) => (
                        <div
                          key={idx}
                          className="text-center p-3 bg-gray-800/50 rounded-lg group-hover:bg-gray-800 transition-colors"
                        >
                          <div
                            className={`text-2xl font-bold ${item.color} group-hover:scale-110 transition-transform`}
                          >
                            {item.value}
                          </div>
                          <div className="text-xs text-gray-400">{item.metric}</div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-br from-blue-600/5 to-purple-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <Button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 rounded-full px-6 py-2 text-sm shadow-2xl">
                    See Results
                  </Button>
                </div>
              </div>

              {/* GROW Step */}
              <div className="group relative">
                <div className="relative z-10 bg-gradient-to-br from-gray-900 to-black border border-green-500/20 rounded-3xl p-8 hover:border-green-500/50 transition-all duration-700 hover:scale-105 hover:-translate-y-4">
                  {/* Step Number */}
                  <div className="absolute -top-6 -left-6 w-12 h-12 bg-gradient-to-r from-green-600 to-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl shadow-2xl">
                    03
                  </div>

                  {/* Icon Area with Growth Animation */}
                  <div className="mb-8 relative">
                    <div className="w-24 h-24 bg-gradient-to-br from-green-600/20 to-blue-600/20 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-500 mx-auto">
                      <TrendingUp className="h-12 w-12 text-green-400 group-hover:text-green-300 transition-colors" />
                    </div>
                    {/* Growth Bars Animation */}
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 flex space-x-1">
                      {[1, 2, 3, 4, 5].map((bar, idx) => (
                        <div
                          key={idx}
                          className="w-1 bg-green-500 rounded-full group-hover:animate-bounce"
                          style={{
                            height: `${(idx + 1) * 4}px`,
                            animationDelay: `${idx * 100}ms`,
                          }}
                        ></div>
                      ))}
                    </div>
                  </div>

                  <h3 className="text-3xl font-bold mb-6 text-center">
                    <span className="bg-gradient-to-r from-green-400 to-blue-400 bg-clip-text text-transparent">
                      GROW
                    </span>
                  </h3>

                  {/* Growth Timeline */}
                  <div className="space-y-4 opacity-70 group-hover:opacity-100 transition-opacity duration-500">
                    <p className="text-gray-300 text-center mb-6">
                      Systematic growth through experimentation. We build, test, iterate until we win.
                    </p>

                    {/* Growth Phases */}
                    <div className="space-y-3">
                      {[
                        { phase: "Month 1", growth: "Foundation", color: "bg-yellow-500" },
                        { phase: "Month 2", growth: "Optimization", color: "bg-orange-500" },
                        { phase: "Month 3+", growth: "Scale", color: "bg-green-500" },
                      ].map((item, idx) => (
                        <div
                          key={idx}
                          className="flex items-center space-x-3 group/phase hover:scale-105 transition-transform"
                        >
                          <div className={`w-3 h-3 ${item.color} rounded-full group-hover/phase:animate-pulse`}></div>
                          <div className="flex-1 flex justify-between">
                            <span className="text-gray-300 text-sm">{item.phase}</span>
                            <span className="text-gray-400 text-sm">{item.growth}</span>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="absolute inset-0 bg-gradient-to-br from-green-600/5 to-blue-600/5 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </div>

                <div className="absolute -bottom-4 left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-500">
                  <Button className="bg-gradient-to-r from-green-600 to-blue-600 hover:from-green-700 hover:to-blue-700 rounded-full px-6 py-2 text-sm shadow-2xl">
                    Start Growing
                  </Button>
                </div>
              </div>
            </div>

            {/* Central Connection Hub */}
            <div className="hidden lg:block absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-full flex items-center justify-center shadow-2xl animate-pulse">
              <Zap className="h-8 w-8 text-white" />
            </div>
          </div>

          {/* Bottom CTA Section */}
          <div className="text-center mt-20">
            <div className="inline-flex items-center space-x-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-8 py-4 hover:bg-white/20 transition-all duration-500 hover:scale-105">
              <span className="text-gray-300">Ready to transform your business?</span>
              <Button className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 rounded-full px-6 py-2">
                {"Let's Talk"}
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Client Results Section - Redesigned */}
      <section
        id="results"
        className="py-32 bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white relative overflow-hidden"
      >
        {/* Animated Grid Background */}
        <div className="absolute inset-0 opacity-10">
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `
              linear-gradient(rgba(139, 92, 246, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139, 92, 246, 0.3) 1px, transparent 1px)
            `,
              backgroundSize: "50px 50px",
              animation: "grid-move 20s linear infinite",
            }}
          ></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Mission Control Header */}
          <div className="text-center mb-20">
            <div className="inline-block relative">
              <h2 className="text-6xl lg:text-8xl font-black mb-6 bg-gradient-to-r from-green-400 via-blue-400 to-purple-400 bg-clip-text text-transparent">
                MISSION
              </h2>
              <div className="text-6xl lg:text-8xl font-black text-white -mt-4">ACCOMPLISHED</div>
              {/* Radar Sweep Effect */}
              <div className="absolute -top-4 -right-4 w-8 h-8 bg-green-500 rounded-full animate-ping"></div>
            </div>
            <p className="text-xl text-gray-300 mt-8 max-w-3xl mx-auto">
              {"Live from our mission control center. These aren't just numbers—they're transformations."}
            </p>
          </div>

          {/* Interactive Dashboard */}
          <div className="relative">
            <div className="bg-gradient-to-br from-purple-50 to-blue-50 rounded-3xl p-8 relative overflow-hidden border-2 border-purple-200">
              <div className="absolute top-4 right-4 bg-gradient-to-r from-purple-600 to-blue-600 text-white px-3 py-1 rounded-full text-sm font-bold animate-pulse">
                LOLGE MEDIA
              </div>

              <h3 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent mb-8">
                What We Deliver
              </h3>

              <div className="space-y-6">
                {[
                  { text: "Custom solutions", icon: "🎨", color: "text-purple-600" },
                  { text: "Senior experts only", icon: "🏆", color: "text-blue-600" },
                  { text: "Launch in weeks", icon: "⚡", color: "text-green-600" },
                  { text: "Lifetime partnership", icon: "🤝", color: "text-orange-600" },
                ].map((item, idx) => (
                  <div
                    key={idx}
                    className="flex items-center space-x-4 group hover:scale-105 transition-transform duration-300"
                  >
                    <div className="text-2xl group-hover:animate-bounce">{item.icon}</div>
                    <div className={`font-semibold ${item.color}`}>{item.text}</div>
                    <div className="text-green-500 opacity-0 group-hover:opacity-100 transition-opacity">✓</div>
                  </div>
                ))}
              </div>

              {/* Success Animation */}
              <div className="absolute bottom-4 right-4 text-6xl opacity-30 animate-bounce">🚀</div>
            </div>
          </div>

          {/* Interactive Skills Showcase */}
          <div className="bg-gray-900 rounded-3xl p-12 text-white relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 to-blue-600/10"></div>

            <div className="relative z-10">
              <h3 className="text-4xl font-bold text-center mb-12">
                Our{" "}
                <span className="bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                  Superpowers
                </span>
              </h3>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {[
                  {
                    title: "Lightning Speed",
                    description: "We move at startup velocity",
                    icon: Zap,
                    metric: "3x Faster",
                    color: "from-yellow-400 to-orange-500",
                  },
                  {
                    title: "Laser Focus",
                    description: "Every pixel serves a purpose",
                    icon: Target,
                    metric: "100% ROI",
                    color: "from-red-400 to-pink-500",
                  },
                  {
                    title: "Dream Team",
                    description: "Expertise you can trust",
                    icon: Users,
                    metric: "A-Team",
                    color: "from-purple-400 to-blue-500",
                  },
                  {
                    title: "Growth Engine",
                    description: "Built for scale from day one",
                    icon: TrendingUp,
                    metric: "∞ Potential",
                    color: "from-green-400 to-blue-500",
                  },
                ].map((power, idx) => (
                  <div key={idx} className="group text-center">
                    <div className="relative mb-6">
                      <div
                        className={`w-24 h-24 bg-gradient-to-br ${power.color} rounded-2xl flex items-center justify-center mx-auto group-hover:scale-110 group-hover:rotate-12 transition-all duration-500`}
                      >
                        <power.icon className="h-12 w-12 text-white" />
                      </div>
                      <div className="absolute -top-2 -right-2 bg-white text-gray-900 px-2 py-1 rounded-full text-xs font-bold opacity-0 group-hover:opacity-100 transition-opacity">
                        {power.metric}
                      </div>
                    </div>
                    <h4 className="text-xl font-bold mb-3 group-hover:text-purple-400 transition-colors">
                      {power.title}
                    </h4>
                    <p className="text-gray-400 group-hover:text-gray-300 transition-colors">{power.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section - Redesigned */}
      <section className="py-32 bg-gradient-to-br from-purple-900 via-blue-900 to-black text-white relative overflow-hidden">
        {/* Floating Testimonial Bubbles */}
        <RandomDots />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-6xl lg:text-8xl font-black mb-6">
              <span className="bg-gradient-to-r from-white to-purple-200 bg-clip-text text-transparent">VOICES OF</span>
              <span className="block bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
                SUCCESS
              </span>
            </h2>
            <p className="text-xl text-purple-200 max-w-3xl mx-auto">
              Real stories from real clients who trusted us with their dreams and watched them become reality.
            </p>
          </div>

          {/* Interactive Client Wall */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="group relative">
                {/* Holographic Card */}
                <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-sm border border-white/20 rounded-2xl p-8 hover:border-purple-400/50 transition-all duration-500 hover:scale-105 hover:-translate-y-4 relative overflow-hidden">
                  {/* Animated Border */}
                  <div className="absolute inset-0 bg-gradient-to-r from-purple-500/20 via-blue-500/20 to-purple-500/20 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 animate-gradient-x"></div>

                  {/* Quote Mark */}
                  <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-purple-500 to-blue-500 rounded-full flex items-center justify-center text-2xl font-bold shadow-2xl group-hover:scale-110 transition-transform duration-300">
                    {'"'}
                  </div>

                  {/* Content */}
                  <div className="relative z-10 pt-8">
                    {/* Client Avatar */}
                    <div className="flex items-center mb-6">
                      <div className="relative">
                        <img
                          src={testimonial.avatar || "/placeholder.svg"}
                          alt={testimonial.name}
                          className="w-16 h-16 rounded-full border-2 border-purple-400 group-hover:border-blue-400 transition-colors"
                        />
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                          <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                        </div>
                      </div>
                      <div className="ml-4">
                        <div className="font-bold text-white group-hover:text-purple-300 transition-colors">
                          {testimonial.name}
                        </div>
                        <div className="text-purple-300 text-sm">{testimonial.company}</div>
                      </div>
                    </div>

                    {/* Testimonial Text */}
                    <p className="text-gray-200 leading-relaxed mb-6 group-hover:text-white transition-colors">
                      {testimonial.text}
                    </p>

                    {/* Rating Stars */}
                    <div className="flex space-x-1">
                      {[...Array(5)].map((_, i) => (
                        <div
                          key={i}
                          className="w-5 h-5 text-yellow-400 group-hover:animate-pulse"
                          style={{ animationDelay: `${i * 100}ms` }}
                        >
                          ⭐
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Floating Success Metric */}
                  <div className="absolute top-4 right-4 bg-green-500 text-black px-3 py-1 rounded-full text-xs font-bold opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:scale-110">
                    VERIFIED ✓
                  </div>
                </div>

                {/* Floating Elements */}
                <div className="absolute -z-10 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 bg-gradient-to-r from-purple-500/20 to-blue-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            ))}
          </div>

          {/* Interactive Trust Indicators */}
          <div className="text-center">
            <div className="inline-flex items-center space-x-8 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-12 py-6 hover:bg-white/20 transition-all duration-500">
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-green-400 font-semibold">500+ Happy Clients</span>
              </div>
              <div className="w-px h-8 bg-white/20"></div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse delay-500"></div>
                <span className="text-blue-400 font-semibold">98% Success Rate</span>
              </div>
              <div className="w-px h-8 bg-white/20"></div>
              <div className="flex items-center space-x-2">
                <div className="w-3 h-3 bg-purple-500 rounded-full animate-pulse delay-1000"></div>
                <span className="text-purple-400 font-semibold">$50M+ Generated</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Lead Gen Form Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-purple-600 to-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4">Ready to Grow?</h2>
            <p className="text-xl text-purple-100 mb-2">
              Get a free strategy audit and discover how we can 3x your growth.
            </p>
            <p className="text-purple-200">No sales pitch. Just actionable insights you can implement today.</p>
          </div>

          <Card className="border-0 shadow-2xl">
            <CardContent className="p-8">
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name *</label>
                    <Input
                      placeholder="John Doe"
                      className="border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address *</label>
                    <Input
                      type="email"
                      placeholder="john@company.com"
                      className="border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Tell us about your project</label>
                  <Textarea
                    placeholder="What challenges are you facing? What are your goals?"
                    rows={4}
                    className="border-gray-300 focus:border-purple-500 focus:ring-purple-500"
                  />
                </div>
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white py-4 text-lg"
                >
                  Get My Free Audit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            <div className="md:col-span-2">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent mb-4">
                Lolge Media
              </div>
              <p className="text-gray-400 mb-6 max-w-md">
                We help ambitious businesses design, market, and grow through strategic digital solutions that deliver
                measurable results.
              </p>
              <div className="flex space-x-4">
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="w-10 h-10 bg-gray-800 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors"
                >
                  <Instagram className="h-5 w-5" />
                </a>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Web Design
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Digital Marketing
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Growth Strategy
                  </a>
                </li>
                <li>
                  <a href="#" className="hover:text-white transition-colors">
                    Brand Identity
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center">
                  <Mail className="h-4 w-4 mr-2" />
                  hello@lolgemedia.com
                </li>
                <li className="flex items-center">
                  <Phone className="h-4 w-4 mr-2" />
                  (555) 123-4567
                </li>
                <li className="flex items-center">
                  <MapPin className="h-4 w-4 mr-2" />
                  San Francisco, CA
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-400">
            <p>&copy; 2024 Lolge Media. All rights reserved.</p>
          </div>
        </div>
      </footer>

      {/* Sticky CTA */}
      <div className="fixed bottom-6 right-6 z-50">
        <Button
          size="lg"
          className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white shadow-2xl hover:shadow-3xl transition-all duration-300 hover:scale-105"
        >
          <Phone className="mr-2 h-5 w-5" />
          Talk to Us
        </Button>
      </div>
    </div>
  )
}
