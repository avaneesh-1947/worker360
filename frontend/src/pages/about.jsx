export default function AboutUs() {
  return (
    <div className="bg-white min-h-screen py-12 px-6 lg:px-20 mt-10">
      {/* Hero Section */}
      <section className="text-center mb-16">
        <h1 className="text-4xl lg:text-5xl font-bold mb-4 text-[#54B435]">
          About <span className="text-black">Worker</span>360
        </h1>
        <p className="text-gray-600 text-lg max-w-2xl mx-auto">
          We connect you to verified, skilled local workers — electricians, plumbers, painters, and more. Fast, trusted, and budget-friendly services.
        </p>
      </section>

      {/* Who We Are */}
      <section className="grid md:grid-cols-2 gap-10 items-center mb-20">
        <img
          src="https://img.freepik.com/free-photo/young-happy-builder-man-wearing-helmet-uniform-standing-with-tools-belt-isolated-orange-wall_141793-57855.jpg"
          alt="Workers"
          className="rounded-lg w-full object-cover h-72 lg:h-96"
        />
        <div>
          <h2 className="text-3xl font-semibold text-[#54B435] mb-4">Who We Are</h2>
          <p className="text-gray-700 leading-relaxed">
            Worker360 is a platform built for trust. We aim to empower local workers while making it easier for customers to hire the right people for the right job — on time, every time.
          </p>
        </div>
      </section>

      {/* How We Work */}
      <section className="mb-20">
        <h2 className="text-3xl font-semibold text-[#54B435] mb-6 text-center">How We Work</h2>
        <div className="grid md:grid-cols-3 gap-6 text-center">
          <div className="p-4 border rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-2">1. Post Your Need</h3>
            <p className="text-gray-600 text-sm">Tell us what service you need – electrician, plumber, cleaner, etc.</p>
          </div>
          <div className="p-4 border rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-2">2. Get Matched</h3>
            <p className="text-gray-600 text-sm">We connect you instantly to nearby, verified workers available to help.</p>
          </div>
          <div className="p-4 border rounded-lg shadow-sm">
            <h3 className="text-xl font-bold mb-2">3. Hire & Relax</h3>
            <p className="text-gray-600 text-sm">Book, schedule and pay — all from your phone. Track and rate service easily.</p>
          </div>
        </div>
      </section>

      {/* Security Section */}
      <section className="bg-[#54B435] text-white rounded-xl py-10 px-6 lg:px-12 mb-20">
        <h2 className="text-3xl font-semibold text-center mb-6">How We Ensure Your Safety</h2>
        <div className="grid md:grid-cols-3 gap-6 text-center text-sm">
          <div>
            <h3 className="text-xl font-bold mb-2">🔐 Verified Profiles</h3>
            <p>All workers undergo ID checks, skill assessments and background verification.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">🛡 Secure Payments</h3>
            <p>Your transactions are safe, and payment is only released after job completion.</p>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-2">📞 Live Support</h3>
            <p>Our team is always on standby for conflict resolution or emergency support.</p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mb-20 text-center max-w-4xl mx-auto">
        <h2 className="text-3xl font-semibold text-[#54B435] mb-4">Our Mission</h2>
        <p className="text-gray-700 text-md leading-relaxed">
          To create equal job opportunities for skilled workers across India while delivering fast, affordable and trustworthy services to households and businesses. We believe in empowering local talent through technology.
        </p>
      </section>

      {/* Our Impact */}
      <section className="mb-10 text-center">
        <h2 className="text-3xl font-semibold text-[#54B435] mb-6">Our Impact</h2>
        <div className="flex flex-wrap justify-center gap-8 text-center text-[#54B435] font-bold text-xl">
          <div>
            <p className="text-3xl">10,000+</p>
            <span className="text-gray-600 text-sm">Workers Registered</span>
          </div>
          <div>
            <p className="text-3xl">50,000+</p>
            <span className="text-gray-600 text-sm">Jobs Completed</span>
          </div>
          <div>
            <p className="text-3xl">500+</p>
            <span className="text-gray-600 text-sm">Cities Covered</span>
          </div>
        </div>
      </section>
    </div>
  );
}
