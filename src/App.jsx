import React from "react";
import Navbar from "./component/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./page/Home/Home";
import Cart from "./page/Cart/Cart";
import PlaceOrder from "./page/PlaceOrder/PlaceOrder";
import "./App.css";
import Header from "./component/Header/Header";

const App = () => {
  return (
    <div className="app">
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Cart" element={<Cart />} />
        <Route path="/Order" element={<PlaceOrder />} />
      </Routes>
    </div>
  );
};

export default App;
