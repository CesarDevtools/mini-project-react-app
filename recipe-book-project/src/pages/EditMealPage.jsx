import { useParams } from "react-router-dom";
import "./EditMealPage.css";

function EditMealPage(props) {
	const { mealId } = useParams();
	console.log(props);

	const meal = props.recipesArr.find((mealObj) => {
		return mealObj.id === mealId;
	});
	console.log(meal);

	return <div></div>;
}

export default EditMealPage;
