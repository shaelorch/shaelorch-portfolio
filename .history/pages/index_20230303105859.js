import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { Player, Controls } from '@lottiefiles/react-lottie-player';


export default function Home() {

  <div>
  <Player
    autoplay
    speed={1.5}
    loop
    src="https://assets3.lottiefiles.com/packages/lf20_UJNc2t.json"
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
  return (
    <div className={styles.container}>
      <Head>
        <title>Shae Lorch Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
       



      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
