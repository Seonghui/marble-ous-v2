import React, { Component } from "react";
import "./ContentText.scss";

class ContentText extends Component {
  render() {
    const { titleKr, titleEng, descKr, descEng } = this.props;
    return (
      <div className="ContentText">
        <div className="titles">
          <h1>{titleKr}</h1>
          <span>{titleEng}</span>
        </div>
        <div className="desc">
          <h4>DESCRIPTION</h4>
          <p>{descKr}</p>
          <p>{descEng}</p>
        </div>
      </div>
    );
  }
}

export default ContentText;