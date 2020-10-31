import React from "react";
import styles from "./NavBar.module.scss";
import { Link } from "@reach/router";

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <Link to="main">
        <h3>Student Bio</h3>
      </Link>
      <Link to="gallery">
        <h3>Cohort Gallery</h3>
      </Link>
      <a href="https://nology.io/about-us/" target="__blank">
        <h3>About _nology</h3>
      </a>
      <a href="https://nology.io/companies-employers/hire-a-developer/" target="__blank">
        <h3>Hire a Developer</h3>
      </a>
      <a href="https://nology.io/contact/" target="__blank">
        <h3>Contact Us</h3>
      </a>
    </nav>
  );
};

export default NavBar;
