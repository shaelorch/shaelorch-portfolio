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

export default function Contact() {


       
  return (
    <div className={styles.contactcont}>
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
     
        
     
        
     
       
     
      


      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
