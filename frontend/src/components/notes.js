import React from "react";
import "./notes.css";

import { AiTwotoneDelete, AiOutlineExclamationCircle } from "react-icons/ai";

export default function notes({ data }) {
  return (
    <>
      <li className="notepad-infos">
        <div>
          <strong>{data.title}</strong>
          <div>
            <AiTwotoneDelete size="20" />
          </div>
        </div>
        <textarea defaultValue={data.notes}></textarea>
        <span>
          <AiOutlineExclamationCircle size="20" />
        </span>
      </li>
    </>
  );
}
