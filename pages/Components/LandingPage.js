import React from 'react';
import NavBar from './NavBar/NavBar';
import dynamic from "next/dynamic";
const Animator = dynamic(
  import("react-scroll-motion").then((it) => it.Animator),
  { ssr: false }
);
import { useState, useEffect } from 'react';
import { ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";

"/Images/maxresdefault.jpg"
const LandingPage = () => {
    const events = [{
        title:"Sherlocked",
        desc:"sherlocked",
        time:"at night"
    },{
        title:"Sherlocked",
        desc:"sherlocked",
        time:"at night"
    },{
        title:"Sherlocked",
        desc:"sherlocked",
        time:"at night"
    },{
        title:"Sherlocked",
        desc:"sherlocked",
        time:"at night"
    },{
        title:"Sherlocked",
        desc:"sherlocked",
        time:"at night"
    },{
        title:"Sherlocked",
        desc:"sherlocked",
        time:"at night"
    },{
        title:"Sherlocked",
        desc:"sherlocked",
        time:"at night"
    },{
        title:"Sherlocked",
        desc:"sherlocked",
        time:"at night"
    }]
    return (
        <div>
            <section id="main"><TitleComponent /></section>
            <section id="events">
                <div className='landing-events' id="events">
                    <div className='sub-heading-title'>EVENTS</div>
                    <div className='landing-cards'>
                        {events.map((event,i)=>{
                            return(<div className='landing-card' key={i}>
                            <div className='card-title'>
                                {event.title}
                            </div>
                            <div className='card-time'>
                                <b>TIME</b>: {event.time}
                            </div>
                            <div className='card-desc'>
                                {event.desc}
                            </div>
                        </div>)
                        })}
                    </div>
                </div>
            </section>
            <section id="contact">
                <div className='landing-events' style={{ marginTop:"10vh"}}>
                    <div className='sub-heading-title'>Contact Us</div>
                    <div style={{display:"flex", flexDirection:"column", alignItems:"center", marginTop:"1%", height:"60vh", backgroundImage: "url(/metamorphosisLogo.svg)",backgroundSize: 'contain', backgroundPositionX:"left",backgroundPositionY:"top", backgroundRepeat: 'no-repeat'}} className='landing-cards'>
                        <div className='landing-card'>
                        <div className='card-title'>
                           <b> ELAS BPHC</b>
                        </div>
                        <div className='card-time'>
                        Email : <a style={{opacity:0.5}} href='mailto:elas@hyderabad.bits-pilani.ac.in'>elas@hyderabad.bits-pilani.ac.in</a>
                        </div>
                        <div className='card-desc'>
                            Phone: <a style={{opacity:0.5}} href="phone:1234GETONTHEDANCEFLOOR">1234GETONTHEDANCEFLOOR</a>
                        </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

const TitleComponent = () => {

    const FadeUp = batch(Fade(), Move(), Sticky());
    const [isMobile, setMobile] = useState(false);
    const [lowHeight, setLowHeight] = useState(false);
    useEffect(() => setMobile(window.matchMedia("(max-width: 1024px)").matches), [window.matchMedia("(max-width: 1024px)").matches]);
    useEffect(() => setLowHeight(window.matchMedia("(max-height: 500px)").matches), []);
    return (
            <ScrollContainer>
                <section id="main">
                <ScrollPage>
                    <Animator animation={batch(Sticky(),Fade())}>
                        <div className='title-image' />
                    </Animator>
                    <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -20))}>
                        <div className='title'>VÈRBA MAXIMUS {!isMobile ? <></> : <br/>}2023</div>
                    </Animator>
                    <Animator animation={batch(Fade(), Sticky(50,!lowHeight ? 60 : 80), MoveOut(0, -20))}>
                        <div className='sub-title'>28-29 JAN</div>
                    </Animator>                
                </ScrollPage></section>
                <ScrollPage>
                    <Animator animation={FadeUp}>
                        <div style={{
                            display:"flex",
                            flexDirection:"column",
                            justifyContent:"center"
                        }}>
                        <div  style={{ fontSize:  !isMobile ? "10vw" : "7vh"}}>Metamorphosis</div>
                        <div  style={{ fontSize: !isMobile ? "1.5vw": "2vh", marginTop: "6vh", textAlign:"center" }}>The English Language Activies Society is back again with the literary fest of the year here at <br/> BITS Pilani, Hyderabad Campus.</div>
                        </div>
                    </Animator>
                </ScrollPage>
                <section id="schedule"><ScrollPage style={{backgroundColor:"rgb(60, 10, 8)"}}>
                    <Animator animation={batch(Fade(),Move(), Sticky(!isMobile ? 25 : 50, !isMobile ? 40: 20))}>
                        <div style={{
                            display:"flex",
                            flexDirection:"column",
                            justifyContent:"center"
                        }}>
                        <div  style={{ color:"white", fontWeight:"lighter", fontSize:  !isMobile ? "10vw" : "7vh"}}>Schedule</div>
                        <div  style={{ color:"white", fontWeight:"lighter", fontSize: !isMobile ? "1.5vw": "2vh", marginTop: "6vh", textAlign:"center" }}>Here’s your guide to Metamorphosis, Verbamaximus 2023.</div>
                        </div>
                    </Animator><span style={{
                                color:"white"
                            }}>
                    {!isMobile&&!lowHeight ?<>
                        <Animator style={{width:"20%"}} animation={batch(MoveIn(0,1000), MoveOut(0,-1000), Sticky(!isMobile ? 55 : 50,!isMobile ? 20 : 50))}>
                                <h4 style={{ fontWeight:"lighter", textAlign:"right"}}>1-6 May, 2021</h4>
                                <h1 style={{ textAlign:"right"}}>Registration</h1>
                                <h3 style={{ fontWeight:"lighter", textAlign:"right"}}>Pick your favourite event(s) and register in that event by filling the form corresponding to that event. Its that easy :)</h3>
                        </Animator>
                        <Animator style={{width:"20%"}} animation={batch(MoveIn(0,1000), MoveOut(0,-1000), Sticky(!isMobile ? 85 : 50,!isMobile ? 35 : 50))}>
                                <h4 style={{ fontWeight:"lighter", textAlign:"left"}}>1-6 May, 2021</h4>
                                <h1 style={{ textAlign:"left"}}>Participation</h1>
                                <h3 style={{ fontWeight:"lighter", textAlign:"left"}}>Participate online. The links for your registered events will be sent to you via email and whatsapp groups. Use those links and show your talent.</h3>
                        </Animator>
                        <Animator style={{width:"20%"}} animation={batch(MoveIn(0,1000), MoveOut(0,-1000), Sticky(!isMobile ? 55 : 50,!isMobile ? 50 : 50))}>
                                <h4 style={{ fontWeight:"lighter", textAlign:"right"}}>1-6 May, 2021</h4>
                                <h1 style={{ textAlign:"right"}}>Result Declaration</h1>
                                <h3 style={{ fontWeight:"lighter", textAlign:"right"}}>The ultimate genius will be revealed by our judging panel on 10th May, 2021 and the resukts will be announced on the whatsapp groups and will be mailed to you.</h3>
                        </Animator>
                        <Animator style={{width:"20%"}} animation={batch(MoveIn(0,1000), MoveOut(0,-1000), Sticky(!isMobile ? 85 : 50,!isMobile ? 65 : 50))}>
                                <h4 style={{ fontWeight:"lighter", textAlign:"left"}}>1-6 May, 2021</h4>
                                <h1>Prize Distribution</h1>
                                <h3 style={{ fontWeight:"lighter", textAlign:"left"}}>The winners will be contacted by our team for their addresses and the winning goodies will be sent at their addresses.</h3>
                        </Animator>
                        <Animator style={{width:"1%"}} animation={batch(MoveIn(0,1000), MoveOut(0,-1000), Sticky(!isMobile ? 70 : 50,!isMobile ? 50 : 50))}>
                                <div style={{backgroundColor:"white", height:"60vh", width:"0.5vw"}} />
                        </Animator>
                        <Animator animation={batch(MoveIn(0,1000), MoveOut(0,-1000), Sticky(!isMobile ? 70 : 50,!isMobile ? 80 : 50), )}>
                            <img className="mx-auto -mt-36 md:-mt-36" src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png" />
                        </Animator>
                         </>
                        :
                        <></>
                        }</span>
                </ScrollPage></section>
            </ScrollContainer>
    )
}

export default LandingPage;
