import React from "react";
import styles from "@/styles/helpyou.module.css";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import Link from "next/link";

const help = [
    {
        number: "01",
        title: "Design",
        text: "I build your visual identity and I deliver strong and user-friendly digital designs."
    },
    {
        number: "02",
        title: "Development",
        text: "I build scalable full stack applications or websites from scratch that fit seamlessly with design. My focus is on micro animations, transitions and interaction. "
    },
    {
        number: "03",
        title: "✧ The full package",
        text: "A complete website or application from concept to implementation, that's what makes me stand out. My great sense for design and my development skills enable me to create kick-ass projects."
    }
]

const Card = ({ number, title, text }: { number: string, title: string, text: string }) => {
    return (
        <div className={styles.card} id="help">
            <h2>{number}</h2>
            <InView triggerOnce={false} threshold={0.5}>
                    {({ ref, inView }) => (
                     <motion.h3
                     ref={ref}
                     initial={{ opacity: 0, y: 20 }}
                     animate={inView ? { opacity: 1, y: 0 } : {}}
                     transition={{ duration: 0.3, delay: 0.7 }}
                    >{title}</motion.h3>
                    )}
            </InView>
            <InView triggerOnce={false} threshold={0.5}>
                {({ref, inView }) => (
            <motion.p
            ref={ref}
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.3, delay: 1 }}
            >{text}</motion.p>
                )}
            </InView>
        </div>
    )
}

export const HelpYou = () => {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.wrapper}>
                    <h1>I can help you with...</h1>
                    <div className={styles.cards}>
                        {help.map((item) => (
                            <Card
                                key={item.number}
                                number={item.number}
                                title={item.title}
                                text={item.text}
                            />
                        ))}
                    </div>
                    <Link href="#contact">
                    <div className={styles.ctawrapper}>
                        <div className={styles.cta}>
                            <p>Get in touch</p>
                        </div>
                    </div>
                    </Link>
                </div>
            </div>
        </>
    )
}
