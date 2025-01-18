import "./Header.css";
import hero from "../../images/heroimage.png"
import rectangle from "../../images/rectangle.png"
import smallcard from "../../images/smallcard.png"
import bigcard from "../../images/bigcard.png"
import icon1 from "../../images/icon1.png"
import icon2 from "../../images/icon2.png"
import icon3 from "../../images/icon3.png"
import line1 from "../../images/line1.png"
import line2 from "../../images/line2.png"
import line3 from "../../images/line3.png"
import vector from "../../images/vector.png"

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
                  
                    <li className="box">
                    <img src={icon1}/>
                    <p className="textbold">Evaluation Time</p>
                    <img src={line1}/>
                    <p className="maintext">The gradual accumulation of<br></br>
                        information about atomic and <br></br>
                        small-scale behaviour...</p>
                    </li>

                    <li className="box">
                    <img src={icon2}/>
                    <p className="textbold">Certified Teacher</p>
                    <img src={line2}/>
                    <p className="maintext">The gradual accumulation of<br></br>
                        information about atomic and <br></br>
                        small-scale behaviour...</p>
                    </li>
                         
                    <li className="box">
                    <img src={icon3}/>
                    <p className="textbold">Books Liberary</p>
                    <img src={line3}/>
                    <p className="maintext">The gradual accumulation of <br></br>
                        information about atomic and <br></br>
                        small-scale behaviour...</p>
                    </li>
                </ul>


    </section>
    );
}

export default Header;