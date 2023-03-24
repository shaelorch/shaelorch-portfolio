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
import { FormControl } from '@chakra-ui/react';
import { useState } from 'react';

const initValues = {name: "", email: "", subject: "", message: ""};

const initState = {values: initValues}

export default function Contact() {

  const [state, setState] = useState(initState);

  const {values} = state;
  const handleChange = ({target}) => setState((prev) => ({
    ...prev,
    values: {
      ...prev.values,
      []
    }
  }));

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

        <h1 style={{color:'black'}}>Let's talk!</h1>
     
        <FormControl className={styles.contactform}>
            <label className={styles.label}>name</label>
            <input type="text"
            name='name'
            placeholder="whats your name..." 
             className={styles.input}></input>
            <label className={styles.label}>email</label>
            <input type="text"
            name='name'
            placeholder="whats your email..." 
            className={styles.input}></input>
          <label className={styles.label}>subject</label>
          <input type="text"
          name='name'
          placeholder="what do you want to talk about..." 
          className={styles.input}></input>
          <label className={styles.label}>message</label>
          <textarea 
          type="text"
          name='name'
          placeholder="whats your message..." 
          className={styles.minput}></textarea>

          <button className={styles.formbutton}>submit</button>

        </FormControl>
     
        
     
       
     
      


      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
