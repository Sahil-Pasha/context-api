import React from "react";
import NoteContext from "./noteContext";

export const NoteState = (props) => {
  const state = {
    name: "farhan",
    add: "Hyderabad",
    contact: "7503814166",
    support: "For any support mail us on support@turkfarhan.com",
  };
  return (
    <NoteContext.Provider value={state}>{props.children}</NoteContext.Provider>
  );
};
