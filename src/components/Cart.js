import React, { useContext, useEffect, useState } from "react";
import NavBarItem from "../NavBar";
import Cookies from "js-cookie";
import { Link, Navigate } from "react-router-dom";
import styled from "styled-components";
import { Button } from "antd";
import { CartContext } from "./context/CartContext";
import { CloseCircleOutlined } from "@ant-design/icons";

const Cart = () => {
  const { cart, removeFromCart } = useContext(CartContext);
  const [showNow, setShowNow] = useState(false);
  console.log(cart);

  useEffect(() => {
    if (cart && cart.length > 0) {
      setShowNow(true);
    }
  }, [cart]);
  const jwtToken = Cookies.get("jwt_token");
  if (jwtToken === undefined) {
    return <Navigate to="/" />;
  }

  const handleRemoveItem = (id) => {
    removeFromCart(id);
  };

  return (
    <div>
      <NavBarItem />
      <Wrapper>
        <div className="flex flex-col w-full h-full">
          {cart && cart.length > 0 ? (
            <div className="flex flex-col justify-center mt-[30px] items-center">
              {cart.map((item, index) => (
                <div
                  key={index}
                  className="flex shadow-xl my-4 p-2.5  w-full md:w-[80%] md:justify-between"
                >
                  <div className="flex gap-2.5">
                    <div className="flex gap-2.5">
                      <img
                        src={item.image_url}
                        className="h-[100px] rounded"
                        alt={item.name}
                      />
                      <div className="flex flex-col">
                        <p className="font-bold text-[15px] md:text-[18px]">
                          {item.title}
                        </p>
                        <p className="text-[10px] md:text-[15px] text-gray-500">
                          by {item.brand}
                        </p>
                        <p className="md:hidden text-[#1a73e8] font-bold mt-[20px]">
                          Rs {item.price}
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-4 items-center">
                    <h1 className="text-[#1a73e8] hidden md:block text-xl font-bold">
                      Rs {item.price} /-
                    </h1>
                    <CloseCircleOutlined
                      onClick={() => handleRemoveItem(item.id)}
                      className="cursor-pointer"
                    />
                  </div>
                </div>
              ))}
              <div className="w-full flex justify-end mt-2.5 md:mr-[20%]">
                {showNow && (
                  <Link to="/cart/purchase-success">
                    <Button
                      type="primary"
                      className="w-[150px] relative  right-0 mb-[50px]"
                    >
                      Place Order
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          ) : (
            <div className="flex justify-center items-center">
              <div className="flex justify-center items-center">
                <img
                  src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-empty-cart-img.png"
                  alt="empty-cart"
                />
              </div>
              <div className="flex flex-col justify-center items-center text-center gap-3">
                <H1>Your Cart Is Empty</H1>
                <Link to="/products">
                  <Button type="primary">Shop Now</Button>
                </Link>
              </div>
            </div>
          )}
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
  height: 90vh;

  @media (max-width: 768px) {
    flex-direction: column;
    margin: 20px;
    text-align: center;

    img {
      height: 100px;
    }
  }
`;

export default Cart;
