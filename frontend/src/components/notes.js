import React from "react";
import "./notes.css";

export default function notes({ data }) {
  return (
    <>
      <li className="notepad-infos">
        <div>
          <strong>{data.title}</strong>
          <div>x</div>
        </div>
        <textarea defaultValue={data.notes}></textarea>
        <span>!</span>
      </li>
    </>
  );
}
