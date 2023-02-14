import "bootstrap/dist/css/bootstrap.min.css";
import "./App.scss";
import { useState } from "react";
import Sq from "./components/009/Sq";
import randomColor from "./functions/randomColor";
import { v4 as uuidv4 } from "uuid";

function App() {
  const [sq, setSq] = useState([]);

  const addSq = () => {
    setSq((prevState) => [
      ...prevState,
      { id: uuidv4(), color: randomColor() },
    ]);
  };

  const delSq = (id) => {
    setSq((prevState) => prevState.filter((s) => s.id !== id));
  };
  // const [sqColot, setSqColor] = useState("green");
  // const [count, setCount] = useState(0);

  // const changeColor = () => {
  //   setSqColor("red");
  // };

  // const changeColor2 = () => {
  //   setSqColor((prevState) => (prevState === "red" ? "purple" : null));
  // };

  // const addOne = () => {
  //   setCount((prevState) => prevState + 1);
  // };

  return (
    <div className="App">
      <header className="App">
        <div className="sq-bin">
          {/* {sq.map((s, i) => (
            <Sq key={i} s={s} i={i}></Sq>
          ))} */}
          {sq.map((s, i) => (
            <div key={i}></div>
          ))}
          onClick={() => delSq(sq.id)}
          <button className="red" onClick={addSq}>
            Add sq
          </button>
          {/* <div className="sq-bin">
          <div className="sq" style={{ backgroundColor: sqColot }}></div>

          <div className="sq">{count}</div>
        </div>
        <button className="blue" onClick={changeColor}>
          CHANGE
        </button>
        <button className="pink" onClick={addOne}>
          ADD ONE
        </button>
        <button className="pink" onClick={changeColor2}>
          CHANGE 2
        </button> */}
        </div>
      </header>
    </div>
  );
}

export default App;
