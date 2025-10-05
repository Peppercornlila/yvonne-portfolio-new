'use client';

import React, { useState } from 'react';
import { ChevronDown, Scissors, Compass, Wine, Mail, Linkedin, Calendar } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [expandedCard, setExpandedCard] = useState<string | null>(null);

  const services = [
    {
      id: 'hr',
      icon: <Scissors className="w-8 h-8" />,
      title: 'HR Consulting',
      subtitle: 'Strategic Human Resources',
      description: 'Transform your HR processes with strategic consulting, talent development, and organizational design.',
      color: 'from-emerald-600 to-teal-600'
    },
    {
      id: 'ai',
      icon: <Compass className="w-8 h-8" />,
      title: 'AI Solutions',
      subtitle: 'Artificial Intelligence',
      description: 'Leverage AI to automate processes, enhance decision-making, and drive innovation in your organization.',
      color: 'from-slate-600 to-blue-800'
    },
    {
      id: 'gamification',
      icon: <Wine className="w-8 h-8" />,
      title: 'Gamification',
      subtitle: 'Engagement & Learning',
      description: 'Boost engagement and learning outcomes through gamified experiences and interactive solutions.',
      color: 'from-emerald-600 to-teal-600'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-emerald-50">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md shadow-sm z-50">
        <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
          <div className="text-2xl font-bold bg-gradient-to-r from-emerald-700 to-teal-600 bg-clip-text text-transparent">
            Yvonne Müller
          </div>
          <div className="flex gap-6 items-center">
            <a href="#services" className="text-gray-700 hover:text-emerald-600 transition-colors">Services</a>
            <a href="#about" className="text-gray-700 hover:text-emerald-600 transition-colors">About</a>
            <a href="#projects" className="text-gray-700 hover:text-emerald-600 transition-colors">Projects</a>
            <a href="/booking" className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all inline-block">
  Book a Call
</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div>
              <div className="inline-block mb-4 px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium">
                Swiss Precision Meets Innovation
              </div>
              <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-emerald-700 via-teal-600 to-slate-700 bg-clip-text text-transparent">
                whY More...
              </h1>
              <p className="text-3xl text-gray-700 mb-4 font-semibold">
                Innovation, Precision, Human Touch
              </p>
              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                Like a Swiss Army knife, I combine HR expertise, AI innovation, and gamification to transform your business.
              </p>
              <div className="flex gap-4">
                <a href="/booking" className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all inline-block">
  Book a Strategy Call </a>
                <button className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold hover:border-emerald-600 hover:text-emerald-600 transition-all text-lg">
                  Learn More
                </button>
              </div>
            </div>

            {/* Photo */}
            <div className="flex justify-center md:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-3xl blur-2xl opacity-30"></div>
                <Image 
                  src="/images/yvonne-portrait.jpg" 
                  alt="Yvonne Müller"
                  width={260}
                  height={260}
                  className="relative rounded-3xl shadow-2xl"
                  priority
                />
              </div>
            </div>
          </div>
          
          <div className="mt-16 animate-bounce text-center">
            <ChevronDown className="w-8 h-8 mx-auto text-gray-400" />
          </div>
        </div>
      </section>

      {/* Services Cards */}
      <section id="services" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4">What I Offer</h2>
          <p className="text-gray-600 text-center mb-12 text-xl">
            Three pillars of excellence for your business transformation
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service) => (
              <div
                key={service.id}
                className={`relative bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transition-all duration-300 ${
                  hoveredCard === service.id ? 'scale-105 shadow-2xl' : ''
                } ${
                  expandedCard === service.id ? 'md:col-span-3' : ''
                }`}
                onMouseEnter={() => setHoveredCard(service.id)}
                onMouseLeave={() => setHoveredCard(null)}
                onClick={() => setExpandedCard(expandedCard === service.id ? null : service.id)}
              >
                <div className={`h-2 bg-gradient-to-r ${service.color}`} />
                
                <div className="p-10">
                  <div className={`inline-flex p-4 rounded-xl bg-gradient-to-r ${service.color} text-white mb-4`}>
                    {service.icon}
                  </div>
                  
                  <h3 className="text-3xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-500 mb-5 text-xl">{service.subtitle}</p>
                  
                  <p className="text-gray-600 mb-6 text-lg leading-relaxed">{service.description}</p>
                  
                  {expandedCard === service.id && (
                    <div className="mt-6 pt-6 border-t border-gray-200">
                      <h4 className="font-semibold mb-3 text-lg">Key Features:</h4>
                      <ul className="space-y-2 text-gray-600">
                        <li className="flex items-start gap-2">
                          <span className="text-emerald-600 mt-1">✓</span>
                          <span>Customized solutions tailored to your needs</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-emerald-600 mt-1">✓</span>
                          <span>Data-driven insights and analytics</span>
                        </li>
                        <li className="flex items-start gap-2">
                          <span className="text-emerald-600 mt-1">✓</span>
                          <span>Ongoing support and optimization</span>
                        </li>
                      </ul>
                      <button className="mt-6 text-emerald-600 font-semibold hover:text-emerald-700">
                        Learn more about {service.title} →
                      </button>
                    </div>
                  )}
                  
                  {expandedCard !== service.id && (
                    <button className="text-emerald-600 font-semibold hover:text-emerald-700">
                      Click to explore →
                    </button>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-gradient-to-r from-emerald-700 to-teal-600">
        <div className="max-w-4xl mx-auto text-center text-white">
          <h2 className="text-5xl font-bold mb-6">Ready to Transform Your Business?</h2>
          <p className="text-xl mb-8 opacity-90">
            Book a free 30-minute strategy call and discover how we can work together.
          </p>
          <a href="/booking" className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all inline-block">
Schedule Your Free Call
</a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <div className="text-2xl font-bold mb-2">Yvonne Müller</div>
              <p className="text-gray-400">HR, AI & Gamification Consulting</p>
            </div>
            <div className="flex gap-4">
              <a href="#" className="hover:text-emerald-400 transition-colors">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="#" className="hover:text-emerald-400 transition-colors">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400 text-sm">
            © 2025 Yvonne Müller. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}