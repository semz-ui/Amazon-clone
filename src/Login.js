import { useState, useEffect } from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { login, reset } from "../src/features/auth/authSlice";
import { toast } from "react-toastify";

function Login() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { email, password } = formData;

  const { user, isLoading, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (isError) {
      toast.error(message);
    }
    if (isSuccess) {
      toast.success("Log in successfully");
      navigate("/");
    }
  }, [user, isError, isSuccess, message, dispatch, navigate]);

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = (e) => {
    e.preventDefault();
    const userData = {
      email,
      password,
    };
    dispatch(login(userData));
  };

  return (
    <div>
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
            method="POST"
            data-netlify="true"
            data-netlify-honeypot="bot-field"
            onSubmit={onSubmit}
            style={{
              display: "grid",
              width: "400px",
              height: "170px",
              marginBottom: "20px",
            }}
          >
            <input
              placeholder="Email"
              name="email"
              id="email"
              value={email}
              onChange={onChange}
              style={{
                borderRadius: "50px",
                marginBottom: "20px",
                border: "none",
                paddingLeft: "20px",
              }}
            />
            <input
              placeholder="password"
              name="password"
              id="password"
              type="password"
              value={password}
              onChange={onChange}
              style={{
                borderRadius: "50px",
                marginBottom: "20px",
                border: "none",
                paddingLeft: "20px",
              }}
            />
            <input
              // placeholder="password"
              type="submit"
              className="basket"
              style={{
                borderRadius: "50px",
                marginBottom: "20px",
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
