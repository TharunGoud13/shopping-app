import { Button } from "antd";
import React from "react";
import styled from "styled-components";
import { Navigate, Link } from "react-router-dom";
import NavBarItem from "../../NavBar";
import Cookies from "js-cookie";

const Home = () => {
  const jwtToken = Cookies.get("jwt_token");
  if (jwtToken === undefined) {
    return <Navigate to="/login" />;
  }

  return (
    <Wrapper>
      <NavBarItem />
      <Content>
        <div style={{ width: "50%" }}>
          <h1 style={{ fontSize: "40px" }}>Clothes That Get YOU Noticed</h1>
          <p style={{ fontSize: "22px" }}>
            Fashion is part of the daily air and it does not quite help that it
            changes all the time. Clothes have always been a marker of the era
            and we are in a revolution. Your fashion makes you been seen and
            heard that way you are. So, celebrate the seasons new and exciting
            fashion in your own way.
          </p>
          <Link to="/products">
            <Button type="primary">Shop Now</Button>
          </Link>
        </div>
        <div>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
            alt="home-img"
            style={{ height: "420px", marginTop: "20%" }}
          />
        </div>
      </Content>
    </Wrapper>
  );
};

const Content = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Wrapper = styled.div``;

export default Home;
