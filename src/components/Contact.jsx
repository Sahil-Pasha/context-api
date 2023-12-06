import React, { useContext } from "react";
import noteContext from "../Context/notes/noteContext";

function Contact() {
  const items = useContext(noteContext);

  return (
    <div>
      <h1>This is contact page and my contact number is {items.contact}</h1>
    </div>
  );
}

export default Contact;
