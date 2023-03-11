import React from "react";

function Note(props) {
  return (
    <div className="note">
      <h1>{props.titles}</h1>
      <p>{props.contentoo}</p>
    </div>
  );
}

export default Note;
