import "./App.css";
import * as currencyApi from "./services/services";

import React, { useState, useEffect } from "react";

import { GlobalSvgSelector } from "./assets/icons/global/GlobalSvgSelector";

function App() {
  const [inputCurrencyCode, setInputCurrencyCode] = useState("USD");
  const [outputCurrencyCode, setOutputCurrencyCode] = useState("EUR");

  const [inputCurrencyValue, setInputCurrencyValue] = useState("");
  const [outputCurrencyValue, setOutputCurrencyValue] = useState(0);

  // additional info
  const [actualDate, setActualDate] = useState("");
  const [rate, setRate] = useState("");

  const handleInputCodeChange = (event) => {
    setInputCurrencyCode(event.target.value);
  };

  const handleOutputCodeChange = (event) => {
    setOutputCurrencyCode(event.target.value);
  };

  const handleInputValueChange = (event) => {
    setInputCurrencyValue(event.target.value);
  };

  const handleReverseChange = (event) => {
    setInputCurrencyCode(outputCurrencyCode);
    setOutputCurrencyCode(inputCurrencyCode);
  };

  useEffect(() => {
    currencyApi
      .convertCurrency(
        inputCurrencyValue,
        inputCurrencyCode,
        outputCurrencyCode
      )
      .then((response) => {
        const { data } = response;
        const exchangeResult = data.result;
        const exchangeActualDate = data.date;
        const rate = data.info.rate;
        if (exchangeResult) {
          setOutputCurrencyValue(exchangeResult.toFixed(2));
          setRate(rate.toFixed(4));
          //we gonna change date format from 'yyyy-mm-dd' to 'dd.mm.yyyy'
        } else {
          setOutputCurrencyValue(0);
          setRate(0);
        }
        setActualDate(exchangeActualDate.split("-").reverse().join("."));
      });
  }, [inputCurrencyCode, inputCurrencyValue, outputCurrencyCode]);

  const preventEvent = (event) => {
    event.preventDefault();
  };

  return (
    <div className="App">
      <div className="headers__wrapper">
        <h1>Калькулятор обміну(конвертації валют)</h1>
        <h2>
          Тут ви можете перегулянути актуальний курс для обміну однієї іноземної
          валюти на іншу
        </h2>
      </div>

      {/* input field */}
      <div className="content__wrapper">
        <div className="fieldsContainer">
          <div className="input-currency">
            <h3 className="input-currency__header">Ви віддаєте</h3>
            <form onSubmit={preventEvent} className="input-currency__form">
              <label
                htmlFor="inputValue"
                className="input-currency__input__label"
              >
                <input
                  onChange={handleInputValueChange}
                  type="number"
                  id="inputValue"
                  name="inputValue"
                  placeholder="0"
                  value={inputCurrencyValue}
                  className="input-currency__input"
                />
              </label>
              <label htmlFor="inputCurrencyCode">
                <select
                  id="inputCurrencyCode"
                  value={inputCurrencyCode}
                  onChange={handleInputCodeChange}
                  className="input-currency__select"
                >
                  <option value="USD">USD</option>
                  <option value="EUR">EUR</option>
                  <option value="NOK">NOK</option>
                  <option value="SEK">SEK</option>
                  <option value="DKK">DKK</option>
                  <option value="UAH">UAH</option>
                  <option value="PLN">PLN</option>
                </select>
              </label>
            </form>
          </div>
          <button
            type="button"
            onClick={handleReverseChange}
            className="change-button"
          >
            <GlobalSvgSelector id="arrows" />
          </button>

          {/* output field */}

          <div className="output-currency">
            <h3 className="output-currency__header">Ви отримуєте</h3>
            <div className="output-currency__output">
              {inputCurrencyValue ? (
                <p className="output-currency__value">{outputCurrencyValue}</p>
              ) : (
                <p className="output-currency__value">0</p>
              )}
              <form className="output-currency__form">
                <label htmlFor="outputCurrencyCode">
                  <select
                    value={outputCurrencyCode}
                    className="output-currency__select"
                    id="outputCurrencyCode"
                    onChange={handleOutputCodeChange}
                  >
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                    <option value="NOK">NOK</option>
                    <option value="SEK">SEK</option>
                    <option value="DKK">DKK</option>
                    <option value="UAH">UAH</option>
                    <option value="PLN">PLN</option>
                  </select>
                </label>
              </form>
            </div>
          </div>
        </div>
        <div className="additional-info">
          <p className="additional-info__date">
            Курс обміну актуальний на {actualDate}{" "}
          </p>
          {inputCurrencyValue && (
            <p className="additional-info__exchange-value">
              1 {inputCurrencyCode} = {rate} {outputCurrencyCode}
            </p>
          )}
        </div>
      </div>
    </div>
  );
}

export default App;
