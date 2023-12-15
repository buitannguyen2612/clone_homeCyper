import React from 'react'
import styles from './OurPage.module.css'
import SliderC from '../feature/SlideComponent/SliderC'

export default function OurPage() {
  return (
    <div className={styles.container}>
        <div className={styles.title}>
          <p>OUR SERVICE</p>
          <p>Cyber Security Solutions</p>
        </div>
        <SliderC/>
    </div>
  )
}
