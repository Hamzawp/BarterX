import { FiHeart } from "react-icons/fi";
import { AiOutlineShoppingCart, AiOutlineUserAdd } from "react-icons/ai";
import "./Nav.css";

import { Link } from "react-router-dom";
import { FaHeart, FaRegHeart, FaShoppingCart } from "react-icons/fa";

const Nav = ({ handleInputChange, query }) => {
  return (
    <nav className="categNav">
      <div className="nav-container">
        <input
          className="search-input"
          type="text"
          onChange={handleInputChange}
          value={query}
          placeholder="Enter your search shoes."
        />
      </div>
      <div className="profile-container">

        <Link to="/">
          <i><FaRegHeart /></i>
        </Link>
        <Link to="">
          <i><AiOutlineUserAdd /></i>
          {/* <AccountMenu /> */}
        </Link>


      </div>
    </nav>
  );
};

export default Nav;
