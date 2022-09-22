import styled from "styled-components";

const ContactStyle = styled.div`
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
const ContactDetails = styled.div`
  position: absolute;
  width: 55%;
  height: 90%;
  right: 5%;
  display: flex;
  align-items: center;
  justify-content: center;

  h1 {
    padding: 0 20px;
  }

  @media only screen and (max-width: 768px) {
    position: relative;
    width: 90vw;
    height: 80vh;
    top: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    font-size: 3vw;
  }

  @media only screen and (max-width: 769px) and (max-height: 500px) {
    height: 95%;
  }
`;

const ContactHead = styled.div`
  h1 {
    /* font-size: 7vw; */
    padding: 0;
  }

  @media only screen and (max-width: 768px) {
    h1 {
      font-size: 7vw;
    }
  }

  @media only screen and (min-width: 980px) {
    h1 {
      font-size: vw;
    }
  }

  @media only screen and (max-width: 896px) and (max-height: 500px) {
    h1 {
      font-size: 8vh;
    }
  }
`;

const ContactData = styled.div`
  display: flex;
  flex-direction: column;
  height: 75%;
  width: 100%;
  align-items: center;
  justify-content: space-evenly;

  @media only screen and (max-width: 769px) and (max-height: 500px) {
    height: 95%;
  }
`;

export { ContactData, ContactDetails, ContactHead, ContactStyle };
