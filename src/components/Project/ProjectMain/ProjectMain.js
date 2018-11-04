import React, { Component } from 'react';
import ProjectList from '../ProjectList/ProjectList';
import ProjectGrid from '../ProjectGrid/ProjectGrid';
import './ProjectMain.scss';

class ProjectMain extends Component {
  state = {
    xPos: 0,
    yPos: 0,
  };

  componentDidMount() {
    // 메인 마우스 스크롤
    // this.mainInterval = setInterval(() => {
    //   this.mainScroll();
    // }, 10);

    this.subInterval = setInterval(() => {
      // 충돌 감지
      this.detectItem();
    }, 2000);
  }
  componentWillUnmount() {
    clearInterval(this.mainInterval);
    clearInterval(this.subInterval);
  }

  detectItem = () => {
    const upLeftX = this.upLeft.getBoundingClientRect().left;
    const upLeftY = this.upLeft.getBoundingClientRect().top;
    const upRightX = this.upRight.getBoundingClientRect().left;
    const downLeftY = this.downLeft.getBoundingClientRect().top;

    for(let i = 0; i <= 25; i++) {
      const team = document.getElementsByClassName('ProjectItem')[i];
      const thumbnail = document.getElementsByClassName('thumbnail')[i];
      const teamX = team.getBoundingClientRect().left + team.offsetWidth;
      const teamY = team.getBoundingClientRect().top + team.offsetHeight;
      if (upLeftX <= teamX && teamX <= upRightX && upLeftY <= teamY && teamY <= downLeftY) {
        team.classList.add('active');
        thumbnail.classList.add('active');
      } else {
        team.classList.remove('active');
        thumbnail.classList.remove('active');
      }
    }
  };

  mainScroll = () => {
    const xScroll = this.container.scrollLeft;
    const yScroll = this.container.scrollTop;
    const { xPos, yPos } = this.state;
    this.container.scrollTop = yPos + yScroll;
    this.container.scrollLeft = xPos + xScroll;
  };

  onMouseMove = e => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    const x = (e.clientX - w / 2) * 0.02;
    const y = (e.clientY - h / 2) * 0.02;

    this.setState({
      yPos: y,
      xPos: x,
    });
  };

  render() {

    return (
      <div
        className="ProjectMain"
        onMouseMove={this.onMouseMove}
        ref={ref => {
          this.container = ref;
        }}
      >
        <div
          ref={ref => {
            this.upRight = ref;
          }}
          className="upRightFlag"
        />
        <div
          ref={ref => {
            this.upLeft = ref;
          }}
          className="upLeftFlag"
        />
        <div
          ref={ref => {
            this.downLeft = ref;
          }}
          className="downLeftFlag"
        />

        <ProjectGrid />
        <ProjectList data={this.props.data} />
      </div>
    );
  }
}

export default ProjectMain;