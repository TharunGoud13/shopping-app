import React, { useState } from "react";
import styled from "styled-components";
import { Button, Form, Input } from "antd";
import { Navigate } from "react-router-dom";
import { login } from "./store/action";
import { connect } from "react-redux";

import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

const Login = () => {
  const navigate = useNavigate();
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

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
      navigate("/", { replace: true });
      Cookies.set("jwt_token", data.jwt_token, { expires: 1 });
    } else {
      const text = document.getElementById("error_text");
      text.textContent = data.error_msg;
    }
  };
  const jwtToken = Cookies.get("jwt_token");
  if (jwtToken !== undefined) {
    return <Navigate to="/" />;
  }
  return (
    <Wrapper>
      <div>
        <Image
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-login-img.png"
          // style={{ height: "400px" }}
          alt="login"
        />
      </div>
      <div>
        <LoginForm>
          <Logo
            src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-logo-img.png"
            style={{ height: "40px" }}
            alt="app-logo"
          />
          <Form
            style={{ maxWidth: 600, maxHeight: 600 }}
            name="basic"
            initialValues={{ remember: true }}
            autoComplete="off"
          >
            <Form.Item name="Username" required style={{ marginTop: "20px" }}>
              <label htmlFor="input">USERNAME</label>
              <InputEl
                id="input"
                style={{ paddingTop: "10px" }}
                onChange={(e) => setUserName(e.target.value)}
              />
            </Form.Item>
            <Form.Item
              name="Password"
              rules={[{ required: true, message: "Please Enter Password" }]}
            >
              <label htmlFor="password" required>
                PASSWORD
              </label>
              <Input.Password
                id="password"
                style={{ backgroundColor: "#e2e8f0", color: "#64748b" }}
                onChange={(e) => setPassword(e.target.value)}
              />
            </Form.Item>
          </Form>

          <Button
            type="primary"
            onClick={handleSubmit}
            style={{ width: "100%" }}
          >
            Submit
          </Button>
          <p id="error_text" style={{ color: "red" }}></p>
        </LoginForm>
      </div>
    </Wrapper>
  );
};

const InputEl = styled(Input)`
  background-color: #e2e8f0;
  color: #64748b;
`;

const Image = styled.img`
  @media (max-width: 768px) {
    width: 100%;
    height: 150px;
  }

  @media (min-width: 769px) {
    width: 100%;
    max-width: 500px;
  }
`;

const Logo = styled.img`
  text-align: center;
  align-items: center;
`;

const LoginForm = styled.form`
  @media (min-width: 769px) {
    background-color: white;
    box-shadow: 0px 0px 10px 4px lightgray;
    //   text-align: center;
    padding: 20px;
    height: 300px;
  }
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  height: 100vh;

  @media (max-width: 768px) {
    flex-direction: column;
  }

  label {
    color: #475569;
    font-weight: 600;
  }
`;

const mapStateToProps = (state) => ({});

const mapDispatchToProps = { login };

export default connect(mapStateToProps, mapDispatchToProps)(Login);
