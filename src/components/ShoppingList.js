import React, { useContext, useState } from "react";
import ShoppingContext from "./ShoppingContext";

export default function Shoppinglist() {
  const [list, setList] = useContext(ShoppingContext);
  const handleClick = (e) => {
    if (e.checked = true & e.target.nextSibling.parentElement.style.textDecoration == "") {
      e.target.nextSibling.parentElement.style.textDecoration = "line-through";
    } else {
      e.target.nextSibling.parentElement.style.textDecoration = "";
    }
  }
  //clears the shopping list
  const removeItem = (e) => {
    let updatedShopping = []
    setList(updatedShopping);
  };
  //seperates each ingredient onto new line
  let ing = [...list].flat(1);
  return (
    <div>
      <h2>Shopping list</h2>
      <div>
        <form>
          {
            ing.map((x, index) => {
              return <p key={index}><input type="checkbox" onClick={(e) => handleClick(e)} />{x}</p>
            })
          }
          <br></br>
        </form>
      </div>
      <button type="button" class="btn btn-dark" onClick={(e) => removeItem(e)}>Empty shopping list</button> <br></br><br></br>
    </div>
  );
}