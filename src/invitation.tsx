import React, { useState } from "react";
import { ContactUs } from "./contactUs";

import "./invitation.css";

const Invitation = () => {
  const [show, setShow] = useState(false);
  const handleClick = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };
  return (
    <div className="outerBox">
      <div className="innerBox">
        <h2 className="invited">You are Invited</h2>
        <p className="join">to join</p>
        <div className="usOuter">
          <h1 className="us">ERIN </h1>
          <h1 className="us">& </h1>
          <h1 className="us">CORRINE</h1>
        </div>
        <p className="weddingDay">on their wedding day</p>

        <div className="outerDate">
          <h5 className="when">Date :</h5>
          <p className="date">Saturday, 17th September 2022</p>
        </div>
        <div className="outerTime">
          <h5 className="when">Time :</h5>
          <p className="time">11h00 Onwards</p>
        </div>

        <h4 className="location">Location</h4>
        <div className="outerWhere">
          <p className="where">Dream Familia Farm, Philadelphia, Cape Farms </p>
          <p className="where">~Location sent with invitation~</p>
        </div>

        <div className="outerDress">
          <h5 className="dress">Dress :</h5>
          <p className="style">Smart Casual</p>
        </div>

        <h5 className="note">Please Note :</h5>
        <p className="event">This will be a NO hard liquor event</p>

        <button
          className="rsvpButton"
          onClick={() => {
            handleClick();
          }}
        >
          Click here to RSVP
        </button>
        <div className="modal" style={{ display: show ? "flex" : "none" }}>
          <div className="modal-content">
            <span
              onClick={() => {
                handleClose();
              }}
              className="close"
            >
              &times;
            </span>
            <ContactUs />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Invitation;
