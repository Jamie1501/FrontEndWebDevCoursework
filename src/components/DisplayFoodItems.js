import React, { useState } from "react";
import FetchNutrition from "./FetchNutrition";
import MenuContext from "./MenuContext";
import Accordion from "react-bootstrap/Accordion";
import Menu from "./Menu";
import FoodItem from "./FoodItem";

const DisplayFoodItems = ({ foodList }) => {
  //sets menu
  const [selectedItems, setSelectedItems] = useState([]);
  const menu = (e, selectedItem) => {
    setSearchField(selectedItem.ingredients)
    //Checks if menu item exists, adds if doesnt
    const found = selectedItems.some(el => el.name === selectedItem.name);
    if (!found) {
      let newState = [...selectedItems, selectedItem];
      console.log(found);
      setSelectedItems(newState);
    } else {
      alert("Item is already on the menu!")
    }
  };
  //gets ingredients to send to api
  const [searchField, setSearchField] = useState("");
  const nutrient = (e, selectedItem) => {
    setSearchField(selectedItem.ingredients)
  };
  return (
    <>
      <Accordion class="accordion">
      <br />
        <h2>Menu Items</h2>
        <br />
        {foodList.map((food, index) => {
          return (
            <Accordion.Item eventKey={index} key={index}
              onClick={(e) => nutrient(e, food)}>
              <FoodItem food={food} />
              <div>
                <Accordion.Body>
                  <button type="button" class="btn btn-dark" onClick={(e) => menu(e, food)}>Add to menu</button>
                </Accordion.Body>
              </div>
            </Accordion.Item>
            
          );
        })}
      </Accordion>
      <br/>
      <hr/>
      <h2>Here is the Nutritional Information for the Dish selected</h2>
      <br/>
      <FetchNutrition query={searchField} />
      <br />
      <br />
      <MenuContext.Provider value={[selectedItems, setSelectedItems]}>
        <Menu />
      </MenuContext.Provider>

      {/* <div className="item-container">
            {items.map((item) => (
              <div className="card" key={item.id}>
                <h5>{item.name}</h5>
                <p>{item.description}</p>
                <button onClick={(e) => handleClick(e, item.name)}>
                  Add to Order
                </button>
              </div>
            ))}
          </div> */}
    </>
  );
};
export default DisplayFoodItems;