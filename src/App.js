import React from "react";
import "./App.css";
import { BrowserRouter, Routes, Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Login from "./components/Login";
import NotFound from "./components/NotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route component={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
