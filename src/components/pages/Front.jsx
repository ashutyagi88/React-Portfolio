import React from "react";
import styled from "styled-components";
import { FrontStyle } from "../styles/FrontStyle";

function Front() {
  return (
    <FrontStyle>
      <NameImg src="https://res.cloudinary.com/tyagiashu88/image/upload/v1663076481/Untitled_200_100_px_2_xtwlig.png"></NameImg>
      <h2>Front End Developer</h2>
    </FrontStyle>
  );
}

const NameImg = styled.img``;

export default Front;
