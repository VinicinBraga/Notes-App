import React, { useState } from "react";
import { AiTwotoneDelete, AiOutlineExclamationCircle } from "react-icons/ai";
import "./notes.css";
import "./notes-priority.css";
import api from "../services/api";

export default function Notes({ data }) {
  const [changedNote, setChangedNote] = useState("");

  async function handleChangedNote(e, notes) {
    if (changedNote && changedNote !== notes) {
      await api.post(`/contents/${data._id}`, {
        notes: changedNote,
      });
    }
  }
  return (
    <>
      <li
        className={data.priority ? "notepad-infos-priority" : "notepad-infos"}
      >
        <div>
          <strong>{data.title}</strong>
          <div>
            <AiTwotoneDelete size="20" />
          </div>
        </div>
        <textarea
          defaultValue={data.notes}
          onChange={(e) => setChangedNote(e.target.value)}
          onBlur={(e) => handleChangedNote(e.target, data.notes)}
        />
        <span>
          <AiOutlineExclamationCircle size="20" />
        </span>
      </li>
    </>
  );
}
