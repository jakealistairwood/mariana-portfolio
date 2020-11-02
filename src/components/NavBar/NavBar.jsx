import React from "react";
import styles from "./NavBar.module.scss";
import { Link } from "@reach/router";
import logo from "../../assets/images/primaryLogo.svg";

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo_container}>
        <img className={styles.logo} src={logo} alt="_nology logo" />
      </div>
      <div className={styles.nav_items}>
        <Link to="/">
          <h5>Student Bio</h5>
        </Link>
        <Link to="gallery">
          <h5>Cohort Gallery</h5>
        </Link>
        <a href="https://nology.io/about-us/" target="__blank">
          <h5>About _nology</h5>
        </a>
        <a href="https://nology.io/companies-employers/hire-a-developer/" target="__blank">
          <h5>Hire a Developer</h5>
        </a>
        <a href="https://nology.io/contact/" target="__blank">
          <h5>Contact Us</h5>
        </a>
      </div>
    </nav>
  );
};

export default NavBar;
