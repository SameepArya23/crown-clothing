import React from "react";
import { Routes, Route } from "react-router-dom";
import Checkout from "./components/checkout/Checkout";
import Authentication from "./routes/authentication/Authentication";
import Home from "./routes/home/home";
import Navigation from "./routes/navigation/Navigation";
import Shop from "./routes/shop/Shop";

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="shop/*" element={<Shop />} />
        <Route path="auth" element={<Authentication />} />
        <Route path="checkout" element={<Checkout />} />
      </Route>
    </Routes>
  );
};

export default App;
