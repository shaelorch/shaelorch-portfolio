
import styles from "../styles/Home.module.css";
import { useState } from "react";
import Link from "next/link";


export default function SwitchActive() {

    return (
    
           
        <div className={styles.switchcont}>
            <div className={styles.switchclick}>
                        <Link href="/">
                        <div className={styles.switchbutclick} ></div>
                        </Link>
            </div>
        </div>
    )
}

