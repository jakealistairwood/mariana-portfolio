import React from "react";
import "./Main.scss";
import Image from "../../components/Image";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faChevronRight, faArrowDown } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

const Main = (props) => {
  const { trainees } = props;
  const {
    _id,
    index,
    name,
    title,
    headshot,
    city,
    quote,
    bio,
    linkedin,
    github,
    portfolio
  } = props.trainee;

  return (
    <div className={"page"}>
        <div className={"pageHeader"}>
          <h1>Welcome to the Mariana Intake.</h1>
        </div>
        <hr/>
        <section className={"carouselSection"}>
        { <div className={`cards_slider active_slide_${props.trainee.index}`}>
            <div className='cards_slider_wrapper' style={{
              'transform': `translateX(-${index*(100/trainees.length)}%)`
            }}>
              {
                trainees.map(trainee => <Image key={trainee._id} trainee={trainee} />)
              }
            </div>
          </div> }
          <div className={"buttonContainer"}>
            <button
              onClick={() => props.prevTrainee()}
              disabled={index === 0}
            >
              <FontAwesomeIcon icon={faChevronLeft} />
            </button>
            <button
              onClick={() => props.nextTrainee()}
              disabled={index === 25}
            >
              <FontAwesomeIcon icon={faChevronRight} />
            </button>
          </div>
      </section>

      <section className={"intro"}>
        <FontAwesomeIcon icon={faArrowDown} className={"arrow"} />
        <h1>Introducing...</h1>
        <hr />
      </section>

      <article className={"trainee-bio"}>
        <header className={"header"}>
          <div className={"name-title"}>
            <h2>{name}</h2>
            <h4>{title}</h4>
          </div>
          <div className={"icons"}>
            <FontAwesomeIcon icon={faGithub} />
            <FontAwesomeIcon icon={faLinkedin} />
          </div>
        </header>
        <p className={"quote"}>{quote}</p>
        <div className={"bio-container"}>
          <div className={"left"}>
            <p className={"bio"}>{bio}</p>
            <div className={"buttons"}>
              <button className={"portfolio-btn"}>My Portfolio</button>
              <button className={"cv-btn"}>Take a look at my CV</button>
            </div>
          </div>
          <img src={headshot} alt="Trainee Headshot" className={"bio-image"} />
        </div>
      </article>
    </div>
  );
};

export default Main;
