import React from "react";
import diane from "/public/assets/diane.jpg";
import Image from "next/image";
import styles from "../styles/contact.module.css";
import { useEffect } from "react";
import Footer from "./_footer";

export const Contact = () => {

    return (
        <div id="contact" className={styles.contact}>
            <div className={styles.decoborder}></div>
            <div className={styles.decoration}>
                <div className={styles.contactContainer}>
                    <div className={styles.contactHead}>
                        <Image src={diane} alt="Diane" width={100} height={100} style={{ objectFit: 'cover', borderRadius: 100, marginRight: 30, border: '4px solid var(--background-color' }} />
                        <h1>Let's work together</h1>
                    </div>
                    <div className={styles.contactBody}>
                        <div className={styles.contactLine}></div>
                        <div className={styles.contactButton}><a href='/contact'>Get in touch</a></div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
}


