import React from "react";
import styles from "@/styles/mystack.module.css";
import Image from "next/image";

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
        <h1>My Stack</h1>
        <div className={styles.container}>
            <FrontStack/>
            <BackStack/>
            <Tools/>
            <Skills/>
        </div>
    </>
    );
}

export const FrontStack = () => {
    return (
        <div className={styles.front}>
            <h1>Front-End</h1>
            <div className={styles.logos}>
            <Image priority src={html} alt="HTML Logo" width={50} height={50} />
            <Image priority src={css} alt="CSS Logo" width={50} height={50} />
            <Image priority src={javascript} alt="JavaScript Logo" width={50} height={50} />
            <Image priority src={typescript} alt="TypeScript Logo" width={50} height={50} />
            <Image priority src={react} alt="React Logo" width={50} height={50} />
            <Image priority src={nextjs} alt="Next.js Logo" width={50} height={50} />
            <Image priority src={tailwind} alt="Tailwind CSS Logo" width={50} height={50} />
            <Image priority src={bootstrap} alt="Bootstrap Logo" width={50} height={50} />
            <div className={styles.titles}>
                <p> HTML - CSS - JavaScript - Typescript - React - Next.js</p>
                <p> Tailwind CSS - Bootstrap </p>
            </div>
            </div>
        </div>
    );
}

export const BackStack = () => {
    return (
        <div className={styles.back}>
            <h1>Back-End</h1>
            <div className={styles.logos}>
            <Image priority src={c} alt="C Logo" width={50} height={50} />
            <Image priority src={cpluscplus} alt="C++ Logo" width={50} height={50} />
            <Image priority src={nodejs} alt="Node.js Logo" width={50} height={50} />
            <Image priority src={express} alt="Express Logo" width={50} height={50} />
            <Image priority src={nestjs} alt="Nest.js Logo" width={50} height={50} />
            <Image priority src={python} alt="Python Logo" width={50} height={50} />
            <Image priority src={mongodb} alt="MongoDB Logo" width={50} height={50} />
            <Image priority src={postgres} alt="Postgres Logo" width={50} height={50} />
            {/* <Image priority src={firebase} alt="Firebase Logo" width={50} height={50} /> */}
            <Image priority src={prisma} alt="Prisma Logo" width={50} height={50} />
            <Image priority src={docker} alt="Docker Logo" width={50} height={50} />
            </div>
            <div className={styles.titles}>
                <p> C - C++ - Node.js - Express - Nest.js - Python</p>
                <p> MongoDB - Postgres - Prisma - Docker</p>
            </div>
            {/* <p>C, C++, Node.js, Express, Nestjs, MongoDB, Postgres, Firebase, REST API, Prisma, Docker, Ngnix</p> */}
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

