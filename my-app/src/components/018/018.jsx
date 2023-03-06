import "./App.scss";
import { useState } from "react";

function App() {
  const [count1, setCount1] = useState(1);
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          <span style={{ color: "pink" }}>{count1}</span>
        </h1>
        <button className="red" onClick={() => setCount1((c) => c + 1)}>
          +1
        </button>
      </header>
    </div>
  );
}

export default App;
