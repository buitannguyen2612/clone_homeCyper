import React from 'react'
import styles from './HourTitle.module.css'
import CountUp from 'react-countup';

export default function HourTitle() {
    return (
        <div className={styles.container}>
            <div className={styles.exlayout}>
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
                    <div>
                        <span>
                            <CountUp className={styles.number} start={0} end={18} duration={5} delay={0} />
                            <p>K</p>
                        </span>
                        <span>
                            Engagements
                        </span>
                    </div>
                    <div>
                        <span>
                            <CountUp className={styles.number} start={0} end={19} duration={5} delay={0} />
                            <p>M +</p>
                        </span>
                        <span>
                            Engagements
                        </span>
                    </div>
                    <div>
                        <span>
                            <CountUp className={styles.number} start={0} end={20} duration={5} delay={0} />
                            <p>K</p>
                        </span>
                        <span>
                            Engagements
                        </span>
                    </div>
                </div>
            </div>
        </div>
    )
}
