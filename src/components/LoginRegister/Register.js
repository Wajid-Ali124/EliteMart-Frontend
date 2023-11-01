import React, { useState } from "react";

import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { registerUser, validateEmail } from "../../helpers/authService";
import { SET_LOGIN, SET_NAME, SET_TOKEN, SET_USER } from "../../store/auth/auth";
import Loader from "../loader/Loader";
import { useNavigate } from "react-router-dom";

const initialState = {
  name: "",
  email: "",
  password: "",
  password2: "",
};

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const { name, email, password, password2 } = formData;

  const handleInputChange = (e) => {
    const { value, name } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const register = async (e) => {
    e.preventDefault();

    //Validations
    if (!email || !name || !password || !password2) {
      return toast.error("All feilds required");
    }

    if (password.length < 6) {
      return toast.error("Password must be upto 6 characters");
    }

    if (validateEmail(email)) {
      return toast.error("Email Already Registered");
    }

    if (password !== password2) {
      return toast.error("Password don't match!");
    }

    const userData = { email, name, password };
    setIsLoading(true);
    try {
      const data = await registerUser(userData);
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
        <form onSubmit={register}>
          <input type="text" placeholder="Name" required name="name" value={name} onChange={handleInputChange} />
          <input type="email" placeholder="Email" required name="email" value={email} onChange={handleInputChange} />
          <input
            type="password"
            placeholder="Password"
            required
            name="password"
            value={password}
            onChange={handleInputChange}
          />
          <input
            type="password"
            placeholder="Confirm Password"
            required
            name="password2"
            value={password2}
            onChange={handleInputChange}
          />

          <div className="button-box">
            <button type="submit">
              <span>Register</span>
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
