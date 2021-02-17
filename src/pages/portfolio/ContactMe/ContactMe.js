import React, { useState } from "react";
import "./styles.scss";

import { firestore } from "./../../../firebase/Firebase";

const ContactMe = () => {
  const [senderName, setSenderName] = useState(null);
  const [senderEmail, setSenderEmail] = useState(null);
  const [subject, setSubject] = useState(null);
  const [message, setMessage] = useState(null);
  const [successMsg, setSuccessMsg] = useState(null);

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
      <div className="row">
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
          {successMsg && <span>{successMsg}</span>}
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
