import Hero from "../components/Hero";
import Navbar from "../components/Navbar"
import LanternImg from "../assets/night.jpg"
import Footer from "../components/Footer"
import Card from "../components/Card"

function Service (){
    return(
        <>
        <Navbar/>
        <Hero 
        cName="hero-mid" 
        heroImg={LanternImg} 
        title="OUR SERVICES"
        text="Services that we offers"
        btnClass="hide"/>
        <Card/>
        <Footer/>
        
        </>
    );
}

export default Service;