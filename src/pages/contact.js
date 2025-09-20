import React from "react";
import "./contact.css";
const Contact = () => {
  return (
    <div className="contact-blok page-container">
      <div className="contact-container">
        <h1 class="animated-title">
          <span class="fade">Men bilan bog'laning</span>
          <span class="fade">hamkorlik qiling</span>
          <span class="fade">ishlang</span>
          <span class="fade">o'rganing</span>
        </h1>
        <a className="telegram" href="https://t.me/ruzmorex" target="_blank">
          telegram
        </a>
        <a
         target="_blank"
          className=" gmail"
          href="https://mail.google.com/mail/?view=cm&fs=1&to=ruslanbegmurodov777@gmail.com"
        >
          gmail
        </a>
      </div>
    </div>
  );
};

export default Contact;
