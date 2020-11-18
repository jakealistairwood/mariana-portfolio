import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons"

const Bio = ({ trainee }) => {
    const {
        name,
        title,
        github,
        linkedin,
        quote,
        bio,
        headshot,
        cv,
        portfolio
    } = trainee;

    return (
        <article className={"trainee-bio"}>
            <header className={"bio-header"}>
                <div className={"name-title"}>
                    <h2>{name}</h2>
                    <h4>{title}</h4>
                </div>
                <div className={"icons"}>
                    <a href={github} target="__blank">
                        <FontAwesomeIcon icon={faGithub} className={"github-icon"} />
                    </a>
                    <a href={linkedin} target="__blank">
                        <FontAwesomeIcon icon={faLinkedin} />
                    </a>
                </div>
            </header>
            <p className={"quote"}>{quote}</p>
            <div className={"bio-container"}>
                <div className={"left"}>
                    <p className={"bio"}>{bio}</p>
                    <div className={"buttonContainer"}>
                        <a href={portfolio} target="__blank">
                            <button className={"portfolio-btn"}>Portfolio</button>
                        </a>
                        <a href={cv} download>
                            <button className={"cv-btn"}>CV</button>
                        </a>
                    </div>
                </div>
                <div className={"image_wrapper"}>
                    <img src={headshot} alt="Trainee Headshot" className={"bio-image"} />
                </div>
            </div>
        </article>
    )
}

export default Bio;