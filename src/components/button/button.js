import React from 'react';
import styles from './button.module.css'

const Button = ({value = '', onClick = () => {}, disabled = false,}) => {

  return (
    <button
      className={styles.button}
      onClick={onClick}
      disabled={disabled}
    >
      {value}
    </button>
  );
};

export default Button;
