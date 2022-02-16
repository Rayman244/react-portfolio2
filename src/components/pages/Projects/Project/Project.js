import React from "react";
import { Button } from "react-bootstrap";



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