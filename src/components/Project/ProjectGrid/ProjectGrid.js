import React, { Component } from "react";
import "./ProjectGrid.scss";

class ProjectGrid extends Component {
  onMouseMove = () => {
    const {
      position: {
        x = 0,
        y = 0
      } = {}
    } = this.props;
    this.props.mousePosition(x, y);
  }
  render() {
    return (
      <div className="ProjectGrid" onMouseMove={this.onMouseMove}>
        <div className="grid vertical">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <div className="grid horizon">
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
      </div>
    );
  }
}

export default ProjectGrid;