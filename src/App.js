import React from 'react';
import {Routes, Route} from "react-router-dom";
import "./App.css";
import {Homepage, ProductListing, CartPage, WishList, Login, Logout, Signup} from "./pages/index";
function App() {
  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/product" element={<ProductListing />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/wishList" element={<WishList />} />
          <Route path="/login" element={<Login />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/signup" element={<Signup/>} />
        </Routes>
    </div>
  );
}

export default App;
