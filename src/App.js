import React from "react";
import { Routes, Route } from "react-router-dom";
import Checkout from "./components/checkout/Checkout";
import Authentication from "./routes/authentication/Authentication";
import Home from "./routes/home/home";
import Navigation from "./routes/navigation/Navigation";
import Shop from "./routes/shop/Shop";

import { useDispatch } from "react-redux/es/exports";
import { setCurrentUser } from "./store/user/user.action";
import { useEffect } from "react";
import {
  createUserDocumentFromAuth,
  onAuthStateChangedListner,
} from "./utils/firebase/firebase.utils";
import Spinner from "./components/spinner/spinner.component";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe = onAuthStateChangedListner((user) => {
      if (user) {
        createUserDocumentFromAuth(user);
      }
      dispatch(setCurrentUser(user));
    });
    return unsubscribe;
  }, []);

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
