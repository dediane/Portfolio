import React from "react";
import diane from "/public/assets/diane.png";
import Image from "next/image";
import styles from "../styles/contact.module.css";
import { useEffect } from "react";

export const Contact = () => {
    
    return (
        <div id="contact" className={styles.contact}>
            <h1>Let's bring your project to life</h1>
            <div className={styles.contactContainer}>
            <div className={styles.left}>

            </div>
            <div className={styles.right}>
                <div className={styles.text}>
                    <span>Let's get in touch !</span>
                </div>
            </div>
            </div>
            {/* <p>Feel free to reach out to me at <a href="mailto:dianedecourt@gmail.com">dianedecourt@gmail.com</a></p> */}
            {/* <Image src={diane} alt="Diane" width={500} height={710} style={{ objectFit: 'cover' }} /> */}
        </div>
    );
}
            

