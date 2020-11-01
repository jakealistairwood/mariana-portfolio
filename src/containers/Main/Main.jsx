import React from "react";
import "./Main.scss";
import Image from "../../components/Image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Main = (props) => {
  const { trainees } = props;
  const {
    _id,
    index,
    name,
    title,
    headshot,
    city,
    quote,
    bio,
    linkedin,
    github,
    portfolio
  } = props.trainee;

  return (
    <>
    {/* active_slide_${props.trainee.index} */}
      <div className={`cards_slider`}>
        <div className='cards_slider_wrapper' style={{
          'transform': `translateX(-${index*(100/trainees.length)}%)`
        }}>
          {
            trainees.map(trainee => <Image key={trainee._id} trainee={trainee} />)
          }
        </div>
      </div>

      <button
        onClick={() => props.prevTrainee()}
        disabled={index === 0}
      >
        <FontAwesomeIcon icon={faChevronLeft} />
      </button>
      <button
        onClick={() => props.nextTrainee()}
        disabled={index === 24}
      >
        <FontAwesomeIcon icon={faChevronRight} />
      </button>
    </>
  );
};

export default Main;
