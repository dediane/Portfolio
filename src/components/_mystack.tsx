import React from "react";
import styles from "@/styles/mystack.module.css";
import Image from "next/image";
import { useState } from "react";

//front
import css from "/public/logos/css3-original.svg";
import html from "/public/logos/html5-original.svg";
import javascript from "/public/logos/javascript-original.svg";
import react from "/public/logos/react-original.svg";
import tailwind from "/public/logos/tailwindcss-original.svg";
import typescript from "/public/logos/typescript-original.svg";
import nextjs from "/public/logos/nextjs-original.svg";
import bootstrap from "/public/logos/bootstrap-original.svg";

//back
import nodejs from "/public/logos/nodejs-original-wordmark.svg";
import c from "/public/logos/c-original.svg";
import cpluscplus from "/public/logos/cplusplus-original.svg";
import express from "/public/logos/express-original.svg";
import nestjs from "/public/logos/nestjs-original.svg";
import mongodb from "/public/logos/mongodb-original-wordmark.svg";
import postgres from "/public/logos/postgresql-original.svg";
import firebase from "/public/logos/firebase-plain-wordmark.svg";
import prisma from "/public/logos/prisma-original-wordmark.svg";
import docker from "/public/logos/docker-plain-wordmark.svg";
import python from "/public/logos/python-original.svg";

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



export const MyStack = () => {
    return (
        <>
            <h1>My favourites technologies are...</h1>
            <div className={styles.container}>
                <FrontStack />
                <BackStack />
                <Tools />
                <Skills />
            </div>
        </>
    );
}

const FrontStack = () => {
    // States for technology name and description
    const [techName, setTechName] = useState('');
    const [techDescription, setTechDescription] = useState('');

    // Data array with tech info
    const technologies = [
        { src: html, alt: "HTML Logo", description: "HyperText Markup Language, the backbone of web content structure.", name: "HTML" },
        { src: css, alt: "CSS Logo", description: "Cascading Style Sheets, for styling web pages.", name: "CSS" },
        { src: javascript, alt: "JavaScript Logo", description: "High-level, often just-in-time compiled language that conforms to the ECMAScript specification.", name: "JavaScript" },
        { src: typescript, alt: "TypeScript Logo", description: "A strict syntactical superset of JavaScript, adds static types.", name: "TypeScript" },
        { src: react, alt: "React Logo", description: "A JavaScript library for building user interfaces.", name: "React" },
        { src: nextjs, alt: "Next.js Logo", description: "A React framework for production.", name: "Next.js" },
        { src: tailwind, alt: "Tailwind CSS Logo", description: "A utility-first CSS framework for rapidly building custom designs.", name: "Tailwind CSS" },
        { src: bootstrap, alt: "Bootstrap Logo", description: "A free and open-source CSS framework directed at responsive, mobile-first front-end web development.", name: "Bootstrap" }
    ];

    return (
        <div className={styles.front}>
            <h1>Front-End</h1>
            <div className={styles.logos}>
                {technologies.map((tech) => (
                    <Image
                        priority
                        src={tech.src}
                        alt={tech.alt}
                        width={50}
                        height={50}
                        onMouseEnter={() => {
                            setTechName(tech.name);
                            setTechDescription(tech.description);
                        }}
                        onMouseLeave={() => {
                            setTechName('');
                            setTechDescription('');
                        }}
                    />
                ))}
            </div>
            <div className={styles.titles}>
                {techName ? <div><p className={styles.technoName}>{techName}</p><p className={styles.technoDescription}>{techDescription}</p></div> : <p className={styles.placeholder}></p>}
            </div>
        </div>
    );
}

const BackStack = () => {
    // States for technology name and description
    const [techName, setTechName] = useState('');
    const [techDescription, setTechDescription] = useState('');

    // Data array with tech info
    const technologies = [
        { src: c, alt: "C Logo", description: "General-purpose programming language.", name: "C" },
        { src: cpluscplus, alt: "C++ Logo", description: "A language with object-oriented, generic, and functional features in addition to facilities for low-level memory manipulation.", name: "C++" },
        { src: nodejs, alt: "Node.js Logo", description: "JavaScript runtime built on Chrome's V8 JavaScript engine.", name: "Node.js" },
        { src: express, alt: "Express Logo", description: "Fast, unopinionated, minimalist web framework for Node.js.", name: "Express" },
        { src: nestjs, alt: "Nest.js Logo", description: "A progressive Node.js framework for building efficient, reliable and scalable server-side applications.", name: "Nest.js" },
        { src: python, alt: "Python Logo", description: "An interpreted, high-level and general-purpose programming language.", name: "Python" },
        { src: mongodb, alt: "MongoDB Logo", description: "NoSQL database that uses a document-oriented data model.", name: "MongoDB" },
        { src: postgres, alt: "Postgres Logo", description: "Powerful, open source object-relational database system.", name: "PostgreSQL" },
        { src: prisma, alt: "Prisma Logo", description: "Next-generation ORM for Node.js and TypeScript.", name: "Prisma" },
        { src: docker, alt: "Docker Logo", description: "A set of platform as a service products that use OS-level virtualization to deliver software in packages called containers.", name: "Docker" }
    ];

    return (
        <div className={styles.back}>
            <h1>Back-End</h1>
            <div className={styles.logos}>
                {technologies.map((tech) => (
                    <Image
                        priority
                        src={tech.src}
                        alt={tech.alt}
                        width={50}
                        height={50}
                        onMouseEnter={() => {
                            setTechName(tech.name);
                            setTechDescription(tech.description);
                        }}
                        onMouseLeave={() => {
                            setTechName('');
                            setTechDescription('');
                        }}
                    />
                ))}
            </div>
            <div className={styles.titles}>
                {techName ? <div><p className={styles.technoName}>{techName}</p><p className={styles.technoDescription}>{techDescription}</p></div> : <p className={styles.placeholder}></p>}
            </div>
        </div>
    );
}

export const Tools = () => {
    return (
        <div className={styles.tools}>
            <h1>Tools</h1>
            <div className={styles.logos}>
                <Image priority src={git} alt="Git Logo" width={50} height={50} />
                <Image priority src={github} alt="GitHub Logo" width={50} height={50} />
                <Image priority src={trello} alt="Trello Logo" width={50} height={50} />
                <Image priority src={notion} alt="Notion Logo" width={50} height={50} />
                <div className={styles.titles}>
                    <p>Git - GitHub - Trello - Notion</p>
                </div>
                {/* <p>Git, GitHub, trello, notion, Heroku, Figma, Sketch, Photoshop, Illustrator</p> */}
            </div>
        </div>
    );
}

export const Skills = () => {
    return (
        <div className={styles.skills}>
            <h1>Skills</h1>
            <p>Problem-solving, Creativity, Teamwork, Communication, Time management</p>
        </div>
    );
}

