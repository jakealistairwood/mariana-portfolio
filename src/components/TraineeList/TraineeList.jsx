import React from "react";
import styles from "./TraineeList.module.scss";
import Trainee from "../Trainee";
import data from "../../data/trainees";

const TraineeList = (props) => {
  const { setTrainee } = props;
  return (
    <section className={styles.gallery}>
      {data.trainees.map((trainee, index) => {
        return <Trainee trainee={trainee} key={index} setTrainee={setTrainee} />
      })}
    </section>
  );
};

export default TraineeList;
