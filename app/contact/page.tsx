export default function ContactPage() {
    return (
      <main className="container p-4">
        <h1 className="text-2xl font-bold mb-4">Contact Us</h1>
        <form
          action="https://formspree.io/f/xldlznep" // <-- MAKE SURE YOUR URL IS HERE
          method="POST"
          className="flex flex-col gap-4 max-w-md"
        >
          <label htmlFor="name">Full Name:</label>
          <input
            id="name"
            type="text"
            name="name"
            className="p-2 border rounded"
            required
          />
  
          <label htmlFor="email">Email:</label>
          <input
            id="email"
            type="email"
            name="email"
            className="p-2 border rounded"
            required
          />
  
          <label htmlFor="phone">Phone Number: (Optional)</label>
          <input
            id="phone"
            type="tel"
            name="phone"
            className="p-2 border rounded"
          />
  
          <label htmlFor="message">Project Details:</label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className="p-2 border rounded"
            required
          ></textarea>
  
          <button type="submit" className="bg-blue-600 text-white p-2 rounded hover:bg-blue-700 w-full">
            Send Message
          </button>
        </form>
      </main>
    );
  }