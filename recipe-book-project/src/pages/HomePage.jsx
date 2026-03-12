import "./HomePage.css";
import { MealsList } from "../components/MealsList";

function HomePage(props) {
	return (
		
		<div className="recipeList-container">
			{props.recipesArr.map((recipeObj) => {
				return (
			<MealsList recipeObj={recipeObj} onDelete={props.onDelete}/>	
			);
		})}
		</div>
	);
}

export default HomePage;
