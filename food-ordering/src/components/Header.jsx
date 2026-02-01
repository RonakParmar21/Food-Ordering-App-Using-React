import { useState } from "react";
import { LOGO_URL } from "../utils/constants";

const Header = () => {
  const [nameBtn, setNameBtn] = useState("Login");
  return (
    <header className="header">
      <div className="logo-container">
        <img
          src={LOGO_URL}
          alt="Logo"
        />
      </div>

      <nav className="nav-container">
        <ul className="nav-list">
          <li>Home</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Cart</li>
          <li className="cart" onClick={() => {
            nameBtn === "Login" ? setNameBtn("Logout") : setNameBtn("Login");
          }}>{nameBtn}</li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;