import styles from "./Section2.module.css"
import heroes from "../../images/Heroes.png"
function Section2(){
    return (
<div className={styles.section_two}>
    <div>
         <img src={heroes} className={styles.heroes}/>
    </div>
    
    <div>
        <p className={styles.p1}>Make online education
        accessible</p>
    </div>
</div>
    )
}

export default Section2;