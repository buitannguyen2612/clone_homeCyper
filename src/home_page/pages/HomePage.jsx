import React from 'react'
import styles from './HomePage.module.css'
import HeroPage from '../components/heros/pages/HeroPage'
import OurPage from '../components/OurServicePage/pages/OurPage'
import AbouUs from '../components/AboutUs/pages/AbouUs'
import Working from '../components/WorkingFor/pages/Working'
import Quantity from '../components/quantityPage/pages/Quantity'

function HomePage() {
  return (
    <div className={styles.container}>
        <HeroPage/>
        <OurPage/>
        <AbouUs/>
        <Working/>
        <Quantity/>
    </div>
  )
}

export default HomePage