import React from "react";
import styles from "@/styles/mystack.module.css";

export const MyStack = () => {
    return (
        <div>
            <h1>My Stack</h1>
            <FrontStack/>
            <BackStack/>
            <Tools/>
            <Skills/>
        </div>
    );
}

export const FrontStack = () => {
    return (
        <div>
            <h1>Front-End</h1>
            <p>HTML, CSS, JavaScript, Typescript, React, Next.js, Tailwind CSS, Bootstrap</p>
        </div>
    );
}

export const BackStack = () => {
    return (
        <div>
            <h1>Back-End</h1>
            <p>Node.js, Express, MongoDB, SQL, Postgres, Firebase, REST API, Prisma, Docker, Ngnix</p>
        </div>
    );
}

export const Tools = () => {
    return (
        <div>
            <h1>Tools</h1>
            <p>Git, GitHub, Heroku, Figma, Sketch, Photoshop, Illustrator</p>
        </div>
    );
}

export const Skills = () => {
    return (
        <div>
            <h1>Skills</h1>
            <p>Problem-solving, Creativity, Teamwork, Communication, Time management</p>
        </div>
    );
}

