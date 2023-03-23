
import styles from '../styles/Home.module.css'
import Image from 'next/image'
import Link from 'next/link'

export default function PCard({
    img="/menu.jpg",
    cardtxt="MEnU",
    txttype="web application",
    link="/thikWick"
}) {

    return (<div className={styles.pcont}>
        <div className={styles.pcard}>

            <Image className={styles.pimg} alt="project" src={img} width={266} height={177}/>
            <h2>{cardtxt}</h2>
            <h3>{txttype}</h3>
            <Link href="/thikWick">
                <button className={styles.pbutton}>View Case Study</button>
            </Link>
            

        </div>
    </div>
    )
}