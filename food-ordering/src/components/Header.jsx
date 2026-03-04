import { useContext, useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [nameBtn, setNameBtn] = useState("Login");
  const onlineStatus = useOnlineStatus();

  const {loggedInUser} = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);
  console.log(cartItems);
  return (
    <header className="flex">
      <div className="w-40">
        <img
          src={LOGO_URL}
          alt="Logo"
        />
      </div>

      <nav className="">
        <ul className="">
          <li>{onlineStatus ? "✅" : "🚫"}</li>
          <li><Link to={"/"}>Home</Link></li>
          <li><Link to="/about">About Us</Link></li>
          <li><Link to="/grocery">Grocery</Link></li>
          <li>Contact Us</li>
          <li className="px-4 font-bold text-xl"><Link to="/cart">Cart ({cartItems.length} Items)</Link></li>
          <li className="" onClick={() => {
            nameBtn === "Login" ? setNameBtn("Logout") : setNameBtn("Login");
          }}>{nameBtn}</li>
          <li>{loggedInUser}</li>
        </ul>
      </nav>
    </header>
    // <header className="header">
    //   <div className="logo-container">
    //     <img
    //       src={LOGO_URL}
    //       alt="Logo"
    //     />
    //   </div>

    //   <nav className="nav-container">
    //     <ul className="nav-list">
    //       <li>{onlineStatus ? "✅" : "🚫"}</li>
    //       <li><Link to={"/"}>Home</Link></li>
    //       <li><Link to="/about">About Us</Link></li>
    //       <li><Link to="/grocery">Grocery</Link></li>
    //       <li>Contact Us</li>
    //       <li>Cart</li>
    //       <li className="cart" onClick={() => {
    //         nameBtn === "Login" ? setNameBtn("Logout") : setNameBtn("Login");
    //       }}>{nameBtn}</li>
    //     </ul>
    //   </nav>
    // </header>
  );
};

export default Header;