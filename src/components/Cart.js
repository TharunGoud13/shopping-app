import React from "react";
import NavBarItem from "../NavBar";
import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";

const Cart = () => {
  const jwtToken = Cookies.get("jwt_token");
  if (jwtToken === undefined) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <NavBarItem />
      Cart
    </div>
  );
};

export default Cart;
