import React, { useState, useRef } from "react";
import shuffle from "shuffle-array";

import "./Main.scss";

import Carousel from "../../components/Carousel";
import Bio from "../../components/Bio";
import Gallery from "../../components/Gallery";

import data from "../../data/trainees";
const shuffledTrainees = shuffle(data.trainees).map((trainee, index) => ({...trainee, index}));

const Main = () => {
  const [trainees] = useState(shuffledTrainees);
  const [index, setIndex] = useState(12); 
  const bio = useRef(null);

  const nextTrainee = () => {
    if (index !== 25) setIndex(index+1);
  }
  const prevTrainee = () => {
    if (index !== 0) setIndex(index-1);
  }

  const scrollToBio = () => window.scrollTo(0, bio.current.offsetTop);

  console.log(trainees[index])

  return (
    <div ref={bio} className={"page"}>
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
        <h2>Meet {trainees[index].name}!</h2>
        <hr />
      </section>

      <Bio trainee={trainees[index]} />

      <Gallery trainees={trainees} setIndex={setIndex} scrollToBio={scrollToBio}/>

    </div>
  );
};

export default Main;
