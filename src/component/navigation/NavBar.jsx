import React from 'react';
import "./NavBar.css";

const NavBar =() =>{
    return(
        <nav className="nav-head">
        <h1 className="app-head">timeby</h1>
        <nav className="nav-left">
          <a href="/" className="nav-btn">Home</a>
          <a href="/" className="nav-btn">Product</a>
        </nav>

        <form action="" className="search-container">
          <input type="search" className="search-ip" placeholder="search.." />
          <button className="search-btn" type="submit">
            Search
          </button>
        </form>

        <nav className="nav-right">
          <a href="/" className="nav-btn">Cart</a>
          <a href="/" className="nav-btn">wishlist</a>
          <a href="/" className="nav-btn">login</a>
        </nav>
      </nav>
    );
}

export {NavBar};