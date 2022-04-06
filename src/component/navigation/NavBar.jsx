import React from 'react';
import {Link} from 'react-router-dom';
import "./NavBar.css";
// import Homepage, CartPage, ProductListing, Login, WishList  from '../../pages/index';

const NavBar =() =>{
    return(
        <nav className="nav-head">
        <h1 className="app-head">timeby</h1>
        <nav className="nav-left">
          <Link to="/" className="nav-btn">Home</Link>
          <Link to="/Product" className="nav-btn">Product</Link>
        </nav>

        <form action="" className="search-container">
          <input type="search" className="search-ip" placeholder="search.." />
          <button className="search-btn" type="submit">
            Search
          </button>
        </form>

        <nav className="nav-right">
        <Link to="/cart" className="nav-btn">Cart</Link>
          <Link to="/wishList" className="nav-btn">wishlist</Link>
          <Link to="/login" className="nav-btn">login</Link>
        </nav>
      </nav>
    );
}

export {NavBar};