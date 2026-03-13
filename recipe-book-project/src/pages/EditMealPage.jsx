import { useParams } from "react-router-dom";
import { useState } from "react";
import "./EditMealPage.css";

function EditMealPage(props) {
	const { mealId } = useParams();

	const currentMeal = props.recipesArr.find((mealObj) => {
		return mealObj.id === mealId;
	});

	const [name, setname] = useState(currentMeal.name);
	const [calories, setcalories] = useState(currentMeal.calories);
	const [image, setimage] = useState(currentMeal.image);
	const [servings, setservings] = useState(currentMeal.servings);

	const handleSubmit = (e) => {
		e.preventDefault();

		const newMeal = {
			id: currentMeal.id,
			name: name,
			calories: calories,
			image: image,
			servings: servings,
		};

		props.onEdit(newMeal);
	};

	return (
		<div className="form-container">
			<form onSubmit={handleSubmit}>
				<label>
					{" "}
					Name:
					<input
						type="text"
						name="name"
						value={name}
						onChange={(e) => {
							setname(e.target.value);
						}}
						placeholder="enter the name"
					/>
				</label>
				<label>
					{" "}
					Calories:
					<input
						type="number"
						value={calories}
						onChange={(e) => {
							setcalories(e.target.value);
						}}
						name="calories"
						placeholder="calories"
					/>
				</label>
				<label>
					{" "}
					Image:
					<input
						type="url"
						name="image"
						value={image}
						onChange={(e) => {
							setimage(e.target.value);
						}}
						placeholder="image"
					/>
				</label>
				<label>
					{" "}
					Servings:
					<input
						type="number"
						name="servings"
						value={servings}
						onChange={(e) => {
							setservings(e.target.value);
						}}
						placeholder="number of servings"
					/>
				</label>
				<button>Create Meal</button>
			</form>
		</div>
	);
}

export default EditMealPage;
