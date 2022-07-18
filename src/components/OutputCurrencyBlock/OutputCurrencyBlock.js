import React from "react";
import "./OutputCurrencyBlock.css";

export default function OutputCurrencyBlock({
  inputCurrencyValue,
  outputCurrencyValue,
  outputCurrencyCode,
  handleOutputCodeChange,
}) {
  return (
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
  );
}
