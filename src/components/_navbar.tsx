import React, { useEffect } from 'react';
import styles from '@/styles/navbar.module.css';
import { FaLinkedinIn, FaGithub } from "react-icons/fa6";
import { FaBars } from 'react-icons/fa';
import Link from 'next/link';

export const Navbar = () => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.title}>
                <Link href='/#home'>
                <h4>👋 Hi, it&apos;s Diane</h4>
                </Link>
            </div>
            <div className={styles.floating}>
                <ul>
                    <li>
                        <Link href="/#about">About</Link>
                    </li>
                    <li>
                        <Link href="#projects">Projects</Link>
                    </li>
                    <li>
                        <Link href="/contact">Contact</Link>
                    </li>
                </ul>
            </div>
            <div className={styles.logos}>
                <ul>
                    <li>
                        <Link href="https://www.linkedin.com/in/diane-decourt" target="_blank">
                        <FaLinkedinIn />
                        </Link>
                    </li>
                    <li>
                        <Link href="https://www.github.com/dediane" target="_blank">
                        <FaGithub />
                        </Link>
                            
                    </li>
                    </ul>
            </div>
        </nav>
    );
};