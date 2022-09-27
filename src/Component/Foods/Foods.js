import React from "react";
import SingleFood from "../SingleFood/SingleFood";

const Foods = ({ foods, chosenFood }) => {
  return (
    <div className="grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-5 px-10">
      {foods.map((food) => (
        <SingleFood food={food} key={food.idMeal} chosenFood={chosenFood} />
      ))}
    </div>
  );
};

export default Foods;
