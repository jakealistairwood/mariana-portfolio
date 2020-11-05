import React from "react";
import styles from "./Trainee.module.scss";
import { Link } from "@reach/router";

const Trainee = (props) => {
  const { setTrainee } = props;
  const { name, title, headshot, index } = props.trainee;
  // console.log(props.trainee)
  return (
    <>
      <article className={styles.trainee}>
        <Link to="/">
          <div className={styles.imageContainer} onClick={() => {
            console.log(props.trainee)
            setTrainee(props.trainee)
          }}>
            <img
              src={headshot}
              alt="Trainee picture"
              className={styles.image}
            />
            <div className={styles.imageOverlay}></div>
          </div>
        </Link>
        <h4>{name}</h4>
        <p>{title}</p>
      </article>
    </>
  );
};

export default Trainee;
