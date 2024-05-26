import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Cookies from "js-cookie";
import NavBarItem from "../../NavBar";
import styled from "styled-components";
import { StarOutlined } from "@ant-design/icons";
import SimilarProducts from "./SimilarProducts";
import { Button, Spin } from "antd";

const ProductDesc = () => {
  const [data, setData] = useState([]);
  const { id } = useParams();
  const jwtToken = Cookies.get("jwt_token");

  const url = `https://apis.ccbp.in/products/${id}`;

  useEffect(() => {
    axios
      .get(url, { headers: { Authorization: `Bearer ${jwtToken}` } })
      .then((response) => setData(response.data));
  }, [id]);

  console.log(data);
  return (
    <div>
      <NavBarItem />
      {data?.length === 0 && (
        <center>
          <Spin />
        </center>
      )}
      <Wrapper>
        <img
          src={data?.image_url}
          alt="item"
          style={{ height: "578px", borderRadius: "8px" }}
        />
        <Desc>
          <h2>{data?.title}</h2>
          <Price>Rs {data.price}</Price>
          <div style={{ display: "flex" }}>
            <Rating>
              <p>
                {data.rating}{" "}
                <StarOutlined
                  style={{
                    color: "white",
                    fill: "white",
                    marginLeft: "10px",
                  }}
                />
              </p>
            </Rating>
            <Reviews>{data.total_reviews} Reviews</Reviews>
          </div>
          <Description>{data.description}</Description>
          <p style={{ color: "#171f46", fontSize: "22px", fontWeight: "500" }}>
            Avaliability: <Span>{data.availability}</Span>
          </p>
          <p style={{ color: "#171f46", fontSize: "22px", fontWeight: "500" }}>
            Brand: <Span>{data.brand}</Span>
          </p>
          <hr />
          <Button type="primary ghost" style={{ marginTop: "10px" }}>
            ADD TO CART
          </Button>
        </Desc>
      </Wrapper>
      <SimilarProducts data={data} />
    </div>
  );
};

const Description = styled.p`
  color: #616e7c;
  font-family: "Roboto";
  font-size: 18px;
  margin-top: 16px;
  margin-bottom: 16px;
  line-height: 1.3;
`;

const Price = styled.p`
  color: #171f46;
  font-family: "Roboto";
  font-size: 24px;
  font-weight: 700;
  margin-bottom: 16px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 4%;
  margin-top: 5%;
  width: 87%;
  h2 {
    color: #3e4c59;
    font-weight: 500;
    font-size: 45px;
  }
  }
`;

const Span = styled.span`
  color: #616e7c;
  font-family: "Roboto";
  font-size: 16px;
  margin-top: 0;
  margin-left: 8px;
  margin-bottom: 0;
`;

const Reviews = styled.p`
  color: #12022f;

  font-size: 14px;
  margin-left: 12px;
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

const Desc = styled.div`
  max-width: 35%;
`;

export default ProductDesc;
