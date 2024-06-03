import React, { useEffect } from "react";
import NavBarItem from "../NavBar";
import Cookies from "js-cookie";
import { Link, Navigate } from "react-router-dom";
import styled from "styled-components";
import { Button } from "antd";
import { connect } from "react-redux";
import { removeFromCart } from "./store/action";

const Cart = ({ cart, removeFromCart }) => {
  const jwtToken = Cookies.get("jwt_token");
  if (jwtToken === undefined) {
    return <Navigate to="/" />;
  }

  const handleRemoveFromCart = (id) => {
    removeFromCart(id);
  };

  console.log("cart", cart);
  return (
    <div>
      <NavBarItem />
      <Wrapper>
        {cart.length > 0 ? (
          <div style={{ width: "80%", marginTop: "4%", color: "#3e4c59" }}>
            <h1>My Cart</h1>

            {cart.map((item) => (
              <CartWrapper key={item.id}>
                <div style={{ display: "flex" }}>
                  <img src={item.image_url} style={{ height: "100px" }} />
                  <div style={{ marginLeft: "10px" }}>
                    <p>{item.title}</p>
                    <p>By {item.brand}</p>
                  </div>
                </div>
                <div>
                  <h2>Rs {item.price}</h2>
                  <Button
                    type="primary ghost"
                    onClick={() => handleRemoveFromCart(item.id)}
                  >
                    Remove from cart
                  </Button>
                </div>
              </CartWrapper>
            ))}
          </div>
        ) : (
          <div>
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
            </div>
          </div>
        )}
      </Wrapper>
    </div>
  );
};

const CartWrapper = styled.div`
  box-shadow: 1px 1px 16px 1px lightgray;
  padding: 20px;
  border-radius: 4px;
  width: 90%;
  display: flex;
  justify-content: space-between;
  margin-top: 10px;
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
};

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
