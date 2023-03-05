

export default function PCard({
    img="/menu.jpg"
}) {

    return (<div className={styles.pcont}>
        <div className={styles.pcard}>
            <Image src={img} width={300} height={300}/>

        </div>
    </div>
    )
}