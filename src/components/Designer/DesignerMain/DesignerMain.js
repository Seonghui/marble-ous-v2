import React, { Component } from "react";
import DesignerList from '../DesignerList/DesignerList';
import Panel from '../../Common/Panel/Panel';
import "./DesignerMain.scss";

class DesignerMain extends Component {
  render() {
    return (
      <div className="DesignerMain">
        <div className="inner">
        <div className="content">
          <DesignerList data={this.props.data}/>
        </div>
        <div className="aside">
            <Panel title="CHARACTER"/>
            <Panel title="PLATFORM"/>
          </div>
        </div>
      </div>
    );
  }
}

export default DesignerMain;