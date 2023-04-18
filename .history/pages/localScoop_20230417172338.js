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


export default function LocalScoop() {

       
  return (
    <div className={styles.workcontainer}>
      <Head>
        <title>Shae Lorch - Local Scoop</title>
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
     
              <Image src="/localscoop.jpg" width={800} height={500} alt="localscoop" style={{ borderRadius: 20 }}></Image>
              <h3 className={styles.paragraph}>Local Scoop is an app where
               local and small businesses can go to post and sell their
                products to a larger audience than just their physical storefront.
                It is also a place where local buyers can go to discover new small
                businesses and purchase items or services that they might have not
                 known about otherwise.  </h3>
              
        <div style={{display:"flex", flexDirection:'column',marginTop:'10%'}}>
        <div>
            <h1>My Role</h1>
        <h2>UX/UI Designer, Visual Design, User Research</h2>
        </div>
        
      <div className={styles.p}>
        <div className={styles.rows}>
           <h3 className={styles.h3}>Responsibilities</h3>
        <p>Competitive analysis</p>
        <p>Wireframing</p>
        <p>Lofi and hifi prototype</p>
        <p>User interface design</p>
        <p>Logo design</p>
        <p>Styleguide</p>
        <p>Usability testing</p>
        </div>
       
      <div className={styles.rows}>
        <h3 className={styles.h3}>Project Type</h3>
        <p>UX/UI Design</p>
      </div>
        
      <div className={styles.rows}>
        <h3 className={styles.h3}>Design Tools</h3>
        <p>Figma, Adobe Illustrator, Photoshop</p>

      </div>

      <div className={styles.rows}>
        <h3 className={styles.h3}>Project Duration</h3>
        <p>Jan-May 2022</p>
      </div>
        
        
      </div>
        

        </div>
        
        <Image src="/localscoopwireframes.png" width={500} height={700} alt="wireframes" style={{borderRadius:20}}></Image>
        <div className={styles.paragraph}>
          <h1 style={{fontFamily:'cabin, sans-serif'}}>The Problem</h1>
        <h3 className={styles.h3}>The main pain point we are targeting with Local Scoop is the fact that a lot of small local businesses are suffering due to the pandemic and from our research, most consumers don’t like the inconvenience of having to shop at one location where there isn’t such a broad selection of items compared to some big-box stores.</h3>
        </div>

        <Image src="/localscoopmock.jpeg" width={800} height={500} alt="mockup" style={{borderRadius:20}}></Image>
        
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
