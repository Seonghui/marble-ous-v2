import React, { Component } from "react";
import "./ProjectItem.scss";
import { Link } from "react-router-dom";
import styled from 'styled-components';

class ProjectItem extends Component {
  
  shouldComponentUpdate(nextProps, nextState) {
    return nextProps.res !== this.props.res;
  }
  
  render() {
    const { id, titleKr, designer, coX, coY, platform } = this.props;

    const Thumbnail = styled.div`
      &.active{
        background-image: url('/images/project/${id}/team_symbol.gif') !important;
        background-size: 134px !important;
        background-repeat: no-repeat;
        background-position: center;
        
        &:hover {
          background-image: url('/images/project/${id}/thumbnail.png') !important;
          background-size: 114px !important;
        }
      }
    `;

    const Box = styled.div`
      position: absolute;
      top: ${coY * 220}px;
      left: ${(coX * 220) - 75}px;
    `;

    return (
      <Box className="ProjectItem">
        <Link to={`/content/${id}`}>
        <div className="circle">
          <svg>
            <path className={`svg-circle ${platform[0]==='1' ? 'on' : ''}`} d="M34.5,19.1c0,0,15.7-13.1,40.4-13.1s40.4,13.1,40.4,13.1" />
            <path className={`svg-circle ${platform[1]==='1' ? 'on' : ''}`} d="M115.3,19.1c0,0,17,10.4,25,34.1c8,23.7,0,42.7,0,42.7" />
            <path className={`svg-circle ${platform[2]==='1' ? 'on' : ''}`} d="M140.3,96c0,0-4.7,19.5-24.8,34.4c-20.1,14.9-40.6,13.2-40.6,13.2" />
            <path className={`svg-circle ${platform[3]==='1' ? 'on' : ''}`} d="M74.9,143.6c0,0-23.2,0.4-40.7-13.3S12.2,104,9.5,96.1" />
            <path className={`svg-circle ${platform[4]==='1' ? 'on' : ''}`} d="M9.5,96.1c0,0-7.5-20,0.1-42.8s25-34.1,25-34.1" />
          </svg>
          <div className="dummy"></div>
          <Thumbnail className="thumbnail" />
        </div>
          <div className="title">
            <h4>{titleKr}</h4>
            <div className="name">
              <span>{ designer[0] !== undefined ? designer[0].nameKr : '' }</span>
              <span>{ designer[1] !== undefined ? designer[1].nameKr : '' }</span>
              <span>{ designer[2] !== undefined ? designer[2].nameKr : '' }</span>
            </div>
          </div>
        </Link>
      </Box>
    );
  }
}

export default ProjectItem;