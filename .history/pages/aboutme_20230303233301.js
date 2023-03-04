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
        <link rel="icon" href="/favicon.ico" />
      </Head>
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

            <div style={{marginLeft:"20%", marginRight:"15%"}}>
                <Image className={styles.headshot} src="/headshot.png" width={300} height={300}/>
                <Image className={styles.circle} src="/circle.png" width={300} height={300}/>

            </div>
        
        </div>

        

        <SwitchActive/>
    
    

      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
