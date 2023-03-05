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
      return (
       
      )
       
    }
       
  return (
    <div className={styles.container}>
      <Head>
        <title>Shae Lorch Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar/>
      <main className={styles.main}>
      
      <div className={styles.img} >
        <Image onClick={playMotion} src="/shae.svg" width={300} height={300}/>
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
