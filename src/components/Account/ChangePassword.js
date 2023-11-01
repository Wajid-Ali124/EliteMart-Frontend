import React from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { changePassword } from "../../helpers/authService";
import Loader from "../loader/Loader";

const initialState = {
  oldPassword: "",
  password: "",
  password2: "",
};

const ChangePassword = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState(initialState);
  const { oldPassword, password, password2 } = formData;

  const handleInputChange = (e) => {
    const { value, name } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const ChangePass = async (e) => {
    e.preventDefault();

    if (password !== password2) {
      return toast.error("New Password doesn't match");
    }

    const formData = {
      oldPassword,
      password,
    };
    setIsLoading(true);
    const data = await changePassword(formData);
    if (data) {
      toast.success(data);
    }
    setIsLoading(false);
    setFormData(initialState);
  };

  return (
    <div className="myaccount-info-wrapper">
      {isLoading && <Loader />}
      <div className="account-info-wrapper">
        <h4>Change Password</h4>
      </div>
      <form onSubmit={ChangePass}>
        <div className="row">
          <div className="col-lg-12 col-md-12">
            <div className="billing-info">
              <label>Old Password</label>
              <input
                type="password"
                placeholder="Old Password"
                required
                name="oldPassword"
                value={oldPassword}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="col-lg-12 col-md-12">
            <div className="billing-info">
              <label>New Password</label>
              <input
                type="password"
                placeholder="New Password"
                required
                name="password"
                value={password}
                onChange={handleInputChange}
              />
            </div>
          </div>
          <div className="col-lg-12 col-md-12">
            <div className="billing-info">
              <label>Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm New Password"
                required
                name="password2"
                value={password2}
                onChange={handleInputChange}
              />
            </div>
          </div>
        </div>
        <div className="billing-back-btn">
          <div className="billing-btn">
            <button type="submit">Change Password</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default ChangePassword;
