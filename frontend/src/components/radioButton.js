import * as React from "react";
import Radio from "@mui/material/Radio";
import "./radioButton.css";

export default function ColorRadioButtons() {
  const [selectedValue, setSelectedValue] = React.useState("a");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  const controlProps = (item) => ({
    checked: selectedValue === item,
    onChange: handleChange,
    value: item,
    name: "color-radio-button-demo",
    inputProps: { "aria-label": item },
  });

  return (
    <div className="radioOptions">
      <Radio
        {...controlProps("a")}
        sx={{
          color: "#ffd3ca",
          "&.Mui-checked": {
            color: "#eb8f7a",
          },
        }}
      />
      <span>Todos</span>
      <Radio
        {...controlProps("b")}
        sx={{
          color: "#ffd3ca",
          "&.Mui-checked": {
            color: "#eb8f7a",
          },
        }}
      />
      <span>Prioridade</span>
      <Radio
        {...controlProps("c")}
        sx={{
          color: "#ffd3ca",
          "&.Mui-checked": {
            color: "#eb8f7a",
          },
        }}
      />
      <span>Normal</span>
    </div>
  );
}
