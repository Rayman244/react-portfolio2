import React from "react";
import resume from "../../../assets/webDevResume 2.pdf";
import { Button } from "react-bootstrap";
import "./ResumeStyles.css";

const styles = {
  card: {
    width: "fit-content",
  },
};

export default function Resume() {
  return (
    <div className="container">
      <h3 className="m-3">Resume</h3>
      <div className="d-md-flex justify-content-md-end">
        <Button target="_blank" href={resume}>
          Download
        </Button>
      </div>
      <div className="container d-flex flex-wrap">
        <div className="container mt-5" style={styles.card}>
          <h5>Front-End Proficiencies</h5>
          <ul className="list-group list-group-flush" >
            <li className="list-group-item">HTML</li>
            <li className="list-group-item">CSS</li>
            <li className="list-group-item">JavaScript</li>
            <li className="list-group-item">jQuery</li>
            <li className="list-group-item">React</li>
            <li className="list-group-item">Bootstrap</li>
            <li className="list-group-item">D.O.M Manipulation</li>
            <li className="list-group-item">JSON</li>
            <li className="list-group-item">Mobile Responsiveness</li>
          </ul>
        </div>
        <div className="container mt-5 text-end" style={styles.card}>
          <h5>Back-End Proficiencies</h5>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">API's</li>
            <li className="list-group-item">Node</li>
            <li className="list-group-item">Express</li>
            <li className="list-group-item">MySql, Sequalize</li>
            <li className="list-group-item">MongoDB, Mongoose</li>
            <li className="list-group-item">Express</li>
            <li className="list-group-item">REST</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
