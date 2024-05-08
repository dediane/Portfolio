

import React, { useRef, useEffect, useState } from "react";
import styles from "@/styles/aboutme.module.css";

export const AboutMe: React.FC = () => {
    const [dot, setDot] = useState<number>(1);
    const carouselRef = useRef<HTMLDivElement>(null);
    const cardRefs = useRef<Array<HTMLDivElement | null>>([null, null, null, null]);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    const num = id ? parseInt(id.replace('card', ''), 10) : 1;
                    setDot(num);
                }
            });
        }, {
            root: carouselRef.current,
            rootMargin: '0px',
            threshold: 0.5 // Adjust this value based on when you want the dot to change (0.5 means 50% of the item is visible)
        });

        const cards = cardRefs.current;
        cards.forEach(card => {
            if (card) {
                observer.observe(card);
            }
        });

        return () => {
            cards.forEach(card => {
                if (card) {
                    observer.unobserve(card);
                }
            });
        };
    }, []); // Empty dependency array ensures this effect runs only once at mount

    return (
        <div className={styles.container} id="about">
            <div className={styles.left}>
                <h1>A LITTLE BIT ABOUT ME</h1>
            </div>
            <div className={styles.carouselContainer} ref={carouselRef}>
                <div className={styles.navigationDots}>
                    {[1, 2, 3, 4].map(num => (
                        <a key={num} href={`#card${num}`} onClick={() => setDot(num)}>
                            {dot === num ? <div className={styles.dotActive}></div> : <div className={styles.dot}></div>}
                        </a>
                    ))}
                </div>
                <div className={styles.carousel}>
                    {[1, 2, 3, 4].map(num => (
                        <div key={num} id={`card${num}`} ref={el => cardRefs.current[num - 1] = el} >
                            {num === 1 && (
                                <div id="card1" className={`${styles.section} ${styles.card}`}>
                                    <p>
                                        <b className={styles.subs}>Hi, I’m Diane,</b><br /><br /> A <b>full-stack developer</b> in Paris. 🥖<br /> I started my career as a <b>fashion designer</b> and then fell in love with <b>coding</b>.<br /> Now, I combine my design sensibilities with my tech skills to <b>build beautiful</b>, effective <b>web and mobile applications</b>.
                                    </p>
                                </div>)}
                            {num === 2 && (
                                <div id="card2" className={`${styles.section1} ${styles.card}`}>
                                    <p>
                                        <b className={styles.subs1}>Background</b><br /><br /> I graduated from <b>42 school</b> in Paris with a degree in <b>Computer Science</b> and I also hold a <b>master's in Design</b>.<br /> I’ve worked on a variety of projects, including creating a <b>startup</b> called "Evenly" that helps people organize their events more efficiently.
                                    </p>
                                </div>)}
                            {num === 3 && (
                                <div id="card3" className={`${styles.section2} ${styles.card}`}>
                                    <p>
                                        <b className={styles.subs2}>Skills and Technologies</b><br /><br /> I'm experienced with technologies like <b>React, Node.js, NextJS</b> and more.<br /> I focus on <b>creating applications</b> that are not just functional but also great to look at and easy to use.
                                    </p>
                                </div>)}
                            {num === 4 && (
                                <div id="card4" className={`${styles.section3} ${styles.card}`}>
                                    <p><b className={styles.subs3}>Working With Me</b><br /> <br />I like keeping things <b>simple and transparent</b> with my clients. I’ll work with you to understand what you need, and I'll keep you updated as I bring our shared <b>vision to life</b>.
                                    </p>
                                </div>)}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};












{/* <p><b>Offerings:</b></p>
<p>

<li>End-to-end development from initial idea to final product.</li>
<li>Collaborative updates to ensure the project is aligning with your expectations.</li>
<li>Quick iterations to adapt features according to your feedback.</li>
<b>Get in Touch!</b> If you’re looking to build something new or improve an existing application, I’d love to help. Let’s make your project a success together!
</p> */}

{/* <p>Hi, I'm Diane, a full-stack developer based in Paris 🥖.
    I have a passion for designing 🖍 and creating web applications with good design 🎨. 
    I am an ex-fashion designer 👗 who turned into a developer 👩🏻‍💻. 
    
    I am graduated in Computer Science at 42 school in Paris but I also own a master in Design.

    I love to learn new technologies and share my knowledge with others.
    I am a creative, problem solver, and team player.
    I build web and mobile applications with a focus on user experience, design and performance.
    I built a startup called "Evenly" that helps people organize their events.
</p> */}
