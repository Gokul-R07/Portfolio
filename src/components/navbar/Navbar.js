import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="Navbar" data-aos="fade-right">
      <a href="#Home">Home</a>
      <a href="#About">About</a>
      <a href="#Skills">Skills</a>
      <a href="#Projects">Projects</a>
      <a href="#Contact">Contact</a>
    </div>
  );
};

export default Navbar;
