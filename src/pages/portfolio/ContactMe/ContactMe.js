import React, { useState } from "react";
import "./styles.scss";

import { firestore } from "./../../../firebase/Firebase";
import Map from "../../../components/portfolio/GoogleMaps/GoogleMaps";
const ContactMe = () => {
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
      <div id="contentWrap">
        <form id="contactForm" className="" onSubmit={handleFormSubmit}>
          <div className="d-flex justify-content-between ">
            <input
              required
              type="text"
              name="senderName"
              placeholder="Name"
              value={senderName}
              onChange={(e) => setSenderName(e.target.value)}
            />
            <input
              required
              type="email"
              name="senderEmail"
              placeholder="Email"
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
            placeholder="Message"
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
