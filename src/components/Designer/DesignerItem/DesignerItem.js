import React, { Component } from "react";
import styled from 'styled-components';
import "./DesignerItem.scss";

class DesignerItem extends Component {
  createItem = () => {
      const { id } = this.props;
      const item = this.props.data.map((res, index) => {
        return <Item
          key={index}
          currentId={id}
          nameKr={res.nameKr}
          index={index}
        />
      })
      return item;
  }

  render() {
    return (
      this.createItem()
    );
  }
}

class Item extends Component {
  render() {
    const { currentId, index, nameKr } = this.props;

    const DesignerImg = styled.div`
      background-image: url('/images/project/${currentId}/d${index + 1}_a.png');
      background-size: 190px;
      background-repeat: no-repeat;
      background-position: center;

      &:hover {
        background-image: url('/images/project/${currentId}/d${index + 1}_b.png');
      }
    `;

    return (
      <div className="Item">
        <DesignerImg className="designerImg" />
        <h3>{nameKr}</h3>
      </div>
    );
  }
}

export default DesignerItem;

