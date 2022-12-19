import React from "react";
import Typography from "@mui/material/Typography";
import Link from "@mui/material/Link";
import { height } from "@mui/system";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="social-media-links">
          <i className="fa-brands fa-facebook fa-3x"></i>
          <i className="fa-brands fa-twitter fa-3x"></i>
          <i className="fa-brands fa-instagram fa-3x"></i>
        </div>
        <p>World Travel &copy; 2022, All Rights Reserved</p>
      </footer>
    </div >
  );
};

export default Footer;
