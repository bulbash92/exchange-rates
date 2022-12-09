import React from 'react';
import styles from './inputDate.module.css'

const InputDate = ({onChange = () => {},}) => {
    return (
        <input type={'date'} onChange={onChange} className={styles.input}/>
    );
};

export default InputDate;
