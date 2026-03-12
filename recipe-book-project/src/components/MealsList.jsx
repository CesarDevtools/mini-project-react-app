import { useState } from "react";
import recipes from "../data/recipes.json";
import "./MealsList.css";

export function MealsList() {
	const [recipesList, setrecipesList] = useState(recipes);

	const deleteRecipe = (ObjId) => {
		const newList = recipesList.filter((element) => {
			return element.id !== ObjId;
		});

		setrecipesList(newList);
	};

	return (
		<div className="recipeList-container">
			{recipesList.map((recipeObj) => {
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
								deleteRecipe(recipeObj.id);
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
			})}
		</div>
	);
}
