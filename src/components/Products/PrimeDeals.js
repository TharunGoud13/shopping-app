// import React, { useEffect, useState } from "react";
// import { connect } from "react-redux";
// import { getPrimeDeals } from "../store/action";
// import styled from "styled-components";
// import { Spin } from "antd";
// import { StarOutlined } from "@ant-design/icons";
// import { getProducts } from "../store/action";
// import { Link, Routes, Route } from "react-router-dom";
// import ProductDesc from "./ProductDesc";

// const PrimeDeals = ({
//   getPrimeDeals,
//   getPrimeDealsResponse,
//   getPrimeDealsLoading,
//   getPrimeDealsError,
//   getProducts,
// }) => {
//   useEffect(() => {
//     getPrimeDeals();
//   }, [getPrimeDeals]);

//   const handleItemClick = (item) => {
//     getProducts({ id: item });
//   };

//   return (
//     <Wrapper>
//       {!getPrimeDealsError ? (
//         <>
//           <p style={{ fontSize: "22px" }}>Exclusive Prime Deals</p>

//           {getPrimeDealsLoading ? (
//             <center>
//               <Spin />
//             </center>
//           ) : (
//             <Product>
//               {getPrimeDealsResponse?.prime_deals?.length > 0 &&
//                 getPrimeDealsResponse?.prime_deals.map((item) => (
//                   <ItemWrapper
//                     key={item.id}
//                     onClick={() => handleItemClick(item?.id)}
//                   >
//                     <img
//                       src={item.image_url}
//                       alt="product"
//                       style={{
//                         width: "100%",
//                         borderRadius: "4px",
//                       }}
//                     />
//                     <p style={{ fontSize: "18px", fontWeight: "600" }}>
//                       {item.title}
//                     </p>
//                     <p>by {item.brand}</p>
//                     <div
//                       style={{
//                         display: "flex",
//                         gap: "10px",
//                         justifyContent: "space-between",
//                         marginTop: "-20px",
//                       }}
//                     >
//                       <h4>Rs {item.price}/-</h4>
//                       <Rating>
//                         <p>
//                           {item.rating}{" "}
//                           <StarOutlined
//                             style={{
//                               color: "white",
//                               fill: "white",
//                               marginLeft: "10px",
//                             }}
//                           />
//                         </p>
//                       </Rating>
//                     </div>
//                   </ItemWrapper>
//                 ))}
//             </Product>
//           )}
//         </>
//       ) : (
//         <div>
//           <img
//             src="https://assets.ccbp.in/frontend/react-js/exclusive-deals-banner-img.png"
//             alt="Register Prime"
//             style={{
//               height: "300px",
//               marginTop: "30px",
//               borderRadius: "4px",
//               width: "88%",
//             }}
//           />
//         </div>
//       )}
//       <Routes>
//         <Route path="/products/:id" element={<ProductDesc />} />
//       </Routes>
//     </Wrapper>
//   );
// };

// const Rating = styled.div`
//   background-color: #1a73e8;
//   color: white;
//   border-radius: 4px;
//   width: 100px;
//   height: 45px;
//   text-align: center;
//   // height: 30px;
//   padding: 0px;
// `;

// const ItemWrapper = styled.div`
//   width: 100%;
// `;

// const Wrapper = styled.div`
//   margin-left: 5%;
//   // width: 63%;
// `;

// const Product = styled.div`
//   display: grid;
//   grid-template-columns: repeat(3, 1fr);
//   gap: 30px;
//   width: 90%;
//   cursor: pointer;

//   @media (max-width: 768px) {
//     grid-template-columns: repeat(1, 1fr);
//   }
// `;

// const mapStateToProps = (state) => ({
//   getPrimeDealsResponse: state.getPrimeDealsResponse,
//   getPrimeDealsLoading: state.getPrimeDealsLoading,
//   getPrimeDealsError: state.getPrimeDealsError,
// });

// const mapDispatchToProps = {
//   getPrimeDeals,
//   getProducts,
// };

// export default connect(mapStateToProps, mapDispatchToProps)(PrimeDeals);
