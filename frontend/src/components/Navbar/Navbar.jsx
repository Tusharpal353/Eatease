import { useState } from "react";
import { assets } from "../../assets/asset";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const [menu, setMenu] = useState("Home");
  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.reload();
  };

  const navigate = useNavigate();
  const navigateToAdminPage = () => {
    navigate("/admin");
  };
  return (
    <div className="navbar">
      <img src={assets.logo} alt="" className="logo" />
      <ul className="navbar-menu">
        <li
          onClick={() => setMenu("Home")}
          className={menu === "Home" ? "active" : ""}
        >
          <Link to="/">Home</Link>
        </li>
        <li
          onClick={() => setMenu("Menu")}
          className={menu === "Menu" ? "active" : ""}
        >
          <a href="#explore-menu">Menu</a>
        </li>
        <li
          onClick={() => setMenu("Mobile App")}
          className={menu === "Mobile App" ? "active" : ""}
        >
          <a href="#app-download">Mobile-App</a>
        </li>
        <li
          onClick={() => setMenu("Contact")}
          className={menu === "Contact" ? "active" : ""}
        >
          <a href="#footer">Contact</a>
        </li>
      </ul>
      <div className="navbar-right">
        <div className="basket-icon">
          <div>
            <button className="box" onClick={handleLogout}>
              Log Out
            </button>
          </div>
        </div>
        <div>
          {<button className="box" onClick={navigateToAdminPage}>
            Admin Page
          </button>}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
