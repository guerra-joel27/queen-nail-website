import "./PopularServicesStyles.css"
import {Component} from "react";


/*create a class template to populate PopularServices*/
class PopularServicesData extends Component{
    /*Once again, using props from Components, pass in data and populate this template*/ 
    render(){
        return(
            <div className={this.props.className}>
            <div className="first-service-desc-text">
                <h2>{this.props.heading}</h2>
                <p>{this.props.text}</p>
            </div>
        
            <div className="image">
                <img alt="img" src={this.props.img1}/>
                <img alt="img" src={this.props.img2}/>
            </div>
            </div> 
        )
    }
}

export default PopularServicesData;

