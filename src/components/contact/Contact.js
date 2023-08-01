import React from "react";
import "./Contact.css";
import { UilPhone, UilEnvelope, UilLocationPoint, UilMessage } from '@iconscout/react-unicons';

export const Contact = () => {
  return (
    <div id="Contact">
      <h3 className="title">CHAT WITH ME</h3>
      <div className="contactSection">
        <div className="contactLeft">
          <div className="contactDiv">
            <UilPhone className="icon"/>
            <div>
              <h5>Phone</h5>
              <p>+91-9500496675</p>
            </div>
          </div>
          <div className="contactDiv">
            <UilEnvelope className="icon"/>
            <div>
              <h5>Email</h5>
              <p>gokulramdevan@gmail.com</p>
            </div>
          </div>

          <div className="contactDiv">
            <UilLocationPoint className="icon" />
            <div>
              <h5>Location</h5>
              <p>Tiruppur,Tamil Nadu</p>
            </div>
          </div>
        </div>
        <div className="contactRight">
          <form
            className="contactForm"
            action="https://formsubmit.co/gokulramdevan@gmail.com"
            method="POST"
          >
            <div className="nameDiv">
              <div>
                <label htmlFor="">Name</label>
                <br />
                <input type="text" name="name" required />
              </div>
              <div>
                <label htmlFor="">Email</label>
                <br />
                <input type="text" name="email" required />
              </div>
            </div>
            <div className="msgDiv">
              <label htmlFor="">Message</label>
              <br />
              <textarea
                name="message"
                id=""
                cols="30"
                rows="10"
                required
              ></textarea>
            </div>
            <button className="btn sendBtn">Send
              <UilMessage/>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};
