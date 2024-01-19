// Hero components is a major components in react
// showcase visual style and call to action
import "./HeroStyles.css"


// for image, you can also link to online source using img address
// props (properties) allow data passing from parent components to child
    // this is the core idea of dynamic websites, allow you to reuse code
//GO TO ROUTES/HOME.JS FOR THE DETAILS IMPLEMENTAION
function Hero(props){
    return(
        <>
            <div className={props.cName}>
                <img alt="HeroImg" src={props.heroImg}/>
                <div className="hero-text">
                    <h1>{props.title}</h1>
                    <p>{props.text}</p>
                    <a href={props.url} className={props.btnClass}>{props.buttonText}</a>
                </div>

            </div>
        </>
    );
}

export default Hero;