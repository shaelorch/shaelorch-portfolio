
import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function PCard({
    img="/menu.jpg"
}) {

    return (<div className={styles.pcont}>
        <div className={styles.pcard}>
            <Image src={img} width={186} height={127}/>

        </div>
    </div>
    )
}