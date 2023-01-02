import React from 'react';
import NavBar from './NavBar/NavBar';
import dynamic from "next/dynamic";
const Animator = dynamic(
  import("react-scroll-motion").then((it) => it.Animator),
  { ssr: false }
);
import { ScrollContainer, ScrollPage, batch, Fade, FadeIn, FadeOut, Move, MoveIn, MoveOut, Sticky, StickyIn, StickyOut, Zoom, ZoomIn, ZoomOut } from "react-scroll-motion";

"/Images/maxresdefault.jpg"
const LandingPage = () => {
    const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
    const FadeUp = batch(Fade(), Move(), Sticky());

    return (
        <div>
            <ScrollContainer>
                <ScrollPage>
                    <Animator animation={batch(Sticky(),Fade())}>
                        <div className='title-image' />
                    </Animator>
                    <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -20))}>
                        <div className='title'>VÈRBA MAXIMUS 2023</div>
                    </Animator>
                    <Animator animation={batch(Fade(), Sticky(50,60), MoveOut(0, -20))}>
                        <div className='sub-title'>28-29 JAN</div>
                    </Animator>                
                </ScrollPage>
                <ScrollPage>
                    <Animator animation={FadeUp}>
                        <div classname="scroll2-title" style={{ fontSize: "10vw" }}>Metamorphosis</div>
                    </Animator>
                </ScrollPage>
                <ScrollPage>

                    <Animator animation={batch(MoveIn(-1000, 0), Sticky(40, 50), Fade())}>EVENTS</Animator>
                
                <div style={{fontSize:"3vw", position:"absolute", left:"50%", top:"50%"}}>Event 1</div>
                <div style={{fontSize:"3vw", position:"absolute", left:"50%", top:"55%"}}>Event 1</div>
                <div style={{fontSize:"3vw", position:"absolute", left:"50%", top:"60%"}}>Event 1</div>
                <div style={{fontSize:"3vw", position:"absolute", left:"50%", top:"65%"}}>Event 1</div>
                <div style={{fontSize:"3vw", position:"absolute", left:"50%", top:"70%"}}>Event 1</div>
            </ScrollPage>
                    {/* <Animator animation={batch(MoveIn(0,400),Sticky(50,60))}><div>Event 1</div></Animator>
                
                    <Animator animation={batch(MoveIn(0,300),Sticky(50,65))}><div>Event 1</div></Animator>
                
                    <Animator animation={batch(MoveIn(0,200),Sticky(50,70))}><div>Event 1</div></Animator>
                
                    <Animator animation={batch(MoveIn(0,100),Sticky(50,75))}><div>Event 1</div></Animator>
                 */}
            </ScrollContainer>
            <div style={{ marginTop: "0vw" }}><h1>contact</h1></div>
            <div><h1>contact</h1></div>
            <div><h1>contact</h1></div>
            <div><h1>contact</h1></div>
            <div><h1>contact</h1></div>
            <div><h1>contact</h1></div>
            <div><h1>contact</h1></div>
            <div><h1>contact</h1></div>
            <div><h1>contact</h1></div>
            <div><h1>contact</h1></div>
            <div><h1>contact</h1></div>
            <div><h1>contact</h1></div>
            <div><h1>contact</h1></div>
            <div><h1>contact</h1></div>
            <div><h1>contact</h1></div>
            <div><h1>contact</h1></div>
            <div><h1>contact</h1></div>
            <div><h1>contact</h1></div>
            <div><h1>contact</h1></div>
        </div>
    );
}

export default LandingPage;
