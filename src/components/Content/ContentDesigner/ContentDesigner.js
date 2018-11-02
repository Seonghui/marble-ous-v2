import React, { Component } from "react";
import "./ContentDesigner.scss";

class ContentDesigner extends Component {
  render() {
    const { data } = this.props;
    return (
      <div className="ContentDesigner">
        {data[0].nameKr}
        {data[0].nameEng}
        {data[0].email}
        {data[0].website}
        
      </div>
    );
  }
}

export default ContentDesigner;