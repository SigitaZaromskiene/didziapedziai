function Number(props) {
  return (
    <>
      <div className={"circle-number " + props.type}>{props.count}</div>;
    </>
  );
}

export default Number;
