import { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnLogin, setBtnLogin] = useState("Login");

  const { loggedInUser } = useContext(UserContext);

  const cartItems = useSelector((store) => store.cart.items);

  return (
    <div className="flex justify-between bg-gray-100 shadow-lg">
      <div className="w-36">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4 hover:font-bold">
            <Link to="/">Home</Link>
          </li>
          <li className="px-4 hover:font-bold">
            <Link to="/about">About Me</Link>
          </li>
          {/* <li className="px-4 hover:font-bold">
            <Link to="/contact">Contact</Link>
          </li>
          <li className="px-4 hover:font-bold">
            <Link to="/grocery">Grocery</Link>
          </li> */}
          <li className="px-4 hover:font-bold">
            <Link to="/cart">Cart ({cartItems.length})</Link>
          </li>
          <li className="px-4">
            Online {useOnlineStatus() === true ? "✅" : "🔴"}
          </li>
          <li className="px-4">{loggedInUser}</li>
        </ul>
      </div>
      {/* <div className="flex px-5 m-6 bg-green-400 rounded-2xl">
        <button
          className="login"
          onClick={() => {
            btnLogin === "Login" ? setBtnLogin("Logout") : setBtnLogin("Login");
          }}
        >
          {btnLogin}
        </button>
      </div> */}
    </div>
  );
};

export default Header;
