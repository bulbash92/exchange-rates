import React, {useEffect, useState} from 'react';
import styles from './exchangeRates.module.css'
import CurrencyTable from "./currencyTable";
import Input from "../../components/Input/input";
import Button from "../../components/button/button";
import {CurrencyApi} from '../../api/api'

const ExchangeRates = () => {

  const [currencyList, setCurrencyList] = useState(null)
  const [date, setDate] = useState('')
  const [disabled, setDisabled] = useState(false)

  const onChangeDateHandler = (e) => {
    setDate(e.currentTarget.value)
  }

  const onClickGetCurrencyRateHandler = async () => {
    try {
      setDisabled(true)
      const data = await CurrencyApi.getCurrencyListHandler(date)
      setCurrencyList(data)
      setDisabled(false)
    } catch (e) {
      setDisabled(false)
      console.log(e)
    }
  }

  useEffect(() => {
    onClickGetCurrencyRateHandler()
  }, [])

  return (
    <div className={styles.container}>
      <div>
        <h2>Курсы валют</h2>
        <div className={styles.header}>
          <Input onChange={onChangeDateHandler} value={date} type={'date'}/>
          <Button
            onClick={onClickGetCurrencyRateHandler}
            value={'Получить'}
            disabled={disabled}
          />
        </div>
        <CurrencyTable currencyList={currencyList}/>
      </div>
    </div>
  );
};

export default ExchangeRates;
