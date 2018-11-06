import React, { Component } from 'react';
import ProjectItem from '../ProjectItem/ProjectItem';
import "./ProjectList.scss";


class ProjectList extends Component {

  renderProjectItem = () => {
    const projectItem = this.props.data.map((res, index) => {
      return <ProjectItem 
      key={index} 
      id={index}
      titleKr={res.titleKr}
      designer={res.designer}
      coX={res.coX}
      coY={res.coY}
      platform={res.platform}
      />
    })
    return projectItem;
  }

  render() {
    return (
      <div className = "ProjectList">
        { this.renderProjectItem() }
      </div>
    );
  }
}

export default ProjectList;