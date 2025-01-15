import "./Subscribe.css";
import React from "react";

function Subscribe(){
    return (<div className="Subscribe">
        <div className="title">
            <div>
                <h6>Practice Advice</h6>
            </div>
            <div>
                <h2>Featured Products</h2>
            </div>
            <div>
                <span className="text">Problems trying to resolve the conflict between 
                the two major realms of Classical physics: Newtonian mechanics</span>
            </div>
        </div>
        <div className="email">
            <input type="text" placeholder="Your Email" />
            <button><span>Subscribe</span></button>
        </div>
    </div>)
}

export default Subscribe;