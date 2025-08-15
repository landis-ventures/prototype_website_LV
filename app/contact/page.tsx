export default function ContactPage() {
    return (
      <main className="min-h-screen bg-dark-900 text-white">
        <div className="container mx-auto px-4 py-20">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-16">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">Contact Us</h1>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                Ready to transform your operations? Let's discuss how we can help you achieve new levels of efficiency and profitability.
              </p>
            </div>
            
            <div className="bg-content-box-900 p-8 rounded-2xl border border-border/20">
              <form
                action="https://formspree.io/f/xldlznep"
                method="POST"
                className="space-y-6"
              >

                {/* Row 1: First Name, Last Name */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="firstName" className="block text-sm font-medium mb-2">First Name *</label>
                    <input
                      id="firstName"
                      type="text"
                      name="firstName"
                      className="w-full px-4 py-3 bg-dark-800 border border-border rounded-lg text-white placeholder-text-muted focus:border-primary-500 focus:outline-none transition-colors"
                      placeholder="Enter your first name"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="lastName" className="block text-sm font-medium mb-2">Last Name *</label>
                    <input
                      id="lastName"
                      type="text"
                      name="lastName"
                      className="w-full px-4 py-3 bg-dark-800 border border-border rounded-lg text-white placeholder-text-muted focus:border-primary-500 focus:outline-none transition-colors"
                      placeholder="Enter your last name"
                      required
                    />
                  </div>
                </div>

                {/* Row 2: Email, Phone Number */}
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-2">Email *</label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      className="w-full px-4 py-3 bg-dark-800 border border-border rounded-lg text-white placeholder-text-muted focus:border-primary-500 focus:outline-none transition-colors"
                      placeholder="your.email@company.com"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium mb-2">Phone Number (Optional)</label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      className="w-full px-4 py-3 bg-dark-800 border border-border rounded-lg text-white placeholder-text-muted focus:border-primary-500 focus:outline-none transition-colors"
                      placeholder="(555) 123-4567"
                    />
                  </div>
                </div>

                {/* Row 3: Project Details */}
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">Project Details *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    className="w-full px-4 py-3 bg-dark-800 border border-border rounded-lg text-white placeholder-text-muted focus:border-primary-500 focus:outline-none transition-colors resize-none"
                    placeholder="Tell us about your current challenges and automation goals..."
                    required
                  ></textarea>
                </div>

                <button type="submit" className="w-full bg-gradient-to-r from-primary-500 to-primary-400 text-white font-bold py-4 px-8 rounded-full shadow-lg hover:shadow-xl hover:-translate-y-1 hover:scale-105 transition-all duration-300">
                  Send Message
                </button>
              </form>
            </div>
            
            {/* Contact Info */}
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <div className="text-center">
                <div className="text-2xl mb-2">📧</div>
                <h3 className="font-bold mb-2">Email Us</h3>
                <p className="text-primary-400">info@landisventures.com</p>
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
        </div>
      </main>
    );
  }