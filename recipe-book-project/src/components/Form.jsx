import { useState } from "react";
import "./Form.css";

export function Form(props) {
	const [name, setname] = useState("");
	const [calories, setcalories] = useState("");
	const [image, setimage] = useState("");
	const [servings, setservings] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		const newMeal = {
			name: name,
			calories: calories,
			image: image,
			servings: servings,
		};

		props.onCreate(newMeal);
	};

	return (
		<div className="form-container">
			<h1>this is Form</h1>
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
