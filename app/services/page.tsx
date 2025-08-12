import Link from 'next/link';

export default function ServicesPage() {
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
    <main className="container mx-auto px-4 py-8">
      <h1 className="text-3xl md:text-4xl font-bold mb-6 text-blue-900">Our Services</h1>
      <p className="text-lg text-gray-600 mb-8">
        We offer a range of intelligent automation services designed to solve complex operational challenges and drive measurable growth for financial services firms.
      </p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {services.map((service, index) => (
          <div key={index} className="bg-gray-100 p-6 rounded-lg shadow-sm border border-gray-200">
            <h2 className="text-xl font-semibold mb-2 text-blue-800">{service.title}</h2>
            <p className="text-gray-600">{service.description}</p>
          </div>
        ))}
      </div>
      <div className="text-center mt-12">
        <Link href="/contact" className="inline-block bg-blue-600 text-white font-bold py-3 px-8 rounded-full shadow-lg hover:bg-blue-700 transition-colors duration-300">
          Get a Free Consultation
        </Link>
      </div>
    </main>
  );
}