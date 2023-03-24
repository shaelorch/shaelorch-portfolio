import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import NavBar from '../components/navbar';
import Link from 'next/link';
import Switch from '../components/switch';
import SwitchActive from '../components/switchactive';
import Lottie from "lottie-react";
import introAnimation from "/public/animations/lottie.json";
import animationData from "../public/animations/Comp 2.json";


export default function Home() {
 
  
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };

    const playMotion = () => {
     
    }
       
  return (
    <div className={styles.container}>
      <Head>
        <title>Shae Lorch</title>
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

    
      
      <div onClick={playMotion} className={styles.img} >
        <Image  alt="shae lorch" src="/shae.svg" width={300} height={300}/>
      </div>
      <div>
        <h1 className={styles.herotxt}>Junior UX|UI Designer</h1>
      </div>


     
      

     <Switch />

      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
