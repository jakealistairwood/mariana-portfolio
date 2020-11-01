import React from "react";
import styles from "./Main.module.scss";
import Image from "../../components/Image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Main = (props) => {
  const { trainees } = props;
  const { headshot, index } = props.trainee;
  return (
    <>
      <div className={styles.cards_slider}>
        <div className={styles.cards_slider_wrapper} style={{
          'transform': `translateX(-${props.trainee.index*(100/props.trainees.length)}%)`
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
