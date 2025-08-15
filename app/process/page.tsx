import { Briefcase, Bot, Code, Rocket, Wrench } from 'lucide-react';

export default function ProcessPage() {
  const processSteps = [
    {
      icon: <Briefcase size={28} />,
      title: "Discovery & Analysis",
      description: "We start by deeply understanding your business objectives, operational challenges, and defining key success metrics to ensure a tangible ROI."
    },
    {
      icon: <Bot size={28} />,
      title: "Solution Design",
      description: "Our team designs a custom automation blueprint, mapping out workflows and system integrations tailored to your specific needs."
    },
    {
      icon: <Code size={28} />,
      title: "Development & Testing",
      description: "We build your intelligent automation solution, followed by rigorous testing and User Acceptance Testing (UAT) to guarantee flawless performance."
    },
    {
      icon: <Rocket size={28} />,
      title: "Deployment & Launch",
      description: "We handle the seamless transition to your live production environment, including comprehensive training for your team."
    },
    {
      icon: <Wrench size={28} />,
      title: "Support & Maintenance",
      description: "Our commitment doesn't end at launch. We provide ongoing support and maintenance to ensure long-term reliability and success."
    }
  ];

  return (
    <main className="min-h-screen bg-dark-900 text-white">
      {/* Hero Section */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Our Proven Path to Success
          </h1>
          <p className="text-lg md:text-xl mb-8 text-text-secondary max-w-3xl mx-auto">
            We follow a structured 5-phase methodology to deliver high-quality, sustainable automation solutions that drive measurable growth for leading financial institutions.
          </p>
        </div>
      </section>

      {/* Process Timeline Section */}
      <section className="py-5">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="relative">
            {/* The vertical timeline bar */}
            <div className="absolute left-1/2 top-0 h-full w-0.5 bg-border/40 -translate-x-1/2"></div>

            {processSteps.map((step, index) => (
              <div key={index} className={`relative mb-12 flex w-full items-center ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                {/* The card containing the content */}
                <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8' : 'pl-8'}`}>
                  <div className="bg-dark-800 p-6 rounded-lg border border-border/20 shadow-lg">
                    <div className="flex items-center gap-4 mb-3">
                      <div className="w-12 h-12 bg-primary-500/10 border border-primary-500/30 rounded-full flex items-center justify-center text-primary-400">
                        {step.icon}
                      </div>
                      <h3 className="text-xl font-bold">{step.title}</h3>
                    </div>
                    <p className="text-text-secondary">{step.description}</p>
                  </div>
                </div>
                
                {/* The dot on the timeline */}
                <div className="absolute left-1/2 top-1/2 w-4 h-4 bg-primary-500 rounded-full -translate-x-1/2 -translate-y-1/2 border-4 border-dark-900"></div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}