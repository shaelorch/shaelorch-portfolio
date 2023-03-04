import styles from "../styles/Home.module.css";
import { useState } from "react";


export default function Switch() {

    const [active, setActive] = useState(false);
    const [disable, setDisable] = useState(true);

    const handleClick = () => {
        setActive(true);
        
    }

    const handleClickClose = () => {
        setActive(false);
        

        
    }

   

    return (
        <div className={styles.switchcont}>

           
                <div className={styles.switch} style={{display: "active" ? "flex" : "none"}} >
                <div className={styles.switchbut} onClick={handleClick}></div>
            </div>
        
                
           
            
            { active &&
              

                <div className={styles.switchclick}>
                    <div className={styles.switchbutclick} onClick={handleClickClose}>
                    </div>
                </div>
            }
        </div>
    )
}