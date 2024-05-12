import React, { useEffect } from 'react';
import styles from '@/styles/navbar.module.css';
import { FaLinkedinIn, FaGithub } from "react-icons/fa6";
import { FaBars } from 'react-icons/fa';

export const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.title}>
                <h4>👋 Hi, it's Diane</h4>
            </div>
            <div className={styles.floating}>
                <ul>
                    <li>
                        <a href="#about">About</a>
                    </li>
                    <li>
                        <a href="#projects">Projects</a>
                    </li>
                    <li>
                        <a href="#contact">Contact</a>
                    </li>
                </ul>
            </div>
            <div className={styles.logos}>
                <ul>
                    <li>
                        <a href="https://www.linkedin.com/in/diane-decourt" target="_blank">
                        <FaLinkedinIn />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.github.com/dediane" target="_blank">
                        <FaGithub />
                        </a>
                            
                    </li>
                    </ul>
            </div>
        </nav>
    );
};