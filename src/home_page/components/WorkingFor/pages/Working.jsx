import React from 'react'
import styles from './Working.module.css'
import Title from '../components/Title/Title'
import SliderBrand from '../components/SliderBrand/SliderBrand'

export default function Working() {
  return (
    <div className={styles.container}>
        <Title/>
        <SliderBrand/>
    </div>
  )
}
