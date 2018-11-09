import React, { Component } from "react";
import "./ContentDesigner.scss";

class ContentDesigner extends Component {
  createItem = () => {
    const { id } = this.props;
    const item = this.props.data.map((res, index) => {
      return <Item
        key={index}
        index={index}
        nameKr={res.nameKr}
        nameEng={res.nameEng}
        email={res.email}
        currentId={id}
      />
    })
    return item;
  }

  render() {
    return (
      <div className="ContentDesigner">
        <h4>DESIGNERS</h4>
        {this.createItem()}
      </div>
    );
  }
}

class Item extends Component {
  render() {
    const { index, nameKr, nameEng, currentId, email } = this.props;

    return(
      <div className="Item">
        <img src={`/images/project/${currentId}/d${index + 1}_a.png`} alt="designer" width="80" height="80"/>
        <div className="itemText">
          <p>{nameKr} {nameEng}</p>
          <p>{email}</p>
        </div>
        
      </div>
    )
  }
}

export default ContentDesigner;