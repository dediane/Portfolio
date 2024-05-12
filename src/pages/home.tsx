import Head from 'next/head'
import Image from 'next/image'
import React, { useRef } from 'react'
import { Inter, Mystery_Quest } from 'next/font/google'
import { Header } from '@/components/_header'
import { AboutMe } from '@/components/_aboutme'
import { MyStack } from '@/components/_mystack'
import styles from '@/styles/index.module.css'
import MouseTracker from '@/components/_mouseTracker'
import { Contact } from '@/components/_contact'
import { Navbar } from '@/components/_navbar'
import { AnimatePresence, motion, useScroll } from 'framer-motion';
import { InView, useInView } from 'react-intersection-observer';
import { Home } from '@/components/_home'

export default function Homepage() {

  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.container}>
        <Navbar />
        <Home />
      </main>
    </>
  );
}