import React from "react";
import styles from "./Footer.module.scss";
import logo from "../../assets/images/logo-2.png";

const Footer = () => {
  return (
    <section className={styles.footer}>
      <div className={styles.footer_logo}>
        <img src={logo} />
      </div>
      <div className={styles.footer_links}>
        <a href="https://nology.io/companies-employers/hire-a-developer/" target="__blank">
          <h5>Hire a Developer</h5>
        </a>
        <a href="https://nology.io/contact/" target="__blank">
          <h5>Contact Us</h5>
        </a>
      </div>
    </section>
  );
};

export default Footer;
