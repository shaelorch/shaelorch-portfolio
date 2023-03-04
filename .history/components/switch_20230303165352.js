import styles from "../styles/Home.module.css";
import { useState } from "react";


export default function Switch() {

    const [active, setActive] = useState(false);
    const [disable, setDisable] = useState(true);

    const handleClick = () => {
        setActive(true);
        setDisable(true);
    }

    const handleClickClose = () => {
        setActive(false);
        setDisable(false);

        
    }

   

    return (
        <div className={styles.switchcont}>

           
                <div className={styles.switch} style={{display: "setDisable" ? "none" : "flex"}} >
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