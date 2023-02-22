import { useState, useRef } from "react";
import Fenix from "./Fenix";
import { useEffect } from "react";

function Count() {
  console.log("Counter function");

  const a = useRef(1);
  const addToOne = () => {
    console.log(++a.current);
  };

  const [count, setCount] = useState(10);

  useEffect(() => {
    console.log("ccccccccccc");
  }, [count]);

  const add = () => {
    setCount((prev) => prev + 1);
  };

  const minus = () => {
    setCount((prev) => prev - 1);
  };

  return (
    <>
      <h1>{count}</h1>
      {count > 15 ? <Fenix></Fenix> : null}
      <div className="sq-bin"></div>
      <button className="blue" onClick={add}>
        +
      </button>
      <button className="red" onClick={minus}>
        -
      </button>
      <button className="pink" onClick={addToOne}>
        +1
      </button>
    </>
  );
}

export default Count;
