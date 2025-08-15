
import Link from 'next/link';
import N8nChat from '../../components/N8nChat';
import { FaHandshake, FaCogs, FaChartLine, FaUserFriends, FaRocket, FaCheckCircle } from 'react-icons/fa';


export default function AboutPage() {
  const values = [
    {
      icon: <FaHandshake className="text-primary-400 text-3xl mb-2 mx-auto" />,
      title: "Integrity & Trust",
      desc: "The unwavering foundation of our client relationships."
    },
    {
      icon: <FaCheckCircle className="text-primary-400 text-3xl mb-2 mx-auto" />,
      title: "Value-Driven Precision",
      desc: "Clear, measurable business value, meticulously built for reliability and impact."
    },
    {
      icon: <FaUserFriends className="text-primary-400 text-3xl mb-2 mx-auto" />,
      title: "Strategic Partnership",
      desc: "We work as an extension of your team for long-term success."
    },
    {
      icon: <FaRocket className="text-primary-400 text-3xl mb-2 mx-auto" />,
      title: "Rapid Innovation",
      desc: "Dedicated to responsible, secure, and forward-thinking technology."
    },
    {
      icon: <FaChartLine className="text-primary-400 text-3xl mb-2 mx-auto" />,
      title: "Relentless Improvement",
      desc: "Continuous growth for both our clients and ourselves."
    },
  ];

  return (
  <main className="min-h-screen bg-gradient-to-b from-gray-100 via-white to-gray-100">

      {/* Unique Approach Section */}
  <section className="py-20 bg-gradient-to-b from-white via-gray-100 to-gray-200 text-gray-900 transition-colors duration-700">
        <div className="container mx-auto px-4 max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-700 drop-shadow">Our Unique Approach</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We provide <span className="font-semibold text-primary-400">complete, end-to-end automation solutions</span>—from initial analysis and solution design to final deployment and ongoing support. Enjoy the full benefits of increased efficiency and profitability, while we handle the technical complexities. Focus on your core business and strategic goals; we handle the rest.
            </p>
          </div>
        </div>
      </section>

      {/* Expertise & Focus Section */}
  <section className="py-20 bg-gradient-to-b from-gray-200 via-white to-gray-100 text-gray-900 transition-colors duration-700">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-700 drop-shadow">Our Expertise & Focus</h2>
            <p className="text-lg text-gray-700 max-w-3xl mx-auto">
              We specialize in partnering with <span className="font-semibold text-primary-400">Investment Advisory Firms</span> and other financial institutions (10-500 employees). Our custom-built solutions address pain points unique to this sector:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-dark-800/80 rounded-2xl p-8 border-l-4 border-primary-400 shadow-lg flex items-center gap-4">
              <FaCogs className="text-primary-400 text-4xl" />
              <div>
                <h3 className="font-bold text-lg mb-1 text-primary-100">Data Reconciliation & Routine Reporting</h3>
                <p className="text-gray-100">Automate repetitive, error-prone data tasks and reporting cycles.</p>
              </div>
            </div>
            <div className="bg-dark-800/80 rounded-2xl p-8 border-l-4 border-primary-400 shadow-lg flex items-center gap-4">
              <FaUserFriends className="text-primary-400 text-4xl" />
              <div>
                <h3 className="font-bold text-lg mb-1 text-primary-100">Client Onboarding & Trade Support</h3>
                <p className="text-gray-100">Streamline onboarding and post-trade processes for a seamless client experience.</p>
              </div>
            </div>
            <div className="bg-dark-800/80 rounded-2xl p-8 border-l-4 border-primary-400 shadow-lg flex items-center gap-4">
              <FaCogs className="text-primary-400 text-4xl" />
              <div>
                <h3 className="font-bold text-lg mb-1 text-primary-100">Intelligent Document Processing (IDP)</h3>
                <p className="text-gray-100">Automate invoice and form processing with AI-powered document understanding.</p>
              </div>
            </div>
            <div className="bg-dark-800/80 rounded-2xl p-8 border-l-4 border-primary-400 shadow-lg flex items-center gap-4">
              <FaRocket className="text-primary-400 text-4xl" />
              <div>
                <h3 className="font-bold text-lg mb-1 text-primary-100">End-to-End Workflow Automation</h3>
                <p className="text-gray-100">Connect disparate systems and automate complex, multi-step workflows.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values Section */}
  <section className="py-20 bg-gradient-to-b from-gray-100 via-white to-gray-100 text-gray-900 transition-colors duration-700">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-primary-700 drop-shadow">Our Core Values</h2>
            <p className="text-lg text-gray-700 max-w-2xl mx-auto">
              Our work is guided by a set of core values that ensure every project is built with integrity and purpose:
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {values.map(({ icon, title, desc }, index) => (
              <div
                key={index}
                className="bg-gradient-to-br from-gray-900 to-gray-700 p-6 rounded-xl border border-primary-500/30 hover:border-primary-400 hover:bg-gradient-to-br hover:from-gray-900 hover:to-gray-800 hover:-translate-y-2 hover:shadow-xl transition-all duration-300 flex flex-col items-center justify-center min-h-[180px] text-center cursor-pointer"
              >
                {icon}
                <h3 className="text-lg font-bold text-blue-200 mb-2">{title}</h3>
                  <p className="text-gray-100 text-sm">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>





      {/* CTA Section */}
  <section className="py-20 bg-gradient-to-b from-gray-100 via-white to-gray-100 text-gray-900">
        <div className="container mx-auto px-4 max-w-4xl text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary-700">
            Ready to Learn More?
          </h2>
          <p className="text-lg mb-12 text-gray-700 max-w-3xl mx-auto">
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
  <footer className="bg-gradient-to-b from-gray-100 via-white to-gray-100 text-gray-900 border-t border-border/20 transition-colors duration-700">
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
              <p className="text-gray-700 text-sm leading-relaxed">
                Intelligent automation solutions for financial services. Transforming operations through cutting-edge technology.
              </p>
            </div>
            {/* Company Links */}
            <div>
              <h3 className="font-bold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-800 text-sm">
                <li><Link href="/about" className="hover:text-primary-400 transition-colors">About Us</Link></li>
                <li><Link href="/services" className="hover:text-primary-400 transition-colors">Services</Link></li>
                <li><Link href="/process" className="hover:text-primary-400 transition-colors">Our Process</Link></li>
                <li><Link href="/contact" className="hover:text-primary-400 transition-colors">Contact</Link></li>
              </ul>
            </div>
            {/* Services Links */}
            <div>
              <h3 className="font-bold mb-4">Services</h3>
              <ul className="space-y-2 text-gray-800 text-sm">
                <li><Link href="/rpa" className="hover:text-primary-400 transition-colors">RPA Solutions</Link></li>
                <li><Link href="/document-processing" className="hover:text-primary-400 transition-colors">Document Processing</Link></li>
                <li><Link href="/data-reconciliation" className="hover:text-primary-400 transition-colors">Data Reconciliation</Link></li>
                <li><Link href="/workflow-automation" className="hover:text-primary-400 transition-colors">Workflow Automation</Link></li>
              </ul>
            </div>
            {/* Contact Info */}
            <div>
              <h3 className="font-bold mb-4">Contact</h3>
              <ul className="space-y-2 text-gray-800 text-sm">
                <li className="text-gray-900">info@landis-ventures.com</li>
                <li className="text-gray-900">(202) 854-0738</li>
              </ul>
            </div>
          </div>
          {/* Bottom Footer */}
          <div className="border-t border-border/20 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-500 text-sm">
              © 2025 Landis Automation. All rights reserved.
            </p>
            <div className="flex gap-6 mt-4 md:mt-0">
              <Link href="/privacy" className="text-gray-500 text-sm hover:text-primary-400 transition-colors">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-gray-500 text-sm hover:text-primary-400 transition-colors">
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