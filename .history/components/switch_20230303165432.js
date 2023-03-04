import styles from "../styles/Home.module.css";
import { useState } from "react";


export default function Switch() {

    const [active, setActive] = useState(false);
    const [disable, setDisable] = useState(false);

    const handleClick = () => {
        setActive(true);
        setDisable(false);
    }

    const handleClickClose = () => {
        setActive(false);
        setDisable(true);

        
    }

   

    return (
        <div className={styles.switchcont}>

           
                <div className={styles.switch} style={{display: "disable" ? "flex" : "none"}} >
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