import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Lottie from "lottie-react";

const lottie404Url = "https://assets2.lottiefiles.com/packages/lf20_qp1q7mct.json";

export default function PageNotFound() {
  const [animationData, setAnimationData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    fetch(lottie404Url)
      .then((res) => res.json())
      .then((data) => {
        setAnimationData(data);
        setLoading(false);
      })
      .catch(() => {
        setError(true);
        setLoading(false);
      });
  }, []);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white p-4">
      <div className="w-64 md:w-80">
        {loading && <div className="text-gray-400 text-center">Loading animation...</div>}
        {error && <div className="text-red-500 text-center">Failed to load animation</div>}
        {animationData && <Lottie animationData={animationData} loop={true} />}
      </div>
      <h1 className="text-5xl font-bold mt-2 mb-2 text-gray-800">404</h1>
      <h2 className="text-2xl font-semibold mb-2 text-gray-700">Look like you're lost</h2>
      <p className="text-gray-500 mb-6 text-center">the page you are looking for is not available!</p>
      <Link to="/" className="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-6 rounded-full transition">
        Go to Home
      </Link>
    </div>
  );
}









// import React from "react";

// const PageNotFound = () => {
//     const styles = {
//         container: {
//             display: "flex",
//             flexDirection: "column",
//             justifyContent: "center",
//             alignItems: "center",
//             height: "100vh",
//             backgroundColor: "#f8f9fa",
//             textAlign: "center",
//             animation: "fadeIn 1.5s ease-in-out",
//         },
//         heading: {
//             fontSize: "6rem",
//             color: "#54B435",
//             margin: "0",
//             animation: "bounce 1.5s infinite",
//         },
//         subheading: {
//             fontSize: "1.5rem",
//             color: "#6c757d",
//             marginTop: "1rem",
//         },
//         button: {
//             marginTop: "2rem",
//             padding: "0.75rem 1.5rem",
//             fontSize: "1rem",
//             color: "#fff",
//             backgroundColor: "black",
//             border: "none",
//             borderRadius: "5px",
//             cursor: "pointer",
//             transition: "background-color 0.3s ease",
//         },
//         buttonHover: {
//             backgroundColor: "#54B435",
//         },
//         "@keyframes fadeIn": {
//             from: { opacity: 0 },
//             to: { opacity: 1 },
//         },
//         "@keyframes bounce": {
//             "0%, 20%, 50%, 80%, 100%": { transform: "translateY(0)" },
//             "40%": { transform: "translateY(-30px)" },
//             "60%": { transform: "translateY(-15px)" },
//         },
//     };

//     const handleMouseEnter = (e) => {
//         e.target.style.backgroundColor = styles.buttonHover.backgroundColor;
//     };

//     const handleMouseLeave = (e) => {
//         e.target.style.backgroundColor = styles.button.backgroundColor;
//     };

//     return (
//         <div style={styles.container}>
//             <h1 style={styles.heading}>404</h1>
//             <p style={styles.subheading}>Oops! The page you're looking for doesn't exist.
//                 <br />
//                 Or 
//                 <br />
//                 Our developers Are lazy and haven't built it yet.
//             </p>
//             <button
//                 style={styles.button}
//                 onMouseEnter={handleMouseEnter}
//                 onMouseLeave={handleMouseLeave}
//                 onClick={() => (window.location.href = "/")}
//             >
//                 Go Back Home
//             </button>
//         </div>
//     );
// };

// export default PageNotFound;
