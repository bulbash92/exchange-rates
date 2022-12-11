import React from 'react';
import styles from './header.module.css'
import logo
  from "../../assets/png-transparent-drawing-cartoon-potato-face-food-photography.png";
import Navbar from "../navbar/navbar";

const Header = () => {

  return (
    <header className={styles.header}>
      <div className={styles.logo}><img alt={'logo'} src={logo}/></div>
      <h1>Бульба Курс</h1>
      <Navbar/>
    </header>
  );
};

export default Header;
