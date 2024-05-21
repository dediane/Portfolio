import React from 'react';
import styles from '../styles/footer.module.css';

const Footer = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.container}>
                <div className={styles.section}>
                <p className={styles.head}>VERSION</p>
                    <p className={styles.sub}>© 2024 edition</p>
                </div>
                <div>
                    <div className={styles.section}>
                    <p className={styles.head}>SOCIALS</p>
                    <div className={styles.inline}>
                        <p className={styles.sub}>Linkedin</p>
                        <p className={styles.sub}>Github</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;