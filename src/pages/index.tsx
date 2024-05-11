// pages/index.js
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { AnimatePresence, motion } from 'framer-motion';
import Loader from '../components/Loader';
import Homepage from './home';

const Home = () => {
    const router = useRouter();
    const [isExiting, setIsExiting] = useState(false);
    const [homePageVisible, setHomePageVisible] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsExiting(true);
            setTimeout(() => {
            setHomePageVisible(true)}, 500); // Redirect to the actual homepage
        }, 3000); // Wait for 3 seconds before redirecting

        return () => clearTimeout(timer);
    }, [router]);

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
        <AnimatePresence>
            {!isExiting &&<Loader />};
            {homePageVisible && (
                <motion.div
                    initial={{ opacity: 0, y: '100vh' }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0 , y: '-100vh' }}
                    transition={{ duration: 0.25 }}
                >
                    <Homepage />
                </motion.div>
            )}
        </AnimatePresence>
    );
};

export default Home;