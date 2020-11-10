import React from "react";
import styles from "./TraineeList.module.scss";
import Trainee from "../Trainee";

const TraineeList = ({ trainees, setIndex, scrollToBio}) => {
  return (
    <section className={styles.gallery}>
      {trainees.map((trainee, index) => {
        return <Trainee trainee={trainee} key={index} setIndex={setIndex} scrollToBio={scrollToBio}/>
      })}
    </section>
  );
};

export default TraineeList;
