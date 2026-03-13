import { useParams } from "react-router-dom";

function MealDetails(props) {
	const { mealId } = useParams();

	const recipeObj = props.recipesArr.find((mealObj) => {
		return mealObj.id === mealId;
	});

	console.log(recipeObj);

	return <div></div>;
}

export default MealDetails;
