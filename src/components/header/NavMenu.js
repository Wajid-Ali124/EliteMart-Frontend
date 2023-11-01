import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import clsx from "clsx";
import Admin from "../../wrappers/Admin/Admin";

const NavMenu = ({ menuWhiteClass, sidebarMenu }) => {
  return (
    <div className={clsx(sidebarMenu ? "sidebar-menu" : `main-menu ${menuWhiteClass ? menuWhiteClass : ""}`)}>
      <nav>
        <ul>
          <li>
            <Link to={process.env.PUBLIC_URL + "/"}>Home</Link>
          </li>
          <li>
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
    </div>
  );
};

NavMenu.propTypes = {
  menuWhiteClass: PropTypes.string,
  sidebarMenu: PropTypes.bool,
};

export default NavMenu;
