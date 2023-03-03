import Link from "next/link"
import styles from "../styles/Home.module.css";

export default function NavBar() {

    return (

        <div className={styles.nav}>
            <Link href="/contact"><h2>Contact</h2></Link>
            <Link href="/work"><h2>Work</h2></Link>
            <Link href="/"><h2>About</h2></Link>
        </div>
    )
}