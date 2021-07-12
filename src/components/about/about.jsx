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
            <img src={devPortrait} alt="Portrait of developer John Kim" />
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
                A junior full-stack developer based in New York City. Dedicated to problem solving, best practices, and the life-long learning process of programming! Recent graduate of UNC Charlotte communications program and UNC Charlotte's Full-Stack Development bootcamp. Primarily working with JavaScript, React.js, Node.js, Mongo.DB, SQL Databases, various front-end CSS frameworks, but always eager to learn more. Excited to be able to share my skills and experience as well as further them. Let's make something great together!
              </p>
            </div>
          </div>
        </Col>
      </Row>
    </div>
  </div>
);

export default about;
