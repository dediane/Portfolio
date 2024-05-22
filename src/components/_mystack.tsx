import React from "react";
import styles from "@/styles/mystack.module.css";
import Image from "next/image";
import { useState } from "react";
import { motion } from "framer-motion";
import { frontEndTechnologies, backEndTechnologies, toolTechnologies, Skills } from "@/utils/technologies";

//tools
import git from "/public/logos/git-original.svg";
import github from "/public/logos/github-original.svg";
import trello from "/public/logos/trello-original.svg";
import notion from "/public/logos/notion-original.svg";
import ngnix from "/public/logos/nginx-original.svg";
import heroku from "/public/logos/heroku-plain-wordmark.svg";
import figma from "/public/logos/figma-original.svg";
import sketch from "/public/logos/sketch-line.svg";
import photoshop from "/public/logos/photoshop-plain.svg";
import illustrator from "/public/logos/illustrator-plain.svg";
import { InView } from "react-intersection-observer";

const TechnologyComponent = ({ tech, handleInteraction }: any) => (
    <>
        <Image
            src={tech.src}
            alt={tech.alt}
            width={40}
            height={40}
            onMouseEnter={() => handleInteraction(tech.name, tech.description)}
            onMouseLeave={() => handleInteraction('', '')}
            onTouchStart={() => handleInteraction(tech.name, tech.description)}
            onTouchEnd={() => handleInteraction('', '')}
        />
    </>
);

const DisplayArea = ({ techName, techDescription }: any) => (
    <div className={styles.titles}>
        {techName ? (
            <InView triggerOnce={false} threshold={0.5}>
                {({ ref, inView }) => (
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, y: 20 }}
                        animate={inView ? { opacity: 1, y: 0 } : {}}
                        transition={{ duration: 0.3, delay: 0 }}>
                        <p className={styles.technoName}>{techName}</p>
                        <p className={styles.technoDescription}>{techDescription}</p>
                    </motion.div>)}
            </InView>
        ) : (
            <p className={styles.placeholder}></p>
        )}
    </div>
);

const TechnologyStack = ({ title, technologies }: any) => {
    const [techName, setTechName] = useState('');
    const [techDescription, setTechDescription] = useState('');

    const handleInteraction = (name: any, description: any) => {
        setTechName(name);
        setTechDescription(description);
    };

    return (
        <div className={styles.card}>
            <div className={styles.title}>
                <InView triggerOnce={false} threshold={0.5}>
                    {({ ref, inView }) => (
                        <motion.h1
                            ref={ref}
                            initial={{ opacity: 0, y: 20 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.3, delay: 0.7 }}
                        >{title}</motion.h1>
                    )}
                </InView>

                <hr />
            </div>
            <InView triggerOnce={false} threshold={0.5}>
                {({ ref, inView }) => (
                    <motion.div
                        ref={ref}
                        initial={{ opacity: 0, x: -20 }}
                        animate={inView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.3, delay: 0.7 }}
                        className={styles.logos}
                    >
                        {technologies.map((tech: any) => (
                            <div key={tech.name}>
                                    <Image
                                    src={tech.src}
                                    alt={tech.alt}
                                    width={40}
                                    height={40}
                                    onMouseEnter={() => handleInteraction(tech.name, tech.description)}
                                    onMouseLeave={() => handleInteraction('', '')}
                                    onTouchStart={() => handleInteraction(tech.name, tech.description)}
                                    onTouchEnd={() => handleInteraction('', '')}
                                />
                            </div>
                            // <TechnologyComponent key={tech.name} tech={tech} handleInteraction={handleInteraction} />
                        ))}

                    </motion.div>
                )}
            </InView>
            <DisplayArea techName={techName} techDescription={techDescription} />
        </div>
    );
};

export const MyStack = () => (
    <>
        <div className={styles.container}>
            <TechnologyStack title="Front-End" technologies={frontEndTechnologies} />
            <TechnologyStack title="Back-End" technologies={backEndTechnologies} />
        </div>

    </>
);


{/* <TechnologyStack title="Tools" technologies={toolTechnologies} /> */ }
{/* <TechnologyStack title="Skills" technologies={Skills} /> */ }
{/* </div> */ }