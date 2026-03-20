import { v4 as uuidv4 } from "uuid";

import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import recipes from "./data/recipes.json";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/HomePage";
import MealDetails from "./pages/MealDetails";
import AboutPage from "./pages/aboutPage";

function App() {
	const [recipesList, setrecipesList] = useState(recipes);

	const createMeal = (newMealDetails) => {
		const id = uuidv4();

		const newMeal = { ...newMealDetails, id };
		const newList = [newMeal, ...recipesList];

		setrecipesList(newList);	
	};

	const editMeal = (editMealDetails) => {
		const filteredList = recipesList.filter((meal) => {
			return meal.id !== editMealDetails.id;
		});

		const newList = [editMealDetails, ...filteredList];

		setrecipesList(newList);
	};

	const deleteRecipe = (ObjId) => {
		const newList = recipesList.filter((element) => {
			return element.id !== ObjId;
		});

		setrecipesList(newList);
	};

	return (
		<>
			<Navbar />

			<Routes>
				<Route
					path="/"
					element={
						<HomePage
							onDelete={deleteRecipe}
							recipesArr={recipesList}
							onCreate={createMeal}
						/>
					}
				/>
				<Route path="/about" element={<AboutPage />} />
				<Route
					path="/meals/:mealId"
					element={<MealDetails recipesArr={recipesList} onEdit={editMeal} />}
				/>
				<Route path="*" element={<NotFoundPage />} />
			</Routes>

			<Footer />
		</>
	);
}

export default App;
