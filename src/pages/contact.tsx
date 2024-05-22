import { Navbar } from "@/components/_navbar";
import React, { useState } from "react";
import styles from "@/styles/contactSection.module.css";
import Footer from "@/components/_footer";

const SeparatorComponent = () => {
    return (
        <>
        <div className={styles.custom}>
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" style={{fill: '#0C26C9'}}></path>
            </svg>
        </div>
        <div className={styles.separator}>
            <div className={styles.line}></div>
            <div className={styles.circle}></div>
            <div className={styles.line}></div>
        </div>
        </>
    );
  };

const SeparatorComponent2 = () => {
    return (
        <>
        <div className={styles.custom2}>
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" style={{fill: '#0C26C9'}}></path>
            </svg>
        </div>
        <div className={styles.separator}>
            <div className={styles.line}></div>
            <div className={styles.circle}></div>
            <div className={styles.line}></div>
        </div>
        </>
    );
  };
  

const ContactSection = ({formData, setFormData }: { formData: any, setFormData: any }) :any  => {

    const handleChange = (e: any) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };
    return (
        <>
            <div className={styles.container}>
                <div className={styles.card}>
                    <h1>⁕ Let's start a project together</h1>
                    <div className={styles.formWrapper}>
                        <form>
                            <div className={styles.formItemWrapper}>
                                <div className={styles.number}>
                                    <p>01</p>
                                </div>
                                <div className={styles.formItem}>
                                    <label htmlFor="name">What&apos;s your name?</label>
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
                                    <label htmlFor="email">What&apos;s your email address?</label>
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

const Submit = ({formData, setFormData }: { formData: any, setFormData: any }) :any  => {
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
        <div className={styles.submit}>
            <button onClick={handleSubmit} type="submit">Send</button>
        </div>
    )
}

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        company: '',
        service: '',
        message: '',
    })

    return (
        <>
        <Navbar />
        <SeparatorComponent />
        <div className={styles.body}>
            <ContactSection formData={formData} setFormData={setFormData}/>
        </div>
        <SeparatorComponent2 />
        <Submit formData={formData} setFormData={setFormData}/>
        <Footer />
        </>
    )
}