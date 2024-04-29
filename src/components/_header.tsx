import React from "react";
import styles from "@/styles/header.module.css";

export const Header = () => {
    return (
        <div className={styles.header}>
            <h1 className={styles.title2}>Hi, it's Diane! I am a  </h1>
            <h1 className={styles.title}>CREATIVE</h1>
            <h1 className={styles.title3}>FULL-STACK</h1>
            <h1 className={styles.title4}>DEVELOPPER</h1>
            <button>Let's discuss about your project</button>
            <button>Book a call</button>

            <h1 className={styles.h1}>CREATIVE</h1>
        </div>
    );
};