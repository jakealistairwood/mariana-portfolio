import React from "react";
import styles from "./Gallery.module.scss";
import TraineeList from "../../components/TraineeList";

const Gallery = (props) => {
  const {setTrainee} = props;
  return (
    <>
      <h1 className={styles.gallery_heading}>Meet the Crew.</h1>
      <hr/>
      <TraineeList setTrainee={setTrainee} />
    </>
  );
};

export default Gallery;
