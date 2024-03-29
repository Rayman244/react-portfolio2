import React from "react";
import Project from "./Project/Project";
// import data from '../assets/Projects.json'
import WeatherDashboard from "../../../assets/imgs/proj-imgs/Weathe-Dashboard.png";
import GameGetter from "../../../assets/imgs/proj-imgs/home-page.png";
import Scheduler from "../../../assets/imgs/proj-imgs/WorkScheduler.png";
import Podcast411 from "../../../assets/imgs/proj-imgs/Podcast411-4.png";
import TG from "../../../assets/imgs/proj-imgs/TG_Pic.png";
const data = [
  {
    id: 1,
    title: "Weather Dashboard",
    img: WeatherDashboard,
    link: "https://rayman244.github.io/Weather-Dashboard/",
    repo: "https://github.com/Rayman244/Weather-Dashboard",
    desc: "This weather dashboard can help you plan at trip to basically anywhere your hearts desire. just type the name of the city in click search and let tha data load.",
  },
  {
    id: 2,
    title: "Work-Calender",
    img: Scheduler,
    link: "https://rayman244.github.io/Work-Calendar/",
    repo: "https://github.com/Rayman244/Work-Calendar",
    desc: "This week scheduel app is made with Bootstrap and jQuery with MomentJS to calculate time. Events will save to local storage when save button is pressed",
  },
  {
    id: 3,
    title: "Game Getter",
    img: GameGetter,
    link: "https://github.com/Rayman244/game-getter",
    repo: " https://rayman244.github.io/game-getter/",
    desc: "Find the best deal for the game you desire. this site leverages the RawG api as well as the cheapshark api to bring the best deal from all over the web. Get in the Game Now!",
  },
  {
    id: 4,
    title: "Team Generator",
    img: TG,
    link: "https://github.com/Rayman244/Team-Generator",
    repo: "https://github.com/Rayman244/Team-Generator",
    desc: "A Node.js command-line application that takes in information about employees on a team, then generates an HTML webpage that displays summaries for each person.",
  },
  {
    id: 5,
    title: "Podcast411",
    img: Podcast411,
    link: "https://github.com/Rayman244/Team-Generator",
    repo: "https://obscure-tor-30961.herokuapp.com",
    desc: "This awesome podcast site gets you information on podcasts. Powered by Listen Notes just search for a podcast or look around at the top podcasts list. Create an account today!",
  },
];

export default function Projects() {
  return (
    <div className="container">
      <h3 className="container my-3">Portfolio</h3>
      {data.map((proj) => {
        return (
          <Project
            title={proj.title}
            img={proj.img}
            link={proj.link}
            repo={proj.repo}
            desc={proj.desc}
            key={proj.id}
          />
        );
      })}
    </div>
  );
}
