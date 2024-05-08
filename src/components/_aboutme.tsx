import React, { useRef, useEffect, useState, useCallback } from "react";
import styles from "@/styles/aboutme.module.css";

export const AboutMe: React.FC<AboutMeProps> = () => {
    const [dot, setDot] = useState<number>(1);
    const carouselRef = useRef<HTMLDivElement>(null);
    const cardRefs = useRef<Array<HTMLDivElement | null>>([null, null, null, null]);

    useEffect(() => {
        cardRefs.current = cardRefs.current.slice(0, 4); // Adjust the number 4 if the number of cards changes
    }, []);

    // Debounce function to minimize state updates
    const debounce = useCallback((func: (num: number) => void, delay: number) => {
        let timer: NodeJS.Timeout;
        return function (...args: number[]) {
            clearTimeout(timer);
            timer = setTimeout(() => {
                func(...args);
            }, delay);
        };
    }, []);

    // Debounced version of setDot
    const setDotDebounced = useCallback(debounce(setDot, 100), [debounce]);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.getAttribute('id');
                    const num = id ? parseInt(id.replace('card', ''), 10) : 1;
                    if (num !== dot) { // Update only when the active dot actually changes
                        setDotDebounced(num);
                    }
                }
            });
        }, {
            root: carouselRef.current,
            rootMargin: '0px',
            threshold: 0.5
        });

        const cards = cardRefs.current;
        cards.forEach((card, index) => {
            if (card) {
                observer.observe(card);
            } else {
                // Assign refs if they are not already assigned
                cards[index] = document.getElementById(`card${index + 1}`) as HTMLDivElement;
                if (cards[index]) {
                    observer.observe(cards[index]);
                }
            }
        });

        return () => {
            cards.forEach(card => {
                if (card) {
                    observer.unobserve(card);
                }
            });
        };
    }, [dot, setDotDebounced]); // Empty dependency array ensures this effect runs only once at mount

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

<div key={num} id={`card${num}`} ref={el => cardRefs.current[num - 1] = el} className={`${styles.card} `}>
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
                                        <b className={styles.subs2}>Skills and Technologies</b><br /><br /> I'm experienced with technologies like <b>React, Node.js, NextJS</b> and more.<br /> I focus on <b>creating applications</b> that are not just functional but also great to look at and easy to use. I love my apps to be interactive.
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











