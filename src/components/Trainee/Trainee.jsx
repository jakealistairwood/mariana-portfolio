import React from "react";
import styles from "./Trainee.module.scss";
// import pic from '../../assets/images/Aiste.png';

const Trainee = (props) => {
  const { name, title, headshot } = props.trainee;
  return (
    <>
      <article className={styles.trainee}>
        <div className={styles.imageContainer}>
          <img src={headshot} alt="Trainee picture" className={styles.image} />
          <div className={styles.imageOverlay}></div>
        </div>
        <h4>{name}</h4>
        <p>{title}</p>
      </article>
    </>
  );
};

export default Trainee;
