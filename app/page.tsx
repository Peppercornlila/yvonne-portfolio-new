'use client';

import React, { useState } from 'react';
import { ChevronDown, Mail, Linkedin, Calendar, ExternalLink, BookOpen } from 'lucide-react';
import Image from 'next/image';

export default function Home() {
  const [hoveredCard, setHoveredCard] = useState<string | null>(null);
  const [expandedCard, setExpandedCard] = useState<string | null>(null);
  const [expandedProject, setExpandedProject] = useState<string | null>(null);

  const services = [
    {
      id: 'sourcing',
      title: 'Active Sourcing & Recruiting Insights',
      subtitle: 'Behind the Scenes of How Sourcing Really Works',
      shortDescription: 'A behind-the-scenes look at how sourcing and executive search really work, shared through talks, webinars, and hands-on tips on LinkedIn visibility.',
      fullDescription: 'I share what I\'ve learned from screening hundreds of CVs, running search mandates, and building visibility on LinkedIn — through talks, webinars, and practical write-ups. This isn\'t a service you can book; it\'s insight I\'m glad to share.',
      ideal: 'HR teams and recruiters who want to sharpen their own sourcing game.',
      color: 'from-emerald-600 to-teal-600'
    },
    {
      id: 'ai',
      title: 'AI in Recruiting',
      subtitle: 'Practical, Not Hyped',
      shortDescription: 'Practical, not hyped. How AI tools can sharpen sourcing and screening, while the human decision stays where it belongs, with humans.',
      fullDescription: 'AI is a tool, not a strategy. I explore where AI genuinely speeds up sourcing and screening — and where the human decision still needs to lead. No AI-first dogma, no hype, just practical experience.',
      ideal: 'Anyone curious about applying AI to recruiting without losing the human judgment that still matters most.',
      color: 'from-slate-600 to-blue-800'
    },
    {
      id: 'gamification',
      title: 'Gamification in HR',
      subtitle: 'Selected Projects, Real Impact',
      shortDescription: 'Making onboarding and engagement genuinely engaging, as shown in The PSI Trail.',
      fullDescription: 'It started with a scavenger hunt. At PSI, I turned mandatory safety training into an experience people actually enjoyed. Gamification, done well, isn\'t about gimmicks — it\'s thoughtful design that motivates. See The PSI Trail for the full story.',
      ideal: 'Organizations open to rethinking one specific process, like onboarding or training, through playful design.',
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
      solution: 'I designed an interactive scavenger hunt that transformed the standard site tour into an engaging team experience. What started as a "fun idea" evolved into a digital tool used for years, proving that compliance and engagement aren\'t mutually exclusive.',
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
        'Established Switzerland\'s first cross-sector program for women in STEM',
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
      title: 'Same Helmet, Three Different Lessons',
      teaser: 'Knowing a definition and truly understanding it are two different things. Here is how one hard hat helps tell Gamification, Serious Games, and LEGO Serious Play apart.',
      link: 'https://medium.com/@y.a.mueller/same-helmet-three-different-lessons-b176be76e592'
    },
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
      title: 'Door 1: Forced Fun Isn\'t Fun',
      teaser: 'Points, badges, leaderboards—the gamification starter pack. But what happens when game mechanics feel like obligation instead of motivation? Let\'s talk about what doesn\'t work, and why.',
      link: 'https://medium.com/@y.a.mueller/door-1-forced-fun-isnt-fun-31216dcb71f7'
    },
    {
      title: 'Gamification in HR: How to Engage Without Excluding',
      teaser: 'Gamification promises engagement, but for whom? Explore how to design experiences that welcome everyone—not just the competitive players in the room.',
      link: 'https://medium.com/@y.a.mueller/gamification-in-hr-how-to-engage-without-excluding-d45afaae731a'
    },
    {
      title: 'Why Being the Exotic One Is Uncomfortable (And What Tech Needs)',
      teaser: 'Being "the diversity hire" isn\'t a compliment—it\'s a burden. A reflection on what it means to be the "different one" in tech, and why real inclusion requires more than good intentions.',
      link: 'https://medium.com/@y.a.mueller/why-being-the-exotic-one-is-uncomfortable-and-exactly-what-tech-needs-067611c54fc2'
    },
    {
      title: 'What You Learn When Diving Into Gamification',
      teaser: 'Gamification isn\'t just about making things fun—it\'s about understanding human motivation, behavior design, and when to play (and when not to). Lessons from exploring a field that\'s bigger than buzzwords.',
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
          <div className="grid md:grid-cols-2 gap-8 items-center">
            {/* Text Content - Left Column */}
            <div>
              <h1 className="text-5xl font-bold mb-2 text-gray-800">
                Yvonne Müller
              </h1>

              <p className="text-2xl font-semibold text-emerald-600 mb-6">
                Active Sourcer &amp; Recruiting Specialist
              </p>

              <p className="text-2xl text-gray-600 mb-4 leading-relaxed">
                I turn &quot;we need someone&quot; into the right hire.
              </p>

              <p className="text-xl text-gray-600 mb-8 leading-relaxed">
                15+ years at the intersection of people, strategy, and complexity — across executive search, in-house recruiting, and organisational innovation. I bring active sourcing expertise, a practical eye for AI tools, and (when it fits) a bit of gamification into the mix.
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

            {/* Photo - Right Column */}
            <div className="flex justify-center md:justify-end">
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-400 to-teal-400 rounded-3xl blur-2xl opacity-30"></div>
                <Image 
                  src="/images/yvonne-portrait.jpg" 
                  alt="Yvonne Müller"
                  width={380}
                  height={380}
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
          Experience across HR, academia, and executive search — shared, not sold
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
          <p className="text-emerald-600 text-center mb-12 text-xl font-semibold">Active Sourcing Meets AI &amp; Gamification</p>
          
          <div className="prose prose-lg max-w-none">
            <p className="text-2xl text-gray-700 leading-relaxed mb-6">
              With 15+ years across strategy consulting, academia and the public sector, and executive search, I&apos;ve learned how to find the right people, and how to talk to them so they actually want to say yes. I&apos;ve screened hundreds of CVs, run workshops as both speaker and organiser, and led programs from concept to institution.
            </p>
            
            <p className="text-2xl text-gray-700 leading-relaxed">
              Today, as an Active Sourcer, I connect the right people with the right roles every day. On the side, I explore how AI can make sourcing sharper, and occasionally bring a bit of play into HR processes that badly need it.
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
            Thoughts on recruiting, AI, and what makes work human
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
              
              {/* Web3Forms Contact Form */}
              <form action="https://api.web3forms.com/submit" method="POST" className="space-y-4">
                <input type="hidden" name="access_key" value="88db3d9c-551f-4453-894c-325c57da9a4c" />
                <input type="hidden" name="subject" value="New Contact from Portfolio Website" />
                <input type="hidden" name="redirect" value="https://yvonnemueller.netlify.app/#contact" />
                
                {/* Honeypot Spam Protection */}
                <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />
                
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
              <p className="text-gray-400">Active Sourcer &amp; Recruiting Specialist</p>
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
