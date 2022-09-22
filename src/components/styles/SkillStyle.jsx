import styled from "styled-components";

const SkillsStyle = styled.div`
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

const SkillDetail = styled.div`
  position: absolute;
  width: 55%;
  height: 90%;
  right: 5%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    position: relative;
    left: 75%;
    top: 1.5%;
    width: 20%;
    height: 30%;
  }

  @media only screen and (max-width: 768px) {
    position: relative;
    width: 90vw;
    height: 90vh;
    top: 0;
    right: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 3vw;
  }

  @media only screen and (min-width: 769px) and (max-width: 979px) {
    width: 60vw;
    font-size: 2vw;
  }
`;

const DevelopHead = styled.div`
  height: 10%;

  img {
    padding: 10px;
  }

  @media only screen and (max-width: 768px) {
    padding-top: 10px;
    height: 33%;
    h3 {
      font-size: 5vw;
    }
    img {
      width: 15vw;
      height: 8vh;
    }
  }

  @media only screen and (min-width: 769px) and (max-width: 979px) {
    height: 25%;
    padding-bottom: 10%;
    img {
      width: 10vw;
      height: 12vh;
    }
  }

  @media only screen and (max-width: 769px) and (max-height: 420px) {
    padding: 0;
    img {
      width: 15vh;
      height: 15vh;
    }
  } ;
`;

const ProgramHead = styled.div`
  height: 10%;

  img {
    padding: 10px;
  }
  @media only screen and (max-width: 768px) {
    padding-top: 10px;
    height: 33%;
    h3 {
      font-size: 5vw;
    }
    img {
      width: 13vw;
      height: 7vh;
    }
  }

  @media only screen and (min-width: 769px) and (max-width: 979px) {
    height: 25%;
    padding-bottom: 10%;
    img {
      width: 10vw;
      height: 12vh;
    }
  }

  @media only screen and (max-width: 769px) and (max-height: 420px) {
    img {
      width: 15vh;
      height: 15vh;
    }
  } ;
`;

export { SkillDetail, SkillsStyle, DevelopHead, ProgramHead };
