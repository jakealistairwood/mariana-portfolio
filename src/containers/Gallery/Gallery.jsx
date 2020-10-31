import React from "react";
import styles from "./Gallery.module.scss";
import TraineeList from "../../components/TraineeList";

const Gallery = () => {
  return (
    <>
      <h1 className={styles.gallery_heading}>Meet the Crew.</h1>
      <hr/>
      <TraineeList />
    </>
  );
};

export default Gallery;
