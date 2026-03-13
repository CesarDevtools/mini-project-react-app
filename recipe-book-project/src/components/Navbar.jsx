import { Link } from "react-router-dom";
import "./Navbar.css";

function Navbar() {
	return (
		<div className="navbar-container">
			<h1 className="logo-mymeals">
				<span className="logo-my">My</span>
				<span className="logo-meals">Meals</span>
			</h1>

			<div className="menu">
				<Link to={"/"}>
					<p>Home Page</p>
				</Link>
				<Link to={"/about"}>
					{" "}
					<p>About Page</p>
				</Link>
			</div>
		</div>
	);
}

export default Navbar;
