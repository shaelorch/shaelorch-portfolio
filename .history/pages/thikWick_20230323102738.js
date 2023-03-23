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
     
        <Image src="/thikwick.png" width={800} height={500} style={{borderRadius:20}}></Image>
        <h3 className={styles.paragraph}>Thik Wick is a website for a local small candle making business.
           They make all natural and toxin-free candles and wax melts.
          This website was designed to reflect the client’s elegant
           style while utilizing subtle interactions with a simplistic interface. </h3>
        <Link href="https://www.thikwickcandleco.com">
          <button className={styles.button}>View Site</button>
        </Link>
        <div>

          <h1>My Role</h1>
        <h2>UI/UX Designer and Graphic Designer</h2>
      <div>
        <h3 className={styles.h3}>Responsibilities</h3>
        <p>Competitive Analysis</p>
        <p>Wireframing</p>
        <p>Lofi and hifi prototype</p>
        <p>User interface design</p>
        <p>Logo design</p>
        <p>Styleguide</p>

        <h3 className={styles.h3}>Project Type</h3>
        <p>UX/UI Design</p>

        <h3 className={styles.h3}>Design Tools</h3>
        <p>Figma, Adobe Illustrator, Photoshop</p>

        <h3 className={styles.h3}>Project Duration</h3>
        <p>Sept-Nov 2022</p>
      </div>
        

        </div>
        
        <Image src="/ThikWickStyleguide.jpeg" width={400} height={400}></Image>
        <h1>Style Guide</h1>
        <h3 className={styles.h3}>For the colour palette I first made a mood board to reflect a neutral, elegant theme. I selected colours that felt luxurious but still neutral.</h3>
      


      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
