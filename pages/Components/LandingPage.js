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
            <TitleComponent />
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
            </div></section>
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
                </ScrollPage>
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
            </ScrollContainer>
    )
}

export default LandingPage;
