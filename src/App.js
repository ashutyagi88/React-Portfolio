import "./App.css";
import About from "./components/pages/About";
import Front from "./components/pages/Front";
import Skills from "./components/pages/Skills";
import styled from "styled-components";
import Contacts from "./components/pages/Contacts";
import Projects from "./components/pages/Projects";
import Social from "./components/pages/Social";
import { useEffect } from "react";

function App() {
  useEffect(() => {
    document.title = "Ashutosh Tyagi";
  }, []);

  return (
    <div className="App">
      <Front></Front>
      <About></About>
      <Skills></Skills>
      <Projects></Projects>
      <Contacts></Contacts>
      <Social></Social>
    </div>
  );
}

const Content = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default App;
