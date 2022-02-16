import React from "react";
import { Button } from "react-bootstrap";
export default function Contact(){
    return(<form className="container mt-3">
        <h3>Contact</h3>
              <div className="mb-3">
  <label className="form-label">Name</label>
  <input type="text" className="form-control" id="nameInput" placeholder="Pete Chow"/>
</div>
        <div className="mb-3">
  <label className="form-label">Email address</label>
  <input type="email" className="form-control" id="emailInput" placeholder="name@example.com"/>
</div>
<div className="mb-3">
  <label className="form-label">Message</label>
  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<div className="mb-3">
    <Button>Send</Button>
</div>

    </form>)
}