import React, { useState, useEffect } from "react";
import "./styles.scss";

import { firestore } from "./../../../firebase/Firebase";
import Map from "../../../components/portfolio/GoogleMaps/GoogleMaps";
import {
  phoneIcon,
  emailIcon,
  LinkedInIcon,
  GitHubIcon,
} from "../../../components/portfolio/Icons/AllIcons";

const ContactMe = ({ makeActivePage }) => {
  useEffect(() => {
    makeActivePage("contact");
  });
  const [senderName, setSenderName] = useState("");
  const [senderEmail, setSenderEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");
  const [successMsg, setSuccessMsg] = useState("");

  const resetForm = () => {
    setSenderName("");
    setSenderEmail("");
    setSubject("");
    setMessage("");
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    const formData = { senderName, senderEmail, subject, message };
    firestore
      .collection("mailbox")
      .add(formData)
      .then(() => {
        console.log("Message successfully added to the db!");
        setSuccessMsg(
          "Thank you for your message! I will get back to you soon!"
        );
        resetForm();
      })
      .catch((err) => {
        console.error("Error adding message to firestore db: ", err);
      });
  };

  return (
    <div className="container contactPage">
      <h1 className="text-center main-title py-3">Contact Me</h1>
      <div id="contactIconWrap">
        <a href="tel:510-396-6601">{phoneIcon}</a>
        <a href="mailto:chuot2008@gmail.com?subject = Hello%20Trinh%20Gliedt&body =Message%20to%20Trinh">
          {emailIcon}
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.linkedin.com/in/trinhgliedt/"
        >
          {LinkedInIcon}
        </a>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://github.com/trinhgliedt"
        >
          {GitHubIcon}
        </a>
      </div>
      <div id="contentWrap">
        <form id="contactForm" className="" onSubmit={handleFormSubmit}>
          <div className="d-flex justify-content-between ">
            <input
              required
              type="text"
              name="senderName"
              placeholder="Your name"
              value={senderName}
              onChange={(e) => setSenderName(e.target.value)}
            />
            <input
              required
              type="email"
              name="senderEmail"
              placeholder="Your email"
              value={senderEmail}
              onChange={(e) => setSenderEmail(e.target.value)}
            />
          </div>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={subject}
            onChange={(e) => setSubject(e.target.value)}
          />
          <textarea
            required
            rows="8"
            name="message"
            placeholder="If you have any request or question, feel free to call, email me or connect with me on LinkedIn. You can also send me a message using this form!"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button type="submit">Send</button>
          <p>{successMsg && <span>{successMsg}</span>}</p>
        </form>
        <div>
          <Map />
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
