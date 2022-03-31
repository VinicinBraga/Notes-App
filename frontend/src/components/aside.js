import React from "react";
import "./aside.css";

export default function Aside() {
  return (
    <>
      <aside>
        <strong>Caderno de Notas</strong>
        <form>
          <div className="input-block">
            <label htmlFor="title">Titulo da anotação</label>
            <input />
          </div>

          <div className="input-block">
            <label htmlFor="nota">Anotações</label>
            <textarea></textarea>
          </div>
          <button type="submit">Salvar</button>
        </form>
      </aside>
    </>
  );
}
