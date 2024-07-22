import './header.style.css'

export const Header = () => {
    return (
        <div className="top">               
        <div className="column-one">
            <h1>Hi, I am Natasa,<br/> Creative technologist</h1>
            <p className="top-text">I am deeply passionate about programming, driven by a relentless curiosity and a genuine love for creating solutions through code.
            </p>
        </div>    
        <div className="column-two">
            <img className="profile-photo" src="https://thumbs.dreamstime.com/b/beautiful-smiling-woman-portait-beauty-face-115726247.jpg" alt="profile photo" />
        </div>
    </div>  
    )
}