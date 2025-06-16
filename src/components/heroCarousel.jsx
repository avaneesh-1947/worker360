import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

export default function Hero() {
  return (
    <div className="bg-white min-h-screen px-4 sm:px-8 mt-15">
      <div className="max-w-7xl mx-auto">
        {/* Search */}
        <div className="flex justify-between items-center py-6">
          <input
            type="text"
            placeholder="Search..."
            className="w-full bg-gray-100 px-4 py-3 rounded-md text-base"
          />
          <button className="ml-4 text-gray-600">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path d="M12 8v4m0 4h.01M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>

        {/* Special Offer */}
        <div>

         <Carousel
  autoPlay
  interval={3000}
  infiniteLoop
  showStatus={false}
  showThumbs={false}
  showArrows={false}
  stopOnHover={false}
>
  <div className="bg-[#54B435] text-white rounded-xl p-6 min-h-[300px] lg:min-h-[400px] flex flex-col lg:flex-row items-center justify-between">
    <div className="lg:w-1/2">
      <h3 className="text-5xl font-extrabold">40%</h3>
      <p className="text-2xl font-medium mt-2">Today’s Special Offer</p>
      <p className="text-base mt-1">Get discount for every order, only valid for today</p>
    </div>
    <div className="lg:w-1/2 mt-6 lg:mt-0">
      <img
        src="https://img.freepik.com/free-photo/happy-handyman-with-drill_23-2149571370.jpg"
        alt="Offer"
        className="rounded-lg h-64 lg:h-80 w-full object-cover"
      />
    </div>
  </div>

   {/* slide2  */}

     <div className="bg-[#54B435] text-white rounded-xl p-6 min-h-[300px] lg:min-h-[400px] flex flex-col lg:flex-row items-center justify-between">
    <div className="lg:w-1/2">
      <h3 className="text-5xl font-extrabold">Flat ₹150 OFF</h3>
      <p className="text-2xl font-medium mt-2">Weekend Cleaning Deal</p>
      <p className="text-base mt-1">Book a cleaning expert this weekend and get flat ₹150 off.</p>
    </div>
    <div className="lg:w-1/2 mt-6 lg:mt-0">
      <img
        src="https://img.freepik.com/free-photo/cleaning-woman-sanitizing-window_23-2148999939.jpg"
        alt="Cleaning Service"
        className="rounded-lg h-64 lg:h-80 w-full object-cover"
      />
    </div>
  </div>

{/* slide3  */}

   <div className="bg-[#54B435] text-white rounded-xl p-6 min-h-[300px] lg:min-h-[400px] flex flex-col lg:flex-row items-center justify-between">
    <div className="lg:w-1/2">
      <h3 className="text-5xl font-extrabold">Verified Workers</h3>
      <p className="text-2xl font-medium mt-2">Trusted & Skilled Professionals</p>
      <p className="text-base mt-1">Hire from 1000+ verified professionals in your city.</p>
    </div>
    <div className="lg:w-1/2 mt-6 lg:mt-0">
      <img
        src="https://img.freepik.com/free-photo/young-man-using-paint-roller_23-2149371391.jpg"
        alt="Painter"
        className="rounded-lg h-64 lg:h-80 w-full object-cover"
      />
    </div>
  </div>

  {/* Add more slides as needed */}
</Carousel>


        </div>

        {/* Categories */}
        <div className="mt-10">
          <h2 className="text-2xl md:text-3xl  mb-4">Categories</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-center text-sm">
            {[
              { label: 'Cleaning', icon: '🧹' },
              { label: 'Repairing', icon: '🔨' },
              { label: 'Painting', icon: '🖌️' },
              { label: 'More', icon: '➕' },
            ].map((cat) => (
              <div key={cat.label} className="bg-[#f0fdf4] p-5 rounded-lg shadow hover:shadow-md transition">
                <div className="text-3xl mb-2">{cat.icon}</div>
                <div className="font-medium">{cat.label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Popular Services */}
        <div className="mt-10">
          <div className="flex justify-between items-center mb-4">
             <h2 className="text-2xl md:text-3xl  mb-4">Popular Services</h2>
            <a href="#" className="text-[#54B435] text-sm font-medium hover:underline">
              View All
            </a>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {[
              "https://img.freepik.com/free-photo/cleaning-woman-sanitizing-window_23-2148999939.jpg",
              "https://img.freepik.com/free-photo/man-checking-pipes_23-2149376307.jpg",
              "https://img.freepik.com/free-photo/young-man-decorating-wall-paint_23-2149371391.jpg",
              "https://img.freepik.com/free-photo/professional-electrician-fixing-light_23-2149242941.jpg"
            ].map((src, i) => (
              <div key={i} className="rounded-lg overflow-hidden shadow-md hover:shadow-lg transition">
                <img
                  src={src}
                  alt={`Service ${i}`}
                  className="w-full h-44 object-cover"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
