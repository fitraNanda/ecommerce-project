import React from "react";
import "./Newsletter.scss";
import SendIcon from "@mui/icons-material/Send";

const Newsletter = () => {
  return (
    <div className="newsletter-container">
      <h1 className="title">Newsletter</h1>
      <div className="desc">Get timely updates from your favorite product</div>
      <div className="input-container">
        <input placeholder="Your Email" type="text" className="input" />
        <button className="button">
          <SendIcon />
        </button>
      </div>
    </div>
  );
};

export default Newsletter;
