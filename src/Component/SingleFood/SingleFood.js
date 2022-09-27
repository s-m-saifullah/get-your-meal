import React from "react";

const SingleFood = ({ food, chosenFood }) => {
  const { strMeal, strMealThumb, strCategory } = food;

  return (
    <div className="card w-full bg-base-100 shadow-xl">
      <figure>
        <img src={strMealThumb} className="w-full" alt={strMeal} />
      </figure>
      <div className="card-body">
        <h2 className="card-title inline-block">{strMeal}</h2>
        <div className="badge badge-secondary inline-block">{strCategory}</div>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <button onClick={() => chosenFood(food)} className="btn btn-info">
            Choose Food
          </button>
        </div>
      </div>
    </div>
  );
};

export default SingleFood;
