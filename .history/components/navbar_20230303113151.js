import Link from "next/link"
import styles from "../styles/Home.module.css";

export default function NavBar() {

    return (

        <div className={styles.nav}>
            <Link>Contact</Link>
            <Link>Work</Link>
            <Link>About</Link>
        </div>
    )
}