import { BrowserRouter, Routes, Route } from "react-router-dom";
import WorkerSignUp from "./pages/addWorker";
import Home from "./pages/home";
import SignIn from "./pages/login";
import SignUp from "./pages/signup";
import Footer from "./components/footer";
import PageNotFound from "./components/pageNotfound";
import Navbar from "./components/navbar";
import PrivateComp from "./components/privateComp";
import LandingPage from "./components/landingPage";
import HireWorker from "./components/hireWorker";
// import WorkerLogin from "./pages/loginWorker";
import WorkerDashboard from "./components/workerDashboard";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


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
            <Route path="/hire" element={<HireWorker />} />
            <Route path="/workerDashboard" element={<WorkerDashboard />} />
           
          </Route>
          <Route path="/landingPage" element={<LandingPage />} />
          <Route path="/signup" element={<SignUp />} />
          {/* <Route path="/workerLogin" element={<WorkerLogin />} /> */}
         <Route path="/login" element={<SignIn />} />
         <Route path= "*" element={<PageNotFound />} />
         
         
         
         
        </Routes> 
<Footer/>
<ToastContainer autoClose={2000} />
   

        
          </BrowserRouter>     
    </>
  );
}

export default App;
