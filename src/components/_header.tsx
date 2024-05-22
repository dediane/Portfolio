import React, { useEffect, useRef } from "react";
import styles from "@/styles/header.module.scss";
import Image from "next/image";
import { FaArrowDown } from "react-icons/fa6";
import diane from "/public/assets/diane2.png";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";

export const Header = () => {
    return (
        <div className={styles.header} id="home">
            <div className={styles.leftsection}>
                    {/* <FaArrowDown className={styles.arrow}/> */}
                <InView triggerOnce={false} threshold={0.5}>
                    {({ ref, inView }) => (
                        <motion.h1
                            ref={ref}
                            initial={{ opacity: 0, y: -20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.4 }}
                            className={styles.title}
                        >
                            CREATIVE
                        </motion.h1>
                    )}
                </InView>
                <InView triggerOnce={false} threshold={0.5}>
                    {({ ref, inView }) => (
                        <motion.h1
                            ref={ref}
                            initial={{ opacity: 0, y: -20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.5 }}
                            className={styles.title2}
                        >
                            FULLSTACK
                        </motion.h1>
                    )}
                </InView>
                <InView triggerOnce={false} threshold={0.5}>
                    {({ ref, inView }) => (
                        <motion.h1
                            ref={ref}
                            initial={{ opacity: 0, y: -20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 0.6 }}
                            className={styles.title}
                        >
                            DEVELOPPER
                        </motion.h1>
                    )}
                </InView>
                <h2>Freelance fullstack developper specialized into crafting creative unique digital experiences.</h2>

                {/* <h1 className={styles.title}>CREATIVE</h1>
                <h1 className={styles.title3}>FULL-STACK</h1>
                <h1 className={styles.title4}>DEVELOPPER</h1>
                <button className={styles.button1}>Let's discuss about your project</button>
            <button className={styles.button2}>Book a call</button> */}
            </div>
            <div className={styles.rightsection}>
                <div className={styles.blob}></div>
            </div>
        </div>
    );
};