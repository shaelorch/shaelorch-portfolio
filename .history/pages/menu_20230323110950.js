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
import React from 'react'
import ReactPlayer from 'react-player'


export default function Menu() {

       
  return (
    <div className={styles.workcontainer}>
      <Head>
        <title>Shae Lorch - MEnU</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <NavBar/>
      <main className={styles.main}>
     
              <Image src="/menu.jpg" width={850} height={500} style={{ borderRadius: 20 }}></Image>
              <h3 className={styles.paragraph}>MEnU is an app that provides quick yet meaningful activities for children and single parents who may feel they need to spend more quality time with their kids or need more time for themselves. MEnU targets the feeling of guilt single parents feel from being away from their children.  </h3>
              
        <div>

          <h1>My Role</h1>
        <h2>UX/UI Designer, Visual Design, User Research, Project Manager</h2>
      <div className={styles.p}>
        <h3 className={styles.h3}>Responsibilities</h3>
        <p>Competitive analysis</p>
        <p>Task management</p>
        <p>Lofi and hifi prototype</p>
        <p>User interface design</p>
        <p>Creative direction</p>
        <p>Styleguide</p>
        <p>Usability testing</p>

        <h3 className={styles.h3}>Project Type</h3>
        <p>UX/UI Design</p>

        <h3 className={styles.h3}>Design Tools</h3>
        <p>Figma, Adobe Illustrator, Photoshop</p>

        <h3 className={styles.h3}>Project Duration</h3>
        <p>Sept 2022 - Jan 2023</p>
      </div>
        

        </div>
        
        <Image src="/lofi.png" width={700} height={900} style={{borderRadius:20}}></Image>
        <Image src="/primary.png" width={600} height={400} style={{borderRadius:20}}></Image>
        <Image src="/secondary.png" width={600} height={400} style={{borderRadius:20}}></Image>


        <div className={styles.paragraph}>
          <h1 style={{fontFamily:'cabin, sans-serif'}}>The Problem</h1>
        <h3 className={styles.h3}>The main pain point we are targeting with Local Scoop is the fact that a lot of small local businesses are suffering due to the pandemic and from our research, most consumers don’t like the inconvenience of having to shop at one location where there isn’t such a broad selection of items compared to some big-box stores.</h3>
        </div>

        <Image src="/localscoopmock.jpeg" width={800} height={500} style={{borderRadius:20}}></Image>
        
        <div className={styles.paragraph}>
          <h1 style={{fontFamily:'cabin, sans-serif'}}>The Solution</h1>
        <h3 className={styles.h3}>In order for us to target this issue, we had to think about both the businesses and the customers. Local Scoop provides a marketplace with all of your local businesses on one platform. It eliminates the searching and travelling aspect of shopping local and creates a more convenient space for businesses to sell their product and earn more exposure while making it easier for the consumer to browse products and discover new businesses.</h3>
        </div>
    
        <div>
      <ReactPlayer url="/Sequence 01.mp4" playing={true} loop={true}/>
        </div>
        

      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
