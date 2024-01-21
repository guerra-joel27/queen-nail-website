import Hero from "../components/Hero";
import Navbar from "../components/Navbar"
import PopularServices from "../components/PopularServices";
import CarImg from "../assets/12.jpg"
import Card from "../components/Card"
import Footer from "../components/Footer"

// Display the navbar
// populate the hero class with detailed info
function Home (){
    return(
        <>
        <Navbar/>

        <Hero 
        cName="hero" 
        heroImg={CarImg} 
        title="WELCOME TO QUEEN'S NAILS"
        text="The best Nailshop in Kaufman County"
        buttonText="Go to book Database Management"
        url="/bookhome"
        btnClass="show"/>

        <PopularServices/>

        <Card/>

        <Footer/>
        </>
    );
}

export default Home;