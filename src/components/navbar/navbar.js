import React from 'react';
import styles from './navbar.module.css'
import {NavLink} from "react-router-dom";

const Navbar = () => {

  const linkClassName = ({isActive}) =>
    isActive ? styles.active : styles.item;

  return (
    <nav className={styles.container}>
      <div className={styles.item}><NavLink to={'/'}
                                            className={linkClassName}>Курсы </NavLink>
      </div>
      <div className={styles.item}><NavLink to={'/dynamic'}
                                            className={linkClassName}>Динамика</NavLink>
      </div>
      <div className={styles.item}><NavLink to={'/converter'}
                                            className={linkClassName}>Конвертер</NavLink>
      </div>
    </nav>
  );
};

export default Navbar;
