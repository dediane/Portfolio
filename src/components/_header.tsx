import React, { useEffect, useRef } from "react";
import styles from "@/styles/header.module.scss";
import Image from "next/image";
import { FaArrowDown } from "react-icons/fa6";
import diane from "/public/assets/diane2.png";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";

export const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.leftsection}>
                <FaArrowDown className={styles.arrow}/>
                <InView triggerOnce={false} threshold={0.5}>
                    {({ ref, inView }) => (
                        <motion.h1
                            ref={ref}
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 1 }}
                        >
                            Freelance
                        </motion.h1>
                    )}
                </InView>
                <InView triggerOnce={false} threshold={0.5}>
                    {({ ref, inView }) => (
                        <motion.h1
                            ref={ref}
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: 1 }}
                        >
                            Designer & Developer
                        </motion.h1>
                    )}
                </InView>
                <h2>Fullstack developper specialized into crafting creative unique digital experiences.</h2>

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