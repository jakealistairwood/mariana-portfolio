import React from "react";
// import styles from "./Image.module.scss";

const Image = (props) => {

  const {  headshot, index } = props.trainee;
  return (
    <>
      <img src={headshot} alt="Trainee Headshot" id={`card-${index}`} className={'headshot'} />
    </>
  );
};

export default Image;
