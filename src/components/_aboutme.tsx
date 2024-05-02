import React from "react";
import styles from "@/styles/aboutme.module.css";

export const AboutMe = () => {
    return (
        <div className={styles.container}>
            <h1>About me</h1>
            <div className={styles.wrapper}>
            <div className={styles.section}>
            <p>
                <b className={styles.subs}>Hi, I’m Diane,</b><br/><br/> A full-stack developer in Paris. 🥖<br /> I started my career as a fashion designer and then fell in love with coding. Now, I combine my design sensibilities with my tech skills to build beautiful, effective web and mobile applications.
                </p>

            </div>
            <div className={styles.section1}>
            <p>
                <b className={styles.subs1}>Background</b><br/><br/> I graduated from 42 school in Paris with a degree in Computer Science and I also hold a master's in Design. I’ve worked on a variety of projects, including creating a startup called "Evenly" that helps people organize their events more efficiently.
                </p>
                </div>
                <div className={styles.section2}>
            <p>
                <b className={styles.subs2}>Skills and Technologies</b><br/><br/> I'm experienced with technologies like React, Node.js, NextJS and more. I focus on creating applications that are not just functional but also great to look at and easy to use.
                </p>
                </div>

            <div className={styles.section3}>
            <p><b className={styles.subs3}>Working With Me</b><br/> <br/>I like keeping things simple and transparent with my clients. I’ll work with you to understand what you need, and I'll keep you updated as I bring our shared vision to life.
            </p>
            </div>
            </div>
            {/* <p><b>Offerings:</b></p>
            <p>

            <li>End-to-end development from initial idea to final product.</li>
            <li>Collaborative updates to ensure the project is aligning with your expectations.</li>
            <li>Quick iterations to adapt features according to your feedback.</li>
            <b>Get in Touch!</b> If you’re looking to build something new or improve an existing application, I’d love to help. Let’s make your project a success together!
        </p> */}
           
            {/* <p>Hi, I'm Diane, a full-stack developer based in Paris 🥖.
                I have a passion for designing 🖍 and creating web applications with good design 🎨. 
                I am an ex-fashion designer 👗 who turned into a developer 👩🏻‍💻. 
                
                I am graduated in Computer Science at 42 school in Paris but I also own a master in Design.

                I love to learn new technologies and share my knowledge with others.
                I am a creative, problem solver, and team player.
                I build web and mobile applications with a focus on user experience, design and performance.
                I built a startup called "Evenly" that helps people organize their events.
            </p> */}
        </div >
    );
}