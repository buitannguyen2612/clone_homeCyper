import React from 'react'
import styles from './Quantity.module.css'
import HourTitle from '../components/HourTitle/HourTitle'
import HourImg from '../components/HourImg/HourImg'

function Quantity() {
  return (
    <div className={styles.container}>
        <div className={styles.hour}>
            <HourTitle/>
            <HourImg/>
        </div>
        <div className={styles.wedo}>

        </div>
    </div>
  )
}

export default Quantity