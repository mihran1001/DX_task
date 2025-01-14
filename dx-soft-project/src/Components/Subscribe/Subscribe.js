import "./Subscribe.css";
import React from "react";

function Subscribe(){
    return (<div className="Subscribe">
        <div className="title">
            <div className="">
                Practice Advice
            </div>
            <div>
                Featured Products
            </div>
            <div>
                <span>Problems trying to resolve the conflict between 
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