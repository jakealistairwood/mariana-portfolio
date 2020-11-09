import React, { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowDown } from '@fortawesome/free-solid-svg-icons';
import shuffle from "shuffle-array";

import "./Main.scss";

import Carousel from "../../components/Carousel";
import Bio from "../../components/Bio";

import data from "../../data/trainees";
const trainees = shuffle(data.trainees).map((trainee, index) => ({...trainee, index}));

const Main = () => {
  const [index, setIndex] = useState(12); 

  const nextTrainee = () => setIndex(trainees[index+1]);

  const prevTrainee = () => setIndex(trainees[index-1]);

  return (
    <div className={"page"}>
      <header>
        <div className={"heading"}>
          <h1>Welcome to the Mariana Intake.</h1>
          <hr />
        </div>
      </header>

      <Carousel 
        trainees={trainees} 
        index={index} 
        nextTrainee={nextTrainee}
        prevTrainee={prevTrainee}   
      />

      <section className={"intro"}>
        <FontAwesomeIcon icon={faArrowDown} className={"arrow"} />
        <h1>Introducing...</h1>
        <hr />
      </section>

      <Bio trainee={trainees[index]} />

    </div>
  );
};

export default Main;
