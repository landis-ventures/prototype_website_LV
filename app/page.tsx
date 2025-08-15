      {/* Satisfaction Guarantee Section - Modern UI */}
      <section className="py-20 flex justify-center items-center" style={{ background: '#000' }}>
        <div className="bg-[#212B3A] rounded-[2.5rem] shadow-2xl px-6 md:px-16 py-16 max-w-4xl w-full text-center border border-blue-900/30">
          <div className="flex justify-center mb-8">
            <span className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-blue-900/20">
              <svg xmlns="http://www.w3.org/2000/svg" className="w-10 h-10 text-blue-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path d="M12 2l7 4v6c0 5.25-3.5 10-7 10s-7-4.75-7-10V6l7-4z" />
                <path d="M9 12l2 2 4-4" />
              </svg>
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white tracking-tight">Your Satisfaction, Guaranteed.</h2>
          <p className="text-xl md:text-2xl text-text-secondary max-w-2xl mx-auto mb-2 font-medium">
            We are so confident in our ability to deliver transformative results that we offer a <span className="font-bold text-white">100% money-back guarantee</span>. If you are not completely satisfied with the outcome of our work, you won't pay a dime. It's our commitment to a true, value-driven partnership.
          </p>
        </div>
      </section>

import N8nChat from '../components/N8nChat';
import Link from 'next/link';

