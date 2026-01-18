'use client';

import React, { useState } from 'react';
import { ChevronDown, Scissors, Compass, Mail, Linkedin, Calendar, ExternalLink, BookOpen } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const services = [
    {
      id: 'hr',
      icon: <Scissors className="w-8 h-8 text-gray-800" />,
      title: 'HR Consulting',
      subtitle: 'Strategic Human Resources with Real-World Insight',
      shortDescription: 'Transform your HR processes with strategic consulting, talent development, and organizational design.',
      fullDescription: 'Having built career centers, led talent strategies, and worked in executive search, I know HR from multiple angles. I help organizations assess and optimize current HR processes for efficiency and employee satisfaction, design career development programs that actually engage people, rethink onboarding and offboarding to ensure critical information lands—and sticks, and develop talent strategies aligned with business goals.',
      ideal: 'Organizations ready to move beyond "HR as usual" and create processes people actually want to engage with.',
      color: 'from-emerald-600 to-teal-600'
    },
    {
      id: 'ai',
      icon: <Compass className="w-8 h-8 text-gray-800" />,
      title: 'AI Solutions',
      subtitle: 'Practical AI Integration for HR & Beyond',
      shortDescription: 'Leverage AI to automate processes, enhance decision-making, and drive innovation in your organization.',
      fullDescription: 'AI isn&apos;t magic—it&apos;s a tool. With a foundation in Computational Linguistics and hands-on experience from Codecademy&apos;s AI Maker Bootcamp, I help organizations cut through the hype and use AI effectively. I conduct process audits to identify where AI can genuinely add value (and where it can&apos;t), support tool evaluation and selection for HR processes and workflows, provide implementation support to integrate AI solutions smoothly, and offer training and workshops to get teams comfortable with AI tools.',
      ideal: 'Organizations curious about AI but unsure where to start—or those who&apos;ve started but need strategic guidance.',
      color: 'from-slate-600 to-blue-800'
    },
    {
      id: 'gamification',
      icon: (
        <Image 
          src="/images/Icon_Flaschenoeffner.png"
          alt="Gamification"
          width={32}
          height={32}
          className="object-contain"
        />
      ),
      title: 'Gamification',
      subtitle: 'Making Work Engaging, Not Exhausting',
      shortDescription: 'Boost engagement and learning outcomes through gamified experiences and interactive solutions.',
      fullDescription: 'It started with a scavenger hunt. At PSI, I turned mandatory safety training into an interactive experience that people actually enjoyed. That&apos;s the power of gamification—not gimmicks, but thoughtful design that motivates. I create gamified onboarding experiences that welcome and inform, design learning programs that boost retention and engagement, redesign processes using game mechanics to drive participation, and develop employee engagement initiatives that feel less like "corporate fun," more like genuine connection.',
      ideal: 'Organizations tired of checkbox compliance and ready to create experiences that people remember.',
      color: 'from-emerald-600 to-teal-600'
    }
  ];

  const projects = [
    {
      id: 'psi-trail',
      icon: '/images/Icon_Spielfigur.png',
      title: 'The PSI Trail',
      subtitle: 'Gamification Meets Onboarding',
      challenge: 'New employees at Paul Scherrer Institute faced mandatory safety training and site orientation—traditionally a checkbox exercise that felt like, well, a mandatory checkbox exercise.',
      solution: 'I designed an interactive scavenger hunt that transformed the standard site tour into an engaging team experience. What started as a "fun idea" evolved into a digital tool used for years, proving that compliance and engagement aren&apos;t mutually exclusive.',
      impact: [
        'Replaced passive walkthroughs with active exploration',
        'Increased information retention and team bonding',
        'Scaled from physical to digital platform',
        'Featured in organizational communications as best practice'
      ],
      status: 'Completed & Scaled',
      link: 'https://medium.com/@y.a.mueller/from-joke-to-onboarding-tool-how-the-psi-trail-became-a-lasting-experience-7fe5d277c82c',
      color: 'from-emerald-600 to-teal-600'
    },
    {
      id: 'connect',
      icon: '/images/Icon_Bridge.png',
      title: 'CONNECT',
      subtitle: 'Building Bridges for Women in STEM',
      challenge: 'Emerging female researchers in STEM faced a critical gap between academia and industry, with limited networks and role models to navigate career transitions.',
      solution: 'Designed and led a national, inter-university pilot program connecting women across sectors through structured mentoring, workshops, and networking—bridging the gap between research institutions and industry partners.',
      impact: [
        'Established Switzerland&apos;s first cross-sector program for women in STEM',
        'Balanced expectations between academic and industry stakeholders',
        'Transitioned from pilot to established program'
      ],
      status: 'Completed - Pilot Established',
      link: 'https://connect-women.ch',
      color: 'from-slate-600 to-blue-800'
    },
    {
      id: 'career-center',
      icon: '/images/Icon_Career.png',
      title: 'PSI Career Center',
      subtitle: 'From Concept to Institution',
      challenge: 'Young researchers at PSI lacked structured career development support, facing an academic culture skeptical of "career services."',
      solution: 'Conceptualized and built a professional career center from scratch, breaking down prejudices among established researchers while gaining trust from the target group through tailored services and credible positioning.',
      impact: [
        'Transitioned from project status to regular program',
        'Delivered 200+ individual career consultations',
        'Created long-term institutional support structure'
      ],
      status: 'Completed - Institutionalized',
      link: 'https://www.psi.ch/en/careercenter',
      color: 'from-emerald-600 to-teal-600'
    },
    {
      id: 'video-series',
      icon: '/images/Icon_Camera.png',
      title: 'Digital Role Models',
      subtitle: 'Scaling Impact Through Video',
      challenge: 'CONNECT participants needed access to diverse role models and career paths, but traditional formats (panels, talks) had limited reach and scalability.',
      solution: 'Initiated and produced a series of video interviews with successful women in STEM, capturing authentic career stories and best practices in an accessible, shareable format.',
      impact: [
        'Created evergreen content library for career guidance',
        'Extended program reach beyond participant cohort',
        'Demonstrated modern content creation for career development',
        'Professional production with strategic storytelling'
      ],
      status: 'Completed',
      link: 'https://connect-women.ch/video/index.html',
      color: 'from-slate-600 to-blue-800'
    }
  ];

  const articles = [
    {
      title: 'From Joke to Onboarding Tool: The PSI Trail Story',
      teaser: 'What happens when you turn mandatory safety training into a scavenger hunt? Discover how a playful experiment became an institutional tool—and why gamification works best when it solves real problems.',
      link: 'https://medium.com/@y.a.mueller/from-joke-to-onboarding-tool-how-the-psi-trail-became-a-lasting-experience-7fe5d277c82c'
    },
    {
      title: 'Gamification in HR: Walking Through the Doors (Part 1)',
      teaser: 'Not all gamification is created equal. This series explores the doors we walk through when bringing game mechanics into HR—from forced fun to genuine engagement.',
      link: 'https://medium.com/@y.a.mueller/gamification-in-hr-walking-through-the-doors-part-1-4-d36383d96de3'
    },
    {
      title: 'Door 1: Forced Fun Isn&apos;t Fun',
      teaser: 'Points, badges, leaderboards—the gamification starter pack. But what happens when game mechanics feel like obligation instead of motivation? Let&apos;s talk about what doesn&apos;t work, and why.',
      link: 'https://medium.com/@y.a.mueller/door-1-forced-fun-isnt-fun-31216dcb71f7'
    },
    {
      title: 'Gamification in HR: How to Engage Without Excluding',
      teaser: 'Gamification promises engagement, but for whom? Explore how to design experiences that welcome everyone—not just the competitive players in the room.',
      link: 'https://medium.com/@y.a.mueller/gamification-in-hr-how-to-engage-without-excluding-d45afaae731a'
    },
    {
      title: 'Why Being the Exotic One Is Uncomfortable (And What Tech Needs)',
      teaser: 'Being "the diversity hire" isn&apos;t a compliment—it&apos;s a burden. A reflection on what it means to be the "different one" in tech, and why real inclusion requires more than good intentions.',
      link: 'https://medium.com/@y.a.mueller/why-being-the-exotic-one-is-uncomfortable-and-exactly-what-tech-needs-067611c54fc2'
    },
    {
      title: 'What You Learn When Diving Into Gamification',
      teaser: 'Gamification isn&apos;t just about making things fun—it&apos;s about understanding human motivation, behavior design, and when to play (and when not to). Lessons from exploring a field that&apos;s bigger than buzzwords.',
      link: 'https://medium.com/@y.a.mueller/what-you-learn-when-diving-into-the-idea-of-gamification-23b87252784e'
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
            <a href="#articles" className="text-gray-700 hover:text-emerald-600 transition-colors">Articles</a>
            <a href="#contact" className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-6 py-2 rounded-full hover:shadow-lg transition-all inline-block">
              Book a Call
            </a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-[1fr_auto_1fr] gap-8 items-center">
            {/* Text Content - Left Column */}
            <div>
              {/* YM Monogram */}
              <div className="mb-6">
                <div className="text-7xl font-bold bg-gradient-to-r from-emerald-700 to-teal-600 bg-clip-text text-transparent">
                  YM
                </div>
              </div>
              
              <h1 className="text-5xl font-bold mb-2 text-gray-800">
                Yvonne Müller
              </h1>
              
              {/* whY More Lines */}
              <div className="mb-6 space-y-2">
                <p className="text-2xl font-semibold">
                  <span className="bg-gradient-to-r from-emerald-700 to-teal-600 bg-clip-text text-transparent">whY More</span>
                  <span className="text-gray-700"> Gamification</span>
                </p>
                <p className="text-2xl font-semibold">
                  <span className="bg-gradient-to-r from-emerald-700 to-teal-600 bg-clip-text text-transparent">whY More</span>
                  <span className="text-gray-700"> AI Solutions</span>
                </p>
                <p className="text-2xl font-semibold">
                  <span className="bg-gradient-to-r from-emerald-700 to-teal-600 bg-clip-text text-transparent">whY More</span>
                  <span className="text-gray-700"> Human Touch</span>
                </p>
              </div>
              
              <p className="text-2xl text-gray-600 mb-8 leading-relaxed">
                Like a Swiss Army knife, I combine HR expertise, AI innovation, and gamification to transform your business.
              </p>
              
              <div className="flex gap-4">
                <a href="#contact" className="bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-full hover:shadow-lg transition-all font-semibold text-lg">
                  Book a Strategy Call
                </a>
                <a href="#about" className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-full font-semibold hover:border-emerald-600 hover:text-emerald-600 transition-all text-lg">
                  Learn More
                </a>
              </div>
            </div>

            {/* Swiss Army Knife - Center Column */}
            <div className="flex justify-center items-center">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-full blur-xl opacity-20"></div>
                <Image 
                  src="/images/Icon_Schweizer_Taschenmesser.png"
                  alt="Swiss Army Knife"
                  width={272}
                  height={272}
                  className="relative object-contain"
                />
              </div>
            </div>

            {/* Photo - Right Column */}
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
                  <div className={`inline-flex p-5 rounded-full bg-white border-4 border-solid mb-4 ${
                    service.id === 'hr' ? 'border-emerald-600' : 
                    service.id === 'ai' ? 'border-slate-600' : 
                    'border-emerald-600'
                  }`}>
                    {service.icon}
                  </div>
                  
                  <h3 className="text-3xl font-bold mb-3">{service.title}</h3>
                  <p className="text-gray-500 mb-5 text-xl">{service.subtitle}</p>
                  
                  {expandedCard !== service.id && (
                    <>
                      <p className="text-gray-600 mb-6 text-xl leading-relaxed">{service.shortDescription}</p>
                      <button className="text-emerald-600 font-semibold hover:text-emerald-700">
                        Click to explore →
                      </button>
                    </>
                  )}
                  
                  {expandedCard === service.id && (
                    <div className="space-y-4">
                      <p className="text-gray-600 text-xl leading-relaxed">{service.fullDescription}</p>
                      
                      <div className="pt-6 border-t border-gray-200">
                        <h4 className="font-semibold mb-3 text-xl text-gray-700">
                          <span className="text-emerald-600">→</span> Ideal for:
                        </h4>
                        <p className="text-gray-600 text-xl italic">{service.ideal}</p>
                      </div>
                      
                      <button className="mt-4 text-gray-500 font-semibold hover:text-gray-700">
                        Click to close ×
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section id="about" className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4">About Me</h2>
          <p className="text-emerald-600 text-center mb-12 text-xl font-semibold">HR Meets Innovation</p>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-2xl text-gray-700 leading-relaxed mb-6">
              I&apos;m not your typical HR professional. With a background spanning Computational Linguistics, career development, and executive search, I&apos;ve spent years at the intersection of people and processes—at BCG, the Paul Scherrer Institute, and beyond.
            </p>
            
            <p className="text-2xl text-gray-700 leading-relaxed mb-6">
              What drives me? The belief that in today&apos;s efficiency-obsessed world, there&apos;s power in a more playful, human-centered approach. Whether it&apos;s gamifying onboarding processes, integrating AI tools, or rethinking career development strategies, I help organizations create experiences that engage rather than exhaust.
            </p>
            
            <p className="text-2xl text-gray-700 leading-relaxed">
              I collaborate with organizations on selected projects, combining strategic HR expertise with AI solutions and gamification. Think of it as a Swiss Army knife approach: versatile, precise, and always focused on real impact.
            </p>
          </div>
          
          <div className="mt-12 text-center">
            <a 
              href="https://www.linkedin.com/in/yvonnemueller/" 
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700 text-lg"
            >
              <Linkedin className="w-5 h-5" />
              Connect on LinkedIn
            </a>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4">Selected Projects</h2>
          <p className="text-gray-600 text-center mb-12 text-xl">
            Real challenges, innovative solutions, measurable impact
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className={`bg-white rounded-2xl shadow-lg overflow-hidden cursor-pointer transition-all duration-300 hover:shadow-2xl ${
                  expandedProject === project.id ? 'md:col-span-2' : ''
                }`}
                onClick={() => setExpandedProject(expandedProject === project.id ? null : project.id)}
              >
                <div className={`h-2 bg-gradient-to-r ${project.color}`} />
                
                <div className="p-8">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`flex-shrink-0 p-5 rounded-full bg-white border-4 border-solid ${
                      project.color === 'from-emerald-600 to-teal-600' ? 'border-emerald-600' : 'border-slate-600'
                    }`}>
                      <Image 
                        src={project.icon}
                        alt={project.title}
                        width={64}
                        height={64}
                        className="object-contain"
                      />
                    </div>
                    <div className="flex-1">
                      <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
                      <p className="text-gray-500 text-lg">{project.subtitle}</p>
                    </div>
                  </div>
                  
                  {expandedProject !== project.id && (
                    <>
                      <p className="text-gray-600 mb-4 leading-relaxed text-lg">{project.challenge}</p>
                      <button className="text-emerald-600 font-semibold hover:text-emerald-700">
                        Read more →
                      </button>
                    </>
                  )}
                  
                  {expandedProject === project.id && (
                    <div className="space-y-6">
                      <div>
                        <h4 className="font-semibold text-gray-700 mb-2 text-lg">The Challenge:</h4>
                        <p className="text-gray-600 leading-relaxed text-lg">{project.challenge}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-700 mb-2 text-lg">The Solution:</h4>
                        <p className="text-gray-600 leading-relaxed text-lg">{project.solution}</p>
                      </div>
                      
                      <div>
                        <h4 className="font-semibold text-gray-700 mb-3 text-lg">Impact:</h4>
                        <ul className="space-y-2">
                          {project.impact.map((item, idx) => (
                            <li key={idx} className="flex items-start gap-2 text-gray-600 text-lg">
                              <span className="text-emerald-600 mt-1">✓</span>
                              <span>{item}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                      
                      <div className="flex items-center justify-between pt-4 border-t border-gray-200">
                        <span className="text-sm text-gray-500">Status: <span className="font-semibold text-gray-700">{project.status}</span></span>
                        {project.link && (
                          <a 
                            href={project.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            onClick={(e) => e.stopPropagation()}
                            className="inline-flex items-center gap-2 text-emerald-600 font-semibold hover:text-emerald-700"
                          >
                            Learn more
                            <ExternalLink className="w-4 h-4" />
                          </a>
                        )}
                      </div>
                      
                      <button className="text-gray-500 font-semibold hover:text-gray-700 text-sm">
                        Click to close ×
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Articles Section */}
      <section id="articles" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4">Featured Insights</h2>
          <p className="text-gray-600 text-center mb-12 text-xl">
            Thoughts on gamification, HR, and what makes work human
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {articles.map((article, idx) => (
              <a
                key={idx}
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="group bg-gradient-to-br from-slate-50 to-emerald-50 rounded-2xl p-8 hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-emerald-200"
              >
                <div className="flex items-start gap-4 mb-4">
                  <div className="p-3 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-lg text-white">
                    <BookOpen className="w-6 h-6" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-2 group-hover:text-emerald-600 transition-colors">
                      {article.title}
                    </h3>
                  </div>
                </div>
                
                <p className="text-gray-600 leading-relaxed mb-4 text-lg">
                  {article.teaser}
                </p>
                
                <div className="flex items-center gap-2 text-emerald-600 font-semibold group-hover:gap-3 transition-all">
                  Read on Medium
                  <ExternalLink className="w-4 h-4" />
                </div>
              </a>
            ))}
          </div>
          
          <div className="mt-12 text-center">
            <a 
              href="https://medium.com/@y.a.mueller"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-lg font-semibold text-gray-700 hover:text-emerald-600 transition-colors"
            >
              View all articles on Medium
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </section>

      {/* Contact & Booking Section */}
      <section id="contact" className="py-20 px-6 bg-gradient-to-br from-slate-50 to-emerald-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-5xl font-bold text-center mb-4">Let&apos;s Talk</h2>
          <p className="text-gray-600 text-center mb-12 text-xl">
            Ready to explore how we can work together?
          </p>
          
          <div className="grid md:grid-cols-2 gap-8">
            {/* Zeeg Booking - Link Button */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-r from-emerald-600 to-teal-600 rounded-lg text-white">
                  <Calendar className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">Book a Strategy Call</h3>
                  <p className="text-gray-600">20-minute consultation</p>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                Schedule a free 20-minute call to discuss your project, challenges, and how we might collaborate.
              </p>
              
              <div className="bg-gradient-to-br from-emerald-50 to-teal-50 rounded-xl p-6 mb-6">
                <h4 className="font-semibold text-gray-800 mb-3 text-lg">What we&apos;ll discuss:</h4>
                <ul className="space-y-2 text-gray-700 text-lg">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 mt-1">✓</span>
                    <span>Your current challenges and goals</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 mt-1">✓</span>
                    <span>Potential solutions and approaches</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 mt-1">✓</span>
                    <span>Next steps and collaboration options</span>
                  </li>
                </ul>
              </div>
              
              <a 
                href="https://zeeg.me/yvonnemueller/consulting-call-with-yvonne"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full bg-gradient-to-r from-emerald-600 to-teal-600 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all text-lg text-center block"
              >
                Schedule Your Free Call →
              </a>
            </div>
            
            {/* Contact Form */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-gradient-to-r from-slate-600 to-blue-800 rounded-lg text-white">
                  <Mail className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-gray-800">Send a Message</h3>
                  <p className="text-gray-600">Quick question or inquiry</p>
                </div>
              </div>
              
              <p className="text-gray-600 mb-6 leading-relaxed text-lg">
                Prefer to write? Send me a message and I&apos;ll get back to you within 24 hours.
              </p>
              
              {/* Netlify Form */}
              <form name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field" className="space-y-4">
                <input type="hidden" name="form-name" value="contact" />
                <p className="hidden">
                  <label>
                    Don&apos;t fill this out if you&apos;re human: <input name="bot-field" />
                  </label>
                </p>
                
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  />
                </div>
                
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
                  />
                </div>
                
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                    Message *
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    required
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all resize-none"
                  ></textarea>
                </div>
                
                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-slate-600 to-blue-800 text-white px-8 py-4 rounded-lg font-semibold hover:shadow-lg transition-all text-lg"
                >
                  Send Message
                </button>
              </form>
            </div>
          </div>
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
              <a 
                href="https://www.linkedin.com/in/yvonnemueller/" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-400 transition-colors"
              >
                <Linkedin className="w-6 h-6" />
              </a>
              <a 
                href="https://medium.com/@y.a.mueller"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-emerald-400 transition-colors"
              >
                <BookOpen className="w-6 h-6" />
              </a>
              <a 
                href="#contact" 
                className="hover:text-emerald-400 transition-colors"
              >
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
