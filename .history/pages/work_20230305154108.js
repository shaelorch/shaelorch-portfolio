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
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";


export default function Home() {


       
  return (
    <div className={styles.workcontainer}>
      <Head>
        <title>Shae Lorch Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar/>
      <main className={styles.main}>
      
      <Carousel renderArrowNext={true}>
        <div className={styles.carouselcont}>
          <PCard/>
          <PCard img='/thikwick.png' cardtxt='Thik Wick Candle Co' txttype='Website'/>
          <PCard img='/realeasy.jpg' cardtxt='RealEasy' txttype='Web Application'/>
          <PCard img='/localscoop.jpg' cardtxt='Local Scoop' txttype='Web Application'/>
        </div>
        
      </Carousel>
       
     
      


      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
