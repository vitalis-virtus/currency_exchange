import "./App.css";
import * as currencyApi from "./services/services";

import React, { useState, useEffect } from "react";

function App() {
  const [inputCurrencyCode, setInputCurrencyCode] = useState("USD");
  const [outputCurrencyCode, setOutputCurrencyCode] = useState("EUR");

  const [inputCurrencyValue, setInputCurrencyValue] = useState("");
  const [outputCurrencyValue, setOutputCurrencyValue] = useState(0);

  const [actualDate, setActualDate] = useState("");

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

        console.log(response);
        if (exchangeResult) {
          setOutputCurrencyValue(exchangeResult.toFixed(2));
          //we gonna change date format from 'yyyy-mm-dd' to 'dd.mm.yyyy'
        } else {
          setOutputCurrencyValue(0);
        }
        setActualDate(exchangeActualDate.split("-").reverse().join("."));
      });
  }, [inputCurrencyCode, inputCurrencyValue, outputCurrencyCode]);

  const preventEvent = (event) => {
    event.preventDefault();
  };

  return (
    <div className="App">
      <h1>Калькулятор обміну(конвертації валют)</h1>
      <h2>
        Тут ви можете перегулянути актуальний курс для обміну однієї іноземної
        валюти на іншу
      </h2>

      {/* input field */}
      <div className="fieldsContainer">
        <div className="inputCurrency">
          <h3 className="inputCurrency__header">Ви віддаєте</h3>
          <form onSubmit={preventEvent} className="inputCurrency__form">
            <label htmlFor="inputValue">
              <input
                onChange={handleInputValueChange}
                type="number"
                id="inputValue"
                name="inputValue"
                placeholder="0"
                value={inputCurrencyValue}
                className="inputCurrency__input"
              />
            </label>
            <label htmlFor="inputCurrencyCode">
              <select
                id="inputCurrencyCode"
                value={inputCurrencyCode}
                onChange={handleInputCodeChange}
                className="inputCurrency__select"
              >
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="NOK">NOK</option>
                <option value="SEK">SEK</option>
                <option value="DKK">DKK</option>
              </select>
            </label>
          </form>
        </div>
        <button type="button" onClick={handleReverseChange}>
          change
        </button>

        {/* output field */}

        <div className="field">
          <h3>Ви отримуюте</h3>
          <div className="outputCurrencyContainer">
            {inputCurrencyValue ? (
              <p className="outputValue">{outputCurrencyValue}</p>
            ) : (
              <p className="outputValue">0</p>
            )}
            <form>
              <select
                value={outputCurrencyCode}
                onChange={handleOutputCodeChange}
                // defaultValue="EUR"
              >
                <option value="USD">USD</option>
                <option value="EUR">EUR</option>
                <option value="NOK">NOK</option>
                <option value="SEK">SEK</option>
                <option value="DKK">DKK</option>
              </select>
            </form>
          </div>
        </div>
      </div>
      <div className="">
        <p>Курс обміну актуальний на {actualDate} </p>
        {inputCurrencyValue && (
          <p>
            1 {inputCurrencyCode}={outputCurrencyValue / inputCurrencyValue}
            {outputCurrencyCode}
          </p>
        )}
      </div>
    </div>
  );
}

export default App;
