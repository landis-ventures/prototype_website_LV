import Link from 'next/link';
import N8nChat from '../../components/N8nChat';
export default function ServicesPage() {
  // Service formats for creative display
  const formats = [
    {
      icon: (
        <svg width="32" height="32" fill="none" viewBox="0 0 24 24" className="text-primary-400"><path d="M12 2v20M2 12h20" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
      ),
      title: "End-to-End Automation",
      desc: "We design, build, and support fully automated workflows that connect your people, processes, and technology."
    },
    {
      icon: (
        <svg width="32" height="32" fill="none" viewBox="0 0 24 24" className="text-primary-400"><rect x="3" y="3" width="7" height="7" rx="2" stroke="currentColor" strokeWidth="2"/><rect x="14" y="3" width="7" height="7" rx="2" stroke="currentColor" strokeWidth="2"/><rect x="14" y="14" width="7" height="7" rx="2" stroke="currentColor" strokeWidth="2"/><rect x="3" y="14" width="7" height="7" rx="2" stroke="currentColor" strokeWidth="2"/></svg>
      ),
      title: "Modular Integrations",
      desc: "Plug-and-play automations for specific tasks, systems, or departments—customized to your needs."
    },
    {
      icon: (
        <svg width="32" height="32" fill="none" viewBox="0 0 24 24" className="text-primary-400"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/><path d="M8 12l2 2 4-4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg>
      ),
      title: "Consulting & Strategy",
      desc: "Expert guidance to help you identify automation opportunities and build a winning roadmap."
    },
    {
      icon: (
        <svg width="32" height="32" fill="none" viewBox="0 0 24 24" className="text-primary-400"><rect x="4" y="4" width="16" height="16" rx="2" stroke="currentColor" strokeWidth="2"/><path d="M8 8h8v8H8z" stroke="currentColor" strokeWidth="2"/></svg>
      ),
      title: "Automation Toolkits",
      desc: "Reusable components, bots, and templates to accelerate your digital transformation."
    },
    {
      icon: (
        <svg width="32" height="32" fill="none" viewBox="0 0 24 24" className="text-primary-400"><path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-2" stroke="currentColor" strokeWidth="2"/><rect x="7" y="7" width="10" height="7" rx="2" stroke="currentColor" strokeWidth="2"/></svg>
      ),
      title: "Analytics & Insights",
      desc: "Dashboards and reporting automations to give you real-time visibility and control."
    }
  ];

  // Solution sections for UI and SEO
  const solutions = [
    {
      title: "Streamline Your Back Office & Slash Operational Costs",
      impact: "Cut operational costs by up to 60% and reduce manual data entry by over 80%.",
      items: [
        {
          name: "Automated Accounts Payable (AP) & Receivable (AR)",
          desc: "Intelligent Document Processing (IDP) extracts and validates invoice data, matches against purchase orders in SQL, and processes payments automatically."
        },
        {
          name: "Accelerated Financial Close & Reconciliation",
          desc: "Bots aggregate data, perform high-volume reconciliations, and post journal entries, reducing manual intervention by up to 80%."
        },
        {
          name: "Automated Financial & Management Reporting",
          desc: "Workflows pull data from SQL/NoSQL, perform calculations, and deliver real-time reports, saving days of manual work."
        }
      ]
    },
    {
      title: "Fortify Risk Management & Ensure Bulletproof Compliance",
      impact: "Reduce client onboarding time from days to minutes. Catch complex fraud missed by human analysts.",
      items: [
        {
          name: "Automated KYC & AML Processes",
          desc: "Automate identity verification, connect to APIs for background checks, and use AI to screen against sanctions lists and monitor transactions."
        },
        {
          name: "Real-Time Fraud Detection",
          desc: "Python-based ML models and NoSQL analyze millions of transactions in milliseconds, identifying sophisticated fraud patterns."
        },
        {
          name: "Streamlined Regulatory Reporting",
          desc: "Automate data collection and report generation for Basel III, MiFID II, and more, ensuring accuracy and timeliness."
        }
      ]
    },
    {
      title: "Revolutionize the Front Office & Customer Experience",
      impact: "Reduce new account opening times by 70%. Compress loan processing from 20 days to 10 minutes.",
      items: [
        {
          name: "Frictionless Digital Onboarding",
          desc: "End-to-end digital onboarding workflows automate data verification and account creation for a seamless user experience."
        },
        {
          name: "Intelligent Loan & Mortgage Processing",
          desc: "Automate data extraction, AI-powered credit scoring, and funding for rapid lending decisions."
        },
        {
          name: "AI-Powered Wealth & Asset Management",
          desc: "Automated portfolio rebalancing, AI-driven market analysis, and investment insights for advisors."
        },
        {
          name: "Efficient Insurance Operations",
          desc: "Automate claims processing and underwriting with AI, improving speed and accuracy across the insurance lifecycle."
        }
      ]
    }
  ];

  const toolkit = [
    {
      name: "UiPath (RPA)",
      desc: "Automate tasks in legacy systems through the user interface when APIs are unavailable.",
      icon: (
        <svg width="28" height="28" fill="none" viewBox="0 0 24 24" className="text-primary-400"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/><rect x="8" y="8" width="8" height="8" rx="2" stroke="currentColor" strokeWidth="2"/></svg>
      )
    },
    {
      name: "Python (AI/ML)",
      desc: "Power intelligent decision-making, predictive analytics, and fraud detection.",
      icon: (
        <svg width="28" height="28" fill="none" viewBox="0 0 24 24" className="text-primary-400"><ellipse cx="12" cy="12" rx="10" ry="6" stroke="currentColor" strokeWidth="2"/><path d="M2 12c2 2 6 2 10 2s8 0 10-2" stroke="currentColor" strokeWidth="2"/></svg>
      )
    },
    {
      name: "n8n",
      desc: "Orchestrate complex workflows, connect modern apps and APIs, and manage end-to-end automation.",
      icon: (
        <svg width="28" height="28" fill="none" viewBox="0 0 24 24" className="text-primary-400"><circle cx="6" cy="12" r="2" fill="currentColor"/><circle cx="18" cy="12" r="2" fill="currentColor"/><rect x="8" y="11" width="8" height="2" rx="1" fill="currentColor"/></svg>
      )
    },
    {
      name: "SQL & NoSQL Databases",
      desc: "Ensure transactional integrity and enable real-time, large-scale analytics.",
      icon: (
        <svg width="28" height="28" fill="none" viewBox="0 0 24 24" className="text-primary-400"><ellipse cx="12" cy="7" rx="8" ry="3" stroke="currentColor" strokeWidth="2"/><path d="M4 7v10c0 1.66 3.58 3 8 3s8-1.34 8-3V7" stroke="currentColor" strokeWidth="2"/></svg>
      )
    }
  ];

  return (
    <main className="min-h-screen bg-dark-950 text-white">
      {/* Hero Section - Modernized */}
      <section className="relative py-32 md:py-44 bg-gradient-to-br from-primary-400 via-primary-600 to-dark-800 flex flex-col items-center justify-center text-center overflow-hidden">
        {/* Brighter abstract shapes for modern look */}
        <div className="absolute -top-32 -left-32 w-[600px] h-[600px] bg-primary-300/30 rounded-full blur-3xl pointer-events-none select-none" />
        <div className="absolute -bottom-32 -right-32 w-[500px] h-[500px] bg-primary-200/40 rounded-full blur-2xl pointer-events-none select-none" />
        <div className="relative z-10 max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-6 text-white drop-shadow-xl tracking-tight" style={{textShadow: '0 2px 16px rgba(0,0,0,0.18)'}}>Intelligent Automation for Financial Services</h1>
          <p className="text-lg md:text-xl font-semibold text-white mb-8" style={{textShadow: '0 1px 8px rgba(0,0,0,0.12)'}}>
            Transform your operations, eliminate manual bottlenecks, and unlock new efficiencies. Reduce costs, enhance accuracy, and deliver superior customer experiences.
          </p>
          <Link 
            href="/contact" 
            className="inline-block bg-white text-primary-700 font-bold text-lg py-4 px-10 rounded-full shadow-lg hover:bg-primary-100 hover:text-primary-800 hover:shadow-xl hover:-translate-y-1 hover:scale-105 transition-all duration-300 border border-primary-200"
          >
            Schedule Your Free Consultation
          </Link>
        </div>
      </section>

      {/* Service Formats - Creative Display */}
      <section className="py-20 w-full bg-gradient-to-br from-dark-900 via-dark-800 to-primary-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white drop-shadow-lg">How We Deliver Value</h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">Choose the format that fits your business—mix and match for maximum impact.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {formats.map((format, idx) => (
              <div key={idx} className="bg-gradient-to-br from-primary-900/10 to-dark-800 border border-primary-700/30 rounded-2xl p-10 flex flex-col items-center text-center shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group">
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-primary-700/30 to-primary-400/10 shadow-lg flex items-center justify-center mb-4 group-hover:scale-105 group-hover:shadow-2xl transition-all duration-300 backdrop-blur-md">
                  {format.icon}
                </div>
                <h3 className="text-xl md:text-2xl font-bold mb-3 text-white group-hover:text-primary-400 transition-colors duration-300">{format.title}</h3>
                <p className="text-text-secondary text-base">{format.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

  {/* Toolkit Section - Modern Cards */}
      <section className="py-24 w-full bg-gradient-to-br from-dark-900 via-dark-950 to-primary-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {solutions.map((solution, idx) => (
              <div key={idx} className="bg-gradient-to-br from-primary-900/10 to-dark-800 border border-primary-700/30 rounded-3xl p-10 flex flex-col items-center text-center shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group">
                <h2 className="text-2xl md:text-3xl font-bold mb-4 text-white group-hover:text-primary-400 transition-colors duration-300">{solution.title}</h2>
                <p className="text-primary-400 font-semibold mb-6">{solution.impact}</p>
                <ul className="space-y-6 w-full">
                  {solution.items.map((item, i) => (
                    <li key={i} className="bg-dark-900/80 rounded-xl p-5 border border-primary-700/10 shadow hover:shadow-xl transition-all duration-300 text-left">
                      <h3 className="text-lg font-bold mb-2 text-white">{item.name}</h3>
                      <p className="text-text-secondary leading-relaxed text-base">{item.desc}</p>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Toolkit Section */}
      <section className="py-20 w-full bg-gradient-to-br from-dark-950 via-dark-900 to-primary-900">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white drop-shadow-lg">Our Automation Toolkit</h2>
            <p className="text-lg text-text-secondary max-w-2xl mx-auto">We leverage best-in-class tools and platforms to deliver robust, scalable automation solutions.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">
            {toolkit.map((tool, idx) => (
              <div key={idx} className="bg-gradient-to-br from-primary-900/10 to-dark-800 border border-primary-700/30 rounded-2xl p-8 flex flex-col items-center text-center shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer group">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-primary-700/30 to-primary-400/10 shadow-lg flex items-center justify-center mb-4 group-hover:scale-105 group-hover:shadow-2xl transition-all duration-300 backdrop-blur-md">
                  {tool.icon}
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-2 text-white group-hover:text-primary-400 transition-colors duration-300">{tool.name}</h3>
                <p className="text-text-secondary text-base">{tool.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      <section className="py-20 bg-dark-900">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Build a More Efficient, Resilient, and Profitable Institution?
          </h2>
          <p className="text-lg mb-12 text-text-secondary max-w-3xl mx-auto">
            Let's design your automation roadmap today. Contact Landis Automation for a complimentary strategy session and see how intelligent automation can transform your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/contact" 
              className="inline-block bg-gradient-to-r from-primary-700 to-primary-500 text-white font-bold text-lg py-4 px-8 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 hover:scale-105 transition-all duration-300"
            >
              Get Started
            </Link>
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
                Automation solutions for financial services. Transforming operations through AI, RPA, and digital innovation.
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