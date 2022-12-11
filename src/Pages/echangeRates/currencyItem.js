import React from 'react';
import styles from './exchangeRates.module.css'

const CurrencyItem = ({currency = '', rate = '', scale = ''}) => {

  return (
    <div className={styles.currencyItem}>
      <div className={styles.currency}>{currency}
        <sup className={styles.currencyScale}>{scale}</sup>
      </div>
      <div className={styles.item}>{rate}</div>
    </div>
  );
};

export default CurrencyItem;
