import { Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import NotFoundPage from "./pages/NotFoundPage";
import HomePage from "./pages/HomePage";
import MealDetails from "./pages/MealDetails";

function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<HomePage />} />
		<Route path="*" element={<NotFoundPage />} />
		<Route path="/meals/:mealId" element={<MealDetails />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
