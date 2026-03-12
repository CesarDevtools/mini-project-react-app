import "./HomePage.css";
import { Meals } from "../components/Meals";

function HomePage(props) {
	return (
		
		<div className="recipeList-container">
			{props.recipesArr.map((recipeObj) => {
				return (
			<Meals recipeObj={recipeObj} onDelete={props.onDelete}/>	
			);
		})}
		</div>
	);
}

export default HomePage;
