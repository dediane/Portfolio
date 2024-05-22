import React, { useRef, useEffect, useState, useCallback } from "react";
import styles from "@/styles/aboutme.module.css";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";


export const AboutMe: React.FC<any> = () => {
    const [dot, setDot] = useState<number>(1);
    const carouselRef = useRef<HTMLDivElement>(null);
    const cardRefs = useRef<Array<HTMLDivElement | null>>([null, null, null, null]);

    useEffect(() => {
        cardRefs.current = cardRefs.current.slice(0, 4); // Adjust the number 4 if the number of cards changes
    }, []);

    // Debounce function to minimize state updates
    const debounce = useCallback((func: (num: number) => void, delay: number) => {
        let timer: NodeJS.Timeout;
        return function (...args: [number]) {
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
                const cardElement = entry.target;
                const id = cardElement.getAttribute('id');
                const num = id ? parseInt(id.replace('card', ''), 10) : 1;
                if (entry.isIntersecting) {
                    cardElement.classList.add('active');
                    if (num !== dot) { // Update only when the active dot actually changes
                        setDotDebounced(num);
                    }
                } else {
                    cardElement.classList.remove('active');
                }
            });
        }, {
            root: carouselRef.current,
            rootMargin: '0px',
            threshold: 0.5 // Adjust this threshold based on when you want the scale effect to trigger
        });

        cardRefs.current.forEach(card => {
            if (card) observer.observe(card);
        });

        return () => cardRefs.current.forEach(card => {
            if (card) observer.unobserve(card);
        });
    }, [dot, setDotDebounced]);

    return (
        <div className={styles.container} id="about">
            <div className={styles.wrapper}>
            {/* <h1>A LITTLE BIT ABOUT ME</h1> */}
            <div className={styles.left}>
                <div className={styles.tag2}></div>
            </div>
                <div className={`${styles.carouselContainer}`} ref={carouselRef}>
                    <div className={styles.navigationDots}>
                        {[1, 2, 3, 4].map(num => (
                            <a key={num} href={`#card${num}`} onClick={() => setDot(num)}>
                                {dot === num ? <div className={styles.dotActive}></div> : <div className={styles.dot}></div>}
                            </a>
                        ))}
                    </div>
                    <div className={styles.carousel}>
                        {[1, 2, 3, 4].map(num => (

                            <div key={num} id={`card${num}`} ref={el => {cardRefs.current[num - 1] = el}} className={`${styles.cardhold} `}>
                                {num === 1 && (
                                    <div className={` ${styles.card}`}>
                                        <InView triggerOnce={false} threshold={0.5}>
                                        {({ ref, inView }) => (
                                        <motion.div
                                         ref={ref}
                                         initial={{ opacity: 0, y: 20 }}
                                         animate={inView ? { opacity: 1, y: 0 } : {}}
                                         transition={{ duration: 0.5, delay: 0.3 }}
                                        >
                                            <b className={styles.subs}>👋 Hi, I’m Diane,</b><hr /><br /><br /> A <b>full-stack developer</b> in Paris. 🥖<br /> I started my career as a <b>fashion designer</b> and then fell in love with <b>coding</b>.<br /> Now, I combine my design sensibilities with my tech skills to <b>build beautiful</b>, effective <b>web and mobile applications</b>.
                                        </motion.div>
                                        )}
                                        </InView>
                                    </div>)}
                                {num === 2 && (
                                    <div className={` ${styles.card}`}>
                                        <InView triggerOnce={false} threshold={0.5}>
                                        {({ ref, inView }) => (
                                         <motion.div
                                         ref={ref}
                                         initial={{ opacity: 0, y: 20 }}
                                         animate={inView ? { opacity: 1, y: 0 } : {}}
                                         transition={{ duration: 0.5, delay: 0.3 }}
                                         >
                                            <b className={styles.subs}>⏳ Background</b><hr /><br /><br /> I graduated from <b>42 school</b> in Paris with a degree in <b>Computer Science</b> and I also hold a <b>master in Design</b>.<br /> I have worked on a variety of projects, including creating a <b>startup</b> called Evenly that helps people organize their events more efficiently.
                                         </motion.div>
                                          )}
                                          </InView>
                                    </div>
                                )}
                                {num === 3 && (
                                    <div className={` ${styles.card}`}>
                                         <InView triggerOnce={false} threshold={0.5}>
                                        {({ ref, inView }) => (
                                         <motion.div
                                         ref={ref}
                                         initial={{ opacity: 0, y: 20 }}
                                         animate={inView ? { opacity: 1, y: 0 } : {}}
                                         transition={{ duration: 0.5, delay: 0.3 }}
                                         >
                                            <b className={styles.subs}>👩🏻‍💻 Skills and Technologies</b><hr /><br /><br /> I am experienced with technologies like <b>React, Node.js, NextJS</b> and more.<br /> I focus on <b>creating applications</b> that are not just functional but also great to look at and easy to use. I love my apps to be interactive.
                                         </motion.div>
                                            )}
                                            </InView>
                                    </div>)}
                                {num === 4 && (
                                    <div className={` ${styles.card}`}>
                                         <InView triggerOnce={false} threshold={0.5}>
                                        {({ ref, inView }) => (
                                         <motion.div
                                         ref={ref}
                                         initial={{ opacity: 0, y: 20 }}
                                         animate={inView ? { opacity: 1, y: 0 } : {}}
                                         transition={{ duration: 0.4, delay: 0.3 }}
                                         ><b className={styles.subs}>🤝 Working With Me</b><hr /><br /> <br />I like keeping things <b>simple and transparent</b> with my clients. I will work with you to understand what you need, and I will keep you updated as I bring our shared <b>vision to life</b>. I love Agile methodologies and I am always open to feedback.
                                         </motion.div>
                                            )}
                                            </InView>
                                    </div>)}
                            </div>
                        ))}
                    </div>
                </div>
                </div>
        </div>
    );
};









