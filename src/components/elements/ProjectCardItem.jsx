import { Button } from "@mui/material";
import React from "react";
import "../styles/ProjectCardItem.css";

function ProjectCardItem({ link, name, description, image }) {
  return (
    <section class="cards">
      <article class="card card--1">
        <div
          class="card__img"
          style={{ backgroundImage: `url("${image}")` }}
        ></div>
        <a href={link} class="card_link" target="_blank">
          <div
            class="card__img--hover"
            style={{ backgroundImage: `url("${image}")` }}
          ></div>
        </a>
        <div class="card__info">
          <span class="card__category">{name}</span>
          <h3 class="card__title">{description}</h3>
          <span class="card__by">
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
            >
              {" "}
              <a href={link} class="visit_link" target="_blank">
                Visit Page
              </a>
            </Button>
          </span>
        </div>
      </article>
    </section>
  );
}

export default ProjectCardItem;
