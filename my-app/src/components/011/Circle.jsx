import { useState } from "react";
function Circle(props) {
  const [count, setCount] = useState(0);

  return (
    <>
      <button className="coral" onClick={() => setCount((count) => count + 1)}>
        Plus 1
      </button>
      <div className="circle">
        {props.children.map((n, i) => ({
          ...n,
          props: { ...n.props, count: count + i },
        }))}
      </div>
    </>
  );
}

export default Circle;
