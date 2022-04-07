import React from "react";
import "./notes.css";

export default function notes() {
  return (
    <>
      <li className="notepad-infos">
        <div>
          <strong>Fazer Compras</strong>
          <div>x</div>
        </div>
        <textarea defaultValue="bla bla bla bla bla bla"></textarea>
        <span>!</span>
      </li>
    </>
  );
}
