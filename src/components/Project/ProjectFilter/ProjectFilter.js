import React, { Component } from 'react';
import "./ProjectFilter.scss";

class ProjectFilter extends Component {

  render() { 
    return (
      <div className="ProjectFilter">
        <svg>
          Test
          <path className="svg-circle" d="M34.5,19.1c0,0,15.7-13.1,40.4-13.1s40.4,13.1,40.4,13.1" />
          <path className="svg-circle" d="M115.3,19.1c0,0,17,10.4,25,34.1c8,23.7,0,42.7,0,42.7" />
          <path className="svg-circle" d="M140.3,96c0,0-4.7,19.5-24.8,34.4c-20.1,14.9-40.6,13.2-40.6,13.2" />
          <path className="svg-circle" d="M74.9,143.6c0,0-23.2,0.4-40.7-13.3S12.2,104,9.5,96.1" />
          <path className="svg-circle" d="M9.5,96.1c0,0-7.5-20,0.1-42.8s25-34.1,25-34.1" />
          </svg>
      </div>
    )
  }
}

export default ProjectFilter;