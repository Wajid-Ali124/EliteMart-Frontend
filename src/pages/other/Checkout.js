import { Fragment } from "react";
import { Link, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getDiscountPrice } from "../../helpers/product";
import SEO from "../../components/seo";
import LayoutOne from "../../layouts/LayoutOne";
import Breadcrumb from "../../wrappers/breadcrumb/Breadcrumb";
import Form from "../../components/checkout/Form";
import { deleteAllFromCart } from "../../store/slices/cart-slice";

const Checkout = () => {
  let cartTotalPrice = 0;

  let { pathname } = useLocation();
  const currency = useSelector((state) => state.currency);
  const { cartItems } = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  let items = [];

  const ProductDetail = () => {
    dispatch(deleteAllFromCart());
    console.log(items);
    let total =
      cartTotalPrice > 199
        ? currency.currencySymbol + cartTotalPrice.toFixed(2)
        : currency.currencySymbol + (cartTotalPrice + 50).toFixed(2);
    console.log("Total Price to Pay: " + total);
  };

  return (
    <Fragment>
      <SEO titleTemplate="Checkout" description="Checkout page of EliteMart" />
      <LayoutOne headerTop="visible">
        {/* breadcrumb */}
        <Breadcrumb
          pages={[
            { label: "Home", path: process.env.PUBLIC_URL + "/" },
            { label: "Checkout", path: process.env.PUBLIC_URL + pathname },
          ]}
        />
        <div className="checkout-area pt-95 pb-100">
          <div className="container">
            {cartItems && cartItems.length >= 1 ? (
              <div className="row">
                <Form ProductDetail={ProductDetail} />

                <div className="col-lg-5">
                  <div className="your-order-area">
                    <h3>Your order</h3>
                    <div className="your-order-wrap gray-bg-4">
                      <div className="your-order-product-info">
                        <div className="your-order-top">
                          <ul>
                            <li>Product</li>
                            <li>Total</li>
                          </ul>
                        </div>
                        <div className="your-order-middle">
                          <ul>
                            {cartItems.map((cartItem, key) => {
                              const discountedPrice = getDiscountPrice(cartItem.price, cartItem.discount);
                              const finalProductPrice = (cartItem.price * currency.currencyRate).toFixed(2);
                              const finalDiscountedPrice = (discountedPrice * currency.currencyRate).toFixed(2);
                              items.push(cartItem);

                              discountedPrice != null
                                ? (cartTotalPrice += finalDiscountedPrice * cartItem.quantity)
                                : (cartTotalPrice += finalProductPrice * cartItem.quantity);
                              return (
                                <li key={key}>
                                  <span className="order-middle-left">
                                    {cartItem.name} X {cartItem.quantity}
                                  </span>{" "}
                                  <span className="order-price">
                                    {discountedPrice !== null
                                      ? currency.currencySymbol + (finalDiscountedPrice * cartItem.quantity).toFixed(2)
                                      : currency.currencySymbol + (finalProductPrice * cartItem.quantity).toFixed(2)}
                                  </span>
                                </li>
                              );
                            })}
                          </ul>
                        </div>
                        <div className="your-order-bottom">
                          <ul>
                            <li className="your-order-shipping">Shipping</li>
                            {cartTotalPrice > 199 ? <li>Free shipping</li> : <li>50$</li>}
                          </ul>
                        </div>
                        <div className="your-order-total">
                          <ul>
                            <li className="order-total">Total</li>
                            <li>
                              {cartTotalPrice > 199
                                ? currency.currencySymbol + cartTotalPrice.toFixed(2)
                                : currency.currencySymbol + (cartTotalPrice + 50).toFixed(2)}
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="payment-method"></div>
                    </div>
                  </div>
                </div>
              </div>
            ) : (
              <div className="row">
                <div className="col-lg-12">
                  <div className="item-empty-area text-center">
                    <div className="item-empty-area__icon mb-30">
                      <i className="pe-7s-cash"></i>
                    </div>
                    <div className="item-empty-area__text">
                      No items found in cart to checkout <br />{" "}
                      <Link to={process.env.PUBLIC_URL + "/shop-grid-standard"}>Shop Now</Link>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </LayoutOne>
    </Fragment>
  );
};

export default Checkout;
