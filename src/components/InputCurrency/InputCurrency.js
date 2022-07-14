import styles from "./InputCurrency.module.css";
import React, { useState } from "react";

export default function InputCurrency() {
  const [inputCurrencyCode, setInputCurrencyCode] = useState("USD");
  const [outputCurrencyCode, setOutputCurrencyCode] = useState("EUR");

  const handleCodeChange = (event) => {
    console.log(event.target.value);
    setInputCurrencyCode(event.target.value);
  };

  return (
    <div>
      <h3>Ви віддаєте</h3>
      <form>
        <label>
          <input type="number" name="inputValue" placeholder="0"></input>
        </label>
        <label>
          <select
            value={inputCurrencyCode}
            onChange={handleCodeChange}
            defaultValue="USD"
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
  );
}
