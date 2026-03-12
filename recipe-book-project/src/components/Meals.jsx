
import "./Meals.css";

export function Meals({recipeObj, onDelete}) {
	

	return (
		
					<div key={recipeObj.id} className="recipe-container">
						<h3>{recipeObj.name}</h3>
						<img src={recipeObj.image} alt="image recipe" />
						<p>
							Calories: {recipeObj.calories} Servings: {recipeObj.servings}
						</p>
						{recipeObj.calories < 250 ? (
							<p>Low Calories</p>
						) : (
							<p>High Calories</p>
						)}

						<button
							onClick={() => {
								onDelete(recipeObj.id);
							}}
							className="button-recipes"
						>
							Delete
						</button>

						<button className="button-recipes">
							Details
						</button>
					</div>
				
			
	);
}
