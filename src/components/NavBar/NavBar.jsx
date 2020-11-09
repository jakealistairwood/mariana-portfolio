import React from "react";
import styles from "./NavBar.module.scss";
import logo from "../../assets/images/primaryLogo.svg";

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navWrapper}>
        <div className={styles.logo_container}>
          <img className={styles.logo} src={logo} alt="_nology logo" />
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
