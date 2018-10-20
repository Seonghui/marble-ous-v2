import React, { Component } from "react";
import "./ProjectItem.scss";
import { Link } from "react-router-dom";

class Project extends Component {
  render() {
    const { id, titleKr } = this.props;
    const link = "/content/" + id;
    return (
      <div className="ProjectItem">
        <Link to={link}>
          <div className="item" />
          <span>{titleKr}</span>
        </Link>
      </div>
    );
  }
}

export default Project;
