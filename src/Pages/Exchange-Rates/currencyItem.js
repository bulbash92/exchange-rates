import React from 'react';
import styles from './exchangeRates.module.css'

const CurrencyItem = ({currency='', rate=''}) => {
    return (
        <div className={styles.currencyItem}>
            <div className={styles.currency}>{currency}</div>
            <div className={styles.item}>{rate}</div>
        </div>
    );
};

export default CurrencyItem;
