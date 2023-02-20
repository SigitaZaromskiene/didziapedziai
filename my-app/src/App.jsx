import "bootstrap/dist/css/bootstrap.min.css";

import "./App.scss";
import Circle from "./components/011/Circle";
import Number from "./components/011/Number";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Circle>
          <Number type="n1"></Number>
          <Number type="n2"></Number>
          <Number type="n3"></Number>
          <Number type="n4"></Number>
        </Circle>
      </header>
    </div>
  );
}

export default App;
