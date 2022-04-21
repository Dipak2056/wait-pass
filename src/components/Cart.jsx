import React from "react";

export const Cart = (props) => {
  return (
    <div className="cart-list">
      <h1 className="cart-header">ORDER-LIST</h1>
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
