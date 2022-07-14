import "./App.css";
import "normalize.css";
import * as currencyApi from "./services/services";

import React, { useState, useEffect } from "react";

function App() {
  const [inputCurrencyCode, setInputCurrencyCode] = useState("USD");
  const [outputCurrencyCode, setOutputCurrencyCode] = useState("EUR");

  const [inputCurrencyValue, setInputCurrencyValue] = useState("");
  const [outputCurrencyValue, setOutputCurrencyValue] = useState(0);

  const handleInputCodeChange = (event) => {
    setInputCurrencyCode(event.target.value);
  };

  const handleOutputCodeChange = (event) => {
    setOutputCurrencyCode(event.target.value);
  };

  const handleInputValueChange = (event) => {
    setInputCurrencyValue(event.target.value);
  };

  useEffect(() => {
    currencyApi
      .convertCurrency(
        inputCurrencyValue,
        inputCurrencyCode,
        outputCurrencyCode
      )
      .then((response) => {
        setOutputCurrencyValue(response.data.result);
      });
  }, [inputCurrencyCode, inputCurrencyValue, outputCurrencyCode]);

  const test = (event) => {
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
        <div className="field">
          <h3>Ви віддаєте</h3>
          <form onSubmit={test}>
            <label>
              <input
                onChange={handleInputValueChange}
                type="number"
                name="inputValue"
                placeholder="0"
                value={inputCurrencyValue}
              />
            </label>
            <label>
              <select
                value={inputCurrencyCode}
                onChange={handleInputCodeChange}
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

        {/* output field */}

        <div className="field">
            <h3>Ви отримуюте</h3>
          <div className="outputCurrencyContainer">
            {outputCurrencyValue ? <p className="outputValue">{outputCurrencyValue}</p> : <p className="outputValue">0</p>}
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
    </div>
  );
}

export default App;
