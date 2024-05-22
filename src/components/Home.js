import { Button } from "antd";
import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Home = () => {
  const handleLogout = () => {
    console.log("Page Logout");
  };
  return (
    <Wrapper>
      <NavBar>
        <div style={{ marginLeft: "10%", marginTop: "10px" }}>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            style={{ height: "40px" }}
            alt="app-logo"
          />
        </div>
        <NavItems>
          <p>Home</p>
          <p>Products</p>
          <p>Cart</p>
          <Link to="/login">
            <Button
              type="primary ghost"
              style={{ marginTop: "10px" }}
              onClick={handleLogout}
            >
              Logout
            </Button>
          </Link>
        </NavItems>
      </NavBar>
    </Wrapper>
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

const NavBar = styled.nav`
  display: flex;
  justify-content: space-between;
`;

const Wrapper = styled.div``;

export default Home;
