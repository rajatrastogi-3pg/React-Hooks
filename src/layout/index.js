import React from "react";
import { Link } from "react-router-dom";

const Layout = ({
  ClassComponent,
  FunctionalComponent,
  heading,
  next,
  previous
}) => (
  <div style={{ height: "100%" }}>
    <div style={{ display: "flex", justifyContent: "space-between" }}>
      {previous && <Link to={previous}>Previous</Link>}
      <h2>{heading}</h2>
      {next && <Link to={next}>Next</Link>}
    </div>
    <div style={{ display: "flex", height: "inherit" }}>
      {ClassComponent && (
        <div
          style={{
            borderRight: "4px solid black",
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <h2>Class Component</h2>
          <ClassComponent />
        </div>
      )}
      {FunctionalComponent && (
        <div
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
            alignItems: "center"
          }}
        >
          <h2>Functional Component</h2>
          <FunctionalComponent />
        </div>
      )}
    </div>
  </div>
);

export default Layout;
