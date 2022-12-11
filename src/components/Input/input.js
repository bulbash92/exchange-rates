import React from 'react';
import styles from './input.module.css'

const Input = ({onChange = () => {}, value= '', ...props}) => {
    return (
        <input value={value} onChange={onChange} className={styles.input} {...props}/>
    );
};

export default Input;
