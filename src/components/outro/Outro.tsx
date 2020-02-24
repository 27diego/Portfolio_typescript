import React, { useState } from "react";
import "./Outro.scss";

import linkedin from "../../images/brand logos/linkedin.svg";
import gmail from "../../images/brand logos/gmail.svg";
import github from "../../images/brand logos/github.svg";

export const Outro: React.FC = () => {
  const [form, setForm] = useState({
    name: "",
    subject: "",
    email: "",
    message: ""
  });

  const change = (type: string, value: string) => {
    console.log(type);
    switch (type) {
      case "name":
        setForm({ ...form, name: value });
        break;
      case "subject":
        setForm({ ...form, subject: value });
        break;
      case "email":
        setForm({ ...form, email: value });
        break;
      case "message":
        setForm({ ...form, message: value });
        break;
      default:
        return;
    }
  };

  console.log(form);

  return (
    <div className="Container--Outro">
      <div className="container--form">
        <form className="form">
          <div className="form__header">Contact Me</div>
          <input
            value={form.name}
            onChange={e => change("name", e.target.value)}
            className="form__name"
            placeholder="Name"
            type="text"
            required
          />
          <input
            value={form.subject}
            onChange={e => change("subject", e.target.value)}
            className="form__subject"
            placeholder="Subject"
            type="text"
            required
          />
          <input
            value={form.email}
            onChange={e => change("email", e.target.value)}
            className="form__email"
            placeholder="Email"
            type="email"
            required
          />
          <input
            value={form.message}
            onChange={e => change("message", e.target.value)}
            className="form__message"
            placeholder="Message"
            type="text"
            required
          />

          <div className="form__outro">
            I am interested in freelancing opportunities and would love to help
            you on your next project! Send me a message and we’ll go from there
            ….
          </div>

          <button className="btn--Oform">OK!</button>
        </form>
      </div>
      <div className="container--links">
        <div className="links links--1">Quick Links</div>
        <div className="links__icon--container links__icon--linkedin">
          <img
            src={linkedin}
            className="links__icon links__icon--linkedin"
            alt="linkedin logo"
          />
        </div>
        <div className="links__icon--container links__icon--gmail">
          <img
            src={gmail}
            className="links__icon links__icon--gmail"
            alt="gmail logo"
          />
        </div>
        <div className="links__icon--container links__icon--github">
          <img
            src={github}
            className="links__icon links__icon--github"
            alt="github logo"
          />
        </div>
        <div className="links__icon--container links__icon--my">
          <div className="links__icon--my">More about me</div>
        </div>
        <div className="links links--2">Or View My Work</div>
      </div>
    </div>
  );
};
