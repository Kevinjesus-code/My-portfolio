import React from "react";
import styles from "./navbar.module.css";

const Navbar = () => {
  return (
    <header className={styles.header}>
      <nav className={styles.nav}>
        <h1>kevinJesusCode();</h1>
        <ul className={styles.list}>
          <li>Home</li>
          <li>About me</li>
          <li>Portfolio</li>
          <li>Contacto</li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
