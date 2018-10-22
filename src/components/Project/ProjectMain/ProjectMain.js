import React, { Component } from "react";
import ProjectList from '../ProjectList/ProjectList';
import ProjectGrid from "../ProjectGrid/ProjectGrid";
import './ProjectMain.scss';

class ProjectMain extends Component {
  state = {
    delta: 0,
    seta: 0,
    pageX: 0,
    pageY: 0
  };

  componentDidMount() {
    const { delta, seta, pageX, pageY } = this.state;
    const x = seta + pageX;
    const y = delta + pageY;
    console.log(pageX);
    console.log(pageY);
    window.requestAnimationFrame(this.onMouseScroll);
  }

  onMouseScroll = () => {
    const pageX = this.container.scrollLeft;
    const pageY = this.container.scrollTop;
    this.setState({
      pageX,
      pageY,
    })
  }

  onMouseMove = (e) => {
    
    const w = window.innerWidth;
    const h = window.innerHeight;
    const x = (e.clientX - w / 2) * 0.015;
    const y = (e.clientY - h / 2) * 0.015;

    this.setState({
      delta: y,
      seta: x,
    })
  }
  
  render() {
    
    
    // window.scrollTo(, );

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

