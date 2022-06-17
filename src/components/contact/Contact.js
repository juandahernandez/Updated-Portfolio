import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div class="social-container">
      <div className="social-btns">
        <a
          className="btn facebook"
          href="https://www.facebook.com/juan.hernandez.1276/"
          target="_blank"
          rel="noreferrer"
        >
          <i class="fa-brands fa-facebook-square"></i>
        </a>
        <a
          className="btn twitter"
          href="https://www.linkedin.com/in/juan-david-hernandez-ospina-b93535235/"
          target="_blank"
          rel="noreferrer"
        >
          <i class="fa-brands fa-linkedin"></i>
        </a>
        <a
          className="btn instagram"
          href="https://github.com/juandahernandez"
          target="_blank"
          rel="noreferrer"
        >
          <i class="fa-brands fa-github-square"></i>
        </a>
      </div>
    </div>
  );
};

export default Contact;
