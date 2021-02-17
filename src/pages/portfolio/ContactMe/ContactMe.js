import React from "react";
import "./styles.scss";

const ContactMe = () => {
  return (
    <div className="container contactPage">
      <h1 className="text-center main-title py-3">Contact Me</h1>
      <div className="row">
        <form id="contactForm" lassName="col-6 ">
          <div className="d-flex justify-content-between ">
            <input type="text" placeholder="Name" />
            <input type="text" placeholder="Email" />
          </div>
          <input type="text" placeholder="Subject" />
          <textarea rows="8" placeholder="Message" />
          <button type="submit">Send</button>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
