import BoxMid from "./BoxMid";

function BoxLarge(props) {
  return (
    <>
      <div className="box-area">
        <div className="title">Large box</div>
        <BoxMid sq1={props.sq1}></BoxMid>
      </div>
    </>
  );
}

export default BoxLarge;
