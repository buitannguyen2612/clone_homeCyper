import React, { useState } from 'react'
import styles from './SliderBrand.module.css'
import { useKeenSlider } from 'keen-slider/react'
import {motion} from "framer-motion"
import brandImg from '../images/testtimonail-4-1.png'


const animation = { duration: 600, easing: (t) => t }

function SliderBrand() {
    const [crSlide, setCurrentSlide] = useState(0)
    const [loaded, setLoaded] = useState(false)
    const [sliderRef, instanceRef] = useKeenSlider({
        loop: true,
        duration: 5000,
        slides: {
            perView: 6,
            spacing: 30,
        },
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel)
        },
        created() {
            setLoaded(true)
        }
    })

    const kennsliderClassName = 'keen-slider'

    return (
        <>
        <div ref={sliderRef} className={`${styles.container} ${kennsliderClassName}`} style={{ width: "85%" }}>
            {[...Array(13)].map((vl, idx) => (
                <motion.div key={idx} className={'keen-slider__slide' + ' number-slide' + (idx + 1)}
                    style={
                        {
                            height: "100%",
                            width: "161px",
                            borderRadius: "10px",
                            cursor: "pointer",
                            backgroundColor: "#1d233c",
                            overflow: "hidden",
                            border: "3px solid transparent",
                            display:"flex",
                            justifyContent:"center",
                            alignItems:"center"
                        }
                    }
                    whileHover={{ backgroundColor: "#3285dc" }}
                >
                    <div className={styles.image}>
                    </div>
                </motion.div>
            ))}
        </div>

        <div className={styles.dotbox} >
                {loaded && instanceRef.current &&
                    [...Array(Math.ceil(13 / 6))].map((vl, idx) => (
                        <button
                            key={idx}
                            onClick={() => {
                                instanceRef.current?.moveToIdx(idx * 6, true, animation)

                            }}
                            className={`${styles.dot} ${crSlide >= idx * 6 && crSlide < idx * 6 + 6 ? styles.active : ''}`}
                        ></button>
                    ))
                }
            </div>
        </>
    )
}

export default SliderBrand