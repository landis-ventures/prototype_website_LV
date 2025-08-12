import N8nChat from '../components/N8nChat';
import Link from 'next/link';

export default function HomePage() {
  const services = [
    {
      title: "Robotic Process Automation (RPA)",
      description: "Automating repetitive, rule-based tasks within desktop applications, web portals, and legacy systems to improve efficiency and reduce human error.",
      icon: "🤖",
      features: ["Process Mapping", "Workflow Design", "Integration Support"]
    },
    {
      title: "Intelligent Document Processing (IDP)",
      description: "Using AI and OCR to automatically capture, extract, and validate data from documents like invoices, forms, and financial statements.",
      icon: "📄",
      features: ["AI-Powered Extraction", "Multi-Format Support", "Validation Rules"]
    },
    {
      title: "Data Processing & Reconciliation",
      description: "Building robust automations to aggregate data from multiple sources, perform complex reconciliation, and generate actionable reports for audit and compliance.",
      icon: "📊",
      features: ["Multi-Source Integration", "Real-time Processing", "Compliance Reporting"]
    },
    {
      title: "End-to-End Workflow Automation",
      description: "Designing holistic solutions that connect disparate systems and create seamless, autonomous business processes.",
      icon: "🔄",
      features: ["System Integration", "Process Orchestration", "Performance Monitoring"]
    },
  ];

  const values = [
    {
      title: "Integrity & Trust",
      description: "The foundation of our client relationships is built on unwavering honesty and transparency in every action.",
      icon: "🤝"
    },
    {
      title: "Value-Driven Precision",
      description: "We deliver solutions that provide clear, measurable business value, meticulously built for reliability and impact.",
      icon: "🎯"
    },
    {
      title: "Strategic Partnership",
      description: "We work as an extension of your team, understanding your goals to ensure our solutions drive long-term success.",
      icon: "🚀"
    }
  ];

  const stats = [
    { number: "95%", label: "Process Efficiency Gain" },
    { number: "60%", label: "Cost Reduction" },
    { number: "24/7", label: "Automation Uptime" },
    { number: "100%", label: "Client Satisfaction" }
  ];

  return (
    <main className="min-h-screen bg-neutral-50 text-secondary-500">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.15)_1px,transparent_0)] bg-[length:20px_20px]"></div>
        </div>
        
        <div className="relative container mx-auto px-4 py-24 md:py-32 text-center max-w-6xl">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
              Intelligent Automation for
              <span className="block text-accent-400">Financial Services</span>
            </h1>
            <p className="text-lg md:text-xl lg:text-2xl mb-8 font-light max-w-4xl mx-auto opacity-90">
              We unlock new levels of profitability and efficiency by designing and implementing intelligent automation solutions that streamline your operations and drive measurable growth.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Link 
                href="/contact" 
                className="group bg-white text-primary-600 font-bold text-lg py-4 px-8 rounded-full shadow-soft hover:shadow-medium transition-all duration-300 hover:scale-105"
              >
                Schedule Your Free Consultation
                <span className="ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
              </Link>
              <Link 
                href="/services" 
                className="group border-2 border-white/30 text-white font-semibold text-lg py-4 px-8 rounded-full hover:bg-white/10 transition-all duration-300 backdrop-blur-sm"
              >
                Explore Our Services
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-white border-b border-neutral-200">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center animate-slide-up" style={{ animationDelay: `${index * 0.1}s` }}>
                <div className="text-3xl md:text-4xl font-bold text-primary-600 mb-2">{stat.number}</div>
                <div className="text-sm md:text-base text-neutral-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-neutral-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-secondary-500">
              Our <span className="text-primary-600">Services</span>
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              Comprehensive automation solutions designed to transform your financial operations and drive measurable business outcomes.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {services.map((service, index) => (
              <div 
                key={index} 
                className="group bg-white p-8 rounded-2xl shadow-soft hover:shadow-large transition-all duration-500 card-hover border border-neutral-200/50"
              >
                <div className="flex items-start gap-4 mb-6">
                  <div className="text-4xl">{service.icon}</div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold mb-3 text-secondary-500 group-hover:text-primary-600 transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-neutral-600 leading-relaxed mb-4">{service.description}</p>
                  </div>
                </div>
                
                <div className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-center gap-2 text-sm text-neutral-500">
                      <div className="w-1.5 h-1.5 bg-accent-500 rounded-full"></div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section id="values" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6 text-secondary-500">
              Our Core <span className="text-primary-600">Values</span>
            </h2>
            <p className="text-lg text-neutral-600 max-w-3xl mx-auto">
              The principles that guide every decision, every solution, and every client relationship.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="text-center p-8 rounded-2xl bg-gradient-to-br from-neutral-50 to-white border border-neutral-200/50 hover:border-primary-200 transition-all duration-300 group"
              >
                <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-300">{value.icon}</div>
                <h3 className="text-xl font-bold mb-4 text-secondary-500 group-hover:text-primary-600 transition-colors duration-300">
                  {value.title}
                </h3>
                <p className="text-neutral-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary-700 to-primary-800 text-white">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Transform Your Operations?
          </h2>
          <p className="text-lg mb-8 opacity-90">
            Join the leading financial institutions that have already achieved remarkable efficiency gains with our automation solutions.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-accent-500 text-white font-bold text-lg py-4 px-8 rounded-full hover:bg-accent-600 transition-colors duration-300 shadow-medium hover:shadow-large"
            >
              Get Started Today
            </Link>
            <Link 
              href="/case-studies" 
              className="border-2 border-white/30 text-white font-semibold text-lg py-4 px-8 rounded-full hover:bg-white/10 transition-all duration-300"
            >
              View Case Studies
            </Link>
          </div>
        </div>
      </section>

      {/* Chatbot Integration */}
      <div className="fixed bottom-6 right-6 z-50">
        <N8nChat />
      </div>
    </main>
  );
}