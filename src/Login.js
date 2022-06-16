import React from "react";
import "./Login.css";
import Header from "./Header";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div>
      {/* <Header /> */}
      <div className="login">
        <div className="login1">
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <h1>Login</h1>
          </div>
          <form
            style={{
              display: "grid",
              width: "400px",
              height: "100px",
            }}
          >
            <input
              placeholder="Email"
              type="password"
              style={{
                borderRadius: "50px",
                marginBottom: "10px",
                border: "none",
                paddingLeft: "20px",
              }}
            />
            <input
              placeholder="password"
              type="password"
              style={{
                borderRadius: "50px",
                marginBottom: "10px",
                border: "none",
                paddingLeft: "20px",
              }}
            />
          </form>
          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <Link to="/signup">
              <button className="basket">Register</button>
            </Link>
            <Link to="/">
              <button className="basket">Forgot password</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
