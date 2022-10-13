import React, { useState } from "react";
import Item from "./Item";

// useState hook to create variable called SelectedCategory
// for keeping track of selected value from <select> element
// When the value of <select> element is changed, update state
// Use the selectedCategory variable to determine which items
// to display in the shopping list.
// Must find some way of filtering the array of items based
// on the selectedCategory

function ShoppingList({ items }) {
  let [selectedCategory, setSelectedCategory] = useState("All")
  const newItems = [...items]
  let itemsToDisplay = newItems.filter((item) => {
    if (selectedCategory === "All") {
      return true;
    } else {
      return item.category === selectedCategory;
    }
  });
  const itemList = itemsToDisplay.map((item) => (
    <Item key={item.id} name={item.name} category={item.category} />
  ))

  function handleChange(e) {
    setSelectedCategory(e.target.value)
  }

  return (
    <div className="ShoppingList">
      <div className="Filter">
        <select onChange={handleChange} name="filter">
          <option value="All">Filter by category</option>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </div>
      <ul className="Items">
        {itemList}
      </ul>
    </div>
  );
}

export default ShoppingList;
