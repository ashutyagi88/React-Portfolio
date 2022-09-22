import React from "react";
import { FontStyle, NavStyle } from "../styles/NavbarStyle";

function Navbar({ about, skills, projects, contact, social }) {
  return (
    <NavStyle>
      <a href="#about">
        <FontStyle fontColor={about}>About</FontStyle>
      </a>
      <a href="#skill">
        <FontStyle fontColor={skills}>Skills</FontStyle>
      </a>
      <a href="#project">
        <FontStyle fontColor={projects}>Projects</FontStyle>
      </a>
      <a href="#contact">
        <FontStyle fontColor={contact}>Contact</FontStyle>
      </a>
      <a href="#social">
        <FontStyle fontColor={social}>Social</FontStyle>
      </a>
    </NavStyle>
  );
}

export default Navbar;
