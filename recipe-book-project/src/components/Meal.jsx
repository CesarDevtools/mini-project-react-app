import { Link } from "react-router-dom";
import "./Meal.css";

export function Meal({ recipeObj, onDelete }) {
  // Definimos una clase o color basado en las calorías para el badge
  const isLowCal = recipeObj.calories < 250;

  return (
    <div className="recipeList-container">
    <div className="recipe-container">
      

      <div className="recipe-content">
        <h3>{recipeObj.name}</h3>

        <div className="image-wrapper">
        <img src={recipeObj.image} alt={recipeObj.name} />
        {/* Badge posicionado sobre la imagen para ahorrar espacio */}
        <span className={`calorie-badge ${isLowCal ? "low" : "high"}`}>
          {isLowCal ? "Low Cal" : "High Cal"}
        </span>
      </div>
        
        <div className="recipe-stats">
          <div className="stat-item">
            <span className="stat-label">Calories</span>
            <span className="stat-value">{recipeObj.calories}</span>
          </div>
          <div className="stat-divider"></div>
          <div className="stat-item">
            <span className="stat-label">Servings</span>
            <span className="stat-value">{recipeObj.servings}</span>
          </div>
        </div>

        <div className="recipe-actions">
          <Link to={`/meals/${recipeObj.id}`} className="details-link">
            <button className="button-recipes btn-details">Details</button>
          </Link>
          <button
            onClick={() => onDelete(recipeObj.id)}
            className="button-recipes btn-delete"
          >
            Delete
          </button>
        </div>
      </div>
    </div>
    </div>
  );
}