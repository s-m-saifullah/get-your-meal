import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";

const Cart = ({ cart }) => {
  return (
    <div className="h-full">
      <div className="dropdown dropdown-end">
        <label tabIndex={1} className="btn btn-ghost btn-circle">
          <div className="indicator">
            <FontAwesomeIcon icon={faCartShopping} />
            <span className="badge badge-sm indicator-item">
              {Object.keys(cart).length}
            </span>
          </div>
        </label>
        <div
          tabIndex={2}
          className="mt-3 card card-compact dropdown-content w-96 bg-base-100 shadow"
        >
          <div className="card-body">
            {cart.map((cartItem) => (
              <li className="text-black">{cartItem.strMeal}</li>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
