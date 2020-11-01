import React from "react";
import styles from "./Image.module.scss";

const Image = (props) => {
  return (
    <>
      <img src={props.trainee.headshot} alt="Trainee Headshot" className={styles.headshot} />
    </>
  );
};

export default Image;
