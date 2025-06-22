import { Link } from "react-router-dom";
import { FaUsers, FaShieldAlt, FaClock, FaStar, FaCheckCircle, FaArrowRight } from "react-icons/fa";

 function LandingPage() {
  return (
    <div className="min-h-screen bg-white pt-16">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-green-50 to-white pt-20 pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Find Trusted
                  <span className="text-[#54B435] block">Workers</span>
                  <span className="text-gray-600 text-3xl lg:text-4xl">Near You</span>
                </h1>
                <p className="text-xl text-gray-600 leading-relaxed">
                  Connect with verified professionals for all your home services. 
                  From cleaning to repairs, painting to electrical work - we've got you covered.
                </p>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  to="/signup"
                  className="bg-[#54B435] text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-green-600 transition duration-300 flex items-center justify-center group"
                >
                  Get Started
                  <FaArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  to="/login"
                  className="border-2 border-[#54B435] text-[#54B435] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-[#54B435] hover:text-white transition duration-300 flex items-center justify-center"
                >
                  Sign In
                </Link>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-3 gap-6 pt-8">
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#54B435]">1000+</div>
                  <div className="text-gray-600">Verified Workers</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#54B435]">50+</div>
                  <div className="text-gray-600">Services</div>
                </div>
                <div className="text-center">
                  <div className="text-3xl font-bold text-[#54B435]">24/7</div>
                  <div className="text-gray-600">Support</div>
                </div>
              </div>
            </div>

            {/* Right Image */}
            <div className="relative">
              <div className="bg-[#54B435] rounded-2xl p-8 text-white">
                <img
                  src="https://img.freepik.com/free-photo/happy-handyman-with-drill_23-2149571370.jpg"
                  alt="Professional Worker"
                  className="w-full h-96 object-cover rounded-xl"
                />
                <div className="mt-6 space-y-3">
                  <div className="flex items-center space-x-2">
                    <FaStar className="text-yellow-300" />
                    <span className="font-semibold">4.8/5 Rating</span>
                  </div>
                  <p className="text-green-100">"Amazing service! The worker was professional and completed the job perfectly."</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Why Choose Worker360?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              We connect you with the best professionals in your area, ensuring quality service every time.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition duration-300 text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaShieldAlt className="text-[#54B435] text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Verified Workers</h3>
              <p className="text-gray-600">
                All workers are background verified and skill-tested for your safety.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition duration-300 text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaClock className="text-[#54B435] text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Quick Service</h3>
              <p className="text-gray-600">
                Get connected with workers within minutes, not hours or days.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition duration-300 text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaUsers className="text-[#54B435] text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Wide Network</h3>
              <p className="text-gray-600">
                Access to thousands of skilled professionals across multiple categories.
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-sm hover:shadow-md transition duration-300 text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <FaCheckCircle className="text-[#54B435] text-2xl" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Quality Guarantee</h3>
              <p className="text-gray-600">
                Satisfaction guaranteed or we'll make it right, no questions asked.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Popular Services
            </h2>
            <p className="text-xl text-gray-600">
              From home maintenance to professional services, we've got everything you need.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Home Cleaning",
                description: "Professional cleaning services for your home",
                image: "https://img.freepik.com/free-photo/cleaning-woman-sanitizing-window_23-2148999939.jpg",
                price: "From ₹299"
              },
              {
                title: "Plumbing & Repairs",
                description: "Expert plumbing and repair services",
                image: "https://img.freepik.com/free-photo/man-checking-pipes_23-2149376307.jpg",
                price: "From ₹399"
              },
              {
                title: "Painting Services",
                description: "Interior and exterior painting solutions",
                image: "https://img.freepik.com/free-photo/young-man-decorating-wall-paint_23-2149371391.jpg",
                price: "From ₹999"
              }
            ].map((service, index) => (
              <div key={index} className="bg-white rounded-xl shadow-sm hover:shadow-lg transition duration-300 overflow-hidden">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-600 mb-4">{service.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-[#54B435] font-semibold">{service.price}</span>
                    <Link
                      to="/signup"
                      className="bg-[#54B435] text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-green-600 transition duration-300"
                    >
                      Book Now
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-[#54B435]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-green-100 mb-8">
            Join thousands of satisfied customers who trust Worker360 for their home services.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/signup"
              className="bg-white text-[#54B435] px-8 py-4 rounded-lg font-semibold text-lg hover:bg-gray-100 transition duration-300"
            >
              Sign Up Now
            </Link>
            <Link
              to="/login"
              className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold text-lg hover:bg-white hover:text-[#54B435] transition duration-300"
            >
              Already have an account?
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
} 

export default LandingPage;