import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./Menu.scss";

class Menu extends Component {
  render() {
    return (
      <div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/designer">Designer</Link></li>
          <li><Link to="/About">About</Link></li>
        </ul>
      </div>
    );
  }
}

export default Menu;
