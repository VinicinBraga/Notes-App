import React from "react";
import Notes from "../components/notes";
import "./main.css";

export default function main() {
  return (
    <>
      <main>
        <ul>
          <Notes />
          <Notes />
          <Notes />
          <Notes />
          <Notes />
          <Notes />
        </ul>
      </main>
    </>
  );
}