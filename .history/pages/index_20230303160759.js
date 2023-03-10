import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import NavBar from '../components/navbar';
import Link from 'next/link';
import { ScrollMenu } from 'react-horizontal-scrolling-menu';


export default function Home() {


    const playLottie = () => {
       <div>
        <Player
          autoplay
          speed={1.5}
          loop
          src="/public/animations/shaelorch.json"
          style={{ height: "300px", width: "300px" }}
        >
          <Controls
            visible={true}
            buttons={[
              "play",
              "repeat",
              "frame",
              "debug",
              "snapshot",
              "background"
            ]}
          />
        </Player>
      </div>
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
{/*        
      <div>
        <Player
          autoplay
          speed={1.5}
          loop
          src="https://app.lottiefiles.com/animation/21766c42-4c10-4a6c-b0f9-ba617b081f23"
          style={{ height: "300px", width: "300px" }}
        >
        </Player>
      </div> */}

      <ScrollMenu>

        <div>Hello</div>

      </ScrollMenu>


      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
