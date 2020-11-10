import React from "react";
import styles from "./Trainee.module.scss";

const Trainee = (props) => {
  const { setIndex, scrollToBio } = props;
  const { name, headshot, index } = props.trainee;

  const handleClick = () => {
    setIndex(index)
    scrollToBio();
  }

  return (
    <>
      <article className={styles.trainee}>
        <div className={styles.imageContainer} onClick={handleClick}>
          <img
            src={headshot}
            alt="Trainee headshot for "
            className={styles.image}
          />
          <div className={styles.imageOverlay}>
            <p>View Profile</p>
          </div>
        </div>
        <h4>{name}</h4>
        {/* <p>{title}</p> */}
      </article>
    </>
  );
};

export default Trainee;