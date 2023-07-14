import React, { useContext, useState } from "react";
import { NavLink } from "react-router-dom";
import "./SignUpPage.css";
import Navbar from "../../components/RootLayout/Navbar/Navbar";
import { AuthContext } from "../../context/AuthContext";

const SignUpPage = () => {
  const { signUpHandler } = useContext(AuthContext);
  const [signUpDetails, setSignUpDetails] = useState({});
  const onSubmitHandler = (e) => {
    console.log("signup");
    e.preventDefault();
    signUpHandler(signUpDetails);
  };
  return (
    <div className="login-page-component">
      <Navbar />
      <form onSubmit={onSubmitHandler}>
        <div className="signup-card">
          <div className="login-card-name-section">
            <label htmlFor="first-name">First Name:</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="first name"
              required
              onChange={(e) =>
                setSignUpDetails({
                  ...signUpDetails,
                  firstName: e.target.value,
                })
              }
            />
            <label htmlFor="last-name">Last Name:</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="last name"
              required
              onChange={(e) =>
                setSignUpDetails({ ...signUpDetails, lastName: e.target.value })
              }
            />
          </div>
          <div className="login-card-email-section">
            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="test@gmail.com"
              required
              onChange={(e) =>
                setSignUpDetails({ ...signUpDetails, email: e.target.value })
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
              required
              onChange={(e) =>
                setSignUpDetails({ ...signUpDetails, password: e.target.value })
              }
            />
          </div>
          <button
            type="submit"
            className="login-link"
            required
            onClick={() => signUpHandler(signUpDetails)}
          >
            Sign up
          </button>
          <NavLink className="sign-up-link" to="/login">
            Already have an account? Let's log in
          </NavLink>
        </div>
      </form>
    </div>
  );
};

export default SignUpPage;
