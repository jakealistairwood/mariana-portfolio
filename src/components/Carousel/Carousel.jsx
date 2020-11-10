import React from "react";
import { useSwipeable } from 'react-swipeable';

import Image from "../../components/Image";


const Carousel = (props) => {   
    const {trainees, index, nextTrainee, prevTrainee} = props;

    const swipeHandlers = useSwipeable({
        onSwipedLeft: () => nextTrainee(),
        onSwipedRight: () => prevTrainee()
    });

    const handleClick = (e) => (e.clientX < (window.innerWidth / 2)) ? prevTrainee() : nextTrainee();

    return (
        <section {...swipeHandlers} className={"carousel"}>
            {<div className={`cards_slider active_slide_${index}`}>
                <div 
                    className='cards_slider_wrapper' 
                    style={{
                        'transform': `translateX(-${index * (100 / trainees.length)}%)`
                    }}
                    onClick={handleClick}
                >
                    {
                    trainees.map(trainee => <Image key={trainee._id} trainee={trainee} />)
                    }
                </div>
            </div>}
            {/* <div className={"buttonContainer"}>
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
            </div> */}
        </section>
    )
}

export default Carousel;