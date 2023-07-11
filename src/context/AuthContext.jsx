import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [token, setToken] = useState("");

  const loginHandler = async ({ email, password }) => {
    try {
      const credentials = {
        email,
        password,
      };
      const res = await fetch("/api/auth/login", {
        method: "POST",
        body: JSON.stringify(credentials),
      });
      if (res.status === 200) {
        const data = await res.json();
        setToken(data.encodedToken);
        localStorage.setItem("token", data.encodedToken);
        localStorage.setItem("email", data.foundUser.email);
        localStorage.setItem("password", data.foundUser.password);
        navigate("/products");
      }
    } catch (e) {
      console.error(e);
    }
  };
  const logOutHandler = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };
  const checkUserStatus = () => {
    const encodedToken = localStorage.getItem("token", token);
    if (encodedToken) {
      setToken(encodedToken);
    }
  };
  const signUpHandler = async ({ email, password, firstName, lastName }) => {
    try {
      const res = await fetch("api/auth/signup", {
        method: "POST",
        body: JSON.stringify({
          email,
          password,
          firstName,
          lastName,
        }),
      });
      if (res.status === 201) {
        const data = await res.json();
        setToken(data.encodedToken);
        navigate("/login");
      }
    } catch (e) {
      console.error(e);
    }
  };
  const isLoggedIn = token.length !== 0;
  return (
    <AuthContext.Provider
      value={{
        signUpHandler,
        loginHandler,
        token,
        logOutHandler,
        checkUserStatus,
        isLoggedIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
export default AuthProvider;
