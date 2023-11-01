import { Link } from "react-router-dom";
import Admin from "../../../wrappers/Admin/Admin";

const MobileNavMenu = () => {
  return (
    <nav className="offcanvas-navigation" id="offcanvas-navigation">
      <ul>
        <li className="menu-item-has-children">
          <Link to={process.env.PUBLIC_URL + "/"}>Home</Link>
        </li>

        <li className="menu-item-has-children">
          <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>Shop</Link>
        </li>

        <li>
          <Link to={process.env.PUBLIC_URL + "/about"}>About US</Link>
        </li>

        <li>
          <Link to={process.env.PUBLIC_URL + "/contact"}>Contact US</Link>
        </li>

        <Admin>
          <li>
            <Link to={process.env.PUBLIC_URL + "/"}>Admin Panel</Link>
          </li>
        </Admin>
      </ul>
    </nav>
  );
};

export default MobileNavMenu;
