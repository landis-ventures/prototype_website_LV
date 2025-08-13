import Link from 'next/link';
import N8nChat from '../../components/N8nChat';

export default function AboutPage() {
  const values = [
    "Integrity & Trust",
    "Value-Driven Precision",
    "Strategic Partnership",
    "Rapid Innovation",
    "Relentless Improvement"
  ];

  return (
    <>

      <main className="min-h-screen bg-dark-900 text-white">
      {/* Hero Section */}
      <section className="relative py-24 md:py-32">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            About Landis Ventures
          </h1>
          <p className="text-lg md:text-xl mb-8 text-text-secondary max-w-3xl mx-auto">
            We are a specialized automation consultancy focused on transforming financial services operations through intelligent automation solutions.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-dark-900">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-lg text-text-secondary leading-relaxed">
              We unlock new levels of profitability and efficiency by designing and implementing intelligent automation solutions that streamline your operations and drive measurable growth.
            </p>
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

      {/* Why Choose Us Section - Modern UI */}
      <section className="py-20 w-full bg-gradient-to-br from-dark-900 via-dark-800 to-primary-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-extrabold mb-6 text-white drop-shadow-lg">Why Choose Landis Ventures?</h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              We bring deep expertise in financial services automation, proven methodologies, and a track record of delivering measurable results.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-gradient-to-br from-primary-900/10 to-dark-800 border border-primary-700/30 rounded-2xl p-10 flex flex-col items-center text-center shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
              <div className="w-14 h-14 rounded-full bg-primary-500/10 flex items-center justify-center mb-4">
                <span className="text-3xl">💡</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-white">Financial Services Expertise</h3>
              <p className="text-text-secondary">
                Deep understanding of financial operations, compliance requirements, and industry-specific challenges.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary-900/10 to-dark-800 border border-primary-700/30 rounded-2xl p-10 flex flex-col items-center text-center shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
              <div className="w-14 h-14 rounded-full bg-primary-500/10 flex items-center justify-center mb-4">
                <span className="text-3xl">🛠️</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-white">Technical Excellence</h3>
              <p className="text-text-secondary">
                Advanced skills in RPA platforms, AI/ML, cloud technologies, and enterprise integration.
              </p>
            </div>
            <div className="bg-gradient-to-br from-primary-900/10 to-dark-800 border border-primary-700/30 rounded-2xl p-10 flex flex-col items-center text-center shadow-lg hover:shadow-2xl hover:-translate-y-2 transition-all duration-300 cursor-pointer">
              <div className="w-14 h-14 rounded-full bg-primary-500/10 flex items-center justify-center mb-4">
                <span className="text-3xl">📜</span>
              </div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-white">Regulatory Knowledge</h3>
              <p className="text-text-secondary">
                Comprehensive understanding of compliance requirements and regulatory frameworks.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-dark-900">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Learn More?
          </h2>
          <p className="text-lg mb-12 text-text-secondary max-w-3xl mx-auto">
            Let's discuss how we can solve your most pressing operational challenges and unlock new opportunities for growth. The first step is a complimentary consultation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link 
              href="/contact" 
              className="inline-block bg-gradient-to-r from-primary-700 to-primary-500 text-white font-bold text-lg py-4 px-8 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 hover:scale-105 transition-all duration-300"
            >
              Schedule Free Consultation
            </Link>
          </div>
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
    </>
  );
}