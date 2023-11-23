import React from "react";

function Item({ name, category, cartclass,handlecart,handlebuttonname,buttonname }) {

  return (
    <li onClick={handlecart} className={cartclass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button  onClick={handlebuttonname} className="add">{buttonname}</button>
    </li>
  );
}

export default Item;