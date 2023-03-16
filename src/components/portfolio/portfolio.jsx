import React from "react";
import Masonry from "react-masonry-css";

import "./portfolio.scss";

import doggleSite from "../../assets/portfolio/project01/doggle.png";
import fitnessTracker from "../../assets/portfolio/project02/fitnessTracker.png";
import eyeReadApp from "../../assets/portfolio/project03/eyeReadApp.png";
import gameSecrets from "../../assets/portfolio/project04/gamesecrets.png";
import weatherDashboard from "../../assets/portfolio/project05/weatherDashboard.png";
import noteTaker from "../../assets/portfolio/project06/noteTaker.png";

import Title from "../ui-components/title/title";
import ProjectBox from "../ui-components/projectBox/projectBox";

class Portfolio extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      projects: [
        {
          id: "1",
          preview: doggleSite,
          title: "Doggle App",
          tag: "Front-end JS application with REST API's",
          link: "https://accoon.github.io/Dog-Breed-Finder-and-Rescue/",
          repo: "https://github.com/mother426/Dog-Breed-Finder-and-Rescue"
        },
        {
          id: "2",
          preview: fitnessTracker,
          title: "Fitness Tracker",
          tag: "Full-Stack Application with Mongoose middleware",
          link: "https://fitness-tracker-0421.herokuapp.com",
          repo: "https://github.com/mother426/fitness-tracker-mongodb"
        },
        {
          id: "3",
          preview: eyeReadApp,
          title: "eyeRead App",
          tag: "Full-Stack Application with Handlebars.js and MySQL",
          link: "https://eyeread-app.herokuapp.com/login",
          repo: "https://github.com/mother426/eye-read"
        },
        {
          id: "4",
          preview: gameSecrets,
          title: "Game Secrets",
          tag: "Full-stack CMS style application with MongoDB and React",
          link: "https://game-secrets.herokuapp.com",
          repo: "https://github.com/mother426/game-secrets",
        },
        {
          id: "5",
          preview: weatherDashboard,
          title: "Weather Dashboard",
          tag: "Front-end JS application with REST API",
          link: "https://mother426.github.io/weather-dashboard-APIs-js/",
          repo: "https://github.com/mother426/weather-dashboard-APIs-js"
        },
        {
          id: "6",
          preview: noteTaker,
          title: "Express Note Taker",
          tag: "Back-end Application with Express middleware",
          link: "https://powerful-shelf-37149.herokuapp.com",
          repo: "https://github.com/mother426/express-note-taker"
        },
      ],
      filterResult: null,
      pickedFilter: "all",
      filterMenuActive: false,
      pickedFilterDropdown: "NEWEST"
    };
  }

  componentDidMount() {
    this.filterGallery("all");
  }

  filterGallery = (target) => {
    let projectsArr = [...this.state.projects];
    let result;

    if (target !== "all") {
      result = projectsArr.filter((project) => project.tag === target);
    } else {
      result = projectsArr;
    }

    this.setState({ filterResult: result, pickedFilter: target, pickedFilterDropdown: "NEWEST" });
  };

  render() {
    let projectsRender = null;
    if (this.state.filterResult) {
      projectsRender = this.state.filterResult.map((project) => (
        <ProjectBox preview={project.preview} key={project.id} title={project.title} tag={project.tag} link={project.link} repo={project.repo} desc={project.desc}/>
      ));
    }
    const portfolioBreakpoints = {
      default: 3,
      1100: 3,
      700: 2,
      500: 1,
    };

    return (
      <div id="portfolio">
        <div className="wrapper">
          <Title title="My Work" />
          <Masonry breakpointCols={portfolioBreakpoints} className="my-masonry-grid">
            {projectsRender}
          </Masonry>
        </div>
      </div>
    );
  }
}


export default Portfolio;