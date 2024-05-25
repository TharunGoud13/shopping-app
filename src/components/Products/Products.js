import React, { useEffect, useState } from "react";
import NavBarItem from "../../NavBar";
import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { getProducts } from "../store/action";
import styled from "styled-components";
import { StarOutlined, FilterOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import PrimeDeals from "./PrimeDeals";

const Products = ({ getProducts, getProductsResponse, getProductsLoading }) => {
  const [optionValue, setOptionValue] = useState("PRICE_HIGH");
  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    getProducts({ sort: optionValue });
  }, [optionValue]);

  const jwtToken = Cookies.get("jwt_token");
  if (jwtToken === undefined) {
    return <Navigate to="/" />;
  }

  const handleSelect = (e) => {
    setOptionValue(e.target.value);
  };

  const handleItemClick = (item) => {
    getProducts({ id: item });
  };

  return (
    <div style={{ width: "100%" }}>
      <NavBarItem />
      <PrimeDeals />
      <Wrapper>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            width: "88%",
          }}
        >
          <div>
            <p style={{ fontSize: "22px" }}>All Products</p>
          </div>
          <div>
            <span style={{ marginRight: "5px" }}>
              <FilterOutlined
                style={{ marginRight: "5px", fontSize: "20px" }}
              />{" "}
              Sort By
            </span>
            <select onChange={(e) => handleSelect(e)}>
              <option value="PRICE_HIGH">Price (High-Low)</option>
              <option value="PRICE_LOW">Price (Low-High)</option>
            </select>
          </div>
        </div>
        {getProductsLoading ? (
          <center>
            <Spin />
          </center>
        ) : (
          <Product>
            {getProductsResponse?.products?.length > 0 &&
              getProductsResponse?.products.map((item) => (
                <ItemWrapper
                  key={item.id}
                  onClick={() => handleItemClick(item?.id)}
                >
                  <img
                    src={item.image_url}
                    alt="product"
                    style={{
                      height: "300px",
                      width: "300px",
                      borderRadius: "4px",
                    }}
                  />
                  <p style={{ fontSize: "18px", fontWeight: "600" }}>
                    {item.title}
                  </p>
                  <p>by {item.brand}</p>
                  <div
                    style={{
                      display: "flex",
                      gap: "10px",
                      justifyContent: "space-between",
                      marginTop: "-20px",
                    }}
                  >
                    <h4>Rs {item.price}/-</h4>
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
                </ItemWrapper>
              ))}
          </Product>
        )}
      </Wrapper>
    </div>
  );
};

const Rating = styled.div`
  background-color: #1a73e8;
  color: white;
  border-radius: 4px;
  width: 100px;
  height: 45px;
  text-align: center;
  // height: 30px;
  padding: 0px;
`;

const ItemWrapper = styled.div`
  width: 63%;
`;

const Wrapper = styled.div`
  margin-left: 5%;

  select {
    border: none;
    font-size: 16px;
    font-weight: 500;
    color: #475569;
    cursor: pointer;
  }
`;

const Product = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
`;

const mapStateToProps = (state) => ({
  getProductsResponse: state.getProductsResponse,
  getProductsLoading: state.getProductsLoading,
});

const mapDispatchToProps = {
  getProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
