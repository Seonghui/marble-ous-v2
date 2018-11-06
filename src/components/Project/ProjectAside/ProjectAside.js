import React, { Component } from "react";
import Panel from '../../Common/Panel/Panel';
import "./ProjectAside.scss";

class ProjectAside extends Component {
  render() {
    return (
      <div className="ProjectAside">
        <Panel title="FILTER">
          <h1>필터</h1>
        </Panel>
        <Panel title="CHARACTER">
          <h1>캐릭터</h1>
        </Panel>
        <Panel title="MINI MAP">
          <h1>미니맵</h1>
        </Panel>
      </div>
    );
  }
}

export default ProjectAside;