import "./App.scss";
import BoxLarge from "./components/018/BoxLarge";
import { useState } from "react";
import rand from "./functions/rand";
import ContextData from "./components/018/ContextData";

function App() {
  const [sq1, setSq1] = useState([]);
  const [sq2, setSq2] = useState([]);

  const addHandler = () => {
    setSq1((s) => [rand(100, 999), ...s]);
  };

  const addHandler1 = () => {
    setSq2((s) => [rand(100, 999), ...s]);
  };
  return (
    <ContextData.Provider value={sq2}>
      <div className="App">
        <header className="App-header">
          <h1>Context</h1>
          <BoxLarge sq1={sq1} />
          <button className="coral" onClick={addHandler}>
            Add
          </button>
          <button className="coral" onClick={addHandler1}>
            Add
          </button>
        </header>
      </div>
    </ContextData.Provider>
  );
}

export default App;
