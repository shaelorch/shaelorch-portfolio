
import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function PCard({
    img="/menu.jpg"
}) {

    return (<div className={styles.pcont}>
        <div className={styles.pcard}>

                <Image className={styles.pimg} src={img} width={286} height={197}/>

        </div>
    </div>
    )
}