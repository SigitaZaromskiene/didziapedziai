function Sq(props) {
  return (
    <div className="sq-bin">
      <div
        className="sq"
        style={{
          backgroundColor: props.s.color,
          transform: props.index % 2 === 0 ? "rotate(-2deg)" : null,
        }}
      >
        {props.index}
      </div>
    </div>
  );
}

export default Sq;
