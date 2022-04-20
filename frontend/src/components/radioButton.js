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
          color: "#ade5ff",
          "&.Mui-checked": {
            color: "#09b1ff",
          },
        }}
      />
      <span>Todos</span>
      <Radio
        {...controlProps("b")}
        sx={{
          color: "#ade5ff",
          "&.Mui-checked": {
            color: "#09b1ff",
          },
        }}
      />
      <span>Prioridade</span>
      <Radio
        {...controlProps("c")}
        sx={{
          color: "#ade5ff",
          "&.Mui-checked": {
            color: "#09b1ff",
          },
        }}
      />
      <span>Normal</span>
    </div>
  );
}
