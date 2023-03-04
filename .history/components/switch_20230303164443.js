import styles from "../styles/Home.module.css";
import { useState } from "react";


export default function Switch() {

    const [active, setActive] = useState(false);
    const [disable, setDisable] = useState(false);

    const handleClick = () => {
        setActive(true);
        
        
    }

   

    return (
        <div className={styles.switchcont}>
            { active &&
                <div className={styles.switch} >
                <div className={styles.switchbut} onClick={handleClick}></div>
            </div>
            }
            
            {
               active && 

                <div className={styles.switchclick}>
                    <div className={styles.switchbutclick} onClick={handleClick}>
                    </div>
                </div>
            }
        </div>
    )
}