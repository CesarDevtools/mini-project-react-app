import { Link } from "react-router-dom";
import "./Meal.css";

export function Meal({ recipeObj, onDelete }) {
  return (
    <div className="recipe-container">
      <h3>{recipeObj.name}</h3>
      <img src={recipeObj.image} alt="image recipe" />
      <p>
        Calories: {recipeObj.calories} Servings: {recipeObj.servings}
      </p>
      {recipeObj.calories < 250 ? <p>Low Calories</p> : <p>High Calories</p>}

      <button
        onClick={() => {
          onDelete(recipeObj.id);
        }}
        className="button-recipes"
      >
        Delete
      </button>

        <Link to={`/meals/${recipeObj.id}`}>
          <button className="button-recipes">Details</button>
        </Link>

        <Link to={`/editMeal/${recipeObj.id}`}>
          <button className="button-recipes">Edit meal</button>
        </Link>      
    </div>
  );
}
