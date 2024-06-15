import React, { useEffect, useState } from "react";
import NavBarItem from "../../NavBar";
import Cookies from "js-cookie";
import { Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { getProducts } from "../store/action";
import styled from "styled-components";
import {
  StarOutlined,
  FilterOutlined,
  SearchOutlined,
} from "@ant-design/icons";
import { Button, Input, Rate, Spin } from "antd";
// import PrimeDeals from "./PrimeDeals";
import { Link, Routes, Route } from "react-router-dom";
import ProductDesc from "./ProductDesc";

const Products = ({ getProducts, getProductsResponse, getProductsLoading }) => {
  const [optionValue, setOptionValue] = useState("PRICE_HIGH");
  const [inputValue, setInputValue] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(null);
  const jwtToken = Cookies.get("jwt_token");
  const category = ["Clothing", "Electronics", "Appliances", "Grocery", "Toys"];
  const rating = [4, 3, 2, 1];

  // useEffect(() => {
  //   getProducts();
  // }, []);

  useEffect(() => {
    getProducts({ sort: optionValue });
  }, [optionValue]);

  if (jwtToken === undefined) {
    return <Navigate to="/" />;
  }

  const handleSelect = (e) => {
    setOptionValue(e.target.value);
  };

  const handleItemClick = (item) => {
    getProducts({ id: item });
  };

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      getProducts({ sort: optionValue, title: inputValue });
    }
  };

  const handleCategoryClick = (index) => {
    setSelectedIndex(index);
    getProducts({ sort: optionValue, category: index + 1 });
  };

  const handleRating = (item) => {
    getProducts({ sort: optionValue, rating: item });
  };

  const handleClearFilter = () => {
    setInputValue("");
    getProducts({
      sort: optionValue,
      title: null,
      category: null,
      rating: null,
    });
  };

  return (
    <div>
      <NavBarItem />
      {/* <PrimeDeals /> */}
      <div className="flex flex-col md:flex-row w-full justify-center md:justify-evenly">
        <div className="w-full ml-[20px] md:ml-0 md:w-[25%] mt-[50px] flex flex-col  gap-3">
          <Input
            placeholder="Search for product and click on Enter"
            className="bg-gray-100 w-[90%] md:w-[80%] "
            suffix={<SearchOutlined />}
            onChange={(e) => handleInputChange(e)}
            value={inputValue}
            onKeyPress={(e) => handleKeyPress(e)}
          />
          <h1 className="text-3xl font-bold">Category</h1>
          <ul>
            {category.map((item, index) => (
              <li
                key={index}
                onClick={() => handleCategoryClick(index)}
                className={`text-xl text-gray-500 my-[10px] cursor-pointer hover:font-bold hover:text-gray-600
                  ${
                    index === selectedIndex
                      ? "text-gray-600 font-bold "
                      : "text-gray-500"
                  }`}
              >
                {item}
              </li>
            ))}
          </ul>
          <div>
            <h1 className="text-2xl font-bold">Rating</h1>
            <div className="my-[10px]">
              {rating.map((item, index) => (
                <div onClick={() => handleRating(item)} key={index}>
                  <Rate
                    defaultValue={item}
                    disabled
                    className="cursor-pointer"
                  />
                  <span className="cursor-pointer text-[20px] text-gray-500">
                    & up
                  </span>
                  <br />
                </div>
              ))}
            </div>
          </div>
          <div>
            <Button type="primary" onClick={handleClearFilter}>
              Clear Filters
            </Button>
          </div>
        </div>
        <div className="w-full md:w-[60%]">
          <FilterWrapper className="mt-[50px] mb-[20px]">
            <div>
              <p className="text-3xl text-[#475569]">All Products</p>
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
          </FilterWrapper>
          {getProductsLoading ? (
            <center>
              <Spin />
            </center>
          ) : (
            <div>
              <Product>
                {getProductsResponse?.products?.length > 0 ? (
                  getProductsResponse?.products.map((item) => (
                    <ItemWrapper
                      key={item.id}
                      onClick={() => handleItemClick(item?.id)}
                    >
                      <Link to={`/products/${item?.id}`}>
                        <img
                          src={item.image_url}
                          alt="product"
                          style={{
                            width: "100%",
                            borderRadius: "4px",
                            gap: "20px",
                          }}
                        />
                      </Link>
                      <p
                        style={{
                          fontSize: "25px",
                          fontWeight: "600",
                          color: "#475569",
                        }}
                      >
                        {item.title}
                      </p>
                      <p className="text-[20px] my-[5px] text-gray-500">
                        by {item.brand}
                      </p>
                      <div
                        style={{
                          display: "flex",
                          gap: "10px",
                          justifyContent: "space-between",
                          // marginTop: "20px",
                        }}
                      >
                        <h4 className="text-[20px] font-bold">
                          Rs {item.price}/-
                        </h4>
                        <div className="bg-[#1a73e8] text-white p-2.5 rounded">
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
                        </div>
                      </div>
                    </ItemWrapper>
                  ))
                ) : (
                  <div className="flex flex-col justify-center items-center w-full h-full">
                    <img
                      src="https://assets.ccbp.in/frontend/react-js/nxt-trendz/nxt-trendz-no-products-view.png"
                      alt="no-products"
                    />
                    <div className="mt-[10px]">
                      <h1 className="text-2xl text-center font-bold text-[#475569]">
                        No Products Found
                      </h1>
                      <p className="text-xl text-[#475569]">
                        We could not find any products. Try other filters.
                      </p>
                    </div>
                  </div>
                )}
              </Product>
            </div>
          )}
          <Routes>
            <Route path="/products/:id" element={<ProductDesc />} />
          </Routes>
        </div>
      </div>
    </div>
  );
};

const FilterWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 88%;

  @media (max-width: 768px) {
    flex-direction: column;
    margin-bottom: 5px;
  }
`;

const ItemWrapper = styled.div`
  width: 350px;
`;

const Product = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 30px;
  width: 90%;

  @media (max-width: 768px) {
    // width: 100%;
    margin: 5px 10px;
    justify-content: center;
    align-items: center;
  }
`;

const mapStateToProps = (state) => ({
  getProductsResponse: state.getProductsResponse,
  getProductsLoading: state.getProductsLoading,
});

const mapDispatchToProps = {
  getProducts,
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
