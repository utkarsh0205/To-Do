// App.js
import React from "react";
import "./style/App.css";
import LeftContainer from "./components/LeftContainer";
import RightContainer from "./components/RightContainer";

function App() {
  return (
    <div className="app-container">
      <LeftContainer />
      <RightContainer />
    </div>
  );
}

export default App;
