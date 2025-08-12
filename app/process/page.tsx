export default function ProcessPage() {
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

  return (
    <main className="min-h-screen bg-dark-900 text-white">
      {/* Hero Section */}
      <section className="py-24 md:py-32">
        <div className="container mx-auto px-4 text-center max-w-4xl">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Our Structured 5-Phase Process
          </h1>
          <p className="text-lg md:text-xl mb-8 text-text-secondary max-w-3xl mx-auto">
            We ensure high-quality, sustainable results through a proven methodology that has delivered success for leading financial institutions.
          </p>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-dark-900">
        <div className="container mx-auto px-4 max-w-6xl">
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
    </main>
  );
}
