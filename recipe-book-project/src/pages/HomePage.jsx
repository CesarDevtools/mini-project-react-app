import "./HomePage.css";
import { Meal } from "../components/Meal";
import { Form } from "../components/Form";

function HomePage(props) {
	return (
		<>
			<Form onCreate={props.onCreate} />
			<div className="recipeList-container">
				{props.recipesArr.map((recipeObj) => {
					return (
						<Meal
							key={recipeObj.id}
							recipeObj={recipeObj}
							onDelete={props.onDelete}
						/>
					);
				})}
			</div>
		</>
	);
}

export default HomePage;
