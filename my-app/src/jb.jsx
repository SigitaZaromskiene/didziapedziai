import "./App.scss";
import rand from "./functions/rand";
import Animal from "./components/jb/Animal";

function App() {
  const el = <ul>Labas {rand(11, 5)}</ul>;

  const labas = <i>Labas</i>;

  return (
    <div className="App">
      <header className="App">
        <h1>
          racoon number:{8 + 5}
          {labas}
        </h1>
        <Animal animalName="Racoon" h1Class="blue"></Animal>
        <Animal animalName="Turtle" h1Class="green"></Animal>
        {el}
      </header>
    </div>
  );
}

export default App;
