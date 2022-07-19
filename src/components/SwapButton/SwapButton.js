import React, { useState } from "react";
import "./SwapButton.css";
import { GlobalSvgSelector } from "../../assets/icons/global/GlobalSvgSelector";

export default function SwapButton({ handleSwap }) {
  const [swapped, setSwapped] = useState(false);

  const handleSwapChange = () => {
    console.log(swapped);
    handleSwap();
    setSwapped((prevState) => !prevState);
  };

  return (
    <button
      type="button"
      data-swapped={swapped}
      onClick={handleSwapChange}
      className="swap-button"
    >
      <GlobalSvgSelector id="arrows" />
    </button>
  );
}
