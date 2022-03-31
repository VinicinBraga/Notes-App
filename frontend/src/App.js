import React from "react";
import "./global.css";
import "./app.css";

import Aside from "./components/aside";
import Main from "./components/main";

function App() {
  return (
    <div id="app">
      <Aside />
      <Main />
    </div>
  );
}

export default App;
