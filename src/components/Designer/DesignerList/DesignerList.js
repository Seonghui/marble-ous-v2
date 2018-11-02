import React, { Component } from "react";
import DesignerItem from '../DesignerItem/DesignerItem';
import "./DesignerList.scss";

class DesignerList extends Component {

  renderDesignerItem = () => {
    const designerItem = this.props.data.map((res, index) => {
      return <DesignerItem
      key={index}
      id={index}
      data={res.designer}
      />
    })
    return designerItem;
  }

  render() {
    return (
      <div className="DesignerList">
        { this.renderDesignerItem() }
      </div>
    );
  }
}

export default DesignerList;