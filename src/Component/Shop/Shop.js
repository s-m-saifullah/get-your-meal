import React from "react";
import Foods from "../Foods/Foods";

const Shop = ({ foods, chosenFood }) => {
  return (
    <div className="mt-7">
      <Foods foods={foods} chosenFood={chosenFood} />
    </div>
  );
};

export default Shop;
