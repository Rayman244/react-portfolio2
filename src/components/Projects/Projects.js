import React from "react";
import Project from "./Project/Project";
// import data from '../assets/Projects.json'
import WeatherDashboard from "../../assets/proj-imgs/Weathe-Dashboard.png"
import GameGetter from "../../assets/proj-imgs/home-page.png"
import Scheduler from '../../assets/proj-imgs/WorkScheduler.png'
import Podcast411 from '../../assets/proj-imgs/Podcast411-4.png'
import TG from '../../assets/proj-imgs/TG_Pic.png'
const data =[
    {
      title: "Weather Dashboard",
      img: "assets/proj-imgs/Weathe-Dashboard.png",
      link: WeatherDashboard,
      repo: "https://github.com/Rayman244/Weather-Dashboard",
      desc:"This weather dashboard can help you plan at trip to basically anywhere your hearts desire. just type the name of the city in click search and let tha data load."
    },
    {
        title: "Work-Calender",
        img: Scheduler,
        link: "https://rayman244.github.io/Work-Calendar/",
        repo: "https://github.com/Rayman244/Work-Calendar",
      desc:"This week scheduel app is made with Bootstrap and jQuery with MomentJS to calculate time. Events will save to local storage when save button is pressed"
    }, 
    {
        title: "Game Getter",
        img: GameGetter,
        link: "https://github.com/Rayman244/game-getter",
      repo: " https://rayman244.github.io/game-getter/",
      desc:"Find the best deal for the game you desire. this site leverages the RawG api as well as the cheapshark api to bring the best deal from all over the web. Get in the Game Now!"
    }, 
    {
        title: "Team Generator",
        img: TG,
        link: "https://github.com/Rayman244/Team-Generator",
      repo: "https://github.com/Rayman244/Team-Generator",
      desc:"A Node.js command-line application that takes in information about employees on a team, then generates an HTML webpage that displays summaries for each person."
    },
    {
        title: "Podcast411",
      img: Podcast411,
      link: "https://github.com/Rayman244/Team-Generator",
      repo: "https://obscure-tor-30961.herokuapp.com",
      desc:"This awesome podcast site gets you information on podcasts. Powered by Listen Notes just search for a podcast or look around at the top podcasts list. Create an account today!"
    }
  ]

export default function Projects() {
    return <div>
        <h3 className="container mt-3">Portfolio</h3>
    {data.map((proj)=>{
      return <Project title={proj.title} img={proj.img} link={proj.link} repo={proj.repo} desc={proj.desc}/> 
    })}
    
    </div>
}
