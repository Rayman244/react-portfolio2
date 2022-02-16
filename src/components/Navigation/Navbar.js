import React from "react";
import { Button } from "react-bootstrap";

export default function Navigator() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light ">
      <div className="container-fluid ">
        <a className="navbar-brand" href="/">
          Ray Hewitt
        </a>
        <Button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </Button>
        <div className="collapse navbar-collapse text-end" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-link active" aria-current="page" href="/">
              About Me
            </a>
            <a className="nav-link" href="/">
              Portfolio
            </a>
            <a className="nav-link" href="/">
              Contact
            </a>
            <a className="nav-link" href="/">Resume</a>
          </div>
        </div>
      </div>
    </nav>
  );
}
