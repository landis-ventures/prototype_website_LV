import Link from 'next/link';
import N8nChat from '../../components/N8nChat';
export default function ServicesPage() {
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
      desc: "Automate tasks in legacy systems through the user interface when APIs are unavailable."
    },
    {
      name: "Python (AI/ML)",
      desc: "Power intelligent decision-making, predictive analytics, and fraud detection."
    },
    {
      name: "n8n",
      desc: "Orchestrate complex workflows, connect modern apps and APIs, and manage end-to-end automation."
    },
    {
      name: "SQL & NoSQL Databases",
      desc: "Ensure transactional integrity and enable real-time, large-scale analytics."
    }
  ];

  return (
    <main className="min-h-screen bg-dark-900 text-white">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Intelligent Automation for Financial Services: Faster, Smarter, More Compliant.
          </h1>
          <p className="text-lg md:text-xl mb-8 text-text-secondary max-w-3xl mx-auto">
            Our solutions transform your operations, eliminating manual bottlenecks and unlocking new efficiencies. We help you reduce costs, enhance accuracy, and deliver superior customer experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/contact" 
              className="inline-block bg-gradient-to-r from-primary-700 to-primary-500 text-white font-bold text-lg py-4 px-8 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 hover:scale-105 transition-all duration-300"
            >
              Schedule Your Free Consultation
            </Link>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-20 bg-dark-900">
        <div className="container mx-auto px-4 max-w-6xl">
          {solutions.map((solution, idx) => (
            <div key={idx} className="mb-20">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-bold mb-4">{solution.title}</h2>
                <p className="text-lg text-primary-400 font-semibold mb-2">{solution.impact}</p>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {solution.items.map((item, i) => (
                  <div
                    key={i}
                    className="bg-gradient-to-br from-content-box-900 to-primary-900/20 p-8 rounded-xl border border-primary-500/20 hover:border-primary-500/40 hover:bg-gradient-to-br hover:from-content-box-900 hover:to-primary-800/30 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 cursor-pointer flex flex-col justify-between min-h-[180px]"
                  >
                    <h3 className="text-lg font-bold mb-3 text-white">{item.name}</h3>
                    <p className="text-text-secondary leading-relaxed text-base">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-dark-900">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Build a More Efficient, Resilient, and Profitable Institution?
          </h2>
          <p className="text-lg mb-12 text-text-secondary max-w-3xl mx-auto">
            Let's design your automation roadmap today. Contact Landis Ventures for a complimentary strategy session and see how intelligent automation can transform your business.
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
                <span className="font-bold text-xl">Landis Ventures</span>
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