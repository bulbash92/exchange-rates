import React, {useEffect, useState} from 'react';
import Select from "react-select";
import {CurrencyApi} from "../../api/api";
import Input from "../../components/Input/input";
import styles from './converter.module.css';

const Converter = () => {

  const [currencyList, setCurrencyList] = useState([])
  const [currencyTop, setCurrencyTop] = useState({
    label: '',
    rate: '',
    scale: ''
  })

  const [inputTop, setInputTop] = useState(0)
  const [currencyBottom, setCurrencyBottom] = useState({
    label: '',
    rate: '',
    scale: ''
  })
  const [inputBottom, setInputBottom] = useState(0)

  const isDisabled = currencyTop.label === '' || currencyBottom.label === ''

  const getCurrencyRateListHandler = async () => {
    try {
      const data = await CurrencyApi.getCurrencyListHandler()
      const result = [{label: 'BYN', value: 1, scale: 1}, ...data];
      setCurrencyList(result);
    } catch (e) {
      console.log(e)
    }
  }

  const onChangeSelectTop = (e) => {
    setCurrencyTop({...currencyTop, label: e.label, rate: e.value, scale: e.scale,})
  }

  const onChangeSelectBottom = (e) => {
    setCurrencyBottom({
      ...currencyBottom,
      label: e.label,
      rate: e.value,
      scale: e.scale
    })
  }


  const onChangeTopInput = (e) => {
    const target = e.currentTarget.value.replace(/[^\d.]/g, '')
    setInputTop(target)
    if (currencyBottom === currencyTop) {
      return setInputBottom(target)
    }
    const currencyToCurrency = +((target * currencyTop.rate / currencyTop.scale) / (currencyBottom.rate / currencyBottom.scale)).toFixed(2)
    if (isNaN(currencyToCurrency)) {
      return setInputBottom('')
    }
    setInputBottom(currencyToCurrency)
  }

  const onChangeBottomInput = (e) => {
    const target = e.currentTarget.value.replace(/[^\d.]/g, '')
    setInputBottom(target)
    if (currencyBottom === currencyTop) {
      return setInputTop(target)
    }
    const currencyToCurrency = +((target * currencyBottom.rate / currencyBottom.scale) / (currencyTop.rate / currencyTop.scale)).toFixed(2)
    if (isNaN(currencyToCurrency)) {
      return setInputBottom('')
    }
    setInputTop(currencyToCurrency)
  }

  useEffect(() => {
    getCurrencyRateListHandler()
  }, [])

  return (
    <div className={styles.converter}>
      <div>
        <h2 className={styles.title}>Конвертер валют</h2>
        <div className={styles.inputContainer}>
          <Select
            onChange={onChangeSelectTop}
            className={styles.select}
            classNamePrefix="Валюта"
            isSearchable={true}
            name="Валюта"
            options={currencyList}
          />
          <Input
            type={'tel'}
            disabled={isDisabled}
            onChange={onChangeTopInput}
            value={inputTop}/>
        </div>
        <div className={styles.inputContainer}>
          <Select
            onChange={onChangeSelectBottom}
            className={styles.select}
            isSearchable={true}
            name="Валюта"
            options={currencyList}
          />
          <Input
            disabled={isDisabled}
            onChange={onChangeBottomInput}
            value={inputBottom}
            type={'tel'}
          />
        </div>
      </div>
    </div>
  );
};

export default Converter;
