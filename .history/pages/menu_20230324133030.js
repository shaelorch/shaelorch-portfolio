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
        <link rel="icon" href="/logowhite.svg" />
      </Head>

    <div className={styles.logocont}>

      <Link href="/">
          <Image src="/logowhite.svg" width={50} height={50} alt="logo"/>

      </Link>
      </div>

      <NavBar/>

      <main className={styles.mainwork}>
     
              <Image src="/menu.jpg" width={850} height={500} alt="menu logo" style={{ borderRadius: 20 }}></Image>
              <h2 className={styles.paragraph}>MEnU is an app that provides quick yet meaningful activities for children and single parents who may feel they need to spend more quality time with their kids or need more time for themselves. MEnU targets the feeling of guilt single parents feel from being away from their children.  </h2>
              
        <div className={styles.role}>

          <h1>My Role</h1>
          <h2 style={{color:"black"}}>UX/UI Designer, Visual Design, User Research, Project Manager</h2>
          <div className={styles.p}>
            <div style={{display:"flex", flexDirection:"column", marginRight:"30%", marginBottom:"8%"}}>
              <h3 className={styles.h3}>Responsibilities</h3>
            <p>Competitive analysis</p>
            <p>Task management</p>
            <p>Lofi and hifi prototype</p>
            <p>User interface design</p>
            <p>Creative direction</p>
            <p>Styleguide</p>
            <p>Usability testing</p>
            </div>

            <div style={{display:"flex", flexDirection:"column", marginRight:"30%"}}>
               <h3 className={styles.h3}>Project Type</h3>
            <p>UX/UI Design</p>
            </div>

           <div style={{display:"flex", flexDirection:"column", marginRight:"20%", marginBottom:"8%"}}>
            <h3 className={styles.h3}>Design Tools</h3>
            <p>Figma, Adobe Illustrator, Photoshop</p>
           </div>

            <div style={{display:"flex", flexDirection:"column",marginBottom:"8%"}}>
            <h3 className={styles.h3}>Project Duration</h3>
            <p>Sept 2022 - Jan 2023</p>
            </div>
            
          </div>
        </div>
        
        <div>
          <h1>Lofi Prototype</h1>
          <Image src="/lofi.png" width={700} height={900} style={{borderRadius:20}} alt="prim" ></Image>
        </div>
        
        <div style={{display:"flex", flexDirection:'column'}}>
          <h1>Personas</h1>
          <Image src="/primary.png" width={900} height={400} style={{borderRadius:20, marginBottom:30}} alt="sec"></Image>
          <Image src="/secondary.png" width={900} height={400} style={{borderRadius:20}} alt="sec"></Image>

        </div>


        <div className={styles.paragraph}>
          <h1 style={{fontFamily:'cabin, sans-serif'}}>The Problem</h1>
        <h3 className={styles.h3}>The problem we are targeting with MEnU is the issue of mom guilt; specifically the guilt that single mothers feel when they feel that they do not have time to spend quality time with
        their children. Mothers work very hard to make sure they are providing for their child, but sometimes they get so consumed in their work and chores, that sometimes it can weigh on them. </h3>
        </div>

        <Image src="/localscoopmock.jpeg" width={800} height={500} alt="mockup" style={{borderRadius:20}}></Image>
        
        <div className={styles.paragraph}>
          <h1 style={{fontFamily:'cabin, sans-serif'}}>The Solution</h1>
        <h3 className={styles.h3}>To target this issue, we have created a simple and easy to use activity generator. It suggests new ideas for single parents to do with their children to help spend more quality time with their child and create long lasting memories. We decided to use a swipe feature as our main interaction to make things faster and more efficient for our user as we know they do not have a lot of time. </h3>
        </div>
    
        {/* <div>
      <ReactPlayer url="/menurecording.mov" playing={true} loop={true}/>
        </div> */}
        

      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
