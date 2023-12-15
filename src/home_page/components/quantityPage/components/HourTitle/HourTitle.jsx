import React from 'react'
import styles from './HourTitle.module.css'

export default function HourTitle() {
  return (
    <div className={styles.container}>
        <p className={styles.txthead}>
        WHO WE ARE
        </p>
        <h1>
        We Spend 30,000 Hours Per Year to Virus Threats
        </h1>
        <p className={styles.txtbot}>
        Fugiat nulla pariatur excepteur sint occaecat cupidatat non proident, sunt in culpa rui officia deserunt mollit anim id est laborum incidunt ut labore et dolore magnam.
        </p>
        <div className={styles.quantity_box}>
        </div>
    </div>
  )
}
