import Link from "next/link"
import styles from "../styles/Home.module.css";

export default function NavBar() {

    return (

        <div className={styles.nav}>
            <Link href="/contact"><h2>Contact</h2></Link>
            <Link href="/work">Work</Link>
            <Link href="/">About</Link>
        </div>
    )
}