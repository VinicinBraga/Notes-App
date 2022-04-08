import React from "react";
import "./aside.css";
import RadioButtons from "./radioButton";

export default function Aside({
  title,
  setTitle,
  notes,
  setNotes,
  handleSubmit,
}) {
  return (
    <>
      <aside>
        <strong>Caderno de Notas</strong>
        <form onSubmit={handleSubmit}>
          <div className="input-block">
            <label htmlFor="title">Titulo da anotação</label>
            <input
              required
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>

          <div className="input-block">
            <label htmlFor="nota">Anotações</label>
            <textarea
              required
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            />
          </div>
          <button id="btn_submit" type="submit">
            Salvar
          </button>
        </form>
        <RadioButtons />
      </aside>
    </>
  );
}
