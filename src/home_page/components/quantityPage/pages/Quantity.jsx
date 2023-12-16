import React from 'react'
import styles from './Quantity.module.css'
import HourTitle from '../components/HourTitle/HourTitle'
import HourImg from '../components/HourImg/HourImg'
import WedoTitle from '../components/WedoTitle/WedoTitle'
import WedoImg from '../components/WedoImg/WedoImg'

function Quantity() {
  return (
    <div className={styles.container}>
      <div className={styles.hour}>
        <div className={styles.hourback}>
          <HourTitle />
          <HourImg />
        </div>
      </div>
      <div className={styles.wedo}>
      <div className={styles.wedo_background}>
        <WedoImg/>
        <WedoTitle/>
      </div>
      </div>
    </div>
  )
}

export default Quantity