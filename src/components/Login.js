import React, { useState } from "react";
import styled from "styled-components";
import { Button, Form, Input } from "antd";
import { Link } from "react-router-dom";
import { login } from "./store/action";
import { connect } from "react-redux";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = ({ login, loginLoading }) => {
  const navigate = useNavigate();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const onFinish = (values) => {
    console.log("values", values);
  };
  const onFinishFailed = (errorInfo) => {
    console.log("error", errorInfo);
  };

  const handleSubmit = async () => {
    const url = "https://apis.ccbp.in/login";
    const userDetails = { username, password };
    const options = {
      method: "POST",
      body: JSON.stringify(userDetails),
    };
    const response = await fetch(url, options);
    const data = await response.json();
    if (response.ok === true) {
      navigate("/");
    }
  };
  return (
    <Wrapper>
      <div>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          style={{ height: "400px" }}
          alt="login-image"
        />
      </div>
      <div>
        <LoginForm>
          <img
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            style={{ height: "40px" }}
            alt="app-logo"
          />
          <Form
            style={{ maxWidth: 600, maxHeight: 600 }}
            name="basic"
            initialValues={{ remember: true }}
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
            autoComplete="off"
          >
            <Form.Item name="Username" required>
              <label htmlFor="input">UserName</label>
              <Input id="input" onChange={(e) => setUserName(e.target.value)} />
            </Form.Item>
            <Form.Item
              name="Password"
              rules={[{ required: true, message: "Please Enter Password" }]}
            >
              <label htmlFor="password" required>
                Password
              </label>
              <Input.Password
                id="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Item>
          </Form>

          <Button type="primary" onClick={handleSubmit}>
            Submit
          </Button>
        </LoginForm>
      </div>
    </Wrapper>
  );
};

const LoginForm = styled.form`
  background-color: white;
  box-shadow: 0px 0px 10px 4px lightgray;
  //   text-align: center;
  padding: 20px;
  //   height: 300px;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100vh;
`;

const mapStateToProps = (state) => ({});

const mapDispatchToProps = { login };

export default connect(mapStateToProps, mapDispatchToProps)(Login);
