import "./CardStyles.css"
import CardTemplate from "./CardTemplate";
import CardImg1 from "../assets/5.jpg";
import CardImg2 from "../assets/8.jpg";
import CardImg3 from "../assets/6.jpg";


function Card(){
    return(
        <div className="card">
            <h1>Card Display</h1>
            <p>FILLER TEXT</p>

            <div className="card1">
                <CardTemplate
                image={CardImg1}
                heading="Card1"
                text="Card1"
                />

                <CardTemplate
                image={CardImg2}
                heading="Card2"
                text="Card2 Text"
                />

                <CardTemplate
                image={CardImg3}
                heading="Card3"
                text="Card3 Text"
                />
            </div>
        </div>
    )
}

export default Card;