import styles from "./Content.module.css";
import React from "react";
import computer from "../../pics/computer_pic.png";
import profile1 from "../../pics/profile1.png";
// import profile2 from "../../pics/profile2.jpg";
import star from "../../icons/star.png";
import frame from "../../icons/Frame.png";

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
                <div className={styles.description}>
                    <div className={styles.line1}>
                        <a href="http://facebook.com">English Departement</a>
                        <div className={styles.rating}>
                            <img src={star} alt="" />
                            <span>4.9</span>
                        </div>
                    </div>
                    <span className={styles.graphicdesign}>Graphic Design</span>
                    <p className={styles.text}>We focus on ergonomics and meeting<br />you where you work. It's only a<br />keystroke away.</p>
                    <div className={styles.sales}>
                        <img src={frame} alt="" className={styles.arrow} />
                        <h6>15 Sales</h6>
                    </div>
                </div> 

            </div>
            <div className={styles.box2}>
                <img src={profile1} alt="p2" />
                <div className={styles.description}>
                    <div className={styles.line1}>
                        <a href="http://facebook.com">English Departement</a>
                        <div className={styles.rating}>
                            <img src={star} alt="" />
                            <span>4.9</span>
                        </div>
                    </div>
                    <span className={styles.graphicdesign}>Graphic Design</span>
                    <p className={styles.text}>We focus on ergonomics and meeting<br />you where you work. It's only a<br />keystroke away.</p>
                    <div className={styles.sales}>
                        <img src={frame} alt="" className={styles.arrow} />
                        <h6>15 Sales</h6>
                    </div>
                </div>

            </div>
        </div>
    </div>)
}

export default Content;
