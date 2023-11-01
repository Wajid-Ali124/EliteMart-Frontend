import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { loginUser, validateEmail } from "../../helpers/authService";
import { SET_LOGIN, SET_NAME, SET_TOKEN, SET_USER } from "../../store/auth/auth";
import { toast } from "react-toastify";
import Loader from "../loader/Loader";

const initialState = {
  email: "",
  password: "",
};

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const { email, password } = formData;

  const handleInputChange = (e) => {
    const { value, name } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const login = async (e) => {
    e.preventDefault();

    //Validations
    if (!email || !password) {
      return toast.error("All feilds required");
    }

    if (validateEmail(email)) {
      return toast.error("Please Enter a Valid Email");
    }

    const userData = { email, password };
    setIsLoading(true);
    try {
      const data = await loginUser(userData);
      console.log(data);
      if (data) {
        await dispatch(SET_LOGIN(true));
        await dispatch(SET_NAME(data.name));
        await dispatch(SET_TOKEN(data.token));
        await dispatch(SET_USER(data));
      }
      navigate("/my-account");
      setIsLoading(false);
    } catch (error) {
      setIsLoading(false);
      console.log(error.message);
    }
  };

  return (
    <div className="login-form-container">
      {isLoading && <Loader />}
      <div className="login-register-form">
        <form onSubmit={login}>
          <input type="email" placeholder="Email" required name="email" value={email} onChange={handleInputChange} />
          <input
            type="password"
            placeholder="Password"
            required
            name="password"
            value={password}
            onChange={handleInputChange}
          />
          <div className="button-box">
            <div className="login-toggle-btn">
              <Link to={process.env.PUBLIC_URL + "/forgot"}>Forgot Password?</Link>
            </div>
            <button type="submit">
              <span>Login</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
