import React, {useEffect, useState} from 'react';

import Select from 'react-select';

import styles from './exchangeDynamics.module.css'
import Input from "../../components/Input/input";
import Button from "../../components/button/button";
import {CurrencyApi} from '../../api/api'
import Chart from "../../components/chart/chart";


const ExchangeDynamics = () => {

  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [dynamic, setDynamic] = useState([])
  const [checkCurrency, setCheckCurrency] = useState('')
  const [currencyList, setCurrencyList] = useState([])

  const onChangeCurrencyHandler = (e) => {
    setCheckCurrency(e.value)
  }


  const getDynamicsExchangeHandler = async () => {
    try {
      const data = await CurrencyApi.getDynamicsExchange(431, startDate, endDate)
      setDynamic(data)
    } catch (e) {
      console.log(e)
    }
  }

  const onClickGetCurrencyRateHandler = async () => {
    try {
      const data = await CurrencyApi.getCurrencyListHandler()
      setCurrencyList(data)
    } catch (e) {
      console.log(e)
    }
  }

  useEffect(() => {
    onClickGetCurrencyRateHandler()
  }, [])

  const onChangeStartDateHandler = (e) => {
    setStartDate(e.currentTarget.value)
  }
  const onChangeEndDateHandler = (e) => {
    setEndDate(e.currentTarget.value)
  }

  return (
    <div className={styles.dynamic}>
      <h2>Отслеживание динамики курсов</h2>
      <div className={styles.container}>
        <div>
          <div className={styles.inputContainer}> Выберите валюту:
            <Select
              onChange={onChangeCurrencyHandler}
              className="basic-single"
              isSearchable={true}
              placeholder={'Валюта'}
              options={currencyList}
            />
          </div>
          <div className={styles.inputContainer}>выберите дату с:
            <Input
              type={'date'}
              onChange={(e) => onChangeStartDateHandler(e)}
              value={startDate}
            />
          </div>
          <div className={styles.inputContainer}>выберите дату по:
            <Input
              onChange={onChangeEndDateHandler}
              value={endDate}
              type={'date'}
            />
          </div>
          <Button
            onClick={getDynamicsExchangeHandler}
            value={'Получить динамику'}
          />
        </div>
        <Chart data={dynamic}/>
      </div>
    </div>
  );
};

export default ExchangeDynamics;
