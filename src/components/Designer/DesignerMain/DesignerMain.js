import React, { Component } from "react";
import DesignerList from '../DesignerList/DesignerList';
import "./DesignerMain.scss";

class DesignerMain extends Component {
  render() {
    return (
      <div className="DesignerMain">
        <DesignerList data={this.props.data}/>
      </div>
    );
  }
}

export default DesignerMain;