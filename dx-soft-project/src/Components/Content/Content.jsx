import styles from "./Content.module.css";
import React from "react";
import computer from "../../pics/computer_pic.png";
import profile1 from "../../pics/profile1.png";
import profile2 from "../../pics/profile2.jpg";

function Content(){
    return (<div className={styles.content}>
        <div className={styles.title}>
            <h6>Practice Advice</h6>
            <h2>Packages that are aprodable</h2>
            <div className={styles.text}>
                <span className={styles.text1}>Problems trying to resolve the conflict between<br /></span>
                <span className={styles.text2}>the two major realms of Classical physics: Newtonian mechanics</span>
            </div>
        </div>
        <div className={styles.carousel}>
            <div className={styles.box1}>
                <img src={computer} alt="cmp" />
                <a href="http://facebook.com">English Departement</a>
                <span>Graphic Design</span>
                <span>We focus on ergonomics and meeting<br />you where you work. It's only a<br />keystroke away.</span>
                
            </div>
            <div className={styles.box2}>
                <img src={profile1} alt="p2" />
                <a href="http://facebook.com">English Departement</a>
                <span>Graphic Design</span>
                <span>We focus on ergonomics and meeting<br />you where you work. It's only a<br />keystroke away.</span>
            </div>
        </div>
    </div>)
}

export default Content;
