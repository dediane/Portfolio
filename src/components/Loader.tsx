import React, { useEffect, useState } from 'react';
import styles from '@/styles/loader.module.css';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';

import svg1 from '/public/assets/shape-55.svg';
import svg2 from '/public/assets/shape-56.svg';
import svg3 from '/public/assets/shape-76.svg';
import svg4 from '/public/assets/shape-80.svg';
import svg5 from '/public/assets/shape-81.svg';
import svg6 from '/public/assets/shape-82.svg';

const Loader = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 400 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -400 }}
            transition={{ duration: 0.5 }}
        >
            <AnimatePresence>
             (<motion.div
                initial={{ opacity: 0, y: 400 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -400 }}
                transition={{ duration: 0.6 }}
                >
                <Image src={svg1} alt="svg1" className={`${styles.shape} ${styles.rotating2}`} />
                <Image src={svg2} alt="svg2" className={`${styles.shape1} ${styles.rotating}`} />
                <Image src={svg3} alt="svg3" className={`${styles.shape2} ${styles.rotating}`} />
                <Image src={svg4} alt="svg4" className={`${styles.shape3} ${styles.rotating}`} />
                <Image src={svg5} alt="svg5" className={`${styles.shape4} ${styles.rotating2}`}/>
                <Image src={svg6} alt="svg6" className={`${styles.shape5} ${styles.rotating2}`} />
            </motion.div >)
            </AnimatePresence>
            <div className={styles.wrapper}>
                <div className={styles.spinner}>

                    <h1 className={styles.title}>DIANE</h1>
                    <h1 className={styles.title2}>PORTFOLIO</h1>
                    <h1 className={styles.title}>WEBSITE</h1>
                </div>
            </div>
        </motion.div>
    );
};

export default Loader;