import { useState } from "react"
import { assets } from "../../assets/asset"
import "./Navbar.css"
function Navbar() {
  const[menu,setMenu] = useState("Home")
  return (
    <div className="navbar">
      <img src={assets.logo} alt="" className="logo" />
      <ul className="navbar-menu">
        <li onClick={() =>setMenu("Home") } className={menu==="Home" ? "active" :""}>Home</li>
        <li onClick={() =>setMenu("Menu") } className={menu==="Menu" ? "active" :""}>Menu</li>
        <li onClick={() =>setMenu("Mobile App") } className={menu==="Mobile App" ? "active" :""}>Mobile App</li>
        <li onClick={() =>setMenu("Contact") } className={menu==="Contact" ? "active" :""}>Contact</li>
      </ul>
      <div className="navbar-right">
        <div className="basket-icon">
          <img src={assets.basket} alt="" className="basket-img"/>
          <div className="dot"></div>
        </div>
        <button>Sign in</button>
      </div>
    </div>
  )
}

export default Navbar


