import React from "react";
import Projects from "./Projects/Projects";
import "../sass/index.scss";

const IndexPage = () => {
  return (
    <main style={{ height: "100vh" }}>
      <title>Portafolio</title>
      <Projects />
    </main>
  );
};

export default IndexPage;
