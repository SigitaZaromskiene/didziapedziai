import "./App.scss";
import { useState } from "react";
import useAddOne from "./components/019/useAddOne";
import useLocalStorage from "./components/019/useLocalStorage";
import { useAdd23 } from "./components/019/useAdd23";

function App() {
  const [count1, setCount1] = useState(1);
  const [count2, setCount2] = useAddOne(10);
  const [count3, setCount3] = useLocalStorage(24, "count123");
  const [count4, setCount4] = useAdd23(23);
  return (
    <div className="App">
      <header className="App-header">
        <h1>
          <span style={{ color: "pink", padding: "10px" }}>{count1}</span>
          <span style={{ color: "gray", padding: "10px" }}>{count2}</span>
          <span style={{ color: "coral", padding: "10px" }}>{count3}</span>
          <span style={{ color: "crimson", padding: "10px" }}>{count4}</span>
        </h1>
        <button className="red" onClick={() => setCount1((c) => c + 1)}>
          +1
        </button>
        <button className="red" onClick={() => setCount2((c) => c + 11)}>
          +11
        </button>
        <button className="coral" onClick={() => setCount3((c) => c - 17)}>
          -17
        </button>
        <button className="crimson" onClick={() => setCount4((c) => !c)}>
          +23
        </button>
      </header>
    </div>
  );
}

export default App;
