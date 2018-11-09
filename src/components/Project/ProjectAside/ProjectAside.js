import React, { Component } from "react";
import Panel from '../../Common/Panel/Panel';
import "./ProjectAside.scss";

class ProjectAside extends Component {
  render() {
    const { gridX, gridY } = this.props;
    return (
      <div className="ProjectAside">
        <Panel title="FILTER">
          <h1>필터</h1>
        </Panel>
        <Panel title="CHARACTER">
          <Character gridX={gridX} gridY={gridY} />
        </Panel>
        <Panel title="MINI MAP">
          <h1>미니맵</h1>
        </Panel>
      </div>
    );
  }
}

class Character extends Component {
  render() {
    const { gridX, gridY } = this.props;
    return(
      <div className="Character">
        <div className="line line-1">
          <div className="tri"></div>
          <div className="text">
            <span>Fun</span>
            <span>Insightful</span>
          </div>
        </div>
        <div className="line line-2">
          <div className="tri"></div>
          <div className="text">
            <span>Experimental</span>
            <span>Practical</span>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectAside;