export default function AboutPage() {
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
      <section className="py-24 md:py-32">
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
          
          <div className="grid md:grid-cols-5 gap-6">
            {values.map((value, index) => (
              <div 
                key={index} 
                className="bg-content-box-900 p-6 rounded-xl text-center border border-border/20 hover:border-primary-500/30 transition-all duration-300"
              >
                <h3 className="font-bold text-lg">{value}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20 bg-dark-900">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Why Choose Landis Ventures?</h2>
            <p className="text-lg text-text-secondary max-w-3xl mx-auto">
              We bring deep expertise in financial services automation, proven methodologies, and a track record of delivering measurable results.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-content-box-900 p-8 rounded-xl border border-border/20">
              <h3 className="text-xl font-bold mb-4 text-white">Financial Services Expertise</h3>
              <p className="text-text-secondary">
                Deep understanding of financial operations, compliance requirements, and industry-specific challenges.
              </p>
            </div>
            <div className="bg-content-box-900 p-8 rounded-xl border border-border/20">
              <h3 className="text-xl font-bold mb-4 text-white">Proven Methodologies</h3>
              <p className="text-text-secondary">
                Structured 5-phase process that ensures high-quality, sustainable automation solutions.
              </p>
            </div>
            <div className="bg-content-box-900 p-8 rounded-xl border border-border/20">
              <h3 className="text-xl font-bold mb-4 text-white">Measurable Results</h3>
              <p className="text-text-secondary">
                Focus on delivering clear, quantifiable business value and ROI for every project.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}