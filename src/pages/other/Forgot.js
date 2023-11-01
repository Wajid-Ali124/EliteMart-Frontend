import React, { useState } from "react";
import { toast } from "react-toastify";
import { forgotPassword, validateEmail } from "../../helpers/authService";
import { Link } from "react-router-dom";
import Loader from "../../components/loader/Loader";

const Forgot = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [email, setEmail] = useState("");

  const forgot = async (e) => {
    e.preventDefault();

    //Validations
    if (!email) {
      return toast.error("Please Enter an Email");
    }

    if (validateEmail(email)) {
      return toast.error("Please Enter a Valid Email");
    }

    const userData = { email };
    setIsLoading(true);
    await forgotPassword(userData);
    setEmail("");
    setIsLoading(false);
  };

  return (
    <div className="Forgot-Background">
      {isLoading && <Loader />}
      <div className="Forgot-Page">
        <div className="Forgot">
          <div className="login-form-container">
            <h2>Forgot Password</h2>
            <div className="login-register-form">
              <form onSubmit={forgot}>
                <input
                  type="text"
                  placeholder="Email"
                  required
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <div className="button-box">
                  <button type="submit">
                    <span>Get Reset Email</span>
                  </button>
                  <div className="login-toggle-btn">
                    <Link to={process.env.PUBLIC_URL + "/"}>Go to Home Page</Link>
                  </div>
                  <div className="login-toggle-btn">
                    <Link to={process.env.PUBLIC_URL + "/login-register"}>Go to login</Link>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Forgot;
