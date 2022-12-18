import React from "react";
import Accordion from "react-bootstrap/Accordion";
import StarRating from "./StarRating";

const FoodItem = ({ food }) => {
  return (
    <div id="recipes">
      <Accordion.Header>{food.name}</Accordion.Header>
      <Accordion.Body>
        <dl>
          <dt>Description:</dt>
          <dd>{food.description}</dd>
          <dt>Ingredients:</dt>
          <dd id="ingredients">{food.ingredients}</dd>
          <dt>Time:</dt>
          <dd>{food.time}</dd>
        </dl>
        <StarRating />
        <hr></hr>
      </Accordion.Body>
    </div>
  );
};
export default FoodItem;