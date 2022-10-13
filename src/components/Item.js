import React, { useState } from "react";

function Item({ name, category }) {
  let [inCart, setInCart] = useState(false)
  function addToCart() {
    setInCart((inCart) => !inCart);

  }
  const bInCart = inCart ? "in-cart" : "";

  return (
    <li className={bInCart}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button onClick={addToCart} className="add">Add to Cart</button>
    </li>
  );
}

export default Item;
