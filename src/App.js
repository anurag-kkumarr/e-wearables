<<<<<<< HEAD
import React from 'react';
import {Routes, Route} from "react-router-dom";
import "./App.css";
import {Homepage, ProductListing, CartPage, WishList, Login, Logout, Signup} from "./pages/indexPage";
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
=======
import "./App.css";
import logo from "./logo.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} alt="mockBee logo" width="180" height="180" />
        <h1 className="brand-title">
          Welcome to <span>mockBee!</span>
        </h1>
        <p className="brand-description">
          Get started by editing <code>src/App.js</code>
        </p>
        <div className="links">
          <a
            href="https://mockbee.netlify.app/"
            target="_blank"
            rel="noreferrer"
          >
            Explore mockBee
          </a>
          <a
            href="https://mockbee.netlify.app/docs/api/introduction"
            target="_blank"
            rel="noreferrer"
          >
            API Documentation
          </a>
          <a
            href="https://github.com/neogcamp/mockBee"
            target="_blank"
            rel="noreferrer"
          >
            Contribute
          </a>
        </div>
      </header>
>>>>>>> 758aa2c8a5121363e35ca1f555aac4e7c89b0205
    </div>
  );
}

export default App;
