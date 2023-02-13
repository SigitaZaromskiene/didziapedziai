function Click() {
  const doSomething = () => {
    return function () {
      console.log("blabla");
    };
  };

  const go = () => {
    console.log("redred");
  };
  return (
    <div>
      <button className="coral" onClick={doSomething()}>
        Click me
      </button>
      <button className="blue" onClick={() => console.log("blue")}>
        Click me
      </button>
      <button className="pink" onClick={go}>
        Click me
      </button>
    </div>
  );
}

export default Click;
