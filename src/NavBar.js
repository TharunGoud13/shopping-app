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
    <NavBar>
      <div style={{ marginLeft: "5%", marginTop: "10px", cursor: "pointer" }}>
        <Link to="/">
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            style={{ height: "40px" }}
            alt="app-logo"
          />
        </Link>
      </div>

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
  );
};

const NavItems = styled.div`
  display: flex;
  gap: 40px;
  margin-right: 10%;

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
`;

export default NavBarItem;
