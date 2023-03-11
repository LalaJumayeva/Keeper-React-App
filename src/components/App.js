import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App() {
  return (
    <div>
      <Header />
      {notes.map((lalala) => (
        <Note
          key={lalala.key}
          titles={lalala.title}
          contentoo={lalala.content}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
