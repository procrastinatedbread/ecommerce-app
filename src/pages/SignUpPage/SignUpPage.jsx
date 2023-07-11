import React from "react";
import { NavLink } from "react-router-dom";
import "./SignUpPage.css";
import Navbar from "../../components/RootLayout/Navbar/Navbar";

const SignUpPage = () => {
  const handleSignUp = async (e) => {
    e.preventDefault();
    const credentials = {
      name: e.target.name.value,
      email: e.target.email.value,
      password: e.target.password.value,
    };
    try {
      const res = await fetch("/api/auth/signup", {
        method: "POST",
        body: JSON.stringify(credentials),
      });
      const data = await res.json();
      localStorage.setItem("name", data.createdUser.name);
      localStorage.setItem("token", data.encodedToken);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="login-page-component">
      <Navbar />
      <form onSubmit={handleSignUp}>
        <div className="signup-card">
          <div className="login-card-name-section">
            <label htmlFor="first-name">First Name:</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              placeholder="first name"
            />
            <label htmlFor="last-name">Last Name:</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              placeholder="last name"
            />
          </div>
          <div className="login-card-email-section">
            <label htmlFor="email">Email Address:</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="test@gmail.com"
            />
          </div>
          <div className="login-card-password-section">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              name="password"
              id="password"
              placeholder="********"
            />
          </div>
          <NavLink type="submit" className="login-link">
            Sign up
          </NavLink>
          <NavLink className="sign-up-link" to="/login">
            Already have an account? Let's log in
          </NavLink>
        </div>
      </form>
    </div>
  );
};

export default SignUpPage;
