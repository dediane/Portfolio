// pages/index.js
import { useEffect, useRef, useState } from 'react';
import { useRouter } from 'next/router';
import { AnimatePresence, motion } from 'framer-motion';
import Loader from '../components/Loader';
import Homepage from './home';
import styles from '@/styles/index.module.css';

const Home = () => {
    const router = useRouter();
    const [isExiting, setIsExiting] = useState(false);
    const [homePageVisible, setHomePageVisible] = useState(false);
    const containerRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handleScroll = () => {
            if (containerRef.current) {

            const scrollY = containerRef.current.scrollTop;
            const triggerHeight = 1; // Set the scroll position where the transition should start

            if (scrollY > triggerHeight && !homePageVisible) {
                setIsExiting(true);
                setTimeout(() => {
                    setHomePageVisible(true);
                    containerRef.current?.scrollTo(0, 0); // Scroll to the top of the page
                }, 500); // Optionally keep the delay before fully showing the homepage
            }
        }
        };

        const container = containerRef.current;
        if (container)
            container.addEventListener('scroll', handleScroll);

        return () => {
            if (container)
                container.removeEventListener('scroll', handleScroll);
        };
    }, [homePageVisible]);

    return (
        <>
            {isExiting ?
                <div className={`${styles.loaderExiting}`}><Loader /></div> :
                <div ref={containerRef} className={styles.scrollContainer}><Loader /></div>};
            {homePageVisible && (
                <div className={styles.homepageWrapper}>
                    <Homepage />
                </div>
            )}
        </>
    );
};

export default Home;