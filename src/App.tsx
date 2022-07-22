import "./App.css";
import * as currencyApi from "./services/services";

import React, { useState, useEffect } from "react";

//components
import Header from "./components/Header/Header";
import SwapButton from "./components/SwapButton/SwapButton";
import OutputCurrencyBlock from "./components/OutputCurrencyBlock/OutputCurrencyBlock";
import AdditionalInfo from "./components/AdditionalInfo/AdditionalInfo";

function App() {
  const [inputCurrencyCode, setInputCurrencyCode] = useState("USD");
  const [outputCurrencyCode, setOutputCurrencyCode] = useState("EUR");

  const [inputCurrencyValue, setInputCurrencyValue] = useState("");
  const [outputCurrencyValue, setOutputCurrencyValue] = useState(0);

  // additional info
  const [actualDate, setActualDate] = useState("");
  const [rate, setRate] = useState(0);

  const handleInputValueChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setInputCurrencyValue(event.target.value);
  };

  const handleInputCodeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setInputCurrencyCode(event.target.value);
  };

  const handleOutputCodeChange = (
    event: React.ChangeEvent<HTMLSelectElement>
  ) => {
    setOutputCurrencyCode(event.target.value);
  };

  const handleSwapChange = () => {
    setInputCurrencyCode(outputCurrencyCode);
    setOutputCurrencyCode(inputCurrencyCode);
  };

  useEffect(() => {
    currencyApi
      .convertCurrency(
        Number(inputCurrencyValue),
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

  const preventEvent = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="App">
      <Header />
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

          {/* Button can swap input and output currency codes */}

          <SwapButton handleSwap={handleSwapChange} />

          {/* output field with actual out currency value with ability to change output currency code*/}

          <OutputCurrencyBlock
            inputCurrencyValue={inputCurrencyValue}
            outputCurrencyValue={outputCurrencyValue}
            outputCurrencyCode={outputCurrencyCode}
            handleOutputCodeChange={handleOutputCodeChange}
          />
        </div>

        {/* block with additional info for actual date and actual currecny rate for selected currency codes */}
        <AdditionalInfo
          actualDate={actualDate}
          inputCurrencyValue={inputCurrencyValue}
          inputCurrencyCode={inputCurrencyCode}
          rate={rate}
          outputCurrencyCode={outputCurrencyCode}
        />
      </div>
    </div>
  );
}

export default App;
