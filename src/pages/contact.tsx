import { Navbar } from "@/components/_navbar";
import React from "react";
import styles from "@/styles/contactSection.module.css";

const ContactSection = () => {
    return (
        <>
            <div className={styles.container}>
            <h1>Contact</h1>
            </div>
        </>
    )
}

export default function Contact () {
    return (
        <>
        <Navbar />
        <ContactSection />
        </>
    )
}