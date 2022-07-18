import React from "react";
import "./AdditionalInfo.css";

export default function AdditionalInfo({
  actualDate,
  inputCurrencyValue,
  inputCurrencyCode,
  rate,
  outputCurrencyCode,
}) {
  return (
    <div className="additional-info">
      <p className="additional-info__date">
        Курс обміну актуальний на {actualDate}
      </p>
      {inputCurrencyValue && (
        <p className="additional-info__exchange-value">
          1 {inputCurrencyCode} = {rate} {outputCurrencyCode}
        </p>
      )}
    </div>
  );
}
