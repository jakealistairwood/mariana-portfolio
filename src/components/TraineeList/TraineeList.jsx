import React from "react";
import styles from "./TraineeList.module.scss";
import Trainee from "../Trainee";
import data from "../../data/trainees";

const TraineeList = () => {
  return (
    <section className={styles.gallery}>
      {data.trainees.map((trainee, index) => {
        return <Trainee trainee={trainee} key={index} />
      })}
    </section>
  );
};

export default TraineeList;
