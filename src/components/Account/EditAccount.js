import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateUser } from "../../helpers/authService";
import { toast } from "react-toastify";
import Loader from "../loader/Loader";

const EditAccount = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const user = useSelector((state) => state.auth.user);

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login-register");
    }
  }, [isLoggedIn, navigate]);

  const initialState = {
    name: user?.name,
    email: user?.email,
    phone: user?.phone,
    bio: user?.bio,
    photo: user?.photo,
  };

  const [profile, setProfile] = useState(initialState);
  const handleInputChange = (e) => {
    const { value, name } = e.target;
    setProfile({ ...profile, [name]: value });
  };

  const saveProfile = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      // Save Profile
      const formData = {
        name: profile.name,
        email: profile.email,
        phone: profile.phone,
        bio: profile.bio,
        photo: profile.photo,
      };
      const data = await updateUser(formData);
      if (data) {
        console.log(data);
        toast.success("User Updated");
      }
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
      toast.error(error.message);
    }
  };

  return (
    <div className="myaccount-info-wrapper">
      {isLoading && <Loader />}
      <div className="account-info-wrapper">
        <h5>Your Personal Details</h5>
      </div>
      <form onSubmit={saveProfile}>
        <div className="row">
          <div className="col-lg-6 col-md-6">
            <div className="billing-info">
              <label>First Name</label>
              <input type="text" name="name" value={profile?.name} onChange={handleInputChange} />
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="billing-info">
              <label>Email Address</label>
              <input type="text" name="email" value={profile?.email} disabled />
              <code>Email cannot be changed.</code>
            </div>
          </div>
          <div className="col-lg-6 col-md-6">
            <div className="billing-info">
              <label>Phone</label>
              <input type="text" name="phone" value={profile?.phone} onChange={handleInputChange} />
            </div>
          </div>
          <div className="col-lg-12 col-md-12">
            <div className="billing-info">
              <label>Address</label>
              <textarea
                name="bio"
                value={profile?.bio}
                onChange={handleInputChange}
                cols="30"
                rows="10"
                style={{ display: "block" }}
              ></textarea>
            </div>
          </div>
        </div>
        <div className="billing-back-btn">
          <div className="billing-btn">
            <button type="submit">Save Changes</button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditAccount;
