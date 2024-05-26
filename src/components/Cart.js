import React, { useEffect } from "react";
import NavBarItem from "../NavBar";
import Cookies from "js-cookie";
import { Link, Navigate } from "react-router-dom";
import styled from "styled-components";
import { Button } from "antd";
import { ToastContainer, toast } from "react-toastify";

const Cart = () => {
  useEffect(() => {
    toast("Cart items.....Coming Soon!!!", {
      style: { backgroundColor: "black", color: "white" },
    });
  }, []);
  const jwtToken = Cookies.get("jwt_token");
  if (jwtToken === undefined) {
    return <Navigate to="/" />;
  }
  return (
    <div>
      <NavBarItem />
      <Wrapper>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-empty-cart-img.png"
            alt="empty-cart"
          />
        </div>
        <div>
          <H1>Your Cart Is Empty</H1>
          <Link to="/products">
            <Button type="primary">Shop Now</Button>
          </Link>
          <ToastContainer />
        </div>
      </Wrapper>
    </div>
  );
};

const H1 = styled.h1`
  color: #1e293b;
  font-family: "Roboto";
  font-size: 30px;
  font-weight: 600;
`;

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 30px;

  @media (max-width: 768px) {
    flex-direction: column;
    margin: 20px;
    text-align: center;

    img {
      height: 300px;
    }
  }
`;

export default Cart;
