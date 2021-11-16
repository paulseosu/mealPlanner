import React from "react";
import { Link } from "react-router-dom";

function DisplayRecipePage() {
  return (
    <div>
      <h1>Recipe</h1>
      <div>Name: Pancakes</div>
      <div>Ingedients: Flour, Milk, Butter</div>
      <div>
        Instructions:
        <br />
        1. mix batter
        <br />
        2. cook on stove
      </div>
      <div>Calories: 600</div>
      <div>Meal Type: Breakfast</div>
      <button>Edit Recipe</button><br/>
      <button>Delete Recipe</button>
      <br />
      <Link to="/">Return Home</Link>
      <br />
    </div>
  );
}

export default DisplayRecipePage;
