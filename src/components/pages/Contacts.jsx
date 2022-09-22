import { Button, Card, TextField } from "@mui/material";
import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Navbar from "../elements/Navbar";
import emailjs from "emailjs-com";
import {
  ContactData,
  ContactDetails,
  ContactHead,
  ContactStyle,
} from "../styles/ContactStyle";

function Contacts() {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !mobile || !email || !message) {
      alert("Enter all Fields");
    } else {
      const emailContent = {
        name: name,
        mobile: mobile,
        email: email,
        message: message,
      };
      emailjs.send(
        "service_eotiy3o",
        "template_0lob4g5",
        emailContent,
        "Ufjn9Z_Sk9NixYpub"
      );

      setEmail("");
      setMessage("");
      setMobile("");
      setName("");
    }
  };

  return (
    <ContactStyle id="contact">
      <Navbar contact={true}></Navbar>
      <ContactDetails>
        <ContactCard
          sx={{
            backgroundColor: "#181818",
            color: "#f2f2f2",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            borderRadius: "1.2rem",
          }}
        >
          <ContactHead>
            <h1>Get In Touch</h1>
          </ContactHead>
          <ContactData>
            <InputText
              variant="outlined"
              label="Name"
              name="name"
              sx={{
                width: "60%",
                "& input": {
                  textTransform: "capitalize",
                },
              }}
              value={name}
              onChange={(e) => setName(e.target.value)}
            ></InputText>
            <InputText
              variant="outlined"
              label="Mobile No"
              name="mobile"
              inputMode="number"
              sx={{ width: "60%" }}
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            ></InputText>
            <InputText
              variant="outlined"
              label="Email"
              name="email"
              inputMode="email"
              sx={{ width: "60%" }}
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            ></InputText>
            <InputText
              variant="outlined"
              label="Message"
              sx={{ width: "60%" }}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              name="message"
            ></InputText>
            <Button
              variant="contained"
              sx={{
                color: "#181818",
                borderColor: "#f2f2f2",
                backgroundColor: "#f2f2f2",
                fontFamily: "Josefin Sans, sans-serif",
                "&:hover": {
                  borderColor: "#f2f2f2",
                  backgroundColor: "#f2f2f2",
                  color: "#181818",
                  fontStyle: "none",
                  opacity: "0.8",
                },
              }}
              onClick={handleSubmit}
            >
              Send
            </Button>
          </ContactData>
        </ContactCard>
      </ContactDetails>
    </ContactStyle>
  );
}

const ContactCard = styled(Card)`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "Syncopate", sans-serif;
  text-align: center;

  @media only screen and (max-width: 769px) and (max-height: 500px) {
    flex-direction: row;
  }
`;

const InputText = styled(TextField)({
  "& input": {
    color: "#f2f2f2 !important",
    textAlign: "center",
  },
  "& .MuiFormLabel-root": {
    width: "100%",
    color: "#f2f2f2 !important",
    fontFamily: "Rubik, sans-serif",
  },
  "& .css-1sumxir-MuiFormLabel-root-MuiInputLabel-root": {
    transform: "translate(4.1vw, -9px) scale(0.75) !important",
  },
  "& .MuiOutlinedInput-root": {
    "& fieldset": {
      textAlign: "center",
      border: "3px solid #f2f2f2",
    },
    "&:hover fieldset": {
      textAlign: "center",
      border: "3px solid #f2f2f2",
    },
    "&.Mui-focused fieldset": {
      textAlign: "center",
      border: "3px solid #f2f2f2",
    },
  },
  "@media only screen and (max-width: 768px)": {
    "& .css-1sumxir-MuiFormLabel-root-MuiInputLabel-root": {
      transform: "translate(6.6vw, -9px) scale(0.75) !important",
    },
  },
});

export default Contacts;
