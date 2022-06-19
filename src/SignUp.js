import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import "./Login.css";
import { toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { register, reset } from "../src/features/auth/authSlice";
import Spinner from "./Spinner";

function SignUp() {
  const [formData, setFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    password2: "",
  });

  const { firstname, lastname, email, password, password2 } = formData;

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { user, isLoading, isSuccess, isError, message } = useSelector(
    (state) => state.auth
  );

  useEffect(
    () => async () => {
      if (isError) {
        toast.error(message);
      }
      if (isSuccess || user) {
        toast.success("Registration Successful");
        navigate("/");
      }

      dispatch(reset());
    },
    [user, isError, message, isSuccess, dispatch, navigate]
  );

  function onChange(e) {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  }

  const onSubmit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      toast.error("Password do not match");
    } else {
      const userData = {
        firstname,
        lastname,
        email,
        password,
      };
      dispatch(register(userData));
    }
  };
  if (isLoading) {
    return <Spinner />;
  }

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
            <h1>Register</h1>
          </div>
          <form
            onSubmit={onSubmit}
            style={{
              display: "grid",
              width: "400px",
              height: "400px",
              marginBottom: "20px",
            }}
          >
            <input
              placeholder="FirstName"
              id="firstname"
              name="firstname"
              value={firstname}
              onChange={onChange}
              style={{
                borderRadius: "50px",
                marginBottom: "20px",
                border: "none",
                paddingLeft: "20px",
              }}
            />
            <input
              placeholder="LastName"
              id="lastname"
              name="lastname"
              value={lastname}
              onChange={onChange}
              style={{
                borderRadius: "50px",
                marginBottom: "20px",
                border: "none",
                paddingLeft: "20px",
              }}
            />
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
              placeholder="Password"
              id="password"
              name="password"
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
              placeholder="Confirm your password"
              id="password2"
              name="password2"
              value={password2}
              type="password"
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
            <Link to="/login">
              <button className="basket">Login</button>
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

export default SignUp;
