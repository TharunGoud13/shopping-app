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
        <ContentWrapper>
          <Heading>Clothes That Get YOU Noticed</Heading>
          <Img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
            alt="home-img-2"
          />
          <Text>
            Fashion is part of the daily air and it does not quite help that it
            changes all the time. Clothes have always been a marker of the era
            and we are in a revolution. Your fashion makes you been seen and
            heard that way you are. So, celebrate the seasons new and exciting
            fashion in your own way.
          </Text>
          <Link to="/products">
            <ButtonEl type="primary" style={{ width: "135px", height: "40px" }}>
              Shop Now
            </ButtonEl>
          </Link>
        </ContentWrapper>
        <div>
          <Image
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
            alt="home-img"
            style={{ height: "420px", marginTop: "20%" }}
          />
        </div>
      </Content>
    </Wrapper>
  );
};

const ButtonEl = styled(Button)`
  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

const ContentWrapper = styled.div`
  @media (min-width: 769px) {
    width: 50%;
  }
  @media (max-width: 768px) {
    width: 80%;
    text-align: center;
  }
`;

const Img = styled.img`
  @media (max-width: 768px) {
    display: flex;
    justify-content: center;
    margin: 30px;

    width: 100%;
    // max-width: 250px;
  }
  display: none;
`;

const Image = styled.img`
  @media (max-width: 768px) {
    display: none;
  }
`;

const Text = styled.p`
  font-family: "Roboto";
  margin-top: 36px;
  font-size: 20px;
  line-height: 28px;
  color: #64748b;
  margin-bottom: 8%;

  @media (max-width: 768px) {
    font-size: 14px;
    text-align: center;
  }
`;

const Heading = styled.h1`
  color: #1e293b;
  font-family: "Roboto";
  font-weight: 700;
  font-size: 40px;
  line-height: 1.2;

  @media (max-width: 768px) {
    text-align: center;
    font-size: 30px;
  }
`;

const Content = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Wrapper = styled.div``;

export default Home;
