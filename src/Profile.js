import React from "react";
import Header from "./Header";
import "./Profile.css";
import { logout, reset } from "../src/features/auth/authSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

function Profile() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(logout());
    dispatch(reset());
    navigate("/");
  };

  return (
    <div>
      <Header />
      <div className="profile_body">
        <h1>Hello {user.lastname}</h1>
      </div>
      <div className="button_div">
        <button className="profile_button" onClick={onLogout}>
          Logout
        </button>
      </div>
    </div>
  );
}

export default Profile;
