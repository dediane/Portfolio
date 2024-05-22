import React, { useRef, useEffect, useState, useCallback, ReactEventHandler } from "react";
import styles from "@/styles/projects.module.css";
import { motion } from "framer-motion";
import { InView } from "react-intersection-observer";
import Image from "next/image";
import Link from "next/link";

const Card = ({ title, technologies, description, img, url, height, width }: { title: string, technologies: string, description: string, img: string, url: string, height :number, width: number }) => {
    return (
        <>
            <div className={styles.card}>
                <div className={styles.left}>
                    {/* <div className={styles.computer}>
                        <Image src={'/assets/sites/mbp.png'} alt={title} width={422} height={217} style={{ objectFit: 'fill', zIndex: 10 }} />
                    </div> */}
                    <div className={styles.image}>
                        <Image src={img} alt={title} width={width} height={height} style={{ objectFit: 'fill' }} />
                    </div>
                </div>
                <div className={styles.right}>
                    <div className={styles.text}>
                        <div className={styles.div1}>
                            <h1>{title}</h1>
                        </div>
                        <div className={styles.div2}>
                            <p>{description}</p>
                            <Link href={url} target="_blank" >
                                <div className={styles.ctawrapper}>
                                    <div className={styles.cta}>
                                        <p>View website</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export const Projects = () => {

    return (
        // <div className={styles.container} id="projects">
        <div className={styles.cards} id="projects"> 
            <Card
                title='Evenly APP'
                technologies="NextJS React CSS SCSS Nodemailer NodeJS Express Postgresql Prisma Git Github"
                description='Web application, event organization & ticketing platform. Full stack project in NextJS, NodeJS, Postgres & Prisma'
                img='/assets/sites/evenly.png'
                url='https://evenly-app.com/'
                width={311}
                height={434}
                /> 
            <Card
                title='Agency demo app'
                technologies="NextJS React CSS SCSS Git Github"
                description='Web application, event organization & ticketing platform. Full stack project in NextJS, NodeJS, Postgres & Prisma'
                img='/assets/sites/agency.png'
                url='https://agency.creativefullstack.com/'
                width={311}
                height={574}
                />
            <Card
                title='Marketing demo app'
                technologies="NextJS React CSS SCSS Framer-motion Git Github Nginx"
                description='Hootsuite clone, social media marketing tools demo app. Frontend project in NextJS, React, CSS, SCSS & Framer Motion'
                img='/assets/sites/marketing.png'
                url='https://marketing.creativefullstack.com/'
                width={311}
                height={875}
                /> 
            {/* <Card
                title='Dashboard crypto'
                technologies="NextJS React CSS SCSS Nodemailer NodeJS Express Postgresql Prisma Git Github"
                description='Web application, event organization & ticketing platform. Full stack project in NextJS, NodeJS, Postgres & Prisma'
                img='/assets/diane.png'
            />   */}
        </div> 
        // </div>
    )
}
