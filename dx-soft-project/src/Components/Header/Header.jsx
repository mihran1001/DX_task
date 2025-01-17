import "./Header.css";
import hero from "../../images/heroimage.png"
import rectangle from "../../images/rectangle.png"
import smallcard from "../../images/smallcard.png"
import bigcard from "../../images/bigcard.png"
import card1 from "../../images/card1.png"
import card2 from "../../images/card2.png"
import card3 from "../../images/card3.png"
function Header() {
    return (
        
    <section className="section_one">
        <div className="header">
            <div className="menu">
                <span className="logo">BrandName</span>
                <ul className="menu_list">
                    <li>Home</li>
                    <li>Product</li>
                    <li>Pricing</li>
                    <li>Contact</li>
                </ul>
            </div>
            <div className="right_side_menu">
                <ul className="right_side_menu_list">
                    <li>Login</li>
                </ul>
                <button>JOIN US <i class="fa-solid fa-arrow-right"></i></button>
                <img src={rectangle} alt="rectangle" className="forimage2"/>
                <img src={hero} alt="hero" className="forimage"/>
                <img src={smallcard} alt="smallcard" className="forimage3"/>
                <img src={bigcard} alt="bigcard" className="forimage4"/>
            </div>
            
        </div>

        <div className="backGround"> 
                <div className="text1">Online training</div>
                <div className="text2">25K+ STUDENTS <br></br>TRUST US</div>
                <div className="text3">We know how large objects will act, 
                <br></br>but things on a small scale</div>
                <button className="secondbutton">Join us</button>
                <button className="thirdbutton">Learn More</button>
        </div>
        
        <ul className="container">
                  
                    <li className="box"></li>
                    <li className="box"></li>
                    <li className="box"></li>
                </ul>


    </section>
    );
}

export default Header;