import "./HomePage.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { MealsList } from "../components/MealsList";

function HomePage() {
	return (
		<>
			<Navbar />
			<MealsList />
			<Footer />
		</>
	);
}

export default HomePage;
