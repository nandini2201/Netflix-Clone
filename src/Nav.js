/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import "./Nav.css";

function Nav() {
  const [show, handleShow] = useState(false);
  const history = useHistory();
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {
      window.removeEventListener("scroll", null);
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_black"}`}>
      <img
        onClick={() => history.push("/")}
        className="nav_logo"
        src="https://brand.netflix.com/static/assets/icons/netflix_logo.svg"
        alt="Netflix logo"
      />
      <img
        onClick={() => history.push("/profile")}
        className="nav_avatar"
        src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
        alt="Netflix logo"
      />
    </div>
  );
}

export default Nav;
