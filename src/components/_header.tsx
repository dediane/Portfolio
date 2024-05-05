import React, { useEffect, useRef } from "react";
import styles from "@/styles/header.module.scss";
import Image from "next/image";

import diane from "/public/assets/diane2.png";

export const Header = () => {
    const titleRef = useRef(null);

    useEffect(() => {
        const title: any = titleRef.current;
        const spans: any = title.querySelectorAll('span');
        let lastColor = -1; // Initialize with an impossible index
        const colors = ['#ff77a7', '#FFA500', '#FFDA36', '#41FF92', '#17b6ff', '#e957fc', '#8f5dec'];

        // Function to assign random colors
        function assignRandomColors() {
            spans.forEach((span: { style: { color: string; }; }) => {
                const colorIndex = Math.floor(Math.random() * colors.length);
                span.style.color = colors[colorIndex];
            });
        }

        // Initially assign random colors
        assignRandomColors();

        // Function to change colors randomly on hover
        function randomizeAnimation() {
            spans.forEach((span: { style: any }) => {

                let colorIndex;
                do {
                    colorIndex = Math.floor(Math.random() * colors.length);
                } while (colorIndex === lastColor); // Ensure the new color is different from the last
                span.style.color = colors[colorIndex];
                span.style.animationDelay = `${Math.random() * 3.6}s`; // Optional, only if you want random delay
                lastColor = colorIndex;
            });
        }

        title.addEventListener('mouseenter', randomizeAnimation);

        // Cleanup the event listeners when the component unmounts
        return () => {
            title.removeEventListener('mouseenter', randomizeAnimation);
        };
    }, []);

    return (
        <div className={styles.header}>
            <div className={styles.leftsection}>
                {/* <h1 className={styles.title2}>Hi, it's Diane! I am a  </h1> */}
                <h1 className={styles.title} ref={titleRef}>
                    <span>C</span><span>R</span><span>E</span><span>A</span><span>T</span><span>I</span><span>V</span><span>E</span>
                </h1>
                <h1 className={styles.title3}>FULL-STACK</h1>
                <h1 className={styles.title4}>DEVELOPPER</h1>
                <h2>Freelance fullstack developper specializing into crafting creative unique digital experiences.</h2>

                <button className={styles.button1}>Let's discuss about your project</button>
                <button className={styles.button2}>Book a call</button>
            </div>

            <div className={styles.rightsection}>
                <Image src={diane} alt="Diane" width={500} height={710} style={{ objectFit: 'cover' }} />
            </div>
        </div>
    );
};