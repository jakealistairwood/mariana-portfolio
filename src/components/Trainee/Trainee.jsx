import React from "react";
import styles from "./Trainee.module.scss";

const Trainee = (props) => {
  const { name, title, headshot } = props.trainee;
  return (
    <>
      <article className={styles.trainee}>
        <img src={headshot} alt="Trainee picture" className={styles.image} />
        <h4>{name}</h4>
        <p>{title}</p>
      </article>
    </>
  );
};

export default Trainee;
