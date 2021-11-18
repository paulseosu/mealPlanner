import React from 'react';


function MealPlan ({mealPlan, editPlan}) {
    return (
        <tr>
            <td>{mealPlan.planID}</td>
            <td>{mealPlan.planName}</td>
            <td>{mealPlan.userID}</td>
            <td><button onClick={() => editPlan(mealPlan)}>Edit</button></td>
            <td><button>Delete</button></td>
        </tr>
    )
}

export default MealPlan