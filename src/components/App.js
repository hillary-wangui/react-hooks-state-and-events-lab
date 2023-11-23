import React from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/items";
import { useState } from "react";


// Use the useState hook to create a state variable called selectedCategory for keeping track 
// of the selected value from this <select> element. When the value of the <select> element is changed, update state.

// You should also use the selectedCategory variable to determine which items to display in the shopping list. 
// You'll need some way of filtering the array of items based on the selectedCategory.

function App() {
const [toggle, setToggle] = useState("")
function HandleLights() {
  setToggle(!toggle)
}
// replace 'false' with a state variable that can be toggled between true and false
// this will be used for the Dark Mode Toggle feature
const appClass = toggle ? "App dark" : "App light"
const [selectedCategory, setSelectedCategory] = useState("")

function HandleFilter(e) {
  setSelectedCategory(e.target.value)
  console.log("filter")
}
  return (
    <div  className={appClass}>
      <header>
        <h2>Shopster</h2>
        <button
        onClick={HandleLights}
        >Dark Mode</button>
      </header>
      <ShoppingList selectedcategory = {selectedCategory} handlefilter={HandleFilter} items={itemData} />
    </div>
  );
}

export default App;