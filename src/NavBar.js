import { Button } from "antd";
import React from "react";
import styled from "styled-components";
import { Link, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const NavBarItem = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    // <Navigate to="/login" />;
    Cookies.remove("jwt_token");
    navigate("/login", { replace: true });
  };
  return (
    <div style={{ width: "100%" }}>
      <NavBar>
        <MobileNav>
          <div>
            <Link to="/">
              <Img
                src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
                alt="app-logo"
              />
            </Link>
          </div>
          <div>
            <LogoutContainer>
              <button
                style={{ border: "none", backgroundColor: "transparent" }}
                onClick={handleLogout}
              >
                <Logout src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-log-out-img.png" />
              </button>
            </LogoutContainer>
          </div>
        </MobileNav>

        <NavItems>
          <Link to="/" style={{ textDecoration: "none" }}>
            <p>Home</p>
          </Link>
          <Link to="/products" style={{ textDecoration: "none" }}>
            <p>Products</p>
          </Link>

          <Link to="/cart" style={{ textDecoration: "none" }}>
            <p>Cart</p>
          </Link>

          <Button
            type="primary ghost"
            style={{ marginTop: "10px" }}
            onClick={handleLogout}
          >
            Logout
          </Button>
        </NavItems>
      </NavBar>
      <IconsContainer>
        <Link to="/">
          <Image
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
            alt="home-image"
          />
        </Link>
        <Link to="/products">
          <Image
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
            alt="home-image"
          />
        </Link>
        <Link to="/cart">
          <Image
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
            alt="home-image"
          />
        </Link>
      </IconsContainer>
    </div>
  );
};

const LogoutContainer = styled.div`
  @media (min-width: 769px) {
    display: none;
  }
`;

const Logout = styled.img`
  height: 25px;
  display: flex;
  flex-direction: flex-end;
  margin-right: 5px;
  margin-top: 15px;
`;

const Image = styled.img`
  height: 25px;
`;

const MobileNav = styled.div`
  display: flex;
  justify-content: space-between;
  // width: 200px;
  width: 100%;
  margin-left: 5%;
  // margin-top: 10%;
  cursor: pointer;
`;

const Img = styled.img`
  height: 40px;
  margin-top: 10%;
  @media (max-width: 768px) {
    height: 30px;
  }
`;

const IconsContainer = styled.div`
  display: none;

  @media (max-width: 768px) {
    display: flex;
    justify-content: space-around;
    background-color: #e6f6ff;
    padding: 20px;
    margin-top: 20px;
  }
`;

const NavItems = styled.div`
  display: flex;
  gap: 40px;
  margin-right: 10%;

  @media (max-width: 768px) {
    display: none;
  }

  p {
    cursor: pointer;
  }
`;

const NavBar = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: white;
  position: sticky;
  top: 0;
  width: 100%;
`;

export default NavBarItem;
