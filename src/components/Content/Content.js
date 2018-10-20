import React, { Component } from 'react';

class Content extends Component {
  render() {
    const { data } = this.props;
    console.log(data);
    return (
      <div className="Content">
        <h2>title: {data.titleKr}</h2>
        <p>{data.descKr}</p>
      </div>
    );
  }
}

export default Content;