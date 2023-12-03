import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";

const initialState = {
  firstName: "",
  lastName: "",
  company: "",
  streetAddress: "",
  city: "",
  province: "",
  postCode: "",
  phone: "",
  email: "",
  orderNotes: "",
};

const Form = ({ ProductDetail }) => {
  const [purchase, setPurchase] = useState(initialState);
  const { firstName, lastName, company, streetAddress, city, province, postCode, phone, email, orderNotes } = purchase;

  const handleInputChange = (e) => {
    const { value, name } = e.target;
    setPurchase({ ...purchase, [name]: value });
  };

  const placeOrder = (e) => {
    e.preventDefault();
    //Validations
    if (!firstName || !email || !streetAddress || !city || !postCode || !phone) {
      toast.error("Please Fill All required* Feilds");
      return;
    }

    console.log(purchase);
    toast.success("Order Placed SuccessFully");
    setPurchase(initialState);
    ProductDetail();
  };

  return (
    <div className="col-lg-7">
      <form onSubmit={placeOrder}>
        <div className="billing-info-wrap">
          <h3>Billing Details</h3>
          <div className="row">
            <div className="col-lg-6 col-md-6">
              <div className="billing-info mb-20">
                <label>First Name*</label>
                <input type="text" name="firstName" value={firstName} onChange={handleInputChange} />
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="billing-info mb-20">
                <label>Last Name</label>
                <input type="text" name="lastName" value={lastName} onChange={handleInputChange} />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="billing-info mb-20">
                <label>Company Name</label>
                <input type="text" name="company" value={company} onChange={handleInputChange} />
              </div>
            </div>

            <div className="col-lg-12">
              <div className="billing-info mb-20">
                <label>Street Address*</label>
                <input
                  className="billing-address"
                  name="streetAddress"
                  placeholder="House number and street name"
                  value={streetAddress}
                  onChange={handleInputChange}
                  type="text"
                />
              </div>
            </div>
            <div className="col-lg-12">
              <div className="billing-info mb-20">
                <label>Town / City*</label>
                <input type="text" name="city" value={city} onChange={handleInputChange} />
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="billing-info mb-20">
                <label>Province / State*</label>
                <input type="text" name="province" value={province} onChange={handleInputChange} />
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="billing-info mb-20">
                <label>Postcode*</label>
                <input type="text" name="postCode" value={postCode} onChange={handleInputChange} />
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="billing-info mb-20">
                <label>Phone*</label>
                <input type="text" name="phone" value={phone} onChange={handleInputChange} />
              </div>
            </div>
            <div className="col-lg-6 col-md-6">
              <div className="billing-info mb-20">
                <label>Email*</label>
                <input type="email" name="email" value={email} onChange={handleInputChange} />
              </div>
            </div>
          </div>

          <div className="additional-info-wrap">
            <h4>Additional information</h4>
            <div className="additional-info">
              <label>Order notes</label>
              <textarea
                placeholder="Notes about your order, e.g. special notes for delivery. "
                name="orderNotes"
                value={orderNotes}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="your-order-area">
            <div className="place-order mt-25">
              <button className="btn-hover" type="submit">
                Place Order
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Form;
