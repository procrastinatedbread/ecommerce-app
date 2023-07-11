import React, { useContext } from "react";
import { Navigate, useLocation } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";

const RequiresAuth = ({ children }) => {
  const location = useLocation();
  const token = useContext(AuthContext);

  return token ? children : <Navigate to="/login" state={{ from: location }} />;
};

export default RequiresAuth;
