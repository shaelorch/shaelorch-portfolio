import styles from "../styles/Home.module.css";
import { useState } from "react";


export default function Switch() {

    const [active, setActive] = useState(false);
    const [disable, setDisable] = useState(false);

    const handleClick = () => {
        setActive(true);
        
        
    }

    const handleClickClose = () => {
        setDisable(true);
    }

    return (
        <div className={styles.switchcont}>
            { setActive &&
                <div className={styles.switch} >
                <div className={styles.switchbut} onClick={handleClick}></div>
            </div>
            }
            
            {
               setDisable && 

                <div className={styles.switchclick}>
                    <div className={styles.switchbutclick} onClick={handleClickClose}>
                    </div>
                </div>
            }
        </div>
    )
}