import React, { useContext } from "react";
import noteContext from "../Context/notes/noteContext";

function Home() {
  const state = useContext(noteContext);
  return (
    <div>
      <h1>This is home component. My home is in {state.add}</h1>
    </div>
  );
}

export default Home;
