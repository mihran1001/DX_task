import "./PracticeAdvice.css";
import React from "react";
import star from "../../icons/staricon.jpg";
import emptystar from "../../icons/emptystaricon.jpg";
import pic1 from "../../pics/pic1.png";
import pic2 from "../../pics/pic2.png";

function PracticeAdvice(){
    return (<div className="PracticeAdvice">
        <div className="container">
            <div className="header">
                <div className="title">
                    <h6>Practice Advice</h6>
                    <h2>Each and every client is important</h2>
                    <p>Problems trying to resolve the conflict between 
                    the two major realms of Classical physics: Newtonian mechanics </p>
                </div>
            </div>
        </div>
            <div className="footer">
                <div className='carousel'>
                    <div className="comment1">comment1</div>
                    <div className="comment2">
                        <div className="image1">
                            <img src={pic1} alt="pic1" /> 
                        </div>
                        <div className="content">
                            <span>Slate helps you see  how many more days you need to work to reach your financial goal for the month and year.</span>
                            <img src={star} alt="Icon of a star" />
                            <img src={star} alt="Icon of a star" />
                            <img src={star} alt="Icon of a star" />
                            <img src={star} alt="Icon of a star" />
                            <img src={emptystar} alt="Icon of an empty star" />
                        </div>
                    </div>
                    <div className="comment3">
                        <div className="image2">
                            <img src={pic2} alt="pic2" />
                        </div>
                        <div>
                            <span>Slate helps you see  how many more days you need to work to reach your financial goal for the month and year.</span>
                            <img src={star} alt="Icon of a star" />
                            <img src={star} alt="Icon of a star" />
                            <img src={star} alt="Icon of a star" />
                            <img src={star} alt="Icon of a star" />
                            <img src={emptystar} alt="Icon of an empty star" />
                        </div>
                    </div>
                    <div className="comment4">comment4</div>
                </div>
            </div> 
    </div>);
}

export default PracticeAdvice;