import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/Login";
import NotFound from "./components/NotFound";
import Products from "./components/Products/Products";
import Cart from "./components/Cart";
import ProductDesc from "./components/Products/ProductDesc";
import { ContextProvier } from "./components/context/CartContext";
import CartSuccess from "./components/CartSuccess";

const App = () => {
  return (
    <ContextProvier>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/products/*" element={<Products />} />
          <Route path="/products/:id" element={<ProductDesc />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/cart/purchase-success" element={<CartSuccess />} />
          <Route path="/not-found" element={<NotFound />} />
          <Route path="*" element={<Navigate to="/not-found" replace />} />
        </Routes>
      </BrowserRouter>
    </ContextProvier>
  );
};

export default App;
