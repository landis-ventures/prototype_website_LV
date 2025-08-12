import N8nChat from '../components/N8nChat';
import Link from 'next/link';

export default function HomePage() {
  const services = [
    {
      title: "Robotic Process Automation (RPA)",
      description: "Automating repetitive, rule-based tasks within desktop applications, web portals, and legacy systems to improve efficiency and reduce human error."
    },
    {
      title: "Intelligent Document Processing (IDP)",
      description: "Using AI and OCR to automatically capture, extract, and validate data from documents like invoices, forms, and financial statements."
    },
    {
      title: "Data Processing & Reconciliation",
      description: "Building robust automations to aggregate data from multiple sources, perform complex reconciliation, and generate actionable reports for audit and compliance."
    },
    {
      title: "End-to-End Workflow Automation",
      description: "Designing holistic solutions that connect disparate systems and create seamless, autonomous business processes."
    },
  ];

  return (
    <main className="min-h-screen bg-gray-50 antialiased text-gray-800">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-blue-700 to-blue-900 text-white py-24 md:py-32">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-extrabold mb-4 leading-tight">
            Intelligent Automation for Financial Services
          </h1>
          <p className="text-lg md:text-xl mb-8 font-light">
            We unlock new levels of profitability and efficiency by designing and implementing intelligent automation solutions that streamline your operations and drive measurable growth.
          </p>
          <Link href="/contact" className="inline-block bg-white text-blue-800 font-bold text-lg py-3 px-8 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-300">
            Schedule Your Free Consultation
          </Link>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-white">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-900">Our Services</h2>
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12">
            {services.map((service, index) => (
              <div key={index} className="bg-gray-50 p-8 rounded-xl shadow-sm border border-gray-200 hover:shadow-md transition-shadow duration-300">
                <h3 className="text-xl font-semibold mb-3 text-blue-800">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
      
      {/* Values Section */}
      <section id="values" className="py-20 bg-gray-100">
        <div className="container mx-auto px-4 max-w-6xl">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-blue-900">Our Core Values</h2>
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div className="flex flex-col items-center p-6">
              <h3 className="text-xl font-semibold mb-2 text-blue-800">Integrity & Trust</h3>
              <p className="text-gray-600">The foundation of our client relationships is built on unwavering honesty and transparency in every action.</p>
            </div>
            <div className="flex flex-col items-center p-6">
              <h3 className="text-xl font-semibold mb-2 text-blue-800">Value-Driven Precision</h3>
              <p className="text-gray-600">We deliver solutions that provide clear, measurable business value, meticulously built for reliability and impact.</p>
            </div>
            <div className="flex flex-col items-center p-6">
              <h3 className="text-xl font-semibold mb-2 text-blue-800">Strategic Partnership</h3>
              <p className="text-gray-600">We work as an extension of your team, understanding your goals to ensure our solutions drive long-term success.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Chatbot Integration */}
      <N8nChat />
    </main>
  );
}