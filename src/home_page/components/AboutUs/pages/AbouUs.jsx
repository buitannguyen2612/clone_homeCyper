import React from 'react'
import styles from './AbouUs.module.css'
import peopleone from '../images/people1.jpg'
import peopletwo from '../images/people2.jpg'
import peoplethree from '../images/people3.jpg'
import { motion } from "framer-motion"
import CheckIcon from '@mui/icons-material/Check';

function AbouUs() {
    return (
        <div className={styles.container}>
            <div className={styles.background}>
                <motion.div
                className={`${styles.box_img}`}
            >
                <motion.div className={styles.imgtop}>
                    <motion.div className={styles.image}>
                        <img src={peopleone} alt="" />
                    </motion.div>
                    <motion.div className={styles.image}>
                        <img src={peopletwo} alt="" />
                    </motion.div>
                </motion.div>
                <motion.div className={styles.imagebottom}>
                    <motion.div className={styles.image}>
                        <img src={peoplethree} alt="" />
                    </motion.div>
                </motion.div>

            </motion.div>
            <div className={styles.box_title}>
                <div className={styles.title}>
                    <p>ABOUT US</p>
                    <h1>24/7 Cyber Security Operation Center</h1>
                    <p className={styles.text_under}>Duis aute irure dolor in reprehenderit in voluptate esse cillu dolore eu fugiat nulla pariatur excepteur sint occaecat cupia at non proident, sunt in culpa rui officia deserunt mollit ani mid est laborum incidunt aut labore magnam.</p>
                </div>
                <div className={styles.list}>
                    <motion.div className={styles.listone}>
                        {
                            [...Array(4)].map((vl, idx) => (
                                <div key={idx}>
                                    <motion.div className={styles.icon}
                                        whileHover={{ backgroundColor: "#72799c" }}
                                    >
                                        <CheckIcon sx={{ fontSize: "15px", stroke: "black", strokeWidth: "1", color: "black" }} />
                                    </motion.div>
                                    Malware Detection Removal
                                </div>
                            ))
                        }
                    </motion.div>
                    <motion.div className={styles.listtwo}>
                        {
                            [...Array(4)].map((vl, idx) => (
                                <div key={idx}>
                                    <motion.div
                                        className={styles.icon}
                                        whileHover={{ backgroundColor: "#72799c" }}
                                    >
                                        <CheckIcon sx={{ fontSize: "15px", stroke: "black", strokeWidth: "1", color: "black" }} />
                                    </motion.div>
                                    Cloud Security
                                </div>
                            ))
                        }
                    </motion.div>

                </div>
                <motion.button 
                className={styles.btn_start}
                whileHover={{y:"-10px", backgroundColor:"#ef8b33"}}
                >
                    Get Started
                </motion.button>
            </div>
            </div>
            
        </div>
    )
}

export default AbouUs