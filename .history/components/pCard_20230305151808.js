
import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function PCard({
    img="/menu.jpg"
}) {

    return (<div className={styles.pcont}>
        <div className={styles.pcard}>

                <Image className={styles.pimg} src={img} width={236} height={177}/>

        </div>
    </div>
    )
}