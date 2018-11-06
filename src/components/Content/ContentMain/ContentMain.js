import React, { Component } from 'react';
import Panel from '../../Common/Panel/Panel';
import ContentSlider from '../ContentSlider/ContentSlider';
import ContentText from '../ContentText/ContentText';
import ContentDesigner from '../ContentDesigner/ContentDesigner';
import "./ContentMain.scss";

class ContentMain extends Component {

  render() {
    const { data, id } = this.props;

    return (
      <div className="ContentMain">
        <ContentSlider />
        <div className="inner">
          <div className="content">
            <ContentText
              titleKr={data.titleKr}
              titleEng={data.titleEng}
              descKr={data.descKr}
              descEng={data.descEng} />
            <ContentDesigner data={data.designer} id={id} />
          </div>
          <div className="aside">
            <Panel title="CHARACTER">
              <h1>뭐쩌고</h1>
            </Panel>
            <Panel title="PLATFORM">
              <h2>저쩌고</h2>
            </Panel>
          </div>
        </div>
      </div>
    );
  }
}

export default ContentMain;