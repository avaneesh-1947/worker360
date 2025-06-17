import Hero from "../components/heroCarousel"
import Navbar from "../components/navbar"
import AboutUs from "./about"
import ContactUs from "./contact"

const Home = () => {

    return(

        <div>
   <Navbar/>    
   <Hero/>
   <AboutUs/>
   <ContactUs/>

        </div>
    )
}

export default Home;