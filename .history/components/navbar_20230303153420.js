import Link from "next/link"
import styles from "../styles/Home.module.css";

export default function NavBar() {

    return (

        <div className={styles.nav}>
            <div>
            <Link href="/contact"><h2 className={styles.navtext}>Contact</h2></Link>
            <Link href="/work"><h2 className={styles.navtext}>Work</h2></Link>
            <Link href="/"><h2 className={styles.navtext}>About</h2></Link>
            </div>
            
        </div>
    )
}