import React,{useState} from "react";
import { Button } from "react-bootstrap";
import { validateEmail } from "../../../utils/helpers";
export default function Contact(){
  const [email,setEmail] = useState('')
  const [name,setName] = useState('')
  const [message, setMessage]= useState('')
  const [errorMessage, setErrorMessage] = useState('');


  const handleInputChange = (e) => {
    const { target } = e;
    const inputType = target.name;
    const inputValue = target.value;

    if (inputType === 'email') {
      setEmail(inputValue);
    } else if (inputType === 'name') {
      setName(inputValue);
    } else {
      setMessage(inputValue);
    }
  };
  const handleFormSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(email) || !name) {
      setErrorMessage('Email or username is invalid');
     
      return;
      
    }
    
    if(!message){
      setErrorMessage('Message is invalad')
    }
   
      alert(`Thankyou ${name}, I will be in touch soon!`);
    setEmail('')
    setName('')
    setMessage('')
  }
    
    return(<form className="container mt-3">
        <h3>Contact</h3>
              <div className="mb-3">
  <label className="form-label">Name</label>
  <input type="text" className="form-control" id="nameInput" placeholder="Pete Chow" name="name" onChange={handleInputChange}/>
</div>
        <div className="mb-3">
  <label className="form-label">Email address</label>
  <input type="email" className="form-control" id="emailInput" placeholder="name@example.com" name="email" onChange={handleInputChange}/>
</div>
<div className="mb-3">
  <label className="form-label">Message</label>
  <textarea className="form-control" id="messageInput" rows="3" name="message" onChange={handleInputChange}></textarea>
</div>
<div className="mb-3">
    <Button type="button" onClick={handleFormSubmit}>Send</Button>
</div> {errorMessage && (
        <div>
          <p className="error-text">{errorMessage}</p>
        </div>
      )}

    </form>)
}