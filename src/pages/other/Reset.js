import React, { useState } from "react";
import { Link, useParams } from "react-router-dom";
import { toast } from "react-toastify";
import { resetPassword } from "../../helpers/authService";
import Loader from "../../components/loader/Loader";

const initialState = {
  password: "",
  password2: "",
};

const Reset = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const { password, password2 } = formData;
  const { resetToken } = useParams();

  const handleInputChange = (e) => {
    const { value, name } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const reset = async (e) => {
    e.preventDefault();

    //Validations
    if (password.length < 6) {
      return toast.error("Password must be upto 6 characters");
    }

    if (password !== password2) {
      return toast.error("Password don't match!");
    }

    const userData = { password, password2 };
    setIsLoading(true);
    try {
      const data = await resetPassword(userData, resetToken);
      toast.success(data.message);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <div className="Forgot-Background">
      {isLoading && <Loader />}
      <div className="Forgot-Page">
        <div className="Forgot">
          <div className="login-form-container">
            <h2>Reset Password</h2>
            <div className="login-register-form">
              <form onSubmit={reset}>
                <input
                  type="password"
                  placeholder="New Password"
                  required
                  name="password"
                  value={password}
                  onChange={handleInputChange}
                />
                <input
                  type="password"
                  placeholder="Confirm New Password"
                  required
                  name="password2"
                  value={password2}
                  onChange={handleInputChange}
                />

                <div className="button-box">
                  <button type="submit">
                    <span>Reset Password</span>
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

export default Reset;
