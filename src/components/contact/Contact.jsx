import React, { useState } from "react";
import data from "../../data";
// importing icons
import MailIcon from "@mui/icons-material/Mail";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import email_sent from '../../assets/emailsent.svg'
// Importing gmail client
import emailjs from "@emailjs/browser";
import './contact.scss'
const Contact = () => {
  const { contact_gmail, contact_address } = data.contact;
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  //Lets define submit message method
  const handleSubmit = (event) => {
    event.preventDefault();
    if (fname === "" || lname === "" || email === "" || message === "") {
      alert("Fields cannot be empty!");
    } else {
      // send the message and get a callback with an error or details of the message that was sent
      emailjs
        .sendForm(
          "service_x8fnfgq",
          "template_kso22jk",
          event.target,
          "lc_aMvUX9huF1WT73"
        )
        .then(
          (result) => {
            console.log(result.text);
            alert("Message has been sent successfully!");
            window.location.reload();
          },
          (error) => {
            console.log(error.text);
            alert("Error Occurred!");
            window.location.reload();
          }
        );
    }
  };
  return (
    <div className="contact" id="contact">
      <div className="container">
        <div
          className="col"
        >
          <h1>Get in touch</h1>
          <p>
            I have a full time gig, but I enjoy doing freelance work on my spare
            time. Don't hesitate to reach out!
          </p>
          <br />
          <div className="contact_address_email_container">
            <div className="contact_address ">
              <div className="contact_used_icon">
                <LocationOnIcon />
              </div>
              <div className="contact_used_text">
                <h4>Address</h4>
                <div className="text-secondary">{contact_address}</div>
              </div>
            </div>
            <br />
            <div className="contact_email ">
              <div className="contact_used_icon">
                <MailIcon />
              </div>
              <div className="contact_used_text pl-2">
                <h4>Email</h4>
                <div className="text-secondary">{contact_gmail}</div>
              </div>
            </div>
          </div>
          <div
    
            className="sent_email_image_container"
          >
            <img src={email_sent} alt="" />
          </div>
        </div>
        <div
          className="col"
        >
          <div className="contact_fields">
            <h3 className="text-center">Message me</h3>
            <form
              action=""
              className="form "
              onSubmit={(e) => handleSubmit(e)}
            >
              <div className="contact_name">
                <div className="contact_input mr-2">
                  <label htmlFor="#fname">
                    First Name<span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                    type="text"
                    id="fname"
                    value={fname}
                    name="fname"
                    onChange={(e) => setFname(e.target.value)}
                  />
                </div>
                <div className="contact_input ml-2">
                  <label htmlFor="#lname">
                    Last Name<span style={{ color: "red" }}>*</span>
                  </label>
                  <input
                   
                    type="text"
                    id="lname"
                    value={lname}
                    name="lname"
                    onChange={(e) => setLname(e.target.value)}
                  />
                </div>
              </div>{" "}
              <br />
              <div className="contact_input">
                <label htmlFor="#email">
                  Email<span style={{ color: "red" }}>*</span>
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  name="email"
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>{" "}
              <br />
              <div className="contact_input">
                <label htmlFor="#message">
                  Message<span style={{ color: "red" }}>*</span>
                </label>
                <textarea
                  className="w-100"
                  name="message"
                  id="message"
                  cols="30"
                  rows="5"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                ></textarea>
              </div>{" "}
              <br />
              <div className="contact_input">
                <button type="submit">
                  Submit Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
