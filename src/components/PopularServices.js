import "./PopularServicesStyles.css"
import ServiceOne from "../assets/1.jpg"
import ServiceTwo from "../assets/2.jpg"
import ServiceThree from "../assets/5.jpg"
import ServiceFour from "../assets/8.jpg"
import PopularServicesData from "./PopularServicesData"

/*TO ACCESS THE TEMPLATE OF POPULARSERVICES, GO TO POPULARSERVICESDATA.JS , THIS IS DATA PASSING*/
const PopularServices=()=>{
    return(
       <div className="popularServices">
        <h1>POPULAR SERVICES</h1>
        <p>The most popular service at our shop</p>

        <PopularServicesData
        className="first-service"
        heading="Service One"
        text="Service One Description"
        img1={ServiceOne}
        img2={ServiceTwo}
        />

        <PopularServicesData
        className="second-service"
        heading="Service Two"
        text="Service Two Description."
        img1={ServiceThree}
        img2={ServiceFour}
        />
        </div>
    )
}

export default PopularServices