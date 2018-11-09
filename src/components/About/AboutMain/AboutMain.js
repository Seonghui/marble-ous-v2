import React, { Component } from "react";
import "./AboutMain.scss";
import Panel from '../../Common/Panel/Panel';

class AboutMain extends Component {
  render() {
    return (
      <div className="AboutMain">
        <div className="mainGif"></div>
        <div className="inner">
          <div className="row row-1">
            <div className="left">
              <div className="text">
                <h4>ABOUT EXHIBITION</h4>
                <p>우연에 의한 미술 기법인 ‘marbling’과 놀라움을 뜻하는 형용사 ‘marvelous’의 합성어로 ‘예측할 수 없는 놀라움’을 의미합니다. 빠르게 변화하는 시대에 적응하여 새롭고 놀라운 결과물을 만들어내는 디지털미디어디자인전공 학생들의 정체성을 표현했습니다. 로고는 마블링과 원형의 그래픽으로 구성됩니다. 각 구성요소는 작품의 성격을 표현 할 수 있는 4개의 키워드 (fun, insightful, experimental, practical)와 5가지 플랫폼 (VR/AR, Physical Computing, Motion Graphic, Mobile, Web)을 의미하며 이 두 요소의 조합은 각 작품의 서로 다른 아이덴티티를 형성합니다. 예측할 수 없는 과정을 거쳐 만들어진 85명의 전공 학생들의 놀라운 작품들을 이 자리에 소개합니다. 많은 격려와 응원 부탁드립니다.</p>
              </div>
              <div className="text">
                <h4>ABOUT DMD</h4>
                <p>우연에 의한 미술 기법인 ‘marbling’과 놀라움을 뜻하는 형용사 ‘marvelous’의 합성어로 ‘예측할 수 없는 놀라움’을 의미합니다. 빠르게 변화하는 시대에 적응하여 새롭고 놀라운 결과물을 만들어내는 디지털미디어디자인전공 학생들의 정체성을 표현했습니다. 로고는 마블링과 원형의 그래픽으로 구성됩니다. 각 구성요소는 작품의 성격을 표현 할 수 있는 4개의 키워드 (fun, insightful, experimental, practical)와 5가지 플랫폼 (VR/AR, Physical Computing, Motion Graphic, Mobile, Web)을 의미하며 이 두 요소의 조합은 각 작품의 서로 다른 아이덴티티를 형성합니다. 예측할 수 없는 과정을 거쳐 만들어진 85명의 전공 학생들의 놀라운 작품들을 이 자리에 소개합니다. 많은 격려와 응원 부탁드립니다.</p>
              </div>
            </div>
            <div className="right">
              <Panel title="LOCATION & DATE">
                경기도 성남시 분당구 양현로 322 코리아디자인센터 지하 1층 전시실 (야탑역 4번 출구 도보5분)
              </Panel>
            </div>
          </div>
          <div className="row row-2">
            <div className="left">
              <Panel title="ABOUT IDENTITY">
                ABOUT IDENTITY
              </Panel>
            </div>
            <div className="right">
              <div className="detail">

              </div>
            </div>
          </div>
          <div className="row row-3">
            <Panel title="PROFESSOR">
              PROFESSOR
            </Panel>
          </div>
        </div>
      </div>
    );
  }
}

export default AboutMain;