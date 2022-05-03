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
        checked={selectedValue === "all"}
        {...controlProps("a")}
        sx={{
          color: "#dadada",
          "&.Mui-checked": {
            color: "#09b1ff",
          },
        }}
      />
      <span>Todos</span>
      <Radio
        checked={selectedValue === "true"}
        {...controlProps("b")}
        sx={{
          color: "#dadada",
          "&.Mui-checked": {
            color: "#09b1ff",
          },
        }}
      />
      <span>Prioridade</span>
      <Radio
        checked={selectedValue === "false"}
        {...controlProps("c")}
        sx={{
          color: "#dadada",
          "&.Mui-checked": {
            color: "#09b1ff",
          },
        }}
      />
      <span>Normal</span>
    </div>
  );
}
