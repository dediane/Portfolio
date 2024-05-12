import React from "react";
import styles from "@/styles/mystack.module.css";
import Image from "next/image";
import { useState } from "react";
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

const TechnologyComponent = ({ tech, handleInteraction }: any) => (
    <>
    <Image
        priority
        src={tech.src}
        alt={tech.alt}
        width={50}
        height={50}
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
            <div>
                <p className={styles.technoName}>{techName}</p>
                <p className={styles.technoDescription}>{techDescription}</p>
            </div>
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
        <div className={title.includes('Front') ? styles.front : title.includes('Back') ? styles.back : title.includes('Tools') ? styles.tools : styles.skills}>
            <div className={styles.title}>
                <h1>{title}</h1>
                <div className={styles.dots}>
                    <div className={styles.dot1}></div>
                    <div className={styles.dot2}></div>
                    <div className={styles.dot3}></div>
                </div>
            </div>
            <div className={styles.logos}>
                {technologies.map((tech: any) => (
                    <TechnologyComponent key={tech.name} tech={tech} handleInteraction={handleInteraction} />
                ))}
            </div>
            <DisplayArea techName={techName} techDescription={techDescription} />
        </div>
    );
};

export const MyStack = () => (
    <>
        <div className={styles.container}>
            <div className={styles.wrap}>
            <div className={styles.left}>
                <h1>TOOLS I LOVE TO USE</h1>
            </div>
            <div className={styles.right}>
                <div className={styles.wrapper}>
                    <TechnologyStack title="Front-End" technologies={frontEndTechnologies} />
                    <TechnologyStack title="Back-End" technologies={backEndTechnologies} />
                    <TechnologyStack title="Tools" technologies={toolTechnologies} />
                    <TechnologyStack title="Skills" technologies={Skills} />
                </div>
            </div>
            </div>
        </div>
    </>
);