import React, { useState } from "react";
import { AiTwotoneDelete, AiOutlineExclamationCircle } from "react-icons/ai";
import "./notes.css";
import "./notes-priority.css";
import api from "../services/api";

export default function Notes({ data, handleDelete, handlePriority }) {
  const [changedNote, setChangedNote] = useState("");

  async function handleEdit(e, priority) {
    e.style.cursor = "text";
    e.style.borderRadius = "5px";
    if (priority) {
      e.style.boxShadow = "0 0 5px white";
    } else {
      e.style.boxShadow = "0 0 5px gray";
    }
  }

  async function handleChangedNote(e, notes) {
    e.style.cursor = "pointer";
    e.style.boxShadow = "none";

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
            <AiTwotoneDelete size="20" onClick={() => handleDelete(data._id)} />
          </div>
        </div>
        <textarea
          defaultValue={data.notes}
          onClick={(e) => handleEdit(e.target, data.priority)}
          onChange={(e) => setChangedNote(e.target.value)}
          onBlur={(e) => handleChangedNote(e.target, data.notes)}
        />
        <span>
          <AiOutlineExclamationCircle
            size="20"
            onClick={() => handlePriority(data._id)}
          />
        </span>
      </li>
    </>
  );
}
