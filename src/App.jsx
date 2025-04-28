import React, { useState } from "react";
import Navbar from "./component/Navbar/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./page/Home/Home";
import Cart from "./page/Cart/Cart";
import PlaceOrder from "./page/PlaceOrder/PlaceOrder";
import "./App.css";
import Footer from "./component/Footer/Footer";
import Loginpopup from "./component/Loginpopup/Loginpopup";
import StoreContextProvider from "./Context/StoreContext";

const App = () => {
  const [Showlogin, setShowlogin] = useState(false);

  return (
    <StoreContextProvider>
      <>
        {Showlogin ? <Loginpopup setShowlogin={setShowlogin} /> : <></>}
        <div className="app">
          <Navbar setShowlogin={setShowlogin} />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/Cart" element={<Cart />} />
            <Route path="/Order" element={<PlaceOrder />} />
          </Routes>
        </div>
        <Footer />
      </>
    </StoreContextProvider>
  );
};

export default App;
