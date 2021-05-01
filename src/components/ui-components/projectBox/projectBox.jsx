import React from "react";

import "./projectBox.scss";

const projectBox = (props) => (
  <>
    <a href={props.link} target='_blank' rel="noreferrer">
      <div className="portfolio__box">
        <img src={props.preview} alt="project" />
        <div className="portfolio__hover-info flex-center">
          <div className="text-center">
            <p className="font30 weight800">{props.title}</p>
            <p className="font12 weight500">{props.tag}</p>
          </div>
        </div>
      </div>
    </a>
    <div>
      <p><a href={props.repo} target='_blank' rel="noreferrer">See this app's repository!</a></p>
    </div>
  </>
);

export default projectBox;
