import React from "react";
import { Card, Button } from "@mui/material";
import Navbar from "../elements/Navbar";
import styled from "styled-components";
import { AboutDetail, AboutLinks, AboutStyle } from "../styles/AboutStyle";

function About() {
  return (
    <AboutStyle id="about">
      <Navbar about={true}></Navbar>
      <AboutDetail>
        <img
          src="https://res.cloudinary.com/tyagiashu88/image/upload/v1663079057/coding_rkpqbq.png"
          className="coder_img"
        ></img>
        <AboutCard
          sx={{
            backgroundColor: "#181818",
            color: "#f2f2f2",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            borderRadius: "1.2rem",
          }}
        >
          <h1>Hi, I'm Ashutosh. Nice to meet you.</h1>
          <h4>
            I design and code beautifully simple things, and I love what I do. I
            am hardworking, innovative and organised individual. I am passionate
            towards my work. I am a skillful individual in Front End Development
            with a eagerness to learn new things
          </h4>
          <AboutLinks>
            <a
              href="https://drive.google.com/file/d/1Qw4m3ChHefojte4oAKt4nH3JU6Ogehzb/view?usp=sharing"
              target="_blank"
            >
              <Button
                variant="outlined"
                sx={{
                  color: "#f2f2f2",
                  borderColor: "#f2f2f2",
                  fontFamily: "Josefin Sans, sans-serif",
                  "&:hover": {
                    borderColor: "#f2f2f2",
                    backgroundColor: "#f2f2f2",
                    color: "#181818",
                    fontStyle: "none",
                  },
                  "@media only screen and (max-width: 479px)": {
                    width: "25vw",
                    fontSize: "2.5vw",

                    ".view": { paddingRight: "3px" },
                  },
                }}
              >
                <span className="view">View</span>
                <span>Resume</span>
              </Button>
            </a>
          </AboutLinks>
        </AboutCard>
      </AboutDetail>
    </AboutStyle>
  );
}

const AboutCard = styled(Card)`
  height: 100%;
  padding: 0 10%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Josefin Sans", sans-serif;
  text-align: center;

  h1 {
    padding-bottom: 2%;
  }

  h4 {
    margin-bottom: 5%;
    line-height: 2vw;
  }

  @media only screen and (max-width: 768px) {
    h1 {
      font-size: 6vw;
    }
    h4 {
      line-height: 4vw;
    }
  }

  @media only screen and (min-width: 780px) and (max-width: 1023px) {
    h4 {
      line-height: 3vw;
    }
  }

  @media only screen and (min-width: 1024px) and (max-width: 1199px) {
    h4 {
      line-height: 4vw;
    }
  }
`;

export default About;
