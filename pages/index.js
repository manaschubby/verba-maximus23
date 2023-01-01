import Head from 'next/head'
import Image from 'next/image'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import styles from '../styles/Home.module.css'
import EventDetails from './Components/EventDetails'
import EventsPage from './Components/EventsPage'
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
    
      <BrowserRouter>
      <NavBar/>
        <Routes>
          <Route path="/events" element={<EventsPage/>}></Route>
          <Route path="/" element={<LandingPage/>}></Route>
          <Route path="/event" element={<EventDetails/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
}
