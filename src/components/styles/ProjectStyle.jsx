import styled from "styled-components";

const ProjectStyle = styled.div`
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

const ProjectDetail = styled.div`
  position: absolute;
  width: 55%;
  height: 90%;
  right: 5%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    position: relative;
    width: 90vw;
    height: 95vh;
    top: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 3vw;
  }
`;
const ProjectHead = styled.div`
  display: none;

  @media only screen and (max-width: 768px) {
    display: block;
    padding: 20px 0 20px 0;

    h1 {
      font-family: "Syncopate", sans-serif;
      font-size: 8vw;
    }
  }

  @media only screen and (max-width: 769px) and (max-height: 500px) {
    h1 {
      font-size: 6vh;
      margin: 0;
    }
  }
`;

const ProjectContent = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: center;

  @media only screen and (max-width: 768px) {
    height: 80%;
  }

  @media only screen and (max-width: 1000px) and (max-height: 500px) {
    flex-wrap: nowrap;
    overflow-x: scroll;
    justify-content: flex-start;

    ::-webkit-scrollbar {
      display: none;
    }
    -ms-overflow-style: none;
    scrollbar-width: none;
  }
`;

export { ProjectContent, ProjectDetail, ProjectHead, ProjectStyle };
