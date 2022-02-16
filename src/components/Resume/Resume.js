import React from "react";
import resume from "../../assets/webDevResume 2.pdf";
import { Button } from "react-bootstrap";
export default function Resume() {
  return (
    <div className="container">
      <h3 className="m-3">Resume</h3>
      <div className="d-md-flex justify-content-md-end">
        <Button target="_blank" href={resume}>Download</Button>
      </div>

      <div className="container row mt-5">
        <h5>Front-End Proficiencies</h5>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">An item</li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
          <li className="list-group-item">A fourth item</li>
          <li className="list-group-item">And a fifth one</li>
        </ul>
      </div>
      <div className="container row mt-5 text-end">
        <h5>Back-End Proficiencies</h5>
        <ul className="list-group list-group-flush">
          <li className="list-group-item">An item</li>
          <li className="list-group-item">A second item</li>
          <li className="list-group-item">A third item</li>
          <li className="list-group-item">A fourth item</li>
          <li className="list-group-item">And a fifth one</li>
        </ul>
      </div>
    </div>
  );
}
