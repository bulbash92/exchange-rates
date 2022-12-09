import React, {useCallback, useEffect, useState} from 'react';
import styles from './exchangeRates.module.css'
import CurrencyTable from "./currencyTable";
import InputDate from "../../components/inputDate/inputDate";
import Button from "../../components/button/button";

const ExchangeRates = () => {
    const [currencyList, setCurrencyList] = useState(null)
    const [date, setDate] = useState(null)
    const [disabled, setDisabled] = useState(false)

    const onChangeDateHandler = (e) => {
        console.log(e.currentTarget.value)
        setDate(e.currentTarget.value)
    }

    const getCurrencyListHandler = async (checkDate) => {
        try {
            setDisabled(true)
            const response = await fetch(`https://www.nbrb.by/api/exrates/rates?ondate=${checkDate}&periodicity=0`)
            // const response = await fetch(`https://www.nbrb.by/api/exrates/rates?periodicity=0`)
            const data = await response.json()
            setCurrencyList(data)
            setDisabled(false)
        } catch (e) {
            setDisabled(false)
            console.log(e)
        }
    }

    const onClickGetCurrencyRateHandler = useCallback(() => {
        getCurrencyListHandler(date)
    }, [date])

    //
    useEffect(() => {
        getCurrencyListHandler(date)
    }, [])

    return (
        <div className={styles.container}>
            <div className={styles.header}>
                <InputDate type={'date'} onChange={(e) => onChangeDateHandler(e)}/>
                <Button onClick={onClickGetCurrencyRateHandler} value={'Получить'} disabled={disabled}/>
            </div>
            <CurrencyTable currencyList={currencyList}/>
        </div>
    );
};

export default ExchangeRates;
