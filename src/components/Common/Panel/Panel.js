import React, { Component } from "react";
import "./Panel.scss";

class Panel extends Component {
  render() {
    const { title, children } = this.props;
    return (
      <div className="Panel">
        <div className="title">
          <span>{ title }</span>
        </div>
        <div className="content">
          { children }
        </div>
      </div>
    );
  }
}

export default Panel;