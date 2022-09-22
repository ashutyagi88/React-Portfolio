import React from "react";
import styled from "styled-components";
import { Card, ListItem, ListItemText, Avatar } from "@mui/material";
import { AiFillHtml5 } from "react-icons/ai";
import { SiJavascript, SiRedux } from "react-icons/si";
import { FaCss3Alt, FaReact, FaPython } from "react-icons/fa";
import Navbar from "../elements/Navbar";
import {
  SkillDetail,
  SkillsStyle,
  DevelopHead,
  ProgramHead,
} from "../styles/SkillStyle";

function Skills() {
  return (
    <SkillsStyle id="skill">
      <Navbar skills={true}></Navbar>
      <SkillDetail>
        <SkillCard
          sx={{
            backgroundColor: "#181818",
            color: "#f2f2f2",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            borderRadius: "1.2rem",
          }}
        >
          <DevelopCard
            sx={{
              backgroundColor: "#181818",
              color: "#f2f2f2",
              borderRight: "1px white solid",
            }}
          >
            <DevelopHead>
              <img
                src="https://res.cloudinary.com/tyagiashu88/image/upload/v1663228168/coding_4_vfz2yq.png"
                style={{ filter: "grayscale(1)" }}
              ></img>
              <h3>Development</h3>
              <span>Skills</span>
            </DevelopHead>
            <ListItem
              sx={{
                display: "flex",
                flexWrap: "wrap",
                alignItems: "center",
                justifyContent: "center",
                height: "45%",
                "@media only screen and (max-width: 479px)": { height: "80%" },
                "@media only screen and (max-width: 769px) and (max-height: 420px)":
                  {},
              }}
            >
              <ListText>
                <AiFillHtml5 style={{ fontSize: "2rem" }}></AiFillHtml5>
                <h2>HTML5</h2>
              </ListText>
              <ListText>
                <FaCss3Alt style={{ fontSize: "2rem" }}></FaCss3Alt>
                <h2>CSS3</h2>
              </ListText>
              <ListText>
                <SiJavascript style={{ fontSize: "2rem" }}></SiJavascript>
                <h2>JavaScript</h2>
              </ListText>
              <ListText>
                <FaReact style={{ fontSize: "2rem" }}></FaReact>
                <h2>React</h2>
              </ListText>
              <ListText>
                <SiRedux style={{ fontSize: "2rem" }}></SiRedux>
                <h2>Redux</h2>
              </ListText>
            </ListItem>
          </DevelopCard>
          <ProgramCard sx={{ backgroundColor: "#181818", color: "#f2f2f2" }}>
            <ProgramHead>
              <img
                src="https://res.cloudinary.com/tyagiashu88/image/upload/v1663228168/web-programming_2_tfnjdz.png"
                style={{ filter: "grayscale(1) " }}
              ></img>
              <h3>Programming</h3>
              <span>Skills</span>
            </ProgramHead>
            <ListItem
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                height: "45%",
                "@media only screen and (max-width: 768px)": {
                  height: "80%",
                  flexDirection: "row",
                  height: "30%",
                  justifyContent: "space-evenly",
                },
              }}
            >
              <ListText>
                <img src="https://res.cloudinary.com/tyagiashu88/image/upload/v1663228167/image_qmvv6o.png"></img>
                <h2>C/C++</h2>
              </ListText>
              <ListText>
                <FaPython style={{ fontSize: "2.5rem" }}></FaPython>
                <h2>Python</h2>
              </ListText>
            </ListItem>
          </ProgramCard>
        </SkillCard>
      </SkillDetail>
    </SkillsStyle>
  );
}

const SkillCard = styled(Card)`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Josefin Sans", sans-serif;
  text-align: center;

  img {
    left: 0;
    top: 0;
    width: 4rem;
    height: 4rem;
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    padding-top: 15px;
  }

  @media only screen and (max-width: 769px) and (max-height: 420px) {
    flex-direction: row;
    padding: 0;
  }
`;

const DevelopCard = styled(Card)`
  width: 50%;
  height: 95%;
  position: relative;
  border-radius: 0 !important;
  font-family: "Syncopate", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  h3 {
    font-size: 1.4rem;
  }

  @media only screen and (max-width: 768px) {
    border-right: none !important;
    width: 95%;
    height: 100%;
    justify-content: flex-start;
    padding-bottom: 40px;
    border-bottom: 1px solid #f2f2f2 !important;

    svg {
      font-size: 1.2vw;
    }
  }

  @media only screen and (min-width: 769px) and (max-width: 979px) {
    width: 85%;
    justify-content: center;

    h3 {
      font-size: 2.3vw;
    }

    svg {
      font-size: 4vw !important;
    }

    h2 {
      font-size: 2vw !important;
    }
  }

  @media only screen and (max-width: 769px) and (max-height: 420px) {
    svg {
      font-size: 1.2vh;
    }

    h3 {
      font-size: 5vh !important;
    }
    span {
      font-size: 5vh;
    }
    h2 {
      font-size: 3vh !important;
    }
    padding-top: 8.5%;
    border-right: 1px solid #f2f2f2 !important;
  }
`;

const ProgramCard = styled(Card)`
  width: 50%;
  height: 95%;
  border-radius: 0 !important;
  position: relative;
  font-family: "Syncopate", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;

  h3 {
    font-size: 1.4rem;
  }

  @media only screen and (max-width: 768px) {
    border-right: none !important;
    width: 95%;
    height: 100%;
    justify-content: flex-start;
    border-bottom: 1px solid #f2f2f2 !important;

    svg {
      font-size: 1.2vw;
    }
  }

  @media only screen and (min-width: 769px) and (max-width: 979px) {
    width: 85%;
    justify-content: center;

    h3 {
      font-size: 2.3vw;
    }

    svg {
      font-size: 4vw !important;
    }

    h2 {
      font-size: 2vw !important;
    }
  }
  @media only screen and (max-width: 769px) and (max-height: 420px) {
    svg {
      font-size: 1.2vh;
    }

    h3 {
      font-size: 5vh !important;
    }
    span {
      font-size: 5vh;
    }
    h2 {
      font-size: 3vh !important;
    }
    border-bottom: none !important;
  }
`;

const ListText = styled(ListItemText)`
  text-align: center;
  font-size: 100px;
  width: 50%;
  padding-top: 5%;

  h2 {
    font-size: 1.2rem;
    font-family: "Josefin Sans", sans-serif;
  }

  img {
    height: 2.5rem;
    width: 2.5rem;
    left: 0;
    top: 0;
  }

  @media only screen and (max-width: 768px) {
    width: 25vw;

    h2 {
      font-size: 5vw;
    }
  }

  @media only screen and (max-width: 769px) and (max-height: 420px) {
    padding-top: 10%;
    width: 20vh;
  }
`;
export default Skills;
