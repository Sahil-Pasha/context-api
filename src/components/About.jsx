import React, { useContext } from "react";
import noteContext from "../Context/notes/noteContext";

function About(props) {
  const items = useContext(noteContext);
  return (
    <div>
      <div>
        <h1>This is About {items.name}</h1>
      </div>
    </div>
  );
}

export default About;
