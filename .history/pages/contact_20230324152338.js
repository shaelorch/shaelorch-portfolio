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
import { ChakraProvider, FormControl, FormErrorMessage, FormLabel } from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { Textarea } from '@chakra-ui/react';
import { Input, Button } from '@chakra-ui/react';
import { sendContactForm } from '../lib/api';
import { useToast } from '@chakra-ui/react';
import { Text } from '@chakra-ui/react';


const initValues = {name: "", email: "", subject: "", message: ""};

const initState = {values: initValues}

export default function Contact() {

  const [state, setState] = useState(initState);
  const [touched, setTouched] = useState({});
  const [submit, setSubmit] = useState(false);
  const toast = useToast();

  const {values, isLoading, error} = state;

  const onBlur = ({target}) => setTouched((prev) => ({...prev,
    [target.name] : true
  }))

  const handleChange = ({target}) => setState((prev) => ({
    ...prev,
    values: {
      ...prev.values,
      [target.name] : target.value,

    },
  }));

 

  const onSubmit = async () => {
    setState((prev) => ({
      ...prev,
      isLoading: true,
    }));
    try {
      await sendContactForm(values);
      setTouched({});
      setSubmit(true);
      setState(initState);
      toast({
        title: "Message sent.",
        status: "success",
        duration: 2000,
        position: "top",
      });
    } catch (error) {
      setState((prev) => ({
        ...prev,
        isLoading: false,
        error: error.message,
      }));
    }
  };

  return (
    <ChakraProvider>
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

        {setSubmit &&
          <h1 style={{color:'black'}}>Let's Talk!</h1>
        }

        { submit && (

          <h1>Thank you for contacting me! I look forward to working with you!</h1>)
        }

      {error && (
        <h1>
          {error}
        </h1>
      )}

        { setSubmit &&

          (<form className={styles.contactform} >
          <FormControl isRequired isInvalid={touched.name && !values.name}>
            <FormLabel className={styles.label}>name</FormLabel>
            <Input type="text"
            name='name'
            errorBorderColor="red.300"
            value={values.name}
            placeholder="whats your name..." 
            onChange={handleChange}
            onBlur={onBlur}
             className={styles.input}></Input>
             <FormErrorMessage>Required</FormErrorMessage>
          </FormControl>
          
          <FormControl isRequired isInvalid={touched.email && !values.email}>
            <FormLabel className={styles.label}>email</FormLabel>
            <Input type="email"
            name='email'
            onChange={handleChange}
            onBlur={onBlur}
            value={values.email}
            placeholder="whats your email..." 
            errorBorderColor="red.300"
            className={styles.input}></Input>
             <FormErrorMessage>Required</FormErrorMessage>
          </FormControl>
          
          <FormControl isRequired isInvalid={touched.subject && !values.subject}>
        <FormLabel className={styles.label}>subject</FormLabel>
                  <Input type="text"
                  name='subject'
                  onChange={handleChange}
                  onBlur={onBlur}
                  value={values.subject}
                  placeholder="what do you want to talk about..." 
                  errorBorderColor="red.300"
                  className={styles.input}></Input>
                   <FormErrorMessage>Required</FormErrorMessage>
          </FormControl>
            
            <FormControl isRequired isInvalid={touched.message && !values.message}>
              <FormLabel className={styles.label}>message</FormLabel>
          <Textarea 
          type="text"
          name='message'
          onChange={handleChange}
          onBlur={onBlur}
          value={values.message}
          placeholder="whats your message..." 
          errorBorderColor="red.300"
          className={styles.minput}></Textarea>
           <FormErrorMessage>Required</FormErrorMessage>
            </FormControl>
         
          <Button className={styles.formbutton}
          disabled={!values.name || !values.email || !values.subject || !values.message}
          onClick={onSubmit}
          isLoading={isLoading}>submit</Button>

        </form>)
     
        }
     
        
        
     
       
     
      


      </main>

      <footer className={styles.footer}>
        
      </footer>
    </div></ChakraProvider>
  )
}
