
import styles from "../styles/Home.module.css";
import { useState } from "react";
import Link from "next/link";


export default function Switch() {

    const [active, setActive] = useState(false);
    const [disable, setDisable] = useState(false);

    const handleClick = () => {
        setActive(true);
   
    }

    const handleClickClose = () => {
        setActive(false);
      

        
    }

   

    return (
        <div className={styles.switchcont}>
           
            <div className={styles.switchcont}>
            <div className={styles.switchclick}>
                        <Link href="/">
                        <div className={styles.switchbutclick} ></div>
                        </Link>
            </div>
        </div>
    )
}

