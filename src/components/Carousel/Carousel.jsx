import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faArrowDown } from '@fortawesome/free-solid-svg-icons';

import styles from "./Carousel.module.scss";

import Image from "../../components/Image";


const Carousel = (props) => {   
    const {trainees, index, nextTrainee, prevTrainee} = props;
    console.log(index)

    return (
        <section className={"carousel"}>
            {<div className={`cards_slider active_slide_${index}`}>
                <div className='cards_slider_wrapper' style={{
                    'transform': `translateX(-${index * (100 / trainees.length)}%)`
                }}>
                    {
                    trainees.map(trainee => <Image key={trainee._id} trainee={trainee} />)
                    }
                </div>
            </div>}
            <div className={"buttonContainer"}>
                <button
                    onClick={() => prevTrainee()}
                    disabled={index === 0}
                >
                    <FontAwesomeIcon icon={faChevronLeft} />
                </button>
                <button
                    onClick={() => nextTrainee()}
                    disabled={index === 25}
                >
                    <FontAwesomeIcon icon={faChevronRight} />
                </button>
            </div>
        </section>
    )
}

export default Carousel;