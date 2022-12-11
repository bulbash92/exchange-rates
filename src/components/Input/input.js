import React from 'react';
import styles from './inputDate.module.css'

const InputDate = ({onChange = () => {}, value=''}) => {
    return (
        <input type={'date'} value={value} onChange={onChange} className={styles.input}/>
    );
};

export default InputDate;
