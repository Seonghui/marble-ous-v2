import React, { Component } from 'react';
import ProjectItem from '../ProjectItem/ProjectItem';


class ProjectList extends Component {

  renderProjectItem = () => {
    const projectItem = this.props.data.map((res, index) => {
      return <ProjectItem 
      key={index} 
      id={index}
      titleKr={res.titleKr}
      designer1={res.designer[0].nameKr}
      designer2={res.designer[1].nameKr}
      designer3={res.designer[2].nameKr}
      coX={res.coX}
      coY={res.coY} />
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