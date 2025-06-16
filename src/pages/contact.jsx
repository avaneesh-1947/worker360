export default function ContactUs() {
  return (
    <div className="min-h-screen bg-white py-12 px-6 lg:px-20 mt-15">
      {/* Heading */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#54B435]">
          Contact <span className="text-black">Worker</span>360
        </h1>
        <p className="text-gray-600 mt-2">
          We’re here to help. Reach out with any questions or feedback.
        </p>
      </section>

      {/* Contact Section */}
      <div className="grid md:grid-cols-2 gap-10">
        {/* Form */}
        <form className="bg-gray-100 p-8 rounded-lg shadow-md">
          <div className="mb-4">
            <label className="block mb-1 text-gray-700 font-medium">Name</label>
            <input
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#54B435]"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 text-gray-700 font-medium">Email</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#54B435]"
            />
          </div>

          <div className="mb-4">
            <label className="block mb-1 text-gray-700 font-medium">Message</label>
            <textarea
              rows="5"
              placeholder="Type your message..."
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-[#54B435]"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-[#54B435] hover:bg-[#3e9228] text-white font-semibold py-2 px-6 rounded-md"
          >
            Send Message
          </button>
        </form>

        {/* Contact Info */}
        <div className="flex flex-col justify-center bg-[#54B435] text-white p-8 rounded-lg shadow-md space-y-6">
          <div>
            <h3 className="text-xl font-semibold mb-2">Call Us</h3>
            <p className="text-white/90">📞 +91 98765 43210</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Email Us</h3>
            <p className="text-white/90">✉️ support@worker360.in</p>
          </div>
          <div>
            <h3 className="text-xl font-semibold mb-2">Visit Us</h3>
            <p className="text-white/90">📍 Gomti Nagar, Lucknow, UP, India</p>
          </div>
        </div>
      </div>
    </div>
  );
}
