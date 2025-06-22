import { BrowserRouter, Routes, Route } from "react-router-dom";
import WorkerSignUp from "./pages/addWorker";
import Home from "./pages/home";
import SignIn from "./pages/login";
import SignUp from "./pages/signup";
import Footer from "./components/footer";
import PageNotFound from "./components/pageNotfound";
import Navbar from "./components/navbar";
import PrivateComp from "./components/privateComp";


function App() {
  return (
    <>
     
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route element={<PrivateComp />}>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<Home />} />
            <Route path="/addWorker" element={<WorkerSignUp />} />
          </Route>
          
          <Route path="/signup" element={<SignUp />} />
         <Route path="/signin" element={<SignIn />} />
         <Route path= "*" element={<PageNotFound />} />
         
         
         
        </Routes> 
<Footer/>
   

        
          </BrowserRouter>     
    </>
  );
}

export default App;
