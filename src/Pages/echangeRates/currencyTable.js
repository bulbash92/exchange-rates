import React from 'react';

import styles from './exchangeRates.module.css'
import CurrencyItem from "./currencyItem";

const CurrencyTable = ({currencyList = []}) => {

  return (
    <div className={styles.table}>
      <div className={styles.headerTable}>
        <div className={styles.headerTableItem}>Валюта</div>
        <div className={styles.headerTableItem}>НБРБ</div>
      </div>
      <div className={styles.tableBody}>
        {currencyList &&
        currencyList.map(item => <CurrencyItem
          key={item.value}
          currency={item.name}
          scale={item.scale > 1 && item.scale}
          rate={item.value}
        />)}
      </div>
    </div>
  );
};

export default CurrencyTable;
