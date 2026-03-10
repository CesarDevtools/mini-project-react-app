import "./navbar.css";

function Navbar() {
  return (
    <>
      <div className="navbar-container">
        <h1 className="logo-mymeals">
          <span className="logo-my">My</span>
          <span className="logo-meals">Meals</span>
        </h1>

        <div className="menu">
          <a href="">Home Page</a>
          <a href="">About Page</a>
        </div>
      </div>
    </>
  );
}

export default Navbar;
