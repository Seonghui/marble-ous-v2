import React, { Component } from "react";
import "./ContentDesigner.scss";

class ContentDesigner extends Component {
  render() {
    const { nameKr, nameEng, email, website } = this.props;
    return (
      <div className="ContentDesigner">
        {nameKr}
        {nameEng}
        {email}
        {website}
        
      </div>
    );
  }
}

export default ContentDesigner;