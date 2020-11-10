import React from "react";
import styles from "./Gallery.module.scss";
import TraineeList from "../TraineeList";

const Gallery = ({ trainees, setIndex, scrollToBio }) => {
  return (
    <>
      <h1 className={styles.gallery_heading}>Meet the Crew.</h1>
      <hr/>
      <TraineeList trainees={trainees} setIndex={setIndex} scrollToBio={scrollToBio}/>
    </>
  );
};

export default Gallery;
