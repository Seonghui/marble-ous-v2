import React, { Component } from "react";
import ProjectList from '../ProjectList/ProjectList';
import ProjectGrid from "../ProjectGrid/ProjectGrid";
import './ProjectMain.scss';

class ProjectMain extends Component {
  state = {
    xPos: 0,
    yPos: 0,
    xScroll: 0,
    yScroll: 0,
  };

  componentDidMount() {
    this.mainInterval = setInterval(() => {
      this.MainScroll();
    }, 10);
  }
  componentWillUnmount() {
    clearInterval(this.mainInterval);
  }

  MainScroll = () => {
    const xScroll = this.container.scrollLeft;
    const yScroll = this.container.scrollTop;
    const { xPos, yPos } = this.state;
    this.container.scrollTop = yPos+yScroll;
    this.container.scrollLeft = xPos+xScroll;
  }

  onMouseMove = (e) => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    const x = (e.clientX - w / 2) * 0.015;
    const y = (e.clientY - h / 2) * 0.015;

    this.setState({
      yPos: y,
      xPos: x,
    })
  }
  
  render() {
    return (
      <div
        className="ProjectMain" 
        onMouseMove={this.onMouseMove}
        ref={ref => {
          this.container = ref;
        }}
      >
        <ProjectGrid />
        <ProjectList data={this.props.data}/>
      </div>
    );
  }
}

export default ProjectMain;