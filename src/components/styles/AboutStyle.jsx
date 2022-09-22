import styled from "styled-components";

const AboutStyle = styled.div`
  scroll-snap-align: start;
  scroll-snap-stop: always;
  position: relative;
  width: 100%;
  height: 100%;
  background-color: #f2f2f2;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const AboutDetail = styled.div`
  position: absolute;
  width: 55%;
  height: 70%;
  top: 4%;
  right: 10%;

  img {
    position: relative;
    left: 75%;
    top: 1.5%;
    width: 20%;
    height: 30%;
  }

  @media only screen and (max-width: 768px) {
    position: relative;
    width: 70vw;
    height: 70vh;
    top: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 3vw;

    img {
      position: relative;
      left: 0%;
      top: 0.5%;
      height: 30vw;
      width: 30vw;
    }
  }

  @media only screen and (min-width: 769px) and (max-width: 979px) {
    width: 55vw;
    top: 0;

    img {
      width: 20vw;
      left: 32vw;
    }
  }

  @media only screen and (min-width: 780px) and (max-width: 1023px) {
    img {
      width: 18vw;
      left: 35vw;
    }
  }

  @media only screen and (min-width: 1024px) and (max-width: 1199px) {
    img {
      width: 12vw;
      left: 40vw;
    }
  }

  @media only screen and (max-width: 769px) and (max-height: 420px) {
    .coder_img {
      display: none;
    }

    height: 85%;
    font-size: 3.2vh;
  }
`;

const AboutLinks = styled.div`
  a {
    text-decoration: none;
  }

  .view {
    padding-right: 5px;
  }
`;

export { AboutDetail, AboutLinks, AboutStyle };
