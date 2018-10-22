import React, { Component } from 'react';
import ProjectItem from '../ProjectItem/ProjectItem';


class ProjectList extends Component {

  renderProjectItem = () => {
    const projectItem = this.props.data.map((res, index) => {
      return <ProjectItem key={index} id={index} titleKr={res.titleKr} coX={res.coX} coY={res.coY} />
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