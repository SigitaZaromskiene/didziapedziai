"bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";

import "./App.scss";
import Count from "./components/013/Count";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Count />
      </header>
    </div>
  );
}

export default App;
