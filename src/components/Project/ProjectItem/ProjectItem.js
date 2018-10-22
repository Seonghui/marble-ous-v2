import React, { Component } from "react";
import "./ProjectItem.scss";
import { Link } from "react-router-dom";
import styled from 'styled-components';

class ProjectItem extends Component {
  
  render() {
    const { id, titleKr, coX, coY } = this.props;
    const Box = styled.div`
      position: absolute;
      top: ${coY * 220}px;
      left: ${coX * 220}px;
    `;
    const link = "/content/" + id;
    return (
      <Box>
      <div className="ProjectItem">
      
        <Link to={link}>
          <div className="item" />
          <span>{titleKr}</span>
        </Link>
      
      </div>
      </Box>
    );
  }
}

export default ProjectItem;
