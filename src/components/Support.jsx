import React, { useContext } from "react";
import noteContext from "../Context/notes/noteContext";

function Support() {
  const values = useContext(noteContext);
  return (
    <div>
      <h1>This is the Support page and {values.support}</h1>
    </div>
  );
}

export default Support;
