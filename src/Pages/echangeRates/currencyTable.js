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
          key={item.Cur_ID}
          currency={item.Cur_Name}
          scale={item.Cur_Scale > 1 && item.Cur_Scale}
          rate={item.Cur_OfficialRate}
        />)}
      </div>
    </div>
  );
};

export default CurrencyTable;
