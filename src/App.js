import { Suspense, lazy, useEffect } from "react";
import ScrollToTop from "./helpers/scroll-top";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import { useDispatch } from "react-redux";
import { getLoginStatus, getUser } from "./helpers/authService";
import { SET_LOGIN, SET_USER } from "./store/auth/auth";
// home page
const HomeFashion = lazy(() => import("./pages/home/HomeFashion"));
// shop page
const ShopGridStandard = lazy(() => import("./pages/shop/ShopGridStandard"));
// product page
const Product = lazy(() => import("./pages/shop-product/Product"));
// other pages
const About = lazy(() => import("./pages/other/About"));
const Contact = lazy(() => import("./pages/other/Contact"));
const MyAccount = lazy(() => import("./pages/other/MyAccount"));
const LoginRegister = lazy(() => import("./pages/other/LoginRegister"));
const Cart = lazy(() => import("./pages/other/Cart"));
const Wishlist = lazy(() => import("./pages/other/Wishlist"));
const Compare = lazy(() => import("./pages/other/Compare"));
const Checkout = lazy(() => import("./pages/other/Checkout"));
const NotFound = lazy(() => import("./pages/other/NotFound"));
const Forgot = lazy(() => import("./pages/other/Forgot"));
const Reset = lazy(() => import("./pages/other/Reset"));

//Credential to be true
axios.defaults.withCredentials = true;

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    async function loginStatus() {
      const status = await getLoginStatus();
      dispatch(SET_LOGIN(status));
      if (status) {
        const data = await getUser();
        await dispatch(SET_USER(data));
      }
    }
    loginStatus();
  }, [dispatch]);

  return (
    <Router>
      <ToastContainer />
      <ScrollToTop>
        <Suspense
          fallback={
            <div className="EliteMart-preloader-wrapper">
              <div className="EliteMart-preloader">
                <span></span>
                <span></span>
              </div>
            </div>
          }
        >
          <Routes>
            <Route path={process.env.PUBLIC_URL + "/"} element={<HomeFashion />} />

            {/* Shop pages */}
            <Route path={process.env.PUBLIC_URL + "/shop-grid-standard"} element={<ShopGridStandard />} />

            {/* Shop product pages */}
            <Route path={process.env.PUBLIC_URL + "/product/:id"} element={<Product />} />

            {/* Other pages */}
            <Route path={process.env.PUBLIC_URL + "/about"} element={<About />} />
            <Route path={process.env.PUBLIC_URL + "/contact"} element={<Contact />} />
            <Route path={process.env.PUBLIC_URL + "/my-account"} element={<MyAccount />} />
            <Route path={process.env.PUBLIC_URL + "/login-register"} element={<LoginRegister />} />

            <Route path={process.env.PUBLIC_URL + "/cart"} element={<Cart />} />
            <Route path={process.env.PUBLIC_URL + "/wishlist"} element={<Wishlist />} />
            <Route path={process.env.PUBLIC_URL + "/compare"} element={<Compare />} />
            <Route path={process.env.PUBLIC_URL + "/checkout"} element={<Checkout />} />
            <Route path={process.env.PUBLIC_URL + "/forgot"} element={<Forgot />} />
            <Route path={process.env.PUBLIC_URL + "/resetpassword/:resetToken"} element={<Reset />} />

            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </ScrollToTop>
    </Router>
  );
};

export default App;
