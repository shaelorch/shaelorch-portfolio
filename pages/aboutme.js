import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import NavBar from '../components/navbar';
import Link from 'next/link';
import Switch from '../components/switch';
import SwitchActive from '../components/switchactive';





export default function Home() {


  
       
  return (
    <div className={styles.container}>
      <Head>
        <title>Shae Lorch Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/logowhite.svg" />
      </Head>
      <div className={styles.logocont}>
      <Link href="/">
                  <Image src="/logowhite.svg" width={50} height={50} alt="logo"/>

                </Link>
      </div>
      <NavBar/>
      <main className={styles.main}>

        <div className={styles.about}>
            <div className={styles.text}>
            <h2>Hi, I’m Shae!
             A BCIT Digital Design and Development
              Student that has always had a creative
               side and a passion for art and design.
                I am prospecting a career in UX/UI
                 Design where I can design with intent
                  and create valuable products that will
                   enhance user experiences.</h2>
                </div>

                <div className={styles.vl}></div>

            <div className={styles.imgdiv} style={{marginLeft:"15%", marginRight:"15%"}}>
                <Image className={styles.headshot} alt="headshot" src="/headshot.png" width={300} height={300}/>
                <Image className={styles.circle} alt="headshot" src="/circle.png" width={300} height={300}/>
                <Image className={styles.headshotmob} alt="headshot" src="/headshot.png" width={70} height={70}/>
                <Image className={styles.circlemob} alt="headshot" src="/circle.png" width={70} height={70}/>

            </div>
        
        </div>

        

        <SwitchActive/>
    
    

      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
