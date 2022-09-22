import { Card } from "@mui/material";
import React from "react";
import styled from "styled-components";
import Navbar from "../elements/Navbar";
import {
  BsFacebook,
  BsTwitter,
  BsGithub,
  BsInstagram,
  BsWhatsapp,
} from "react-icons/bs";
import { GrMail } from "react-icons/gr";
import {
  SocialDetails,
  SocialHandles,
  SocialList,
  SocialStyle,
} from "../styles/SocialStyle";

function Social() {
  return (
    <SocialStyle id="social">
      <Navbar social={true}></Navbar>
      <SocialDetails>
        <SocialCard
          sx={{
            backgroundColor: "#181818",
            color: "#f2f2f2",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            borderRadius: "1.2rem",
          }}
        >
          <h1 className="socialhead">Social</h1>
          <SocialHandles>
            <SocialList className="twitter">
              <a href="https://twitter.com/tyagiashu14" target="_blank">
                <BsTwitter></BsTwitter>
              </a>
            </SocialList>
            <SocialList className="facebook">
              <a href="https://www.facebook.com/ashutyagi8699/" target="_blank">
                <BsFacebook></BsFacebook>
              </a>
            </SocialList>
            <SocialList className="instagram">
              <a href="https://www.instagram.com/tyagi_ashu99/" target="_blank">
                <BsInstagram></BsInstagram>
              </a>
            </SocialList>
          </SocialHandles>
          <SocialHandles>
            <SocialList className="github">
              <a href="https://github.com/ashutyagi88" target="_blank">
                <BsGithub></BsGithub>
              </a>
            </SocialList>
            <SocialList className="telephone">
              <a href="https://wa.me/+918171342438" target="_blank">
                <BsWhatsapp></BsWhatsapp>
              </a>
            </SocialList>
            <SocialList className="mail">
              <a href="#contact">
                <GrMail></GrMail>
              </a>
            </SocialList>
          </SocialHandles>
        </SocialCard>
      </SocialDetails>
    </SocialStyle>
  );
}

const SocialCard = styled(Card)`
  height: 100%;
  width: 100%;
  font-family: "Syncopate", sans-serif;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export default Social;
