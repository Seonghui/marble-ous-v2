import React, { Component } from "react";
// import styled from 'styled-components';
import "./DesignerItem.scss";

class DesignerItem extends Component {
  createItem = () => {
      const item = this.props.data.map((res, index) => {
        return <Item
          key={index}
          id={index}
          nameKr={res.nameKr}
          index={res.index}
        />
      })
      return item;
  }

  render() {
    const { data } = this.props;
    console.log(data);
    
    return (
      this.createItem()
    );
  }
}

class Item extends Component {
  render() {
    const { nameKr } = this.props;
    return (
      <div className="Item">
        {/* <DesignerImage className="designerImage"/> */}
        <h3>{nameKr}</h3>
      </div>
    );
  }
}

export default DesignerItem;

