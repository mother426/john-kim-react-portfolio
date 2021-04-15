import React from "react";
import { Row, Col } from "react-flexbox-grid";
import "./contactInfo.scss";
import pdf from '../../../assets/resume/johnkimresume2.pdf'

import { FaPortrait, FaGithub, FaLinkedin, FaMailBulk } from 'react-icons/fa';

const contactInfo = () => (
  <Row>
    <Col xs={12}>
      <Row center="xs">
        <Col xs={12} lg={3} className="contact__info">
          <div className="contact__info-box">
            <div>
              <a href="https://github.com/mother426" target='_blank' rel="noreferrer">
                <FaGithub size={44}/>
              </a>
            </div>
            <div>
              <p>Github</p>
            </div>
          </div>
        </Col>
        <Col xs={12} lg={3} className="contact__info">
        <div className="contact__info-box">
            <div>
              <a href={pdf}>
                <FaPortrait size={44}/>
              </a>
            </div>
            <div>
              <p>Resume</p>
            </div>
          </div>
        </Col>
        <Col xs={12} lg={3} className="contact__info">
        <div className="contact__info-box">
            <div>
              <a href="mailto:johnkimmsterr@gmail.com" target='_blank' rel="noreferrer">
                <FaMailBulk size={44}/>
              </a>
            </div>
            <div>
              <p>johnkimmsterr@gmail.com</p>
            </div>
          </div>
        </Col>
        <Col xs={12} lg={3} className="contact__info">
        <div className="contact__info-box">
            <div>
              <a href="https://www.linkedin.com/in/john-kim-50a446202" target='_blank' rel="noreferrer">
                  <FaLinkedin size={44}/>
              </a>
            </div>
            <div>
              <p>linkedIn</p>
            </div>
          </div>
        </Col>
      </Row>
    </Col>
  </Row>
);

export default contactInfo;
