import React from "react";
import diane from "/public/assets/diane.jpg";
import Image from "next/image";
import styles from "../styles/contact.module.css";
import { useEffect } from "react";

export const Contact = () => {

    return (
        <div id="contact" className={styles.contact}>
            <div className={styles.decoborder}></div>
            <div className={styles.decoration}>
                <div className={styles.contactContainer}>

                    <Image src={diane} alt="Diane" width={100} height={100} style={{ objectFit: 'cover', borderRadius: 100, marginRight: 30, border: '4px solid var(--background-color'}} />
                    <h1>Let's work together</h1>
                </div>
                <div className={styles.contactContainer}>
                    <p>Feel free to reach out to me at <a href="mailto:"></a></p>
                    <hr/>
                </div>
            </div>
            {/* <p>Feel free to reach out to me at <a href="mailto:dianedecourt@gmail.com">dianedecourt@gmail.com</a></p> */}
            {/* <Image src={diane} alt="Diane" width={500} height={710} style={{ objectFit: 'cover' }} /> */}
        </div>
    );
}


