import React, { useState } from "react";
import { Router } from '@reach/router';
import Main from '../Main';
import Gallery from '../Gallery';
import data from "../../data/trainees";

const Routes = () => {
  const [trainees, setTrainees] = useState(data.trainees);
  const [trainee, setTrainee] = useState(data.trainees[0]); 
  
  const nextTrainee = () => {
    const newIndex = trainee.index+1;
    return setTrainee(data.trainees[newIndex]);
  }

  const prevTrainee = () => {
    const newIndex = trainee.index-1;
    return setTrainee(data.trainees[newIndex]);
  }

  return (
    <Router>
      <Main 
        path="/" 
        trainee={trainee} 
        trainees={trainees}
        nextTrainee={nextTrainee}
        prevTrainee={prevTrainee}
      />
      <Gallery 
        path="gallery"
        setTrainee={setTrainee}
      />
    </Router>
  );
};

export default Routes;
