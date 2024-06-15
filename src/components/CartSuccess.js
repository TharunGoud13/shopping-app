import { Button, Result } from "antd";
import React from "react";
import { Link } from "react-router-dom";

const CartSuccess = () => {
  return (
    <div>
      <Result
        status="success"
        title="Successfully Purchased your items"
        extra={
          <Link to="/products">
            <Button type="primary">Buy Again</Button>
          </Link>
        }
      />
    </div>
  );
};

export default CartSuccess;
