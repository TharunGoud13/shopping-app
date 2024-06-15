import { Button } from "antd";
import React from "react";
import styled from "styled-components";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const NavBarItem = () => {
  const navigate = useNavigate();
  const handleLogout = () => {
    // <Navigate to="/login" />;
    Cookies.remove("jwt_token");
    navigate("/login", { replace: true });
  };
  return (
    <div>
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
          <NavLink
            className={({ isActive }) => `no-underline 
            ${
              isActive
                ? "text-[#1a73e8] font-bold border-b-[6px] border-b-orange-500"
                : "text-gray-500"
            } `}
            to="/"
          >
            <p>Home</p>
          </NavLink>
          <NavLink
            to="/products"
            className={({ isActive }) => `no-underline 
              ${
                isActive
                  ? "text-[#1a73e8] font-bold border-b-[6px] border-b-orange-500"
                  : "text-gray-500"
              } `}
          >
            <p>Products</p>
          </NavLink>

          <NavLink
            to="/cart"
            className={({ isActive }) =>
              `no-underline ${
                isActive
                  ? "text-[#1a73e8] font-bold border-b-[6px] border-b-orange-500"
                  : "text-gray-500"
              }`
            }
          >
            <p>Cart</p>
          </NavLink>

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
        <NavLink to="/">
          <Image
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-icon.png"
            alt="home-image"
          />
        </NavLink>
        <NavLink to="/products">
          <Image
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-products-icon.png"
            alt="home-image"
          />
        </NavLink>
        <NavLink to="/cart">
          <Image
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-cart-icon.png"
            alt="home-image"
          />
        </NavLink>
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
    align-items: center;
    justify-content: space-around;
    background-color: #e6f6ff;
    padding: 20px;
    margin-top: 20px;
  }
`;

const NavItems = styled.div`
  display: flex;
  justify-content: center;
  gap: 40px;
  margin-right: 10%;
  align-items: center;

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
  padding-bottom: 15px;
  border-bottom: 1px solid #f3f3f3;
`;

export default NavBarItem;
