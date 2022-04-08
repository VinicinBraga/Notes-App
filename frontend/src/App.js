import React, { useState, useEffect } from "react";
import api from "./services/api";

import "./global.css";
import "./app.css";

import Aside from "./components/aside";
import Main from "./components/main";

function App() {
  const [title, setTitle] = useState("");
  const [notes, setNotes] = useState("");
  const [allNotes, setAllNotes] = useState([]);

  useEffect(() => {
    async function getAllNotes() {
      const response = await api.get("/annotations");
      setAllNotes(response.data);
    }
    getAllNotes();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    const response = await api.post("/annotations", {
      title,
      notes,
      priority: false,
    });
    setTitle("");
    setNotes("");
    setAllNotes([...allNotes, response.data]);
  }

  useEffect(() => {
    function enebleSubmitButton() {
      let btn = document.getElementById("btn_submit");
      btn.style.background = "#ffd3ca";
      if (title && notes) {
        btn.style.background = "#eb8f7a";
      }
    }
    enebleSubmitButton();
  }, [title, notes]);

  return (
    <div id="app">
      <Aside
        title={title}
        setTitle={setTitle}
        notes={notes}
        setNotes={setNotes}
        handleSubmit={handleSubmit}
      />
      <Main allNotes={allNotes} />
    </div>
  );
}

export default App;
