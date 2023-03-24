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
import { FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/react';
import { useState } from 'react';
import { Textarea } from '@chakra-ui/react';
import { Input } from '@chakra-ui/react';

const initValues = {name: "", email: "", subject: "", message: ""};

const initState = {values: initValues}

export default function Contact() {

  const [state, setState] = useState(initState);
  const [touched, setTouched] = useState({});

  const {values} = state;
  const handleChange = ({target}) => setState((prev) => ({
    ...prev,
    values: {
      ...prev.values,
      [target.name] : target.value,

    },
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
     
        <form className={styles.contactform}>
          <FormControl isRequired isInvalid={touched.name && !values.name}>
            <FormLabel className={styles.label}>name</FormLabel>
            <Input type="text"
            name='name'
            errorBorderColor="red.300"
            value={values.name}
            placeholder="whats your name..." 
            onChange={handleChange}
             className={styles.input}></Input>
             <FormErrorMessage>Required</FormErrorMessage>
          </FormControl>
          
          <FormControl isRequired isInvalid={!values.email}>
            <FormLabel className={styles.label}>email</FormLabel>
            <Input type="email"
            name='email'
            onChange={handleChange}
            value={values.email}
            placeholder="whats your email..." 
            errorBorderColor="red.300"
            className={styles.input}></Input>
             <FormErrorMessage>Required</FormErrorMessage>
          </FormControl>
          
          <FormControl isRequired isInvalid={!values.subject}>
        <FormLabel className={styles.label}>subject</FormLabel>
                  <Input type="text"
                  name='subject'
                  onChange={handleChange}
                  value={values.subject}
                  placeholder="what do you want to talk about..." 
                  errorBorderColor="red.300"
                  className={styles.input}></Input>
                   <FormErrorMessage>Required</FormErrorMessage>
          </FormControl>
            
            <FormControl isRequired isInvalid={!values.message}>
              <FormLabel className={styles.label}>message</FormLabel>
          <Textarea 
          type="text"
          name='message'
          onChange={handleChange}
          value={values.message}
          placeholder="whats your message..." 
          errorBorderColor="red.300"
          className={styles.minput}></Textarea>
           <FormErrorMessage>Required</FormErrorMessage>
            </FormControl>
         
          <button className={styles.formbutton}>submit</button>

        </form>
     
        
     
       
     
      


      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div>
  )
}
