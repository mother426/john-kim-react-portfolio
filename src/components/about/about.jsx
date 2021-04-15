import React from "react";
import { Row, Col } from "react-flexbox-grid";
import "./about.scss";
import Title from "../ui-components/title/title";
import devPortrait from "../../assets/about/selfportraitsmall.png";

const about = () => (
  <div id="about">
    <div className="wrapper">
      <Title title="About Me" />
      <Row>
        <Col md={12} lg={4}>
          <div className="team__box flex-center">
            <img src={devPortrait} alt="person" />
            <div className="team__box-info">
              <p className="font15 weight800"></p>
              <p className="font12 weight500"></p>
            </div>
          </div>
        </Col>
        <Col md={12} lg={4}>
          <div className="team__info flex-center">
            <div>
              <h4 className="font32 weight800">A bit about me</h4>
              <p className="font16 weight500">
                A junior full-stack developer from Charlotte, NC. Dedicated to problem solving, best practices, and the life-long learning process of programming!
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  </div>
);

export default about;
