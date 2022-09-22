import styled from "styled-components";

const FrontStyle = styled.div`
  scroll-snap-align: start;
  scroll-snap-stop: always;
  width: 100%;
  height: 100%;
  background-color: #f2f2f2;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h2 {
    font-family: "Syncopate", sans-serif;
    font-size: 1.5rem;
    text-align: center;
    padding: 0 2%;
  }

  @media only screen and (max-width: 479px) {
    margin: auto;

    img {
      width: 80vw;
    }

    h2 {
      font-size: 4.5vw;
    }
  }
`;

export { FrontStyle };
