import React from "react";
import "./contact.css";
import contactimg from "./leftimg.png";

export default function Contact() {
  return (
    <>
      <div className="part">
        <div className="part1">
          <h2>Get in Touch</h2>
          <form className="form">
            <label htmlFor="Name">Full Name</label>
            <br />
            <input type="text" placeholder="Name" />
            <br />
            <label htmlFor="Email"> Email Address</label>
            <br />
            <input type="text" name="" id="" placeholder="Email" />
            <br />
            <label htmlFor="subject">Subject</label>
            <br />
            <input type="text" placeholder="Subject" />
            <br />
            <label htmlFor="message">Message</label>
            <br />
            <input type="text" placeholder="Message" /> <br />
            <button className="btn2">Send Message</button>
          </form>
        </div>
        <div className="part2">
          <img className="contactimg" src={contactimg} alt="" />
        </div>
      </div>
    </>
  );
}
