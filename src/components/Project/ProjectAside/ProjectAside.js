import React, { Component } from "react";
import Panel from '../../Common/Panel/Panel';
import ProjectMap from '../ProjectMap/ProjectMap';
import styled from 'styled-components';
import "./ProjectAside.scss";

class ProjectAside extends Component {
  render() {
    const { gridX, gridY, data } = this.props;
    return (
      <div className="ProjectAside">
        <Panel title="FILTER">
          <h1>필터</h1>
        </Panel>
        <Panel title="CHARACTER">
          <Character gridX={gridX} gridY={gridY} />
        </Panel>
        <Panel title="MINI MAP">
          <ProjectMap data={data} gridX={gridX} gridY={gridY} />
        </Panel>
      </div>
    );
  }
}

class Character extends Component {
  render() {
    const { gridX, gridY } = this.props;
    const xPos = parseInt(gridX * 188 / 2200, 10);
    const yPos = parseInt(gridY * 188 / 2200, 10);

    const TopDot = styled.div`
      left: ${yPos}px;
    `;
    const BottomDot = styled.div`
      left: ${xPos}px;
    `;

    return (
      <div className="Character">
        <div className="line line-1">
          <TopDot className="dot"></TopDot>
          <div className="text">
            <span className="fun">Fun</span>
            <span className="insightful">Insightful</span>
          </div>
        </div>
        <div className="line line-2">
          <BottomDot className="dot"></BottomDot>
          <div className="text">
            <span className="experimental">Experimental</span>
            <span className="practical">Practical</span>
          </div>
        </div>
      </div>
    );
  }
}

export default ProjectAside;