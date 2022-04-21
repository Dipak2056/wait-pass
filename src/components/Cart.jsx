import React, { useState } from "react";

export const Cart = ({
  price,
  count,
  totalPrice,
  finalTotal,
  handleOnAdd,
  handleOnSubtract,
}) => {
  return (
    <div className="cart-list">
      <h1 className="cart-header">ORDER-LIST</h1>
      <div className="cart-list-item">
        <div className="food-name">chowmein</div>
        <div className="food-price">{price}</div>

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
          <p>{totalPrice}</p>
        </div>
      </div>
      <hr />
      <div className="totalsubmit">
        <div className="cart-total">Total Amount : {totalPrice}</div>
        <div className="order-submit">Submit Order</div>
      </div>
    </div>
  );
};
