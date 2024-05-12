// pages/index.js
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { AnimatePresence, motion } from 'framer-motion';
import Loader from '../components/Loader';
import Homepage from './home';
import styles from '@/styles/index.module.css';

const Home = () => {
    const router = useRouter();
    const [isExiting, setIsExiting] = useState(false);
    const [homePageVisible, setHomePageVisible] = useState(false);

    // useEffect(() => {
    //     const timer = setTimeout(() => {
    //         setIsExiting(true);
    //         setTimeout(() => {
    //         setHomePageVisible(true)}, 500); // Redirect to the actual homepage
    //     }, 5000); // Wait for 3 seconds before redirecting

    //     return () => clearTimeout(timer);
    // }, [router]);

    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const triggerHeight = 1; // Set the scroll position where the transition should start

            if (scrollY > triggerHeight && !homePageVisible) {
                setIsExiting(true);
                setTimeout(() => {
                    setHomePageVisible(true);
                    window.scrollTo(0, 0); // Scroll to the top of the page
                }, 500); // Optionally keep the delay before fully showing the homepage
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [homePageVisible]);

    return (
        <>
            {isExiting ?
                <div className={`${styles.loaderExiting}`}><Loader /></div> :
                <div><Loader /></div>};
            {homePageVisible && (
                <div className={styles.homepageWrapper}>
                    <Homepage />
                </div>
            )}
        </>
    );
};

export default Home;