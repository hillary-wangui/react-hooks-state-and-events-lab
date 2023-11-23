import React from "react";
import Item from "./Item";

import { useState } from "react";

function ShoppingList({ selectedcategory,items, handlefilter }) {
  const [addCart, setAddCart] = useState("");
  function HandleCart() {
    setAddCart(!addCart);
    console.log(cartClass)
  }
  const [ButtonName, setButtonName] = useState("Remove From Cart");
  function HandleButtonName() {
    setButtonName(!ButtonName);
  }
  const cartClass = addCart ? "in-cart" : "";
  const buttonName = ButtonName ? "Remove From Cart" : "Add to Cart";

  const filteredItems = items.filter(item => selectedcategory === 'All' || item.category === selectedcategory);
  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select 
        onChange={handlefilter} 
        name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {filteredItems.map((item) => (
          <Item
            cartclass={cartClass}
            buttonname={buttonName}
            handlebuttonname={HandleButtonName}
            key={item.id}
            handlecart={HandleCart}
            name={item.name}
            category={item.category}
          />

        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;