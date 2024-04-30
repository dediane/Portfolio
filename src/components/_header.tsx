import React, { useEffect, useRef } from "react";
import styles from "@/styles/header.module.css";

export const Header = () => {
    const titleRef = useRef(null);

    useEffect(() => {
        const title :any= titleRef.current;
        const spans = title.querySelectorAll('span');
        let last = -1; // Initialize with an impossible index
        const colors = ['#ff77a7', '#FFA500', '#FFDA36', '#41FF92', '#17b6ff', '#e957fc', '#8f5dec'];

        function randomizeAnimation() {
            spans.forEach((span :any) => {
                let colorIndex;
                do {
                    colorIndex = Math.floor(Math.random() * colors.length);
                } while (colorIndex === last); // Ensure the new color is different from the last
                span.style.color = colors[colorIndex];
                span.style.animationDelay = `${Math.random() * 3.6}s`;
                last = colorIndex; // Update the last used color index
            });
        }

        function resetColors() {
            spans.forEach((span :any)  => {
                span.style.color = 'var(--text-color)';
            });
        }

        title.addEventListener('mouseenter', randomizeAnimation);
        title.addEventListener('mouseleave', resetColors);

        // Cleanup the event listeners when the component unmounts
        return () => {
            title.removeEventListener('mouseenter', randomizeAnimation);
            title.removeEventListener('mouseleave', resetColors);
        };
    }, []);

    return (
        <div className={styles.header}>
            <h1 className={styles.title2}>Hi, it's Diane! I am a  </h1>
            <h1 className={styles.title} ref={titleRef}>
                <span>C</span><span>R</span><span>E</span><span>A</span><span>T</span><span>I</span><span>V</span><span>E</span>
            </h1>
            <h1 className={styles.title3}>FULL-STACK</h1>
            <h1 className={styles.title4}>DEVELOPPER</h1>
            <button>Let's discuss about your project</button>
            <button>Book a call</button>

        </div>
    );
};