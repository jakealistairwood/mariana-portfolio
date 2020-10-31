import React from "react";
import styles from "./Main.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';

const Main = (props) => {
  const { headshot } = props.trainee;
  return (
    <>
      <button>
        <FontAwesomeIcon 
          icon={faChevronLeft} 
          onClick={() => props.prevTrainee()}
        />
      </button>
      <img src={headshot} alt="Trainee Headshot" className={styles.headshot}/>
      <button>
        <FontAwesomeIcon 
          icon={faChevronRight} 
          onClick={() => props.nextTrainee()}
        />
      </button>
    </>
  );
};

export default Main;
