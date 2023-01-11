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
    const [eventShown, setEventShown] = useState(false)
    const [event, setEvent] = useState({
        title: "",
        time: "",
        desc: ""
    })
    const events = [
        {
            title: "METAMORPHOSIS",
            desc: `There has been a murder on campus. In this evolving case that has roped in eight separate individuals, confusion has been the only constant. You are our only shot at solving this murder mystery. Interrogate and cross-examine the eight suspects as you attempt to uncover the truth at SHERLOCKED, VM 2O22, and help us crack the case!`,
            time: "at night"
        }, {
            title: "Sherlocked",
            desc: `There has been a murder on campus. In this evolving case that has roped in eight separate individuals, confusion has been the only constant. You are our only shot at solving this murder mystery. Interrogate and cross-examine the eight suspects as you attempt to uncover the truth at SHERLOCKED, VM 2O22, and help us crack the case!`,
            time: "at night"
        },
        {
            title: "ARG",
            desc: `ARG - “Alternate Reality Game” is an internet maze where your team navigates through an online labyrinth in search for answers of a gripping story that has twists and turns at every corner. Can you braid together the web of clues present in the vastness of cyberspace and unravel the nuances of the narratives?
        Mental fortitude and thinking on your feet are helpful traits as the ARG is sure to test your patience, but rest assured it’s a very rewarding experience that is sure to satiate your thirst for an adventurous thrill.`,
            time: "at night"
        },
        {
            title: "RENAISSANCE",
            desc: `Re-birth themed writing prompts- rebirth of 2020s (may use covid-19 as inspiration as renaissance in the 21st century), rebirth in your own life (some event that changed your perception of the world), you being reborn as someone from the past you’ve always wanted to be (write a day in their life). `,
            time: "at night"
        },
        {
            title: "Slam Poetry",
            desc: "Slam is a competitive event in which poets perform spoken word poetry in front of a live audience and a panel of judges. A poem is a form of expressing oneself in the utmost creative way possible. Rhyming or non-rhyming, narrative or Lyrical, the participants will have the right to write whatever and however they want.",
            time: "at night"
        },
        {
            title: "Picture Perspective",
            desc: "With Picture Perspective, the photography club is here to give you an opportunity to stare deep into yourself as you carefully try to unravel the meaning of a few complex brushstrokes. Participants will be given picture prompts and will be given the opportunity to write according to their hearts desire.",
            time: "at night"
        },
        {
            title: "SYMPHONIES OF THE SOUL",
            desc: "The Music club is here to bring out the poet in you within you. Symphonies of the soul. They play the instruments and you write the songs. Get that hand moving and write about whatever the melodies make you feel. ",
            time: "at night"
        },
        {
            title: "ShipWrecked",
            desc: "A host of your favourite characters from popular culture find themselves on a sinking ship. The problem - there is only one life jacket. Put yourself in their shoes and argue for why they deserve to keep their life the most.  ",
            time: "at night"
        },
        {
            title: "DEVIL’S ADVOCATE",
            desc: "Are you ready to venture into the realm of the morally grey and utterly outrageous, as you go against your own morals to defend your cause? If you feel you are good at defending your stand no matter what, suit up and get ready to play Devil’s Advocate.",
            time: "at night"
        }]
    const showEvent = (index) => {
        setEvent(events[index]);
        setEventShown(true);

    }
    return (
        <div>
            {eventShown && <EventDetail name={event.title} desc={event.desc} time={event.time} setEventShown={setEventShown} onClickOutside={() => setEventShown(false)}></EventDetail>}
            <section id="main"><TitleComponent /></section>
            <section id="events">
                <div className='landing-events' id="events">
                    <div className='sub-heading-title'>EVENTS</div>
                    <div className='landing-cards' >
                        {events.map((event, i) => {
                            return (<div className='landing-card' onClick={() => showEvent(i)} key={i}>
                                <div className='card-title'>
                                    {event.title}
                                </div>
                                <div className='card-time'>
                                    <b>TIME</b>: {event.time}
                                </div>
                                <div className='card-desc'>
                                    {event.desc.toString().slice(0, 100)}...
                                </div>
                            </div>)
                        })}
                    </div>
                </div>
            </section>
            <section id="contact">
                <div className='landing-events' style={{ marginTop: "10vh", backgroundColor: "black" }} >
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
                <Animator animation={batch(FadeIn(-0.5, 1), FadeOut(1, -0.3), Move(), Sticky(!isMobile ? 25 : 50, !isMobile ? 40 : 20))}>
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

const EventDetail = ({ name, time, desc, setEventShown, onClickOutside }) => {
    const ref = useRef(null);
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (ref.current && !ref.current.contains(event.target)) {
                onClickOutside && onClickOutside();
            }
        };
        document.addEventListener('click', handleClickOutside, true);
        return () => {
            document.removeEventListener('click', handleClickOutside, true);
        };
    }, [onClickOutside]);
    return (
        <div ref={ref} className='event-detail-card'>
            <div className='detail-title'>
                {name}
            </div>
            <div className='detail-time'>
                TIME : {time}
            </div>
            <div className='detail-desc'>
                {desc}
            </div>
            <button className='exit' onClick={(e) => {
                e.preventDefault();
                setEventShown(false);
            }}>
                CLOSE
            </button>
        </div>
    )
}

export default LandingPage;
