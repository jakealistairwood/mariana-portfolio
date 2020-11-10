import React from "react";
import styles from "./Footer.module.scss";
import logo from "../../assets/images/secondaryLogo.svg";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer_wrapper}>
        <div className={styles.footer_logo}>
          <img src={logo} alt="_nology logo" />
        </div>
        <div className={styles.footer_links}>
          <a className={styles.hire_link} href="https://nology.io/companies-employers/hire-a-developer/" target="__blank">
            <h5>Hire a Developer</h5>
          </a>
          <a href="https://nology.io/contact/" target="__blank">
            <h5>Contact Us</h5>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
