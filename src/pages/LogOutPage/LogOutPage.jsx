import React, { useContext } from "react";
import Navbar from "../../components/RootLayout/Navbar/Navbar";
import { AuthContext } from "../../context/AuthContext";
import "./LogOutPage.css";

const LogOutPage = () => {
  const { logOutHandler } = useContext(AuthContext);
  return (
    <>
      <Navbar />
      <div className="logout-container">
        <h2>Hey there, you are already logged in.</h2>
        <button className="logout-btn" onClick={logOutHandler}>
          Log out
        </button>
      </div>
    </>
  );
};

export default LogOutPage;
