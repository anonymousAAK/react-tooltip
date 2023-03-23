// src/App.js
import React from "react";
import "./App.css";
import Tooltip from "./components/Tooltip";

function App() {
  return (
    <div className="App">
      <Tooltip position="top" content="Top Tooltip">
        <button>Hover me (Top)</button>
      </Tooltip>
      <Tooltip position="bottom" content="Bottom Tooltip">
        <button>Hover me (Bottom)</button>
      </Tooltip>
      <Tooltip position="left" content="Left Tooltip">
        <button>Hover me (Left)</button>
      </Tooltip>
      <Tooltip position="right" content="Right Tooltip">
        <button>Hover me (Right)</button>
      </Tooltip>
    </div>
  );
}

export default App;
