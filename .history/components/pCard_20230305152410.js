
import styles from '../styles/Home.module.css'
import Image from 'next/image'

export default function PCard({
    img="/menu.jpg"
}) {

    return (<div className={styles.pcont}>
        <div className={styles.pcard}>

            <Image className={styles.pimg} src={img} width={266} height={177}/>
            <h3>HEllo</h3>

        </div>
    </div>
    )
}