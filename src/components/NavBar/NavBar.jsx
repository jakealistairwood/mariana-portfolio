import React from "react";
import styles from "./NavBar.module.scss";
import { Link } from "@reach/router";
import logo from "../../assets/images/primaryLogo.svg";
import { ReactComponent as GridIcon } from "../../assets/images/gridIcon.svg";

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navWrapper}>
        <div className={styles.logo_container}>
          <img className={styles.logo} src={logo} alt="_nology logo" />
        </div>
        <Link to="gallery">
        <div className={styles.iconWrapper}>
          <GridIcon className={styles.gridIcon} />
        </div>
        </Link>
      </div>
        {/* <Link to="/">
          <h5>Student Bio</h5>
        </Link>
        <Link to="gallery">
          <h5>Cohort Gallery</h5>
        </Link> */}
        {/* <a href="https://nology.io/about-us/" target="__blank">
          <h5>About _nology</h5>
        </a>
        <a href="https://nology.io/companies-employers/hire-a-developer/" target="__blank">
          <h5>Hire a Developer</h5>
        </a>
        <a href="https://nology.io/contact/" target="__blank">
          <h5>Contact Us</h5>
        </a> */}
    </nav>
  );
};

export default NavBar;
