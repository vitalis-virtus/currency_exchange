import React from "react";
import "./SwapButton.css";
import { GlobalSvgSelector } from "../../assets/icons/global/GlobalSvgSelector";

export default function SwapButton({ handleSwap }) {
  return (
    <button type="button" onClick={handleSwap} className="swap-button">
      <GlobalSvgSelector id="arrows" />
    </button>
  );
}
