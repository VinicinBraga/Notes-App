import React from "react";
import Notes from "../components/notes";
import "./main.css";

export default function main({ allNotes, handleDelete, handlePriority }) {
  return (
    <>
      <main>
        <ul>
          {allNotes.map((data) => (
            <Notes
              data={data}
              handleDelete={handleDelete}
              handlePriority={handlePriority}
            />
          ))}
        </ul>
      </main>
    </>
  );
}
