import React from 'react'
import styles from './Title.module.css'
import { motion } from 'framer-motion'

export default function Title() {
    return (
        <div className={styles.container}>
            <motion.p>
                PARTNERS
            </motion.p>
            <motion.h1>
                We're Working With
            </motion.h1>
        </div>
    )
}
