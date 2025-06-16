import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./pages/signup";
import Navbar from "./components/navbar";
import SignIn from "./pages/login";
import Hero from "./components/heroCarousel";
import Footer from "./components/footer";
import AboutUs from "./pages/about";
import ContactUs from "./pages/contact";

function App() {
  return (
    <>
    
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/signup" element={<SignUp />} />
         <Route path="/signin" element={<SignIn />} />
         <Route path = "/" element={<Hero />} />
         <Route path="/about" element={<AboutUs />} />
         <Route path="/contact" element={<ContactUs />} />
         
        </Routes> 
<Footer/>
   

        
          </BrowserRouter>     
    </>
  );
}

export default App;
