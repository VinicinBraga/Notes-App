import * as React from "react";
import "./radioButton.css";

export default function RadioButtons({ handleItemChange, selecteditemValue }) {
  return (
    <div className="radioOptions">
      <input
        type="radio"
        checked={selecteditemValue === "all"}
        onChange={(e) => handleItemChange(e._id)}
      />
      <span>Todos</span>
      <input
        type="radio"
        checked={selecteditemValue === "true"}
        onChange={(e) => handleItemChange(e._id)}
      />
      <span>Prioridade</span>
      <input
        type="radio"
        checked={selecteditemValue === "false"}
        onChange={(e) => handleItemChange(e._id)}
      />
      <span>Normal</span>
    </div>
  );
}
