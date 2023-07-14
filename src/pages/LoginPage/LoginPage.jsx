import React, { useContext, useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import Navbar from "../../components/RootLayout/Navbar/Navbar";
import "./LoginPage.css";
import { makeServer } from "../../server";
import { AuthContext } from "../../context/AuthContext";

const LoginPage = () => {
  // const navigate = useNavigate();

  const { loginHandler, token } = useContext(AuthContext);
  const [loginDetails, setLoginDetails] = useState({ email: "", password: "" });
  const fixedLoginDetails = {
    email: "adarshbalika@gmail.com",
    password: "adarshbalika",
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();
    loginHandler(loginDetails);
  };
  const onTestLogin = () => {
    setLoginDetails({
      email: fixedLoginDetails.email,
      password: fixedLoginDetails.password,
    });
  };

  // useEffect(() => {
  //   if (token) {
  //     navigate("/products");
  //   }
  // }, [token]);

  return (
    <div className="login-page-component">
      <Navbar />

      <form onSubmit={onSubmitHandler}>
        <div className="login-card">
          <div className="login-card-email-section">
            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="test@gmail.com"
              value={loginDetails.email}
              onChange={(e) =>
                setLoginDetails({ ...loginDetails, email: e.target.value })
              }
            />
          </div>
          <div className="login-card-password-section">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="********"
              value={loginDetails.password}
              onChange={(e) =>
                setLoginDetails({ ...loginDetails, password: e.target.value })
              }
            />
          </div>
          <button type="submit" required className="login-link">
            Login
          </button>
          <button
            type="submit"
            required
            onClick={onTestLogin}
            className="login-link"
          >
            Login as guest
          </button>
          <NavLink className="sign-up-link" to="/signup">
            Do not have an account? Let's sign up {">"}
          </NavLink>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;
