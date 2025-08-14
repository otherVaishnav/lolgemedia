"use client"

import { useState, useEffect } from "react"
import {
  ArrowRight,
  CheckCircle,
  Zap,
  Target,
  TrendingUp,
  Users,
  Quote,
  Phone,
  Mail,
  MapPin,
  Twitter,
  Linkedin,
  Instagram,
  Menu,
  X,
  Eye,
  MousePointer,
  BarChart3,
} from "lucide-react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"

export default function LolgeMediaLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentTestimonial, setCurrentTestimonial] = useState(0)
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const [isVisible, setIsVisible] = useState<Record<string, boolean>>({});

const [hydrated, setHydrated] = useState(false);
useEffect(() => setHydrated(true), []);

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
              className={`space-y-8 transition-all duration-1000 ${hydrated && isVisible.hero ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
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

      {/* What We Do Section */}
      <section id="services" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${isVisible.services && hydrated ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">What We Do</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We combine strategic thinking with creative execution to deliver results that matter to your bottom line.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Eye,
                title: "Design",
                description:
                  "User-centered design that converts. We create interfaces that don't just look good—they perform.",
                features: ["UI/UX Design", "Brand Identity", "Conversion Optimization", "Prototyping"],
              },
              {
                icon: MousePointer,
                title: "Marketing",
                description:
                  "Data-driven campaigns that scale. Every dollar spent is tracked, measured, and optimized for maximum ROI.",
                features: ["Digital Strategy", "PPC Management", "SEO Optimization", "Content Marketing"],
              },
              {
                icon: BarChart3,
                title: "Growth",
                description:
                  "Systematic growth through experimentation. We build, test, and iterate until we find what works.",
                features: ["Growth Hacking", "Analytics Setup", "A/B Testing", "Funnel Optimization"],
              },
            ].map((service, index) => (
              <Card
                key={index}
                className="group hover:shadow-xl transition-all duration-500 hover:-translate-y-2 border-0 bg-white"
              >
                <CardContent className="p-8">
                  <div className="mb-6">
                    <div className="w-16 h-16 bg-gradient-to-br from-purple-100 to-blue-100 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                      <service.icon className="h-8 w-8 text-purple-600" />
                    </div>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{service.title}</h3>
                  <p className="text-gray-600 mb-6">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center text-sm text-gray-600">
                        <CheckCircle className="h-4 w-4 text-green-500 mr-2" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Client Results Section */}
      <section id="results" className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${isVisible.results ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Client Results</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {"Numbers don't lie. Here's how we've helped businesses like yours achieve extraordinary growth."}
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {caseStudies.map((study, index) => (
              <Card
                key={index}
                className="group hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 overflow-hidden border-0"
              >
                <div className="relative">
                  <img
                    src={study.image || "/placeholder.svg"}
                    alt={study.client}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 text-white">
                    <div className="text-3xl font-bold">{study.metric}</div>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{study.client}</h3>
                  <p className="text-gray-600">{study.description}</p>
                  <Button variant="ghost" className="mt-4 p-0 text-purple-600 hover:text-purple-700">
                    View Case Study <ArrowRight className="ml-1 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="about" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div
            className={`text-center mb-16 transition-all duration-1000 ${isVisible.about ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Why Choose Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              {"We're not just another agency. We're your growth partners, committed to your success."}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: Zap,
                title: "Lightning Fast",
                description: "We move at startup speed. Your project launches in weeks, not months.",
              },
              {
                icon: Target,
                title: "Results-Driven",
                description: "Every decision is backed by data. We optimize for metrics that matter to your business.",
              },
              {
                icon: Users,
                title: "Expert Team",
                description: "Senior-level talent across design, development, and marketing. No junior work.",
              },
              {
                icon: TrendingUp,
                title: "Proven Process",
                description: "Our methodology has generated over $50M in client revenue. It works.",
              },
            ].map((point, index) => (
              <div key={index} className="text-center group">
                <div className="w-20 h-20 bg-gradient-to-br from-purple-100 to-blue-100 rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <point.icon className="h-10 w-10 text-purple-600" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 mb-4">{point.title}</h3>
                <p className="text-gray-600">{point.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-gray-900 mb-4">What Clients Say</h2>
            <p className="text-xl text-gray-600">
              {"Don't just take our word for it. Here's what our clients have to say."}
            </p>
          </div>

          <div className="relative">
            <Card className="border-0 shadow-2xl">
              <CardContent className="p-12">
                <div className="text-center">
                  <Quote className="h-12 w-12 text-purple-600 mx-auto mb-6" />
                  <p className="text-2xl text-gray-700 mb-8 leading-relaxed">
                    {'"'}{testimonials[currentTestimonial].text}{'"'}
                  </p>
                  <div className="flex items-center justify-center space-x-4">
                    <img
                      src={testimonials[currentTestimonial].avatar || "/placeholder.svg"}
                      alt={testimonials[currentTestimonial].name}
                      className="w-16 h-16 rounded-full"
                    />
                    <div className="text-left">
                      <div className="font-bold text-gray-900">{testimonials[currentTestimonial].name}</div>
                      <div className="text-gray-600">{testimonials[currentTestimonial].company}</div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <div className="flex justify-center mt-8 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? "bg-purple-600" : "bg-gray-300"
                  }`}
                />
              ))}
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
