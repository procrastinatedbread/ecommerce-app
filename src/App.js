import "./App.css";

import Home from "./pages/Home/Home.jsx";
import { Routes, Route } from "react-router-dom";
import Cart from "./pages/Cart/Cart";
import Wishlist from "./pages/Wishlist/Wishlist";
import LoginPage from "./pages/LoginPage/LoginPage";
import ErrorPage from "./pages/Error";
import ProductPage from "./pages/ProductPage/ProductPage";
import SingleProductPage from "./components/UI/SingleProductPage/SingleProductPage";
import PlaceOrderPage from "./components/UI/PlaceOrderPage/PlaceOrderPage";
import OrderAddress from "./components/UI/OrderAddress/OrderAddress";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import RequiresAuth from "./components/RootLayout/RequiresAuth";
import { useContext, useEffect } from "react";
import AuthProvider, { AuthContext } from "./context/AuthContext";
import LogOutPage from "./pages/LogOutPage/LogOutPage";
import CheckoutDetails from "./components/UI/CheckoutDetails/CheckoutDetails";
import OrderSuccess from "./components/UI/OrderSuccess";
import Address from "./components/UI/Address/Address";

function App() {
  const { checkUserStatus } = useContext(AuthContext);
  useEffect(() => {
    checkUserStatus();
  }, []);
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/cart"
          element={
            <RequiresAuth>
              <Cart />
            </RequiresAuth>
          }
        />
        <Route
          path="/wishlist"
          element={
            <RequiresAuth>
              <Wishlist />
            </RequiresAuth>
          }
        />
        <Route path="/product/:productId" element={<SingleProductPage />} />

        <Route path="/login" element={<LoginPage />} />
        <Route path="/logout" element={<LogOutPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/products" element={<ProductPage />} />
        <Route path="/address" element={<Address />} />
        <Route path="/order" element={<OrderSuccess />} />

        <Route path="/*" element={<ErrorPage />} />
      </Routes>
      {/* <SingleProductPage /> */}
      {/* <PlaceOrderPage /> */}
      {/* <OrderAddress /> */}
    </div>
  );
}

export default App;
