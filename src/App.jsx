import React from "react";
import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home/Home";
import ProductDetails from "./pages/ProductDetails/ProductDetails";
import Cart from "./pages/Cart/Cart";
import Login from "./pages/Login/Login";
import Register from "./pages/Register/Register";
import Checkout from "./pages/Checkout/Checkout";
import NotFound from "./pages/NotFound/NotFound";

// Protected Route
import ProtectedRoute from "./components/ProtectedRoute/ProtectedRoute";

function App() {
  return (
    <Routes>
      {/* Home */}
      <Route path="/" element={<Home />} />

      {/* Product Details */}
      <Route
        path="/product/:id"
        element={<ProductDetails />}
      />

      {/* Shopping Cart */}
      <Route
        path="/cart"
        element={<Cart />}
      />

      {/* Authentication */}
      <Route
        path="/login"
        element={<Login />}
      />

      <Route
        path="/register"
        element={<Register />}
      />

      {/* Protected Checkout */}
      <Route element={<ProtectedRoute />}>
        <Route
          path="/checkout"
          element={<Checkout />}
        />
      </Route>

      {/* 404 */}
      <Route
        path="*"
        element={<NotFound />}
      />
    </Routes>
  );
}

export default App;