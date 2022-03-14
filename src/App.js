import * as React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./view/Home";

const App = () => {
  return (
    <div className="App">
      <h1>Welcome to React Router!</h1>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<div> About</div>} />
      </Routes>
    </div>
  );
}

export default App;