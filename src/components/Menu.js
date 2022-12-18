import React, { useContext, useState } from "react";
import MenuContext from "./MenuContext";
import Accordion from "react-bootstrap/Accordion";
import FoodItem from "./FoodItem";
import ShoppingContext from "./ShoppingContext";
import Shoppinglist from "./ShoppingList";

export default function Menu() {
    const [menu, setMenu] = useContext(MenuContext);
    //removes menu item
    const removeItem = (e, item) => {
        let updatedMenu = menu.filter((element) => {
            return element !== item;
        });
        setMenu(updatedMenu);
    };
    //sets shopping list
    const [selectedIngs, setSelectedIng] = useState([]);
    const shopping = (e, selectedIng) => {
        // Checks if shopping list item exists, adds if doesnt
        const found = selectedIngs.some(el => el === selectedIng);
        if (!found) {
            let shoppingstate = [...selectedIngs, selectedIng];
            console.log(found);
            setSelectedIng(shoppingstate);
        } else {
            alert("Recipe ingredients are already in the shopping list!")
        }
    };
    //clears the shopping list
    const clearMenu = (e) => {
        let updatedMenu = []
        setMenu(updatedMenu);
    };
    return (
        <>
            <div id="menu">
                <h2>Menu</h2>
                <Accordion>
                    {menu.map((food, index) => {
                        return (
                            <Accordion.Item eventKey={index} key={index}>
                                <FoodItem food={food} />
                                <Accordion.Body>
                                    <button type="button" class="btn btn-dark" onClick={(e) => removeItem(e, food)}>Delete from menu</button> <br></br><br></br>
                                    <button type="button" class="btn btn-dark" onClick={(e) => shopping(e, food.ingredients)}>Add ingredients to the shopping list</button>
                                </Accordion.Body>
                            </Accordion.Item>
                        );
                    })}
                </Accordion>
                <br/>
                <button type="button" class="btn btn-dark" onClick={(e) => clearMenu(e)}>Clear Menu</button> <br></br><br></br>
            </div>
            <div>
                <ShoppingContext.Provider value={[selectedIngs, setSelectedIng]}>
                    <Shoppinglist />
                </ShoppingContext.Provider>
            </div>
        </>
    );
};