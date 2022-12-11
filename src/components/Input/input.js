import React from 'react';
import styles from './input.module.css'

const Input = ({onChange = () => {}, value= '', ...props}) => {
    console.log('Input', value);
    return (
        <input value={value} onChange={onChange} className={styles.input} {...props}/>
    );
};

export default Input;
