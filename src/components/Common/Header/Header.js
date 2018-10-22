import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Header.scss";

class Header extends Component {
  render() {
    return (
      <div className="Header">
        <a className="logo" href="/">
          <img src="/images/logo.png" alt="logo" />
        </a>
        <ul>
          <li><Link to="/">WORK</Link></li>
          <li><Link to="/designer">DESIGNER</Link></li>
          <li><Link to="/About">ABOUT</Link></li>
        </ul>
      </div>
    );
  }
}

export default Header;