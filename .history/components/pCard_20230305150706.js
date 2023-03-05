
import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function PCard({
    img="/menu.jpg"
}) {

    return (<div className={styles.pcont}>
        <div className={styles.pcard}>
            <div>
                <Image src={img} width={186} height={117}/>

            </div>

        </div>
    </div>
    )
}