export default function HomePage() {
  const values = [
    "Integrity & Trust",
    "Value-Driven Precision",
    "Strategic Partnership",
    "Rapid Innovation",
    "Relentless Improvement"
  ];
  const processSteps = [
    {
      number: "1",
      title: "Discovery & Analysis",
      description: "Understanding your goals and assessing ROI."
    },
    {
      number: "2",
      title: "Solution Design",
      description: "Creating the blueprint for your automation."
    },
    {
      number: "3",
      title: "Development & Testing",
      description: "Building the bot and conducting rigorous UAT."
    },
    {
      number: "4",
      title: "Deployment & Launch",
      description: "Moving the solution to production with training."
    },
    {
      number: "5",
      title: "Support & Maintenance",
      description: "Ensuring long-term success and reliability."
    }
  ];
  const services = [
    {
      title: "Robotic Process Automation (RPA)",
      description: "Automating repetitive, rule-based tasks within your existing desktop applications, web portals, and legacy systems."
    },
    {
      title: "Intelligent Document Processing (IDP)",
      description: "Using AI and OCR to automatically capture, extract, and validate data from invoices, forms, and financial statements."
    },
    {
      title: "Data Processing & Reconciliation",
      description: "Building robust automations to aggregate data, perform complex reconciliation, and generate actionable reports."
    },
    {
      title: "End-to-End Workflow Automation",
      description: "Designing holistic solutions that connect disparate systems and create seamless, autonomous business processes."
    },
  ];

      {/* 5-Phase Process Section - Modern UI */}
      <section className="py-20 w-full bg-gradient-to-br from-primary-900 via-dark-900 to-primary-700 relative overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="w-full h-full bg-gradient-to-r from-primary-900/30 via-primary-500/10 to-primary-700/30 blur-2xl opacity-40"></div>
        </div>
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-4 text-white drop-shadow-xl">Our Structured 5-Phase Process</h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">We ensure high-quality, sustainable results through a proven methodology.</p>
          </div>
          <div className="relative flex flex-col md:flex-row items-end justify-between gap-10 md:gap-0">
            {/* Animated Timeline Line */}
            <div className="hidden md:block absolute top-[110px] left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-primary-400 to-primary-700 animate-pulse z-0"></div>
            {/* Steps */}
            <div className="w-full flex flex-col md:flex-row items-stretch justify-between gap-10 md:gap-0">
              {[{
                number: "1",
                title: "Discovery & Analysis",
                description: "Understanding your goals and assessing ROI."
              }, {
                number: "2",
                title: "Solution Design",
                description: "Creating the blueprint for your automation."
              }, {
                number: "3",
                title: "Development & Testing",
                description: "Building the bot and conducting rigorous UAT."
              }, {
                number: "4",
                title: "Deployment & Launch",
                description: "Moving the solution to production with training."
              }, {
                number: "5",
                title: "Support & Maintenance",
                description: "Ensuring long-term success and reliability."
              }].map((step, idx) => (
                <div key={step.number} className="relative z-10 flex-1 flex flex-col items-center text-center group min-h-[260px]">
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center font-extrabold text-2xl md:text-3xl mb-2 shadow-2xl border-4 border-primary-400 group-hover:scale-110 group-hover:border-primary-300 transition-all duration-300" style={{marginBottom: '0.5rem'}}>
                    <span className="text-white font-black drop-shadow-[0_0_16px_rgba(255,255,255,0.85)] animate-pulse">{step.number}</span>
                  </div>
                  <div className="flex flex-col items-center justify-center flex-1" style={{marginTop: '0.5rem'}}>
                    <h3 className="text-xl md:text-2xl font-bold mb-1 text-white drop-shadow-lg group-hover:text-primary-300 transition-colors duration-300">{step.title}</h3>
                    <p className="text-text-secondary text-base md:text-lg max-w-xs mx-auto group-hover:text-white/80 transition-colors duration-300">{step.description}</p>
                  </div>
                  {/* Decorative Glow */}
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-primary-500/30 blur-md opacity-50"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

  return (
    <main className="min-h-screen bg-dark-900 text-white">
      {/* Main Call to Action Section */}
      <section className="relative py-36 md:py-56 overflow-hidden" style={{background: 'radial-gradient(ellipse at center, #232a3a 0%, #111217 100%)'}}>
        <div className="container mx-auto px-4 text-center max-w-6xl relative z-10">
          <h1 className="text-5xl md:text-7xl font-black mb-10 leading-tight text-white drop-shadow-[0_2px_24px_rgba(0,123,255,0.30)]">
            WASTING YOUR <span className="text-primary-400">TIME?</span>
          </h1>
          <p className="text-xl md:text-2xl mb-12 text-text-secondary max-w-4xl mx-auto">
            Optimize your business through intelligent automation to save time, increase <span className="text-primary-400 font-bold">profits</span>, and achieve your goals.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link 
              href="/contact" 
              className="inline-block bg-gradient-to-r from-primary-700 to-primary-500 text-white font-bold text-xl py-5 px-12 rounded-full shadow-2xl hover:shadow-2xl hover:-translate-y-1 hover:scale-110 hover:bg-gradient-to-r hover:from-primary-600 hover:to-primary-400 transition-all duration-300 focus:outline-none focus:ring-4 focus:ring-primary-400/40"
            >
              Start Automating Today
            </Link>
          </div>
          {/* Optional: Decorative Glow/Shape */}
          <div className="absolute inset-0 pointer-events-none z-0">
            <div className="w-full h-full bg-gradient-radial from-primary-900/10 to-transparent opacity-60"></div>
          </div>
        </div>
      </section>



  <section className="py-20" style={{ background: '#000' }}>
  <div className="w-full" style={{ background: '#000', margin: 0, padding: 0 }}>
  <div className="bg-gradient-to-br from-dark-800 via-dark-900 to-primary-900 border border-primary-700/30 rounded-3xl p-6 md:p-10 text-center shadow-2xl mx-0 w-full flex flex-col items-center justify-center">
        <div className="w-20 h-20 bg-primary-500/10 border border-primary-500/30 rounded-full flex items-center justify-center text-primary-400 mb-8">
          {/* Shield Icon for trust */}
          <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
        </div>
        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white tracking-tight drop-shadow-lg">
          Your Satisfaction, Guaranteed.
        </h2>
        <p className="text-xl md:text-2xl text-text-secondary max-w-2xl mx-auto mb-2 font-medium">
          We are so confident in our ability to deliver transformative results that we offer a <span className="font-extrabold text-primary-400">100% money-back guarantee</span>. If you are not completely satisfied with the outcome of our work, you won't pay a dime. It's our commitment to a true, value-driven partnership.
        </p>
      </div>
    </div>
  </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-dark-900"  style={{ background: '#000' }}>
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              We solve complex operational challenges with a focused suite of automation services.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-content-box-900 to-primary-900/20 p-6 rounded-xl border border-primary-500/20 hover:border-primary-500/40 hover:bg-gradient-to-br hover:from-content-box-900 hover:to-primary-800/30 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer"
              >
                <h3 className="text-lg font-bold mb-3 text-white">{service.title}</h3>
                <p className="text-text-secondary leading-relaxed text-sm">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-24 w-full bg-gradient-to-br from-dark-900 via-dark-950 to-primary-900 relative overflow-x-hidden">
        <div className="max-w-7xl mx-auto px-4 relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white drop-shadow-lg tracking-tight">Our Structured 5-Phase Process</h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">We ensure high-quality, sustainable results through a proven methodology.</p>
          </div>
          <div className="relative flex flex-col md:flex-row items-end justify-between gap-10 md:gap-0">
            {/* Animated Timeline Line */}
            <div className="hidden md:block absolute top-[110px] left-0 right-0 h-1 bg-gradient-to-r from-primary-500 via-primary-400 to-primary-700 animate-pulse z-0"></div>
            {/* Steps */}
            <div className="w-full flex flex-col md:flex-row items-stretch justify-between gap-10 md:gap-0">
              {processSteps.map((step, idx) => (
                <div key={step.number} className="relative z-10 flex-1 flex flex-col items-center text-center group min-h-[260px]">
                  <div className="w-20 h-20 md:w-24 md:h-24 bg-white/10 backdrop-blur-xl rounded-full flex items-center justify-center text-primary-100 font-extrabold text-2xl md:text-3xl mb-2 shadow-2xl border-4 border-primary-400 group-hover:scale-110 group-hover:border-primary-300 transition-all duration-300" style={{marginBottom: '0.5rem'}}>
                    <span className="bg-gradient-to-br from-primary-200 via-primary-300 to-primary-400 bg-clip-text text-transparent drop-shadow-lg animate-pulse">{step.number}</span>
                  </div>
                  <div className="flex flex-col items-center justify-center flex-1" style={{marginTop: '0.5rem'}}>
                    <h3 className="text-xl md:text-2xl font-bold mb-1 text-white drop-shadow-lg group-hover:text-primary-300 transition-colors duration-300">{step.title}</h3>
                    <p className="text-text-secondary text-base md:text-lg max-w-xs mx-auto group-hover:text-white/80 transition-colors duration-300">{step.description}</p>
                  </div>
                  {/* Decorative Glow */}
                  <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-primary-500/30 blur-md opacity-60"></div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-dark-900">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Core Values</h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              The principles that guide every decision we make.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {values.map((value, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-content-box-900 to-primary-900/20 p-6 rounded-xl border border-primary-500/20 hover:border-primary-500/40 hover:bg-gradient-to-br hover:from-content-box-900 hover:to-primary-800/30 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 flex items-center justify-center min-h-[120px] text-center cursor-pointer"
              >
                <h3 className="text-lg font-bold text-white">{value}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-dark-900">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Automate Your Success?
          </h2>
          <p className="text-lg mb-12 text-text-secondary max-w-3xl mx-auto">
            Let's discuss how we can solve your most pressing operational challenges and unlock new opportunities for growth. The first step is a complimentary consultation.
          </p>
          
          {/* Contact Form */}
          <div className="bg-content-box-900 p-8 rounded-2xl border border-border/20 max-w-2xl mx-auto">
            <form 
              action="https://formspree.io/f/xldlznep"
              method="POST"
              className="space-y-6"
            >
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-left">First Name *</label>
                  <input 
                    type="text" 
                    name="firstName"
                    placeholder="Enter your first name"
                    className="w-full px-4 py-3 bg-dark-800 border border-border rounded-lg text-white placeholder-text-muted focus:border-primary-500 focus:outline-none transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-left">Last Name *</label>
                  <input 
                    type="text" 
                    name="lastName"
                    placeholder="Enter your last name"
                    className="w-full px-4 py-3 bg-dark-800 border border-border rounded-lg text-white placeholder-text-muted focus:border-primary-500 focus:outline-none transition-colors"
                    required
                  />
                </div>
              </div>
              
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-medium mb-2 text-left">Email Address *</label>
                  <input 
                    type="email" 
                    name="email"
                    placeholder="your.email@company.com"
                    className="w-full px-4 py-3 bg-dark-800 border border-border rounded-lg text-white placeholder-text-muted focus:border-primary-500 focus:outline-none transition-colors"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2 text-left">Phone Number</label>
                  <input 
                    type="tel" 
                    name="phone"
                    placeholder="(555) 123-4567"
                    className="w-full px-4 py-3 bg-dark-800 border border-border rounded-lg text-white placeholder-text-muted focus:border-primary-500 focus:outline-none transition-colors"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-left">Company *</label>
                <input 
                  type="text" 
                  name="company"
                  placeholder="Your company name"
                  className="w-full px-4 py-3 bg-dark-800 border border-border rounded-lg text-white placeholder-text-muted focus:border-primary-500 focus:outline-none transition-colors"
                  required
                />
              </div>
              
              <div>
                <label className="block text-sm font-medium mb-2 text-left">Project Details</label>
                <textarea 
                  name="message"
                  placeholder="Tell us about your current challenges and automation goals..."
                  rows={4}
                  className="w-full px-4 py-3 bg-dark-800 border border-border rounded-lg text-white placeholder-text-muted focus:border-primary-500 focus:outline-none transition-colors resize-none"
                ></textarea>
              </div>
              
              
              <button 
                type="submit"
                className="w-full bg-gradient-to-r from-primary-700 to-primary-500 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 hover:scale-105 transition-all duration-300"
              >
                Schedule Free Consultation
              </button>
            </form>
          </div>
          
          {/* Contact Info */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="text-2xl mb-2">📧</div>
              <h3 className="font-bold mb-2">Email Us</h3>
              <p className="text-primary-400">info@landis-ventures.com</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">📞</div>
              <h3 className="font-bold mb-2">Call Us</h3>
              <p className="text-primary-400">(202) 854-0738</p>
            </div>
            <div className="text-center">
              <div className="text-2xl mb-2">⏱️</div>
              <h3 className="font-bold mb-2">Response Time</h3>
              <p className="text-primary-400">Within 24 hours</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark-900 border-t border-border/20">
        <div className="container mx-auto px-4 py-16">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            {/* Company Info */}
            <div>
              <div className="flex items-center gap-2 mb-4">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-layers w-8 h-8 text-blue-500">
                <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"></path>
                <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"></path>
                <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"></path>
                </svg>
                </div>
                <span className="font-bold text-xl">Landis Automation</span>
              </div>
              <p className="text-text-secondary text-sm leading-relaxed">
                Intelligent automation solutions for financial services. Transforming operations through cutting-edge technology.
              </p>
            </div>
            
            {/* Company Links */}
            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li><Link href="/about" className="hover:text-primary-400 transition-colors">About Us</Link></li>
                <li><Link href="/services" className="hover:text-primary-400 transition-colors">Services</Link></li>
                <li><Link href="/process" className="hover:text-primary-400 transition-colors">Our Process</Link></li>
                <li><Link href="/contact" className="hover:text-primary-400 transition-colors">Contact</Link></li>
              </ul>
            </div>
            
            {/* Services Links */}
            <div>
              <h3 className="font-bold mb-4">Services</h3>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li><Link href="/rpa" className="hover:text-primary-400 transition-colors">RPA Solutions</Link></li>
                <li><Link href="/document-processing" className="hover:text-primary-400 transition-colors">Document Processing</Link></li>
                <li><Link href="/data-reconciliation" className="hover:text-primary-400 transition-colors">Data Reconciliation</Link></li>
                <li><Link href="/workflow-automation" className="hover:text-primary-400 transition-colors">Workflow Automation</Link></li>
              </ul>
            </div>
            
            {/* Contact Info */}
            <div>
              <h3 className="font-bold mb-4">Contact</h3>
              <ul className="space-y-2 text-text-secondary text-sm">
                <li>info@landis-ventures.com</li>
                <li>(202) 854-0738</li>
              </ul>
            </div>
          </div>
          
          {/* Bottom Footer */}
          <div className="border-t border-border/20 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-text-muted text-sm">
              © 2025 Landis Automation. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-text-muted text-sm hover:text-primary-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-text-muted text-sm hover:text-primary-400 transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Chatbot Integration */}
      <div className="fixed bottom-6 right-6 z-50">
        <N8nChat />
      </div>
    </main>
  );
}