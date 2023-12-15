import React, { useEffect, useRef, useState } from 'react'
import styles from './SliderC.module.css'
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import { motion } from "framer-motion";

function SliderC() {

    const [currentSlide, setCurrentSlide] = useState(0)
    const [loaded, setLoaded] = useState(false)
    const animation = { duration: 600, easing: (t) => t }
    const [dotsHovered, setDotsHovered] = useState();

    let timeout
    let onmouse = false
    
    const [sliderRef, instanceRef] = useKeenSlider({
        loop: true,
        duration: 5000,
        slides: {
            perView: 3,
            spacing: 50,
        },
        slideChanged(slider) {
            setCurrentSlide(slider.track.details.rel)
        },
        created() {
            setLoaded(true)
        }

    },
        [
            (instanceRef) => {
                
                //    hàm cleartime
                const clearNextTime = () => {
                    clearTimeout(timeout)
                }

                // chạy sang slide kế tiếp
                const goNext = () => {
                    clearNextTime(timeout)
                    if (onmouse) {
                        return
                    }
                    timeout = setTimeout(() => {
                        // instanceRef.moveToIdx(instanceRef.track.details.abs + 3)
                        instanceRef.next()
                    }, 3000);
                }

                //Khi slide duoc tao ra
                instanceRef.on("created", () => {
                    instanceRef.container.addEventListener("mouseover", () => {
                        onmouse = true
                        clearNextTime()
                    })
                    instanceRef.container.addEventListener("mouseout", () => {
                        onmouse = false
                        goNext()
                    })
                    goNext()
                })

                instanceRef.on("dragStarted", clearNextTime)
                instanceRef.on("animationEnded", goNext)
                instanceRef.on("updated", goNext)
            }
        ]
    )


    const product = [1, 2, 3, 4, 5, 6, 7, 8, 9]
    const kennsliderClassName = 'keen-slider'

    return (
        <>
            <div ref={sliderRef} className={`${styles.container} ${kennsliderClassName}`} style={{ width: "80%" }}>
                {product.map((vl, idx) => (
                    <motion.div key={idx} className={'keen-slider__slide' + ' number-slide' + (idx + 1)}
                        style={
                            {
                                height: "100%",
                                width: "350px",
                                borderRadius: "10px",
                                cursor: "pointer",
                                padding: "calc(30px + 2px)",
                                display: "flex",
                                flexDirection: "column",
                                alignItems: "center",
                                backgroundColor: "#1d233c",
                                overflow: "hidden",
                                border: "3px solid transparent",
                                gap: "10px"
                            }
                        }
                        whileHover={{ border: "solid 3px #3285dc" }}
                    >
                        <div className={styles.image}>
                            <img src="https://designingmedia.com/whizcyber/wp-content/uploads/2023/06/services-img1.png" alt="" />
                        </div>
                        <div className={styles.title}>
                            <h1>Computer Security</h1>
                            <p>Quis autem vel eum iure repre rui in ea voluptate velit esse ua nihil molestiae.…</p>
                        </div>
                        <div className={styles.button}>
                            <motion.button
                                whileHover={{ backgroundColor: "#4aa5f0" }}
                            >
                                Read More
                            </motion.button>
                        </div>
                    </motion.div>
                ))}
            </div>


            <div className={styles.dotbox} >
                {loaded && instanceRef.current &&
                    [...Array(Math.ceil(instanceRef.current.track.details.slides.length / 3)).keys()].map((vl, idx) => (
                        <button
                            key={idx}
                            onClick={() => {
                                setCurrentSlide(idx * 3)
                                instanceRef.current?.moveToIdx(idx * 3, true, animation)

                            }}
                            className={`${styles.dot} ${currentSlide >= idx * 3 && currentSlide < idx * 3 + 3 ? styles.active : ''}`}
                        ></button>
                    ))
                }
            </div>
        </>
    )
}

export default SliderC