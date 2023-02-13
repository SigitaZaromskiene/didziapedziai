import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import AnimalLi from "./components/008/AnimalLi";
import Click from "./components/008/Click";
import { useState } from "react";

const data = [
  { id: 1, animal: "Racoon", color: "crimson", bold: true },
  { id: 4, animal: "Fox", color: "coral", bold: true },
  { id: 17, animal: "Moose", color: "red", bold: false },
  { id: 1, animal: "Unicorn", color: "yellow", bold: true },
];

function App() {
  const [state, setState] = useState("start value");
  return (
    <div className="App">
      <header className="App">
        <Click></Click>
        <div className="card">
          <div className="card-header">
            <h2>Animals list</h2>
          </div>

          <ul className="list-group list-group-flush">
            {data.map((a, i) => (
              <AnimalLi key={a.id} animal={a} index={i}></AnimalLi>
            ))}
          </ul>
        </div>
      </header>
    </div>
  );
}

export default App;
