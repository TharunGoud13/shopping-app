import React, { useEffect } from "react";
import NavBarItem from "../NavBar";
import Cookies from "js-cookie";
import { Link, Navigate } from "react-router-dom";
import styled from "styled-components";
import { Button } from "antd";
import { ToastContainer, toast } from "react-toastify";
import { connect } from "react-redux";
import {
  decrementQuantity,
  incrementQuantity,
  removeFromCart,
} from "./store/action";

const Cart = ({
  cart,
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
}) => {
  const jwtToken = Cookies.get("jwt_token");
  if (jwtToken === undefined) {
    return <Navigate to="/" />;
  }

  const handleIncrement = (productId) => {
    incrementQuantity(productId);
  };

  const handleDecrement = (productId) => {
    decrementQuantity(productId);
  };

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  const totalBalance = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  console.log("cart", cart);
  return (
    <div>
      <NavBarItem />
      {cart.length === 0 ? (
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
      ) : (
        <CartItems>
          <div>
            <H1>Your Cart Items</H1>
            {cart.map((item) => (
              <CartItem key={item.id}>
                <div>
                  <p>{item.title}</p>
                  <p>{item.price}</p>
                  <img src={item.image_url} alt={item.title} height="100" />
                  <div>
                    <Button onClick={() => handleDecrement(item.id)}>-</Button>
                    <span>{item.quantity}</span>
                    <Button onClick={() => handleIncrement(item.id)}>+</Button>
                  </div>
                </div>
                <Button
                  type="danger"
                  onClick={() => handleRemoveFromCart(item.id)}
                >
                  Remove from Cart
                </Button>
              </CartItem>
            ))}
            <TotalBalance>Total Balance: Rs {totalBalance}</TotalBalance>
          </div>
        </CartItems>
      )}
    </div>
  );
};

const CartItem = styled.div`
  box-shadow: 1px 1px 1px 1px solid;
  height: 100px;
  margin-top: 50px;
`;
const TotalBalance = styled.div`
  font-size: 20px;
  font-weight: bold;
  margin-top: 20px;
`;

const CartItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
`;

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

const mapStateToProps = (state) => ({
  cart: state.cart,
});

const mapDispatchToProps = {
  removeFromCart,
  incrementQuantity,
  decrementQuantity,
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
