import React from "react";
// import stylePort from '../css/portfolio.module.css';
import "../css/portfolio.css";
import ProjectCard from "./ProjectCard";

export default function Portfolio() {
  return (
    <div className="container-fluid">
      <div className="mx-5 my-4">
        <h2 className="fw-bold">Portfolio</h2>
        <hr className="w-100 my-3 border-2" />
      </div>
      <div className="row d-flex justify-content-center">
        <ProjectCard
          title="POS Web App with Order Consolidation Functionality"
          content="MERN | Redux | JavaScript | Material UI | GraphQL x Apollo Server"
          bgImgClass="flip-img-pos-order-consolidator-app" // TODO: to upload image and change file path
          GitHubLink="https://github.com/jouriena11/pos-order-consolidator"
          deployApp="https://post-order-consolidator.herokuapp.com/"
        />
        <ProjectCard
          title="Chat Support"
          content="Node.js | Express.js | MySql | Socket.io | JavaScript"
          bgImgClass="flip-img-chat"
          GitHubLink="https://github.com/jouriena11/chat-support"
          deployApp="https://chat-support-999.herokuapp.com/"
        />
        <ProjectCard
          title="Movie Search Engine"
          content="HTML | CSS | Bootstrap | JavaScript | jQuery | APIs"
          bgImgClass="flip-img-movie-search"
          GitHubLink="https://github.com/E73707/Movie-search-engine"
          deployApp="https://e73707.github.io/Movie-search-engine/"
        />
        <ProjectCard
          title="Tech Blog"
          content="HTML | CSS | Bootstrap | JavaScript | Express.js | MySQL"
          bgImgClass="flip-img-tech-blog"
          GitHubLink="https://github.com/jouriena11/tech-blog-mvc"
          deployApp="https://tech-blog-999.herokuapp.com/"
        />
        <ProjectCard
          title="PWA Text Editor"
          content="JavaScript | Express.js | Webpack | CodeMirror | IndexedDB"
          bgImgClass="flip-img-pwa-text-editor"
          GitHubLink="https://github.com/jouriena11/text-editor-PWA"
          deployApp="https://jt-pwa-text-editor.herokuapp.com/"
        />
        <ProjectCard
          title="Scheduler Calendar App"
          content="JavaScript | HTML | CSS | localStorage"
          bgImgClass="flip-img-pwa-scheduler-calendar-app"
          GitHubLink="https://github.com/jouriena11/W5-challenge-scheduler-calendar-app"
          deployApp="https://jouriena11.github.io/W5-challenge-scheduler-calendar-app/"
        />
        <ProjectCard
          title="Weather Forecast App"
          content="JavaScript | HTML | CSS"
          bgImgClass="flip-img-pwa-weather-forecast-app"
          GitHubLink="https://github.com/jouriena11/weather-forecast-by-city-dashboard"
          deployApp="https://jouriena11.github.io/weather-forecast-by-city-dashboard/"
        />
      </div>
    </div>
  );
}
