import React from "react";
import Cart from "../Cart/Cart";

const Header = ({ cart }) => {
  return (
    <div className="px-10 bg-cyan-700 sticky top-0 z-10">
      <div className="navbar text-white">
        <div className="flex-1">
          <a href="/" className="btn btn-ghost normal-case text-xl">
            daisyUI
          </a>
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal p-0">
            <li>
              <a href="/">Foods</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
            <li tabIndex={0}>
              <Cart cart={cart} />
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
