import React, { useState } from "react";
import "./SwapButton.css";
import { GlobalSvgSelector } from "../../assets/icons/global/GlobalSvgSelector";

interface Props {
  handleSwap: () => void;
}

export default function SwapButton({ handleSwap }: Props) {
  const [swapped, setSwapped] = useState(false);

  const handleSwapChange = () => {
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
