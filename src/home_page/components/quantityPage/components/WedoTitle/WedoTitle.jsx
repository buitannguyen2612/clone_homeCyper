import React from 'react'
import styles from './WedoTitle.module.css'
import virsus from './imgs/shield.png'
import {motion} from "framer-motion"

export default function WedoTitle() {
    return (
        <div className={styles.container}>
            <div className={styles.title_box}>
                <p className={styles.title_top}>WHAT WE DO</p>
                <h1>The Perfect Solution For all Protection</h1>
                <p className={styles.title_bot}>Qugiat nulla pariatur excepteur sint occaecat cupidatat no proident, sunt in culpa rui officia deserunt.</p>
                <div className={styles.case}>
                    {
                        [...Array(4)].map((vl, idx) => (
                            <div className={styles.card}>
                                <motion.div className={styles.image}
                                whileHover={{scale:1.1}}
                                >
                                    <div>
                                        <img src={virsus} alt="" />
                                    </div>
                                </motion.div>
                                <div className={styles.text}>
                                    <p>Cyber Solutions</p>
                                    <p>Ruis autem vel eum rui inea elit niau.</p>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
