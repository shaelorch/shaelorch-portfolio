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


export default function ThikWick() {

       
  return (
    <div className={styles.workcontainer}>
      <Head>
        <title>Shae Lorch - Thick Wick Candle Co</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar/>
      <main className={styles.main}>

      <Image src="/thikwick.png" width={800} height={500} style={{borderRadius:20, boxShadow:"5px 10px 20px grey"}}></Image>
      


      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
