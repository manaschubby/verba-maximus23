import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import LandingPage from './Components/LandingPage'
import NavBar from './Components/NavBar/NavBar'


export default function Home() {
  
  return (
    <div className={styles.container}>
      <Head>
        <title>Verba Maximus 2023</title>
        <meta name="description" content="Official website for VM '23" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
    
      <NavBar/>
      <LandingPage />
      
    </div>
  )
}
