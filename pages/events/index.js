import Head from 'next/head';
import React from 'react';
import NavBar from '../Components/NavBar/NavBar';
import { useState, useEffect, useRef } from 'react';
const EventsPage = () => {
    const [eventShown, setEventShown] = useState(false)
    const [event, setEvent] = useState({
        title: "",
        time: "",
        desc: ""
    })
    const showEvent = (index) => {
        setEvent(events[index]);
        setEventShown(true);
    }
    const events = [
        {
            title: "METAMORPHOSIS",
            desc: `Our theme's titular event, METAMORPHOSIS. Play the role of Gregor Samsa (from Metamorphosis by Kafka) as participants write their way out of sticky situations and challenges that we throw in their way! As part of the OC, we will have to come up with different prompts and situations for the participants to write on.`,
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
    return (
        <div>
            <Head>
                <title>Verba Maximus 2023</title>
                <meta name="description" content="Official website for VM '23" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <NavBar />
            <section id="events">
                <div className='landing-events' id="events">
                    <div className='sub-heading-title'>EVENTS</div>
                    {eventShown && <EventDetail name={event.title} desc={event.desc} time={event.time} setEventShown={setEventShown} onClickOutside={() => setEventShown(false)}></EventDetail>}
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
        </div>
    );
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
                {name.toUpperCase()}
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

export default EventsPage;
