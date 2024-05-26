import React from "react";
import styled from "styled-components";
import { StarOutlined } from "@ant-design/icons";

const SimilarProducts = ({ data }) => {
  return (
    <div>
      <Text>Similar Products</Text>
      <Wrapper>
        {data?.similar_products?.map((item) => (
          <div
            key={item.id}
            style={{ display: "flex", flexDirection: "column" }}
          >
            <img
              src={item.image_url}
              style={{ height: "200px", borderRadius: "8px" }}
            />
            <Title>{item?.title}</Title>
            <Brand>{`by ${item?.brand}`}</Brand>
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <Price>Rs {item?.price}</Price>
              <Rating>
                <p>
                  {item.rating}{" "}
                  <StarOutlined
                    style={{
                      color: "white",
                      fill: "white",
                      marginLeft: "10px",
                    }}
                  />
                </p>
              </Rating>
            </div>
          </div>
        ))}
      </Wrapper>
    </div>
  );
};

const Brand = styled.p`
color: #594d6d;
    font-family: "Roboto";
    font-size: 16px;
    margin-top: 6px;
}`;

const Title = styled.p`
  color: #171f46;
  font-family: "Roboto";
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 6px;
`;

const Price = styled.p`
  color: #171f46;
  font-family: "Roboto";
  font-size: 18px;
  font-weight: 700;
`;

const Rating = styled.div`
  background-color: #1a73e8;
  color: white;
  border-radius: 4px;
  width: 100px;
  // height: 45px;
  height: 40px;
  margin-left: 10px;
  text-align: center;
  // height: 30px;
  padding: 0px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 5%;
`;

const Text = styled.h2`
  color: #3e4c59;
  font-weight: 500;
  font-size: 38px;
  text-align: center;
`;

export default SimilarProducts;
