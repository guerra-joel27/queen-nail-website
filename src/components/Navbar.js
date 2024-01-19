import {Component} from "react";
import "./NavbarStyles.css";
import { MenuItems } from "./MenuItems";

//Link is a react component that allow pages to linked together (click event)
import {Link} from "react-router-dom"


//Component is a section of the webpage, this one is for the Navbar
//Allow modular design, each have it own state, props and lifecycle
//Nav bar is fixed and will not move when user scroll
class Navbar extends Component{
    
    //a function to handle the click state after user clicked, false to true
    state = {clicked: false};
    handleClick = () =>{
        this.setState({clicked: !this.state.clicked})
    }

    // In this render method, it will display the navbar with the given tag
    // This method is dynamic, take data from MenuItems.js and access it through this function
        // MenuItems.map((item,index)=>{})
        // it will dynamicly access array data through item.<what you want>
    // In the <div className="menu-icons">, we apply responsive mobile design
        //basically a if else statement that switch icons 
        //call handleClick function to change state
    // GO TO MENUITEMS.JS TO ACCESS AND CHANGE THESE ITEM
    // GO TO NAVBARSTYLES.CSS TO ACCESS THE STYLING 
    render(){
        return(
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Queen's Nails</h1>

                <div className="menu-icons" onClick={this.handleClick}>
                    <i className={this.state.clicked ? "fas fa-times": "fas fa-bars"}></i>
                </div>

                <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
                    {MenuItems.map((item,index) =>{
                        return(
                            <li key={index}>
                                <Link className={item.cName} to={item.url}>
                                    <i className={item.icon}></i>
                                    {item.title}
                                </Link>
                            </li>
                        )
                    })}
                    <button>Request an Appointment</button>
                </ul>
            </nav>   
        )
    }
}

//allow other file to export this component
export default Navbar;