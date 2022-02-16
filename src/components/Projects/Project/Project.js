import React from "react";
import { Button } from "react-bootstrap";
// import WeatherDashboard from "../../../assets/proj-imgs/Weathe-Dashboard.png"
// import GameGetter from "../../../assets/proj-imgs/home-page.png"
// import Scheduler from '../../../assets/proj-imgs/WorkScheduler.png'
// import Podcast411 from '../../../assets/proj-imgs/Podcast411-4.png'
// import TG from '../../../assets/proj-imgs/TG_Pic.png'


export default function Project ({title,img,link,repo,desc}) {
    return(<div className="card" >
    <img className="card-img-top" src={img} alt="card-img"/>
    <div className="card-body">
      <h5 className="card-title">{title}</h5>
      <p className="card-text">{desc}</p>
      <Button href={repo} className='m-2' target='_blank'>Repository</Button>
      
      <Button href={link} className="m-2" target='_blank'>Deployed</Button>
    </div>
  </div>)
}