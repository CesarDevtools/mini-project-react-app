import { useParams, Link } from "react-router-dom";
import "./MealDetails.css";

function MealDetails(props) {
    const { mealId } = useParams();

    const recipeObj = props.recipesArr.find((mealObj) => {
        return mealObj.id === mealId;
    });

    if (!recipeObj) {
        return (
            <div className="details-page-wrapper">
                <div className="error-card">
                    <h1>Recipe not found</h1>
                    <p>We couldn't find the recipe you're looking for.</p>
                    <Link to="/">
                        <button className="button-recipes">Back to Home</button>
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="details-page-wrapper">
            <div className="meal-details-card">
                <div className="meal-image-section">
                    <img src={recipeObj.image} alt={recipeObj.name} />
                </div>
                
                <div className="meal-content-section">
                    <h1>{recipeObj.name}</h1>
                    
                    <div className="meal-stats-container">
                        <div className="stat-box">
                            <span className="stat-value">{recipeObj.calories}</span>
                            <span className="stat-label">Calories</span>
                        </div>
                        <div className="stat-box">
                            <span className="stat-value">{recipeObj.servings}</span>
                            <span className="stat-label">Servings</span>
                        </div>
                    </div>

                    <p className="meal-description">
                        This delicious {recipeObj.name.toLowerCase()} recipe is a perfect choice for your next meal. 
                        It contains {recipeObj.calories} calories per serving and yields {recipeObj.servings} portion(s).
                        Enjoy a balanced and flavorful dish that is easy to prepare and share.
                    </p>

                    <div className="action-buttons">
                        <Link to="/">
                            <button className="button-recipes">← Back to Recipes</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MealDetails;