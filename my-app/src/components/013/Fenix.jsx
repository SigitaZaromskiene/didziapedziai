import { useEffect } from "react";
import Timer from "./Timer";

function Fenix() {
  useEffect(() => {
    console.log("alive");
    return () => {
      console.log("dead");
    };
  }, []);
  return (
    <div>
      <h2>FENIX</h2>
    </div>
  );
}

export default Fenix;
