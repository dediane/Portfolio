import { Navbar } from "@/components/_navbar";
import React, { useState } from "react";
import styles from "@/styles/contactSection.module.css";

const ContactSection = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        service: '',
        message: '',
    })

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = (e: any) => {
        e.preventDefault();
        // Process form data here
        console.log('Form data submitted:', formData);
        // Clear form
        setFormData({
            name: '',
            email: '',
            company: '',
            service: '',
            message: '',
        });
    };

    return (
        <>
            <div className={styles.container}>
                <div className={styles.card}>
                    <h1>Contact</h1>
                    <div className={styles.formWrapper}>
                        <form>
                        <div className={styles.formItemWrapper}>
                                <div className={styles.number}>
                                    <p>01</p>
                                </div>
                            <div className={styles.formItem}>
                                <label htmlFor="name">What's your name?</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    placeholder="John Doe"
                                    required
                                />
                            </div>
                            </div>
                            <div className={styles.formItemWrapper}>
                                <div className={styles.number}>
                                    <p>02</p>
                                </div>
                            <div className={styles.formItem}>
                                <label htmlFor="email">What's your email address?</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    placeholder="johndoe@email.com"
                                    required
                                />
                            </div>
                            </div>
                            <div className={styles.formItemWrapper}>
                                <div className={styles.number}>
                                    <p>03</p>
                                </div>
                            <div className={styles.formItem}>
                                <label htmlFor="company">What is your company?</label>
                                <input
                                    id="company"
                                    name="company"
                                    value={formData.company}
                                    onChange={handleChange}
                                    placeholder="My own company"
                                    required
                                />
                            </div>
                            </div>
                            <div className={styles.formItemWrapper}>
                                <div className={styles.number}>
                                    <p>04</p>
                                </div>
                            <div className={styles.formItem}>
                                <label htmlFor="service">What services are you looking for?</label>
                                <textarea
                                    id="service"
                                    name="service"
                                    value={formData.service}
                                    onChange={handleChange}
                                    placeholder="I am looking for website, UI/UX review, frontend developpement..."
                                    required
                                />
                            </div>
                            </div>
                            <div className={styles.formItemWrapper}>
                                <div className={styles.number}>
                                    <p>05</p>
                                </div>
                                <div className={styles.formItem}>
                                    <label htmlFor="message">Your message</label>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        placeholder="Hello Diane, could you help me with..."
                                        required
                                    />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default function Contact() {
    return (
        <>
            <Navbar />
            <ContactSection />
        </>
    )
}