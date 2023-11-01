import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";
import MenuCart from "./sub-components/MenuCart";
import HeaderSearch from "./HeaderSearch";
import { ShowOnLogin, ShowOnLogout } from "../../wrappers/Login-Logout/ShowLogin_Logout";
import { logoutUser } from "../../helpers/authService";
import { SET_LOGIN } from "../../store/auth/auth";
import Loader from "../loader/Loader";
import { useState } from "react";

const IconGroup = ({ iconWhiteClass, Search }) => {
  const handleClick = (e) => {
    e.currentTarget.nextSibling.classList.toggle("active");
  };

  const triggerMobileMenu = () => {
    const offcanvasMobileMenu = document.querySelector("#offcanvas-mobile-menu");
    offcanvasMobileMenu.classList.add("active");
  };
  const { compareItems } = useSelector((state) => state.compare);
  const { wishlistItems } = useSelector((state) => state.wishlist);
  const { cartItems } = useSelector((state) => state.cart);

  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(false);

  //Logout
  const logout = async () => {
    setIsLoading(true);
    await logoutUser();
    await dispatch(SET_LOGIN(false));
    setIsLoading(false);
  };

  return (
    <div className={clsx("header-right-wrap", iconWhiteClass)}>
      {isLoading && <Loader />}
      <div className="same-style header-search d-none d-lg-block">
        <button className="search-active" onClick={(e) => handleClick(e)}>
          <i className="pe-7s-search" />
        </button>
        <div className="search-content">
          <HeaderSearch getSearchParams={Search} />
        </div>
      </div>
      <div className="same-style account-setting d-none d-lg-block">
        <button className="account-setting-active" onClick={(e) => handleClick(e)}>
          <i className="pe-7s-user-female" />
        </button>
        <div className="account-dropdown">
          <ul>
            <ShowOnLogout>
              <li>
                <Link to={process.env.PUBLIC_URL + "/login-register"}>Login</Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/login-register"}>Register</Link>
              </li>
            </ShowOnLogout>
            <ShowOnLogin>
              <li>
                <Link to={process.env.PUBLIC_URL + "/my-account"}>my account</Link>
              </li>
              <li>
                <Link to={process.env.PUBLIC_URL + "/"} onClick={logout}>
                  Logout
                </Link>
              </li>
            </ShowOnLogin>
          </ul>
        </div>
      </div>
      <div className="same-style header-compare">
        <Link to={process.env.PUBLIC_URL + "/compare"}>
          <i className="pe-7s-shuffle" />
          <span className="count-style">{compareItems && compareItems.length ? compareItems.length : 0}</span>
        </Link>
      </div>
      <div className="same-style header-wishlist">
        <Link to={process.env.PUBLIC_URL + "/wishlist"}>
          <i className="pe-7s-like" />
          <span className="count-style">{wishlistItems && wishlistItems.length ? wishlistItems.length : 0}</span>
        </Link>
      </div>
      <div className="same-style cart-wrap d-none d-lg-block">
        <button className="icon-cart" onClick={(e) => handleClick(e)}>
          <i className="pe-7s-shopbag" />
          <span className="count-style">{cartItems && cartItems.length ? cartItems.length : 0}</span>
        </button>
        {/* menu cart */}
        <MenuCart />
      </div>
      <div className="same-style cart-wrap d-block d-lg-none">
        <Link className="icon-cart" to={process.env.PUBLIC_URL + "/cart"}>
          <i className="pe-7s-shopbag" />
          <span className="count-style">{cartItems && cartItems.length ? cartItems.length : 0}</span>
        </Link>
      </div>
      <div className="same-style mobile-off-canvas d-block d-lg-none">
        <button className="mobile-aside-button" onClick={() => triggerMobileMenu()}>
          <i className="pe-7s-menu" />
        </button>
      </div>
    </div>
  );
};

IconGroup.propTypes = {
  iconWhiteClass: PropTypes.string,
  Search: PropTypes.any,
};

export default IconGroup;
