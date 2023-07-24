import React from "react";
import { useOutletContext } from "react-router-dom";

function EpubBookPricing() {
  const { displayedEpub } = useOutletContext();
  return (
    <div>
      <h1>
        {" "}
        Rs{" "}
        {Math.round(
          displayedEpub?.saleInfo.listPrice &&
            displayedEpub?.saleInfo.listPrice.amount
        )}
      </h1>
    </div>
  );
}

export default EpubBookPricing;
