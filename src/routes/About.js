import Hero from "../components/Hero";
import Navbar from "../components/Navbar"
import LanternImg from "../assets/night.jpg"
import Footer from "../components/Footer"
import AboutUs from "../components/AboutUs"
function About (){
    return(
        <>
        <Navbar/>
        <Hero 
        cName="hero-mid" 
        heroImg={LanternImg} 
        title="ABOUT US"
        text="How we got started"
        btnClass="hide"/>
        <AboutUs/>
        <Footer/>
        </>        
    );
}

export default About;