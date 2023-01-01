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
                    <Animator animation={batch(Sticky(50,55),Fade())}>
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
                    <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
                    <span style={{ fontSize: "30px" }}>Let me show you scroll animation 😀</span>
                    </Animator>
                </ScrollPage>
                <ScrollPage>
                    <Animator animation={ZoomInScrollOut}>
                    <span style={{ fontSize: "40px" }}>I'm FadeUpScrollOut ✨</span>
                    </Animator>
                </ScrollPage>
                <ScrollPage>
                    <Animator animation={FadeUp}>
                    <span style={{ fontSize: "40px" }}>I'm FadeUp ⛅️</span>
                    </Animator>
                </ScrollPage>
                <ScrollPage>
                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", height: "100%" }} >
                    <span style={{ fontSize: "40px" }}>
                        <Animator animation={MoveIn(-1000, 0)}>Hello Guys 👋🏻</Animator>
                        <Animator animation={MoveIn(1000, 0)}>Nice to meet you 🙋🏻‍♀️</Animator>
                        - I'm Dante Chun -
                        <Animator animation={MoveOut(1000, 0)}>Good bye ✋🏻</Animator>
                        <Animator animation={MoveOut(-1000, 0)}>See you 💛</Animator>
                    </span>
                    </div>
                </ScrollPage>
                <ScrollPage>
                    <Animator animation={batch(Fade(), Sticky())}>
                    <span style={{ fontSize: "40px" }}>Done</span>
                    <br/>
                    <span style={{ fontSize: "30px" }}>
                        There's FadeAnimation, MoveAnimation, StickyAnimation, ZoomAnimation
                    </span>
                    </Animator>
                </ScrollPage>
            </ScrollContainer>
        </div>
    );
}

export default LandingPage;
