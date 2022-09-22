import { Card } from "@mui/material";
import React from "react";
import styled from "styled-components";
import {
  ProjectContent,
  ProjectDetail,
  ProjectHead,
  ProjectStyle,
} from "../styles/ProjectStyle";
import Navbar from "../elements/Navbar";
import ProjectCardItem from "../elements/ProjectCardItem";
import projects from "../../assets/data";

function Projects() {
  return (
    <ProjectStyle id="project">
      <Navbar projects={true}></Navbar>
      <ProjectDetail>
        <ProjectCard
          sx={{
            backgroundColor: "#181818",
            color: "#f2f2f2",
            boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px",
            borderRadius: "1.2rem",
          }}
        >
          <ProjectHead>
            <h1>Projects</h1>
          </ProjectHead>
          <ProjectContent>
            {projects.map((project) => (
              <ProjectCardItem
                key={project.id}
                name={project.name}
                description={project.description}
                link={project.link}
                image={project.image}
              ></ProjectCardItem>
            ))}
          </ProjectContent>
        </ProjectCard>
      </ProjectDetail>
    </ProjectStyle>
  );
}

const ProjectCard = styled(Card)`
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Josefin Sans", sans-serif;
  text-align: center;

  @media only screen and (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;

export default Projects;
