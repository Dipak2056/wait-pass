import React, { useState } from "react";

export const Cart = (props) => {
  const [count, setCount] = useState(1);
  //to increase or decrease the count on pressing button
  const handleOnSubtract = () => {
    setCount(count - 1);
  };
  const handleOnAdd = () => {
    setCount(count + 1);
  };

  return (
    <div className="cart-list">
      <h1 className="cart-header">ORDER-LIST</h1>
      <div className="cart-list-item">
        <div className="food-name">chowmein</div>
        <div className="food-price">$15</div>

        <div className="food-quantity">
          <button className="subtract-button" onClick={handleOnSubtract}>
            -
          </button>
          {count}
          <button className="add-button" onClick={handleOnAdd}>
            +
          </button>
        </div>
        <div className="delete">
          <i className="fa-solid fa-trash-can"></i>
        </div>
        <div className="food-total">
          <p>15</p>
        </div>
      </div>
      <div className="cart-list-item">
        <div className="food-name">chowmein</div>
        <div className="food-price">$15</div>

        <div className="food-quantity">
          <button className="subtract-button">-</button>1
          <button className="add-button">+</button>
        </div>
        <div className="delete">
          <i className="fa-solid fa-trash-can"></i>
        </div>
        <div className="food-total">
          <p>15</p>
        </div>
      </div>{" "}
      <div className="cart-list-item">
        <div className="food-name">chowmein</div>
        <div className="food-price">$15</div>

        <div className="food-quantity">
          <button className="subtract-button">-</button>1
          <button className="add-button">+</button>
        </div>
        <div className="delete">
          <i className="fa-solid fa-trash-can"></i>
        </div>
        <div className="food-total">
          <p>15</p>
        </div>
      </div>
      <hr />
      <div className="totalsubmit">
        <div className="cart-total">Total Amount $15</div>
        <div className="order-submit">Submit Order</div>
      </div>
    </div>
  );
};
