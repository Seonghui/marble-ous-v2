import React, { Component } from 'react';
import styled from 'styled-components';
import "./ProjectMap.scss";

class ProjectMap extends Component {
  createDot = () => {
    const dot = this.props.data.map((res, index) => {
      return <Dot
        key={index}
        coX={res.coX}
        coY={res.coY}
      />
    })
    return dot;
  }

  render() {
    const { gridX, gridY } = this.props;
    const xPos = parseInt(gridX * 188 / 2200, 10) - 5;
    const yPos = parseInt(gridY * 188 / 2200, 10) - 5;
    const Pos = styled.div`
      top: ${yPos}px;
      left: ${xPos}px;
    `; 
    return (
      <div className="ProjectMap">
        <div className="line horizon"></div>
        <div className="line vertical"></div>
        <span className="letter fun">F</span>
        <span className="letter practical">P</span>
        <span className="letter insightful">I</span>
        <span className="letter experimental">E</span>
        <div className="dots">
          {this.createDot()}
        </div>
        <Pos className="Pos"></Pos>
      </div>
    )
  }
}

class Dot extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.res !== this.props.res;
  }
  render() {
    const { coX, coY } = this.props;
    const Dot = styled.div`
      top: ${coY * 14}px;
      left: ${coX * 14}px;
    `;
    return (
      <Dot className="Dot"></Dot>
    )
  }
}
export default ProjectMap;