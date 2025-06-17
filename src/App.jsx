import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUp from "./pages/signup";
import Home from "./pages/home";
import SignIn from "./pages/login";

import Footer from "./components/footer";
import PageNotFound from "./components/pageNotfound";
import Navbar from "./components/navbar";


function App() {
  return (
    <>
     
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/signup" element={<SignUp />} />
         <Route path="/signin" element={<SignIn />} />
         <Route path="/" element={<Home />} />
         <Route path="/about" element={<Home />} />
         <Route path= "*" element={<PageNotFound />} />
         
         
         
        </Routes> 
<Footer/>
   

        
          </BrowserRouter>     
    </>
  );
}

export default App;
