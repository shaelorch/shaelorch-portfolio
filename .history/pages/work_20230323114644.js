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
import PCard from '../components/pCard';

export default function Work() {


       
  return (
    <div className={styles.workcontainer}>
      <Head>
        <title>Shae Lorch - Work</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.logocont}>
        <Image src="/logowhite.svg" width={50} height={50}/>
      </div>
      <NavBar/>
      <main className={styles.main}>
      
        <div className={styles.carouselcont}>
          <PCard link='/menu'/>
          <PCard img='/thikwick.png' cardtxt='Thik Wick Candle Co' txttype='Website'/>
          <PCard img='/realeasy.jpg' cardtxt='RealEasy' txttype='Web Application' link='/realEasy'/>
          <PCard img='/localscoop.jpg' cardtxt='Local Scoop' txttype='Web Application' link='/localScoop'/>
          
        </div>

        
     
        
     
       
     
      


      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
