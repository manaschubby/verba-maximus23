import React from 'react';
import dynamic from "next/dynamic";
const Animator = dynamic(
    import("react-scroll-motion").then((it) => it.Animator),
    { ssr: false }
);
import { useState, useEffect, useRef } from 'react';
import { ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";

"/Images/maxresdefault.jpg"
const LandingPage = () => {
    
    return (
        <div>
            <section id="main"><TitleComponent /></section>
            <section id="contact">
                <div className='landing-contact' style={{backgroundColor: "black" }} >
                    <div className='sub-heading-title' style={{ fontSize: "8vh", color: "rgb(250, 200, 200)" }}>Contact Us</div>
                    <div style={
                        {
                            display: "flex",
                            flexDirection: "column",
                            flexFlow: "wrap",
                            alignItems: "center",
                            marginTop: "1%",
                            height: "60vh",
                            backgroundImage: "url(/metamorphosisLogo.svg)",
                            backgroundSize: 'contain',
                            backgroundRepeat: 'no-repeat',
                            filter: "invert(100%)"
                        }}
                        className='landing-cards'
                    >
                        <div className='landing-card' style={{ background: "none", color: "black" }}>
                            <div style={{}} className='card-title'>
                                <b> ELAS BPHC</b>
                            </div>
                            <div className='card-time'>
                                Email : <a style={{ opacity: 0.5, color: "black" }} href='mailto:elas@hyderabad.bits-pilani.ac.in'>elas@hyderabad.bits-pilani.ac.in</a>
                            </div>
                            {/* <div className='card-desc'>
                                Phone : <a style={{ opacity: 0.5, color: "black" }} href="phone:1234GETONTHEDANCEFLOOR">1234GETONTHEDANCEFLOOR</a>
                            </div> */}
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
                    <Animator animation={batch(Sticky(), Fade())}>
                        <div className='title-image' />
                    </Animator>
                    <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -20))}>
                        <div className='title'>VÈRBA MAXIMUS {!isMobile ? <></> : <br />}2023</div>
                    </Animator>


                    <Animator animation={batch(Fade(), Sticky(50, !lowHeight ? 60 : 80), MoveOut(0, -20))}>
                        <div className='sub-title'>28-29 JAN</div>
                    </Animator>
                </ScrollPage></section>
            <ScrollPage>
                <Animator animation={FadeUp}>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                    }}>
                        <div style={{ fontSize: !isMobile ? "10vw" : "7vh" }}>Metamorphosis</div>
                        <div style={{ fontSize: !isMobile ? "1.5vw" : "2vh", marginTop: "6vh", textAlign: "center" }}>The English Language Activies Society is back again with the literary fest of the year here at <br /> BITS Pilani, Hyderabad Campus.</div>
                    </div>
                </Animator>
            </ScrollPage>
            <section id="schedule"><ScrollPage style={{ backgroundColor: "rgb(60, 10, 8)" }}>


                <span style={{
                    color: "white"
                }}>

                    <Animator style={
                        {
                            width: !isMobile ? "20%" : "40%"
                        }
                    } animation={batch(MoveIn(0, 1000), MoveOut(0, -1000), Sticky(!isMobile ? 55 : 25, !isMobile ? 30 : 20))}>
                        <h4 style={
                            {
                                fontWeight: "lighter",
                                textAlign: "right"
                            }
                        }>1-6 May, 2021</h4>
                        <h1 style={
                            {
                                textAlign: "right"
                            }
                        }>Registration</h1>
                        <h3 style={
                            {
                                fontWeight: "lighter",
                                textAlign: "right"
                            }
                        }>Pick your favourite event(s) and register in that event by filling the form corresponding to that event. Its that easy :)</h3>
                    </Animator>
                    <Animator style={
                        {
                            width: !isMobile ? "20%" : "40%"
                        }
                    } animation={batch(MoveIn(0, 1000), MoveOut(0, -1000), Sticky(!isMobile ? 85 : 75, !isMobile ? 45 : 30))}>
                        <h4 style={
                            {
                                fontWeight: "lighter",
                                textAlign: "left"
                            }
                        }>1-6 May, 2021</h4>
                        <h1 style={
                            { textAlign: "left" }
                        }>Participation</h1>
                        <h3 style={
                            {
                                fontWeight: "lighter",
                                textAlign: "left"
                            }
                        }>Participate online. The links for your registered events will be sent to you via email and whatsapp groups. Use those links and show your talent.</h3>
                    </Animator>
                    <Animator style={
                        {
                            width: !isMobile ? "20%" : "40%"
                        }
                    } animation={batch(MoveIn(0, 1000), MoveOut(0, -1000), Sticky(!isMobile ? 55 : 25, !isMobile ? 60 : 75))}>
                        <h4 style={
                            {
                                fontWeight: "lighter",
                                textAlign: "right"
                            }
                        }>1-6 May, 2021</h4>
                        <h1 style={
                            {
                                textAlign: "right"
                            }
                        }>Result Declaration</h1>
                        <h3 style={
                            {
                                fontWeight: "lighter",
                                textAlign: "right"
                            }
                        }>The ultimate genius will be revealed by our judging panel on 10th May, 2021 and the resukts will be announced on the whatsapp groups and will be mailed to you.</h3>
                    </Animator>
                    <Animator style={
                        {
                            width: !isMobile ? "20%" : "40%"
                        }
                    } animation={batch(MoveIn(0, 1000), MoveOut(0, -1000), Sticky(!isMobile ? 85 : 75, !isMobile ? 75 : 80))}>
                        <h4 style={
                            {
                                fontWeight: "lighter",
                                textAlign: "left"
                            }
                        }>1-6 May, 2021</h4>
                        <h1>Prize Distribution</h1>
                        <h3 style={
                            {
                                fontWeight: "lighter",
                                textAlign: "left"
                            }
                        }>The winners will be contacted by our team for their addresses and the winning goodies will be sent at their addresses.</h3>
                    </Animator>
                    <Animator style={
                        {
                            width: "1%"
                        }
                    } animation={batch(MoveIn(0, 1000), MoveOut(0, -1000), Sticky(!isMobile ? 70 : 50, !isMobile ? 45 : 50))}>
                        <div style={
                            {
                                backgroundColor: "rgb(250, 200, 200)",
                                height: "60vh",
                                width: "0.5vw"
                            }
                        } />
                    </Animator>
                    {/* {!isMobile?<Animator animation={batch(MoveIn(0,1000), MoveOut(0,-1000), Sticky(!isMobile ? 70 : 50,!isMobile ? 80 : 50), )}>
                            <img style={{scale:"0.8"}} src="https://user-images.githubusercontent.com/54521023/116968861-ef21a000-acd2-11eb-95ac-a34b5b490265.png" />
                        </Animator>:<></>} */}

                </span>
                {isMobile ? <Animator animation={batch(FadeIn(-3.5, 1), FadeOut(1, -0.3), Move(), Sticky(!isMobile ? 25 : 50, !isMobile ? 40 : 20))}>
                    <div style={
                        {
                            height: "20vh",
                            width: "60vw",
                            borderRadius: "30px",
                            filter: "blur(10px)",
                            backgroundColor: "rgb(60, 10, 8)"
                        }
                    }></div>
                </Animator> : <></>}
                <Animator animation={batch(FadeIn(-0.5, 1), FadeOut(1, !isMobile ? -0.5 : -0.3), Move(), Sticky(!isMobile ? 25 : 50, !isMobile ? 40 : 20))}>
                    <div style={{
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                    }}>
                        <div style={
                            {
                                color: "white",
                                fontWeight: "lighter",
                                fontSize: !isMobile ? "10vw" : "7vh",
                                textAlign: "center"
                            }
                        }>Schedule</div>
                        <div style={
                            {
                                color: "white",
                                fontWeight: "lighter",
                                fontSize: !isMobile ? "1.5vw" : "2vh",
                                marginTop: !isMobile ? "6vh" : "2vh",
                                textAlign: "center"
                            }
                        }>Here’s your guide to Metamorphosis, Verbamaximus 2023.</div>
                    </div>
                </Animator>
            </ScrollPage></section>
        </ScrollContainer>
    )
}



export default LandingPage;
