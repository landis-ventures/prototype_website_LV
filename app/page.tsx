import N8nChat from '../components/N8nChat';
import Link from 'next/link';

export default function HomePage() {
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

  const values = [
    "Integrity & Trust",
    "Value-Driven Precision",
    "Strategic Partnership",
    "Rapid Innovation",
    "Relentless Improvement"
  ];

  return (
    <main className="min-h-screen bg-dark-900 text-white">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Intelligent Automation for Financial Services
          </h1>
          <p className="text-lg md:text-xl mb-8 text-text-secondary max-w-3xl mx-auto">
            We unlock new levels of profitability and efficiency by designing and implementing intelligent automation solutions that streamline your operations and drive measurable growth.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/contact" 
              className="inline-block bg-gradient-to-r from-primary-500 to-primary-400 text-white font-bold text-lg py-4 px-8 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 hover:scale-105 transition-all duration-300"
            >
              Schedule Your Free Consultation
            </Link>
            <Link 
              href="/services" 
              className="inline-block border-2 border-accent-400/40 text-white font-semibold text-lg py-4 px-8 rounded-full bg-gradient-to-r from-accent-400/10 to-accent-400/20 hover:from-accent-400/20 hover:to-accent-400/30 backdrop-blur-sm shadow-lg hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              Explore Our Services
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-dark-900">
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
      <section className="py-20 bg-dark-900">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Structured 5-Phase Process</h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">
              We ensure high-quality, sustainable results through a proven methodology.
            </p>
          </div>
          
          <div className="relative">
            {/* Process Line */}
            <div className="absolute top-8 left-0 right-0 h-0.5 bg-border hidden md:block"></div>
            
            <div className="grid md:grid-cols-5 gap-8">
              {processSteps.map((step, index) => (
                <div key={index} className="text-center relative">
                  <div className="w-16 h-16 bg-primary-500 rounded-full flex items-center justify-center text-white font-bold text-xl mx-auto mb-4 process-step">
                    {step.number}
                  </div>
                  <h3 className="text-lg font-bold mb-2">{step.title}</h3>
                  <p className="text-text-secondary text-sm">{step.description}</p>
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
                className="w-full bg-gradient-to-r from-primary-500 to-primary-400 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 hover:scale-105 transition-all duration-300"
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
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-layers w-8 h-8 text-blue-500">
                <path d="m12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83Z"></path>
                <path d="m22 17.65-9.17 4.16a2 2 0 0 1-1.66 0L2 17.65"></path>
                <path d="m22 12.65-9.17 4.16a2 2 0 0 1-1.66 0L2 12.65"></path>
                </svg>
                </div>
                <span className="font-bold text-xl">Landis Ventures</span>
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
              © 2025 Landis Ventures. All rights reserved.
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