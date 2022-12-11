import React, {useCallback, useEffect, useState} from 'react';

import Select from 'react-select';

import styles from './exchangeDynamics.module.css'
import Input from "../../components/Input/input";
import Button from "../../components/button/button";
import { CurrencyApi } from '../../api/api'
import Chart from "../../components/chart/chart";


const ExchangeDynamics = () => {

    const [startDate, setStartDate] = useState(null)
    const [endDate, setEndDate] = useState(null)
    const [dynamic, setDynamic] = useState([])
    const [checkCurrency, setCheckCurrency] = useState('')
    const [currencyList, setCurrencyList] = useState([])

    const onChangeCurrencyHandler = (e) => {
        setCheckCurrency(e.value)
    }


    const getDynamicsExchangeHandler = async () => {
        try {
            const data = await CurrencyApi.getDynamicsExchange(checkCurrency, startDate, endDate)
            const newDynamicDate = data.map(d => ({
                name: d.Date.slice(0, 10),
                курс: d.Cur_OfficialRate,
            }))
            setDynamic(newDynamicDate)

        } catch (e) {
            console.log(e)
        }
    }

    const onClickGetCurrencyRateHandler = async () => {
        try {
            const data = await CurrencyApi.getCurrencyListHandler()
            const newCurrencyList = data.map(d => ({label: d.Cur_Name, value: d.Cur_ID}))
            setCurrencyList(newCurrencyList)
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
                            classNamePrefix="Валюта"
                            isSearchable={true}
                            name="Валюта"
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
