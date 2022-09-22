import styled from "styled-components";

const NavStyle = styled.div`
  position: absolute;
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  padding-left: 2.5%;
  font-size: 2rem;
  top: 12%;
  left: 6%;
  scroll-behavior: smooth;

  a {
    cursor: pointer;
    text-decoration: none;
  }

  @media only screen and (max-width: 768px) {
    display: none;
  }

  @media only screen and (min-width: 769px) and (max-width: 979px) {
    top: 15vw;
    left: 2%;
    font-size: 2.5vw;
  }

  @media only screen and (min-width: 780px) and (max-width: 1023px) {
    top: 15vw;
    left: 2%;
    font-size: 2.5vw;
  }

  @media only screen and (min-width: 1024px) and (max-width: 1199px) {
    top: 15vw;
    left: 2%;
    font-size: 2.5vw;
  }

  @media only screen and (max-height: 640px) {
    top: 15vh;
    left: 2%;
    font-size: 4vh;
  }

  @media only screen and (max-height: 490px) {
    top: 10vh;
    left: 2%;
    font-size: 3.5vh;
  }

  @media only screen and (max-height: 400px) {
    top: 6vh;
    left: 2%;
  } ;
`;

const FontStyle = styled.h2`
  padding: 5% 0;
  font-family: "Syncopate", sans-serif;
  color: ${(props) => (props.fontColor ? "#181818" : "#E0E2DB")};

  @media only screen and (max-height: 400px) {
    padding: 4%;
  }

  @media only screen and (max-height: 300px) {
    padding: 4.5vh;
  } ;
`;

export { FontStyle, NavStyle };
