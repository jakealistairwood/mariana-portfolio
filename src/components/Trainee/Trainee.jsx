import React from "react";
import styles from "./Trainee.module.scss";

const Trainee = (props) => {
  const { name, title, headshot } = props.trainee;
  return (
    <>
      <article>
        <img src="" alt="" />
        <h3>{name}</h3>
        <p>{title}</p>
      </article>
    </>
  );
};

export default Trainee;
