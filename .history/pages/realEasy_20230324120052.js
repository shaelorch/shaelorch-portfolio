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


export default function RealEasy() {


    return (
        <div className={styles.workcontainer}>
            <Head>
                <title>Shae Lorch - RealEasy</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/logowhite.svg" />
            </Head>
            <div className={styles.logocont}>
                <Image src="/logowhite.svg" width={50} height={50} />
            </div>
            <NavBar />
            <main className={styles.main}>

                <Image src="/realeasy.jpg" width={800} height={500} style={{ borderRadius: 20 }}></Image>
                <h3 className={styles.paragraph}>RealEasy is a web
                    application that allows users to search and discover
                    new real estate listings using data from the mls website.
                    You can also view recommended agents in the area based
                    off of reviews from other users. This App is targeted
                    toward young urban users who rely on word of mouth and
                    online research.  </h3>
                <div>

                    <h1>My Role</h1>
                    <h2>UI/UX Designer, Graphic Designer, Front-End Developer</h2>
                    <div className={styles.p}>
                        <h3 className={styles.h3}>Responsibilities</h3>
                        <p>Wireframing</p>
                        <p>Lofi and hifi prototype</p>
                        <p>User interface design</p>
                        <p>Logo design</p>
                        <p>Styleguide</p>
                        <p>API integration</p>
                        <p>Front end development</p>
                        <p>Jest testing</p>

                        <h3 className={styles.h3}>Project Type</h3>
                        <p>UX/UI Design and Full-Stack Development</p>

                        <h3 className={styles.h3}>Design Tools</h3>
                        <p>Figma, Adobe Illustrator, Photoshop</p>

                        <h3 className={styles.h3}>Development Tools</h3>
                        <p>Next JS, React, Jest, Rapid API, Visual Studio Code</p>


                        <h3 className={styles.h3}>Project Duration</h3>
                        <p>Jan-Mar 2023</p>
                    </div>


                </div>

                <Image src="/inspo.png" width={700} height={580}></Image>
                <div className={styles.paragraph}>
                    <h1>Lofi Prototype</h1>
                    <h3 className={styles.h3}>When designing our first lofi prototype, I wanted to keep the design as modern yet simple as possible since our
                    tagrte audience is primarily young adults. I aimed to keep the interactions straight forward and intuitive. </h3>
                </div>

                <Image src="/relofi.png" width={600} height={700}></Image>
                <div className={styles.paragraph}>
                    <h1>Lofi Prototype</h1>
                    <h3 className={styles.h3}>When designing our first lofi prototype, I wanted to keep the design as modern yet simple as possible since our
                    tagrte audience is primarily young adults. I aimed to keep the interactions straight forward and intuitive. </h3>
                </div>


            </main>

            <footer className={styles.footer}>

            </footer>
        </div>
    )
}
