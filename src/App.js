import React from "react";
import Welcome from "./components/Welcome";
import './App.css';
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
        <NavBar/>
        <Welcome/>
    </div>
  );
}

export default App;
