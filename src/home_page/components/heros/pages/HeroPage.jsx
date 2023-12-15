import React from 'react'
import styles from './HeroPage.module.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import { motion } from "framer-motion"

export default function HeroPage() {
  return (
    <div className={styles.container}>
      <div className={styles.icon}></div>
      <div className={styles.backimg}>
        <div className={styles.social}>
          <motion.div
            className={styles.facebook}
            whileHover={{ scale: 1.1, backgroundColor: "#D88730" }}
          >
            <FacebookIcon />
          </motion.div>
          <motion.div
            className={styles.facebook}
            whileHover={{ scale: 1.1, backgroundColor: "#D88730" }}
          >
            <TwitterIcon />
          </motion.div>
          <motion.div
            className={styles.facebook}
            whileHover={{ scale: 1.1, backgroundColor: "#D88730" }}
          >
            <InstagramIcon />
          </motion.div>
        </div>
        <div className={styles.titlebox}>
          <h1>
            We Provide Cyber <br /> Solutions For Your Security.</h1>
          <p>Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse ruam nihil molestiae.</p>
          <div className={styles.buttonbox}>
            <motion.button
              whileHover={{ y: -2, backgroundColor: "#D88730" }}
            >
              Get Started
            </motion.button>
            <motion.button
              whileHover={{ y: -2, backgroundColor: "#D88730" }}
            >
              Contas us
            </motion.button>
          </div>
        </div>
      </div>
    </div>
  )
}
