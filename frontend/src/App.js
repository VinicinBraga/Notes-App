import React, { useState, useEffect } from "react";
import api from "./services/api";

import "./global.css";
import "./app.css";

import Aside from "./components/aside";
import Main from "./components/main";

function App() {
  const [selectedValue, setSelectedValue] = useState("all");
  const [title, setTitle] = useState("");
  const [notes, setNotes] = useState("");
  const [allNotes, setAllNotes] = useState([]);

  useEffect(() => {
    getAllNotes();
  }, []);

  async function getAllNotes() {
    const response = await api.get("/annotations");
    setAllNotes(response.data);
  }

  async function loadNotes(option) {
    const params = { priority: option };
    const response = await api.get(`/priorities`, { params });

    if (response) {
      setAllNotes(response.data);
    }
  }

  function handleChange(e) {
    setSelectedValue(e.value);
    if (e.checked && e.value !== "all") {
      loadNotes(e.value);
    } else {
      getAllNotes();
    }
  }

  async function handleDelete(id) {
    const deleteNote = await api.delete(`/annotations/${id}`);
    if (deleteNote) {
      setAllNotes(allNotes.filter((note) => note._id !== id));
    }
  }

  async function handlePriority(id) {
    const changePriority = await api.post(`/priorities/${id}`);
    if (changePriority) {
      getAllNotes();
    }
  }

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

  return (
    <div id="app">
      <Aside
        title={title}
        setTitle={setTitle}
        notes={notes}
        setNotes={setNotes}
        handleSubmit={handleSubmit}
        selectedValue={selectedValue}
        handleChange={handleChange}
      />
      <Main
        allNotes={allNotes}
        handleDelete={handleDelete}
        handlePriority={handlePriority}
      />
    </div>
  );
}

export default App;
